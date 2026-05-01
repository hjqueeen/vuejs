import { BBC_LEARNING_SENTENCE_IDS, bbcLearningQuizChapters } from "./bbcLearningEnglishContent.js";

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
];
