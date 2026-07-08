'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

const plans = [
  {
    name: 'Basic',
    tagline: 'pricing.basicTag',
    features: [
      'pricing.feature.branch1',
      'pricing.feature.productMgmt',
      'pricing.feature.basicTrans',
      'pricing.feature.simpleReport',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    tagline: 'pricing.proTag',
    features: [
      'pricing.feature.multiStaff',
      'pricing.feature.realtimeReport',
      'pricing.feature.qrisPayment',
      'pricing.feature.salesAnalytics',
      'pricing.feature.customerMgmt',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'pricing.enterpriseTag',
    features: [
      'pricing.feature.multiBranch',
      'pricing.feature.customFeature',
      'pricing.feature.advancedAnalytics',
      'pricing.feature.prioritySupport',
      'pricing.feature.dedicatedOnboarding',
    ],
    popular: false,
  },
]

export function Pricing() {
  const { t } = useLanguage()
  return (
    <section id="harga" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-20 size-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('pricing.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t('pricing.subtitle')}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300',
                  plan.popular
                    ? 'border-primary/60 bg-card/70 shadow-[0_0_44px_-8px_oklch(0.68_0.26_295/0.7)]'
                    : 'glass hover:border-primary/30',
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-[0_0_20px_oklch(0.68_0.26_295/0.7)]">
                    {t('pricing.popular')}
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(plan.tagline)}
                </p>
                <div className="mt-5">
                  <span className="text-3xl font-semibold text-muted-foreground">
                    {t('pricing.comingSoon')}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="size-3" />
                      </span>
                      {t(f)}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<a href="#early-access" />}
                  className={cn(
                    'mt-7 w-full',
                    plan.popular
                      ? 'bg-primary shadow-[0_0_28px_oklch(0.68_0.26_295/0.5)] hover:bg-primary/90'
                      : 'bg-secondary text-foreground hover:bg-secondary/80',
                  )}
                  nativeButton={false}
                >
                  {t('pricing.cta')}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
