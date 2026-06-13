import { ALLTAG_KO_DE_BOOK_ID } from "@/data/alltagKoDeContent.js";
import { LIVE_ACADEMY_TODDLER_BOOK_ID } from "@/data/liveAcademyToddlerContent.js";
import { enrichAlltagCardForLang } from "@/data/alltagKoDeTranslations.en.js";
import { enrichLiveAcademyToddlerCardForLang } from "@/data/liveAcademyToddlerTranslations.en.js";

/** @param {object|null} card @param {string} bookId @param {"de"|"en"} targetLang */
export function resolveFlashcardCard(card, bookId, targetLang) {
  if (!card) return null;
  if (bookId === ALLTAG_KO_DE_BOOK_ID) {
    return enrichAlltagCardForLang(card, targetLang);
  }
  if (bookId === LIVE_ACADEMY_TODDLER_BOOK_ID) {
    return enrichLiveAcademyToddlerCardForLang(card, targetLang);
  }
  return card;
}

/** @param {object|null} card @param {"de"|"en"} targetLang */
export function getCardBackExplanation(card, targetLang) {
  if (!card) return "";
  if (targetLang === "en") {
    return card.explanationEn || card.explanationDe || "";
  }
  return card.explanationDe || "";
}
