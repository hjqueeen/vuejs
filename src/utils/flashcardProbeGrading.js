/** Probe 채점 — 번들/임포트 피드백 mark 기준 */

import { getProbeAnswer, getProbeAnswersMap } from "@/utils/flashcardProbeAnswers";
import { getProbeFeedback } from "@/utils/flashcardProbeFeedback";

/** @type {Record<string, number>} */
export const PROBE_MARK_POINTS = {
  ok: 1,
  partial: 0.5,
  wrong: 0,
  empty: 0,
};

export const PROBE_MARK_LABELS = {
  ok: "잘함",
  partial: "보완",
  wrong: "다시",
  empty: "미작성",
};

/**
 * @param {string} bookId
 * @param {object[]} cards
 */
export function gradeProbeAnswers(bookId, cards) {
  const map = getProbeAnswersMap(bookId);
  let markOk = 0;
  let markPartial = 0;
  let markWrong = 0;
  let markEmpty = 0;
  let scorePoints = 0;
  let answeredCount = 0;

  const items = (cards || []).map((card) => {
    const answer = map[card.id]?.text || getProbeAnswer(bookId, card.id) || "";
    const answered = Boolean(String(answer).trim());
    if (answered) answeredCount += 1;

    const fb = getProbeFeedback(bookId, card.id) || {};
    let mark = fb.mark || "empty";
    if (!answered) mark = "empty";
    else if (mark === "empty") mark = "wrong"; // 답은 있는데 피드백 없으면 미채점→wrong 취급 방지: partial로?
    // 답이 있는데 피드백 마크가 empty면 partial로 표시하지 않고 피드백 없는 상태로 유지
    if (answered && (!fb.mark || fb.mark === "empty") && !fb.modelDe && !fb.commentKo) {
      mark = "empty"; // 미채점
    }

    const points = PROBE_MARK_POINTS[mark] ?? 0;
    scorePoints += points;
    if (mark === "ok") markOk += 1;
    else if (mark === "partial") markPartial += 1;
    else if (mark === "wrong") markWrong += 1;
    else markEmpty += 1;

    return {
      cardId: card.id,
      questionDe: card.termDe || card.term || "",
      questionKo: card.termKo || "",
      category: card.frontCategory || "",
      answer,
      answered,
      mark,
      points,
      modelDe: fb.modelDe || "",
      commentKo: fb.commentKo || "",
      noteChapterId: fb.noteChapterId || "",
      noteKo: fb.noteKo || "",
      noteDe: fb.noteDe || "",
    };
  });

  const totalCount = cards.length;
  const scoreMax = totalCount; // 문항당 1점 만점
  const scorePercent =
    scoreMax > 0 ? Math.round((scorePoints / scoreMax) * 1000) / 10 : 0;

  return {
    answeredCount,
    totalCount,
    scorePoints,
    scoreMax,
    scorePercent,
    markOk,
    markPartial,
    markWrong,
    markEmpty,
    items,
  };
}
