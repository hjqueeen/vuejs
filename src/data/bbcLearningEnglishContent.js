/**
 * BBC Learning English 도서(book-bbc-learning) 전용 문장·문단·관련 데이터.
 * 문장 id는 `{책id}-s{n}` 형식으로 책마다 번호가 겹치지 않도록 합니다.
 * {@link ./englishLearningDb.js}에서 병합해 사용합니다.
 */

/** @readonly books.js와 라우팅 등에서 동일 문자열 사용 */
export const BBC_LEARNING_BOOK_ID = "book-bbc-learning";

const now = "2026-04-29T00:00:00.000Z";

/** 책 내 문장 번호 → 전역 고유 문장 id */
const bbcSid = (n) => `${BBC_LEARNING_BOOK_ID}-s${n}`;

/** 이 책의 문장 id 목록 (books.js 등에서 참조) */
export const BBC_LEARNING_SENTENCE_IDS = [bbcSid(1), bbcSid(2), bbcSid(3)];

const BBC_S1 = BBC_LEARNING_SENTENCE_IDS[0];
const BBC_S2 = BBC_LEARNING_SENTENCE_IDS[1];
const BBC_S3 = BBC_LEARNING_SENTENCE_IDS[2];

/** BBC Learning English용 문장 (책 내 1번~3번 → id는 book-bbc-learning-s1 …) */
export const bbcLearningEnglishSentences = [
  {
    id: BBC_S1,
    title: "Locking eyes during shooting",
    originalText:
      "Performer describes locking eyes with Trump as they ducked for cover during the shooting.",
    koreanTranslation:
      "공연자, 총격 당시 트럼프와 눈을 마주쳤다고 증언했습니다.",
    germanTranslation:
      "Ein Darsteller beschreibt, wie er Trump während der Schießerei in die Augen sah, als beide in Deckung gingen.",
    context: "news headline narrative",
    source: "chat",
    difficulty: "intermediate",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: BBC_S2,
    title: "Gala shooting and ballroom plan urgency",
    originalText: "Trump claims gala shooting gives urgency to White House ballroom plan.",
    koreanTranslation:
      "트럼프는 연회 행사 총격이 백악관 무도회장(볼룸) 계획에 시급성을 더했다고 주장합니다.",
    germanTranslation:
      "Trump behauptet, die Schießerei bei der Gala verleihe den Plänen für einen Ballsaal im Weißen Haus zusätzliche Dringlichkeit.",
    context: "political headline",
    source: "chat",
    difficulty: "intermediate",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: BBC_S3,
    title: "Royals visit U.S. in wake of unrest",
    originalText:
      "UK royals head to the U.S. in the wake of war, shooting and rocky relations.",
    koreanTranslation:
      "영국 왕실이 전쟁과 총격 사건, 그리고 불안했던 관계의 여파로 미국을 향했습니다.",
    germanTranslation:
      "Das britische Königshaus reist in die USA – nach Krieg, einer Schießerei und angespannten Beziehungen.",
    context: "royal diplomacy headline",
    source: "chat",
    difficulty: "intermediate",
    createdAt: now,
    updatedAt: now,
  },
];

/** BBC Learning English용 문단 (p4) */
export const bbcLearningEnglishParagraphs = [
  {
    id: "p4",
    title: "2026. 4. 29. Attempted assassination of President Donald Trump",
    englishText:
      "Performer describes locking eyes with Trump as they ducked for cover during the shooting. Trump claims gala shooting gives urgency to White House ballroom plan. UK royals head to the U.S. in the wake of war, shooting and rocky relations.",
    koreanTranslation:
      "공연자, 총격 당시 트럼프와 눈을 마주쳤다고 증언했습니다. 트럼프는 연회 행사에서의 총격이 백악관 무도회장 계획을 더 긴급한 안건으로 만든다고 말했습니다. 한편 영국 왕실은 전쟁과 총격, 그리고 삐거덕거리던 양국 관계의 여파 속에서 미국을 방문하게 되었습니다.",
    germanTranslation:
      "Ein Darsteller beschreibt, wie er Trump während der Schießerei in die Augen sah, als beide in Deckung gingen. Trump behauptet, die Schießerei bei der Gala verleihe den Plänen für einen Ballsaal im Weißen Haus zusätzliche Dringlichkeit. Das britische Königshaus reist in die USA – nach Krieg, einer Schießerei und angespannten Beziehungen.",
    normalSpeedUrl: "",
    slowSpeedUrl: "",
    sourceUrl: "https://youtu.be/k5dd29hOrsA?si=Y75VykipWWBwVyvf",
    sourceLabel: "BBC Learning English on YouTube",
    provider: "openai",
    voiceName: "alloy",
    sentenceIds: [...BBC_LEARNING_SENTENCE_IDS],
    createdAt: now,
    updatedAt: now,
  },
];

