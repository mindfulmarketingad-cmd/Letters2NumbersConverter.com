"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/lib/auth-context"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { HeaderUsageIndicator } from "@/components/header-usage-indicator"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/logo.png" 
              alt="Letters to Numbers Logo" 
              width={40} 
              height={40}
              className="w-10 h-10 rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
              priority
            />
            <span className="font-semibold text-foreground hidden sm:inline text-lg">
              Letters to Numbers
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
            Tools
          </Link>
          <Link href="/hackathon" className="text-muted-foreground hover:text-foreground transition-colors">
            Hackathon
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <HeaderUsageIndicator />
          <div className="w-px h-6 bg-border" />
          {user ? (
            <ProfileDropdown />
          ) : (
            <>
              <Link href="/sign-in" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Sign In
              </Link>
              <Link href="/sign-in?mode=signup" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="/pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/tools" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>
            <Link 
              href="/hackathon" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Hackathon
            </Link>
            
            {/* Mobile Auth Buttons */}
            <div className="border-t border-border pt-4 mt-2 flex flex-col gap-3">
              <HeaderUsageIndicator />
              {user ? (
                <ProfileDropdown />
              ) : (
                <>
                  <Link 
                    href="/sign-in" 
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/sign-in?mode=signup" 
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
