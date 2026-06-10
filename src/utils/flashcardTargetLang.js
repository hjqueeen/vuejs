const STORAGE_PREFIX = "flashcard-target-lang";

/** @returns {"de" | "en"} */
export function getFlashcardTargetLang(bookId) {
  if (typeof localStorage === "undefined") return "de";
  const saved = localStorage.getItem(`${STORAGE_PREFIX}:${bookId}`);
  return saved === "en" ? "en" : "de";
}

/** @param {"de" | "en"} lang */
export function setFlashcardTargetLang(bookId, lang) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(`${STORAGE_PREFIX}:${bookId}`, lang === "en" ? "en" : "de");
}
