'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sprout, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle,
  Video,
  Code
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FooterProps {
  language: 'ne' | 'en'
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: language === 'ne' ? 'प्रमुख सेवाहरू' : 'Main Services',
      links: [
        { href: '/crop-recommendation', label: language === 'ne' ? 'बाली सुझाव' : 'Crop Recommendation' },
        { href: '/disease-detection', label: language === 'ne' ? 'रोग पहिचान' : 'Disease Detection' },
        { href: '/weather', label: language === 'ne' ? 'मौसम जानकारी' : 'Weather Info' },
        { href: '/market-prices', label: language === 'ne' ? 'बजार दर' : 'Market Prices' },
        { href: '/ai-chat', label: language === 'ne' ? 'कृषक AI' : 'Kishan AI' },
      ]
    },
    {
      title: language === 'ne' ? 'सिक्नुहोस्' : 'Learn More',
      links: [
        { href: '/learning', label: language === 'ne' ? 'कृषि शिक्षा' : 'Farming Education' },
        { href: '/tutorials', label: language === 'ne' ? 'भिडियो ट्युटोरियल' : 'Video Tutorials' },
        { href: '/guides', label: language === 'ne' ? 'मार्गदर्शन' : 'Guides' },
        { href: '/blog', label: language === 'ne' ? 'ब्लग' : 'Blog' },
        { href: '/research', label: language === 'ne' ? 'अनुसन्धान' : 'Research' },
      ]
    },
    {
      title: language === 'ne' ? 'समुदाय' : 'Community',
      links: [
        { href: '/community', label: language === 'ne' ? 'किसान समुदाय' : 'Farmer Community' },
        { href: '/forum', label: language === 'ne' ? 'छलफल' : 'Forum' },
        { href: '/success-stories', label: language === 'ne' ? 'सफलता कथाहरू' : 'Success Stories' },
        { href: '/events', label: language === 'ne' ? 'कार्यक्रमहरू' : 'Events' },
        { href: '/volunteer', label: language === 'ne' ? 'स्वयंसेवक' : 'Volunteer' },
      ]
    },
    {
      title: language === 'ne' ? 'सहायता' : 'Support',
      links: [
        { href: '/help', label: language === 'ne' ? 'मद्दत केन्द्र' : 'Help Center' },
        { href: '/contact', label: language === 'ne' ? 'सम्पर्क' : 'Contact Us' },
        { href: '/feedback', label: language === 'ne' ? 'प्रतिक्रिया' : 'Feedback' },
        { href: '/faq', label: language === 'ne' ? 'प्रश्नोत्तर' : 'FAQ' },
        { href: '/report', label: language === 'ne' ? 'समस्या रिपोर्ट' : 'Report Issue' },
      ]
    }
  ]

  const socialLinks = [
    { href: '#', icon: MessageCircle, label: 'Facebook' },
    { href: '#', icon: MessageCircle, label: 'Twitter' },
    { href: '#', icon: Video, label: 'YouTube' },
    { href: '#', icon: Code, label: 'GitHub' },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-agri-green-500">
                  <Sprout className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-agri-green-600">
                    {language === 'ne' ? 'नेपाली किसान' : 'Nepali Kishan'}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === 'ne' ? 'स्मार्ट कृषि प्लेटफर्म' : 'Smart Farming Platform'}
                  </p>
                </div>
              </Link>
              
              <p className="text-sm text-muted-foreground">
                {language === 'ne' 
                  ? 'नेपालका किसानहरूका लागि आधुनिक कृषि प्रविधि र AI आधारित समाधान।'
                  : 'Modern farming technology and AI-powered solutions for Nepali farmers.'
                }
              </p>

              <div className="flex space-x-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.div key={social.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="outline" size="icon" asChild>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-agri-green-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-agri-green-100">
                <Mail className="h-5 w-5 text-agri-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{language === 'ne' ? 'इमेल' : 'Email'}</p>
                <p className="text-sm text-muted-foreground">info@nepalikishan.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-agri-green-100">
                <Phone className="h-5 w-5 text-agri-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{language === 'ne' ? 'फोन' : 'Phone'}</p>
                <p className="text-sm text-muted-foreground">+977-1-1234567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-agri-green-100">
                <MapPin className="h-5 w-5 text-agri-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{language === 'ne' ? 'ठेगाना' : 'Address'}</p>
                <p className="text-sm text-muted-foreground">
                  {language === 'ne' ? 'काठमाडौँ, नेपाल' : 'Kathmandu, Nepal'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nepali Kishan. {language === 'ne' ? 'सर्वाधिकार सुरक्षित' : 'All rights reserved.'}
            </p>
            
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-agri-green-600 transition-colors">
                {language === 'ne' ? 'गोपनीयता नीति' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-agri-green-600 transition-colors">
                {language === 'ne' ? 'सेवाका सर्तहरू' : 'Terms of Service'}
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-agri-green-600 transition-colors">
                {language === 'ne' ? 'साइटम्याप' : 'Sitemap'}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
