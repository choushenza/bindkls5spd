import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim();

/**
 * Supabase hanya diaktifkan jika kedua variabel environment tersedia.
 * Jika belum diisi, aplikasi otomatis memakai penyimpanan lokal (localStorage)
 * supaya leaderboard tetap bisa dipakai saat pengembangan/offline.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: { persistSession: false, autoRefreshToken: false }
    })
  : null;

export const LEADERBOARD_TABLE = 'leaderboard';
