'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'

const links = [
  { label: 'nav.features', href: '#fitur' },
  { label: 'nav.preview', href: '#preview' },
  { label: 'nav.benefit', href: '#benefit' },
  { label: 'nav.pricing', href: '#harga' },
  { label: 'nav.faq', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((link) => ({
      id: link.href.substring(1),
      element: document.getElementById(link.href.substring(1)),
    }))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0.1,
      }
    )

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element)
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section.element) {
          observer.unobserve(section.element)
        }
      })
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-5 lg:px-8">
        {/* Logo - Left */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image 
            src="/akura-light.png" 
            alt="AKURA Logo" 
            width={32} 
            height={32}
            className="size-8 object-contain dark:hidden"
          />
          <Image 
            src="/akura-dark.png" 
            alt="AKURA Logo" 
            width={32} 
            height={32}
            className="hidden size-8 object-contain dark:block"
          />
          <span className="text-lg font-semibold tracking-tight">AKURA</span>
        </a>

        {/* Navigation Links - Center */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm transition-colors relative',
                activeSection === l.href
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {t(l.label)}
              {activeSection === l.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_oklch(0.68_0.26_295/0.8)]" />
              )}
            </a>
          ))}
        </div>

        {/* Actions - Right */}
        <div className="hidden items-center gap-3 md:flex shrink-0">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2.5 text-sm transition-colors',
                  activeSection === l.href
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
              >
                {t(l.label)}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              {/* Combined Toggles */}
              <div className="flex items-center gap-2 rounded-full border border-border/80 bg-secondary/40 px-2 py-1.5">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
