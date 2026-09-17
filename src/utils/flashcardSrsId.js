export const LANG_SRS_SEP = "::lang::";

/** @param {string} baseId @param {"de"|"en"|null|undefined} lang @param {boolean} dualLang */
export function withLangSrsId(baseId, lang, dualLang = false) {
  if (!dualLang || !lang) return baseId;
  return `${baseId}${LANG_SRS_SEP}${lang}`;
}

/** @param {string} srsId */
export function stripLangSrsId(srsId) {
  const idx = srsId.lastIndexOf(LANG_SRS_SEP);
  if (idx < 0) return { baseId: srsId, lang: null };
  return {
    baseId: srsId.slice(0, idx),
    lang: srsId.slice(idx + LANG_SRS_SEP.length),
  };
}

/** @param {{ targetLanguages?: string[] }|null|undefined} bookMeta */
export function bookHasDualLang(bookMeta) {
  return (bookMeta?.targetLanguages?.length || 0) > 1;
}

/** @param {object|null} card @param {string} targetLang */
export function mainCardHasLangContent(card, targetLang) {
  if (!card) return false;
  if (targetLang === "en") {
    return Boolean(card.explanationEn?.trim() || card.explanationDe?.trim());
  }
  // de / es 등: 해석 텍스트가 있으면 복습 가능
  return Boolean(card.explanationDe?.trim() || card.termEs?.trim() || card.termDe?.trim());
}

/** @param {object} example @param {"de"|"en"} targetLang */
export function exampleHasLangContent(example, targetLang) {
  if (!example?.ko) return false;
  if (targetLang === "en") return Boolean(example.en?.trim());
  return Boolean(example.de?.trim());
}
