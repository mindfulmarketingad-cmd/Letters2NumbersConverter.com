/**
 * Adds a Table of Contents to blog posts that don't already have one.
 * Run: node scripts/add-toc.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, basename } from 'path'

const BLOG_DIR = new URL('../app/blog', import.meta.url).pathname

// Blog posts that already have TOC
const SKIP = new Set([
  'a0z25-cipher',
  'alphanumeric-converter',
  'how-to-convert-image-to-word-text',
  'how-to-decode-computer-language',
  'how-to-decode-qr-code-algorithm',
  'how-to-make-an-image-grayscale',
  'skip-cipher',
  'what-is-url-encoding',
])

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function processFile(filePath, slug) {
  let content = readFileSync(filePath, 'utf8')

  if (content.includes('Table of Contents')) {
    console.log(`  SKIP (already has TOC): ${slug}`)
    return false
  }

  // Extract h2 headings — match JSX h2 elements with text content
  // Handles both single-line: <h2 className="...">Text</h2>
  // and multi-line variants
  const h2Regex = /<h2\b([^>]*)>([\s\S]*?)<\/h2>/g
  const headings = []
  let match

  while ((match = h2Regex.exec(content)) !== null) {
    const attrs = match[1]
    const rawText = match[2]
    // Skip h2s that are inside schema JSON or script tags
    if (rawText.includes('{') && rawText.includes('}')) continue
    // Strip any JSX/HTML tags inside the heading text
    const text = rawText.replace(/<[^>]+>/g, '').trim()
    if (!text || text.length < 3) continue
    headings.push({ fullMatch: match[0], attrs, text })
  }

  if (headings.length < 2) {
    console.log(`  SKIP (fewer than 2 h2s): ${slug}`)
    return false
  }

  // Build TOC entries and track IDs for deduplication
  const usedIds = new Map()
  const tocItems = headings.map(({ text }) => {
    let id = slugify(text)
    const count = usedIds.get(id) ?? 0
    usedIds.set(id, count + 1)
    if (count > 0) id = `${id}-${count}`
    return { text, id }
  })

  // Add id + scroll-mt-20 to each h2, matching by full match
  const idMap = new Map()
  const idCounters = new Map()
  headings.forEach(({ text }) => {
    let id = slugify(text)
    const count = idCounters.get(id) ?? 0
    idCounters.set(id, count + 1)
    if (count > 0) id = `${id}-${count}`
    idMap.set(text, id)
  })

  // Replace h2 elements: add id and scroll-mt-20
  // We need to match each occurrence in order
  let updatedContent = content
  const processedIds = new Map()

  updatedContent = updatedContent.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g, (full, attrs, rawText) => {
    if (rawText.includes('{') && rawText.includes('}')) return full
    const text = rawText.replace(/<[^>]+>/g, '').trim()
    if (!text || text.length < 3) return full

    let baseId = slugify(text)
    const count = processedIds.get(baseId) ?? 0
    processedIds.set(baseId, count + 1)
    const id = count > 0 ? `${baseId}-${count}` : baseId

    // Don't add id if already has one
    if (attrs.includes('id=')) return full

    // Add scroll-mt-20 to className if present
    let newAttrs = attrs
    if (/className="([^"]*)"/.test(newAttrs)) {
      newAttrs = newAttrs.replace(/className="([^"]*)"/, (m, cls) => {
        if (cls.includes('scroll-mt-20')) return m
        return `className="${cls} scroll-mt-20"`
      })
    }

    return `<h2 id="${id}"${newAttrs}>${rawText}</h2>`
  })

  // Build TOC block
  const tocLines = tocItems.map(({ text, id }) =>
    `            <li><a href="#${id}" className="text-primary hover:underline">${text}</a></li>`
  ).join('\n')

  const tocBlock = `          <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
${tocLines}
            </ol>
          </nav>\n\n`

  // Insert TOC before the first h2
  const firstH2Index = updatedContent.search(/<h2\b/)
  if (firstH2Index === -1) {
    console.log(`  SKIP (no h2 found after replacement): ${slug}`)
    return false
  }

  updatedContent = updatedContent.slice(0, firstH2Index) + tocBlock + updatedContent.slice(firstH2Index)

  writeFileSync(filePath, updatedContent, 'utf8')
  console.log(`  OK (${tocItems.length} sections): ${slug}`)
  return true
}

const dirs = readdirSync(BLOG_DIR).filter(name => {
  if (name === 'layout.tsx' || name === 'page.tsx') return false
  const full = join(BLOG_DIR, name)
  return statSync(full).isDirectory()
})

let updated = 0
let skipped = 0

for (const dir of dirs.sort()) {
  if (SKIP.has(dir)) {
    console.log(`  SKIP (has TOC): ${dir}`)
    skipped++
    continue
  }
  const filePath = join(BLOG_DIR, dir, 'page.tsx')
  try {
    const result = processFile(filePath, dir)
    if (result) updated++
    else skipped++
  } catch (err) {
    console.error(`  ERROR: ${dir} — ${err.message}`)
    skipped++
  }
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`)
