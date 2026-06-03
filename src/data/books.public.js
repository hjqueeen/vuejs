import { BBC_LEARNING_SENTENCE_IDS, bbcLearningQuizChapters } from "./bbcLearningEnglishContent.js";
import { tongilQuizQuestions } from "./tongilQuizContent.js";
import {
  WAERME_KARTEIKARTEN_BOOK_ID,
  WAERME_KARTEIKARTEN_CARD_IDS,
} from "./waermeKarteikartenContent.js";

export const TONGIL_QUIZ_BOOK_ID = "book-tongil-quiz";
export const TONGIL_QUIZ_QUESTION_IDS = tongilQuizQuestions.map((q) => q.id);

export const publicBooks = [
  {
    id: "book-bbc-learning",
    templateType: "speaking-listening",
    title: "BBC Learning English",
    subtitle: "뉴스 헤드라인 속 표현",
    description:
      "BBC 뉴스 스타일 헤드라인으로 시사 표현(lock eyes, give urgency, in the wake of 등)을 문맥 속에서 반복 학습합니다.",
    coverColor: "book-cover-b",
    paragraphIds: ["p4"],
    sentenceIds: [...BBC_LEARNING_SENTENCE_IDS],
    quizChapters: bbcLearningQuizChapters,
  },
  {
    id: TONGIL_QUIZ_BOOK_ID,
    templateType: "quiz-workbook",
    title: "2026 청소년 통일골든벨",
    subtitle: "기본학습문제 (공개 200문항)",
    description:
      "통일원정대 공개문제 200선. 문제·보기·답·해설로 공부하고, 공부한 문항만 랜덤 퀴즈 10문제로 복습할 수 있습니다.",
    coverColor: "book-cover-c",
    questionIds: TONGIL_QUIZ_QUESTION_IDS,
  },
  {
    id: WAERME_KARTEIKARTEN_BOOK_ID,
    templateType: "flashcard",
    title: "Physik · Wärme",
    subtitle: "Karteikarten — Klasse 7 · LEK 5.6.",
    description:
      "7학년 LEK Wärmelehre: Ausdehnung, Anwendungen, Begriffe, Wärmeübertragung, Teilchenmodell, Dämmung 등 19장. 독일어·한국어(7학년).",
    coverColor: "book-cover-d",
    cardIds: WAERME_KARTEIKARTEN_CARD_IDS,
  },
];
