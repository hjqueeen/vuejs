/** Probe-Fragen 답안 — localStorage + (선택) Supabase 동기화 */

import { getStoredDashboardLearner } from "@/data/bookCatalog";
import { isSupabaseConfigured } from "@/services/supabaseClient";
import {
  clearProbeAnswersRemote,
  fetchProbeAnswersRemote,
  upsertProbeAnswerRemote,
  upsertProbeAnswersBulkRemote,
} from "@/services/probeAnswersApi";

const STORAGE_PREFIX = "flashcard-probe-answers";

/**
 * @typedef {{ text: string, updatedAt: string }} ProbeAnswerEntry
 * @typedef {Record<string, ProbeAnswerEntry>} ProbeAnswerMap
 */

/** @param {string} bookId */
function storageKey(bookId) {
  return `${STORAGE_PREFIX}:${bookId}`;
}

/** @param {string} [learnerId] */
export function resolveProbeLearnerId(learnerId) {
  return learnerId || getStoredDashboardLearner() || "hangyeol";
}

/** @param {string} bookId @returns {ProbeAnswerMap} */
export function getProbeAnswersMap(bookId) {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(storageKey(bookId));
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/** @param {string} bookId @param {ProbeAnswerMap} map */
function setProbeAnswersMap(bookId, map) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(storageKey(bookId), JSON.stringify(map));
}

/** @param {string} bookId @param {ProbeAnswerMap} map */
export function setProbeAnswersMapBulk(bookId, map) {
  setProbeAnswersMap(bookId, map);
}

/** @param {string} bookId @param {string} cardId */
export function getProbeAnswer(bookId, cardId) {
  const entry = getProbeAnswersMap(bookId)[cardId];
  return entry?.text || "";
}

/** @param {string} bookId @param {string} cardId */
export function getProbeAnswerEntry(bookId, cardId) {
  return getProbeAnswersMap(bookId)[cardId] || null;
}

/**
 * @param {string} bookId
 * @param {object[]} cards
 * @returns {{ cardId: string, text: string, updatedAt: string, card: object }[]}
 */
export function listProbeAnswers(bookId, cards = []) {
  const map = getProbeAnswersMap(bookId);
  const byId = new Map((cards || []).map((c) => [c.id, c]));
  return Object.entries(map)
    .filter(([, entry]) => entry?.text?.trim())
    .map(([cardId, entry]) => ({
      cardId,
      text: entry.text,
      updatedAt: entry.updatedAt || "",
      card: byId.get(cardId) || null,
    }))
    .sort((a, b) => {
      const ia = cards.findIndex((c) => c.id === a.cardId);
      const ib = cards.findIndex((c) => c.id === b.cardId);
      if (ia >= 0 && ib >= 0) return ia - ib;
      if (ia >= 0) return -1;
      if (ib >= 0) return 1;
      return a.cardId.localeCompare(b.cardId);
    });
}

/**
 * 로컬 즉시 반영 + (선택) Supabase upsert/delete. Promise로 원격 결과 반환.
 * @param {string} bookId
 * @param {string} cardId
 * @param {string} text
 * @param {{ learnerId?: string, skipRemote?: boolean }} [opts]
 * @returns {Promise<{
 *   entry: ProbeAnswerEntry | null,
 *   deleted: boolean,
 *   remoteOk: boolean,
 *   remoteSkipped: boolean,
 *   error: string | null,
 * }>}
 */
export async function setProbeAnswer(bookId, cardId, text, opts = {}) {
  const map = getProbeAnswersMap(bookId);
  const trimmed = String(text ?? "");
  const updatedAt = new Date().toISOString();
  const deleted = !trimmed.trim();
  if (deleted) {
    delete map[cardId];
  } else {
    map[cardId] = { text: trimmed, updatedAt };
  }
  setProbeAnswersMap(bookId, map);

  if (opts.skipRemote || !isSupabaseConfigured) {
    return {
      entry: map[cardId] || null,
      deleted,
      remoteOk: false,
      remoteSkipped: true,
      error: null,
    };
  }

  const learnerId = resolveProbeLearnerId(opts.learnerId);
  try {
    await upsertProbeAnswerRemote(bookId, learnerId, cardId, trimmed);
    return {
      entry: map[cardId] || null,
      deleted,
      remoteOk: true,
      remoteSkipped: false,
      error: null,
    };
  } catch (err) {
    const message = err?.message || String(err);
    console.warn("[probe] Supabase 저장/삭제 실패:", message);
    return {
      entry: map[cardId] || null,
      deleted,
      remoteOk: false,
      remoteSkipped: false,
      error: message,
    };
  }
}

/**
 * 단일 답안 삭제 (로컬 + 원격)
 * @param {string} bookId
 * @param {string} cardId
 * @param {{ learnerId?: string, skipRemote?: boolean }} [opts]
 */
export function deleteProbeAnswer(bookId, cardId, opts = {}) {
  return setProbeAnswer(bookId, cardId, "", opts);
}

