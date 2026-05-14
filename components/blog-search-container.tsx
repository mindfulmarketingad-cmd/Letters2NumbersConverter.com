'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, X, Search } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
}

interface BlogSearchContainerProps {
  posts: BlogPost[]
}

const CATEGORY_COLORS: Record<string, string> = {
  'Ciphers & Codes': 'text-purple-600 dark:text-purple-400 bg-purple-500/10',
  'Decoding Guides': 'text-blue-600 dark:text-blue-400 bg-blue-500/10',
  'Puzzles & Games': 'text-green-600 dark:text-green-400 bg-green-500/10',
  'Cryptography': 'text-red-600 dark:text-red-400 bg-red-500/10',
  'Education': 'text-yellow-600 dark:text-yellow-400 bg-yellow-500/10',
  'Tools & Reviews': 'text-orange-600 dark:text-orange-400 bg-orange-500/10',
  'Image & Media': 'text-pink-600 dark:text-pink-400 bg-pink-500/10',
  'Comparisons': 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10',
}

export function BlogSearchContainer({ posts }: BlogSearchContainerProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map(p => p.category))).sort()
    return ['All', ...cats]
  }, [posts])

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    let result = posts
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }
    return result
  }, [posts, searchQuery, activeCategory])

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search articles by title, topic, or category..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Counter */}
      <div className="text-sm text-muted-foreground">
        {(searchQuery || activeCategory !== 'All') && (
          <p>
            Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> of{' '}
            <span className="font-semibold text-foreground">{posts.length}</span> articles
          </p>
        )}
      </div>

      {/* Posts List */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-3">
          {filteredPosts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-card/80 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mb-2 ${CATEGORY_COLORS[post.category] ?? 'text-primary bg-primary/10'}`}>
                    {post.category}
                  </div>
                  <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-2">No articles found</p>
          <p className="text-sm text-muted-foreground">Try a different search term or category</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('All') }}
            className="mt-4 text-sm text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
