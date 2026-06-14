import { LATIN_VOCAB_BOOK_ID } from "./latinVocabContent.js";
import { ABSOLUTISMUS_BOOK_ID } from "./absolutismusContent.js";

/** @typedef {'hyejin'|'hangyeol'|'amin'} BookOwnerId */

export const BOOK_OWNERS = {
  HYEJIN: "hyejin",
  HANGYEOL: "hangyeol",
  AMIN: "amin",
};

export const LEARNER_PROFILES = [
  { id: BOOK_OWNERS.HYEJIN, label: "혜진" },
  { id: BOOK_OWNERS.HANGYEOL, label: "한결" },
  { id: BOOK_OWNERS.AMIN, label: "아민" },
];

const DASHBOARD_LEARNER_KEY = "dashboard-learner";

/** 책 id → 소유자·학년·과목 (books.public/extra에 없을 때 fallback) */
export const BOOK_CATALOG_META = {
  [LATIN_VOCAB_BOOK_ID]: {
    owner: BOOK_OWNERS.AMIN,
    grade: 7,
    subjectKey: "latein",
    subjectLabel: "라틴어",
  },
  [ABSOLUTISMUS_BOOK_ID]: {
    owner: BOOK_OWNERS.HANGYEOL,
    grade: 8,
    subjectKey: "geschichte",
    subjectLabel: "역사",
  },
};

/** @param {object} book */
export function enrichBookCatalog(book) {
  const extra = BOOK_CATALOG_META[book.id] || {};
  return {
    ...book,
    owner: book.owner || extra.owner || BOOK_OWNERS.HYEJIN,
    grade: book.grade ?? extra.grade,
    subjectKey: book.subjectKey || extra.subjectKey,
    subjectLabel: book.subjectLabel || extra.subjectLabel,
  };
}

/** @param {object[]} bookList @param {BookOwnerId} ownerId */
export function filterBooksByOwner(bookList, ownerId) {
  return bookList
    .map(enrichBookCatalog)
    .filter((book) => book.owner === ownerId);
}

/** @param {object[]} bookList */
export function groupBooksByGradeSubject(bookList) {
  const enriched = bookList.map(enrichBookCatalog);
  /** @type {Map<number, Map<string, { subjectKey: string, subjectLabel: string, books: object[] }>>} */
  const byGrade = new Map();

  for (const book of enriched) {
    const grade = book.grade ?? 0;
    if (!byGrade.has(grade)) byGrade.set(grade, new Map());
    const bySubject = byGrade.get(grade);
    const subjectKey = book.subjectKey || "other";
    if (!bySubject.has(subjectKey)) {
      bySubject.set(subjectKey, {
        subjectKey,
        subjectLabel: book.subjectLabel || subjectKey,
        books: [],
      });
    }
    bySubject.get(subjectKey).books.push(book);
  }

  return [...byGrade.entries()]
    .sort(([a], [b]) => a - b)
    .map(([grade, subjectMap]) => ({
      grade,
      gradeLabel: `${grade}학년`,
      subjects: [...subjectMap.values()].sort((a, b) =>
        a.subjectLabel.localeCompare(b.subjectLabel, "ko"),
      ),
    }));
}

/** @returns {BookOwnerId} */
export function getStoredDashboardLearner() {
  if (typeof localStorage === "undefined") return BOOK_OWNERS.HYEJIN;
  const saved = localStorage.getItem(DASHBOARD_LEARNER_KEY);
  return LEARNER_PROFILES.some((p) => p.id === saved) ? saved : BOOK_OWNERS.HYEJIN;
}

/** @param {BookOwnerId} learnerId */
export function setStoredDashboardLearner(learnerId) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(DASHBOARD_LEARNER_KEY, learnerId);
}

/** @param {object} book @param {BookOwnerId} learnerId */
export function canLearnerAccessBook(book, learnerId) {
  return enrichBookCatalog(book).owner === learnerId;
}

export function getLearnerLabel(learnerId) {
  return LEARNER_PROFILES.find((p) => p.id === learnerId)?.label || learnerId;
}

/** @param {string} slug — hyejin | hangyeol | amin */
export function routeSlugToLearnerId(slug) {
  return isValidLearnerId(slug) ? slug : null;
}

/** @param {BookOwnerId} learnerId */
export function learnerIdToRouteSlug(learnerId) {
  return learnerId;
}

/** @param {string} learnerId */
export function isValidLearnerId(learnerId) {
  return LEARNER_PROFILES.some((p) => p.id === learnerId);
}

/** @param {string} [learnerId] */
export function getDashboardLocation(learnerId) {
  const id =
    learnerId && isValidLearnerId(learnerId)
      ? learnerId
      : getStoredDashboardLearner();
  return {
    name: "dashboard",
    params: { learner: learnerIdToRouteSlug(id) },
  };
}
