'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  Download, 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronRight,
  Users,
  Clock,
  Star,
  ExternalLink,
  FileText,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Shield,
  Settings,
  Globe,
  TrendingUp,
  Eye
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface HelpCategory {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: any
  color: string
  articles: number
  popular: boolean
}

interface HelpArticle {
  id: string
  title: string
  titleEn: string
  category: string
  categoryEn: string
  content: string
  contentEn: string
  views: string
  helpful: string
  lastUpdated: string
  featured: boolean
  hasVideo: boolean
  hasDownload: boolean
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

interface SupportContact {
  type: 'phone' | 'email' | 'chat' | 'forum'
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  contact: string
  hours: string
  hoursEn: string
  icon: any
  color: string
  available: boolean
}

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const helpCategories: HelpCategory[] = [
    {
      id: '1',
      title: 'सुरुवाती गाइड',
      titleEn: 'Getting Started',
      description: 'प्लेटफर्मको परिचय, खाता बनाउने, र आधारभूत सुविधाहरू',
      descriptionEn: 'Platform introduction, account creation, and basic features',
      icon: HelpCircle,
      color: 'bg-blue-100 text-blue-800',
      articles: 12,
      popular: true
    },
    {
      id: '2',
      title: 'बाली सुझाव',
      titleEn: 'Crop Recommendations',
      description: 'बाली छनोट, प्रदेश र जिल्ला अनुसार सुझाव, मौसम विश्लेषण',
      descriptionEn: 'Crop selection, province and district based recommendations, weather analysis',
      icon: BookOpen,
      color: 'bg-green-100 text-green-800',
      articles: 8,
      popular: true
    },
    {
      id: '3',
      title: 'रोग पहिचान',
      titleEn: 'Disease Detection',
      description: 'फोटो अपलोड, रोग पहिचान प्रक्रिया, परिणाम बुझाउने',
      descriptionEn: 'Photo upload, disease detection process, understanding results',
      icon: Shield,
      color: 'bg-red-100 text-red-800',
      articles: 15,
      popular: true
    },
    {
      id: '4',
      title: 'मौसम जानकारी',
      titleEn: 'Weather Information',
      description: 'मौसम डाटा, पूर्वानुमान, खेती योजना बनाउने',
      descriptionEn: 'Weather data, forecasts, farm planning',
      icon: Globe,
      color: 'bg-cyan-100 text-cyan-800',
      articles: 6,
      popular: false
    },
    {
      id: '5',
      title: 'बजार दर',
      titleEn: 'Market Prices',
      description: 'बजार मूल्य, बिक्री गर्ने तरिका, बजार विश्लेषण',
      descriptionEn: 'Market prices, selling methods, market analysis',
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-800',
      articles: 10,
      popular: false
    },
    {
      id: '6',
      title: 'किसान AI',
      titleEn: 'Kishan AI',
      description: 'AI समाधान, प्रश्न सोध्ने तरिका, उत्तर बुझाउने',
      descriptionEn: 'AI solutions, asking questions, understanding answers',
      icon: MessageCircle,
      color: 'bg-orange-100 text-orange-800',
      articles: 7,
      popular: false
    }
  ]

  const helpArticles: HelpArticle[] = [
    {
      id: '1',
      title: 'नेपाली किसानमा खाता कसरी बनाउने?',
      titleEn: 'How to create an account in Nepali Kishan?',
      category: 'सुरुवाती गाइड',
      categoryEn: 'Getting Started',
      content: 'खाता बनाउनका लागि साइन अप बटनमा क्लिक गर्नुहोस्...',
      contentEn: 'Click on the sign up button to create an account...',
      views: '१,२३४',
      helpful: '८९०',
      lastUpdated: '२०२४-०५-०५',
      featured: true,
      hasVideo: true,
      hasDownload: false,
      difficulty: 'beginner'
    },
    {
      id: '2',
      title: 'बाली सुझावमा प्रदेश र जिल्ला कसरी छनोट गर्ने?',
      titleEn: 'How to select province and district in crop recommendations?',
      category: 'बाली सुझाव',
      categoryEn: 'Crop Recommendations',
      content: 'प्रदेश छनोट गरेपछि त्यस प्रदेशका जिल्लाहरू मात्र देखिन्छन्...',
      contentEn: 'When you select a province, only districts of that province will be shown...',
      views: '९८७',
      helpful: '७५६',
      lastUpdated: '२०२४-०५-०३',
      featured: true,
      hasVideo: false,
      hasDownload: true,
      difficulty: 'beginner'
    },
    {
      id: '3',
      title: 'रोग पहिचानको परिणाम कसरी बुझ्ने?',
      titleEn: 'How to understand disease detection results?',
      category: 'रोग पहिचान',
      categoryEn: 'Disease Detection',
      content: 'रोग पहिचान पछि तपाईंलाई विस्तृत रिपोर्ट प्राप्त हुन्छ...',
      contentEn: 'After disease detection, you will receive a detailed report...',
      views: '१,५६७',
      helpful: '१,१२३',
      lastUpdated: '२०२४-०५-०१',
      featured: true,
      hasVideo: true,
      hasDownload: false,
      difficulty: 'intermediate'
    }
  ]

