#!/usr/bin/env node
/**
 * Upgrades legacy tool pages to add:
 *   - canonical tag (if missing)
 *   - OG images + twitter card (if missing)
 *   - robots meta (if missing)
 *   - JSON-LD SoftwareApplication + BreadcrumbList schemas
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const BASE_URL = 'https://www.letters2numbersconverter.com'
const TOOLS_DIR = path.join(__dirname, '..', 'app', 'tools')

// Tool pages that already have JSON-LD — skip them
const alreadyUpgraded = new Set(
  execSync(`grep -rl "application/ld+json" ${TOOLS_DIR}`)
    .toString().trim().split('\n').filter(Boolean)
    .map(f => path.dirname(f))
)

// All tool page.tsx files
const allPages = fs.readdirSync(TOOLS_DIR)
  .filter(d => fs.statSync(path.join(TOOLS_DIR, d)).isDirectory())
  .map(d => ({ slug: d, file: path.join(TOOLS_DIR, d, 'page.tsx') }))
  .filter(({ file }) => fs.existsSync(file))
  .filter(({ file }) => !alreadyUpgraded.has(path.dirname(file)))

console.log(`Upgrading ${allPages.length} tool pages...\n`)

let upgraded = 0
let skipped = 0

for (const { slug, file } of allPages) {
  let content = fs.readFileSync(file, 'utf8')
  const pageUrl = `${BASE_URL}/tools/${slug}`

  // ── Extract title ─────────────────────────────────────────────────────────
  const titleMatch = content.match(/title:\s*["'`]([^"'`\n]+)["'`]/)
  const title = titleMatch
    ? titleMatch[1]
    : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  // ── Extract description ───────────────────────────────────────────────────
  const descMatch = content.match(/description:\s*["'`]([^"'`\n]{10,})["'`]/)
  const description = descMatch
    ? descMatch[1]
    : `Free online ${title} tool. Works in your browser with no sign-up required.`

  // ── Extract toolSlug for breadcrumb ───────────────────────────────────────
  const toolSlugMatch = content.match(/toolSlug=["'{]([^"'}]+)["'}]/)
  const toolSlug = toolSlugMatch ? toolSlugMatch[1] : slug

  let changed = false

  // ── 1. Add schema-markup import if missing ────────────────────────────────
  if (!content.includes('generateToolPageSchema')) {
    // Insert after the last import line
    content = content.replace(
      /((?:import[^\n]+\n)+)/,
      (match) => {
        // Only modify the first block of imports
        return match + `import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'\n`
      }
    )
    changed = true
  }

  // ── 2. Add BASE_URL / PAGE_URL / schema consts before export const metadata ─
  if (!content.includes('const PAGE_URL')) {
    const schemaConsts = `
const BASE_URL = '${BASE_URL}'
const PAGE_URL = \`\${BASE_URL}/tools/${slug}\`

const toolSchema = generateToolPageSchema(
  ${JSON.stringify(title)},
  ${JSON.stringify(description)},
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: \`\${BASE_URL}/tools\` },
  { name: ${JSON.stringify(title)}, url: PAGE_URL },
])

`
    content = content.replace(
      /export const metadata/,
      schemaConsts + 'export const metadata'
    )
    changed = true
  }

  // ── 3. Add canonical if missing ───────────────────────────────────────────
  if (!content.includes('alternates') && !content.includes('canonical')) {
    // Add after the last property in the metadata object, before the closing }
    // Find openGraph block end or robots end to insert after
    content = content.replace(
      /(openGraph:\s*\{[^}]+\},?\n)/,
      (match) => match + `  alternates: { canonical: PAGE_URL },\n`
    )
    changed = true
  }

  // ── 4. Add OG images if missing ───────────────────────────────────────────
  if (!content.includes('images:') && content.includes('openGraph:')) {
    // Add images array after the url: line in openGraph (or after type: line)
    content = content.replace(
      /(openGraph:\s*\{[^}]*)(url:\s*["'`][^"'`]*["'`]|type:\s*["'`][^"'`]*["'`])/,
      (match, prefix, urlLine) => {
        if (!match.includes('images:')) {
          return match + `,\n    images: [{ url: \`\${BASE_URL}/og-image.png\`, width: 1200, height: 630, alt: ${JSON.stringify(title)} }]`
        }
        return match
      }
    )
    changed = true
  }

  // ── 5. Add twitter card if missing ───────────────────────────────────────
  if (!content.includes('twitter:')) {
    content = content.replace(
      /alternates:\s*\{[^}]*\},?/,
      (match) => match + `\n  twitter: { card: 'summary_large_image', title: ${JSON.stringify(title)}, description: ${JSON.stringify(description.slice(0, 200))}, images: [\`\${BASE_URL}/og-image.png\`] },`
    )
    changed = true
  }

  // ── 6. Add robots if missing ──────────────────────────────────────────────
  if (!content.includes('robots:')) {
    content = content.replace(
      /alternates:\s*\{[^}]*\},?/,
      (match) => match + `\n  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },`
    )
    changed = true
  }

  // ── 7. Wrap return JSX to include JSON-LD script tags ─────────────────────
  if (!content.includes('dangerouslySetInnerHTML')) {
    // Find the return statement pattern and wrap it
    content = content.replace(
      /(\s*return\s*\(\s*\n?\s*)(<ToolPageWrapper)/,
      (match, returnPart, toolWrapper) => {
        return `${returnPart}(\n    <>\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />\n      ${toolWrapper}`
      }
    )
    // Close the fragment — find the last </ToolPageWrapper> and add </>
    content = content.replace(
      /(<\/ToolPageWrapper>\s*\)\s*\}\s*)$/,
      '</ToolPageWrapper>\n    </>\n  )\n}\n'
    )
    changed = true
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8')
    upgraded++
    console.log(`  ✓ ${slug}`)
  } else {
    skipped++
    console.log(`  - ${slug} (no changes needed)`)
  }
}

console.log(`\nDone: ${upgraded} upgraded, ${skipped} skipped.`)
