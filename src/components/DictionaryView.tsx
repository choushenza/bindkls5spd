import React, { useState } from 'react';
import {
  Search,
  Wand2,
  BookOpen,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import { HOBBY_DICTIONARY } from '../data/modulesData';
import { getPrefixedWord } from '../utils/morphology';
import { soundEffects } from '../utils/audio';

export const DictionaryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hobbies' | 'prefixLab'>('prefixLab');
  const [hobbySearch, setHobbySearch] = useState<string>('');
  const [testInput, setTestInput] = useState<string>('sapu');

  const filteredHobbies = HOBBY_DICTIONARY.filter(
    (h) =>
      h.name.toLowerCase().includes(hobbySearch.toLowerCase()) ||
      h.tools.some((t) => t.toLowerCase().includes(hobbySearch.toLowerCase())) ||
      h.benefits.some((b) => b.toLowerCase().includes(hobbySearch.toLowerCase()))
  );

  const prefixResult = getPrefixedWord(testInput);

  const sampleWords = [
    'sapu',
    'tulis',
    'potong',
    'kirim',
    'cat',
    'lap',
    'pel',
    'bor',
    'kritik',
    'program',
    'lukis',
    'rawat',
    'baca',
    'gambar',
    'buat',
    'dengar'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-pop pb-12">
      {/* Tab Switcher Header */}
      <div className="bg-white rounded-3xl border border-amber-200/90 p-4 sm:p-6 shadow-xs text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2">
          Pusat Belajar & Kamus Rujukan
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
          Pelajari seluk-beluk ragam hobi menarik atau uji coba langsung kaidah awalan me- di Laboratorium Kata Interaktif!
        </p>

        {/* Segmented Control */}
        <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 max-w-md w-full">
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('prefixLab');
            }}
            className={`flex-1 py-2.5 px-4 rounded-xl font-display font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'prefixLab'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wand2 className="w-4 h-4" />
            <span>Laboratorium Awalan me-</span>
          </button>
          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('hobbies');
            }}
            className={`flex-1 py-2.5 px-4 rounded-xl font-display font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'hobbies'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Kamus Hobi Cilik</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Laboratorium Awalan me- */}
      {activeTab === 'prefixLab' && (
        <div className="space-y-6">
          {/* Interactive Tester Box */}
          <div className="bg-white rounded-3xl border border-emerald-200 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-800">
                <Wand2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Mesin Uji Morfologi Awalan me-
                </h3>
                <p className="text-xs text-slate-500">
                  Ketik kata dasar apa saja atau klik kata contoh di bawah untuk melihat kaidah perubahan bentuknya!
                </p>
              </div>
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative grow">
                <input
                  type="text"
                  value={testInput}
                  onChange={(e) => setTestInput(e.target.value)}
                  placeholder="Ketik kata dasar (contoh: tulis, potong, cat)..."
                  className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-900 text-sm sm:text-base focus:bg-white focus:border-emerald-500 focus:outline-hidden transition-colors"
                />
              </div>
            </div>

            {/* Quick Sample Word Chips */}
            <div className="mb-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Pilih Contoh Cepat:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {sampleWords.map((word) => (
                  <button
                    key={word}
                    onClick={() => {
                      soundEffects.playClick();
                      setTestInput(word);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                      testInput.toLowerCase() === word
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 hover:bg-emerald-50 border-slate-200 text-slate-700 hover:border-emerald-300'
                    }`}
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>

            {/* Analysis Result Card */}
            {testInput.trim() && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 animate-pop">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-emerald-200/60">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                    {prefixResult.ruleCategory === 'peluluhan-ktsp' && 'Kaidah Peluluhan KTSP'}
                    {prefixResult.ruleCategory === 'satu-suku-kata' && 'Kaidah 1 Suku Kata (menge-)'}
                    {prefixResult.ruleCategory === 'gugus-konsonan' && 'Pengecualian Gugus Konsonan'}
                    {prefixResult.ruleCategory === 'tanpa-peluluhan' && 'Penggabungan Tanpa Peluluhan'}
                  </span>
                  <span className="text-xs text-emerald-700 font-medium">
                    Awalan: <strong className="font-mono text-emerald-900">{prefixResult.prefix}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-lg sm:text-2xl font-black text-slate-800 mb-3 font-display">
                  <span>me-</span>
                  <span className="text-emerald-500 font-bold">+</span>
                  <span className="text-slate-700">{prefixResult.rootWord}</span>
                  <ArrowRight className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-emerald-700 underline decoration-emerald-400 decoration-3">
                    {prefixResult.affixedWord}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  {prefixResult.explanation}
                </p>

                {prefixResult.exampleSentence && (
                  <div className="p-3 bg-white/80 rounded-xl border border-emerald-200/80 text-xs text-slate-700">
                    <span className="font-bold text-emerald-800 block mb-0.5">
                      Contoh dalam Kalimat:
                    </span>
                    <p className="italic font-serif">"{prefixResult.exampleSentence}"</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Reference Cheat Sheet of Rules */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-sky-600" />
              <span>Rangkuman 4 Kaidah Emas Awalan me- (Kelas 5 SD)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="font-display font-bold text-sm text-amber-950 block mb-1">
                  1. Rumus Peluluhan K - T - S - P
                </span>
                <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                  Jika kata dasar diawali huruf <strong>K, T, S, P</strong> dan diikuti oleh <strong>huruf vokal (a, i, u, e, o)</strong>, huruf awal tersebut <strong>LEBUR/LULUH</strong>:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 font-mono">
                  <li>• K ➔ meng- (me- + kirim = <strong>mengirim</strong>)</li>
                  <li>• T ➔ men- (me- + tulis = <strong>menulis</strong>)</li>
                  <li>• S ➔ meny- (me- + sapu = <strong>menyapu</strong>)</li>
                  <li>• P ➔ mem- (me- + potong = <strong>memotong</strong>)</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200">
                <span className="font-display font-bold text-sm text-sky-950 block mb-1">
                  2. Aturan Satu Suku Kata (menge-)
                </span>
                <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                  Kata dasar pendek yang hanya terdiri dari <strong>satu suku kata</strong> selalu berubah menjadi <strong>menge-</strong>:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 font-mono">
                  <li>• me- + cat = <strong>mengecat</strong></li>
                  <li>• me- + lap = <strong>mengelap</strong></li>
                  <li>• me- + pel = <strong>mengepel</strong></li>
                  <li>• me- + bor = <strong>mengebor</strong></li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
                <span className="font-display font-bold text-sm text-purple-950 block mb-1">
                  3. Pengecualian Gugus Konsonan (kr, pr, tr)
                </span>
                <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                  Jika huruf K, T, S, P diikuti oleh <strong>huruf konsonan</strong> (konsonan ganda), huruf pertama <strong>TIDAK LULUH</strong>:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 font-mono">
                  <li>• me- + <u>kr</u>itik = <strong>mengkritik</strong></li>
                  <li>• me- + <u>pr</u>ogram = <strong>memprogram</strong></li>
                  <li>• me- + <u>tr</u>ansfer = <strong>mentransfer</strong></li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="font-display font-bold text-sm text-emerald-950 block mb-1">
                  4. Huruf Tanpa Peluluhan
                </span>
                <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                  Kata dasar diawali huruf L, M, N, R, W, B, C, D, G, H tidak meluruhkan huruf awalnya:
                </p>
                <ul className="text-xs text-slate-600 space-y-1 font-mono">
                  <li>• me- + lukis = <strong>melukis</strong></li>
                  <li>• me- + rawat = <strong>merawat</strong></li>
                  <li>• me- + buat = <strong>membuat</strong></li>
                  <li>• me- + dengar = <strong>mendengar</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Kamus Hobi Cilik */}
      {activeTab === 'hobbies' && (
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={hobbySearch}
                onChange={(e) => setHobbySearch(e.target.value)}
                placeholder="Cari nama hobi, perlengkapan, atau manfaat (contoh: kanvas, merajut, tanaman)..."
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Hobbies Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredHobbies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-lg text-slate-900 mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs font-serif italic text-amber-900 mb-3">
                    "{item.tagline}"
                  </p>

                  {/* Tools */}
                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Perlengkapan Utama:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.tools.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Manfaat Bagi Diri:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {item.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Grammar Link */}
                <div className="pt-3 border-t border-slate-100 text-xs font-mono font-semibold text-emerald-700 bg-emerald-50/60 p-2.5 rounded-xl">
                  {item.prefixExample}
                </div>
              </div>
            ))}
          </div>

          {filteredHobbies.length === 0 && (
            <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-500 text-sm">
              Tidak ditemukan hobi dengan kata kunci "{hobbySearch}". Coba kata kunci lain seperti "cat", "buku", atau "tanaman".
            </div>
          )}
        </div>
      )}
    </div>
  );
};
