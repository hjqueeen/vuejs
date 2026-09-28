/** Probe 풀이 히스토리 — localStorage + (선택) Supabase */

import { resolveProbeLearnerId } from "@/utils/flashcardProbeAnswers";
import { gradeProbeAnswers } from "@/utils/flashcardProbeGrading";
import { isSupabaseConfigured } from "@/services/supabaseClient";
import {
  fetchProbeAttemptsRemote,
  insertProbeAttemptRemote,
} from "@/services/probeAttemptsApi";

const STORAGE_PREFIX = "flashcard-probe-attempts";

function storageKey(bookId) {
  return `${STORAGE_PREFIX}:${bookId}`;
}

function newId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/** @param {string} bookId */
export function getLocalProbeAttempts(bookId) {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(storageKey(bookId));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** @param {string} bookId @param {object[]} list */
function setLocalProbeAttempts(bookId, list) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(storageKey(bookId), JSON.stringify(list.slice(0, 50)));
}

/**
 * 현재 로컬 답안을 채점하고 히스토리에 저장 (+ 가능하면 클라우드)
 * @param {string} bookId
 * @param {object[]} cards
 * @param {{ learnerId?: string }} [opts]
 */
export async function submitProbeAttempt(bookId, cards, opts = {}) {
  const learnerId = resolveProbeLearnerId(opts.learnerId);
  const graded = gradeProbeAnswers(bookId, cards);
  const attempt = {
    id: newId(),
    bookId,
    learnerId,
    submittedAt: new Date().toISOString(),
    answeredCount: graded.answeredCount,
    totalCount: graded.totalCount,
    scorePoints: graded.scorePoints,
    scoreMax: graded.scoreMax,
    scorePercent: graded.scorePercent,
    markOk: graded.markOk,
    markPartial: graded.markPartial,
    markWrong: graded.markWrong,
    markEmpty: graded.markEmpty,
    snapshot: graded.items,
  };

  let remoteOk = false;
  let remoteSkipped = !isSupabaseConfigured;
  let remoteError = null;

  if (isSupabaseConfigured) {
    try {
      const remote = await insertProbeAttemptRemote(attempt);
      if (remote?.id) {
        attempt.id = remote.id;
        attempt.submittedAt = remote.submittedAt || attempt.submittedAt;
        remoteOk = true;
      } else {
        remoteSkipped = true; // 테이블 없음 → 로컬만
      }
    } catch (err) {
      remoteError = err?.message || String(err);
    }
  }

  const local = getLocalProbeAttempts(bookId).filter((a) => a.id !== attempt.id);
  local.unshift(attempt);
  setLocalProbeAttempts(bookId, local);

  return {
    attempt,
    graded,
    remoteOk,
    remoteSkipped,
    remoteError,
  };
}

/**
 * 로컬 + 원격 히스토리 병합 (id 기준, submittedAt desc)
 * @param {string} bookId
 * @param {{ learnerId?: string }} [opts]
 */
export async function loadProbeAttempts(bookId, opts = {}) {
  const learnerId = resolveProbeLearnerId(opts.learnerId);
  const local = getLocalProbeAttempts(bookId);
  /** @type {Map<string, object>} */
  const byId = new Map();
  for (const a of local) {
    if (a?.id) byId.set(a.id, a);
  }

  let remoteOk = false;
  let remoteError = null;
  if (isSupabaseConfigured) {
    try {
      const remote = await fetchProbeAttemptsRemote(bookId, learnerId);
      remoteOk = true;
      for (const a of remote) {
        if (!a?.id) continue;
        const existing = byId.get(a.id);
        if (!existing) {
          byId.set(a.id, a);
        } else {
          const ets = Date.parse(existing.submittedAt || "") || 0;
          const rts = Date.parse(a.submittedAt || "") || 0;
          if (rts >= ets) byId.set(a.id, { ...existing, ...a });
        }
      }
      // 원격 결과를 로컬에도 반영
      setLocalProbeAttempts(
        bookId,
        Array.from(byId.values()).sort(
          (a, b) =>
            (Date.parse(b.submittedAt || "") || 0) -
            (Date.parse(a.submittedAt || "") || 0),
        ),
      );
    } catch (err) {
      remoteError = err?.message || String(err);
    }
  }

  const attempts = Array.from(byId.values()).sort(
    (a, b) =>
      (Date.parse(b.submittedAt || "") || 0) -
      (Date.parse(a.submittedAt || "") || 0),
  );

  return { attempts, remoteOk, remoteError, learnerId };
}

/** 최신 시도의 카드별 mark 맵 */
export function getLatestAttemptMarkMap(bookId) {
  const [latest] = getLocalProbeAttempts(bookId);
  /** @type {Record<string, string>} */
  const map = {};
  if (!latest?.snapshot) return map;
  for (const row of latest.snapshot) {
    if (row?.cardId) map[row.cardId] = row.mark || "empty";
  }
  return map;
}

export function getLatestProbeAttempt(bookId) {
  return getLocalProbeAttempts(bookId)[0] || null;
}
