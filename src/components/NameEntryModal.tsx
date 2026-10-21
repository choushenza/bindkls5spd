import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Trophy, UserRound, X, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/audio';
import { normalizeName, validateName } from '../services/leaderboard';

interface NameEntryModalProps {
  initialName?: string;
  onConfirm: (name: string) => void;
  onClose: () => void;
}

export const NameEntryModal: React.FC<NameEntryModalProps> = ({
  initialName = '',
  onConfirm,
  onClose
}) => {
  const [name, setName] = useState<string>(normalizeName(initialName));
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationError = validateName(name);

    if (validationError) {
      setError(validationError);
      soundEffects.playBuzz();
      return;
    }

    soundEffects.playPing();
    onConfirm(normalizeName(name));
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-amber-200 shadow-2xl max-w-md w-full p-6 sm:p-8 relative my-auto animate-pop">
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          aria-label="Tutup formulir nama"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-200">
            <UserRound className="w-9 h-9" />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-[11px] font-bold uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Langkah Pertama</span>
            </span>
            <h2 className="font-display font-black text-2xl text-slate-900 mt-2">
              Siapa Namamu?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
              Tulis nama lengkapmu sebelum memulai tantangan. Namamu akan tampil di{' '}
              <strong className="text-amber-800">Papan Peringkat</strong> dan sertifikat prestasi.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="student-name"
              className="block text-xs font-bold text-slate-700 mb-1.5"
            >
              Nama Siswa
            </label>
            <input
              ref={inputRef}
              id="student-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                if (error) setError(null);
              }}
              maxLength={30}
              placeholder="Contoh: Aisyah Putri"
              autoComplete="off"
              className={`w-full px-4 py-3 rounded-2xl border-2 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-colors ${
                error
                  ? 'border-rose-400 bg-rose-50/50 focus:border-rose-500'
                  : 'border-amber-200 bg-amber-50/40 focus:border-amber-500'
              }`}
            />
            <div className="flex items-center justify-between mt-1.5 gap-2">
              <span className="text-[11px] text-rose-600 font-semibold min-h-[16px]">
                {error ?? ''}
              </span>
              <span className="text-[11px] text-slate-400 font-mono shrink-0">
                {normalizeName(name).length}/30
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-2xl bg-sky-50 border border-sky-200 text-[11px] text-sky-900 font-medium leading-relaxed">
            <Trophy className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Skor tertinggimu otomatis dikirim ke leaderboard kelas setelah ujian selesai.</span>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-display font-black text-base rounded-2xl shadow-lg shadow-amber-200 hover:from-amber-600 hover:to-orange-600 cursor-pointer active:scale-[0.98] transition-all"
          >
            <span>Mulai Tantangan 60 Soal</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer"
          >
            Batal, kembali ke beranda
          </button>
        </form>
      </div>
    </div>
  );
};
