'use client'

import { useState, useEffect } from 'react'
import { Navigation } from './navigation'
import { Footer } from './footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [language, setLanguage] = useState<'ne' | 'en'>('ne')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedLanguage = localStorage.getItem('language') as 'ne' | 'en' || 'ne'
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    
    setLanguage(savedLanguage)
    setTheme(savedTheme)
    
    // Apply theme to document
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleLanguageChange = (lang: 'ne' | 'en') => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const handleThemeChange = (theme: 'light' | 'dark') => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        language={language}
        onLanguageChange={handleLanguageChange}
        theme={theme}
        onThemeChange={handleThemeChange}
      />
      
      <main className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      
      <Footer language={language} />
    </div>
  )
}
