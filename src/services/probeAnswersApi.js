import { supabase, isSupabaseConfigured } from "@/services/supabaseClient";

const TABLE = "probe_answers";

/**
 * @param {string} bookId
 * @param {string} learnerId
 * @returns {Promise<Record<string, { text: string, updatedAt: string }>>}
 */
export async function fetchProbeAnswersRemote(bookId, learnerId) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase가 설정되지 않았습니다 (.env).");
  }
  const { data, error } = await supabase
    .from(TABLE)
    .select("card_id, answer, updated_at")
    .eq("book_id", bookId)
    .eq("learner_id", learnerId);

  if (error) throw error;

  /** @type {Record<string, { text: string, updatedAt: string }>} */
  const map = {};
  for (const row of data || []) {
    if (!row.card_id) continue;
    map[row.card_id] = {
      text: row.answer || "",
      updatedAt: row.updated_at || new Date().toISOString(),
    };
  }
  return map;
}

/**
 * @param {string} bookId
 * @param {string} learnerId
 * @param {string} cardId
 * @param {string} text
 */
export async function upsertProbeAnswerRemote(bookId, learnerId, cardId, text) {
  if (!isSupabaseConfigured || !supabase) return null;
  const trimmed = String(text ?? "");
  if (!trimmed.trim()) {
    const { error } = await supabase
      .from(TABLE)
      .delete()
      .eq("book_id", bookId)
      .eq("learner_id", learnerId)
      .eq("card_id", cardId);
    if (error) throw error;
    return null;
  }
  const updatedAt = new Date().toISOString();
  const { data, error } = await supabase
    .from(TABLE)
    .upsert(
      {
        book_id: bookId,
        learner_id: learnerId,
        card_id: cardId,
        answer: trimmed,
        updated_at: updatedAt,
      },
      { onConflict: "book_id,learner_id,card_id" },
    )
    .select("card_id, answer, updated_at")
    .single();
  if (error) throw error;
  return {
    text: data.answer || trimmed,
    updatedAt: data.updated_at || updatedAt,
  };
}

/**
 * @param {string} bookId
 * @param {string} learnerId
 * @param {Record<string, { text: string, updatedAt?: string }>} map
 */
export async function upsertProbeAnswersBulkRemote(bookId, learnerId, map) {
  if (!isSupabaseConfigured || !supabase) return { upserted: 0 };
  const rows = Object.entries(map)
    .filter(([, entry]) => entry?.text?.trim())
    .map(([cardId, entry]) => ({
      book_id: bookId,
      learner_id: learnerId,
      card_id: cardId,
      answer: entry.text,
      updated_at: entry.updatedAt || new Date().toISOString(),
    }));

  if (!rows.length) return { upserted: 0 };

  const { error } = await supabase
    .from(TABLE)
    .upsert(rows, { onConflict: "book_id,learner_id,card_id" });
  if (error) throw error;
  return { upserted: rows.length };
}

/**
 * @param {string} bookId
 * @param {string} learnerId
 */
export async function clearProbeAnswersRemote(bookId, learnerId) {
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("book_id", bookId)
    .eq("learner_id", learnerId);
  if (error) throw error;
}
