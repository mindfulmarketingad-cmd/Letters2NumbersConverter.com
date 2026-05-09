'use client'

import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
}

export function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-opacity"
      style={{ backgroundColor: '#11a099' }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {children}
    </Link>
  )
}
