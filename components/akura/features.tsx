'use client'

import {
  AlertCircle,
  BarChart3,
  Boxes,
  GitBranch,
  History,
  LineChart,
  Package,
  QrCode,
  UserCog,
  Users,
  Zap,
} from 'lucide-react'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

const features = [
  { icon: Zap, title: 'features.fast', desc: 'features.fastDesc' },
  { icon: Package, title: 'features.product', desc: 'features.productDesc' },
  { icon: Boxes, title: 'features.stock', desc: 'features.stockDesc' },
  { icon: BarChart3, title: 'features.report', desc: 'features.repostDesc' },
  { icon: GitBranch, title: 'features.branch', desc: 'features.branchDesc' },
  { icon: QrCode, title: 'features.qris', desc: 'features.qrisDesc' },
  { icon: Users, title: 'features.customer', desc: 'features.customerDesc' },
  { icon: UserCog, title: 'features.staff', desc: 'features.staffDesc' },
  { icon: LineChart, title: 'features.operational', desc: 'features.oparationalDesc' },
  { icon: History, title: 'features.closedBill', desc: 'features.closedBillDesc' },
  { icon: AlertCircle, title: 'features.stockAlert', desc: 'features.stockAlertDesc' },
]

export function Features() {
  const { t } = useLanguage()
  return (
    <section id="fitur" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('features.title')}
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              {t('features.description')}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-10">
          {features.map((f, i) => (
            <Reveal key={t(f.title)} delay={(i % 5) * 0.05} className="w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[255px]">
              <div className="group glass h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_-20px_oklch(0.55_0.24_290/0.6)]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{t(f.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t(f.desc)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
