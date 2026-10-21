import React, { useCallback, useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Crown,
  Loader2,
  Medal,
  RefreshCw,
  Trophy,
  UserRound,
  WifiOff
} from 'lucide-react';
import { soundEffects } from '../utils/audio';
import {
  fetchLeaderboard,
  findPlayerRank,
  isSupabaseLeaderboardActive,
  normalizeName,
  type LeaderboardEntry
} from '../services/leaderboard';

interface LeaderboardViewProps {
  playerName?: string;
  onBack: () => void;
  onStartQuiz: () => void;
}

const PODIUM_STYLES = [
  {
    wrapper: 'border-amber-300 bg-gradient-to-b from-amber-50 to-white',
    badge: 'bg-amber-400 text-amber-950',
    icon: 'text-amber-500',
    label: 'Juara 1'
  },
  {
    wrapper: 'border-slate-300 bg-gradient-to-b from-slate-100 to-white',
    badge: 'bg-slate-300 text-slate-800',
    icon: 'text-slate-400',
    label: 'Juara 2'
  },
  {
    wrapper: 'border-orange-300 bg-gradient-to-b from-orange-50 to-white',
    badge: 'bg-orange-300 text-orange-950',
    icon: 'text-orange-500',
    label: 'Juara 3'
  }
];

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  playerName = '',
  onBack,
  onStartQuiz
}) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [source, setSource] = useState<'supabase' | 'local'>('local');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadLeaderboard = useCallback(async (refreshing = false) => {
    if (refreshing) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const result = await fetchLeaderboard();
    setEntries(result.entries);
    setSource(result.source);
    setErrorMessage(result.error ?? null);
    setIsLoading(false);
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    void loadLeaderboard();
  }, [loadLeaderboard]);

  const playerRank = findPlayerRank(entries, playerName);
  const podium = entries.slice(0, 3);
  const rest = entries.slice(3);

  const isCurrentPlayer = (entry: LeaderboardEntry) =>
    Boolean(playerName) &&
    normalizeName(entry.name).toLocaleLowerCase('id-ID') ===
      normalizeName(playerName).toLocaleLowerCase('id-ID');

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-pop pb-12">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white p-6 sm:p-8 shadow-lg shadow-amber-200">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 border border-white/20 rounded-full text-[11px] font-bold uppercase tracking-wide mb-2">
              <Trophy className="w-3.5 h-3.5 text-amber-100" />
              <span>Papan Peringkat Kelas</span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight">
              Leaderboard Eksplorasi Hobi
            </h1>
            <p className="text-xs sm:text-sm text-amber-50 font-medium mt-1 max-w-md">
              Kumpulan nilai terbaik dari seluruh siswa. Kumpulkan skor setinggi mungkin dan jadilah juara kelas!
            </p>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              onStartQuiz();
            }}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-amber-800 font-display font-black text-sm rounded-2xl shadow-md hover:bg-amber-50 cursor-pointer active:scale-95 transition-all"
          >
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Ikuti Tantangan</span>
          </button>
        </div>
      </div>

      {/* Current player summary */}
      {playerName && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 rounded-2xl bg-white border border-amber-200 shadow-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
              <UserRound className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-slate-500 block">Pemain aktif</span>
              <span className="font-display font-bold text-sm text-slate-900 truncate block">
                {normalizeName(playerName)}
              </span>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            {playerRank ? `Peringkat kamu: #${playerRank}` : 'Belum masuk peringkat'}
          </span>
        </div>
      )}

      {/* Status sumber data */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] font-semibold text-slate-500">
        <span className="flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${
              source === 'supabase' ? 'bg-emerald-500' : 'bg-amber-500'
            }`}
          />
          {source === 'supabase'
            ? 'Terhubung ke Supabase (online)'
            : 'Mode penyimpanan lokal (perangkat ini)'}
        </span>

        <button
          onClick={() => {
            soundEffects.playClick();
            void loadLeaderboard(true);
          }}
          disabled={isRefreshing}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-amber-800 hover:border-amber-300 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>Muat ulang</span>
        </button>
      </div>

      {/* Error / info */}
      {errorMessage && (
        <div className="flex items-start gap-2 p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs leading-relaxed">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
          <div>
            <strong className="block">Leaderboard online belum dapat diakses.</strong>
            <span>
              Skor sementara disimpan di perangkat ini. Pastikan tabel Supabase sudah dibuat.
            </span>
          </div>
        </div>
      )}

      {!isSupabaseLeaderboardActive() && (
        <div className="flex items-start gap-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-600 text-xs leading-relaxed">
          <WifiOff className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
          <span>
            Kredensial Supabase belum diatur. Isi <code>VITE_SUPABASE_URL</code> dan{' '}
            <code>VITE_SUPABASE_ANON_KEY</code> pada file <code>.env</code> untuk mengaktifkan
            leaderboard online.
          </span>
        </div>
      )}

      {/* Loading */}
      {isLoading ? (
        <div className="p-10 rounded-3xl bg-white border border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-500">
          <Loader2 className="w-7 h-7 animate-spin text-amber-500" />
          <span className="text-xs font-semibold">Memuat papan peringkat...</span>
        </div>
      ) : entries.length === 0 ? (
        <div className="p-10 rounded-3xl bg-white border border-dashed border-amber-300 text-center space-y-3">
          <div className="inline-flex p-4 rounded-3xl bg-amber-50 text-amber-500">
            <Trophy className="w-10 h-10" />
          </div>
          <h2 className="font-display font-bold text-lg text-slate-900">Belum ada skor</h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Jadilah siswa pertama yang menyelesaikan tantangan 60 soal dan catat namamu di papan
            peringkat!
          </p>
          <button
            onClick={() => {
              soundEffects.playClick();
              onStartQuiz();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white font-display font-bold text-sm rounded-xl hover:bg-amber-600 cursor-pointer transition-colors"
          >
            <Trophy className="w-4 h-4" />
            <span>Mulai Tantangan</span>
          </button>
        </div>
      ) : (
        <>
          {/* Podium Top 3 */}
          {podium.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {podium.map((entry, index) => {
                const style = PODIUM_STYLES[index];
                const highlight = isCurrentPlayer(entry);
                return (
                  <div
                    key={entry.id || `${entry.name}-${index}`}
                    className={`rounded-3xl border-2 p-4 shadow-xs ${style.wrapper} ${
                      highlight ? 'ring-2 ring-emerald-400 ring-offset-2' : ''
                    } ${index === 0 ? 'sm:-translate-y-1' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide ${style.badge}`}
                      >
                        {index === 0 ? (
                          <Crown className="w-3 h-3" />
                        ) : (
                          <Medal className="w-3 h-3" />
                        )}
                        {style.label}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-slate-400">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl bg-white border border-slate-200 ${style.icon}`}>
                        <UserRound className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-display font-black text-sm text-slate-900 truncate block">
                          {entry.name}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 block">
                          {formatDate(entry.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-display font-black text-2xl text-slate-900">
                        {entry.score}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">/ 100</span>
                      <span className="ml-auto text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-md font-mono">
                        {entry.letterGrade || '-'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      Benar {entry.totalCorrect} dari {entry.totalQuestions} soal
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Full ranking table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 border-b border-slate-100 bg-slate-50/70">
              <h2 className="font-display font-bold text-sm text-slate-800 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Peringkat Lengkap</span>
              </h2>
              <span className="text-[11px] font-semibold text-slate-500">
                {entries.length} siswa terbaik
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {entries.map((entry, index) => {
                const highlight = isCurrentPlayer(entry);
                const rank = index + 1;
                return (
                  <div
                    key={entry.id || `${entry.name}-row-${rank}`}
                    className={`flex items-center gap-3 px-4 sm:px-5 py-3 transition-colors ${
                      highlight ? 'bg-emerald-50/80' : 'hover:bg-amber-50/40'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 shrink-0 rounded-xl flex items-center justify-center font-mono font-black text-xs ${
                        rank <= 3
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {rank}
                    </span>

                    <div className="min-w-0 flex-1">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 truncate flex items-center gap-1.5">
                        <span className="truncate">{entry.name}</span>
                        {highlight && (
                          <span className="shrink-0 text-[9px] font-black uppercase text-emerald-700 bg-emerald-200/80 px-1.5 py-0.5 rounded">
                            Kamu
                          </span>
                        )}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        Benar {entry.totalCorrect}/{entry.totalQuestions} • {formatDate(entry.createdAt)}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-display font-black text-base sm:text-lg text-slate-900 block leading-none">
                        {entry.score}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400">
                        Predikat {entry.letterGrade || '-'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {rest.length === 0 && entries.length > 0 && (
            <p className="text-center text-[11px] text-slate-400 font-medium">
              Baru {entries.length} siswa yang masuk papan peringkat. Ajak temanmu ikut tantangan!
            </p>
          )}
        </>
      )}

      <div className="text-center">
        <button
          onClick={() => {
            soundEffects.playClick();
            onBack();
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-amber-800 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>
    </div>
  );
};
