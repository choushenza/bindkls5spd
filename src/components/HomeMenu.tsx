import React from 'react';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Trophy,
  CheckCircle,
  BarChart2
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface HomeMenuProps {
  onStartQuiz: () => void;
  onOpenDictionary: () => void;
  onOpenLeaderboard: () => void;
  playerName?: string;
  bestAverageScore?: number;
}

export const HomeMenu: React.FC<HomeMenuProps> = ({
  onStartQuiz,
  onOpenDictionary,
  onOpenLeaderboard,
  playerName,
  bestAverageScore
}) => {
  return (
    <div className="space-y-8 animate-pop pb-12">
      {/* Hero Welcome Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 text-white p-6 sm:p-10 shadow-lg shadow-amber-200">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>
              {playerName ? `Halo, ${playerName}! Siap belajar lagi?` : 'Bahasa Indonesia Kelas 5 SD • Bab 3'}
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-3">
            Eksplorasi Hobi Cilik
          </h1>

          <p className="text-sm sm:text-base text-amber-50 font-medium leading-relaxed mb-6">
            Uji pemahamanmu secara mandiri melalui <strong>Tantangan Terpadu 60 Soal</strong>. Latih kemampuan berpikir analitis tentang ragam hobi, kaidah awalan <em>me-</em> (tanpa contekan!), serta kemampuan menyusun alur cerita dan membaca peta pikiran!
          </p>

          {/* Gamification / Instructional Highlights */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-amber-100">
            <div className="flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-xl border border-white/10">
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              <span>Mandiri Tanpa Batas Nyawa</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-xl border border-white/10">
              <BarChart2 className="w-4 h-4 text-amber-200" />
              <span>Skor Rata-rata 0 - 100</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-xl border border-white/10">
              <Trophy className="w-4 h-4 text-sky-200" />
              <span>Sertifikat Prestasi Rapor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Assessment Launcher Card */}
      <div className="bg-white rounded-3xl border border-amber-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
              <GraduationCap className="w-4 h-4 text-amber-700" />
              <span>Ujian Asesmen Terpadu Bab 3</span>
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900">
              Tantangan Terpadu: 60 Butir Soal Terintegrasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Seluruh 60 soal dirancang dalam satu alur utuh yang merangkum 3 materi pokok Kurikulum Merdeka:
            </p>

            {/* 3 Section Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[11px] font-bold text-amber-700 block">Bagian 1 (Soal 1–20)</span>
                <span className="text-xs font-bold text-slate-800">Detektif Hobi & Infografik</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[11px] font-bold text-emerald-700 block">Bagian 2 (Soal 21–40)</span>
                <span className="text-xs font-bold text-slate-800">Kaidah Awalan me-</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[11px] font-bold text-sky-700 block">Bagian 3 (Soal 41–60)</span>
                <span className="text-xs font-bold text-slate-800">Susun Cerita & Peta Pikiran</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col gap-3">
            {typeof bestAverageScore === 'number' && bestAverageScore > 0 && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                <span className="text-[11px] text-emerald-700 font-semibold block">Skor Rata-rata Terbaikmu:</span>
                <span className="font-display font-black text-2xl text-emerald-800">
                  {bestAverageScore} / 100 ⭐
                </span>
              </div>
            )}

            <button
              onClick={() => {
                soundEffects.playClick();
                onStartQuiz();
              }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-display font-black text-base rounded-2xl shadow-lg shadow-amber-200 hover:from-amber-600 hover:to-orange-600 cursor-pointer active:scale-95 transition-all"
            >
              <span>Mulai Tantangan 60 Soal</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenLeaderboard();
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-900 border border-emerald-200 font-display font-bold text-sm rounded-2xl hover:bg-emerald-100 cursor-pointer active:scale-95 transition-all"
            >
              <Trophy className="w-4 h-4 text-emerald-600" />
              <span>Lihat Papan Peringkat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reference Study Deck Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/30 text-purple-200 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pusat Referensi Belajar</span>
          </div>
          <h3 className="font-display font-extrabold text-xl text-white">
            Kamus Hobi & Laboratorium Uji Awalan me-
          </h3>
          <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
            Ingin mengulang teori sebelum atau sesudah ujian? Pelajari ensiklopedia alat & manfaat hobi atau uji kata di Laboratorium Morfologi me-!
          </p>
        </div>

        <button
          onClick={() => {
            soundEffects.playClick();
            onOpenDictionary();
          }}
          className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-sm rounded-2xl shadow-md cursor-pointer transition-colors active:scale-95"
        >
          <BookOpen className="w-4 h-4" />
          <span>Buka Pusat Referensi</span>
        </button>
      </div>
    </div>
  );
};
