#!/usr/bin/env node
/**
 * 클라우드 답안을 채점해 probe_attempts(또는 로컬 JSON)로 기록합니다.
 * 사용: node scripts/grade-probe-attempt.js
 */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const { createClient } = require("@supabase/supabase-js");

const url = process.env.VUE_APP_SUPABASE_URL;
const key = process.env.VUE_APP_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error(".env에 Supabase 설정이 필요합니다.");
  process.exit(1);
}

const sb = createClient(url, key);
const BOOK_ID = "book-physik-probe-fragen-k9";
const LEARNER = "hangyeol";

const FEEDBACK_JS = path.join(
  __dirname,
  "..",
  "src/data/physikProbeFeedbackContent.js",
);
const CARDS_JS = path.join(
  __dirname,
  "..",
  "src/data/physikProbeFragenContent.js",
);

function extractFeedback(src) {
  const nsStart = src.indexOf("const NS = ");
  const nsEnd = src.indexOf("\n};\n", nsStart) + 3;
  const noteStart = src.indexOf("export const physikProbeNoteSourceByCardId = ");
  const noteEnd = src.indexOf("\n};\n", noteStart) + 3;
  const fbStart = src.indexOf("export const physikProbeFeedbackByCardId = ");
  const fbEnd = src.indexOf("\n};\n", fbStart) + 3;
  const nsBlock = src.slice(nsStart, nsEnd);
  const noteBlock = src
    .slice(noteStart, noteEnd)
    .replace(/^export const physikProbeNoteSourceByCardId = /, "return ");
  const fbBlock = src
    .slice(fbStart, fbEnd)
    .replace(/^export const physikProbeFeedbackByCardId = /, "return ");
  const noteMap = new Function(`${nsBlock}\n${noteBlock}`)();
  const fbMap = new Function(`${fbBlock}`)();
  const out = {};
  for (const [id, base] of Object.entries(fbMap)) {
    const note = noteMap[id] || {};
    out[id] = {
      mark: base.mark || "empty",
      modelDe: base.modelDe || "",
      commentKo: base.commentKo || "",
      noteChapterId: note.noteChapterId || "",
      noteDe: note.noteDe || "",
      noteKo: note.noteKo || "",
    };
  }
  return out;
}

function extractCardIds(src) {
  const ids = [...src.matchAll(/"(card-ppf-[a-z0-9]+)"/g)].map((m) => m[1]);
  return [...new Set(ids)];
}

const POINTS = { ok: 1, partial: 0.5, wrong: 0, empty: 0 };

async function main() {
  const feedback = extractFeedback(fs.readFileSync(FEEDBACK_JS, "utf8"));
  const cardIds = extractCardIds(fs.readFileSync(CARDS_JS, "utf8"));

  const { data, error } = await sb
    .from("probe_answers")
    .select("card_id, answer, updated_at")
    .eq("book_id", BOOK_ID)
    .eq("learner_id", LEARNER);
  if (error) throw error;

  const answerMap = {};
  for (const row of data || []) {
    answerMap[row.card_id] = row.answer || "";
  }

  let markOk = 0;
  let markPartial = 0;
  let markWrong = 0;
  let markEmpty = 0;
  let scorePoints = 0;
  let answeredCount = 0;
  const snapshot = [];

  for (const cardId of cardIds) {
    const answer = answerMap[cardId] || "";
    const answered = Boolean(answer.trim());
    if (answered) answeredCount += 1;
    const fb = feedback[cardId] || {};
    let mark = answered ? fb.mark || "empty" : "empty";
    if (answered && mark === "empty" && !fb.modelDe) mark = "empty";
    const points = POINTS[mark] ?? 0;
    scorePoints += points;
    if (mark === "ok") markOk += 1;
    else if (mark === "partial") markPartial += 1;
    else if (mark === "wrong") markWrong += 1;
    else markEmpty += 1;
    snapshot.push({
      cardId,
      answer,
      answered,
      mark,
      points,
      modelDe: fb.modelDe || "",
      commentKo: fb.commentKo || "",
    });
  }

  const totalCount = cardIds.length;
  const scoreMax = totalCount;
  const scorePercent =
    scoreMax > 0 ? Math.round((scorePoints / scoreMax) * 1000) / 10 : 0;

  const attempt = {
    book_id: BOOK_ID,
    learner_id: LEARNER,
    submitted_at: new Date().toISOString(),
    answered_count: answeredCount,
    total_count: totalCount,
    score_points: scorePoints,
    score_max: scoreMax,
    score_percent: scorePercent,
    mark_ok: markOk,
    mark_partial: markPartial,
    mark_wrong: markWrong,
    mark_empty: markEmpty,
    snapshot,
  };

  console.log(
    `채점: ${scorePercent}% (${scorePoints}/${scoreMax}) · 작성 ${answeredCount}/${totalCount}`,
  );
  console.log(`✓${markOk} △${markPartial} ✗${markWrong} ·${markEmpty}`);

  const { data: inserted, error: insErr } = await sb
    .from("probe_attempts")
    .insert(attempt)
    .select("id")
    .single();

  if (insErr) {
    if (insErr.code === "PGRST205") {
      const outPath = path.join(
        __dirname,
        "..",
        "src/data/hangyeol-physik",
        `physik-probe-attempt-${LEARNER}-${attempt.submitted_at.slice(0, 10)}.json`,
      );
      fs.writeFileSync(outPath, JSON.stringify({ ...attempt, id: `local-${Date.now()}` }, null, 2));
      console.log("probe_attempts 테이블 없음 → JSON 저장:", outPath);
      console.log("Supabase SQL Editor에서 supabase/probe_attempts.sql 실행 후 다시 돌리세요.");
      return;
    }
    throw insErr;
  }
  console.log("클라우드 기록됨 id=", inserted.id);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
