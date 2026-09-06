import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for country_metrics. Used for both the read-side
 * overlay (country pages, /api/country) and the write-side weekly cron.
 * Returns null when env vars are missing so the site keeps working with static
 * data only — Supabase is an enhancement, never a hard dependency.
 */
export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
