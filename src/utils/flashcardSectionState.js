const STORAGE_PREFIX = "flashcard-section-state";

function readRaw(bookId) {
  if (typeof localStorage === "undefined") return {};
  try {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}:${bookId}`);
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/** @returns {Record<string, boolean>} */
export function getFlashcardSectionState(bookId, sectionIds = []) {
  const saved = readRaw(bookId);
  const state = {};
  for (const id of sectionIds) {
    state[id] = saved[id] === true;
  }
  return state;
}

/** @param {Record<string, boolean>} state */
export function setFlashcardSectionState(bookId, state, sectionIds = null) {
  if (typeof localStorage === "undefined") return;
  const ids = sectionIds || Object.keys(state);
  const toSave = Object.fromEntries(ids.map((id) => [id, state[id] === true]));
  localStorage.setItem(`${STORAGE_PREFIX}:${bookId}`, JSON.stringify(toSave));
}
