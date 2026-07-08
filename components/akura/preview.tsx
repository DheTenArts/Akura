'use client'

import { Award, Boxes, LineChart, TrendingUp } from 'lucide-react'
import { DashboardMockup } from './dashboard-mockup'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

const points = [
  { icon: LineChart, label: 'preview.revenue' },
  { icon: Boxes, label: 'preview.inventory' },
  { icon: Award, label: 'preview.product' },
  { icon: TrendingUp, label: 'preview.growth' },
]

export function Preview() {
  const { t } = useLanguage()
  return (
    <section id="preview" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {t('preview.title')}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t('preview.description')}
              </p>
              <ul className="mt-8 space-y-4">
                {points.map((p) => (
                  <li key={p.label} className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <p.icon className="size-4.5" />
                    </span>
                    <span className="text-sm text-foreground">{t(p.label)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative">
                <DashboardMockup />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
