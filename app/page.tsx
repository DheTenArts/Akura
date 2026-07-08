import { AiAssistant } from '@/components/akura/ai-assistant'
import { Benefits } from '@/components/akura/benefits'
import { EarlyAccess } from '@/components/akura/early-access'
import { Faq } from '@/components/akura/faq'
import { Features } from '@/components/akura/features'
import { FinalCta } from '@/components/akura/final-cta'
import { Footer } from '@/components/akura/footer'
import { Hero } from '@/components/akura/hero'
import { Navbar } from '@/components/akura/navbar'
import { Preview } from '@/components/akura/preview'
import { Pricing } from '@/components/akura/pricing'
import { Testimonials } from '@/components/akura/testimonials'
import { TrustedBy } from '@/components/akura/trusted-by'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Preview />
      <Benefits />
      <AiAssistant />
      <Pricing />
      <EarlyAccess />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
