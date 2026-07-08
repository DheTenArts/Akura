'use client'

import { Star } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    name: 'Rani Putri',
    role: 'Pemilik Café',
    initials: 'RP',
    review:
      'Akhirnya ada POS yang simpel tapi lengkap. Saya tidak sabar pakai AKURA untuk pantau penjualan café harian.',
  },
  {
    name: 'Budi Santoso',
    role: 'Owner Minimarket',
    initials: 'BS',
    review:
      'Manajemen stok real-time sangat saya butuhkan. Fitur multi-cabang AKURA cocok banget untuk toko saya.',
  },
  {
    name: 'Dewi Lestari',
    role: 'UMKM Fashion',
    initials: 'DL',
    review:
      'Tampilannya modern dan mudah dipahami. Sebagai pelaku UMKM, ini yang saya cari selama ini.',
  },
  {
    name: 'Andi Wijaya',
    role: 'Restaurant Manager',
    initials: 'AW',
    review:
      'Laporan otomatis dan QRIS jadi nilai plus. Operasional restoran pasti jauh lebih rapi dengan AKURA.',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Apa Kata Calon Pengguna?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.06}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:border-primary/30">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-chart-3 text-chart-3"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
