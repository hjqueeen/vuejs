/** Probe-Fragen 답안 — localStorage 저장 · JSON 내보내기 */

const STORAGE_PREFIX = "flashcard-probe-answers";

/**
 * @typedef {{ text: string, updatedAt: string }} ProbeAnswerEntry
 * @typedef {Record<string, ProbeAnswerEntry>} ProbeAnswerMap
 */

/** @param {string} bookId */
function storageKey(bookId) {
  return `${STORAGE_PREFIX}:${bookId}`;
}

/** @param {string} bookId @returns {ProbeAnswerMap} */
export function getProbeAnswersMap(bookId) {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(storageKey(bookId));
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/** @param {string} bookId @param {ProbeAnswerMap} map */
function setProbeAnswersMap(bookId, map) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(storageKey(bookId), JSON.stringify(map));
}

/** @param {string} bookId @param {string} cardId */
export function getProbeAnswer(bookId, cardId) {
  const entry = getProbeAnswersMap(bookId)[cardId];
  return entry?.text || "";
}

/** @param {string} bookId @param {string} cardId @param {string} text */
export function setProbeAnswer(bookId, cardId, text) {
  const map = getProbeAnswersMap(bookId);
  const trimmed = String(text ?? "");
  if (!trimmed.trim()) {
    delete map[cardId];
  } else {
    map[cardId] = {
      text: trimmed,
      updatedAt: new Date().toISOString(),
    };
  }
  setProbeAnswersMap(bookId, map);
  return map[cardId] || null;
}

/** @param {string} bookId */
export function clearProbeAnswers(bookId) {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem(storageKey(bookId));
}

/** @param {string} bookId @param {object[]} cards */
export function countAnsweredProbeCards(bookId, cards) {
  const map = getProbeAnswersMap(bookId);
  return cards.filter((c) => map[c.id]?.text?.trim()).length;
}

/**
 * @param {object} opts
 * @param {string} opts.bookId
 * @param {string} opts.bookTitle
 * @param {object[]} opts.cards
 * @param {string} [opts.learner]
 */
export function buildProbeAnswersExportPayload({
  bookId,
  bookTitle,
  cards,
  learner = "",
}) {
  const map = getProbeAnswersMap(bookId);
  const answers = cards.map((card) => {
    const entry = map[card.id];
    return {
      cardId: card.id,
      category: card.frontCategory || "",
      questionDe: card.termDe || card.term || "",
      questionKo: card.termKo || "",
      answer: entry?.text || "",
      updatedAt: entry?.updatedAt || null,
      answered: Boolean(entry?.text?.trim()),
    };
  });
  const answeredCount = answers.filter((a) => a.answered).length;
  return {
    bookId,
    bookTitle,
    learner,
    exportedAt: new Date().toISOString(),
    answeredCount,
    totalCount: cards.length,
    answers,
  };
}

/** @param {object} payload @param {string} [filename] */
export function downloadProbeAnswersJson(payload, filename) {
  const name =
    filename ||
    `physik-probe-antworten-${(payload.exportedAt || "").slice(0, 10)}.json`;
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
