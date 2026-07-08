'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

const faqs = [
  {
    q: 'faq.umkm.question',
    a: 'faq.umkm.answer',
  },
  {
    q: 'faq.available.question',
    a: 'faq.available.answer',
  },
  {
    q: 'faq.qris.question',
    a: 'faq.qris.answer',
  },
  {
    q: 'faq.multiBranch.question',
    a: 'faq.multiBranch.answer',
  },
  {
    q: 'faq.mobile.question',
    a: 'faq.mobile.answer',
  },
  {
    q: 'faq.earlyAccess.question',
    a: 'faq.earlyAccess.answer',
  },
]

export function Faq() {
  const { t } = useLanguage()
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('faq.title')}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="mt-10 w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="glass mb-3 rounded-xl border px-5"
              >
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {t(f.q)}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {t(f.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
