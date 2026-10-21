import React from 'react';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  Palette,
  Sprout,
  Recycle,
  Scissors,
  Camera,
  BookOpen,
  Music,
  HeartPulse,
  FolderHeart,
  BarChart2,
  Table as TableIcon,
  CheckCircle2,
  Lightbulb,
  Clock,
  Compass,
  Layers,
  Flame,
  Award
} from 'lucide-react';
import { VisualClue } from '../types';

interface VisualClueRendererProps {
  clue?: VisualClue;
}

export const VisualClueRenderer: React.FC<VisualClueRendererProps> = ({ clue }) => {
  if (!clue) return null;

  const renderIcon = (iconName?: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'Palette':
        return <Palette className={`${className} text-amber-500`} />;
      case 'Sprout':
        return <Sprout className={`${className} text-emerald-500`} />;
      case 'Recycle':
        return <Recycle className={`${className} text-teal-500`} />;
      case 'Scissors':
        return <Scissors className={`${className} text-rose-500`} />;
      case 'Camera':
        return <Camera className={`${className} text-sky-500`} />;
      case 'BookOpen':
        return <BookOpen className={`${className} text-blue-500`} />;
      case 'Music':
        return <Music className={`${className} text-indigo-500`} />;
      case 'HeartPulse':
        return <HeartPulse className={`${className} text-red-500`} />;
      case 'FolderHeart':
        return <FolderHeart className={`${className} text-purple-500`} />;
      case 'Clock':
        return <Clock className={`${className} text-amber-600`} />;
      case 'Lightbulb':
        return <Lightbulb className={`${className} text-yellow-500`} />;
      case 'Compass':
        return <Compass className={`${className} text-cyan-600`} />;
      case 'Award':
        return <Award className={`${className} text-amber-500`} />;
      case 'Flame':
        return <Flame className={`${className} text-orange-500`} />;
      default:
        return <Sparkles className={`${className} text-amber-500`} />;
    }
  };

  return (
    <div className="space-y-4 my-4">
      {/* 1. Full Rich Infographic Poster */}
      {clue.infographicPoster && (
        <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 shadow-md p-4 sm:p-6 overflow-hidden relative">
          {/* Top Decorative Infographic Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-amber-200">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 text-white rounded-lg text-xs font-black tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{clue.infographicPoster.badge || 'INFOGRAFIK EDUKASI KELAS 5 SD'}</span>
            </div>
            <span className="text-[11px] font-bold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-md border border-amber-300/60">
              Media Teks Visual Bab 3
            </span>
          </div>

          {/* Poster Header */}
          <div className="mb-4">
            <h4 className="font-display font-black text-slate-900 text-base sm:text-lg leading-tight">
              {clue.infographicPoster.title}
            </h4>
            {clue.infographicPoster.subtitle && (
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                {clue.infographicPoster.subtitle}
              </p>
            )}
          </div>

          {/* Key Stats Bar (if present) */}
          {clue.infographicPoster.stats && clue.infographicPoster.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
              {clue.infographicPoster.stats.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white/95 rounded-xl border border-amber-200 p-2.5 text-center shadow-2xs"
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    {st.icon && renderIcon(st.icon, 'w-4 h-4')}
                    <span className="font-display font-black text-amber-700 text-base sm:text-lg leading-none">
                      {st.number}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 leading-tight block">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Key Points Grid */}
          {clue.infographicPoster.keyPoints && clue.infographicPoster.keyPoints.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
              {clue.infographicPoster.keyPoints.map((kp, kIdx) => (
                <div
                  key={kIdx}
                  className="bg-white/90 rounded-xl border border-slate-200/90 p-3 flex items-start gap-2.5 shadow-2xs hover:border-amber-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100/80 flex items-center justify-center shrink-0 mt-0.5">
                    {renderIcon(kp.icon, 'w-4 h-4')}
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 leading-tight">
                      {kp.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug mt-0.5">
                      {kp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sequence Steps (if present) */}
          {clue.infographicPoster.steps && clue.infographicPoster.steps.length > 0 && (
            <div className="space-y-2 mb-3">
              {clue.infographicPoster.steps.map((st, stepIdx) => (
                <div
                  key={stepIdx}
                  className="bg-white rounded-xl border border-amber-200 p-2.5 flex items-center gap-3 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                    {st.stepNumber}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-display font-bold text-xs text-slate-900 block">
                      {st.title}
                    </span>
                    <span className="text-[11px] text-slate-600 leading-tight block">
                      {st.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Note */}
          {clue.infographicPoster.footerNote && (
            <div className="pt-2.5 mt-2 border-t border-amber-200/70 text-[10px] sm:text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sumber Rujukan: {clue.infographicPoster.footerNote}</span>
            </div>
          )}
        </div>
      )}

      {/* 2. Infographic Data Chart (Bar Chart) */}
      {clue.chart && (
        <div className="p-4 sm:p-5 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/60 rounded-2xl border-2 border-amber-300 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-amber-200">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wider">
              <BarChart2 className="w-4 h-4 text-amber-600" />
              <span>Infografik Data Diagram Batang</span>
            </div>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
              Bahan Analisis Data
            </span>
          </div>

          <h4 className="font-display font-extrabold text-slate-900 text-sm sm:text-base mb-1">
            {clue.chart.title}
          </h4>
          {clue.chart.subtitle && (
            <p className="text-xs text-slate-600 mb-3">{clue.chart.subtitle}</p>
          )}

          <div className="space-y-3 mt-3">
            {clue.chart.items.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800">
                  <span>{item.label}</span>
                  <span className="font-mono tabular-nums text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                    {item.count} siswa ({item.percent}%)
                  </span>
                </div>
                <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80">
                  <div
                    className={`h-full rounded-full transition-all duration-700 shadow-xs ${
                      item.color || 'bg-amber-500'
                    }`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Infographic Procedure Flowchart */}
      {clue.flowchart && (
        <div className="p-4 sm:p-5 bg-gradient-to-br from-cyan-50/70 via-white to-sky-50/70 rounded-2xl border-2 border-cyan-300 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-cyan-200">
            <div className="flex items-center gap-1.5 text-xs font-black text-cyan-900 uppercase tracking-wider">
              <Layers className="w-4 h-4 text-cyan-600" />
              <span>Infografik Bagan Alur Prosedur</span>
            </div>
            <span className="text-[11px] font-bold text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-full">
              Urutan Langkah
            </span>
          </div>

          <h4 className="font-display font-extrabold text-slate-900 text-sm sm:text-base mb-3">
            {clue.flowchart.title}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {clue.flowchart.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-cyan-200 p-3 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white font-black text-xs flex items-center justify-center mb-2 shadow-xs">
                    {st.stepNumber}
                  </div>
                  <h5 className="font-display font-bold text-xs text-slate-900 leading-tight">
                    {st.title}
                  </h5>
                  {st.detail && (
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      {st.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Infographic Visual Card Grid */}
      {clue.infographicCard && (
        <div className="p-4 sm:p-5 bg-white rounded-2xl border-2 border-amber-300 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Infografik Visual Perlengkapan & Ciri Khas</span>
            </div>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
              Koleksi Data Visual
            </span>
          </div>

          <h4 className="font-display font-bold text-slate-900 text-sm mb-3">
            {clue.infographicCard.title}
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {clue.infographicCard.items.map((it, idx) => (
              <div
                key={idx}
                className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex flex-col items-center text-center shadow-2xs hover:bg-amber-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-2xs mb-2">
                  {renderIcon(it.icon)}
                </div>
                <span className="font-display font-bold text-xs text-slate-900 leading-tight block">
                  {it.label}
                </span>
                <span className="text-[10px] text-slate-500 leading-tight mt-0.5 block">
                  {it.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Data Table Clue */}
      {clue.table && (
        <div className="p-3 sm:p-5 bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-x-auto">
          <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-black text-slate-700 uppercase tracking-wider">
              <TableIcon className="w-4 h-4 text-slate-500" />
              <span>Infografik Tabel Data Rujukan</span>
            </div>
            <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
              Tabel Resmi
            </span>
          </div>
          <h4 className="font-display font-bold text-slate-900 text-sm mb-2.5">
            {clue.table.title}
          </h4>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300 bg-slate-100 text-slate-800">
                {clue.table.headers.map((h, i) => (
                  <th key={i} className="py-2.5 px-3 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {clue.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-amber-50/60 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="py-2 px-3 text-slate-800 font-medium">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 6. Mind Map Diagram */}
      {clue.mindmapDiagram && (
        <div className="p-4 sm:p-5 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-2xl border-2 border-indigo-300 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-indigo-200">
            <div className="text-xs font-black text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Infografik Peta Pikiran (Mind Map)</span>
            </div>
            <span className="text-[11px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-full">
              Bagan Analisis Konsep
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Center Node */}
            <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-md text-center max-w-[170px] shrink-0 border-2 border-indigo-400">
              <span className="text-[11px] font-bold block text-indigo-200 uppercase">Topik Sentral</span>
              <span className="font-display font-black text-base leading-tight block">
                {clue.mindmapDiagram.center}
              </span>
            </div>

            {/* Connection Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center text-indigo-400">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>

            {/* Branches Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {clue.mindmapDiagram.branches.map((b, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all ${
                    b.isTarget
                      ? 'bg-amber-100/90 border-amber-400 shadow-sm ring-2 ring-amber-300'
                      : 'bg-white border-indigo-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs font-bold ${
                        b.isTarget ? 'text-amber-900' : 'text-indigo-900'
                      }`}
                    >
                      Cabang: {b.title}
                    </span>
                    {b.isTarget && (
                      <HelpCircle className="w-4 h-4 text-amber-600 animate-bounce" />
                    )}
                  </div>
                  <ul className="text-xs text-slate-700 space-y-0.5 list-disc list-inside">
                    {b.items.map((it, itIdx) => (
                      <li
                        key={itIdx}
                        className={
                          b.isTarget ? 'font-bold text-amber-900 list-none' : ''
                        }
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
