import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import BrowseCities from '@/components/browse-cities'
import BrowseBroth from '@/components/browse-broth'
import LeadGenBanner from '@/components/lead-gen-banner'
import RecentlyAdded from '@/components/recently-added'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#2F323A]">
      <Navbar />
      <Hero />
      <BrowseCities />
      <BrowseBroth />
      <LeadGenBanner />
      <RecentlyAdded />
      <Footer />
    </main>
  )
}
