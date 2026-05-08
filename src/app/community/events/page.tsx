'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Share2,
  Heart,
  Eye,
  Plus,
  ChevronRight,
  Video,
  Mic,
  Award,
  BookOpen,
  Target,
  Globe,
  Ticket
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface Event {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  type: 'workshop' | 'seminar' | 'conference' | 'training' | 'field-day' | 'online'
  category: string
  categoryEn: string
  date: string
  time: string
  duration: string
  durationEn: string
  location: string
  locationEn: string
  province: string
  provinceEn: string
  organizer: string
  organizerEn: string
  organizerLogo: string
  speakers: string[]
  speakersEn: string[]
  maxParticipants: string
  registeredParticipants: string
  fee: string
  feeEn: string
  tags: string[]
  tagsEn: string[]
  imageUrl: string
  isOnline: boolean
  isFree: boolean
  featured: boolean
  views: string
  likes: string
  shares: string
  registrationDeadline: string
  isRegistered: boolean
  isBookmarked: boolean
}

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')

  const events: Event[] = [
    {
      id: '1',
      title: 'जैविक खेती तालिम कार्यक्रम',
      titleEn: 'Organic Farming Training Program',
      description: 'जैविक खेतीका आधारभूत तरिका, मल तयारी, रोग नियन्त्रण र बजारीकरणको व्यावहारिक ज्ञान',
      descriptionEn: 'Practical knowledge of organic farming methods, fertilizer preparation, disease control and marketing',
      type: 'training',
      category: 'जैविक खेती',
      categoryEn: 'Organic Farming',
      date: '२०२४-०५-२५',
      time: '१०:०० AM',
      duration: '२ दिन',
      durationEn: '2 days',
      location: 'कृषि विश्वविद्यालय, रामपुर',
      locationEn: 'Agriculture University, Rampur',
      province: 'मधेश प्रदेश',
      provinceEn: 'Madhesh Province',
      organizer: 'कृषि विकास बोर्ड',
      organizerEn: 'Agriculture Development Board',
      organizerLogo: '/organizers/agriculture-board.jpg',
      speakers: ['डा. राम शर्मा', 'डा. सीता देवी', 'किसान विशेषज्ञ हरि अधिकारी'],
      speakersEn: ['Dr. Ram Sharma', 'Dr. Sita Devi', 'Farmer Expert Hari Adhikari'],
      maxParticipants: '५०',
      registeredParticipants: '३२',
      fee: 'निःशुल्क',
      feeEn: 'Free',
      tags: ['जैविक', 'तालिम', 'प्रविधि', 'व्यावहारिक'],
      tagsEn: ['Organic', 'Training', 'Technique', 'Practical'],
      imageUrl: '/events/organic-training.jpg',
      isOnline: false,
      isFree: true,
      featured: true,
      views: '१,२३४',
      likes: '८९',
      shares: '४५',
      registrationDeadline: '२०२४-०५-२०',
      isRegistered: false,
      isBookmarked: false
    },
    {
      id: '2',
      title: 'आधुनिक सिंचाई प्रणाली वेबिनार',
      titleEn: 'Modern Irrigation Systems Webinar',
      description: 'ड्रिप सिंचाई, स्प्रिंकलर प्रणाली र स्मार्ट सिंचाईको बारेमा अनलाइन जानकारी',
      descriptionEn: 'Online information about drip irrigation, sprinkler systems and smart irrigation',
      type: 'online',
      category: 'सिंचाई',
      categoryEn: 'Irrigation',
      date: '२०२४-०५-२८',
      time: '२:०० PM',
      duration: '२ घण्टा',
      durationEn: '2 hours',
      location: 'अनलाइन (Zoom)',
      locationEn: 'Online (Zoom)',
      province: 'सबै',
      provinceEn: 'All',
      organizer: 'सिंचाई विशेषज्ञ समूह',
      organizerEn: 'Irrigation Expert Group',
      organizerLogo: '/organizers/irrigation-group.jpg',
      speakers: ['इन्जिनियर रमेश कुमार', 'डा. अनिता जोशी'],
      speakersEn: ['Engineer Ramesh Kumar', 'Dr. Anita Joshi'],
      maxParticipants: '२००',
      registeredParticipants: '१५६',
      fee: 'रु. ५००',
      feeEn: 'Rs. 500',
      tags: ['सिंचाई', 'अनलाइन', 'ड्रिप', 'प्रविधि'],
      tagsEn: ['Irrigation', 'Online', 'Drip', 'Technology'],
      imageUrl: '/events/irrigation-webinar.jpg',
      isOnline: true,
      isFree: false,
      featured: true,
      views: '२,५६७',
      likes: '१२३',
      shares: '६७',
      registrationDeadline: '२०२४-०५-२७',
      isRegistered: true,
      isBookmarked: false
    },
    {
      id: '3',
      title: 'किसान सम्मेलन २०२४',
      titleEn: 'Farmer Conference 2024',
      description: 'नेपालका किसानहरूको ठूलो भेटघाट, नयाँ प्रविधि, बजार जानकारी र सरकारी योजनाहरू',
      descriptionEn: 'Grand meeting of Nepali farmers, new techniques, market information and government schemes',
      type: 'conference',
      category: 'सम्मेलन',
      categoryEn: 'Conference',
      date: '२०२४-०६-१०',
      time: '९:०० AM',
      duration: '१ दिन',
      durationEn: '1 day',
      location: 'भृकुटी मण्डप, काठमाडौँ',
      locationEn: 'Bhrikuti Mandap, Kathmandu',
      province: 'बाग्मती प्रदेश',
      provinceEn: 'Bagmati Province',
      organizer: 'नेपाल किसान संघ',
      organizerEn: 'Nepal Farmers Union',
      organizerLogo: '/organizers/farmers-union.jpg',
      speakers: ['कृषि मन्त्री', 'कृषि सचिव', 'वरिष्ठ किसान प्रतिनिधिहरू'],
      speakersEn: ['Agriculture Minister', 'Agriculture Secretary', 'Senior Farmer Representatives'],
      maxParticipants: '५००',
      registeredParticipants: '३४५',
      fee: 'रु. १,०००',
      feeEn: 'Rs. 1,000',
      tags: ['सम्मेलन', 'किसान', 'बैठक', 'नीति'],
      tagsEn: ['Conference', 'Farmers', 'Meeting', 'Policy'],
      imageUrl: '/events/farmer-conference.jpg',
      isOnline: false,
      isFree: false,
      featured: false,
      views: '३,८९०',
      likes: '२३४',
      shares: '१२३',
      registrationDeadline: '२०२४-०६-०५',
      isRegistered: false,
      isBookmarked: true
    },
    {
      id: '4',
      title: 'टमाटर रोग पहिचान फिल्ड डे',
      titleEn: 'Tomato Disease Detection Field Day',
      description: 'खेतमै टमाटरका रोगहरू पहिचान गर्ने र उपचार गर्ने व्यावहारिक प्रदर्शन',
      descriptionEn: 'Practical demonstration of identifying and treating tomato diseases in the field',
      type: 'field-day',
      category: 'रोग नियन्त्रण',
      categoryEn: 'Disease Control',
      date: '२०२४-०५-३०',
      time: '७:०० AM',
      duration: '४ घण्टा',
      durationEn: '4 hours',
      location: 'कृषि फार्म, धादिङ',
      locationEn: 'Agriculture Farm, Dhading',
      province: 'बाग्मती प्रदेश',
      provinceEn: 'Bagmati Province',
      organizer: 'रोग नियन्त्रण केन्द्र',
      organizerEn: 'Disease Control Center',
      organizerLogo: '/organizers/disease-center.jpg',
      speakers: ['रोग विशेषज्ञ डा. कृष्ण प्रसाद', 'अनुभवी किसान हरि बहादुर'],
      speakersEn: ['Disease Expert Dr. Krishna Prasad', 'Experienced Farmer Hari Bahadur'],
      maxParticipants: '३०',
      registeredParticipants: '२५',
      fee: 'रु. २००',
      feeEn: 'Rs. 200',
      tags: ['टमाटर', 'रोग', 'प्रदर्शन', 'खेत'],
      tagsEn: ['Tomato', 'Disease', 'Demonstration', 'Field'],
      imageUrl: '/events/tomato-field-day.jpg',
      isOnline: false,
      isFree: false,
      featured: false,
      views: '८९०',
      likes: '६७',
      shares: '२३',
      registrationDeadline: '२०२४-०५-२८',
      isRegistered: false,
      isBookmarked: false
    }
  ]

  const categories = ['सबै', 'जैविक खेती', 'सिंचाई', 'रोग नियन्त्रण', 'सम्मेलन', 'अन्नबाली', 'तरकारी खेती']
  const types = ['सबै', 'तालिम', 'सेमिनार', 'सम्मेलन', 'फिल्ड डे', 'अनलाइन']
  const provinces = ['सबै', 'कोशी प्रदेश', 'मधेश प्रदेश', 'बाग्मती प्रदेश', 'गण्डकी प्रदेश', 'लुम्बिनी प्रदेश', 'कर्णाली प्रदेश', 'सुदूरपश्चिम प्रदेश']

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || event.category === selectedCategory
    const matchesType = !selectedType || selectedType === 'सबै' ||
                       (selectedType === 'तालिम' && event.type === 'training') ||
                       (selectedType === 'सेमिनार' && event.type === 'seminar') ||
                       (selectedType === 'सम्मेलन' && event.type === 'conference') ||
                       (selectedType === 'फिल्ड डे' && event.type === 'field-day') ||
                       (selectedType === 'अनलाइन' && event.type === 'online')
    const matchesProvince = !selectedProvince || selectedProvince === 'सबै' || event.province === selectedProvince
    
    return matchesSearch && matchesCategory && matchesType && matchesProvince
  })

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'training': return 'bg-blue-100 text-blue-800'
      case 'seminar': return 'bg-green-100 text-green-800'
      case 'conference': return 'bg-purple-100 text-purple-800'
      case 'field-day': return 'bg-orange-100 text-orange-800'
      case 'online': return 'bg-cyan-100 text-cyan-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'training': return <BookOpen className="h-4 w-4" />
      case 'seminar': return <Mic className="h-4 w-4" />
      case 'conference': return <Users className="h-4 w-4" />
      case 'field-day': return <Target className="h-4 w-4" />
      case 'online': return <Video className="h-4 w-4" />
      default: return <Calendar className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'training': return 'तालिम'
      case 'seminar': return 'सेमिनार'
      case 'conference': return 'सम्मेलन'
      case 'field-day': return 'फिल्ड डे'
      case 'online': return 'अनलाइन'
      default: return type
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
            कार्यक्रमहरू
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Events
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि तालिम, सेमिनार, सम्मेलन र अन्य कार्यक्रमहरूको जानकारी
          </p>
        </motion.div>

        {/* Create Event Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-center"
        >
          <Button size="lg" className="bg-agri-green-600 hover:bg-agri-green-700">
            <Plus className="h-5 w-5 mr-2" />
            कार्यक्रम आयोजना गर्नुहोस्
          </Button>
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
              placeholder="कार्यक्रम खोज्नुहोस्... | Search events..."
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
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">प्रकार:</span>
            </div>
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
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

        {/* Featured Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Award className="h-6 w-6 mr-2 text-yellow-600" />
              विशेष कार्यक्रमहरू
            </h2>
            <Button variant="outline" size="sm">
              सबै हेर्नुहोस्
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-yellow-600 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      विशेष
                    </Badge>
                    {event.isOnline && (
                      <Badge className="absolute top-2 right-2 bg-cyan-600 text-white">
                        <Globe className="h-3 w-3 mr-1" />
                        अनलाइन
                      </Badge>
                    )}
                    {event.isFree && (
                      <Badge className="absolute bottom-2 left-2 bg-green-600 text-white">
                        निःशुल्क
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getTypeColor(event.type)}>
                        {getTypeIcon(event.type)}
                        <span className="ml-1">{getTypeLabel(event.type)}</span>
                      </Badge>
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Date and Time */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>

                    {/* Participants */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{event.registeredParticipants}/{event.maxParticipants} सहभागी</span>
                      </div>
                      <div className="font-medium">
                        {event.fee}
                      </div>
                    </div>

                    {/* Registration Deadline */}
                    <div className="text-sm text-orange-600">
                      दर्ता अन्तिम मिति: {event.registrationDeadline}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button className="flex-1" disabled={event.isRegistered}>
                        {event.isRegistered ? (
                          <>
                            <Ticket className="h-4 w-4 mr-2" />
                            दर्ता भइसक्यो
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4 mr-2" />
                            दर्ता गर्नुहोस्
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.filter(event => !event.featured).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  {event.isOnline && (
                    <Badge className="absolute top-2 right-2 bg-cyan-600 text-white">
                      <Globe className="h-3 w-3 mr-1" />
                      अनलाइन
                    </Badge>
                  )}
                  {event.isFree && (
                    <Badge className="absolute bottom-2 left-2 bg-green-600 text-white">
                      निःशुल्क
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getTypeColor(event.type)}>
                      {getTypeIcon(event.type)}
                      <span className="ml-1 text-xs">{getTypeLabel(event.type)}</span>
                    </Badge>
                    <Badge variant="secondary" className="text-xs">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Date and Time */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-1 text-sm">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span>{event.registeredParticipants}/{event.maxParticipants}</span>
                    </div>
                    <div className="font-medium text-xs">
                      {event.fee}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{event.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{event.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm" disabled={event.isRegistered}>
                      {event.isRegistered ? 'दर्ता भइसक्यो' : 'दर्ता गर्नुहोस्'}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै कार्यक्रम फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">कार्यक्रमहरूको अपडेट पाउनुहोस्</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                नयाँ कार्यक्रमहरूको जानकारी तुरुन्त पाउनका लागि सदस्यता लिनुहोस्
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="तपाईंको इमेल..."
                  className="flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  सदस्यता लिनुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
