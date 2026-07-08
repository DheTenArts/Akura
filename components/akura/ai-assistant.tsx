'use client'

import { motion } from 'framer-motion'
import { Bot, FileText, PackageMinus, Sparkles, TrendingUp } from 'lucide-react'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

const points = [
  { icon: PackageMinus, label: 'ai.prediction' },
  { icon: TrendingUp, label: 'ai.recommendation' },
  { icon: Sparkles, label: 'ai.insight' },
  { icon: FileText, label: 'ai.summary' },
]

export function AiAssistant() {
  const { t } = useLanguage()
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/40 p-8 sm:p-12">
            {/* animated particles / glows */}
            <div className="pointer-events-none absolute inset-0">
              {[
                'left-[10%] top-[20%]',
                'left-[80%] top-[30%]',
                'left-[60%] top-[70%]',
                'left-[25%] top-[75%]',
                'left-[90%] top-[60%]',
              ].map((pos, i) => (
                <motion.span
                  key={i}
                  className={`absolute ${pos} size-1.5 rounded-full bg-accent`}
                  animate={{ opacity: [0.2, 1, 0.2], y: [0, -12, 0] }}
                  transition={{
                    duration: 3 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />
              ))}
              <div className="absolute -right-20 top-0 size-72 rounded-full bg-primary/25 blur-[100px]" />
              <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-accent/20 blur-[100px]" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium">
                  <Bot className="size-3.5 text-primary" /> {t('ai.badge')}
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t('ai.title')}{' '}
                  <span className="text-gradient">{t('ai.titleHighlight')}</span>
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {t('ai.description')}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {points.map((p, i) => (
                  <Reveal key={p.label} delay={i * 0.07}>
                    <div className="glass flex items-center gap-3 rounded-xl p-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <p.icon className="size-4.5" />
                      </span>
                      <span className="text-sm font-medium">{t(p.label)}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
