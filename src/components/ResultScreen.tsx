import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Award,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Cloud,
  CloudOff,
  Loader2,
  ListOrdered
} from 'lucide-react';
import { AnswerRecord, UnifiedScoreResult, ScoreSaveState } from '../types';
import { soundEffects } from '../utils/audio';
import { normalizeName } from '../services/leaderboard';

interface ResultScreenProps {
  scoreResult: UnifiedScoreResult;
  answers: AnswerRecord[];
  playerName: string;
  scoreSaveState: ScoreSaveState;
  onRestart: () => void;
  onOpenCertificate: () => void;
  onOpenLeaderboard: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  scoreResult,
  answers,
  playerName,
  scoreSaveState,
  onRestart,
  onOpenCertificate,
  onOpenLeaderboard
}) => {
  const [showReview, setShowReview] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<'all' | 'wrong' | 'correct'>('all');

  useEffect(() => {
    soundEffects.playFanfare();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 }
    });
  }, []);

  const filteredAnswers = answers.filter((a) => {
    if (filterType === 'wrong') return !a.isCorrect;
    if (filterType === 'correct') return a.isCorrect;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-pop pb-12">
      {/* Victory / Evaluation Hero Card */}
      <div className="bg-white rounded-3xl border border-amber-200/90 shadow-md p-6 sm:p-10 text-center relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-100 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-orange-100 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex p-4 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-500 shadow-inner mb-4">
          <Trophy className="w-14 h-14" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full inline-block mb-2">
          Hasil Tantangan Terpadu (60 Soal)
        </span>

        {playerName && (
          <p className="text-xs font-bold text-emerald-800 mb-1">
            🎉 Selamat, {normalizeName(playerName)}!
          </p>
        )}

        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
          Evaluasi Pembelajaran Bahasa Indonesia Bab 3
        </h2>

        <p className="text-sm font-semibold text-amber-800 max-w-md mx-auto mb-6">
          Predikat Prestasi Siswa: <br />
          <span className="font-display text-lg sm:text-xl font-black text-slate-900 underline decoration-amber-400">
            "{scoreResult.predicate}"
          </span>
        </p>

        {/* Primary Average Score KPI */}
        <div className="p-5 bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-200 rounded-3xl max-w-md mx-auto mb-6 shadow-xs">
          <span className="text-xs uppercase font-extrabold text-amber-800 tracking-wider block mb-1">
            Skor Nilai Rata-rata Akhir
          </span>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-display font-black text-5xl sm:text-6xl text-amber-600">
              {scoreResult.averageScore}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 100</span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-2 text-xs font-semibold text-slate-600">
            <span>
              Total Benar: <strong className="text-slate-900">{scoreResult.totalCorrect}</strong> / {scoreResult.totalQuestions} Soal
            </span>
            <span>•</span>
            <span>
              Nilai Mutu: <strong className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md font-mono">{scoreResult.letterGrade}</strong>
            </span>
          </div>
        </div>

        {/* Section Breakdown Grid (Rincian per Bagian Materi) */}
        <div className="max-w-xl mx-auto mb-8 text-left">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-amber-600" />
            <span>Rincian Pengskoran per Bagian Kompetensi (20 Soal/Bagian):</span>
          </h4>

          <div className="space-y-2.5">
            {scoreResult.sectionBreakdown.map((sec, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between gap-3"
              >
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                    {sec.title}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Benar: {sec.correctCount} dari {sec.totalCount} Soal
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-sm sm:text-base text-slate-900 block">
                    {sec.percentage}%
                  </span>
                  <div className="w-20 sm:w-24 h-2 bg-slate-200 rounded-full overflow-hidden mt-1">
                    <div
                      className={`h-full rounded-full ${
                        sec.percentage >= 75 ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${sec.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard save status */}
        <div className="max-w-md mx-auto mb-4">
          {scoreSaveState === 'saving' && (
            <div className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[11px] font-semibold text-slate-600">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500" />
              <span>Mengirim skor ke papan peringkat...</span>
            </div>
          )}
          {(scoreSaveState === 'saved' || scoreSaveState === 'local') && (
            <div
              className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-[11px] font-semibold border ${
                scoreSaveState === 'saved'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-amber-50 border-amber-200 text-amber-800'
              }`}
            >
              {scoreSaveState === 'saved' ? (
                <Cloud className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <CloudOff className="w-3.5 h-3.5 text-amber-600" />
              )}
              <span>
                {scoreSaveState === 'saved'
                  ? 'Skor berhasil disimpan ke leaderboard Supabase!'
                  : 'Skor tersimpan di perangkat ini (leaderboard online belum tersedia).'}
              </span>
            </div>
          )}
        </div>

        {/* Certificate & Leaderboard CTA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 mb-4">
          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenCertificate();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-display font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-amber-200 hover:from-amber-600 hover:to-orange-600 cursor-pointer active:scale-95 transition-all"
          >
            <Award className="w-5 h-5 text-amber-100" />
            <span>Lihat & Cetak Sertifikat Prestasi 🏆</span>
          </button>

          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenLeaderboard();
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-50 text-emerald-900 border border-emerald-200 font-display font-bold text-sm rounded-2xl hover:bg-emerald-100 cursor-pointer active:scale-95 transition-all"
          >
            <ListOrdered className="w-4 h-4 text-emerald-600" />
            <span>Lihat Papan Peringkat</span>
          </button>
        </div>

        {/* Restart Button */}
        <div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onRestart();
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl hover:bg-slate-200 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Ujian Terpadu</span>
          </button>
        </div>
      </div>

      {/* Accordion: Review Answers & Pembahasan */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <button
            onClick={() => setShowReview(!showReview)}
            className="flex items-center gap-2 font-display font-bold text-sm sm:text-base text-slate-800 cursor-pointer"
          >
            <span>Tinjau Pembahasan Soal ({answers.length} Dijawab)</span>
            {showReview ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {showReview && (
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setFilterType('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                Semua ({answers.length})
              </button>
              <button
                onClick={() => setFilterType('wrong')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterType === 'wrong' ? 'bg-rose-500 text-white' : 'text-slate-600'
                }`}
              >
                Salah ({answers.filter((a) => !a.isCorrect).length})
              </button>
              <button
                onClick={() => setFilterType('correct')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  filterType === 'correct' ? 'bg-emerald-600 text-white' : 'text-slate-600'
                }`}
              >
                Benar ({answers.filter((a) => a.isCorrect).length})
              </button>
            </div>
          )}
        </div>

        {showReview && (
          <div className="mt-4 space-y-3 divide-y divide-slate-100">
            {filteredAnswers.map((ans, idx) => (
              <div key={idx} className="pt-3 text-left">
                <div className="flex items-start gap-2 mb-1">
                  {ans.isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold text-xs text-slate-800">
                      Soal #{ans.questionId}:
                    </span>{' '}
                    <span className="text-xs text-slate-700">{ans.questionText}</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 pl-6 leading-relaxed">
                  💡 <strong>Pembahasan:</strong> {ans.explanation}
                </p>
              </div>
            ))}

            {filteredAnswers.length === 0 && (
              <div className="py-6 text-center text-xs text-slate-500">
                Tidak ada soal dalam filter ini.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
