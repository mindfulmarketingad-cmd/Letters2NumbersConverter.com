"use client"

import { useEffect, useState, useCallback } from "react"
import { List, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

export function FloatingToc() {
  const [isOpen, setIsOpen] = useState(false)
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  // Extract headings from the page
  useEffect(() => {
    const headings = document.querySelectorAll("h1[id], h2[id], h3[id]")
    const items: TocItem[] = []
    
    headings.forEach((heading) => {
      const id = heading.getAttribute("id")
      if (id) {
        items.push({
          id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        })
      }
    })
    
    setTocItems(items)
  }, [])

  // Track active section
  useEffect(() => {
    if (tocItems.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    )

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [tocItems])

  // Smooth scroll to section
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveId(id)
      setIsOpen(false)
    }
  }, [])

  // Don't render if no headings with IDs
  if (tocItems.length === 0) {
    return null
  }

  return (
    <>
      {/* Floating button - visible on all screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
        )}
        aria-label="Toggle table of contents"
      >
        {isOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
      </button>

      {/* TOC Panel */}
      <div
        className={cn(
          "fixed bottom-20 right-6 z-40 w-72 max-h-[60vh] overflow-hidden rounded-xl shadow-xl border border-border bg-card transition-all duration-200 transform origin-bottom-right",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="p-4 border-b border-border bg-muted/30">
          <h3 className="font-semibold text-foreground">On This Page</h3>
        </div>
        <nav className="p-3 overflow-y-auto max-h-[calc(60vh-60px)]">
          <ul className="space-y-1">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                    "hover:bg-muted hover:text-foreground",
                    item.level === 1 && "font-semibold",
                    item.level === 2 && "pl-4",
                    item.level === 3 && "pl-6 text-xs",
                    activeId === item.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  <span className="line-clamp-2">{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
