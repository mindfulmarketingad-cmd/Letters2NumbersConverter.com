'use client'

import { useState, useMemo } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getToolRegistry } from '@/lib/tool-registry'

export function HomepageSearch() {
  const [query, setQuery] = useState('')
  const toolRegistry = getToolRegistry()
  const tools = Object.entries(toolRegistry).map(([id, data]) => ({
    id,
    ...data,
  }))

  const filteredTools = useMemo(() => {
    if (!query.trim()) return []
    
    const searchTerm = query.toLowerCase()
    return tools
      .filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm)
      )
      .slice(0, 8) // Show top 8 results
  }, [query, tools])

  const handleToolClick = () => {
    setQuery('')
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-20">
      {/* Logo/Branding */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Letters2NumbersConverter.com
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our Free Online Tools Get Things Done Fast! Edit images, text, lists, and data — all in your browser. Thousands of free tools, ready in seconds.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-12">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search for a tool..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 md:py-5 rounded-full border border-border bg-secondary/50 hover:bg-secondary/70 focus:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder-muted-foreground text-foreground text-base md:text-lg shadow-sm hover:shadow-md"
          />
        </div>

        {/* Search Results Dropdown */}
        {query && filteredTools.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50">
            <div className="max-h-96 overflow-y-auto">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  onClick={handleToolClick}
                  className="flex items-center justify-between p-4 hover:bg-secondary/50 border-b border-border/50 last:border-b-0 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {tool.description}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results Message */}
        {query && filteredTools.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-4 text-center z-50">
            <p className="text-muted-foreground">
              No tools found for &quot;{query}&quot;. Try a different search term.
            </p>
          </div>
        )}
      </div>

      {/* Quick Links / Featured Tools */}
      {!query && (
        <div className="space-y-16">
          <div>
            <p className="text-center text-sm text-muted-foreground mb-6">
              Popular tools
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {tools.slice(0, 12).map((tool, index) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="relative p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group text-left"
                >
                  {index === 1 && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  {index === 4 && (
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Trending
                    </div>
                  )}
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm mb-1">
                    {tool.name}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2">
                    {tool.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Logos Section */}
          <div className="border-t border-border/50 pt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
              Our Tools Are Trusted By:
            </h2>
            <div className="flex justify-center">
              <Image
                src="/images/trust-logos.png"
                alt="Companies that trust our tools: L'Oreal, Dolby, Payoneer, Library of Congress, Hasbro, Fujitsu, Home Office, Fiverr, Ironman, Wegmans, T-Mobile, ICE, Der Spiegel, Nestle, Accenture, Australian Government, Orange, Universität Basel, Motorola, US House, The New York Times, and NYC"
                width={1200}
                height={400}
                className="w-full max-w-5xl h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
