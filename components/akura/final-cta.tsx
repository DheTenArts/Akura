'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

export function FinalCta() {
  const { t } = useLanguage()
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-accent/30" />
            <div className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-primary/40 blur-[110px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-accent/40 blur-[110px]" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t('cta.title')}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {t('cta.description')}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  render={<a href="#early-access" />}
                  size="lg"
                  className="bg-primary shadow-[0_0_32px_oklch(0.68_0.26_295/0.6)] hover:bg-primary/90"
                  nativeButton={false}
                >
                  {t('cta.primary')} <ArrowRight className="size-4" />
                </Button>
                <Button
                  render={<a href="#preview" />}
                  size="lg"
                  variant="outline"
                  className="border-border bg-background/40 hover:bg-secondary"
                  nativeButton={false}
                >
                  {t('cta.secondary')}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
