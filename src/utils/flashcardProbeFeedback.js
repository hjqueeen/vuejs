/** Probe-Fragen 피드백 — bundled + localStorage override · JSON import */

import {
  PHYSIK_PROBE_FEEDBACK_META,
  getBundledProbeFeedback,
  getAllBundledProbeFeedback,
} from "@/data/physikProbeFeedbackContent.js";
import { setProbeAnswersMapBulk, getProbeAnswersMap } from "@/utils/flashcardProbeAnswers";

const FEEDBACK_STORAGE_PREFIX = "flashcard-probe-feedback";
const FEEDBACK_ENABLED_KEY = "flashcard-probe-feedback-enabled";

/** @param {string} bookId */
function feedbackStorageKey(bookId) {
  return `${FEEDBACK_STORAGE_PREFIX}:${bookId}`;
}

/** @param {string} bookId @returns {Record<string, object>} */
export function getImportedFeedbackMap(bookId) {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(feedbackStorageKey(bookId));
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/** @param {string} bookId @param {Record<string, object>} map */
export function setImportedFeedbackMap(bookId, map) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(feedbackStorageKey(bookId), JSON.stringify(map));
}

/** @param {string} bookId */
export function clearImportedFeedback(bookId) {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem(feedbackStorageKey(bookId));
}

/** @param {string} bookId */
export function isProbeFeedbackEnabled(bookId) {
  if (typeof localStorage === "undefined") return true;
  const raw = localStorage.getItem(`${FEEDBACK_ENABLED_KEY}:${bookId}`);
  if (raw === null) return true;
  return raw === "1";
}

/** @param {string} bookId @param {boolean} enabled */
export function setProbeFeedbackEnabled(bookId, enabled) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(`${FEEDBACK_ENABLED_KEY}:${bookId}`, enabled ? "1" : "0");
}

/**
 * 우선순위: import override > bundled
 * @param {string} bookId
 * @param {string} cardId
 */
export function getProbeFeedback(bookId, cardId) {
  const imported = getImportedFeedbackMap(bookId)[cardId];
  const bundled = getBundledProbeFeedback(cardId) || {};
  if (imported?.modelDe || imported?.commentKo || imported?.mark) {
    return {
      mark: imported.mark || bundled.mark || "empty",
      modelDe: imported.modelDe || bundled.modelDe || "",
      commentKo: imported.commentKo || bundled.commentKo || "",
      noteChapterId:
        imported.noteChapterId || bundled.noteChapterId || "",
      noteDe: imported.noteDe || bundled.noteDe || "",
      noteKo: imported.noteKo || bundled.noteKo || "",
      source: imported.modelDe || imported.commentKo ? "import" : "bundled",
    };
  }
  if (!bundled.modelDe && !bundled.mark) return null;
  return { ...bundled, source: "bundled" };
}

/** bundled 전체를 import 맵으로 복사 (앱에서 ‘기본 피드백 적용’) */
export function applyBundledFeedbackToStorage(bookId) {
  if (bookId !== PHYSIK_PROBE_FEEDBACK_META.bookId) {
    setImportedFeedbackMap(bookId, getAllBundledProbeFeedback());
    return;
  }
  setImportedFeedbackMap(bookId, { ...getAllBundledProbeFeedback() });
}

/**
 * 학생 답안 export JSON → localStorage 답안으로 복원
 * @param {object} payload
 * @returns {{ imported: number, bookId: string }}
 */
export function importProbeAnswersPayload(payload) {
  if (!payload || !Array.isArray(payload.answers)) {
    throw new Error("유효한 답안 JSON이 아닙니다 (answers 배열 필요).");
  }
  const bookId = payload.bookId;
  if (!bookId) throw new Error("bookId가 없습니다.");

  const map = getProbeAnswersMap(bookId);
  let imported = 0;
  for (const row of payload.answers) {
    if (!row?.cardId) continue;
    const text = String(row.answer ?? "");
    if (!text.trim()) {
      delete map[row.cardId];
      continue;
    }
    map[row.cardId] = {
      text,
      updatedAt: row.updatedAt || new Date().toISOString(),
    };
    imported += 1;
  }
  setProbeAnswersMapBulk(bookId, map);
  return { imported, bookId, total: payload.answers.length };
}

/**
 * 피드백 JSON → localStorage
 * 형식 A: { bookId, items: { cardId: { mark, modelDe, commentKo } } }
 * 형식 B: { bookId, feedback: [ { cardId, ... } ] }
 * @param {object} payload
 */
export function importProbeFeedbackPayload(payload) {
  if (!payload) throw new Error("유효한 피드백 JSON이 아닙니다.");
  const bookId = payload.bookId;
  if (!bookId) throw new Error("bookId가 없습니다.");

  /** @type {Record<string, object>} */
  let map = {};
  if (payload.items && typeof payload.items === "object") {
    map = { ...payload.items };
  } else if (Array.isArray(payload.feedback)) {
    for (const row of payload.feedback) {
      if (!row?.cardId) continue;
      map[row.cardId] = {
        mark: row.mark || "empty",
        modelDe: row.modelDe || "",
        commentKo: row.commentKo || "",
      };
    }
  } else if (Array.isArray(payload.answers)) {
    // 답안 JSON만 넣어도 번들 피드백과 합쳐 쓰도록 허용 — 항목만 표시용
    throw new Error(
      "이 파일은 답안 JSON입니다. ‘답안 불러오기’를 사용하거나, items/feedback이 있는 피드백 JSON을 넣으세요.",
    );
  } else {
    throw new Error("items 또는 feedback 필드가 필요합니다.");
  }

  setImportedFeedbackMap(bookId, map);
  setProbeFeedbackEnabled(bookId, true);
  return { bookId, count: Object.keys(map).length };
}

export { PHYSIK_PROBE_FEEDBACK_META };
