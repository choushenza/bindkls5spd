import React from 'react';
import { RotateCcw, BookOpen, Home } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface GameOverModalProps {
  score: number;
  totalAnswered: number;
  onRetry: () => void;
  onOpenDictionary: () => void;
  onGoHome: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  score,
  totalAnswered,
  onRetry,
  onOpenDictionary,
  onGoHome
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-pop">
      <div className="bg-white rounded-3xl border border-rose-200 shadow-xl max-w-md w-full p-6 sm:p-8 text-center relative overflow-hidden">
        {/* Soft Decorative Glow */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-rose-100 rounded-full blur-xl pointer-events-none" />

        <div className="w-16 h-16 rounded-3xl bg-rose-50 border border-rose-200 text-3xl flex items-center justify-center mx-auto mb-4 shadow-inner">
          💔
        </div>

        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-2">
          Jangan Menyerah, Sobat Cilik!
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
          3 Nyawa hatimu telah habis setelah menjawab {totalAnswered} soal (Skor Benar: {score}).
          Ingat, melakukan kesalahan adalah bagian seru dari proses belajar!
        </p>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium mb-6 text-left">
          💡 <strong>Tips Detektif Cilik:</strong> Buka menu "Kamus & Aturan me-" untuk mengingat kembali kaidah peluluhan K-T-S-P dan struktur alur cerita sebelum mencoba lagi!
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={() => {
              soundEffects.playClick();
              onRetry();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-display font-bold text-sm rounded-xl shadow-md shadow-amber-200 hover:from-amber-600 hover:to-orange-600 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi Modul Ini (3 Nyawa ❤️❤️❤️)</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenDictionary();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-purple-50 text-purple-700 hover:bg-purple-100 font-semibold text-xs sm:text-sm rounded-xl border border-purple-200 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Buka Kamus & Aturan me-</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onGoHome();
            }}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 text-slate-500 hover:text-slate-800 text-xs font-medium cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Kembali ke Menu Utama</span>
          </button>
        </div>
      </div>
    </div>
  );
};
