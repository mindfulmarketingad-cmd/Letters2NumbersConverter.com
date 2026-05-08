import { Metadata } from "next"
import { PricingPage } from "@/components/pricing-page"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Pricing | Letters2NumbersConverter.com",
  description: "Simple, transparent pricing for unlimited access to all our conversion tools. Start free with 10 uses, upgrade to 25 uses, or subscribe for unlimited.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PricingPage />
      </main>
      <SiteFooter />
    </div>
  )
}
