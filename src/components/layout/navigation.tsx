'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Home, 
  Sprout, 
  Camera, 
  Cloud, 
  TrendingUp, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Users, 
  Heart, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Globe,
  Bell
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const navigationItems = [
  { href: '/', label: 'होम', labelEn: 'Home', icon: Home },
  { href: '/crop-recommendation', label: 'बाली सुझाव', labelEn: 'Crop Guide', icon: Sprout },
  { href: '/disease-detection', label: 'रोग पहिचान', labelEn: 'Disease Detection', icon: Camera },
  { href: '/weather', label: 'मौसम', labelEn: 'Weather', icon: Cloud },
  { href: '/market-prices', label: 'बजार दर', labelEn: 'Market Prices', icon: TrendingUp },
  { href: '/ai-chat', label: 'कृषक AI', labelEn: 'Kishan AI', icon: MessageCircle },
  { href: '/calendar', label: 'कृषि क्यालेन्डर', labelEn: 'Farming Calendar', icon: Calendar },
  { href: '/learning', label: '�िक्षा', labelEn: 'Learning', icon: BookOpen },
  { href: '/community', label: 'समुदाय', labelEn: 'Community', icon: Users },
  { href: '/government', label: 'सरकारी सहयोग', labelEn: 'Government Support', icon: Heart },
]

interface NavigationProps {
  language: 'ne' | 'en'
  onLanguageChange: (lang: 'ne' | 'en') => void
  theme: 'light' | 'dark'
  onThemeChange: (theme: 'light' | 'dark') => void
}

export function Navigation({ 
  language, 
  onLanguageChange, 
  theme, 
  onThemeChange 
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-agri-green-500">
                <Sprout className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-agri-green-600">
                  {language === 'ne' ? 'नेपाली किसान' : 'Nepali Kishan'}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {language === 'ne' ? 'स्मार्ट कृषि प्लेटफर्म' : 'Smart Farming Platform'}
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.slice(0, 6).map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={isActive ? "agri" : "ghost"}
                      size="sm"
                      className={cn(
                        "flex items-center space-x-2",
                        isActive && "shadow-lg"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden lg:inline">
                        {language === 'ne' ? item.label : item.labelEn}
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                3
              </Badge>
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onLanguageChange(language === 'ne' ? 'en' : 'ne')}
              title={language === 'ne' ? 'Switch to English' : 'नेपालीमा जानुहोस्'}
            >
              <Globe className="h-4 w-4" />
              <span className="ml-1 text-xs font-bold">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t bg-background md:hidden"
          >
            <div className="container px-4 py-2">
              <nav className="grid grid-cols-2 gap-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link key={item.href} href={item.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Button
                          variant={isActive ? "agri" : "ghost"}
                          size="sm"
                          className={cn(
                            "w-full justify-start space-x-2",
                            isActive && "shadow-lg"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="truncate">
                            {language === 'ne' ? item.label : item.labelEn}
                          </span>
                        </Button>
                      </motion.div>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navigationItems.slice(0, 5).map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-1 p-2"
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      isActive ? "text-agri-green-600" : "text-muted-foreground"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs",
                      isActive ? "text-agri-green-600 font-medium" : "text-muted-foreground"
                    )}
                  >
                    {language === 'ne' ? item.label.split(' ')[0] : item.labelEn.split(' ')[0]}
                  </span>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
