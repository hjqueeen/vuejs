import generated from "./tongilQuizContent.generated.json";

export const tongilQuizChapters = generated.chapters;
export const tongilQuizQuestions = generated.questions;

export const getTongilQuestionById = (id) =>
  tongilQuizQuestions.find((q) => q.id === id) || null;

export const getTongilQuestionsByChapter = (chapterId) =>
  tongilQuizQuestions.filter((q) => q.chapterId === chapterId);

export const getTongilChapterById = (id) =>
  tongilQuizChapters.find((ch) => ch.id === id) || null;
