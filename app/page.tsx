import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import BrowseCities from '@/components/browse-cities'
import BrowseBroth from '@/components/browse-broth'
import LeadGenBanner from '@/components/lead-gen-banner'
import RecentlyAdded from '@/components/recently-added'
import Footer from '@/components/footer'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RamenNearYou',
  url: 'https://www.ramennearyou.com',
  description: 'Find the best ramen restaurants near you. Browse by city, broth type, or restaurant name.',
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RamenNearYou',
  url: 'https://www.ramennearyou.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.ramennearyou.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <main className="min-h-screen bg-[#2F323A]">
        <Navbar />
        <Hero />
        <BrowseCities />
        <BrowseBroth />
        <LeadGenBanner />
        <RecentlyAdded />
        <Footer />
      </main>
    </>
  )
}
