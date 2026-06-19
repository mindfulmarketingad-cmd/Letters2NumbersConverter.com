import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Lazily-initialised Supabase anon (public) client.
//
// createClient throws "supabaseUrl is required" if instantiated with an
// undefined URL. Instantiating at module scope crashes SSR prerendering during
// `next build` whenever the NEXT_PUBLIC_SUPABASE_* env vars are absent (CI,
// sandboxes, preview deploys). This proxy defers the real createClient call
// until first property access, by which point the values are available.
let client: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }
  return client
}

export function getSupabaseAnon(): SupabaseClient {
  return new Proxy({} as SupabaseClient, {
    get(_target, prop) {
      const real = getClient() as unknown as Record<string | symbol, unknown>
      const value = real[prop]
      return typeof value === 'function' ? (value as (...args: unknown[]) => unknown).bind(real) : value
    },
  })
}
