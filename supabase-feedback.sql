-- =====================================================
-- WEBSITE FEEDBACK
-- Anyone can send feedback. Only authors and admins can read it.
-- =====================================================

create table if not exists public.feedback (
  id          uuid primary key default gen_random_uuid(),
  kind        text not null check (kind in ('suggestion', 'problem', 'course_request', 'praise', 'other')),
  message     text not null check (char_length(message) between 5 and 2000),
  name        text check (char_length(name) <= 80),
  contact     text check (char_length(contact) <= 120),   -- email or phone, optional
  page        text check (char_length(page) <= 200),       -- where it was sent from
  status      text not null default 'new' check (status in ('new', 'read', 'done')),
  created_at  timestamptz not null default now()
);

alter table public.feedback enable row level security;

-- Visitors (logged in or not) can only ADD feedback, never read or change it
drop policy if exists feedback_insert_anyone on public.feedback;
create policy feedback_insert_anyone on public.feedback
  for insert to anon, authenticated
  with check (status = 'new');

-- Authors and admins can read and update it (e.g. mark as done)
drop policy if exists feedback_read_staff on public.feedback;
create policy feedback_read_staff on public.feedback
  for select using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('author', 'admin'))
  );

drop policy if exists feedback_update_staff on public.feedback;
create policy feedback_update_staff on public.feedback
  for update using (
    exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('author', 'admin'))
  );

grant insert on public.feedback to anon, authenticated;
