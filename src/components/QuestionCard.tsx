import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Grid
} from 'lucide-react';
import { Question } from '../types';
import { VisualClueRenderer } from './VisualClueRenderer';
import { soundEffects } from '../utils/audio';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  answeredIndices: Set<number>;
  chosenAnswers: Record<number, number>; // questionId -> chosenIndex
  onAnswer: (chosenIndex: number, isCorrect: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
  onJumpTo: (index: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  answeredIndices,
  chosenAnswers,
  onAnswer,
  onNext,
  onPrev,
  onJumpTo
}) => {
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [hasShaked, setHasShaked] = useState<boolean>(false);

  // Ensure each new question starts scrolled smoothly at the top so the infographic is immediately visible
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentIndex]);

  const selectedOption = chosenAnswers[question.id] ?? null;
  const isAnswered = selectedOption !== null;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    const isCorrect = idx === question.correctAnswer;
    onAnswer(idx, isCorrect);

    if (isCorrect) {
      soundEffects.playPing();
      confetti({
        particleCount: 40,
        spread: 55,
        origin: { y: 0.65 }
      });
    } else {
      soundEffects.playBuzz();
      setHasShaked(true);
      setTimeout(() => setHasShaked(false), 500);
    }
  };

  const optionLabels = ['A', 'B', 'C', 'D'];
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div
      className={`bg-white rounded-3xl border border-amber-200/90 shadow-sm p-4 sm:p-6 md:p-8 transition-all ${
        hasShaked ? 'animate-shake border-rose-300 ring-2 ring-rose-200' : ''
      }`}
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-md block sm:inline-block mb-1 sm:mb-0 sm:mr-2">
            {question.sectionTitle}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {question.topicTag} • Soal <span className="font-bold text-slate-800">{currentIndex + 1}</span> dari{' '}
            {totalQuestions}
          </span>
        </div>

        {/* Quick Question Navigator Palette Toggle */}
        <button
          onClick={() => setShowGrid(!showGrid)}
          className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          title="Buka Daftar Nomor Soal"
        >
          <Grid className="w-3.5 h-3.5" />
          <span>Nomor Soal ({answeredIndices.size}/{totalQuestions})</span>
        </button>
      </div>

      {/* Quick Jump Number Palette Modal / Disclosure */}
      {showGrid && (
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl mb-5 animate-pop">
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-600">
            <span>Pilih Nomor Soal untuk Melompat:</span>
            <button
              onClick={() => setShowGrid(false)}
              className="text-slate-400 hover:text-slate-700"
            >
              ✕ Tutup
            </button>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-1.5">
            {Array.from({ length: totalQuestions }, (_, i) => {
              const isAnsweredThis = answeredIndices.has(i);
              const isCurrent = i === currentIndex;
              return (
                <button
                  key={i}
                  onClick={() => {
                    soundEffects.playClick();
                    onJumpTo(i);
                    setShowGrid(false);
                  }}
                  className={`py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-amber-500 text-white ring-2 ring-amber-300 scale-105'
                      : isAnsweredThis
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Continuous Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Stimulus / Context (Clean, no spoilers!) */}
      {question.context && (
        <div className="mb-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed whitespace-pre-line">
          <span className="font-bold text-slate-900 block mb-1">
            Stimulus / Konteks:
          </span>
          <p>{question.context}</p>
        </div>
      )}

      {/* Visual Clue (Infographic Chart, Table, Visual Cards, or Mind Map Diagram) */}
      <VisualClueRenderer clue={question.visualClue} />

      {/* Question Headline */}
      <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg md:text-xl leading-snug mb-4 text-balance">
        {question.question}
      </h3>

      {/* 4 Answer Options */}
      <div className="grid grid-cols-1 gap-2.5 my-6">
        {question.options.map((option, idx) => {
          let btnStyle =
            'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-amber-50/80 hover:border-amber-300';
          let labelStyle = 'bg-slate-200 text-slate-700';

          if (isAnswered) {
            if (idx === question.correctAnswer) {
              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-300';
              labelStyle = 'bg-emerald-500 text-white';
            } else if (idx === selectedOption) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-200';
              labelStyle = 'bg-rose-500 text-white';
            } else {
              btnStyle = 'bg-slate-50/40 border-slate-100 text-slate-400 opacity-60';
              labelStyle = 'bg-slate-100 text-slate-400';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={isAnswered}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer disabled:cursor-default ${btnStyle}`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${labelStyle}`}
              >
                {optionLabels[idx]}
              </span>
              <span className="text-sm font-medium pt-0.5 leading-relaxed grow">
                {option}
              </span>
              {isAnswered && idx === question.correctAnswer && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto self-center" />
              )}
              {isAnswered && idx === selectedOption && idx !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-auto self-center" />
              )}
            </button>
          );
        })}
      </div>

      {/* Pedagogical Explanation Box after Student Answers */}
      {isAnswered && (
        <div
          className={`p-4 rounded-xl mb-6 border animate-pop ${
            selectedOption === question.correctAnswer
              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
              : 'bg-rose-50/90 border-rose-200 text-rose-950'
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-sm mb-1">
            {selectedOption === question.correctAnswer ? (
              <>
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-800">Jawabanmu Tepat!</span>
              </>
            ) : (
              <>
                <HelpCircle className="w-4 h-4 text-rose-600" />
                <span className="text-rose-800">Jawaban Belum Tepat. Pembahasan:</span>
              </>
            )}
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Navigation Buttons (Prev & Next) */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => {
            soundEffects.playClick();
            onPrev();
          }}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            onNext();
          }}
          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-display font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-amber-200 hover:from-amber-600 hover:to-orange-600 active:scale-95 transition-all cursor-pointer"
        >
          <span>
            {currentIndex + 1 === totalQuestions ? 'Selesai & Lihat Skor Rata-rata' : 'Soal Berikutnya'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
