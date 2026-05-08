'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export function PricingPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  const plans = [
    {
      name: 'Free',
      description: 'Get started with our tools',
      price: 'Free',
      period: 'forever',
      uses: '10 uses total',
      features: [
        'Access to all conversion tools',
        '10 tool uses',
        'No account required',
        'Download results',
      ],
      cta: 'Get Started',
      ctaVariant: 'secondary',
      highlight: false,
      planType: null,
    },
    {
      name: 'Free Account',
      description: 'Create an account for more uses',
      price: 'Free',
      period: 'forever',
      uses: '25 uses total',
      features: [
        'All Free features',
        '25 tool uses',
        'Account creation required',
        'Usage tracking',
        'Email support',
      ],
      cta: 'Create Account',
      ctaVariant: 'secondary',
      highlight: false,
      planType: null,
    },
    {
      name: 'Pro',
      description: 'Unlimited access to all tools',
      price: '$4.99',
      period: '/month',
      uses: 'Unlimited uses',
      features: [
        'Unlimited tool uses',
        'Priority support',
        'Ad-free experience',
        'Usage analytics',
        'Cancel anytime',
      ],
      cta: 'Start Free Trial',
      ctaVariant: 'primary',
      highlight: true,
      planType: 'pro_monthly',
      savings: 'Most Popular',
    },
    {
      name: 'Pro Annual',
      description: 'Best value for yearly commitment',
      price: '$39',
      period: '/year',
      uses: 'Unlimited uses',
      monthlyEquivalent: '(~$3.25/month)',
      features: [
        'Unlimited tool uses',
        'Priority support',
        'Ad-free experience',
        'Usage analytics',
        'Save $20/year',
      ],
      cta: 'Subscribe Now',
      ctaVariant: 'primary',
      highlight: false,
      planType: 'pro_yearly',
    },
  ]

  const handleSubscribe = async (planType: string | null) => {
    if (!planType) {
      router.push(user ? '/dashboard' : '/auth/signup')
      return
    }

    if (!user) {
      router.push('/auth/signup')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planType,
          userId: user.id,
          email: user.email,
        }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe checkout
      const stripe = await (window as any).Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Subscription error:', error)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade when you need unlimited access to all our conversion tools.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-lg border transition-all ${
                  plan.highlight
                    ? 'border-primary bg-primary/5 shadow-lg scale-105'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                {plan.savings && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {plan.savings}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {plan.period}
                      </span>
                    </div>
                    {plan.monthlyEquivalent && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {plan.monthlyEquivalent}
                      </p>
                    )}
                    <p className="text-primary font-semibold text-sm mt-2">
                      {plan.uses}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.planType)}
                    disabled={isLoading}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      plan.ctaVariant === 'primary'
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-border text-foreground hover:bg-secondary'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isLoading ? 'Loading...' : plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  How many free uses do I get?
                </h3>
                <p className="text-muted-foreground">
                  You get 10 free uses without creating an account. Create a free account to get 25 uses, then subscribe for unlimited.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll have access until the end of your current billing period.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  What happens if I run out of free uses?
                </h3>
                <p className="text-muted-foreground">
                  You'll be prompted to create an account for more uses, or upgrade to a paid subscription for unlimited access.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Is there a refund policy?
                </h3>
                <p className="text-muted-foreground">
                  We offer a 7-day money-back guarantee on all subscriptions. Contact our support team for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
