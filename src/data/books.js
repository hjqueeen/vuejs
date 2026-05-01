import { BBC_LEARNING_SENTENCE_IDS, bbcLearningQuizChapters } from "./bbcLearningEnglishContent.js";
import { sentences } from "./englishLearningDb";

/** 팀 미팅 도서에 속한 문장만 (BBC 등 다른 책 문장 제외) */
export const featureRequestSentenceIds = sentences
  .filter((item) => {
    const n = Number(String(item.id).replace(/^s/, ""));
    return n >= 1 && n <= 41;
  })
  .map((item) => item.id);

export const books = [
  {
    id: "book-feature-request",
    templateType: "speaking-listening",
    title: "수요일 팀미팅",
    subtitle: "업무표현 정리",
    description:
      "팀 미팅에서 나온 문장을 핵심 문장/표현/확장/문법 포인트 중심으로 학습하는 실무 영어북",
    coverColor: "book-cover-a",
    paragraphIds: ["p1", "p2", "p3"],
    sentenceIds: featureRequestSentenceIds,
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
];

export const getBookById = (bookId) => books.find((book) => book.id === bookId) || books[0];
