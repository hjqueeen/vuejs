#!/usr/bin/env node
/**
 * 로컬 JSON 답안 + 번들 피드백을 Supabase에 업로드합니다.
 * 사용: node scripts/seed-probe-to-supabase.js
 */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { createClient } = require("@supabase/supabase-js");

const url = process.env.VUE_APP_SUPABASE_URL;
const key = process.env.VUE_APP_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error("VUE_APP_SUPABASE_URL / VUE_APP_SUPABASE_ANON_KEY 가 .env에 필요합니다.");
  process.exit(1);
}

const sb = createClient(url, key);
const FEEDBACK_PREFIX = "feedback:";

const ANSWERS_PATH = path.join(
  __dirname,
  "..",
  "src/data/hangyeol-physik/physik-probe-antworten-hangyeol-2026-09-28.json",
);
const FEEDBACK_JS_PATH = path.join(
  __dirname,
  "..",
  "src/data/physikProbeFeedbackContent.js",
);

/** Vue ESM 모듈에서 export const 맵을 느슨하게 추출 */
function extractFeedbackFromSource(src) {
  // physikProbeFeedbackByCardId 블록만 잘라 Function으로 평가
  const start = src.indexOf("export const physikProbeFeedbackByCardId = ");
  const noteStart = src.indexOf("export const physikProbeNoteSourceByCardId = ");
  if (start < 0 || noteStart < 0) {
    throw new Error("피드백 export를 찾지 못했습니다.");
  }
  const afterNotes = src.slice(noteStart);
  const noteEnd = afterNotes.indexOf("\n};\n") + noteStart + 3;
  const afterFb = src.slice(start);
  const fbEnd = afterFb.indexOf("\n};\n") + start + 3;

  const noteBlock = src
    .slice(noteStart, noteEnd)
    .replace(/^export const physikProbeNoteSourceByCardId = /, "return ");
  const fbBlock = src
    .slice(start, fbEnd)
    .replace(/^export const physikProbeFeedbackByCardId = /, "return ");

  // NS 객체도 필요
  const nsStart = src.indexOf("const NS = ");
  const nsEnd = src.indexOf("\n};\n", nsStart) + 3;
  const nsBlock = src.slice(nsStart, nsEnd);

  const noteMap = new Function(`${nsBlock}\n${noteBlock}`)();
  const fbMap = new Function(`${fbBlock}`)();

  /** @type {Record<string, object>} */
  const out = {};
  for (const [cardId, base] of Object.entries(fbMap)) {
    const note = noteMap[cardId] || {};
    out[cardId] = {
      mark: base.mark || "empty",
      modelDe: base.modelDe || "",
      commentKo: base.commentKo || "",
      noteChapterId: note.noteChapterId || base.noteChapterId || "",
      noteDe: note.noteDe || base.noteDe || "",
      noteKo: note.noteKo || base.noteKo || "",
    };
  }
  return out;
}

async function uploadAnswers(payload) {
  const bookId = payload.bookId;
  const learnerId = payload.learner || "hangyeol";
  const rows = (payload.answers || [])
    .filter((a) => a.cardId && String(a.answer || "").trim())
    .map((a) => ({
      book_id: bookId,
      learner_id: learnerId,
      card_id: a.cardId,
      answer: a.answer,
      updated_at: a.updatedAt || payload.exportedAt || new Date().toISOString(),
    }));

  if (!rows.length) {
    console.log("답안: 업로드할 항목 없음");
    return { upserted: 0 };
  }

  const { error } = await sb
    .from("probe_answers")
    .upsert(rows, { onConflict: "book_id,learner_id,card_id" });
  if (error) throw error;
  console.log(`답안: ${rows.length}건 upsert (book=${bookId}, learner=${learnerId})`);
  return { upserted: rows.length, bookId, learnerId };
}

async function uploadFeedback(bookId, learnerId, map) {
  const updatedAt = new Date().toISOString();
  const rows = Object.entries(map).map(([cardId, entry]) => ({
    book_id: bookId,
    learner_id: learnerId,
    card_id: cardId,
    mark: entry.mark || "empty",
    model_de: entry.modelDe || "",
    comment_ko: entry.commentKo || "",
    note_chapter_id: entry.noteChapterId || "",
    note_de: entry.noteDe || "",
    note_ko: entry.noteKo || "",
    updated_at: updatedAt,
  }));

  const { error } = await sb
    .from("probe_feedback")
    .upsert(rows, { onConflict: "book_id,learner_id,card_id" });

  if (!error) {
    console.log(`피드백: ${rows.length}건 upsert → probe_feedback`);
    return { upserted: rows.length, via: "probe_feedback" };
  }

  if (error.code !== "PGRST205") throw error;

  // 테이블 없음 → probe_answers 폴백
  const fallback = rows.map((row) => ({
    book_id: bookId,
    learner_id: `${FEEDBACK_PREFIX}${learnerId}`,
    card_id: row.card_id,
    answer: JSON.stringify({
      mark: row.mark,
      modelDe: row.model_de,
      commentKo: row.comment_ko,
      noteChapterId: row.note_chapter_id,
      noteDe: row.note_de,
      noteKo: row.note_ko,
    }),
    updated_at: updatedAt,
  }));
  const { error: fbErr } = await sb
    .from("probe_answers")
    .upsert(fallback, { onConflict: "book_id,learner_id,card_id" });
  if (fbErr) throw fbErr;
  console.log(
    `피드백: ${fallback.length}건 upsert → probe_answers 폴백 (learner=${FEEDBACK_PREFIX}${learnerId})`,
  );
  console.log(
    "※ 전용 테이블을 쓰려면 Supabase SQL Editor에서 supabase/probe_feedback.sql 을 실행하세요.",
  );
  return { upserted: fallback.length, via: "probe_answers_fallback" };
}

async function main() {
  const answersPayload = JSON.parse(fs.readFileSync(ANSWERS_PATH, "utf8"));
  const feedbackSrc = fs.readFileSync(FEEDBACK_JS_PATH, "utf8");
  const feedbackMap = extractFeedbackFromSource(feedbackSrc);

  console.log(`피드백 항목 ${Object.keys(feedbackMap).length}개 파싱됨`);

  await uploadAnswers(answersPayload);
  await uploadFeedback(
    answersPayload.bookId,
    answersPayload.learner || "hangyeol",
    feedbackMap,
  );

  // 검증
  const { count: aCount, error: aErr } = await sb
    .from("probe_answers")
    .select("card_id", { count: "exact", head: true })
    .eq("book_id", answersPayload.bookId)
    .eq("learner_id", answersPayload.learner || "hangyeol");
  if (aErr) throw aErr;
  console.log(`검증 답안 행 수: ${aCount}`);
}

main().catch((err) => {
  console.error("시드 실패:", err.message || err);
  process.exit(1);
});