/** 문법·표현 설명 청크 */
export const bbcLearningEnglishSentenceChunks = [
  {
    id: "cbbc-1-1",
    sentenceId: BBC_S1,
    chunkText: "lock eyes (locking eyes)",
    chunkType: "other",
    meaning: "두 사람의 시선이 맞물리다 · 눈이 마주치다 (긴장·대치 상황에서 자주 씀)",
  },

  {
    id: "cbbc-2-2",
    sentenceId: BBC_S2,
    chunkText: "give thanks",
    chunkType: "other",
    meaning:
      "감사를 표하다. (e.g. We give thanks when we receive a gift.)",
  },
  {
    id: "cbbc-2-3",
    sentenceId: BBC_S2,
    chunkText: "give consideration to ~",
    chunkType: "other",
    meaning:
      "~을 신중하게 고려하다. (e.g. Give consideration to a topic that requires careful thinking.)",
  },
  {
    id: "cbbc-2-4",
    sentenceId: BBC_S2,
    chunkText: "give support to ~",
    chunkType: "other",
    meaning:
      "~에게 지원·도움을 제공하다. (e.g. Give support to someone when they need it.)",
  }
];

/** 어휘 */
export const bbcLearningEnglishVocabularies = [
  { id: "vbbc-1-a", sentenceId: BBC_S1, word: "lock eyes", meaning: "서로 마주 보다 · 눈이 마주치다", partOfSpeech: "phrase", frequency: "medium" },
  { id: "vbbc-1-b", sentenceId: BBC_S1, word: "duck for cover", meaning: "(위험에서) 몸을 숨기며 피하다", partOfSpeech: "phrase", frequency: "medium" },
  { id: "vbbc-2-a", sentenceId: BBC_S2, word: "give urgency", meaning: "시급성을 불어넣다", partOfSpeech: "phrase", frequency: "medium" },
  { id: "vbbc-2-b", sentenceId: BBC_S2, word: "gala", meaning: "격식 있는 연회 행사", partOfSpeech: "noun", frequency: "low" },
  { id: "vbbc-3-a", sentenceId: BBC_S3, word: "in the wake of", meaning: "~의 직후에 · ~의 여파로", partOfSpeech: "phrase", frequency: "high" },
  { id: "vbbc-3-b", sentenceId: BBC_S3, word: "rocky", meaning: "(관계 등이) 불안정한 · 삐걱거리는", partOfSpeech: "adjective", frequency: "medium" },
];

/** 핵심 표현 */
export const bbcLearningEnglishExpressions = [
  {
    id: "ebbc-1-a",
    sentenceId: BBC_S1,
    expression: "locking eyes",
    meaning: "(긴장한 순간 등에) 서로 눈이 마주치다",
  },
  {
    id: "ebbc-1-b",
    sentenceId: BBC_S1,
    expression: "duck for cover",
    meaning: "(총격·폭발 등 위험이 있을 때) 몸을 숨기거나 숙여 피하다",
  },
  {
    id: "ebbc-2",
    sentenceId: BBC_S2,
    expression: "give urgency",
    meaning: "~에 시급성을 더하다 · 긴박하게 만들다",
  },
  {
    id: "ebbc-3-a",
    sentenceId: BBC_S3,
    expression: "in the wake of",
    meaning: "~의 직후에 · ~의 여파로",
  },
  {
    id: "ebbc-3-b",
    sentenceId: BBC_S3,
    expression: "rocky",
    meaning: "(관계·상황 등이) 불안정한 · 순탄하지 않은",
    usageNote: "rocky relations = 삐걱거리는 관계",
  },
];

