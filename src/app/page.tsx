'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Camera, 
  Cloud, 
  TrendingUp, 
  MessageCircle, 
  Calendar,
  Sprout,
  Heart,
  BookOpen,
  Users,
  ArrowRight,
  Star,
  MapPin,
  Thermometer,
  Droplets,
  Wind
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const quickActions = [
    {
      icon: Camera,
      title: 'रोग पहिचान',
      titleEn: 'Disease Detection',
      description: 'बालीको रोग AI ले पहिचान गर्नुहोस्',
      descriptionEn: 'Identify crop diseases with AI',
      href: '/disease-detection',
      color: 'bg-red-500',
      delay: 0.1
    },
    {
      icon: Sprout,
      title: 'बाली सुझाव',
      titleEn: 'Crop Guide',
      description: 'उपयुक्त बाली छनोट गर्नुहोस्',
      descriptionEn: 'Choose suitable crops',
      href: '/crop-recommendation',
      color: 'bg-agri-green-500',
      delay: 0.2
    },
    {
      icon: Cloud,
      title: 'मौसम',
      titleEn: 'Weather',
      description: 'वास्तविक मौसम जानकारी',
      descriptionEn: 'Real-time weather info',
      href: '/weather',
      color: 'bg-sky-blue-500',
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: 'बजार दर',
      titleEn: 'Market Prices',
      description: 'आजको बजार मूल्यहरू',
      descriptionEn: 'Today\'s market prices',
      href: '/market-prices',
      color: 'bg-earth-brown-500',
      delay: 0.4
    },
    {
      icon: MessageCircle,
      title: 'कृषक AI',
      titleEn: 'Kishan AI',
      description: 'AI कृषि सहायक',
      descriptionEn: 'AI farming assistant',
      href: '/ai-chat',
      color: 'bg-purple-500',
      delay: 0.5
    },
    {
      icon: Heart,
      title: 'सरकारी सहयोग',
      titleEn: 'Government Support',
      description: 'योजना र सहयोग',
      descriptionEn: 'Schemes & support',
      href: '/government',
      color: 'bg-blue-500',
      delay: 0.6
    }
  ]

  const features = [
    {
      icon: MapPin,
      title: 'क्षेत्रफल आधारित',
      titleEn: 'Region-based',
      description: 'तपाईंको क्षेत्र अनुसार सुझाव',
      descriptionEn: 'Suggestions based on your region'
    },
    {
      icon: Thermometer,
      title: 'मौसम अनुकूल',
      titleEn: 'Weather Adaptive',
      description: 'मौसम अनुसार कृषि योजना',
      descriptionEn: 'Farming plans based on weather'
    },
    {
      icon: Droplets,
      title: 'जल व्यवस्थापन',
      titleEn: 'Water Management',
      description: 'सिंचाई र जल स्रोत व्यवस्थापन',
      descriptionEn: 'Irrigation and water resource management'
    },
    {
      icon: Wind,
      title: 'जैविक खेती',
      titleEn: 'Organic Farming',
      description: 'रासायनिक मुक्त खेती विधि',
      descriptionEn: 'Chemical-free farming methods'
    }
  ]

  const testimonials = [
    {
      name: 'राम बहादुर थापा',
      nameEn: 'Ram Bahadur Thapa',
      role: 'किसान, कास्की',
      roleEn: 'Farmer, Kaski',
      content: 'नेपाली किसान एपले मेरो खेतीपत्ति पूर्ण रूपमा बदलिदियो। अब म राम्रो बाली छनोट गर्न सक्छु।',
      contentEn: 'Nepali Kishan app completely changed my farming. Now I can choose better crops.',
      rating: 5
    },
    {
      name: 'सीता शर्मा',
      nameEn: 'Sita Sharma',
      role: 'किसान, रुपन्देही',
      roleEn: 'Farmer, Rupandehi',
      content: 'रोग पहिचान सुविधाले मेरो तरकारी बचायो। धेरै धन्यवाद!',
      contentEn: 'Disease detection feature saved my vegetables. Thank you very much!',
      rating: 5
    },
    {
      name: 'हरि बहादुर गुरुङ',
      nameEn: 'Hari Bahadur Gurung',
      role: 'किसान, धादिङ',
      roleEn: 'Farmer, Dhading',
      content: 'बजार दर जानकारीले मलाई उत्पादन बेच्न सहज बनायो।',
      contentEn: 'Market price information made it easy for me to sell produce.',
      rating: 5
    }
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-agri-green-50 via-white to-sky-blue-50 dark:from-agri-green-950 dark:via-background dark:to-sky-blue-950">
        <div className="absolute inset-0 bg-[url('/agricultural-pattern.png')] opacity-5" />
        
        <div className="relative container px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-agri-green-100 text-agri-green-800 dark:bg-agri-green-900 dark:text-agri-green-200">
              🌾 स्मार्ट कृषि प्लेटफर्म | Smart Farming Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-agri-green-800 dark:text-agri-green-200 mb-6 nepali-text">
              नेपाली किसान
              <span className="block text-2xl md:text-3xl text-agri-green-600 dark:text-agri-green-400 mt-2">
                Nepali Kishan
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto nepali-text">
              आधुनिक प्रविधि र AI को मद्दतले नेपालका किसानहरूका लागि उत्कृष्ट कृषि समाधान
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="तपाईं के उत्पादन गर्न चाहनुहुन्छ? | What do you want to grow?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-24 h-14 text-lg rounded-full border-2 border-agri-green-200 focus:border-agri-green-500 dark:border-agri-green-800 dark:focus:border-agri-green-400"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-agri-green-500 hover:bg-agri-green-600">
                खोज्नुहोस्
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                🌾 अन्नबाली | Cereals
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                🥬 तरकारी | Vegetables
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                🍎 फलफूल | Fruits
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                🌿 औषधि | Medicinal
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              छिटो सेवाहरू | Quick Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              एक क्लिकमा सबै कृषि सेवाहरू प्राप्त गर्नुहोस्
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: action.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-agri-green-200 dark:hover:border-agri-green-800">
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl nepali-text">
                        {action.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {action.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-agri-green-50 dark:group-hover:bg-agri-green-950 transition-colors"
                        asChild
                      >
                        <a href={action.href}>
                          प्रयोग गर्नुहोस्
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              विशेषताहरू | Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              हाम्रा उन्नत सुविधाहरूले तपाईंको खेतीपत्ति सजिलो बनाउँछ
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-lg bg-agri-green-100 dark:bg-agri-green-900 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-agri-green-600 dark:text-agri-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 nepali-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              किसानहरूको प्रतिक्रिया | Farmer Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              हाम्रा सेवाबाट फाइदा उठाएका किसानहरूको कुरा
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg nepali-text">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {testimonial.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic nepali-text">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-agri-green-600 to-sky-blue-600 text-white">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              आजै शुरु गर्नुहोस् | Start Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              नेपाली किसानसँग जोडिएर तपाईंको खेतीपत्ति अझ उन्नत बनाउनुहोस्
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-agri-green-600 hover:bg-gray-100">
                निःशुल्क सुरु गर्नुहोस्
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agri-green-600">
                थप जान्नुहोस्
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
