import Link from 'next/link'
import { UtensilsCrossed } from 'lucide-react'

const footerLinks = {
  Browse: [
    { label: 'Cities', href: '#cities' },
    { label: 'Broth Types', href: '#broth' },
    { label: 'New Listings', href: '#new' },
    { label: 'Top Rated', href: '#top' },
  ],
  Catering: [
    { label: 'Event Catering', href: '#catering' },
    { label: 'Get Quotes', href: '#quotes' },
    { label: 'Corporate Events', href: '#corporate' },
    { label: 'Weddings', href: '#weddings' },
  ],
  Cities: [
    { label: 'Atlanta, GA', href: '#' },
    { label: 'Nashville, TN', href: '#' },
    { label: 'Austin, TX', href: '#' },
    { label: 'Chicago, IL', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Submit a Restaurant', href: '#submit' },
    { label: 'Advertise', href: '#advertise' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1E2026] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-full bg-[#77567A] flex items-center justify-center flex-shrink-0">
                <UtensilsCrossed className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-base font-bold text-white">RamenNearYou</span>
            </Link>
            <p className="text-[#B0B3BB] text-sm leading-relaxed">
              The #1 ramen directory, one city at a time.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#B0B3BB] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Get new ramen spots in your inbox</h4>
              <p className="text-[#B0B3BB] text-sm">We&apos;ll notify you when new restaurants are added near you.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-0 rounded-lg overflow-hidden border border-white/10 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-[#2F323A] text-white placeholder-[#B0B3BB]/50 text-sm outline-none min-w-0 sm:min-w-[220px]"
              />
              <button className="px-5 py-3 bg-[#77567A] hover:bg-[#8a6a8d] text-white text-sm font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#B0B3BB] text-xs">
          <p>&copy; {new Date().getFullYear()} RamenNearYou. All rights reserved.</p>
          <p>Currently serving Atlanta, GA &mdash; expanding soon</p>
        </div>
      </div>
    </footer>
  )
}
