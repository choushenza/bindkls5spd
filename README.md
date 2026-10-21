<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Eksplorasi Hobi Cilik — Game Bahasa Indonesia Kelas 5 SD

Aplikasi game edukasi interaktif Bab 3: _Ekspresi Diri Melalui Hobi_. Berisi 60 soal terpadu,
Kamus & Laboratorium awalan _me-_, sertifikat prestasi, serta **leaderboard online berbasis Supabase**.

## Sistem Penilaian

- Setiap soal bernilai 1 poin; total 60 soal (20 soal per bagian).
- Skor akhir = `Math.round((jumlah benar / 60) × 100)`.
- **Semua 60 soal benar = skor 100, predikat A.**
- Soal yang tidak dijawab dihitung salah.
- Predikat: A ≥ 85, B ≥ 75, C ≥ 60, D < 60.

## Fitur Leaderboard

- **Input nama wajib**: setiap siswa harus mengisi nama sebelum tantangan dimulai.
- **Penyimpanan online**: skor dikirim otomatis ke tabel `leaderboard` di Supabase setelah 60 soal selesai.
- **Papan peringkat**: menampilkan juara 1–3, peringkat lengkap, dan penanda "Kamu".
- **Satu skor terbaik per nama**: percobaan ulang tidak membuat nama muncul berkali-kali di papan.
- **Fallback lokal**: jika Supabase belum dikonfigurasi/offline, skor disimpan di `localStorage` agar game tetap berjalan.

## 1. Jalankan secara lokal

**Prasyarat:** Node.js 18+

```bash
npm install
npm run dev
```

Aplikasi terbuka di `http://localhost:3000`.

## 2. Hubungkan Supabase

1. Buat project di [supabase.com](https://supabase.com).
2. Buka **SQL Editor**, tempel isi file [`supabase/leaderboard.sql`](./supabase/leaderboard.sql), lalu **Run**.
   File ini membuat tabel `leaderboard`, index, dan kebijakan RLS (baca untuk semua, tambah skor untuk anon).
3. Buka **Settings → API**, salin **Project URL** dan **anon/public key**.
4. Isi file `.env` (buat dari `.env.example` bila belum ada):

```env
VITE_SUPABASE_URL="https://PROJECT-REF.supabase.co"
VITE_SUPABASE_ANON_KEY="ANON_PUBLIC_KEY"
```

5. Restart `npm run dev` agar variabel environment terbaca.

> Catatan: anon key aman dipakai di sisi klien selama RLS aktif. Jangan pernah memakai `service_role` key di aplikasi frontend.
> Skor berasal dari perhitungan di browser, jadi leaderboard cocok untuk latihan kelas, bukan ujian berhadiah.

### Skema tabel

| Kolom             | Tipe        | Keterangan                                |
| ----------------- | ----------- | ----------------------------------------- |
| `id`              | uuid        | Primary key otomatis                       |
| `name`            | text        | Nama siswa (2–30 karakter)                 |
| `score`           | integer     | Skor rata-rata 0–100                       |
| `total_correct`   | integer     | Jumlah jawaban benar                       |
| `total_questions` | integer     | Jumlah soal (60)                           |
| `letter_grade`    | text        | Predikat A/B/C/D                           |
| `predicate`       | text        | Deskripsi predikat                         |
| `created_at`      | timestamptz | Waktu skor dikirim                         |

## 3. Build produksi

```bash
npm run build
npm run preview
```

## 4. Upload ke GitHub

Jalankan dari **dalam folder project ini** (bukan folder induk yang berisi file zip):

```bash
git init
git add .
git commit -m "Game Eksplorasi Hobi Cilik + leaderboard Supabase"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

`.env` otomatis tidak ikut ter-upload karena sudah ada di `.gitignore`. Jangan pernah mengganti
aturan itu, karena file tersebut berisi kredensial project Anda.

## 5. Deploy ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new), pilih **Import Git Repository**, lalu pilih repo ini.
2. Vercel mendeteksi **Vite** secara otomatis (`vercel.json` sudah disiapkan):
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Sebelum klik Deploy, buka **Environment Variables** dan tambahkan untuk Production, Preview,
   dan Development:
   - `VITE_SUPABASE_URL` → `https://PROJECT-REF.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` → anon/public key Supabase
4. Klik **Deploy**. Setelah selesai, buka URL Vercel dan uji input nama + leaderboard.
5. Jika environment variable ditambahkan setelah deploy, lakukan **Redeploy** agar nilainya
   ikut ter-build (Vite menanamkan variabel saat proses build).

Tidak perlu menambahkan domain Vercel ke Supabase: endpoint REST Supabase dapat diakses dari
origin mana pun selama RLS aktif.

## Struktur penting

```
src/
  lib/supabase.ts               # Inisialisasi klien Supabase
  services/leaderboard.ts       # Ambil simpan skor, ranking, fallback lokal
  components/NameEntryModal.tsx # Form nama wajib sebelum quiz
  components/LeaderboardView.tsx# Tampilan papan peringkat
supabase/leaderboard.sql        # Skema tabel + RLS
```
