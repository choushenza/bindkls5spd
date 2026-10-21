import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateUnifiedScore, isAnswerCorrect } from './gameLogic.ts';
import { getPrefixedWord } from './morphology.ts';
import { AnswerRecord } from '../types.ts';

test('calculateUnifiedScore calculates overall average percentage and grades', () => {
  const dummyAnswers: AnswerRecord[] = Array.from({ length: 60 }, (_, i) => ({
    questionId: i + 1,
    sectionId: i < 20 ? 'section1' : i < 40 ? 'section2' : 'section3',
    questionText: `Soal ${i + 1}`,
    chosenIndex: 0,
    correctIndex: i < 54 ? 0 : 1, // 54 correct out of 60 (90%)
    isCorrect: i < 54,
    explanation: 'Penjelasan'
  }));

  const result = calculateUnifiedScore(dummyAnswers, 60);
  assert.equal(result.totalCorrect, 54);
  assert.equal(result.averageScore, 90);
  assert.equal(result.letterGrade, 'A');
  assert.equal(result.sectionBreakdown.length, 3);
  assert.equal(result.sectionBreakdown[0].totalCount, 20);
});

test('calculateUnifiedScore handles lower average score accurately', () => {
  const dummyAnswers: AnswerRecord[] = Array.from({ length: 60 }, (_, i) => ({
    questionId: i + 1,
    sectionId: i < 20 ? 'section1' : i < 40 ? 'section2' : 'section3',
    questionText: `Soal ${i + 1}`,
    chosenIndex: 0,
    correctIndex: i < 42 ? 0 : 1, // 42 correct out of 60 (70%)
    isCorrect: i < 42,
    explanation: 'Penjelasan'
  }));

  const result = calculateUnifiedScore(dummyAnswers, 60);
  assert.equal(result.totalCorrect, 42);
  assert.equal(result.averageScore, 70);
  assert.equal(result.letterGrade, 'C');
});

test('isAnswerCorrect checks indices accurately', () => {
  assert.equal(isAnswerCorrect(2, 2), true);
  assert.equal(isAnswerCorrect(1, 2), false);
});

test('morphology: single syllable rule changes me- to menge-', () => {
  assert.equal(getPrefixedWord('cat').affixedWord, 'mengecat');
  assert.equal(getPrefixedWord('lap').affixedWord, 'mengelap');
  assert.equal(getPrefixedWord('pel').affixedWord, 'mengepel');
});

test('morphology: K, T, S, P peluluhan rule melts first letter', () => {
  assert.equal(getPrefixedWord('kirim').affixedWord, 'mengirim');
  assert.equal(getPrefixedWord('tulis').affixedWord, 'menulis');
  assert.equal(getPrefixedWord('sapu').affixedWord, 'menyapu');
  assert.equal(getPrefixedWord('potong').affixedWord, 'memotong');
});

test('morphology: consonant cluster retains first letter without peluluhan', () => {
  assert.equal(getPrefixedWord('kritik').affixedWord, 'mengkritik');
  assert.equal(getPrefixedWord('program').affixedWord, 'memprogram');
  assert.equal(getPrefixedWord('transfer').affixedWord, 'mentransfer');
});
