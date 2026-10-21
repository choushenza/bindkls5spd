import { PrefixRuleResult } from '../types';

/**
 * Knowledge base of common single-syllable root words in Indonesian
 */
const SINGLE_SYLLABLE_WORDS = new Set([
  'cat', 'lap', 'pel', 'bor', 'bom', 'tes', 'cek', 'las', 'klik', 'cor', 'rem', 'pak', 'tik', 'pos', 'sah'
]);

/**
 * Determine the prefixed form of a root word with 'me-' based on Indonesian grammar rules
 */
export function getPrefixedWord(rawWord: string): PrefixRuleResult {
  const root = rawWord.trim().toLowerCase();
  if (!root) {
    return {
      rootWord: '',
      prefix: 'me-',
      affixedWord: '',
      ruleCategory: 'tanpa-peluluhan',
      explanation: 'Masukkan kata dasar untuk memeriksa aturan awalan me-.',
      exampleSentence: ''
    };
  }

  // 1. Single syllable rule: me- becomes menge-
  // Examples: cat -> mengecat, lap -> mengelap, pel -> mengepel, bor -> mengebor
  if (SINGLE_SYLLABLE_WORDS.has(root) || (root.length <= 4 && !root.slice(1).match(/[aiueo]/))) {
    const affixed = `menge${root}`;
    return {
      rootWord: root,
      prefix: 'menge-',
      affixedWord: affixed,
      ruleCategory: 'satu-suku-kata',
      explanation: `Kata "${root}" adalah kata ber-1 suku kata. Awalan me- berubah menjadi "menge-" (me- + ${root} = ${affixed}).`,
      exampleSentence: `Adit ${affixed} dinding kamarnya agar terlihat rapi dan indah.`
    };
  }

  const vowels = ['a', 'i', 'u', 'e', 'o'];
  const firstChar = root[0];
  const secondChar = root[1] || '';
  const isSecondVowel = vowels.includes(secondChar);

  // 2. K, T, S, P Peluluhan rule
  // Rule: If root word starts with K, T, S, P followed by a vowel, the first letter melts (luluh).
  // Exception: If followed by consonant (cluster/gugus konsonan, e.g. kr, pr, tr), it does NOT melt.
  if (['k', 't', 's', 'p'].includes(firstChar)) {
    if (isSecondVowel) {
      // Peluluhan applies!
      const remainder = root.slice(1);
      let prefix = '';
      let affixed = '';
      if (firstChar === 'k') {
        prefix = 'meng-';
        affixed = `meng${remainder}`;
      } else if (firstChar === 't') {
        prefix = 'men-';
        affixed = `men${remainder}`;
      } else if (firstChar === 's') {
        prefix = 'meny-';
        affixed = `meny${remainder}`;
      } else if (firstChar === 'p') {
        prefix = 'mem-';
        affixed = `mem${remainder}`;
      }

      return {
        rootWord: root,
        prefix,
        affixedWord: affixed,
        ruleCategory: 'peluluhan-ktsp',
        explanation: `Huruf pertama "${firstChar.toUpperCase()}" diikuti huruf vokal "${secondChar}", sehingga luluh (lebur) menjadi "${prefix}" (${affixed}).`,
        exampleSentence: `Siswa kelas 5 sedang belajar ${affixed} karya mereka dengan cermat.`
      };
    } else {
      // Cluster consonant (gugus konsonan seperti kl, kr, pr, tr, sk, sp, st) -> TIDAK luluh
      let prefixLabel = 'me-';
      let prefixStem = 'me';
      if (firstChar === 'k') {
        prefixLabel = 'meng-';
        prefixStem = 'meng';
      } else if (firstChar === 't') {
        prefixLabel = 'men-';
        prefixStem = 'men';
      } else if (firstChar === 's') {
        prefixLabel = 'me-';
        prefixStem = 'me';
      } else if (firstChar === 'p') {
        prefixLabel = 'mem-';
        prefixStem = 'mem';
      }

      const affixed = `${prefixStem}${root}`;
      return {
        rootWord: root,
        prefix: prefixLabel,
        affixedWord: affixed,
        ruleCategory: 'gugus-konsonan',
        explanation: `Huruf pertama "${firstChar.toUpperCase()}" diikuti konsonan "${secondChar}" (gugus konsonan), jadi huruf "${firstChar.toUpperCase()}" TIDAK luluh (me- + ${root} = ${affixed}).`,
        exampleSentence: `Lina berusaha ${affixed} kegiatan hariannya dengan baik.`
      };
    }
  }

  // 3. Vowels (a, i, u, e, o) and g, h, kh -> meng-
  if (vowels.includes(firstChar) || firstChar === 'g' || firstChar === 'h') {
    const affixed = `meng${root}`;
    return {
      rootWord: root,
      prefix: 'meng-',
      affixedWord: affixed,
      ruleCategory: 'tanpa-peluluhan',
      explanation: `Kata dasar berawalan huruf "${firstChar.toUpperCase()}", sehingga awalan me- berubah menjadi "meng-" tanpa peluluhan (${affixed}).`,
      exampleSentence: `Budi gemar ${affixed} saat senggang untuk mengisi waktu.`
    };
  }

  // 4. b, f, v -> mem-
  if (['b', 'f', 'v'].includes(firstChar)) {
    const affixed = `mem${root}`;
    return {
      rootWord: root,
      prefix: 'mem-',
      affixedWord: affixed,
      ruleCategory: 'tanpa-peluluhan',
      explanation: `Kata dasar diawali huruf "${firstChar.toUpperCase()}", sehingga awalan me- berubah menjadi "mem-" tanpa peluluhan (${affixed}).`,
      exampleSentence: `Ibu senang ${affixed} resep kue tradisional yang lezat.`
    };
  }

  // 5. c, d, j, z -> men-
  if (['c', 'd', 'j', 'z'].includes(firstChar)) {
    const affixed = `men${root}`;
    return {
      rootWord: root,
      prefix: 'men-',
      affixedWord: affixed,
      ruleCategory: 'tanpa-peluluhan',
      explanation: `Kata dasar diawali huruf "${firstChar.toUpperCase()}", sehingga awalan me- berubah menjadi "men-" tanpa peluluhan (${affixed}).`,
      exampleSentence: `Sari gemar ${affixed} pola baju rajutan barunya.`
    };
  }

  // 6. l, m, n, r, w, y, ny, ng -> me- (tetap me-)
  if (['l', 'm', 'n', 'r', 'w', 'y'].includes(firstChar)) {
    const affixed = `me${root}`;
    return {
      rootWord: root,
      prefix: 'me-',
      affixedWord: affixed,
      ruleCategory: 'tanpa-peluluhan',
      explanation: `Kata dasar diawali huruf "${firstChar.toUpperCase()}", bentuk awalan tetap "me-" tanpa peluluhan (${affixed}).`,
      exampleSentence: `Rian menekuni hobi ${affixed} pemandangan alam di akhir pekan.`
    };
  }

  // Default fallback
  return {
    rootWord: root,
    prefix: 'me-',
    affixedWord: `me${root}`,
    ruleCategory: 'tanpa-peluluhan',
    explanation: `Kata dasar digabungkan dengan awalan me- menjadi "me${root}".`,
    exampleSentence: `Anak-anak giat me${root} berbagai hal baru di sekolah.`
  };
}
