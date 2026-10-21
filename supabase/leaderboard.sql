-- ============================================================
-- Tabel Leaderboard - Eksplorasi Hobi Cilik (Kelas 5 SD)
-- Jalankan file ini sekali di Supabase:
-- Dashboard > SQL Editor > New query > paste > Run
-- ============================================================

create table if not exists public.leaderboard (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  score integer not null,
  total_correct integer not null default 0,
  total_questions integer not null default 60,
  letter_grade text not null default '',
  predicate text not null default '',
  created_at timestamptz not null default now(),
  constraint leaderboard_name_length check (char_length(name) between 2 and 30),
  constraint leaderboard_score_range check (score between 0 and 100),
  constraint leaderboard_correct_range check (
    total_correct >= 0 and total_questions > 0 and total_correct <= total_questions
  )
);

-- Mempercepat pengurutan papan peringkat.
create index if not exists leaderboard_score_idx
  on public.leaderboard (score desc, created_at asc);

-- Aktifkan Row Level Security.
alter table public.leaderboard enable row level security;

-- Semua pengunjung boleh membaca papan peringkat.
drop policy if exists "leaderboard_read_all" on public.leaderboard;
create policy "leaderboard_read_all"
  on public.leaderboard
  for select
  to anon, authenticated
  using (true);

-- Siswa (anon) boleh menambah skor baru, tetapi tidak boleh mengubah/menghapus.
drop policy if exists "leaderboard_insert_anon" on public.leaderboard;
create policy "leaderboard_insert_anon"
  on public.leaderboard
  for insert
  to anon, authenticated
  with check (
    char_length(name) between 2 and 30
    and score between 0 and 100
    and total_correct between 0 and total_questions
  );

-- (Opsional) Bersihkan data contoh / reset papan peringkat:
-- truncate table public.leaderboard;
