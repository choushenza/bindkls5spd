import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HomeMenu } from './components/HomeMenu';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';
import { CertificateModal } from './components/CertificateModal';
import { DictionaryView } from './components/DictionaryView';
import { LeaderboardView } from './components/LeaderboardView';
import { NameEntryModal } from './components/NameEntryModal';
import { UNIFIED_QUESTIONS } from './data/unifiedQuestions';
import { calculateUnifiedScore } from './utils/gameLogic';
import { AnswerRecord, UnifiedScoreResult, ScoreSaveState } from './types';
import { soundEffects } from './utils/audio';
import { normalizeName, saveLeaderboardScore } from './services/leaderboard';

type ActiveView = 'home' | 'quiz' | 'dictionary' | 'leaderboard';

const PLAYER_NAME_KEY = 'ehc_player_name';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [chosenAnswers, setChosenAnswers] = useState<Record<number, number>>({});
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundEffects.getMuted());
  const [bestAverageScore, setBestAverageScore] = useState<number>(0);
  const [playerName, setPlayerName] = useState<string>('');
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);
  const [scoreSaveState, setScoreSaveState] = useState<ScoreSaveState>('idle');
  const hasSubmittedScore = useRef<boolean>(false);
  const pendingAutostart = useRef<boolean>(false);

  // Load saved name, best score, and check autostart param
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let savedName = '';
    try {
      savedName = normalizeName(window.localStorage.getItem(PLAYER_NAME_KEY) ?? '');
      if (savedName) {
        setPlayerName(savedName);
      }

      const savedScore = window.localStorage.getItem('ehc_best_avg_score');
      if (savedScore) {
        setBestAverageScore(Number(savedScore));
      }
    } catch {
      // fallback
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      // Tetap tampilkan form nama (terisi otomatis) agar siswa mengonfirmasi identitasnya.
      pendingAutostart.current = true;
      setIsNameModalOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetQuizState = () => {
    setCurrentQuestionIndex(0);
    setChosenAnswers({});
    setAnswers([]);
    setIsFinished(false);
    setIsCertificateOpen(false);
    setScoreSaveState('idle');
    hasSubmittedScore.current = false;
  };

  const beginQuiz = (name: string) => {
    const cleanName = normalizeName(name);
    setPlayerName(cleanName);
    try {
      window.localStorage.setItem(PLAYER_NAME_KEY, cleanName);
    } catch {
      // fallback
    }
    resetQuizState();
    setIsNameModalOpen(false);
    pendingAutostart.current = false;
    setActiveView('quiz');
  };

  /** Setiap tantangan baru wajib melewati input nama terlebih dahulu. */
  const requestStartQuiz = () => {
    soundEffects.playClick();
    setIsNameModalOpen(true);
  };

  const handleNameConfirmed = (name: string) => {
    beginQuiz(name);
  };

  const handleCloseNameModal = () => {
    setIsNameModalOpen(false);
    if (pendingAutostart.current) {
      pendingAutostart.current = false;
      setActiveView('home');
    }
  };

  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundEffects.setMuted(nextMuted);
  };

  const handleAnswer = (chosenIndex: number, isCorrect: boolean) => {
    const currentQ = UNIFIED_QUESTIONS[currentQuestionIndex];
    if (!currentQ) return;

    // Record chosen option
    setChosenAnswers((prev) => ({
      ...prev,
      [currentQ.id]: chosenIndex
    }));

    const newRecord: AnswerRecord = {
      questionId: currentQ.id,
      sectionId: currentQ.sectionId,
      questionText: currentQ.question,
      chosenIndex,
      correctIndex: currentQ.correctAnswer,
      isCorrect,
      explanation: currentQ.explanation
    };

    // Update or append answer record
    setAnswers((prev) => {
      const existingIdx = prev.findIndex((a) => a.questionId === currentQ.id);
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = newRecord;
        return copy;
      }
      return [...prev, newRecord];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 >= UNIFIED_QUESTIONS.length) {
      // Completed all 60 questions!
      finishQuiz();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleJumpTo = (index: number) => {
    if (index >= 0 && index < UNIFIED_QUESTIONS.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    const result = calculateUnifiedScore(answers, UNIFIED_QUESTIONS.length);
    if (result.averageScore > bestAverageScore) {
      setBestAverageScore(result.averageScore);
      try {
        localStorage.setItem('ehc_best_avg_score', String(result.averageScore));
      } catch {
        // fallback
      }
    }

    // Kirim skor ke Supabase (hanya sekali per percobaan).
    if (!hasSubmittedScore.current && playerName) {
      hasSubmittedScore.current = true;
      setScoreSaveState('saving');

      void saveLeaderboardScore({
        name: playerName,
        score: result.averageScore,
        totalCorrect: result.totalCorrect,
        totalQuestions: result.totalQuestions,
        letterGrade: result.letterGrade,
        predicate: result.predicate
      })
        .then((saveResult) => {
          if (saveResult.source === 'supabase') {
            setScoreSaveState('saved');
          } else {
            setScoreSaveState('local');
            if (saveResult.error) {
              console.warn('Gagal menyimpan skor ke Supabase:', saveResult.error);
            }
          }
        })
        .catch((error: unknown) => {
          setScoreSaveState('local');
          console.warn('Gagal menyimpan skor ke leaderboard:', error);
        });
    }
  };

  const answeredIndices = new Set(
    answers.map((a) => {
      const qIndex = UNIFIED_QUESTIONS.findIndex((q) => q.id === a.questionId);
      return qIndex;
    }).filter((idx) => idx >= 0)
  );

  const scoreResult: UnifiedScoreResult = calculateUnifiedScore(
    answers,
    UNIFIED_QUESTIONS.length
  );

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800">
      {/* Top Bar Navigation */}
      <Navbar
        activeView={activeView}
        onNavigate={(view) => {
          if (view === 'quiz') {
            requestStartQuiz();
          } else {
            setActiveView(view);
          }
        }}
        playerName={playerName}
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        currentProgress={
          activeView === 'quiz' && !isFinished
            ? {
                current: currentQuestionIndex + 1,
                total: UNIFIED_QUESTIONS.length
              }
            : undefined
        }
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8">
        {/* View 1: Home Menu */}
        {activeView === 'home' && (
          <HomeMenu
            playerName={playerName}
            onStartQuiz={requestStartQuiz}
            onOpenDictionary={() => setActiveView('dictionary')}
            onOpenLeaderboard={() => setActiveView('leaderboard')}
            bestAverageScore={bestAverageScore}
          />
        )}

        {/* View 2: Kamus & Aturan Awalan me- */}
        {activeView === 'dictionary' && <DictionaryView />}

        {/* View 3: Leaderboard */}
        {activeView === 'leaderboard' && (
          <LeaderboardView
            playerName={playerName}
            onBack={() => setActiveView('home')}
            onStartQuiz={requestStartQuiz}
          />
        )}

        {/* View 4: Active Unified Quiz (60 Questions) */}
        {activeView === 'quiz' && !isFinished && UNIFIED_QUESTIONS[currentQuestionIndex] && (
          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Header Breadcrumb */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
              <span>{UNIFIED_QUESTIONS[currentQuestionIndex].sectionTitle}</span>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveView('home');
                }}
                className="text-amber-800 hover:text-amber-950 hover:underline cursor-pointer"
              >
                Kembali ke Beranda
              </button>
            </div>

            <QuestionCard
              key={currentQuestionIndex}
              question={UNIFIED_QUESTIONS[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={UNIFIED_QUESTIONS.length}
              answeredIndices={answeredIndices}
              chosenAnswers={chosenAnswers}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onPrev={handlePrev}
              onJumpTo={handleJumpTo}
            />
          </div>
        )}

        {/* View 5: Result Screen on Completion */}
        {activeView === 'quiz' && isFinished && (
          <ResultScreen
            scoreResult={scoreResult}
            answers={answers}
            playerName={playerName}
            scoreSaveState={scoreSaveState}
            onRestart={requestStartQuiz}
            onOpenCertificate={() => setIsCertificateOpen(true)}
            onOpenLeaderboard={() => setActiveView('leaderboard')}
          />
        )}
      </main>

      {/* Name Entry Modal (wajib sebelum quiz) */}
      {isNameModalOpen && (
        <NameEntryModal
          initialName={playerName}
          onConfirm={handleNameConfirmed}
          onClose={handleCloseNameModal}
        />
      )}

      {/* Certificate Modal */}
      {isCertificateOpen && (
        <CertificateModal
          scoreResult={scoreResult}
          initialStudentName={playerName}
          onClose={() => setIsCertificateOpen(false)}
        />
      )}

      {/* Clean Footer */}
      <footer className="border-t border-amber-200/60 bg-white/70 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            Bahan Ajar Bahasa Indonesia Kelas 5 SD • Bab 3: Ekspresi Diri Melalui Hobi
          </span>
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <span>60 Soal Terpadu</span>
            <span>·</span>
            <span>Skor Rata-rata 0–100</span>
            <span>·</span>
            <span>Leaderboard Supabase</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
