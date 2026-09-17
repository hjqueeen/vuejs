const STORAGE_PREFIX = "flashcard-target-lang";

/** @typedef {"de"|"en"|"es"} FlashcardLang */

/**
 * @param {string} bookId
 * @param {FlashcardLang[]} [allowed]
 * @returns {FlashcardLang}
 */
export function getFlashcardTargetLang(bookId, allowed = ["de", "en"]) {
  const fallback = allowed[0] || "de";
  if (typeof localStorage === "undefined") return fallback;
  const saved = localStorage.getItem(`${STORAGE_PREFIX}:${bookId}`);
  if (saved && allowed.includes(/** @type {FlashcardLang} */ (saved))) {
    return /** @type {FlashcardLang} */ (saved);
  }
  return fallback;
}

/**
 * @param {string} bookId
 * @param {FlashcardLang} lang
 * @param {FlashcardLang[]} [allowed]
 */
export function setFlashcardTargetLang(bookId, lang, allowed = ["de", "en"]) {
  if (typeof localStorage === "undefined") return;
  const next = allowed.includes(lang) ? lang : allowed[0] || "de";
  localStorage.setItem(`${STORAGE_PREFIX}:${bookId}`, next);
}
