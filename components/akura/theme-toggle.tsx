'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initialTheme = savedTheme || 'dark'
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-[72px] items-center rounded-full bg-secondary/60 border border-border/80 transition-all hover:bg-secondary/80"
      aria-label="Toggle theme"
    >
      {/* Sliding background */}
      <span
        className={`absolute inset-y-1 w-[32px] rounded-full bg-primary shadow-md transition-all duration-300 ease-in-out ${
          theme === 'light' ? 'left-1' : 'left-[37px]'
        }`}
      />
      
      {/* Sun icon (Light) */}
      <span
        className={`relative z-10 flex w-9 items-center justify-center transition-all duration-300 ${
          theme === 'light' ? 'text-primary-foreground scale-110' : 'text-muted-foreground/70 scale-90'
        }`}
      >
        <Sun className="size-[18px]" />
      </span>
      
      {/* Moon icon (Dark) */}
      <span
        className={`relative z-10 flex w-9 items-center justify-center transition-all duration-300 ${
          theme === 'dark' ? 'text-primary-foreground scale-110' : 'text-muted-foreground/70 scale-90'
        }`}
      >
        <Moon className="size-[18px]" />
      </span>
    </button>
  )
}