/** 퀴즈 챕터 */
export const bbcLearningQuizChapters = [
  {
    id: "bbc-quiz-1",
    chip: "Quiz",
    title: "핵심 표현 퀴즈",
    subtitle: "lock eyes · give urgency · in the wake of",
    tocSummary: "Quiz: 핵심 표현 확인",
    questions: [
      {
        no: 1,
        text: "Many employees didn't go to work for a week ________ budget cuts.",
        options: ["a) lock eyes", "b) give urgency", "c) in the wake of"],
        answerKey: "c",
        completeSentence: "Many employees didn't go to work for a week in the wake of budget cuts.",
        ko: "예산 삭감의 여파로 많은 직원들이 일주일 동안 출근하지 않았습니다.",
      },
      {
        no: 2,
        text: "We must ________ to this research if we are to find a solution.",
        options: ["a) lock eyes", "b) give urgency", "c) in the wake of"],
        answerKey: "b",
        completeSentence: "We must give urgency to this research if we are to find a solution.",
        ko: "해결책을 찾으려면 이 연구에 시급성을 부여해야 합니다.",
        notes: [
          { word: "if we are to ~", pos: "표현", meaning: "~하려면 / ~하고자 한다면 (공식적·강조적 어감)", example: "If we are to succeed, we must work harder." },
        ],
      },
      {
        no: 3,
        text: "I ________ with someone who looks like me on the train.",
        options: ["a) locked eyes", "b) gave urgency", "c) in the wake of"],
        answerKey: "a",
        completeSentence: "I locked eyes with someone who looks like me on the train.",
        ko: "지하철에서 나를 닮은 사람과 눈이 마주쳤습니다.",
      },
      {
        no: 4,
        text: "The teachers addressed the students in an assembly ________ of concerns about using phones in class.",
        options: ["a) locked eyes", "b) gave urgency", "c) in the wake of"],
        answerKey: "c",
        completeSentence: "The teachers addressed the students in an assembly in the wake of concerns about using phones in class.",
        ko: "교실에서 휴대폰 사용에 관한 우려가 제기된 뒤, 교사들은 전체 집회에서 학생들에게 이를 언급했습니다.",
        notes: [
          { word: "address", pos: "동사", meaning: "공식적인 자리에서 연설하다 · 말을 전달하다", example: "The principal addressed the students." },
          { word: "assembly", pos: "명사", meaning: "조회 · 전체 모임 (학교 맥락에서 자주 씀)", example: "We have a school assembly every Monday." },
        ],
      },
    ],
    answers: "1c  2b  3a  4c",
  },
];

/** 확장 문장 예시 */
export const bbcLearningEnglishExpansionExamples = [
  {
    id: "xbbc-1-a",
    sentenceId: BBC_S1,
    en: "The two fighters locked eyes before the boxing match, neither wanting to be the first to look away.",
    ko: "두 선수는 권투 경기 시작 전 서로 마주 보았고, 누구도 먼저 시선을 돌리고 싶지 않았습니다.",
  },
  {
    id: "xbbc-1-b",
    sentenceId: BBC_S1,
    en: "People ducked for cover when they heard gunfire.",
    ko: "총소리가 들리자 사람들은 몸을 숙여 피했습니다.",
  },
  {
    id: "xbbc-2-a",
    sentenceId: BBC_S2,
    en: "An accident in a school playground could give urgency to safety updates that were already being planned or discussed.",
    ko: "학교 운동장에서 사고가 나면 이미 검토 중이던 안전 업데이트에 시급성이 더해질 수 있습니다.",
  },
  {
    id: "xbbc-2-b",
    sentenceId: BBC_S2,
    en: "The growing humanitarian crisis gives urgency to peace negotiations.",
    ko: "인도적 위기가 깊어질수록 평화 협상이 더 긴급하게 느껴집니다.",
  },
  {
    id: "xbbc-3-a",
    sentenceId: BBC_S3,
    en: "In the wake of the scandal, the manager resigned.",
    ko: "스캔들 직후, 매니저가 사직했습니다.",
  },
];
