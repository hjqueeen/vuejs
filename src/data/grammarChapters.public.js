/**
 * GitHub Pages / CI용 스텁. BBC 책은 퀴즈 챕터가 있어 목차에서 문법 섹션을 쓰지 않습니다.
 * 로컬에 `grammarChapters.js`가 있으면 `vue.config.js` alias로 그 파일이 대신 사용됩니다.
 */

export const grammarChapters = [];

export function getGrammarChapterById(id) {
  return grammarChapters.find((chapter) => chapter.id === id);
}
