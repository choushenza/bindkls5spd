import { isSupabaseConfigured, LEADERBOARD_TABLE, supabase } from '../lib/supabase';

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  totalCorrect: number;
  totalQuestions: number;
  letterGrade: string;
  predicate: string;
  createdAt: string;
}

export interface NewLeaderboardEntry {
  name: string;
  score: number;
  totalCorrect: number;
  totalQuestions: number;
  letterGrade: string;
  predicate: string;
}

export interface LeaderboardFetchResult {
  entries: LeaderboardEntry[];
  source: 'supabase' | 'local';
  error?: string;
}

export interface LeaderboardSaveResult {
  entry: LeaderboardEntry;
  source: 'supabase' | 'local';
  error?: string;
}

const LOCAL_STORAGE_KEY = 'ehc_leaderboard_local';
const MAX_FETCHED_ROWS = 200;

/** Rapikan nama: spasi ganda dihapus, spasi tepi dibuang, maksimal 30 karakter. */
export function normalizeName(rawName: string): string {
  return rawName.replace(/\s+/g, ' ').trim().slice(0, 30);
}

export function validateName(rawName: string): string | null {
  const name = normalizeName(rawName);
  if (name.length === 0) return 'Nama belum diisi.';
  if (name.length < 2) return 'Nama minimal 2 karakter.';
  if (!/[a-zA-Z\u00C0-\u024F]/.test(name)) return 'Nama harus mengandung huruf.';
  return null;
}

function mapRow(row: Record<string, unknown>): LeaderboardEntry {
  return {
    id: String(row.id ?? ''),
    name: String(row.name ?? ''),
    score: Number(row.score ?? 0),
    totalCorrect: Number(row.total_correct ?? row.totalCorrect ?? 0),
    totalQuestions: Number(row.total_questions ?? row.totalQuestions ?? 60),
    letterGrade: String(row.letter_grade ?? row.letterGrade ?? ''),
    predicate: String(row.predicate ?? ''),
    createdAt: String(row.created_at ?? row.createdAt ?? new Date().toISOString())
  };
}

function readLocalEntries(): LeaderboardEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
      .map(mapRow)
      .filter((entry) => entry.name.length > 0);
  } catch {
    return [];
  }
}

function writeLocalEntries(entries: LeaderboardEntry[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries.slice(0, MAX_FETCHED_ROWS)));
  } catch {
    // Penyimpanan penuh / mode privat: abaikan, data tetap tampil di sesi ini.
  }
}

function isBetter(candidate: LeaderboardEntry, current: LeaderboardEntry): boolean {
  if (candidate.score !== current.score) return candidate.score > current.score;
  return new Date(candidate.createdAt).getTime() < new Date(current.createdAt).getTime();
}

/** Ambil satu hasil terbaik per nama, lalu urutkan skor tertinggi. */
export function buildRanking(entries: LeaderboardEntry[], limit = 50): LeaderboardEntry[] {
  const bestByName = new Map<string, LeaderboardEntry>();

  for (const entry of entries) {
    const key = entry.name.toLocaleLowerCase('id-ID');
    const current = bestByName.get(key);
    if (!current || isBetter(entry, current)) {
      bestByName.set(key, entry);
    }
  }

  return [...bestByName.values()]
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.totalCorrect !== a.totalCorrect) return b.totalCorrect - a.totalCorrect;
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    })
    .slice(0, limit);
}

/** Posisi pemain pada papan peringkat (1-based), atau null jika belum masuk. */
export function findPlayerRank(entries: LeaderboardEntry[], playerName: string): number | null {
  const target = normalizeName(playerName).toLocaleLowerCase('id-ID');
  if (!target) return null;
  const index = entries.findIndex((entry) => entry.name.toLocaleLowerCase('id-ID') === target);
  return index >= 0 ? index + 1 : null;
}

function saveToLocal(entry: LeaderboardEntry): void {
  const existing = readLocalEntries();
  const remaining = existing.filter(
    (item) => item.name.toLocaleLowerCase('id-ID') !== entry.name.toLocaleLowerCase('id-ID')
  );
  writeLocalEntries([entry, ...remaining]);
}

export async function fetchLeaderboard(): Promise<LeaderboardFetchResult> {
  const localEntries = readLocalEntries();

  if (supabase) {
    const { data, error } = await supabase
      .from(LEADERBOARD_TABLE)
      .select('id, name, score, total_correct, total_questions, letter_grade, predicate, created_at')
      .order('score', { ascending: false })
      .order('created_at', { ascending: true })
      .limit(MAX_FETCHED_ROWS);

    if (!error) {
      const entries = (data ?? []).map((row) => mapRow(row as Record<string, unknown>));
      return { entries: buildRanking(entries), source: 'supabase' };
    }

    return {
      entries: buildRanking(localEntries),
      source: 'local',
      error: error.message
    };
  }

  return { entries: buildRanking(localEntries), source: 'local' };
}

export async function saveLeaderboardScore(payload: NewLeaderboardEntry): Promise<LeaderboardSaveResult> {
  const cleanName = normalizeName(payload.name);
  const fallbackEntry: LeaderboardEntry = {
    id:
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `local-${Date.now()}`,
    name: cleanName,
    score: payload.score,
    totalCorrect: payload.totalCorrect,
    totalQuestions: payload.totalQuestions,
    letterGrade: payload.letterGrade,
    predicate: payload.predicate,
    createdAt: new Date().toISOString()
  };

  // Selalu simpan salinan lokal agar hasil tidak hilang bila koneksi bermasalah.
  saveToLocal(fallbackEntry);

  if (supabase) {
    const { data, error } = await supabase
      .from(LEADERBOARD_TABLE)
      .insert({
        name: cleanName,
        score: payload.score,
        total_correct: payload.totalCorrect,
        total_questions: payload.totalQuestions,
        letter_grade: payload.letterGrade,
        predicate: payload.predicate
      })
      .select('id, name, score, total_correct, total_questions, letter_grade, predicate, created_at')
      .single();

    if (!error && data) {
      return { entry: mapRow(data as Record<string, unknown>), source: 'supabase' };
    }

    return { entry: fallbackEntry, source: 'local', error: error?.message };
  }

  return { entry: fallbackEntry, source: 'local' };
}

export function isSupabaseLeaderboardActive(): boolean {
  return isSupabaseConfigured;
}
