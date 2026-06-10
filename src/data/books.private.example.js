/**
 * 로컬 전용 책 목록 예시입니다.
 *
 * 설정:
 * 1. 이 파일을 복사해 같은 폴더에 `books.private.js` 로 저장합니다.
 * 2. `books.private.js`는 .gitignore에 있어 깃허브에 올라가지 않습니다.
 *
 * `paragraphIds` / `sentenceIds`는 `englishLearningDb.js`에 실제로 있는 id와 일치해야 합니다.
 */
import { WEDNESDAY_TEAM_MEETING_SENTENCE_IDS } from "./private/wednesdayTeamMeetingContent.js";

export const extraBooks = [
  {
    id: "book-feature-request",
    templateType: "speaking-listening",
    title: "수요일 팀미팅",
    subtitle: "업무표현 정리",
    description:
      "팀 미팅에서 나온 문장을 핵심 문장/표현/확장/문법 포인트 중심으로 학습하는 실무 영어북",
    coverColor: "book-cover-a",
    paragraphIds: ["p1", "p2", "p3"],
    sentenceIds: [...WEDNESDAY_TEAM_MEETING_SENTENCE_IDS],
  },
];
