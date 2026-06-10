/**
 * GitHub Pages / CI용 DB: BBC Learning English만 포함.
 * 로컬에 `englishLearningDb.js`가 있으면 그 파일(수요일 팀미팅 등 private 데이터 포함)이 대신 사용됩니다.
 */
import {
  bbcLearningEnglishExpansionExamples,
  bbcLearningEnglishExpressions,
  bbcLearningEnglishParagraphs,
  bbcLearningEnglishSentenceChunks,
  bbcLearningEnglishSentences,
  bbcLearningEnglishVocabularies,
} from "./bbcLearningEnglishContent.js";

export const sentences = [...bbcLearningEnglishSentences];

export const paragraphs = [...bbcLearningEnglishParagraphs];

export const sentenceChunks = [...bbcLearningEnglishSentenceChunks];

export const vocabularies = [...bbcLearningEnglishVocabularies];

export const expressions = [...bbcLearningEnglishExpressions];

export const expansionExamples = [...bbcLearningEnglishExpansionExamples];

export const usageScenarios = [];

export const audios = [];

export const quizzes = [];

export const buildSentenceDetails = () =>
  sentences.map((sentence) => ({
    sentence,
    chunks: sentenceChunks.filter((item) => item.sentenceId === sentence.id),
    vocabulary: vocabularies.filter((item) => item.sentenceId === sentence.id),
    expressions: expressions.filter((item) => item.sentenceId === sentence.id),
    expansionExamples: expansionExamples.filter((item) => item.sentenceId === sentence.id),
    usage: usageScenarios.filter((item) => item.sentenceId === sentence.id),
    audio: audios.find((item) => item.sentenceId === sentence.id) || null,
    quizzes: quizzes.filter((item) => item.sentenceId === sentence.id),
  }));
