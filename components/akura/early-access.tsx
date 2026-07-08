'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Reveal } from './reveal'
import { useLanguage } from '@/lib/language-context'

const businessTypes = [
  'Retail Store',
  'Restaurant',
  'Café',
  'Minimarket',
  'UMKM',
  'Other',
]

const schema = z.object({
  fullName: z.string().min(1, 'Nama lengkap wajib diisi'),
  businessName: z.string().min(1, 'Nama bisnis wajib diisi'),
  businessType: z.string().min(1, 'Jenis bisnis wajib dipilih'),
  location: z.string().min(1, 'Lokasi bisnis wajib diisi'),
  email: z.string().min(1, 'Email wajib diisi').email('Format email tidak valid'),
  phone: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const trust = [
  { icon: Sparkles, label: 'Gratis' },
  { icon: ShieldCheck, label: 'Tanpa Kartu Kredit' },
  { icon: Zap, label: 'Prioritas Akses Saat Launch' },
]

export function EarlyAccess() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [deviceId, setDeviceId] = useState('')
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      businessName: '',
      businessType: '',
      location: '',
      email: '',
      phone: '',
    },
  })

  // Generate device ID on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('akura_device_id')
      if (!id) {
        id = `device_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`
        localStorage.setItem('akura_device_id', id)
      }
      setDeviceId(id)
    }
  }, [])

  const businessType = watch('businessType')
  
  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          deviceId,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.error || 'Gagal mengirim data')
        return
      }

      toast.success('Terima kasih! Anda telah masuk ke daftar tunggu AKURA.')
      setSubmitted(true)
      reset()
    } catch (error) {
      toast.error('Gagal mengirim data. Silakan coba lagi.')
      console.error('Submit error:', error)
    }
  }

  return (
    <section id="early-access" className="relative scroll-mt-24 py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t('early.subtitle')}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t('early.description')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mt-10 rounded-3xl p-6 shadow-[0_30px_90px_-30px_oklch(0.55_0.24_290/0.6)] sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="size-7" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  {t('early.successTitle')}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('early.successDesc')}
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-border bg-secondary/40 hover:bg-secondary"
                  onClick={() => {
                    setSubmitted(false)
                    window.location.href = '#top'
                  }}
                >
                  {t('early.backHome')}
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Nama lengkap Anda"
                      className="bg-secondary/40"
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-destructive">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      placeholder="Nama bisnis Anda"
                      className="bg-secondary/40"
                      {...register('businessName')}
                    />
                    {errors.businessName && (
                      <p className="text-xs text-destructive">
                        {errors.businessName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select
                      value={businessType}
                      onValueChange={(v) =>
                        setValue('businessType', v ?? '', { shouldValidate: true })
                      }
                    >
                      <SelectTrigger id="businessType" className="bg-secondary/40">
                        <SelectValue placeholder="Pilih jenis bisnis" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.businessType && (
                      <p className="text-xs text-destructive">
                        {errors.businessType.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Business Location</Label>
                    <Input
                      id="location"
                      placeholder="Kota/Kabupaten"
                      className="bg-secondary/40"
                      {...register('location')}
                    />
                    {errors.location && (
                      <p className="text-xs text-destructive">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </div>


                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@bisnis.com"
                      className="bg-secondary/40"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">
                      Phone Number{' '}
                      <span className="text-muted-foreground">(WhatsApp)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="number"
                      placeholder="08xxxxxxxxxx"
                      className="bg-secondary/40"
                      {...register('phone')}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-primary shadow-[0_0_32px_oklch(0.55_0.24_290/0.55)] hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> {t('early.submitting')}
                    </>
                  ) : (
                    t('early.submit')
                  )}
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1">
                  {trust.map((t) => (
                    <span
                      key={t.label}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <t.icon className="size-3.5 text-primary" />
                      {t.label}
                    </span>
                  ))}
                </div>
              </form>
            )}
          </div>
        </Reveal>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">357+</span> bisnis telah
          bergabung dalam daftar tunggu
        </p>
      </div>
    </section>
  )
}
