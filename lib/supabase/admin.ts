import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Lazily-initialised Supabase service-role client.
//
// supabase-js throws "supabaseUrl is required" the moment createClient runs
// with an undefined URL. Instantiating at module scope therefore crashes
// `next build` (which evaluates every route module to collect page data) in
// any environment without the env vars set — sandboxes, CI, preview deploys.
//
// This proxy defers the real createClient call until the first property access,
// which only happens at request time when the env vars are present. Routes can
// keep using it exactly like a normal client: `getSupabaseAdmin().from(...)`.
let client: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
  }
  return client
}

export function getSupabaseAdmin(): SupabaseClient {
  return new Proxy({} as SupabaseClient, {
    get(_target, prop) {
      const real = getClient() as unknown as Record<string | symbol, unknown>
      const value = real[prop]
      return typeof value === 'function' ? (value as (...args: unknown[]) => unknown).bind(real) : value
    },
  })
}
