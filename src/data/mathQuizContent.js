/** Mathe · Aufgaben — 8학년 수학 문제집 */

export const MATH_QUIZ_BOOK_ID = "book-math-quiz";

/** @typedef {'expand-rectangle'|'match'|'fill-blank'} MathExerciseType */

export const mathWorksheetPages = [
  {
    id: "math-page-klammer-1",
    section: "1.5",
    title: "Auflösen einer Klammer",
    titleKo: "괄호 풀기 ( distributives Gesetz )",
    exercises: [
      {
        id: "ex-25",
        no: 25,
        type: "expand-rectangle",
        instructionDe: "Löse die Klammer auf und veranschauliche das Ergebnis am Rechteck.",
        instructionKo: "괄호를 풀고, 직사각형으로 결과를 나타내세요.",
        items: [
          {
            id: "25a",
            label: "a)",
            expression: "5(x + 3y)",
            diagram: { outerW: 5, parts: [{ len: "x", sign: "+" }, { len: "3y", sign: "+" }] },
            answer: "5x + 15y",
            explanation: "5 · x + 5 · 3y = 5x + 15y",
          },
          {
            id: "25b",
            label: "b)",
            expression: "2x(3y + 4)",
            diagram: { outerH: "2x", parts: [{ len: "3y", sign: "+" }, { len: "4", sign: "+" }] },
            answer: "6xy + 8x",
            explanation: "2x · 3y + 2x · 4 = 6xy + 8x",
          },
          {
            id: "25c",
            label: "c)",
            expression: "3(2z − 5)",
            diagram: { outerW: 3, parts: [{ len: "2z", sign: "+" }, { len: "5", sign: "−" }] },
            answer: "6z − 15",
            explanation: "3 · 2z − 3 · 5 = 6z − 15",
          },
          {
            id: "25d",
            label: "d)",
            expression: "4a(2y − x)",
            diagram: { outerH: "4a", parts: [{ len: "2y", sign: "+" }, { len: "x", sign: "−" }] },
            answer: "8ay − 4ax",
            explanation: "4a · 2y − 4a · x = 8ay − 4ax",
          },
        ],
      },
      {
        id: "ex-26",
        no: 26,
        type: "match",
        instructionDe: "Verbinde wertgleiche Terme miteinander.",
        instructionKo: "값이 같은 항끼리 연결하세요.",
        top: [
          { id: "t1", expr: "6ab − 15a" },
          { id: "t2", expr: "6b − 5a" },
          { id: "t3", expr: "16ab + 24b" },
          { id: "t4", expr: "20a + 16b" },
          { id: "t5", expr: "15ab + 30a" },
        ],
        bottom: [
          { id: "b1", letter: "A", expr: "5a(3b + 6)" },
          { id: "b2", letter: "B", expr: "(18b − 15a) : 3" },
          { id: "b3", letter: "C", expr: "3a(2b − 5)" },
          { id: "b4", letter: "D", expr: "20a + 16b" },
          { id: "b5", letter: "E", expr: "(8a + 12) · 2b" },
        ],
        answers: { t1: "b3", t2: "b2", t3: "b5", t4: "b4", t5: "b1" },
      },
      {
        id: "ex-27",
        no: 27,
        type: "fill-blank",
        instructionDe: "Ergänze.",
        instructionKo: "빈칸을 채우세요.",
        items: [
          {
            id: "27a",
            label: "a)",
            parts: [
              { type: "text", value: "x · (" },
              { type: "blank", id: "a1", answer: "3", width: "4ch" },
              { type: "text", value: " − 2y) = 3x − " },
              { type: "blank", id: "a2", answer: "2xy", accept: ["2xy", "2·x·y", "2 x y"] },
            ],
            explanation: "x(3 − 2y) = 3x − 2xy",
          },
          {
            id: "27b",
            label: "b)",
            parts: [
              { type: "blank", id: "b1", answer: "−2", accept: ["-2"] },
              { type: "text", value: " · (3a − b) = −6a + " },
              { type: "blank", id: "b2", answer: "2b", accept: ["2b"] },
            ],
            explanation: "−2 · (3a − b) = −6a + 2b",
          },
          {
            id: "27c",
            label: "c)",
            parts: [
              { type: "text", value: "3x · (2x − 4y + x) = " },
              { type: "blank", id: "c1", answer: "9x² − 12xy", accept: ["9x²-12xy", "9x² − 12xy", "9x^2-12xy"] },
            ],
            explanation: "3x · (3x − 4y) = 9x² − 12xy",
          },
          {
            id: "27d",
            label: "d)",
            parts: [
              { type: "frac", num: "b", den: "3" },
              { type: "text", value: " · (" },
              { type: "frac", num: "b", den: "2" },
              { type: "text", value: " + " },
              { type: "blank", id: "d1", answer: "a", width: "3ch" },
              { type: "text", value: ") = " },
              { type: "frac", num: "b²", den: "6" },
              { type: "text", value: " + " },
              { type: "frac", num: "ab", den: "3" },
            ],
            explanation: "b/3 · a = ab/3 → b/3 · (b/2 + a) = b²/6 + ab/3",
          },
          {
            id: "27e",
            label: "e)",
            parts: [
              { type: "blank", id: "e1", answer: "2,5", accept: ["2.5", "2,5"] },
              { type: "text", value: " · (s − 0,4t + " },
              { type: "blank", id: "e2", answer: "1,2", accept: ["1.2", "1,2"] },
              { type: "text", value: ") = 2,5s − t + 3" },
            ],
            explanation: "2,5 · 0,4t = t,  2,5 · 1,2 = 3",
          },
          {
            id: "27f",
            label: "f)",
            parts: [
              { type: "text", value: "5 · (2a + b) − 3 · (" },
              { type: "blank", id: "f1", answer: "a − 4b + 2", accept: ["a-4b+2", "a − 4b + 2"] },
              { type: "text", value: ") = 7a + 17b − 6" },
            ],
            explanation: "−3(a − 4b + 2) = −3a + 12b − 6 → 10a + 5b − 3a + 12b − 6 = 7a + 17b − 6",
          },
        ],
      },
    ],
  },
];

export const MATH_WORKSHEET_PAGE_IDS = mathWorksheetPages.map((p) => p.id);

export const getMathWorksheetPageById = (pageId) =>
  mathWorksheetPages.find((p) => p.id === pageId) || null;

export const getDefaultMathWorksheetPageId = () =>
  mathWorksheetPages[0]?.id || null;

/** quiz-workbook 호환 (진행률 등) */
export const mathQuizChapters = mathWorksheetPages.map((page) => ({
  id: page.id,
  title: `${page.section} ${page.title}`,
}));

export const mathQuizQuestions = [];

export const MATH_QUIZ_QUESTION_IDS = mathQuizQuestions.map((q) => q.id);

export const getMathQuestionById = (id) =>
  mathQuizQuestions.find((q) => q.id === id) || null;

export const getMathQuestionsByChapter = (chapterId) =>
  mathQuizQuestions.filter((q) => q.chapterId === chapterId);
