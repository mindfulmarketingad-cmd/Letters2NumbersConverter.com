'use client'

import { useState, useRef, useEffect } from 'react'
import { Share2, X, Mail, Instagram, Facebook } from 'lucide-react'

interface ShareMenuProps {
  title?: string
  url?: string
}

export function ShareMenu({ title = 'Check this out!', url = typeof window !== 'undefined' ? window.location.href : '' }: ShareMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: () => {
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        window.open(fbUrl, '_blank', 'width=600,height=400')
        setIsOpen(false)
      },
      color: 'hover:text-blue-600'
    },
    {
      name: 'X (Twitter)',
      icon: X,
      onClick: () => {
        const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
        window.open(xUrl, '_blank', 'width=600,height=400')
        setIsOpen(false)
      },
      color: 'hover:text-black'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      onClick: () => {
        // Instagram sharing requires app, so we'll copy the link to clipboard
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard! You can share it on Instagram.')
        setIsOpen(false)
      },
      color: 'hover:text-pink-600'
    },
    {
      name: 'Email',
      icon: Mail,
      onClick: () => {
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
        window.location.href = mailtoUrl
        setIsOpen(false)
      },
      color: 'hover:text-gray-600'
    }
  ]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-background rounded-lg transition-colors"
        title="Share"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-2 z-50 min-w-48">
          <p className="text-xs font-semibold text-muted-foreground px-2 py-1 mb-1">Share to</p>
          <div className="space-y-1">
            {shareOptions.map((option) => {
              const Icon = option.icon
              return (
                <button
                  key={option.name}
                  onClick={option.onClick}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary transition-colors ${option.color}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{option.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
