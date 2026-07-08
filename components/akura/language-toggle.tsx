'use client'

import { useLanguage } from '@/lib/language-context'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
      className="relative inline-flex h-9 w-[72px] items-center rounded-full bg-secondary/60 border border-border/80 transition-all hover:bg-secondary/80"
      aria-label="Toggle language"
    >
      {/* Sliding background */}
      <span
        className={`absolute inset-y-1 w-[32px] rounded-full bg-primary shadow-md transition-all duration-300 ease-in-out ${
          language === 'id' ? 'left-1' : 'left-[37px]'
        }`}
      />
      
      {/* ID text */}
      <span
        className={`relative z-10 w-9 text-center text-xs font-semibold transition-all duration-300 ${
          language === 'id' ? 'text-primary-foreground scale-105' : 'text-muted-foreground/70'
        }`}
      >
        ID
      </span>
      
      {/* EN text */}
      <span
        className={`relative z-10 w-9 text-center text-xs font-semibold transition-all duration-300 ${
          language === 'en' ? 'text-primary-foreground scale-105' : 'text-muted-foreground/70'
        }`}
      >
        EN
      </span>
    </button>
  )
}
