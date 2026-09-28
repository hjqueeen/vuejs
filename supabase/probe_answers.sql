-- Probe-Fragen 답안 저장 (Vue 학습앱)
-- Supabase SQL Editor에서 실행하세요.
-- Project: https://dnfchaooiwmdpjptfyyr.supabase.co

create table if not exists public.probe_answers (
  id uuid primary key default gen_random_uuid(),
  book_id text not null,
  learner_id text not null,
  card_id text not null,
  answer text not null default '',
  updated_at timestamptz not null default now(),
  constraint probe_answers_unique unique (book_id, learner_id, card_id)
);

create index if not exists probe_answers_learner_book_idx
  on public.probe_answers (learner_id, book_id);

alter table public.probe_answers enable row level security;

-- 가족/학습용: anon 키로 읽기·쓰기 허용 (나중에 Auth로 강화 가능)
drop policy if exists "probe_answers_select_anon" on public.probe_answers;
create policy "probe_answers_select_anon"
  on public.probe_answers for select
  to anon, authenticated
  using (true);

drop policy if exists "probe_answers_insert_anon" on public.probe_answers;
create policy "probe_answers_insert_anon"
  on public.probe_answers for insert
  to anon, authenticated
  with check (true);

drop policy if exists "probe_answers_update_anon" on public.probe_answers;
create policy "probe_answers_update_anon"
  on public.probe_answers for update
  to anon, authenticated
  using (true)
  with check (true);

drop policy if exists "probe_answers_delete_anon" on public.probe_answers;
create policy "probe_answers_delete_anon"
  on public.probe_answers for delete
  to anon, authenticated
  using (true);
