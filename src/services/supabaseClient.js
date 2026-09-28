import { createClient } from "@supabase/supabase-js";

const url = process.env.VUE_APP_SUPABASE_URL || "";
const anonKey = process.env.VUE_APP_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(url && anonKey);

/** @type {import('@supabase/supabase-js').SupabaseClient | null} */
export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

export function getSupabaseConfigStatus() {
  return {
    configured: isSupabaseConfigured,
    url: url || null,
    hasAnonKey: Boolean(anonKey),
  };
}
