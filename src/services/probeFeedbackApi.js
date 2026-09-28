import { supabase, isSupabaseConfigured } from "@/services/supabaseClient";

const TABLE = "probe_feedback";
/** probe_feedback 테이블이 없을 때 probe_answers에 JSON으로 넣는 learner 접두사 */
export const FEEDBACK_LEARNER_PREFIX = "feedback:";

/**
 * @typedef {{
 *   mark: string,
 *   modelDe: string,
 *   commentKo: string,
 *   noteChapterId: string,
 *   noteDe: string,
 *   noteKo: string,
 *   updatedAt: string,
 * }} ProbeFeedbackRemote
 */

/** @param {string} learnerId */
export function feedbackLearnerId(learnerId) {
  return `${FEEDBACK_LEARNER_PREFIX}${learnerId || "hangyeol"}`;
}

function normalizeRow(row, updatedAt) {
  return {
    mark: row.mark || "empty",
    modelDe: row.model_de || row.modelDe || "",
    commentKo: row.comment_ko || row.commentKo || "",
    noteChapterId: row.note_chapter_id || row.noteChapterId || "",
    noteDe: row.note_de || row.noteDe || "",
    noteKo: row.note_ko || row.noteKo || "",
    updatedAt: updatedAt || row.updated_at || new Date().toISOString(),
  };
}

/**
 * @param {string} bookId
 * @param {string} learnerId
 * @returns {Promise<Record<string, ProbeFeedbackRemote>>}
 */
export async function fetchProbeFeedbackRemote(bookId, learnerId) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase가 설정되지 않았습니다 (.env).");
  }

  const { data, error } = await supabase
    .from(TABLE)
    .select(
      "card_id, mark, model_de, comment_ko, note_chapter_id, note_de, note_ko, updated_at",
    )
    .eq("book_id", bookId)
    .eq("learner_id", learnerId);

  if (!error) {
    /** @type {Record<string, ProbeFeedbackRemote>} */
    const map = {};
    for (const row of data || []) {
      if (!row.card_id) continue;
      map[row.card_id] = normalizeRow(row, row.updated_at);
    }
    return map;
  }

  // PGRST205: 테이블 없음 → probe_answers 폴백
  if (error.code !== "PGRST205") throw error;
  return fetchProbeFeedbackViaAnswersFallback(bookId, learnerId);
}

/**
 * @param {string} bookId
 * @param {string} learnerId
 */
async function fetchProbeFeedbackViaAnswersFallback(bookId, learnerId) {
  const { data, error } = await supabase
    .from("probe_answers")
    .select("card_id, answer, updated_at")
    .eq("book_id", bookId)
    .eq("learner_id", feedbackLearnerId(learnerId));
  if (error) throw error;

  /** @type {Record<string, ProbeFeedbackRemote>} */
  const map = {};
  for (const row of data || []) {
    if (!row.card_id) continue;
    try {
      const parsed = JSON.parse(row.answer || "{}");
      map[row.card_id] = normalizeRow(parsed, row.updated_at);
    } catch {
      // skip bad rows
    }
  }
  return map;
}

/**
 * @param {string} bookId
 * @param {string} learnerId
 * @param {Record<string, object>} map
 */
export async function upsertProbeFeedbackBulkRemote(bookId, learnerId, map) {
  if (!isSupabaseConfigured || !supabase) return { upserted: 0, via: null };

  const updatedAt = new Date().toISOString();
  const rows = Object.entries(map)
    .filter(([, entry]) => entry && (entry.modelDe || entry.commentKo || entry.mark))
    .map(([cardId, entry]) => ({
      book_id: bookId,
      learner_id: learnerId,
      card_id: cardId,
      mark: entry.mark || "empty",
      model_de: entry.modelDe || "",
      comment_ko: entry.commentKo || "",
      note_chapter_id: entry.noteChapterId || "",
      note_de: entry.noteDe || "",
      note_ko: entry.noteKo || "",
      updated_at: entry.updatedAt || updatedAt,
    }));

  if (!rows.length) return { upserted: 0, via: null };

  const { error } = await supabase
    .from(TABLE)
    .upsert(rows, { onConflict: "book_id,learner_id,card_id" });

  if (!error) return { upserted: rows.length, via: TABLE };

  if (error.code !== "PGRST205") throw error;

  // 폴백: probe_answers에 JSON 저장
  const fallbackRows = rows.map((row) => ({
    book_id: bookId,
    learner_id: feedbackLearnerId(learnerId),
    card_id: row.card_id,
    answer: JSON.stringify({
      mark: row.mark,
      modelDe: row.model_de,
      commentKo: row.comment_ko,
      noteChapterId: row.note_chapter_id,
      noteDe: row.note_de,
      noteKo: row.note_ko,
    }),
    updated_at: row.updated_at,
  }));

  const { error: fbErr } = await supabase
    .from("probe_answers")
    .upsert(fallbackRows, { onConflict: "book_id,learner_id,card_id" });
  if (fbErr) throw fbErr;
  return { upserted: fallbackRows.length, via: "probe_answers_fallback" };
}
