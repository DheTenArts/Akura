'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DashboardMockup } from './dashboard-mockup'
import { useLanguage } from '@/lib/language-context'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
        style={{ animation: 'akura-pulse-glow 6s ease-in-out infinite' }}
      />
      <div className="pointer-events-none absolute right-0 top-40 size-[26rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-foreground"
          >
            <Sparkles className="size-3.5 text-primary" />
            {t('hero.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t('hero.title')}{' '}
            <span className="text-gradient">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t('hero.description')}
            </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              render={<a href="#early-access" />}
              size="lg"
              className="bg-primary shadow-[0_0_32px_oklch(0.68_0.26_295/0.55)] hover:bg-primary/90"
              nativeButton={false}
            >
              {t('hero.cta')} <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href="#fitur" />}
              size="lg"
              variant="outline"
              className="border-border bg-secondary/40 hover:bg-secondary"
              nativeButton={false}
            >
              {t('hero.features')}
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">357+</span>
            {t('hero.stats')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ animation: 'akura-float 7s ease-in-out infinite' }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}
