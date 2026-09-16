import { BBC_LEARNING_SENTENCE_IDS, bbcLearningQuizChapters } from "./bbcLearningEnglishContent.js";
import { tongilQuizQuestions } from "./tongilQuizContent.js";
import {
  LIVE_ACADEMY_TODDLER_BOOK_ID,
  LIVE_ACADEMY_TODDLER_CARD_IDS,
} from "./liveAcademyToddlerContent.js";
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
import {
  LATIN_VOCAB_L14_BOOK_ID,
  LATIN_VOCAB_L14_CARD_IDS,
} from "./latinVocabL14Content.js";
import {
  LATIN_VOCAB_L15_BOOK_ID,
  LATIN_VOCAB_L15_CARD_IDS,
} from "./latinVocabL15Content.js";
import {
  LATIN_VOCAB_L16_BOOK_ID,
  LATIN_VOCAB_L16_CARD_IDS,
} from "./latinVocabL16Content.js";
import {
  ABSOLUTISMUS_BOOK_ID,
  ABSOLUTISMUS_CARD_IDS,
} from "./absolutismusContent.js";
import {
  SPANISH_LLUVIAS_BOOK_ID,
  SPANISH_LLUVIAS_CARD_IDS,
} from "./spanishLluviasContent.js";
import {
  MATH_QUIZ_BOOK_ID,
  MATH_QUIZ_QUESTION_IDS,
  MATH_WORKSHEET_PAGE_IDS,
} from "./mathQuizContent.js";
export { TONGIL_QUIZ_BOOK_ID } from "./quizWorkbookRegistry.js";
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
    id: LIVE_ACADEMY_TODDLER_BOOK_ID,
    templateType: "flashcard",
    title: "라이브 아카데미 토들러",
    subtitle: "여행 기본질문 · 한↔Deutsch / English",
    description:
      "Live Academy Toddler 영상에서 정리한 플래시카드 62장. 한국어를 보고 독일어 또는 영어로 외웁니다.",
    coverColor: "book-cover-b",
    cardIds: LIVE_ACADEMY_TODDLER_CARD_IDS,
  },
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
  {
    id: WAERME_KARTEIKARTEN_BOOK_ID,
    templateType: "flashcard",
    title: "Physik · Wärme",
    subtitle: "Karteikarten — Klasse 7 · LEK 5.6.",
    description:
      "7학년 LEK Wärmelehre: Ausdehnung, Anwendungen, Begriffe, Wärmeübertragung, Teilchenmodell, Dämmung 등 19장. 독일어·한국어(7학년).",
    coverColor: "book-cover-d",
    cardIds: WAERME_KARTEIKARTEN_CARD_IDS,
    owner: "amin",
    grade: 7,
    subjectKey: "physik",
    subjectLabel: "물리",
  },
  {
    id: LATIN_VOCAB_BOOK_ID,
    templateType: "flashcard",
    title: "Latein · Vokabeln",
    subtitle: "Karteikarten — Latein → Deutsch",
    description:
      "라틴어 단어 29개. 앞면: 라틴어, 뒷면: 변형(활용·품사)과 독일어 뜻. SM-2 간격 반복(Again/Hard/Good/Easy)으로 복습합니다.",
    coverColor: "book-cover-c",
    cardIds: LATIN_VOCAB_CARD_IDS,
    owner: "amin",
    grade: 7,
    subjectKey: "latein",
    subjectLabel: "라틴어",
  },
  {
    id: LATIN_VOCAB_L14_BOOK_ID,
    templateType: "flashcard",
    title: "Latein · Lektion 14",
    subtitle: "Bauern und Adlige · Latein → Deutsch",
    description:
      "8학년 라틴어 Lektion 14 단어 36장 (Wiederholung + Lektionstext + Vokabular 14 + Wendungen). 앞면: 라틴어, 뒷면: 변형·독일어 뜻.",
    coverColor: "book-cover-b",
    cardIds: LATIN_VOCAB_L14_CARD_IDS,
    owner: "amin",
    grade: 8,
    subjectKey: "latein",
    subjectLabel: "라틴어",
  },
  {
    id: LATIN_VOCAB_L15_BOOK_ID,
    templateType: "flashcard",
    title: "Latein · Lektion 15",
    subtitle: "Römische exempla · Latein → Deutsch",
    description:
      "8학년 라틴어 Lektion 15 단어 65장 (Wiederholung + Lektionstext + Vokabular + Wendungen + Übungen/PPP). 앞면: 라틴어, 뒷면: 변형·독일어 뜻.",
    coverColor: "book-cover-d",
    cardIds: LATIN_VOCAB_L15_CARD_IDS,
    owner: "amin",
    grade: 8,
    subjectKey: "latein",
    subjectLabel: "라틴어",
  },
  {
    id: LATIN_VOCAB_L16_BOOK_ID,
    templateType: "flashcard",
    title: "Latein · Lektion 16",
    subtitle: "Geben und Nehmen: Politik in Rom · Latein → Deutsch",
    description:
      "8학년 라틴어 Lektion 16 단어 39장 (Wiederholung + Lektionstext + Vokabular 16). 앞면: 라틴어, 뒷면: 변형·독일어 뜻.",
    coverColor: "book-cover-a",
    cardIds: LATIN_VOCAB_L16_CARD_IDS,
    owner: "amin",
    grade: 8,
    subjectKey: "latein",
    subjectLabel: "라틴어",
  },
  {
    id: ABSOLUTISMUS_BOOK_ID,
    templateType: "flashcard",
    title: "Geschichte · Absolutismus & Revolution",
    subtitle: "Karteikarten — Begriff → Erklärung",
    description:
      "역사 73장 · Absolutismus, Französische Revolution, Karikatur M1–M3, M6–M8. 섹션별로 접어서 공부하세요.",
    coverColor: "book-cover-a",
    cardIds: ABSOLUTISMUS_CARD_IDS,
    owner: "hangyeol",
    grade: 8,
    subjectKey: "geschichte",
    subjectLabel: "역사",
  },
  {
    id: SPANISH_LLUVIAS_BOOK_ID,
    templateType: "flashcard",
    title: "Español · Lluvias tropicales",
    subtitle: "Vocabulario · Español → Deutsch",
    description:
      "9학년 스페인어 Lluvias tropicales 표현 37장 (가족 상황 · Chacho와 Efraín · 책/이야기 말하기). 앞면: 스페인어, 뒷면: 독일어.",
    coverColor: "book-cover-e",
    cardIds: SPANISH_LLUVIAS_CARD_IDS,
    owner: "hangyeol",
    grade: 9,
    subjectKey: "spanisch",
    subjectLabel: "스페인어",
  },
  {
    id: MATH_QUIZ_BOOK_ID,
    templateType: "quiz-workbook",
    title: "Mathe · Aufgaben",
    subtitle: "8학년 수학 — 문제 · 풀이 · 테스트",
    description:
      "8학년 수학 워크시트. 한 페이지에 여러 문제(괄호 풀기, 항 연결, 빈칸 채우기)를 함께 풀 수 있습니다.",
    coverColor: "book-cover-b",
    questionIds: MATH_QUIZ_QUESTION_IDS,
    worksheetPageIds: MATH_WORKSHEET_PAGE_IDS,
    owner: "amin",
    grade: 8,
    subjectKey: "mathe",
    subjectLabel: "수학",
  },
];
