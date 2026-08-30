import {
  tongilQuizChapters,
  tongilQuizQuestions,
  getTongilQuestionById,
  getTongilQuestionsByChapter,
} from "./tongilQuizContent.js";
import {
  MATH_QUIZ_BOOK_ID,
  mathQuizChapters,
  mathQuizQuestions,
  getMathQuestionById,
  getMathQuestionsByChapter,
} from "./mathQuizContent.js";

export const TONGIL_QUIZ_BOOK_ID = "book-tongil-quiz";

/** @typedef {{ id: string, title: string, start?: number, end?: number }} QuizChapter */
/** @typedef {{ id: string, no: number, chapterId: string, type: string, question: string, choices: { key: string, label: string }[], answer: string, explanation?: string }} QuizQuestion */

/** @type {Record<string, { chapters: QuizChapter[], questions: QuizQuestion[], getQuestionById: (id: string) => QuizQuestion|null, getQuestionsByChapter: (chapterId: string) => QuizQuestion[], eyebrow?: string }>} */
const REGISTRY = {
  [TONGIL_QUIZ_BOOK_ID]: {
    chapters: tongilQuizChapters,
    questions: tongilQuizQuestions,
    getQuestionById: getTongilQuestionById,
    getQuestionsByChapter: getTongilQuestionsByChapter,
    eyebrow: "통일골든벨",
  },
  [MATH_QUIZ_BOOK_ID]: {
    chapters: mathQuizChapters,
    questions: mathQuizQuestions,
    getQuestionById: getMathQuestionById,
    getQuestionsByChapter: getMathQuestionsByChapter,
    eyebrow: "Mathe",
  },
};

/** @param {string} bookId */
export function getQuizWorkbookContent(bookId) {
  return REGISTRY[bookId] || null;
}

/** @param {string} bookId @param {string} questionId */
export function getQuizQuestionById(bookId, questionId) {
  const content = getQuizWorkbookContent(bookId);
  return content?.getQuestionById(questionId) || null;
}