/**
 * @param {string} bookId
 * @param {{ learnerId?: string, skipRemote?: boolean }} [opts]
 * @returns {Promise<{ remoteOk: boolean, remoteSkipped: boolean, error: string | null }>}
 */
export async function clearProbeAnswers(bookId, opts = {}) {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(storageKey(bookId));
  }
  if (opts.skipRemote || !isSupabaseConfigured) {
    return { remoteOk: false, remoteSkipped: true, error: null };
  }
  const learnerId = resolveProbeLearnerId(opts.learnerId);
  try {
    await clearProbeAnswersRemote(bookId, learnerId);
    return { remoteOk: true, remoteSkipped: false, error: null };
  } catch (err) {
    const message = err?.message || String(err);
    console.warn("[probe] Supabase 전체 삭제 실패:", message);
    return { remoteOk: false, remoteSkipped: false, error: message };
  }
}

/** @param {string} bookId @param {object[]} cards */
export function countAnsweredProbeCards(bookId, cards) {
  const map = getProbeAnswersMap(bookId);
  return cards.filter((c) => map[c.id]?.text?.trim()).length;
}

/**
 * 원격 → 로컬 병합(최신 updatedAt 우선) 후, 로컬이 더 새것이면 원격에 푸시
 * @param {string} bookId
 * @param {{ learnerId?: string }} [opts]
 */
export async function syncProbeAnswersWithSupabase(bookId, opts = {}) {
  if (!isSupabaseConfigured) {
    return {
      ok: false,
      reason: "not_configured",
      message: "Supabase URL/anon key가 .env에 없습니다.",
    };
  }
  const learnerId = resolveProbeLearnerId(opts.learnerId);
  try {
    const remote = await fetchProbeAnswersRemote(bookId, learnerId);
    const local = getProbeAnswersMap(bookId);
    /** @type {ProbeAnswerMap} */
    const merged = { ...local };
    let pulled = 0;
    let keptLocal = 0;

    for (const [cardId, remoteEntry] of Object.entries(remote)) {
      const localEntry = local[cardId];
      const remoteTs = Date.parse(remoteEntry.updatedAt || "") || 0;
      const localTs = Date.parse(localEntry?.updatedAt || "") || 0;
      if (!localEntry || remoteTs >= localTs) {
        if (remoteEntry.text?.trim()) {
          merged[cardId] = remoteEntry;
          if (!localEntry || remoteEntry.text !== localEntry.text) pulled += 1;
        } else if (merged[cardId] && remoteTs >= localTs) {
          delete merged[cardId];
        }
      } else {
        keptLocal += 1;
      }
    }

    setProbeAnswersMap(bookId, merged);

    // 로컬만 있거나 로컬이 더 최신인 항목 푸시
    /** @type {ProbeAnswerMap} */
    const toPush = {};
    for (const [cardId, entry] of Object.entries(merged)) {
      const remoteEntry = remote[cardId];
      const remoteTs = Date.parse(remoteEntry?.updatedAt || "") || 0;
      const localTs = Date.parse(entry.updatedAt || "") || 0;
      if (!remoteEntry || localTs > remoteTs) {
        toPush[cardId] = entry;
      }
    }
    const pushResult = await upsertProbeAnswersBulkRemote(
      bookId,
      learnerId,
      toPush,
    );

    return {
      ok: true,
      learnerId,
      pulled,
      pushed: pushResult.upserted,
      keptLocal,
      localCount: Object.keys(merged).filter((id) => merged[id]?.text?.trim())
        .length,
    };
  } catch (err) {
    return {
      ok: false,
      reason: "error",
      message: err?.message || String(err),
    };
  }
}

/**
 * @param {object} opts
 * @param {string} opts.bookId
 * @param {string} opts.bookTitle
 * @param {object[]} opts.cards
 * @param {string} [opts.learner]
 */
export function buildProbeAnswersExportPayload({
  bookId,
  bookTitle,
  cards,
  learner = "",
}) {
  const map = getProbeAnswersMap(bookId);
  const answers = cards.map((card) => {
    const entry = map[card.id];
    return {
      cardId: card.id,
      category: card.frontCategory || "",
      questionDe: card.termDe || card.term || "",
      questionKo: card.termKo || "",
      answer: entry?.text || "",
      updatedAt: entry?.updatedAt || null,
      answered: Boolean(entry?.text?.trim()),
    };
  });
  const answeredCount = answers.filter((a) => a.answered).length;
  return {
    bookId,
    bookTitle,
    learner: learner || resolveProbeLearnerId(),
    exportedAt: new Date().toISOString(),
    answeredCount,
    totalCount: cards.length,
    answers,
  };
}

/** @param {object} payload @param {string} [filename] */
export function downloadProbeAnswersJson(payload, filename) {
  const name =
    filename ||
    `physik-probe-antworten-${(payload.exportedAt || "").slice(0, 10)}.json`;
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
