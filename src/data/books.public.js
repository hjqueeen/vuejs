import { BBC_LEARNING_SENTENCE_IDS, bbcLearningQuizChapters } from "./bbcLearningEnglishContent.js";
import { tongilQuizQuestions } from "./tongilQuizContent.js";
import {
  ALLTAG_KO_DE_BOOK_ID,
  ALLTAG_KO_DE_CARD_IDS,
} from "./alltagKoDeContent.js";
import {
  WAERME_KARTEIKARTEN_BOOK_ID,
  WAERME_KARTEIKARTEN_CARD_IDS,
} from "./waermeKarteikartenContent.js";
import {
  BB84_PROTOCOL_BOOK_ID,
  BB84_PROTOCOL_CARD_IDS,
} from "./bb84ProtocolContent.js";
import {
  LATIN_VOCAB_BOOK_ID,
  LATIN_VOCAB_CARD_IDS,
} from "./latinVocabContent.js";
export const TONGIL_QUIZ_BOOK_ID = "book-tongil-quiz";
export const TONGIL_QUIZ_QUESTION_IDS = tongilQuizQuestions.map((q) => q.id);

export const publicBooks = [
  {
    id: BB84_PROTOCOL_BOOK_ID,
    templateType: "flashcard",
    title: "BB84 Protocol",
    subtitle: "발표 스크립트 + 워크샵 대화 · 한→English",
    description:
      "BB84 발표 원문(한국어)과 워크샵 팀 대화(영어)를 플래시카드로 연습합니다. 1–2일차: 프로토콜 이해 확인, AI·IDE·Colab·Qiskit 셋업.",
    coverColor: "book-cover-a",
    cardIds: BB84_PROTOCOL_CARD_IDS,
  },
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
  // {
  //   id: TONGIL_QUIZ_BOOK_ID,
  //   templateType: "quiz-workbook",
  //   title: "2026 청소년 통일골든벨",
  //   subtitle: "기본학습문제 (공개 200문항)",
  //   description:
  //     "통일원정대 공개문제 200선. 문제·보기·답·해설로 공부하고, 공부한 문항만 랜덤 퀴즈 10문제로 복습할 수 있습니다.",
  //   coverColor: "book-cover-c",
  //   questionIds: TONGIL_QUIZ_QUESTION_IDS,
  // },
  {
    id: ALLTAG_KO_DE_BOOK_ID,
    templateType: "flashcard",
    title: "Alltag · 한↔외",
    subtitle: "Karteikarten — 일상 회화 · Deutsch / English",
    description:
      "일상에서 말하고 싶은 한국어 문장을 독일어 또는 영어로 외웁니다. 헤더에서 공부할 언어를 선택하세요. SM-2 간격 반복(Again/Hard/Good/Easy)으로 복습합니다.",
    coverColor: "book-cover-e",
    cardIds: ALLTAG_KO_DE_CARD_IDS,
  },
  // {
  //   id: WAERME_KARTEIKARTEN_BOOK_ID,
  //   templateType: "flashcard",
  //   title: "Physik · Wärme",
  //   subtitle: "Karteikarten — Klasse 7 · LEK 5.6.",
  //   description:
  //     "7학년 LEK Wärmelehre: Ausdehnung, Anwendungen, Begriffe, Wärmeübertragung, Teilchenmodell, Dämmung 등 19장. 독일어·한국어(7학년).",
  //   coverColor: "book-cover-d",
  //   cardIds: WAERME_KARTEIKARTEN_CARD_IDS,
  // },
  {
    id: LATIN_VOCAB_BOOK_ID,
    templateType: "flashcard",
    title: "Latein · Vokabeln",
    subtitle: "Karteikarten — Latein → Deutsch",
    description:
      "라틴어 단어 29개. 앞면: 라틴어, 뒷면: 변형(활용·품사)과 독일어 뜻. SM-2 간격 반복(Again/Hard/Good/Easy)으로 복습합니다.",
    coverColor: "book-cover-c",
    cardIds: LATIN_VOCAB_CARD_IDS,
  },
];
