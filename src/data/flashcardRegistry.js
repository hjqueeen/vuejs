import {
  WAERME_KARTEIKARTEN_BOOK_ID,
  waermeKarteikarten,
  getWaermeCardById,
} from "./waermeKarteikartenContent.js";
import {
  ALLTAG_KO_DE_BOOK_ID,
  alltagKoDeCards,
  getAlltagKoDeCardById,
} from "./alltagKoDeContent.js";

/** @type {Record<string, { cards: object[], getCardById: (id: string) => object|null, labels: { front: string, back: string }, hint: string, showKoOnBack?: boolean }>} */
export const flashcardBooks = {
  [WAERME_KARTEIKARTEN_BOOK_ID]: {
    cards: waermeKarteikarten,
    getCardById: getWaermeCardById,
    labels: { front: "Begriff", back: "Erklärung" },
    hint: "카드를 눌러 앞면(용어)과 뒷면(설명)을 뒤집으며 외우세요.",
    showKoOnBack: true,
  },
  [ALLTAG_KO_DE_BOOK_ID]: {
    cards: alltagKoDeCards,
    getCardById: getAlltagKoDeCardById,
    labels: { front: "한국어", back: "Deutsch" },
    hint: "한국어를 보고 독일어를 떠올린 뒤, 카드를 뒤집어 확인하세요.",
    showKoOnBack: false,
  },
};

export function getFlashcardBook(bookId) {
  return flashcardBooks[bookId] || null;
}

export function getCardsForBook(bookId) {
  return getFlashcardBook(bookId)?.cards || [];
}

export function getCardById(bookId, cardId) {
  const book = getFlashcardBook(bookId);
  return book ? book.getCardById(cardId) : null;
}
