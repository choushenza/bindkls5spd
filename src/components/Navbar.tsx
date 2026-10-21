import React from 'react';
import { Volume2, VolumeX, Sparkles, BookOpen, GraduationCap, Trophy, UserRound } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface NavbarProps {
  activeView: 'quiz' | 'dictionary' | 'home' | 'leaderboard';
  onNavigate: (view: 'quiz' | 'dictionary' | 'home' | 'leaderboard') => void;
  playerName?: string;
  isMuted: boolean;
  onToggleSound: () => void;
  currentProgress?: {
    current: number;
    total: number;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  playerName,
  isMuted,
  onToggleSound,
  currentProgress
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onNavigate('home');
          }}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          aria-label="Kembali ke Beranda Eksplorasi Hobi Cilik"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-sm shadow-amber-200 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-amber-100" />
          </div>
          <div>
            <span className="font-display font-black text-lg md:text-xl text-slate-900 tracking-tight block leading-tight">
              Eksplorasi Hobi Cilik
            </span>
            <span className="text-[11px] font-medium text-amber-700 block leading-none">
              Bahasa Indonesia Kelas 5 SD • Bab 3
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (single-line, clean) */}
        <nav className="hidden md:flex items-center gap-3 text-sm font-semibold text-slate-600">
          <button
            onClick={() => {
              soundEffects.playClick();
              onNavigate('quiz');
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'quiz'
                ? 'bg-amber-500 text-white font-bold shadow-xs'
                : 'hover:text-amber-800 hover:bg-amber-50/80'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Tantangan 60 Soal</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onNavigate('dictionary');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'dictionary'
                ? 'bg-purple-100 text-purple-900 font-bold'
                : 'hover:text-purple-800 hover:bg-purple-50/80'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Kamus me-</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onNavigate('leaderboard');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'leaderboard'
                ? 'bg-emerald-100 text-emerald-900 font-bold'
                : 'hover:text-emerald-800 hover:bg-emerald-50/80'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Papan Peringkat</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (Audio toggle & Optional Progress) */}
        <div className="flex items-center gap-3 shrink-0">
          {playerName && (
            <div className="hidden lg:flex items-center gap-1.5 max-w-[150px] px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-bold">
              <UserRound className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{playerName}</span>
            </div>
          )}

          {currentProgress && activeView === 'quiz' && (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-bold font-mono">
              <span>Soal</span>
              <span className="text-amber-700 font-black">
                {currentProgress.current} / {currentProgress.total}
              </span>
            </div>
          )}

          <button
            onClick={onToggleSound}
            className="p-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={isMuted ? 'Nyalakan Suara Game' : 'Matikan Suara Game'}
            title={isMuted ? 'Nyalakan Suara' : 'Matikan Suara'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Secondary Menu */}
      <div className="md:hidden flex items-center justify-around border-t border-amber-100 bg-amber-50/70 px-2 py-1.5 text-xs font-semibold">
        <button
          onClick={() => onNavigate('quiz')}
          className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap ${
            activeView === 'quiz' ? 'bg-amber-500 text-white font-bold' : 'text-slate-700'
          }`}
        >
          Tantangan 60 Soal
        </button>
        <button
          onClick={() => onNavigate('dictionary')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${
            activeView === 'dictionary' ? 'bg-purple-600 text-white font-bold' : 'text-slate-700'
          }`}
        >
          Kamus & Lab me-
        </button>
        <button
          onClick={() => onNavigate('leaderboard')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${
            activeView === 'leaderboard' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-700'
          }`}
        >
          Peringkat
        </button>
      </div>
    </header>
  );
};
