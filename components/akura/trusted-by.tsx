'use client'

import { Building2, Coffee, ShoppingBag, Store, Utensils } from 'lucide-react'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

const segments = [
  { label: 'Retail', icon: ShoppingBag },
  { label: 'Café', icon: Coffee },
  { label: 'Restaurant', icon: Utensils },
  { label: 'Minimarket', icon: Store },
  { label: 'UMKM', icon: Building2 },
]

export function TrustedBy() {
  const { t } = useLanguage()
  return (
    <section className="border-y border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground">
            {t('trusted.title')}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
            {segments.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <s.icon className="size-5" />
                <span className="text-base font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
