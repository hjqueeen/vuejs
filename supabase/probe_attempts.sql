-- Probe 풀이 시도(히스토리) 저장
-- Supabase SQL Editor에서 실행하세요.

create table if not exists public.probe_attempts (
  id uuid primary key default gen_random_uuid(),
  book_id text not null,
  learner_id text not null,
  submitted_at timestamptz not null default now(),
  answered_count int not null default 0,
  total_count int not null default 0,
  score_points numeric(8,2) not null default 0,
  score_max numeric(8,2) not null default 0,
  score_percent numeric(6,2) not null default 0,
  mark_ok int not null default 0,
  mark_partial int not null default 0,
  mark_wrong int not null default 0,
  mark_empty int not null default 0,
  snapshot jsonb not null default '[]'::jsonb
);

create index if not exists probe_attempts_learner_book_idx
  on public.probe_attempts (learner_id, book_id, submitted_at desc);

alter table public.probe_attempts enable row level security;

drop policy if exists "probe_attempts_select_anon" on public.probe_attempts;
create policy "probe_attempts_select_anon"
  on public.probe_attempts for select
  to anon, authenticated
  using (true);

drop policy if exists "probe_attempts_insert_anon" on public.probe_attempts;
create policy "probe_attempts_insert_anon"
  on public.probe_attempts for insert
  to anon, authenticated
  with check (true);

drop policy if exists "probe_attempts_delete_anon" on public.probe_attempts;
create policy "probe_attempts_delete_anon"
  on public.probe_attempts for delete
  to anon, authenticated
  using (true);
