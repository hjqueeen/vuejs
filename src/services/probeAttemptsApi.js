import { supabase, isSupabaseConfigured } from "@/services/supabaseClient";

const TABLE = "probe_attempts";

/**
 * @typedef {{
 *   id?: string,
 *   bookId: string,
 *   learnerId: string,
 *   submittedAt: string,
 *   answeredCount: number,
 *   totalCount: number,
 *   scorePoints: number,
 *   scoreMax: number,
 *   scorePercent: number,
 *   markOk: number,
 *   markPartial: number,
 *   markWrong: number,
 *   markEmpty: number,
 *   snapshot: object[],
 * }} ProbeAttempt
 */

function rowToAttempt(row) {
  return {
    id: row.id,
    bookId: row.book_id,
    learnerId: row.learner_id,
    submittedAt: row.submitted_at,
    answeredCount: row.answered_count,
    totalCount: row.total_count,
    scorePoints: Number(row.score_points) || 0,
    scoreMax: Number(row.score_max) || 0,
    scorePercent: Number(row.score_percent) || 0,
    markOk: row.mark_ok || 0,
    markPartial: row.mark_partial || 0,
    markWrong: row.mark_wrong || 0,
    markEmpty: row.mark_empty || 0,
    snapshot: Array.isArray(row.snapshot) ? row.snapshot : [],
  };
}

/**
 * @param {string} bookId
 * @param {string} learnerId
 * @param {number} [limit]
 * @returns {Promise<ProbeAttempt[]>}
 */
export async function fetchProbeAttemptsRemote(bookId, learnerId, limit = 30) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase가 설정되지 않았습니다.");
  }
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("book_id", bookId)
    .eq("learner_id", learnerId)
    .order("submitted_at", { ascending: false })
    .limit(limit);

  if (error) {
    if (error.code === "PGRST205") return [];
    throw error;
  }
  return (data || []).map(rowToAttempt);
}

/**
 * @param {ProbeAttempt} attempt
 * @returns {Promise<ProbeAttempt | null>}
 */
export async function insertProbeAttemptRemote(attempt) {
  if (!isSupabaseConfigured || !supabase) return null;

  const row = {
    book_id: attempt.bookId,
    learner_id: attempt.learnerId,
    submitted_at: attempt.submittedAt || new Date().toISOString(),
    answered_count: attempt.answeredCount,
    total_count: attempt.totalCount,
    score_points: attempt.scorePoints,
    score_max: attempt.scoreMax,
    score_percent: attempt.scorePercent,
    mark_ok: attempt.markOk,
    mark_partial: attempt.markPartial,
    mark_wrong: attempt.markWrong,
    mark_empty: attempt.markEmpty,
    snapshot: attempt.snapshot || [],
  };

  const { data, error } = await supabase
    .from(TABLE)
    .insert(row)
    .select("*")
    .single();

  if (error) {
    if (error.code === "PGRST205") return null;
    throw error;
  }
  return rowToAttempt(data);
}
