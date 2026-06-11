import { resolveFlashcardCard } from "@/utils/flashcardCardResolver";
import {
  exampleHasLangContent,
  mainCardHasLangContent,
  withLangSrsId,
} from "@/utils/flashcardSrsId";

export const EXAMPLE_REVIEW_SEP = "::ex::";

/** @param {string} id */
export function isExampleReviewId(id) {
  return id.includes(EXAMPLE_REVIEW_SEP);
}

/** @param {string} parentId @param {number} vocabIdx @param {number} exIdx */
export function buildExampleReviewId(parentId, vocabIdx, exIdx) {
  return `${parentId}${EXAMPLE_REVIEW_SEP}${vocabIdx}:${exIdx}`;
}

/**
 * @param {object[]} cards
 * @param {string} bookId
 * @param {"de"|"en"} targetLang
 * @param {{ dualLang?: boolean }} [options]
 */
export function expandReviewItems(cards, bookId, targetLang = "de", options = {}) {
  const dualLang = options.dualLang ?? false;

  /** @type {Array<{ type: "main", id: string, baseId: string, card: object, targetLang: "de"|"en" } | { type: "example", id: string, baseId: string, parentId: string, card: object, example: object, vocabWord: string, targetLang: "de"|"en" }>} */
  const items = [];

  cards.forEach((card) => {
    const resolved = resolveFlashcardCard(card, bookId, targetLang);

    if (mainCardHasLangContent(resolved, targetLang)) {
      items.push({
        type: "main",
        baseId: card.id,
        id: withLangSrsId(card.id, targetLang, dualLang),
        card: resolved,
        targetLang,
      });
    }

    (resolved.vocabulary || []).forEach((vocab, vocabIdx) => {
      (vocab.examples || []).forEach((example, exIdx) => {
        if (!exampleHasLangContent(example, targetLang)) return;
        const exampleBaseId = buildExampleReviewId(card.id, vocabIdx, exIdx);
        items.push({
          type: "example",
          baseId: exampleBaseId,
          id: withLangSrsId(exampleBaseId, targetLang, dualLang),
          parentId: card.id,
          card: resolved,
          example,
          vocabWord: targetLang === "en" ? vocab.wordEn || vocab.word : vocab.word,
          targetLang,
        });
      });
    });
  });

  return items;
}

/** @param {object} item @param {"de"|"en"} targetLang */
export function reviewItemToPanelCard(item, targetLang = "de") {
  if (!item) return null;
  if (item.type === "example") {
    const ex = item.example;
    return {
      term: ex.ko,
      explanationDe: ex.de || "",
      explanationEn: ex.en || "",
    };
  }
  return item.card;
}
