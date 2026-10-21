export type SectionId = 'section1' | 'section2' | 'section3';

export interface ModuleInfo {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  color: string;
  description: string;
  totalQuestions: number;
}

export interface InfographicPoster {
  badge?: string;
  title: string;
  subtitle?: string;
  theme?: 'amber' | 'emerald' | 'sky' | 'indigo' | 'rose' | 'teal';
  stats?: { number: string; label: string; icon?: string }[];
  keyPoints?: { icon?: string; title: string; desc: string }[];
  steps?: { stepNumber: number; title: string; desc: string }[];
  footerNote?: string;
}

export interface FlowchartClue {
  title: string;
  steps: { stepNumber: number; title: string; detail?: string }[];
}

export interface VisualClue {
  icon?: string;
  table?: {
    title: string;
    headers: string[];
    rows: (string | number)[][];
  };
  chart?: {
    title: string;
    subtitle?: string;
    items: { label: string; count: number; percent: number; color?: string }[];
  };
  infographicCard?: {
    title: string;
    items: { label: string; detail: string; icon?: string }[];
  };
  infographicPoster?: InfographicPoster;
  flowchart?: FlowchartClue;
  mindmapDiagram?: {
    center: string;
    branches: { title: string; items: string[]; isTarget?: boolean }[];
  };
}

export interface Question {
  id: number;
  sectionId: SectionId;
  sectionTitle: string;
  topicTag: string;
  question: string;
  context?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  visualClue?: VisualClue;
}

export interface AnswerRecord {
  questionId: number;
  sectionId: SectionId;
  questionText: string;
  chosenIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  explanation: string;
}

export interface SectionScoreSummary {
  sectionId: SectionId;
  title: string;
  correctCount: number;
  totalCount: number;
  percentage: number;
}

export interface UnifiedScoreResult {
  totalCorrect: number;
  totalQuestions: number;
  averageScore: number; // 0 - 100
  letterGrade: 'A' | 'B' | 'C' | 'D';
  predicate: string;
  sectionBreakdown: SectionScoreSummary[];
}

export interface CertificateData {
  studentName: string;
  totalCorrect: number;
  totalQuestions: number;
  averageScore: number;
  predicate: string;
  date: string;
  sectionBreakdown: SectionScoreSummary[];
}

export type ScoreSaveState = 'idle' | 'saving' | 'saved' | 'local';

export interface PrefixRuleResult {
  rootWord: string;
  prefix: string;
  affixedWord: string;
  ruleCategory: 'peluluhan-ktsp' | 'tanpa-peluluhan' | 'satu-suku-kata' | 'gugus-konsonan';
  explanation: string;
  exampleSentence: string;
}
