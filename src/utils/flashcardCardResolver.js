import { ALLTAG_KO_DE_BOOK_ID } from "@/data/alltagKoDeContent.js";
import { LIVE_ACADEMY_TODDLER_BOOK_ID } from "@/data/liveAcademyToddlerContent.js";
import {
  SPANISH_LLUVIAS_BOOK_ID,
  enrichSpanishLluviasCardForLang,
} from "@/data/spanishLluviasContent.js";
import { enrichAlltagCardForLang } from "@/data/alltagKoDeTranslations.en.js";
import { enrichLiveAcademyToddlerCardForLang } from "@/data/liveAcademyToddlerTranslations.en.js";

/** @param {object|null} card @param {string} bookId @param {string} targetLang */
export function resolveFlashcardCard(card, bookId, targetLang) {
  if (!card) return null;
  if (bookId === ALLTAG_KO_DE_BOOK_ID) {
    return enrichAlltagCardForLang(card, targetLang);
  }
  if (bookId === LIVE_ACADEMY_TODDLER_BOOK_ID) {
    return enrichLiveAcademyToddlerCardForLang(card, targetLang);
  }
  if (bookId === SPANISH_LLUVIAS_BOOK_ID) {
    return enrichSpanishLluviasCardForLang(card, targetLang);
  }
  return card;
}

/** @param {object|null} card @param {string} targetLang */
export function getCardBackExplanation(card, targetLang) {
  if (!card) return "";
  if (targetLang === "en") {
    return card.explanationEn || card.explanationDe || "";
  }
  return card.explanationDe || "";
}
