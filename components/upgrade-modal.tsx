'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

interface UpgradeModalProps {
  isOpen: boolean
  onClose: () => void
  remaining: number
}

export function UpgradeModal({ isOpen, onClose, remaining }: UpgradeModalProps) {
  const { user } = useAuth()
  const router = useRouter()

  if (!isOpen) return null

  const handleUpgrade = () => {
    router.push('/pricing')
    onClose()
  }

  const handleCreateAccount = () => {
    router.push('/sign-in?mode=signup')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg shadow-lg max-w-md w-full p-6 animate-in fade-in zoom-in-95">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">
            {remaining === 0 ? 'No Uses Left' : 'Running Low on Uses'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-muted-foreground mb-6">
          {remaining === 0
            ? 'You\'ve used all your free uses. Create an account for 25 more uses, or upgrade to unlimited access.'
            : `You have ${remaining} uses left. Create an account or upgrade to keep using our tools.`}
        </p>

        <div className="space-y-3">
          {!user && (
            <button
              onClick={handleCreateAccount}
              className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Create Free Account
            </button>
          )}

          <button
            onClick={handleUpgrade}
            className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {user ? 'Upgrade to Pro' : 'See Pricing'}
          </button>

          <button
            onClick={onClose}
            className="w-full py-2 px-4 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
