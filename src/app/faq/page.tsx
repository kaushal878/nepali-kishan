'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
  BookOpen,
  Video,
  Download,
  Star,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Users,
  Settings,
  Shield,
  Globe,
  TrendingUp,
  Eye,
  Share2,
  ChevronRight
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface FAQ {
  id: string
  category: string
  categoryEn: string
  question: string
  questionEn: string
  answer: string
  answerEn: string
  helpful: number
  views: number
  featured: boolean
  hasVideo: boolean
  hasDownload: boolean
  relatedLinks?: string[]
  relatedLinksEn?: string[]
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const faqs: FAQ[] = [
    {
      id: '1',
      category: 'सुरुवाती',
      categoryEn: 'Getting Started',
      question: 'नेपाली किसानमा खाता कसरी बनाउने?',
      questionEn: 'How to create an account in Nepali Kishan?',
      answer: 'खाता बनाउनका लागि तल दायाँ भएको "साइन अप" बटनमा क्लिक गर्नुहोस्। तपाईंले आफ्नो नाम, इमेल, फोन नम्बर र पासवर्ड प्रविष्ट गर्नुपर्छ। इमेल पुष्टि गरेपछि तपाईंको खाता सक्रिय हुन्छ।',
      answerEn: 'Click on the "Sign Up" button at the bottom right. You need to enter your name, email, phone number and password. After email verification, your account will be activated.',
      helpful: 89,
      views: 1234,
      featured: true,
      hasVideo: true,
      hasDownload: false
    },
    {
      id: '2',
      category: 'बाली सुझाव',
      categoryEn: 'Crop Recommendations',
      question: 'बाली सुझावमा प्रदेश र जिल्ला कसरी छनोट गर्ने?',
      questionEn: 'How to select province and district in crop recommendations?',
      answer: 'पहिले प्रदेश छनोट गर्नुहोस्। प्रदेश छनोट गरेपछि त्यस प्रदेशका जिल्लाहरू मात्र देखिन्छन्। त्यसपछि आफ्नो जिल्ला छनोट गर्नुहोस्।',
      answerEn: 'First select the province. After selecting a province, only districts of that province will be shown. Then select your district.',
      helpful: 76,
      views: 987,
      featured: true,
      hasVideo: false,
      hasDownload: true
    },
    {
      id: '3',
      category: 'रोग पहिचान',
      categoryEn: 'Disease Detection',
      question: 'रोग पहिचानको परिणाम कसरी बुझ्ने?',
      questionEn: 'How to understand disease detection results?',
      answer: 'रोग पहिचान पछि तपाईंलाई विस्तृत रिपोर्ट प्राप्त हुन्छ। रिपोर्टमा रोगको नाम, गम्भीरता, लक्षणहरू, रोकथामका उपायहरू, र उपचारका तरिकाहरू समावेश हुन्छन्।',
      answerEn: 'After disease detection, you will receive a detailed report. The report includes disease name, severity, symptoms, preventive measures, and treatment methods.',
      helpful: 112,
      views: 1567,
      featured: true,
      hasVideo: true,
      hasDownload: false
    },
    {
      id: '4',
      category: 'मौसम जानकारी',
      categoryEn: 'Weather Information',
      question: 'मौसम जानकारी कति सटीक हुन्छ?',
      questionEn: 'How accurate is the weather information?',
      answer: 'हाम्रो मौसम जानकारी विश्वसनीय मौसम स्रोतहरूबाट प्राप्त हुन्छ र लगभग ९०% सटीक हुन्छ। तैपनि, स्थानीय अवस्थामा थोरै भिन्नता हुन सक्छ।',
      answerEn: 'Our weather information comes from reliable weather sources and is about 90% accurate. However, there may be slight variations in local conditions.',
      helpful: 45,
      views: 678,
      featured: false,
      hasVideo: false,
      hasDownload: false
    },
    {
      id: '5',
      category: 'बजार दर',
      categoryEn: 'Market Prices',
      question: 'बजार दर कतिचो अपडेट हुन्छ?',
      questionEn: 'How often are market prices updated?',
      answer: 'बजार दरहरू दैनिक अपडेट हुन्छन्। प्रमुख बजारहरूको दर बिहान ८ बजे र साँझ ४ बजे अपडेट गरिन्छ।',
      answerEn: 'Market prices are updated daily. Prices of major markets are updated at 8 AM and 4 PM.',
      helpful: 67,
      views: 890,
      featured: false,
      hasVideo: false,
      hasDownload: false
    },
    {
      id: '6',
      category: 'किसान AI',
      categoryEn: 'Kishan AI',
      question: 'किसान AI कसरी काम गर्छ?',
      questionEn: 'How does Kishan AI work?',
      answer: 'किसान AI उन्नत कृत्रिम बुद्धिमत्ताको प्रयोग गरेर तपाईंका कृषि सम्बन्धी प्रश्नहरूको उत्तर दिन्छ। यसले नेपाली र अंग्रेजी दुवै भाषामा काम गर्छ।',
      answerEn: 'Kishan AI uses advanced artificial intelligence to answer your agriculture-related questions. It works in both Nepali and English languages.',
      helpful: 93,
      views: 1456,
      featured: true,
      hasVideo: true,
      hasDownload: false
    },
    {
      id: '7',
      category: 'खाता',
      categoryEn: 'Account',
      question: 'पासवर्ड बिर्सेमा के गर्ने?',
      questionEn: 'What to do if I forget my password?',
      answer: 'लगइन पृष्ठमा "पासवर्ड बिर्सेको छ?" लिंकमा क्लिक गर्नुहोस्। तपाईंले दर्ता गरेको इमेल प्रविष्ट गर्नुहोस्। इमेलमा पासवर्ड रिसेट लिंक पठाइनेछ।',
      answerEn: 'Click on "Forgot Password?" link on the login page. Enter the email you registered with. A password reset link will be sent to your email.',
      helpful: 78,
      views: 1123,
      featured: false,
      hasVideo: false,
      hasDownload: false
    },
    {
      id: '8',
      category: 'सुरक्षा',
      categoryEn: 'Security',
      question: 'मेरो डाटा सुरक्षित छ?',
      questionEn: 'Is my data secure?',
      answer: 'हो, तपाईंको डाटा पूर्ण रूपमा सुरक्षित छ। हामी उन्नत एन्क्रिप्सन प्रविधिहरू प्रयोग गर्छौं र तपाईंको जानकारी कहिल्यै साझा गर्दैनौं।',
      answerEn: 'Yes, your data is completely secure. We use advanced encryption techniques and never share your information with anyone.',
      helpful: 91,
      views: 1345,
      featured: true,
      hasVideo: false,
      hasDownload: false
    }
  ]

  const categories = [
    { name: 'सबै', nameEn: 'All', icon: HelpCircle, color: 'bg-gray-100 text-gray-800' },
    { name: 'सुरुवाती', nameEn: 'Getting Started', icon: BookOpen, color: 'bg-blue-100 text-blue-800' },
    { name: 'बाली सुझाव', nameEn: 'Crop Recommendations', icon: Globe, color: 'bg-green-100 text-green-800' },
    { name: 'रोग पहिचान', nameEn: 'Disease Detection', icon: Shield, color: 'bg-red-100 text-red-800' },
    { name: 'मौसम जानकारी', nameEn: 'Weather Information', icon: Globe, color: 'bg-cyan-100 text-cyan-800' },
    { name: 'बजार दर', nameEn: 'Market Prices', icon: TrendingUp, color: 'bg-purple-100 text-purple-800' },
    { name: 'किसान AI', nameEn: 'Kishan AI', icon: MessageCircle, color: 'bg-orange-100 text-orange-800' },
    { name: 'खाता', nameEn: 'Account', icon: Settings, color: 'bg-indigo-100 text-indigo-800' },
    { name: 'सुरक्षा', nameEn: 'Security', icon: Shield, color: 'bg-pink-100 text-pink-800' }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.questionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answerEn.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || faq.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const markHelpful = (id: string) => {
    // Simulate marking as helpful
    console.log(`FAQ ${id} marked as helpful`)
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
            प्रश्नोत्तर
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            सामान्य प्रश्नहरू र तिनीहरूको उत्तरहरू
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
              placeholder="प्रश्न खोज्नुहोस्... | Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-lg rounded-full"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured FAQs */}
        {searchQuery === '' && selectedCategory === 'सबै' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Star className="h-6 w-6 mr-2 text-yellow-600" />
                लोकप्रिय प्रश्नहरू
              </h2>
              <Badge className="bg-yellow-100 text-yellow-800">
                {faqs.filter(faq => faq.featured).length} प्रश्नहरू
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.filter(faq => faq.featured).map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{faq.category}</Badge>
                        {faq.hasVideo && (
                          <Badge className="bg-red-100 text-red-800">
                            <Video className="h-3 w-3 mr-1" />
                            भिडियो
                          </Badge>
                        )}
                        {faq.hasDownload && (
                          <Badge className="bg-blue-100 text-blue-800">
                            <Download className="h-3 w-3 mr-1" />
                            डाउनलोड
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg line-clamp-2 mb-2">
                        {faq.question}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {faq.answer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4" />
                            <span>{faq.helpful} मद्दतजनक</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{faq.views} हेरिएको</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        पूरा जवाफ हेर्नुहोस्
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'सबै' ? 'सबै प्रश्नहरू' : `${selectedCategory} प्रश्नहरू`}
            </h2>
            <Badge className="bg-agri-green-100 text-agri-green-800">
              {filteredFAQs.length} प्रश्नहरू
            </Badge>
          </div>

          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleExpanded(faq.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{faq.category}</Badge>
                        {faq.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                            <Star className="h-3 w-3 mr-1" />
                            लोकप्रिय
                          </Badge>
                        )}
                        {faq.hasVideo && (
                          <Badge className="bg-red-100 text-red-800 text-xs">
                            <Video className="h-3 w-3 mr-1" />
                            भिडियो
                          </Badge>
                        )}
                        {faq.hasDownload && (
                          <Badge className="bg-blue-100 text-blue-800 text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            डाउनलोड
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg mb-2">{faq.question}</CardTitle>
                      <CardDescription className="text-sm">
                        {expandedItems.has(faq.id) ? faq.answer : faq.answer.substring(0, 100) + '...'}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-sm text-muted-foreground">
                        {faq.helpful} मद्दतजनक
                      </div>
                      {expandedItems.has(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {expandedItems.has(faq.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="space-y-4">
                      <div className="text-sm leading-relaxed">
                        {faq.answer}
                      </div>

                      {/* Related Links */}
                      {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium">सम्बन्धित लिंकहरू:</p>
                          <div className="space-y-1">
                            {faq.relatedLinks.map((link, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="flex items-center space-x-2 text-sm text-agri-green-600 hover:text-agri-green-700"
                              >
                                <ExternalLink className="h-3 w-3" />
                                <span>{link}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{faq.views} हेरिएको</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => markHelpful(faq.id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            मद्दतजनक
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" />
                            साझेदारी गर्नुहोस्
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै प्रश्न फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}

        {/* Still Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">अझै पनि सहायता चाहिन्छ?</h3>
              <p className="text-muted-foreground mb-6 text-center">
                यदि तपाईंलाई आफ्नो जिज्ञासाको उत्तर भेटिएन भने, हामीसँग सिधै सम्पर्क गर्नुहोस्
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  लाइभ च्याट
                </Button>
                <Button variant="outline" className="justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  इमेल गर्नुहोस्
                </Button>
                <Button variant="outline" className="justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  फोन गर्नुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
