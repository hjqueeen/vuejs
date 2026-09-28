-- Probe-Fragen 피드백 저장 (Musterlösung + Kommentar)
-- Supabase SQL Editor에서 실행하세요.
-- Project: https://dnfchaooiwmdpjptfyyr.supabase.co

create table if not exists public.probe_feedback (
  id uuid primary key default gen_random_uuid(),
  book_id text not null,
  learner_id text not null,
  card_id text not null,
  mark text not null default 'empty',
  model_de text not null default '',
  comment_ko text not null default '',
  note_chapter_id text not null default '',
  note_de text not null default '',
  note_ko text not null default '',
  updated_at timestamptz not null default now(),
  constraint probe_feedback_unique unique (book_id, learner_id, card_id)
);

create index if not exists probe_feedback_learner_book_idx
  on public.probe_feedback (learner_id, book_id);

alter table public.probe_feedback enable row level security;

drop policy if exists "probe_feedback_select_anon" on public.probe_feedback;
create policy "probe_feedback_select_anon"
  on public.probe_feedback for select
  to anon, authenticated
  using (true);

drop policy if exists "probe_feedback_insert_anon" on public.probe_feedback;
create policy "probe_feedback_insert_anon"
  on public.probe_feedback for insert
  to anon, authenticated
  with check (true);

drop policy if exists "probe_feedback_update_anon" on public.probe_feedback;
create policy "probe_feedback_update_anon"
  on public.probe_feedback for update
  to anon, authenticated
  using (true)
  with check (true);

drop policy if exists "probe_feedback_delete_anon" on public.probe_feedback;
create policy "probe_feedback_delete_anon"
  on public.probe_feedback for delete
  to anon, authenticated
  using (true);
