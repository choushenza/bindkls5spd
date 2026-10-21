import { AnswerRecord, UnifiedScoreResult, SectionScoreSummary, SectionId } from '../types';

export function calculateUnifiedScore(
  answers: AnswerRecord[],
  totalQuestions: number = 60
): UnifiedScoreResult {
  const totalCorrect = answers.filter((a) => a.isCorrect).length;
  const averageScore = Math.round((totalCorrect / totalQuestions) * 100);

  let letterGrade: 'A' | 'B' | 'C' | 'D' = 'D';
  let predicate = 'Pejuang Belajar Cilik Berpotensi';

  if (averageScore >= 85) {
    letterGrade = 'A';
    predicate = 'Master Eksplorasi Hobi & Ahli Bahasa Cilik';
  } else if (averageScore >= 75) {
    letterGrade = 'B';
    predicate = 'Penjelajah Hobi Mahir & Berprestasi';
  } else if (averageScore >= 60) {
    letterGrade = 'C';
    predicate = 'Siswa Cakap Berbahasa Indonesia';
  } else {
    letterGrade = 'D';
    predicate = 'Pejuang Belajar Cilik Perlu Bimbingan';
  }

  // Calculate breakdown for the 3 sections
  const sectionConfigs: { id: SectionId; title: string; total: number }[] = [
    { id: 'section1', title: 'Bagian 1: Detektif Hobi & Infografik', total: 20 },
    { id: 'section2', title: 'Bagian 2: Kaidah Awalan me-', total: 20 },
    { id: 'section3', title: 'Bagian 3: Susun Cerita & Peta Pikiran', total: 20 }
  ];

  const sectionBreakdown: SectionScoreSummary[] = sectionConfigs.map((cfg) => {
    const sectionAnswers = answers.filter((a) => a.sectionId === cfg.id);
    const correctCount = sectionAnswers.filter((a) => a.isCorrect).length;
    const percentage = Math.round((correctCount / cfg.total) * 100);
    return {
      sectionId: cfg.id,
      title: cfg.title,
      correctCount,
      totalCount: cfg.total,
      percentage
    };
  });

  return {
    totalCorrect,
    totalQuestions,
    averageScore,
    letterGrade,
    predicate,
    sectionBreakdown
  };
}

export function isAnswerCorrect(chosenIndex: number, correctIndex: number): boolean {
  return chosenIndex === correctIndex;
}

export function formatIndonesianDate(d: Date = new Date()): string {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
