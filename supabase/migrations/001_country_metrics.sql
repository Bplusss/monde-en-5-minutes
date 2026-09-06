create table if not exists country_metrics (
  country_slug text not null,
  metric_key text not null,
  value jsonb not null,
  unit text,
  year int,
  source text not null,
  source_url text,
  note text,
  updated_at timestamptz not null default now(),
  primary key (country_slug, metric_key)
);

-- Public read access: this is non-sensitive, publicly displayed country data.
alter table country_metrics enable row level security;

create policy "country_metrics are publicly readable"
  on country_metrics for select
  using (true);

-- No insert/update/delete policy for the anon/authenticated roles: only the
-- service-role key (used server-side by the cron route) can write, bypassing RLS.
