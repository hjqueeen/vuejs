/**
 * GitHub Pages / CI용 전체 DB: 수요일 팀미팅 + BBC Learning English.
 * 로컬에 `englishLearningDb.js`가 있으면 `vue.config.js` alias로 그 파일이 대신 사용됩니다.
 */
import {
  bbcLearningEnglishExpansionExamples,
  bbcLearningEnglishExpressions,
  bbcLearningEnglishParagraphs,
  bbcLearningEnglishSentenceChunks,
  bbcLearningEnglishSentences,
  bbcLearningEnglishVocabularies,
} from "./bbcLearningEnglishContent.js";
import {
  wednesdayTeamMeetingAudios,
  wednesdayTeamMeetingExpansionExamples,
  wednesdayTeamMeetingExpressions,
  wednesdayTeamMeetingParagraphs,
  wednesdayTeamMeetingQuizzes,
  wednesdayTeamMeetingSentenceChunks,
  wednesdayTeamMeetingSentences,
  wednesdayTeamMeetingUsageScenarios,
  wednesdayTeamMeetingVocabularies,
} from "./wednesdayTeamMeetingContent.js";

export const sentences = [...wednesdayTeamMeetingSentences, ...bbcLearningEnglishSentences];

export const paragraphs = [...wednesdayTeamMeetingParagraphs, ...bbcLearningEnglishParagraphs];

export const sentenceChunks = [
  ...wednesdayTeamMeetingSentenceChunks,
  ...bbcLearningEnglishSentenceChunks,
];

export const vocabularies = [...wednesdayTeamMeetingVocabularies, ...bbcLearningEnglishVocabularies];

export const expressions = [...wednesdayTeamMeetingExpressions, ...bbcLearningEnglishExpressions];

export const expansionExamples = [
  ...wednesdayTeamMeetingExpansionExamples,
  ...bbcLearningEnglishExpansionExamples,
];

export const usageScenarios = [...wednesdayTeamMeetingUsageScenarios];

export const audios = [...wednesdayTeamMeetingAudios];

export const quizzes = [...wednesdayTeamMeetingQuizzes];

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
