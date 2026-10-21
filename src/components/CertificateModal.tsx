import React, { useState } from 'react';
import { Printer, X, Sparkles, Check } from 'lucide-react';
import { formatIndonesianDate } from '../utils/gameLogic';
import { UnifiedScoreResult } from '../types';
import { soundEffects } from '../utils/audio';

interface CertificateModalProps {
  scoreResult: UnifiedScoreResult;
  initialStudentName?: string;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  scoreResult,
  initialStudentName,
  onClose
}) => {
  const [studentName, setStudentName] = useState<string>(
    initialStudentName?.trim() || 'Siswa Cilik Berprestasi'
  );
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  const todayFormatted = formatIndonesianDate();

  const handlePrint = () => {
    soundEffects.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-amber-200 shadow-2xl max-w-2xl w-full p-4 sm:p-6 relative my-auto animate-pop">
        {/* Close Button */}
        <button
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          aria-label="Tutup Sertifikat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Printable Area */}
        <div
          id="printable-certificate"
          className="border-8 border-double border-amber-400 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 text-amber-300 text-lg">✦</div>
          <div className="absolute top-2 right-2 text-amber-300 text-lg">✦</div>
          <div className="absolute bottom-2 left-2 text-amber-300 text-lg">✦</div>
          <div className="absolute bottom-2 right-2 text-amber-300 text-lg">✦</div>

          {/* Certificate Header */}
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Sertifikat Prestasi Belajar Cilik</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight mb-1">
            EKSPRESI DIRI MELALUI HOBI
          </h2>
          <p className="text-xs text-amber-900 font-semibold tracking-wide mb-5">
            Bahasa Indonesia — Kelas 5 Sekolah Dasar (Bab 3)
          </p>

          <p className="text-xs sm:text-sm text-slate-500 font-serif italic mb-1">
            Diberikan dengan penuh bangga kepada siswa:
          </p>

          {/* Editable Student Name */}
          <div className="my-2 max-w-md mx-auto">
            {isEditingName ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ketik Nama Lengkap Siswa..."
                  className="w-full text-center font-display font-extrabold text-lg sm:text-xl text-slate-900 border-b-2 border-amber-500 pb-1 focus:outline-hidden"
                  autoFocus
                />
                <button
                  onClick={() => setIsEditingName(false)}
                  className="p-1.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 cursor-pointer"
                  title="Simpan Nama"
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => setIsEditingName(true)}
                className="group cursor-pointer py-1 border-b-2 border-amber-300/80 hover:border-amber-500 transition-colors inline-block px-4"
                title="Klik untuk ubah nama siswa"
              >
                <span className="font-display font-black text-xl sm:text-2xl text-slate-900 group-hover:text-amber-800">
                  {studentName}
                </span>
                <span className="text-[10px] text-amber-600 font-normal block">
                  (Klik untuk ubah nama)
                </span>
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed my-3">
            Telah menyelesaikan seluruh 60 butir soal asesmen terpadu Bahasa Indonesia Kelas 5 Bab 3 dengan perolehan hasil:
          </p>

          {/* Score & Sections Summary in Certificate */}
          <div className="p-4 bg-white/95 rounded-2xl border border-amber-200/90 shadow-inner max-w-lg mx-auto mb-5 text-center">
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Nilai Rata-rata:
              </span>
              <span className="font-display font-black text-3xl text-amber-600">
                {scoreResult.averageScore}
              </span>
              <span className="text-xs font-bold text-slate-400">/ 100</span>
              <span className="ml-2 text-xs font-mono font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">
                Predikat {scoreResult.letterGrade}
              </span>
            </div>

            <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wide block mb-3">
              "{scoreResult.predicate}"
            </span>

            {/* Micro Section Breakdown */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-left text-[11px] text-slate-600">
              {scoreResult.sectionBreakdown.map((sec, idx) => (
                <div key={idx} className="bg-slate-50 p-2 rounded-xl">
                  <span className="font-bold text-slate-800 block truncate">
                    Bagian {idx + 1}
                  </span>
                  <span className="font-mono text-slate-600">
                    {sec.correctCount}/{sec.totalCount} ({sec.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Signatures & Date */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-amber-200 text-xs text-slate-600">
            <div>
              <span className="text-slate-400 block mb-7">Tanggal Evaluasi:</span>
              <span className="font-semibold text-slate-800 block underline decoration-amber-300">
                {todayFormatted}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-7">Guru Pengampu Kelas 5:</span>
              <span className="font-semibold text-slate-800 block underline decoration-amber-300">
                Wali Kelas 5 SD
              </span>
            </div>
          </div>
        </div>

        {/* Certificate Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-2">
          <span className="text-xs text-slate-500 font-medium">
            💡 Cetak atau simpan lembar sertifikat sebagai bukti penilaian formatif/sumatif!
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white font-display font-bold text-xs sm:text-sm rounded-xl hover:bg-amber-600 shadow-md shadow-amber-200 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                onClose();
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
