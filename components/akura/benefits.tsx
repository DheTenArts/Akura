'use client'

import { Clock, Lock, ClockArrowUp, Cloud, MapPin, TrendingUp } from 'lucide-react'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'
import { Updock } from 'next/font/google'

const benefits = [
  {
    icon: Clock,
    title: 'benefits.easy',
    desc: 'benefits.easyDesc',
  },
  {
    icon: TrendingUp,
    title: 'benefits.affordable',
    desc: 'benefits.affordableDesc',
  },
  {
    icon: MapPin,
    title: 'benefits.support',
    desc: 'benefits.supportDesc',
  },
  {
    icon: Cloud,
    title: 'benefits.cloud',
    desc: 'benefits.cloudDesc',
  },
  {
    icon: ClockArrowUp,
    title: 'benefits.update',
    desc: 'benefits.updateDesc',
  },
  {
    icon: Lock,
    title: 'benefits.secure',
    desc: 'benefits.secureDesc',
  },
]

const stats = [
  { value: '2x', label: 'lebih cepat transaksi' },
  { value: '24/7', label: 'akses data bisnis' },
  { value: '100%', label: 'lebih rapi pencatatan' },
]

export function Benefits() {
  const { t } = useLanguage()
  return (
    <section id="benefit" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('benefits.title')}
          </h2>
          <p className="mt-4 text-pretty text-center text-muted-foreground">
            {t('benefits.subtitle')}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-7 transition-all duration-300 hover:border-primary/40">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_28px_oklch(0.55_0.24_290/0.5)]">
                  <b.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{t(b.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(b.desc)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 grid gap-5 rounded-2xl border border-border bg-card/50 p-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-gradient text-4xl font-semibold">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
