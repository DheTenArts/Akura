'use client'

import {
  ArrowUpRight,
  CreditCard,
  Package,
  QrCode,
  TrendingUp,
  Users,
} from 'lucide-react'

const bars = [42, 58, 38, 70, 52, 84, 66, 92, 74]

export function DashboardMockup() {
  return (
    <div className="glass rounded-2xl p-4 shadow-[0_24px_80px_-20px_oklch(0.55_0.24_290/0.55)] sm:p-5">
      {/* top bar */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-chart-3/70" />
          <span className="size-2.5 rounded-full bg-accent/70" />
        </div>
        <span className="text-xs text-muted-foreground">akura.app/dashboard</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {/* Revenue */}
        <div className="col-span-2 rounded-xl border border-border bg-card/60 p-4 sm:col-span-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Total Revenue</span>
            <span className="flex items-center gap-1 text-xs font-medium text-primary">
              <ArrowUpRight className="size-3" /> 18.2%
            </span>
          </div>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            Rp 84.250.000
          </p>
          <div className="mt-4 flex h-20 items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-accent"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Stock */}
        <div className="rounded-xl border border-border bg-card/60 p-4">
          <Package className="size-4 text-primary" />
          <p className="mt-2 text-xs text-muted-foreground">Produk Stok</p>
          <p className="text-lg font-semibold">1.284</p>
          <p className="text-xs text-primary">+36 hari ini</p>
        </div>

        {/* QRIS */}
        <div className="rounded-xl border border-border bg-card/60 p-4">
          <div className="flex items-center justify-between">
            <QrCode className="size-4 text-primary" />
            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] text-primary">
              QRIS
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Digital Payment</p>
          <p className="text-lg font-semibold">62%</p>
        </div>

        {/* Customers */}
        <div className="rounded-xl border border-border bg-card/60 p-4">
          <Users className="size-4 text-chart-3" />
          <p className="mt-2 text-xs text-muted-foreground">Pelanggan</p>
          <p className="text-lg font-semibold">3.910</p>
          <p className="text-xs text-primary">+124 baru</p>
        </div>

        {/* Recent transactions */}
        <div className="col-span-2 rounded-xl border border-border bg-card/60 p-4 sm:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium">Transaksi Terbaru</span>
            <TrendingUp className="size-4 text-primary" />
          </div>
          <ul className="space-y-2.5">
            {[
              { id: 'TRX-1042', item: 'Kopi Susu Gula Aren', amount: 'Rp 28.000' },
              { id: 'TRX-1041', item: 'Paket Nasi Ayam', amount: 'Rp 45.000' },
              { id: 'TRX-1040', item: 'Snack & Minuman', amount: 'Rp 19.500' },
            ].map((t) => (
              <li key={t.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-secondary">
                    <CreditCard className="size-3.5 text-muted-foreground" />
                  </span>
                  <div>
                    <p className="text-xs font-medium leading-tight">{t.item}</p>
                    <p className="text-[10px] text-muted-foreground">{t.id}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold">{t.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
