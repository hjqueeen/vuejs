const STORAGE_KEY = "flashcard-layout-mode";

/** @returns {"flip" | "split"} */
export function getFlashcardLayoutMode() {
  if (typeof localStorage === "undefined") return "flip";
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "split" ? "split" : "flip";
}

/** @param {"flip" | "split"} mode */
export function setFlashcardLayoutMode(mode) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, mode === "split" ? "split" : "flip");
}