  const supportContacts: SupportContact[] = [
    {
      type: 'phone',
      title: 'फोन समर्थन',
      titleEn: 'Phone Support',
      description: 'सीधै समर्थन टोलीसँग कुरा गर्नुहोस्',
      descriptionEn: 'Talk directly with our support team',
      contact: '९८०-१२३४५६७८९',
      hours: 'सोमवार-शुक्रबार: ९ AM - ६ PM',
      hoursEn: 'Monday-Friday: 9 AM - 6 PM',
      icon: Phone,
      color: 'bg-green-100 text-green-800',
      available: true
    },
    {
      type: 'email',
      title: 'इमेल समर्थन',
      titleEn: 'Email Support',
      description: 'इमेल मार्फत विस्तृत सहायता पाउनुहोस्',
      descriptionEn: 'Get detailed help via email',
      contact: 'support@nepalikishan.com',
      hours: '२४/७ प्रतिक्रिया',
      hoursEn: '24/7 Response',
      icon: Mail,
      color: 'bg-blue-100 text-blue-800',
      available: true
    },
    {
      type: 'chat',
      title: 'ाइभ च्याट',
      titleEn: 'Live Chat',
      description: 'तुरुन्त च्याट मार्फत सहायता पाउनुहोस्',
      descriptionEn: 'Get instant help via live chat',
      contact: 'च्याट सुरु गर्नुहोस्',
      hours: 'सोमवार-शुक्रबार: ९ AM - ८ PM',
      hoursEn: 'Monday-Friday: 9 AM - 8 PM',
      icon: MessageCircle,
      color: 'bg-purple-100 text-purple-800',
      available: true
    },
    {
      type: 'forum',
      title: 'समुदाय छलफल',
      titleEn: 'Community Forum',
      description: 'अन्य किसानहरूसँग अनुभव साझेदा गर्नुहोस्',
      descriptionEn: 'Share experiences with other farmers',
      contact: 'forum.nepalikishan.com',
      hours: 'सधैं उपलब्ध',
      hoursEn: 'Always Available',
      icon: Users,
      color: 'bg-orange-100 text-orange-800',
      available: true
    }
  ]

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || article.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredArticles = helpArticles.filter(article => article.featured)

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'सुरुवाती'
      case 'intermediate': return 'बीचको'
      case 'advanced': return 'उन्नत'
      default: return difficulty
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
            मद्दत केन्द्र
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Help Center
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            नेपाली किसान प्लेटफर्मको पूर्ण गाइड र सहायता
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
              placeholder="मद्दत खोज्नुहोस्... | Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-lg rounded-full"
            />
          </div>
        </motion.div>

        {/* Quick Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">छिटो मद्दत</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader className="text-center pb-3">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{category.articles} लेखहरू</span>
                      {category.popular && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="h-3 w-3 mr-1" />
                          लोकप्रिय
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" className="w-full">
                      हेर्नुहोस्
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Lightbulb className="h-6 w-6 mr-2 text-yellow-600" />
              विशेष लेखहरू
            </h2>
            <Button variant="outline" size="sm">
              सबै लेखहरू हेर्नुहोस्
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <Badge className={getDifficultyColor(article.difficulty)}>
                        {getDifficultyLabel(article.difficulty)}
                      </Badge>
                      {article.hasVideo && (
                        <Badge className="bg-red-100 text-red-800">
                          <Video className="h-3 w-3 mr-1" />
                          भिडियो
                        </Badge>
                      )}
                      {article.hasDownload && (
                        <Badge className="bg-blue-100 text-blue-800">
                          <Download className="h-3 w-3 mr-1" />
                          डाउनलोड
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg line-clamp-2 mb-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {article.content}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4" />
                          <span>{article.helpful}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.lastUpdated}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      <BookOpen className="h-4 w-4 mr-2" />
                      पूरा लेख पढ्नुहोस्
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">समर्थन सम्पर्क</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportContacts.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader className="pb-3">
                    <div className={`w-16 h-16 rounded-full ${contact.color} flex items-center justify-center mx-auto mb-4`}>
                      <contact.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg mb-2">{contact.title}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm">
                      <div className="font-medium">{contact.contact}</div>
                      <div className="text-muted-foreground">{contact.hours}</div>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${contact.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-sm">
                        {contact.available ? 'उपलब्ध छ' : 'अनुपलब्ध'}
                      </span>
                    </div>
                    <Button className="w-full" disabled={!contact.available}>
                      {contact.available ? (
                        <>
                          <contact.icon className="h-4 w-4 mr-2" />
                          सम्पर्क गर्नुहोस्
                        </>
                      ) : (
                        'अनुपलब्ध'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">लोकप्रिय विषयहरू</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'खाता बनाउने तरिका',
              'पासवर्ड रिसेट गर्ने',
              'बाली सुझाव कसरी काम गर्छ',
              'रोग पहिचान प्रक्रिया',
              'मौसम डाटा कसरी पाइन्छ',
              'बजार मूल्य अपडेट हुने समय'
            ].map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted cursor-pointer"
              >
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{topic}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">स्रोतहरू</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  युजर गाइड PDF
                </Button>
                <Button variant="outline" className="justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  भिडिओ ट्युटोरियल
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  FAQ
                </Button>
                <Button variant="outline" className="justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  बाह्य स्रोतहरू
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
