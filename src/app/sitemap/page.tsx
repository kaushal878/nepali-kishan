'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Home, 
  BookOpen, 
  Users, 
  HelpCircle,
  FileText,
  Shield,
  Map,
  Database,
  TrendingUp,
  Bug,
  Heart,
  Star,
  Calendar,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Globe,
  Microscope,
  MessageCircle,
  Award,
  HandHeart,
  Eye,
  Settings,
  Lock,
  Video
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface SitePage {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  url: string
  icon: any
  category: string
  priority: 'high' | 'medium' | 'low'
  lastUpdated: string
  isExternal: boolean
  subpages?: SitePage[]
}

export default function Sitemap() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['main']))

  const sitePages: SitePage[] = [
    {
      id: 'home',
      title: 'गृहपृष्ठ',
      titleEn: 'Home',
      description: 'नेपाली किसानको मुख्य पृष्ठ',
      descriptionEn: 'Main page of Nepali Kishan',
      url: '/',
      icon: Home,
      category: 'main',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    },
    {
      id: 'crop-recommendation',
      title: 'बाली सुझाव',
      titleEn: 'Crop Recommendation',
      description: 'प्रदेश र जिल्ला अनुसार उत्तम बाली सुझाव',
      descriptionEn: 'Best crop recommendations based on province and district',
      url: '/crop-recommendation',
      icon: TrendingUp,
      category: 'main',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    },
    {
      id: 'disease-detection',
      title: 'रोग पहिचान',
      titleEn: 'Disease Detection',
      description: 'फोटोबाट बालीका रोगहरू पहिचान गर्ने',
      descriptionEn: 'Identify crop diseases from photos',
      url: '/disease-detection',
      icon: Microscope,
      category: 'main',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    },
    {
      id: 'weather',
      title: 'मौसम जानकारी',
      titleEn: 'Weather Information',
      description: 'वास्तविक समय मौसम डाटा र पूर्वानुमान',
      descriptionEn: 'Real-time weather data and forecasts',
      url: '/weather',
      icon: Globe,
      category: 'main',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    },
    {
      id: 'market-prices',
      title: 'बजार दर',
      titleEn: 'Market Prices',
      description: 'दैनिक बजार मूल्य र मूल्य प्रवाह',
      descriptionEn: 'Daily market prices and price trends',
      url: '/market-prices',
      icon: Database,
      category: 'main',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    },
    {
      id: 'ai-chat',
      title: 'किसान AI',
      titleEn: 'Kishan AI',
      description: 'AI-आधारित कृषि सल्लाहकार',
      descriptionEn: 'AI-based agriculture advisor',
      url: '/ai-chat',
      icon: MessageCircle,
      category: 'main',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    }
  ]

  const learningPages: SitePage[] = [
    {
      id: 'learning-main',
      title: 'कृषि शिक्षा',
      titleEn: 'Agriculture Education',
      description: 'कृषि सम्बन्धी शिक्षा र तालिम',
      descriptionEn: 'Agriculture education and training',
      url: '/learning',
      icon: BookOpen,
      category: 'learning',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false,
      subpages: [
        {
          id: 'learning-tutorials',
          title: 'भिडियो ट्युटोरियल',
          titleEn: 'Video Tutorials',
          description: 'कृषि विधिहरूको भिडियो ट्युटोरियल',
          descriptionEn: 'Video tutorials for farming techniques',
          url: '/learning/tutorials',
          icon: Video,
          category: 'learning',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'learning-guides',
          title: 'मार्गदर्शन',
          titleEn: 'Guides',
          description: 'विस्तृत मार्गदर्शन र टिप्स',
          descriptionEn: 'Detailed guides and tips',
          url: '/learning/guides',
          icon: BookOpen,
          category: 'learning',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'learning-blog',
          title: 'ब्लग',
          titleEn: 'Blog',
          description: 'कृषि समाचार र लेखहरू',
          descriptionEn: 'Agriculture news and articles',
          url: '/learning/blog',
          icon: FileText,
          category: 'learning',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'learning-research',
          title: 'अनुसन्धान',
          titleEn: 'Research',
          description: 'कृषि अनुसन्धान पत्रहरू',
          descriptionEn: 'Agriculture research papers',
          url: '/learning/research',
          icon: Microscope,
          category: 'learning',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        }
      ]
    }
  ]

  const communityPages: SitePage[] = [
    {
      id: 'community-main',
      title: 'किसान समुदाय',
      titleEn: 'Farmer Community',
      description: 'किसानहरूको अनलाइन समुदाय',
      descriptionEn: 'Online community for farmers',
      url: '/community',
      icon: Users,
      category: 'community',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false,
      subpages: [
        {
          id: 'community-forum',
          title: 'छलफल',
          titleEn: 'Forum',
          description: 'किसानहरूबीच छलफल प्लेटफर्म',
          descriptionEn: 'Discussion platform for farmers',
          url: '/community/forum',
          icon: MessageCircle,
          category: 'community',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'community-success-stories',
          title: 'सफलता कथाहरू',
          titleEn: 'Success Stories',
          description: 'सफल किसानहरूका प्रेरणादायक कथाहरू',
          descriptionEn: 'Inspiring stories of successful farmers',
          url: '/community/success-stories',
          icon: Award,
          category: 'community',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'community-events',
          title: 'कार्यक्रमहरू',
          titleEn: 'Events',
          description: 'कृषि कार्यक्रमहरू र तालिमहरू',
          descriptionEn: 'Agriculture events and trainings',
          url: '/community/events',
          icon: Calendar,
          category: 'community',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'community-volunteer',
          title: 'स्वयंसेवक',
          titleEn: 'Volunteer',
          description: 'कृषि क्षेत्रमा स्वयंसेवक अवसरहरू',
          descriptionEn: 'Volunteer opportunities in agriculture',
          url: '/community/volunteer',
          icon: HandHeart,
          category: 'community',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        }
      ]
    }
  ]

  const supportPages: SitePage[] = [
    {
      id: 'help-main',
      title: 'मद्दत केन्द्र',
      titleEn: 'Help Center',
      description: 'सहायता र जानकारी केन्द्र',
      descriptionEn: 'Help and information center',
      url: '/help',
      icon: HelpCircle,
      category: 'support',
      priority: 'high',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false,
      subpages: [
        {
          id: 'contact',
          title: 'सम्पर्क',
          titleEn: 'Contact',
          description: 'हामीसँग सम्पर्क गर्नुहोस्',
          descriptionEn: 'Contact us',
          url: '/contact',
          icon: Phone,
          category: 'support',
          priority: 'high',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'feedback',
          title: 'प्रतिक्रिया',
          titleEn: 'Feedback',
          description: 'प्लेटफर्मको बारेमा आफ्नो प्रतिक्रिया दिनुहोस्',
          descriptionEn: 'Give your feedback about the platform',
          url: '/feedback',
          icon: MessageCircle,
          category: 'support',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'faq',
          title: 'प्रश्नोत्तर',
          titleEn: 'FAQ',
          description: 'बारम्बार सोधिने प्रश्नहरू',
          descriptionEn: 'Frequently asked questions',
          url: '/faq',
          icon: HelpCircle,
          category: 'support',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        },
        {
          id: 'report',
          title: 'समस्या रिपोर्ट',
          titleEn: 'Report Issue',
          description: 'प्लेटफर्ममा भेटिएका समस्याहरू रिपोर्ट गर्नुहोस्',
          descriptionEn: 'Report issues found in the platform',
          url: '/report',
          icon: Bug,
          category: 'support',
          priority: 'medium',
          lastUpdated: '२०२४-०५-०८',
          isExternal: false
        }
      ]
    }
  ]

  const legalPages: SitePage[] = [
    {
      id: 'privacy',
      title: 'गोपनीयता नीति',
      titleEn: 'Privacy Policy',
      description: 'हाम्रो गोपनीयता नीति',
      descriptionEn: 'Our privacy policy',
      url: '/privacy',
      icon: Lock,
      category: 'legal',
      priority: 'medium',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    },
    {
      id: 'terms',
      title: 'सेवाका सर्तहरू',
      titleEn: 'Terms of Service',
      description: 'हाम्रो सेवाका सर्तहरू',
      descriptionEn: 'Our terms of service',
      url: '/terms',
      icon: FileText,
      category: 'legal',
      priority: 'medium',
      lastUpdated: '२०२४-०५-०८',
      isExternal: false
    }
  ]

  const allPages = [
    ...sitePages,
    ...learningPages,
    ...communityPages,
    ...supportPages,
    ...legalPages
  ]

  const categories = [
    { id: 'main', name: 'मुख्य पृष्ठहरू', nameEn: 'Main Pages', icon: Home, color: 'bg-blue-100 text-blue-800' },
    { id: 'learning', name: 'शिक्षा', nameEn: 'Learning', icon: BookOpen, color: 'bg-green-100 text-green-800' },
    { id: 'community', name: 'समुदाय', nameEn: 'Community', icon: Users, color: 'bg-purple-100 text-purple-800' },
    { id: 'support', name: 'समर्थन', nameEn: 'Support', icon: HelpCircle, color: 'bg-orange-100 text-orange-800' },
    { id: 'legal', name: 'कानूनी', nameEn: 'Legal', icon: Shield, color: 'bg-red-100 text-red-800' }
  ]

  const filteredPages = allPages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         page.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         page.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesSearch
  })

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch(priority) {
      case 'high': return 'उच्च'
      case 'medium': return 'मध्यम'
      case 'low': return 'न्यून'
      default: return priority
    }
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-agri-green-800 dark:text-agri-green-200 mb-4">
            साइटम्याप
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Sitemap
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            नेपाली किसान प्लेटफर्मको सबै पृष्ठहरू र खण्डहरूको पूर्ण सूची
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="पृष्ठ खोज्नुहोस्... | Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-lg rounded-full"
            />
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
        >
          <Card className="text-center">
            <CardContent className="pt-6">
              <Map className="h-8 w-8 text-agri-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{allPages.length}</h3>
              <p className="text-sm text-muted-foreground">कुल पृष्ठहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Home className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{sitePages.length}</h3>
              <p className="text-sm text-muted-foreground">मुख्य पृष्ठहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{learningPages.length + communityPages.length + supportPages.length}</h3>
              <p className="text-sm text-muted-foreground">उप-पृष्ठहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{legalPages.length}</h3>
              <p className="text-sm text-muted-foreground">कानूनी पृष्ठहरू</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Categories */}
        <div className="space-y-6 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.name}</CardTitle>
                        <CardDescription>{category.nameEn}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-agri-green-100 text-agri-green-800">
                        {allPages.filter(page => page.category === category.id).length} पृष्ठहरू
                      </Badge>
                      {expandedCategories.has(category.id) ? (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {expandedCategories.has(category.id) && (
                  <CardContent className="space-y-4">
                    {allPages
                      .filter(page => page.category === category.id)
                      .filter(page => 
                        searchQuery === '' || 
                        page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        page.titleEn.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((page) => (
                        <motion.div
                          key={page.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-agri-green-100 flex items-center justify-center">
                              <page.icon className="h-5 w-5 text-agri-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">{page.title}</h4>
                              <p className="text-sm text-muted-foreground">{page.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getPriorityColor(page.priority)}>
                              {getPriorityLabel(page.priority)}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {page.lastUpdated}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              हेर्नुहोस्
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Download Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-agri-green-50 to-sky-blue-50 dark:from-agri-green-950 dark:to-sky-blue-950">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">साइटम्याप डाउनलोड गर्नुहोस्</h3>
              <p className="text-muted-foreground mb-6">
                भविष्यका सन्दर्भका लागि साइटम्यापको PDF प्रतिलिपि डाउनलोड गर्नुहोस्
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  PDF डाउनलोड
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  मुद्रित गर्नुहोस्
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  इमेल गर्नुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
