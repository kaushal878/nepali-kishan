'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Heart, 
  Share2, 
  Eye, 
  Calendar,
  User,
  MapPin,
  TrendingUp,
  Award,
  Star,
  BookOpen,
  Video,
  Download,
  Bookmark,
  Quote,
  Users,
  Target,
  Trophy
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface SuccessStory {
  id: string
  title: string
  titleEn: string
  story: string
  storyEn: string
  farmer: string
  farmerEn: string
  farmerAvatar: string
  location: string
  locationEn: string
  province: string
  provinceEn: string
  category: string
  categoryEn: string
  tags: string[]
  tagsEn: string[]
  beforeAfter: {
    before: string
    beforeEn: string
    after: string
    afterEn: string
  }
  achievements: string[]
  achievementsEn: string[]
  challenges: string[]
  challengesEn: string[]
  advice: string
  adviceEn: string
  publishedAt: string
  readTime: string
  readTimeEn: string
  views: string
  likes: string
  shares: string
  featured: boolean
  hasVideo: boolean
  videoUrl: string
  images: string[]
  isBookmarked: boolean
}

export default function SuccessStories() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')

  const successStories: SuccessStory[] = [
    {
      id: '1',
      title: 'जैविक खेतीबाट ५ गुणा आम्दानी: कास्कीका किसानको सफलता कथा',
      titleEn: '5x Income from Organic Farming: Success Story of Kaski Farmer',
      story: 'कास्कीका किसान राम बहादुर गुरुङले परम्परागत खेती छोडेर जैविक खेती सुरु गरे। शुरुमा धेरै चुनौतीहरूको सामना गरे पनि उनले हार मानेनन्। आज उनी जैविक सब्जी र फलफूल उत्पादन गरेर वार्षिक २० लाख आम्दानी गर्छन्।',
      storyEn: 'Ram Bahadur Gurung from Kaski left traditional farming and started organic farming. He faced many challenges initially but didn\'t give up. Today he earns 20 lakh annually by producing organic vegetables and fruits.',
      farmer: 'राम बहादुर गुरुङ',
      farmerEn: 'Ram Bahadur Gurung',
      farmerAvatar: '/farmers/ram-gurung.jpg',
      location: 'पोखरा, कास्की',
      locationEn: 'Pokhara, Kaski',
      province: 'गण्डकी प्रदेश',
      provinceEn: 'Gandaki Province',
      category: 'जैविक खेती',
      categoryEn: 'Organic Farming',
      tags: ['जैविक', 'सब्जी', 'फलफूल', 'आम्दानी'],
      tagsEn: ['Organic', 'Vegetables', 'Fruits', 'Income'],
      beforeAfter: {
        before: 'परम्परागत खेतीमा वार्षिक ४ लाख आम्दानी',
        beforeEn: 'Annual income of 4 lakh from traditional farming',
        after: 'जैविक खेतीमा वार्षिक २० लाख आम्दानी',
        afterEn: 'Annual income of 20 lakh from organic farming'
      },
      achievements: [
        '२०२३ उत्कृष्ट जैविक किसान पुरस्कार',
        'काठमाडौँमा नियमित आपूर्ति सम्झौता',
        '५० भन्दा बढी किसानलाई प्रशिक्षण'
      ],
      achievementsEn: [
        '2023 Best Organic Farmer Award',
        'Regular supply contract in Kathmandu',
        'Trained over 50 farmers'
      ],
      challenges: [
        'बजारमा जैविक उत्पादनको पहिचान',
        'रोग नियन्त्रणमा कठिनाई',
        'प्रारम्भिक लगानीको अभाव'
      ],
      challengesEn: [
        'Market recognition for organic products',
        'Difficulty in disease control',
        'Lack of initial investment'
      ],
      advice: 'धैर्य राख्नुहोस्, सानो सुरुवात गरेर बढ्दै जानुहोस्। गुणस्तरीय उत्पादनले बजार आफै खोज्छ।',
      adviceEn: 'Be patient, start small and grow gradually. Quality products will find their own market.',
      publishedAt: '२०२४-०४-१५',
      readTime: '१० मिनेट',
      readTimeEn: '10 minutes',
      views: '३,४५६',
      likes: '२३४',
      shares: '८९',
      featured: true,
      hasVideo: true,
      videoUrl: '/stories/ram-gurung-video.mp4',
      images: ['/stories/ram-gurung-before.jpg', '/stories/ram-gurung-after.jpg'],
      isBookmarked: false
    },
    {
      id: '2',
      title: 'ड्रिप सिंचाइले बदलियो चितवनका किसानको भाग्य',
      titleEn: 'Drip Irrigation Changed the Fate of Chitwan Farmers',
      story: 'चितवनकी सीता देवी खड्काले ड्रिप सिंचाइ प्रणाली लगाएर आफ्नो ३ बिगाहा जमिनको उत्पादनता ६०% बढाइन्। पानीको बचत र श्रमको कमीले उनलाई नयाँ अवसरहरू दिए।',
      storyEn: 'Sita Devi Khadka from Chitwan increased her 3 bigha land productivity by 60% by installing drip irrigation system. Water conservation and labor reduction gave her new opportunities.',
      farmer: 'सीता देवी खड्का',
      farmerEn: 'Sita Devi Khadka',
      farmerAvatar: '/farmers/sita-khadka.jpg',
      location: 'भरतपुर, चितवन',
      locationEn: 'Bharatpur, Chitwan',
      province: 'बाग्मती प्रदेश',
      provinceEn: 'Bagmati Province',
      category: 'सिंचाई',
      categoryEn: 'Irrigation',
      tags: ['ड्रिप सिंचाई', 'पानी बचत', 'उत्पादनता', 'आधुनिक प्रविधि'],
      tagsEn: ['Drip Irrigation', 'Water Conservation', 'Productivity', 'Modern Technology'],
      beforeAfter: {
        before: 'परम्परागत सिंचाईमा ६०% उत्पादन',
        beforeEn: '60% production with traditional irrigation',
        after: 'ड्रिप सिंचाईमा ९६% उत्पादन',
        afterEn: '96% production with drip irrigation'
      },
      achievements: [
        'उत्पादनता बढोत्तरको राष्ट्रिय पुरस्कार',
        '१०० किसानलाई प्रविधि प्रशिक्षण',
        'बैंकबाट कृषि ऋण सुविधा'
      ],
      achievementsEn: [
        'National Productivity Enhancement Award',
        'Trained 100 farmers on technology',
        'Agriculture loan facility from bank'
      ],
      challenges: [
        'प्रारम्भिक लगानीको व्यवस्था',
        'प्रविधिको ज्ञानको अभाव',
        'मर्मत सेवाको समस्या'
      ],
      challengesEn: [
        'Arranging initial investment',
        'Lack of technical knowledge',
        'Maintenance service issues'
      ],
      advice: 'सरकारी अनुदान र बैंक ऋणको बारेमा जानकारी लिनुहोस्। सही प्रविधिको छनोट गर्नुहोस्।',
      adviceEn: 'Get information about government subsidies and bank loans. Choose the right technology.',
      publishedAt: '२०२४-०३-२०',
      readTime: '८ मिनेट',
      readTimeEn: '8 minutes',
      views: '२,८९०',
      likes: '१८९',
      shares: '६७',
      featured: true,
      hasVideo: false,
      videoUrl: '',
      images: ['/stories/sita-khadka-irrigation.jpg'],
      isBookmarked: true
    },
    {
      id: '3',
      title: 'ग्रीनहाउस खेती: झापाका युवाको नयाँ प्रयास',
      titleEn: 'Greenhouse Farming: New Endeavor of Jhapa Youth',
      story: 'झापाका २८ वर्षीय युवा विक्रम राईले ग्रीनहाउसमा तरकारी खेती गरेर विदेशी रोजगारी छोडेर आफ्नै गाउँमा सफलता पाए। उनको ग्रीनहाउस अहिले क्षेत्रको लागि आदर्श बनेको छ।',
      storyEn: '28-year-old youth Vikram Rai from Jhapa succeeded in his own village by growing vegetables in greenhouse instead of going abroad for employment. His greenhouse has now become a model for the area.',
      farmer: 'विक्रम राई',
      farmerEn: 'Vikram Rai',
      farmerAvatar: '/farmers/vikram-rai.jpg',
      location: 'बिर्तामोड, झापा',
      locationEn: 'Birtamode, Jhapa',
      province: 'कोशी प्रदेश',
      provinceEn: 'Koshi Province',
      category: 'ग्रीनहाउस',
      categoryEn: 'Greenhouse',
      tags: ['ग्रीनहाउस', 'तरकारी', 'युवा', 'रोजगारी'],
      tagsEn: ['Greenhouse', 'Vegetables', 'Youth', 'Employment'],
      beforeAfter: {
        before: 'विदेशी रोजगारीमा मासिक ५०,००० कमाई',
        beforeEn: 'Monthly earning of 50,000 from foreign employment',
        after: 'ग्रीनहाउसबाट मासिक ८०,००० कमाई',
        afterEn: 'Monthly earning of 80,000 from greenhouse'
      },
      achievements: [
        'उत्कृष्ट युवा कृषक पुरस्कार',
        '२० जनालाई रोजगारी प्रदान',
        'क्षेत्रीय बजारमा आपूर्ति सम्झौता'
      ],
      achievementsEn: [
        'Best Young Farmer Award',
        'Provided employment to 20 people',
        'Local market supply contract'
      ],
      challenges: [
        'प्राविधिक ज्ञानको अभाव',
        'पूँजीको अभाव',
        'बजार पहुँचको समस्या'
      ],
      challengesEn: [
        'Lack of technical knowledge',
        'Lack of capital',
        'Market access problem'
      ],
      advice: 'प्रशिक्षण र जानकारीमा लगानी गर्नुहोस्। सानो सुरुवात गरेर अनुभव बनाउनुहोस्।',
      adviceEn: 'Invest in training and information. Start small and build experience.',
      publishedAt: '२०२४-०२-१०',
      readTime: '१२ मिनेट',
      readTimeEn: '12 minutes',
      views: '१,९८७',
      likes: '१५६',
      shares: '४५',
      featured: false,
      hasVideo: true,
      videoUrl: '/stories/vikram-rai-greenhouse.mp4',
      images: ['/stories/vikram-rai-greenhouse.jpg'],
      isBookmarked: false
    }
  ]

  const categories = ['सबै', 'जैविक खेती', 'सिंचाई', 'ग्रीनहाउस', 'अन्नबाली', 'तरकारी खेती', 'पशुपालन']
  const provinces = ['सबै', 'कोशी प्रदेश', 'मधेश प्रदेश', 'बाग्मती प्रदेश', 'गण्डकी प्रदेश', 'लुम्बिनी प्रदेश', 'कर्णाली प्रदेश', 'सुदूरपश्चिम प्रदेश']

  const filteredStories = successStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || story.category === selectedCategory
    const matchesProvince = !selectedProvince || selectedProvince === 'सबै' || story.province === selectedProvince
    
    return matchesSearch && matchesCategory && matchesProvince
  })

  const featuredStories = filteredStories.filter(story => story.featured)
  const regularStories = filteredStories.filter(story => !story.featured)

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
            सफलता कथाहरू
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Success Stories
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि क्षेत्रमा सफलता पाएका किसानहरूको प्रेरणादायी कथा र अनुभवहरू
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="सफलता कथा खोज्नुहोस्... | Search success stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 text-lg rounded-full"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">श्रेणी:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">प्रदेश:</span>
            </div>
            {provinces.map((province) => (
              <Button
                key={province}
                variant={selectedProvince === province ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedProvince(province)}
              >
                {province}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Stories */}
        {featuredStories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-yellow-600" />
                विशेष सफलता कथाहरू
              </h2>
              <Button variant="outline" size="sm">
                सबै हेर्नुहोस्
                <TrendingUp className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img
                        src={story.images[0]}
                        alt={story.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-yellow-600 text-white">
                        <Trophy className="h-3 w-3 mr-1" />
                        विशेष
                      </Badge>
                      {story.hasVideo && (
                        <Badge className="absolute top-2 right-2 bg-red-600 text-white">
                          <Video className="h-3 w-3 mr-1" />
                          भिडियो
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{story.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {story.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2 mb-2">
                        {story.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {story.story}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Before/After */}
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <div className="text-sm">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="font-medium">पहिले:</span>
                            <span className="text-muted-foreground">{story.beforeAfter.before}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-medium">अहिले:</span>
                            <span className="text-muted-foreground">{story.beforeAfter.after}</span>
                          </div>
                        </div>
                      </div>

                      {/* Farmer Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-agri-green-100 flex items-center justify-center">
                            <User className="h-5 w-5 text-agri-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{story.farmer}</p>
                            <p className="text-xs text-muted-foreground">{story.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{story.province}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{story.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{story.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Share2 className="h-4 w-4" />
                            <span>{story.shares}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{story.publishedAt}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button className="flex-1">
                          <BookOpen className="h-4 w-4 mr-2" />
                          पूरा कथा पढ्नुहोस्
                        </Button>
                        {story.hasVideo && (
                          <Button variant="outline">
                            <Video className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="icon">
                          <Bookmark className={`h-4 w-4 ${story.isBookmarked ? 'fill-current text-agri-green-600' : ''}`} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={story.images[0]}
                    alt={story.title}
                    className="w-full h-40 object-cover"
                  />
                  {story.hasVideo && (
                    <Badge className="absolute top-2 right-2 bg-red-600 text-white">
                      <Video className="h-3 w-3 mr-1" />
                      भिडियो
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{story.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {story.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 mb-2">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {story.story}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {story.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {story.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{story.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Farmer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-agri-green-100 flex items-center justify-center">
                        <User className="h-3 w-3 text-agri-green-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium">{story.farmer}</p>
                        <p className="text-xs text-muted-foreground">{story.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{story.province}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{story.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{story.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{story.publishedAt}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      पढ्नुहोस्
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className={`h-3 w-3 ${story.isBookmarked ? 'fill-current text-agri-green-600' : ''}`} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै सफलता कथा फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}

        {/* Share Your Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-agri-green-50 to-blue-50 dark:from-agri-green-950 dark:to-blue-950 border-agri-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">आफ्नो सफलता कथा साझेदारी गर्नुहोस्</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                यदि तपाईंले कृषि क्षेत्रमा कुनै उपलब्धि पाएको छ भने तपाईंको कथा हामीलाई सुनाउनुहोस्
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-agri-green-600 hover:bg-agri-green-700">
                  <Star className="h-4 w-4 mr-2" />
                  कथा साझेदारी गर्नुहोस्
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  अन्य सफल किसानहरू
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
