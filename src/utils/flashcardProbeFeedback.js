/** Probe-Fragen 피드백 — bundled + localStorage override · JSON import · Supabase */

import {
  PHYSIK_PROBE_FEEDBACK_META,
  getBundledProbeFeedback,
  getAllBundledProbeFeedback,
} from "@/data/physikProbeFeedbackContent.js";
import {
  setProbeAnswersMapBulk,
  getProbeAnswersMap,
  syncProbeAnswersWithSupabase,
  resolveProbeLearnerId,
} from "@/utils/flashcardProbeAnswers";
import { isSupabaseConfigured } from "@/services/supabaseClient";
import {
  fetchProbeFeedbackRemote,
  upsertProbeFeedbackBulkRemote,
} from "@/services/probeFeedbackApi";

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
  const result = { imported, bookId, total: payload.answers.length };
  if (isSupabaseConfigured) {
    // 백그라운드 업로드
    syncProbeAnswersWithSupabase(bookId, {
      learnerId: payload.learner || undefined,
    }).catch(() => {});
  }
  return result;
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
  if (isSupabaseConfigured) {
    upsertProbeFeedbackBulkRemote(
      bookId,
      resolveProbeLearnerId(),
      map,
    ).catch(() => {});
  }
  return { bookId, count: Object.keys(map).length };
}

/**
 * 번들/로컬 피드백을 Supabase에 푸시하고, 원격 최신분을 로컬로 병합
 * @param {string} bookId
 * @param {{ learnerId?: string, pushLocal?: boolean }} [opts]
 */
export async function syncProbeFeedbackWithSupabase(bookId, opts = {}) {
  if (!isSupabaseConfigured) {
    return {
      ok: false,
      reason: "not_configured",
      message: "Supabase URL/anon key가 .env에 없습니다.",
    };
  }
  const learnerId = resolveProbeLearnerId(opts.learnerId);
  try {
    const remote = await fetchProbeFeedbackRemote(bookId, learnerId);
    const local = getImportedFeedbackMap(bookId);
    const bundled = getAllBundledProbeFeedback();
    /** @type {Record<string, object>} */
    const merged = { ...bundled, ...local };

    let pulled = 0;
    for (const [cardId, remoteEntry] of Object.entries(remote)) {
      const localEntry = local[cardId];
      const remoteTs = Date.parse(remoteEntry.updatedAt || "") || 0;
      const localTs = Date.parse(localEntry?.updatedAt || "") || 0;
      if (!localEntry || remoteTs >= localTs) {
        merged[cardId] = {
          mark: remoteEntry.mark,
          modelDe: remoteEntry.modelDe,
          commentKo: remoteEntry.commentKo,
          noteChapterId: remoteEntry.noteChapterId,
          noteDe: remoteEntry.noteDe,
          noteKo: remoteEntry.noteKo,
          updatedAt: remoteEntry.updatedAt,
        };
        if (
          !localEntry ||
          localEntry.modelDe !== remoteEntry.modelDe ||
          localEntry.commentKo !== remoteEntry.commentKo ||
          localEntry.mark !== remoteEntry.mark
        ) {
          pulled += 1;
        }
      }
    }

    setImportedFeedbackMap(bookId, merged);
    setProbeFeedbackEnabled(bookId, true);

    let pushed = 0;
    if (opts.pushLocal !== false) {
      /** @type {Record<string, object>} */
      const toPush = {};
      for (const [cardId, entry] of Object.entries(merged)) {
        const remoteEntry = remote[cardId];
        if (
          !remoteEntry ||
          entry.modelDe !== remoteEntry.modelDe ||
          entry.commentKo !== remoteEntry.commentKo ||
          entry.mark !== remoteEntry.mark
        ) {
          toPush[cardId] = entry;
        }
      }
      if (Object.keys(toPush).length) {
        const result = await upsertProbeFeedbackBulkRemote(
          bookId,
          learnerId,
          toPush,
        );
        pushed = result.upserted;
      }
    }

    return {
      ok: true,
      learnerId,
      pulled,
      pushed,
      localCount: Object.keys(merged).length,
    };
  } catch (err) {
    return {
      ok: false,
      reason: "error",
      message: err?.message || String(err),
    };
  }
}

export { PHYSIK_PROBE_FEEDBACK_META };
