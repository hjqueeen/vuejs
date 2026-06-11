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
import {
  BB84_PROTOCOL_BOOK_ID,
  BB84ProtocolCards,
  getBb84ProtocolCardById,
} from "./bb84ProtocolContent.js";
import {
  LATIN_VOCAB_BOOK_ID,
  latinVocabCards,
  getLatinVocabCardById,
} from "./latinVocabContent.js";

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
    targetLanguages: ["de", "en"],
    labelsForLang: (lang) =>
      lang === "en"
        ? { front: "한국어", back: "English" }
        : { front: "한국어", back: "Deutsch" },
    hintForLang: (lang) =>
      lang === "en"
        ? "한국어를 보고 영어를 떠올린 뒤, 카드를 뒤집어 확인하세요."
        : "한국어를 보고 독일어를 떠올린 뒤, 카드를 뒤집어 확인하세요.",
    labels: { front: "한국어", back: "Deutsch" },
    hint: "한국어를 보고 독일어 또는 영어를 떠올린 뒤, 카드를 뒤집어 확인하세요. Anki 복습은 언어별(Deutsch/English)로 따로 진행·저장됩니다.",
    showKoOnBack: false,
  },
  [BB84_PROTOCOL_BOOK_ID]: {
    cards: BB84ProtocolCards,
    getCardById: getBb84ProtocolCardById,
    labels: { front: "한국어", back: "English" },
    hint: "한국어(상황·원문)를 보고 영어 대사·발표 스크립트를 떠올린 뒤 확인하세요. 워크샵 카드(ws-d1, ws-d2)는 팀 대화 연습용입니다.",
    showKoOnBack: true,
  },
  [LATIN_VOCAB_BOOK_ID]: {
    cards: latinVocabCards,
    getCardById: getLatinVocabCardById,
    labels: { front: "Latein", back: "Form · Deutsch" },
    hint: "라틴어 단어를 보고 변형(활용·품사)과 독일어 뜻을 떠올린 뒤, 카드를 뒤집어 확인하세요.",
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
