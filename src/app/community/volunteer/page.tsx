'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Heart, 
  Share2, 
  Calendar,
  Users,
  MapPin,
  Clock,
  Award,
  Target,
  BookOpen,
  HandHeart,
  Globe,
  ChevronRight,
  Plus,
  Star,
  CheckCircle,
  AlertCircle,
  Lightbulb
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface VolunteerOpportunity {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  organization: string
  organizationEn: string
  organizationLogo: string
  category: string
  categoryEn: string
  type: 'teaching' | 'research' | 'field-work' | 'community' | 'administrative' | 'technical'
  location: string
  locationEn: string
  province: string
  provinceEn: string
  duration: string
  durationEn: string
  commitment: string
  commitmentEn: string
  skills: string[]
  skillsEn: string[]
  requirements: string[]
  requirementsEn: string[]
  benefits: string[]
  benefitsEn: string[]
  startDate: string
  endDate: string
  deadline: string
  positions: string
  filledPositions: string
  isRemote: boolean
  isPaid: boolean
  stipend: string
  stipendEn: string
  featured: boolean
  views: string
  likes: string
  shares: string
  isApplied: boolean
  isBookmarked: boolean
}

export default function Volunteer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')

  const volunteerOpportunities: VolunteerOpportunity[] = [
    {
      id: '1',
      title: 'जैविक खेती प्रशिक्षक',
      titleEn: 'Organic Farming Trainer',
      description: 'ग्रामीण किसानहरूलाई जैविक खेतीका तरिका, मल तयारी र बजारीकरणको बारेमा प्रशिक्षण दिनुहोस्',
      descriptionEn: 'Train rural farmers about organic farming methods, fertilizer preparation and marketing',
      organization: 'नेपाल जैविक कृषक संघ',
      organizationEn: 'Nepal Organic Farmers Association',
      organizationLogo: '/organizations/organic-farmers.jpg',
      category: 'जैविक खेती',
      categoryEn: 'Organic Farming',
      type: 'teaching',
      location: 'विभिन्न गाउँहरू, चितवन',
      locationEn: 'Various Villages, Chitwan',
      province: 'बाग्मती प्रदेश',
      provinceEn: 'Bagmati Province',
      duration: '६ महिना',
      durationEn: '6 months',
      commitment: 'सप्ताहमा २० घण्टा',
      commitmentEn: '20 hours per week',
      skills: ['जैविक खेती', 'प्रशिक्षण', 'सञ्चार', 'नेपाली'],
      skillsEn: ['Organic Farming', 'Teaching', 'Communication', 'Nepali'],
      requirements: ['कृषि स्नातक', '२ वर्ष अनुभव', 'ट्रेभल गर्न सक्ने'],
      requirementsEn: ['Agriculture Degree', '2 years experience', 'Able to travel'],
      benefits: ['यात्रा खर्च', 'बसो व्यवस्था', 'प्रमाणपत्र', 'सिफारिस पत्र'],
      benefitsEn: ['Travel expenses', 'Accommodation', 'Certificate', 'Letter of Recommendation'],
      startDate: '२०२४-०६-०१',
      endDate: '२०२४-१२-०१',
      deadline: '२०२४-०५-२५',
      positions: '१०',
      filledPositions: '६',
      isRemote: false,
      isPaid: false,
      stipend: 'खर्च पुर्ति',
      stipendEn: 'Expense Reimbursement',
      featured: true,
      views: '१,२३४',
      likes: '८९',
      shares: '४५',
      isApplied: false,
      isBookmarked: false
    },
    {
      id: '2',
      title: 'कृषि अनुसन्धान सहायक',
      titleEn: 'Agriculture Research Assistant',
      description: 'कृषि अनुसन्धान परियोजनामा डाटा संकलन, विश्लेषण र प्रतिवेदन तयारीमा सहयोग गर्नुहोस्',
      descriptionEn: 'Assist in agriculture research projects with data collection, analysis and report preparation',
      organization: 'कृषि अनुसन्धान केन्द्र',
      organizationEn: 'Agriculture Research Center',
      organizationLogo: '/organizations/research-center.jpg',
      category: 'अनुसन्धान',
      categoryEn: 'Research',
      type: 'research',
      location: 'ललितपुर, काठमाडौँ',
      locationEn: 'Lalitpur, Kathmandu',
      province: 'बाग्मती प्रदेश',
      provinceEn: 'Bagmati Province',
      duration: '३ महिना',
      durationEn: '3 months',
      commitment: 'सप्ताहमा ३० घण्टा',
      commitmentEn: '30 hours per week',
      skills: ['अनुसन्धान', 'डाटा विश्लेषण', 'अङ्ग्रेजी', 'कम्प्युटर'],
      skillsEn: ['Research', 'Data Analysis', 'English', 'Computer'],
      requirements: ['विज्ञान स्नातक', 'अनुसन्धान अनुभव', 'MS Office ज्ञान'],
      requirementsEn: ['Science Degree', 'Research Experience', 'MS Office knowledge'],
      benefits: ['मासिक तलब', 'अनुसन्धान प्रशिक्षण', 'प्रकाशनको अवसर', 'नेटवर्किङ'],
      benefitsEn: ['Monthly Stipend', 'Research Training', 'Publication Opportunity', 'Networking'],
      startDate: '२०२४-०६-१५',
      endDate: '२०२४-०९-१५',
      deadline: '२०२४-०५-३०',
      positions: '५',
      filledPositions: '२',
      isRemote: false,
      isPaid: true,
      stipend: 'रु. १५,०००/महिना',
      stipendEn: 'Rs. 15,000/month',
      featured: true,
      views: '२,५६७',
      likes: '१२३',
      shares: '६७',
      isApplied: true,
      isBookmarked: false
    },
    {
      id: '3',
      title: 'किसान समुदाय संयोजक',
      titleEn: 'Farmer Community Coordinator',
      description: 'किसान समुदायहरूलाई एकजुट गराउने, कार्यक्रम आयोजना गर्ने र समस्या समाधान गर्ने काम',
      descriptionEn: 'Unite farmer communities, organize programs and solve problems',
      organization: 'किसान सशक्तिकरण कार्यक्रम',
      organizationEn: 'Farmer Empowerment Program',
      organizationLogo: '/organizations/farmer-empowerment.jpg',
      category: 'समुदाय विकास',
      categoryEn: 'Community Development',
      type: 'community',
      location: 'विभिन्न स्थानहरू, नेपाल',
      locationEn: 'Various Locations, Nepal',
      province: 'सबै',
      provinceEn: 'All',
      duration: '१ वर्ष',
      durationEn: '1 year',
      commitment: 'पूर्ण-समय',
      commitmentEn: 'Full-time',
      skills: ['संयोजन', 'सञ्चार', 'समुदाय काम', 'नेपाली'],
      skillsEn: ['Coordination', 'Communication', 'Community Work', 'Nepali'],
      requirements: ['स्नातक', 'समुदाय काम अनुभव', 'यात्रा गर्न सक्ने'],
      requirementsEn: ['Bachelor Degree', 'Community Work Experience', 'Able to travel'],
      benefits: ['मासिक तलब', 'यात्रा भत्ता', 'ीमा', 'प्रशिक्षण'],
      benefitsEn: ['Monthly Salary', 'Travel Allowance', 'Insurance', 'Training'],
      startDate: '२०२४-०७-०१',
      endDate: '२०२५-०६-३०',
      deadline: '२०२४-०६-१५',
      positions: '८',
      filledPositions: '३',
      isRemote: false,
      isPaid: true,
      stipend: 'रु. २५,०००/महिना',
      stipendEn: 'Rs. 25,000/month',
      featured: false,
      views: '१,८९०',
      likes: '९८',
      shares: '४५',
      isApplied: false,
      isBookmarked: true
    },
    {
      id: '4',
      title: 'अनलाइन कृषि सल्लाहकार',
      titleEn: 'Online Agriculture Advisor',
      description: 'अनलाइन माध्यमबाट किसानहरूलाई कृषि सम्बन्धी जानकारी र सल्लाह प्रदान गर्नुहोस्',
      descriptionEn: 'Provide agriculture information and advice to farmers through online medium',
      organization: 'कृषि सूचना प्रणाली',
      organizationEn: 'Agriculture Information System',
      organizationLogo: '/organizations/info-system.jpg',
      category: 'प्राविधिक सहायता',
      categoryEn: 'Technical Support',
      type: 'technical',
      location: 'अनलाइन (घरबाट)',
      locationEn: 'Online (From Home)',
      province: 'सबै',
      provinceEn: 'All',
      duration: '६ महिना',
      durationEn: '6 months',
      commitment: 'सप्ताहमा १५ घण्टा',
      commitmentEn: '15 hours per week',
      skills: ['कृषि ज्ञान', 'अनलाइन सञ्चार', 'समस्या समाधान', 'अङ्ग्रेजी'],
      skillsEn: ['Agriculture Knowledge', 'Online Communication', 'Problem Solving', 'English'],
      requirements: ['कृषि स्नातक', 'अनलाइन सञ्चार सीप', 'इन्टरनेट पहुँच'],
      requirementsEn: ['Agriculture Degree', 'Online Communication Skills', 'Internet Access'],
      benefits: ['घरबाट काम', 'लचिलो समय', 'प्रमाणपत्र', 'सिफारिस पत्र'],
      benefitsEn: ['Work from Home', 'Flexible Hours', 'Certificate', 'Letter of Recommendation'],
      startDate: '२०२४-०६-०१',
      endDate: '२०२४-१२-०१',
      deadline: '२०२४-०५-२८',
      positions: '१५',
      filledPositions: '८',
      isRemote: true,
      isPaid: false,
      stipend: 'सम्मानपत्र',
      stipendEn: 'Honorarium',
      featured: false,
      views: '२,१००',
      likes: '१३४',
      shares: '५६',
      isApplied: false,
      isBookmarked: false
    }
  ]

  const categories = ['सबै', 'जैविक खेती', 'अनुसन्धान', 'समुदाय विकास', 'प्राविधिक सहायता', 'अन्नबाली', 'तरकारी खेती']
  const types = ['सबै', 'प्रशिक्षण', 'अनुसन्धान', 'फिल्ड काम', 'समुदाय', 'प्रशासनिक', 'प्राविधिक']
  const provinces = ['सबै', 'कोशी प्रदेश', 'मधेश प्रदेश', 'बाग्मती प्रदेश', 'गण्डकी प्रदेश', 'लुम्बिनी प्रदेश', 'कर्णाली प्रदेश', 'सुदूरपश्चिम प्रदेश']

  const filteredOpportunities = volunteerOpportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || opportunity.category === selectedCategory
    const matchesType = !selectedType || selectedType === 'सबै' ||
                       (selectedType === 'प्रशिक्षण' && opportunity.type === 'teaching') ||
                       (selectedType === 'अनुसन्धान' && opportunity.type === 'research') ||
                       (selectedType === 'फिल्ड काम' && opportunity.type === 'field-work') ||
                       (selectedType === 'समुदाय' && opportunity.type === 'community') ||
                       (selectedType === 'प्रशासनिक' && opportunity.type === 'administrative') ||
                       (selectedType === 'प्राविधिक' && opportunity.type === 'technical')
    const matchesProvince = !selectedProvince || selectedProvince === 'सबै' || opportunity.province === selectedProvince
    
    return matchesSearch && matchesCategory && matchesType && matchesProvince
  })

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'teaching': return 'bg-blue-100 text-blue-800'
      case 'research': return 'bg-purple-100 text-purple-800'
      case 'field-work': return 'bg-green-100 text-green-800'
      case 'community': return 'bg-orange-100 text-orange-800'
      case 'administrative': return 'bg-gray-100 text-gray-800'
      case 'technical': return 'bg-cyan-100 text-cyan-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'teaching': return <BookOpen className="h-4 w-4" />
      case 'research': return <Lightbulb className="h-4 w-4" />
      case 'field-work': return <Target className="h-4 w-4" />
      case 'community': return <Users className="h-4 w-4" />
      case 'administrative': return <Award className="h-4 w-4" />
      case 'technical': return <Globe className="h-4 w-4" />
      default: return <HandHeart className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'teaching': return 'प्रशिक्षण'
      case 'research': return 'अनुसन्धान'
      case 'field-work': return 'फिल्ड काम'
      case 'community': return 'समुदाय'
      case 'administrative': return 'प्रशासनिक'
      case 'technical': return 'प्राविधिक'
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
            स्वयंसेवक
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Volunteer
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि क्षेत्रमा योगदान गर्न चाहनेहरूका लागि स्वयंसेवक अवसरहरू
          </p>
        </motion.div>

        {/* Post Opportunity Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-center"
        >
          <Button size="lg" className="bg-agri-green-600 hover:bg-agri-green-700">
            <Plus className="h-5 w-5 mr-2" />
            स्वयंसेवक अवसर पोस्ट गर्नुहोस्
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
              placeholder="स्वयंसेवक अवसर खोज्नुहोस्... | Search volunteer opportunities..."
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
              <HandHeart className="h-4 w-4 text-muted-foreground" />
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

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="text-center">
            <CardContent className="pt-6">
              <HandHeart className="h-8 w-8 text-agri-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{volunteerOpportunities.length}</h3>
              <p className="text-sm text-muted-foreground">कुल अवसरहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {volunteerOpportunities.reduce((sum, opp) => sum + parseInt(opp.positions), 0)}
              </h3>
              <p className="text-sm text-muted-foreground">कुल स्थानहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {volunteerOpportunities.reduce((sum, opp) => sum + parseInt(opp.filledPositions), 0)}
              </h3>
              <p className="text-sm text-muted-foreground">भरिएका स्थानहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {[...new Set(volunteerOpportunities.map(opp => opp.organization))].length}
              </h3>
              <p className="text-sm text-muted-foreground">संस्थाहरू</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Star className="h-6 w-6 mr-2 text-yellow-600" />
              विशेष अवसरहरू
            </h2>
            <Button variant="outline" size="sm">
              सबै हेर्नुहोस्
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredOpportunities.filter(opp => opp.featured).map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getTypeColor(opportunity.type)}>
                            {getTypeIcon(opportunity.type)}
                            <span className="ml-1">{getTypeLabel(opportunity.type)}</span>
                          </Badge>
                          <Badge variant="secondary">{opportunity.category}</Badge>
                          {opportunity.isRemote && (
                            <Badge className="bg-cyan-100 text-cyan-800">
                              <Globe className="h-3 w-3 mr-1" />
                              अनलाइन
                            </Badge>
                          )}
                          {opportunity.isPaid && (
                            <Badge className="bg-green-100 text-green-800">
                              तलब
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl line-clamp-2 mb-2">
                          {opportunity.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {opportunity.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Organization */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Award className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{opportunity.organization}</p>
                        <p className="text-xs text-muted-foreground">{opportunity.location}</p>
                      </div>
                    </div>

                    {/* Duration and Commitment */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{opportunity.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span>{opportunity.commitment}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <p className="text-sm font-medium mb-2">आवश्यक सीपहरू:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {opportunity.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{opportunity.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Positions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {opportunity.filledPositions}/{opportunity.positions} स्थान भरिएको
                        </span>
                      </div>
                      <div className="text-sm font-medium">
                        {opportunity.stipend}
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="text-sm text-orange-600">
                      आवेदन अन्तिम मिति: {opportunity.deadline}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button className="flex-1" disabled={opportunity.isApplied}>
                        {opportunity.isApplied ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            आवेदन भइसक्यो
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4 mr-2" />
                            आवेदन गर्नुहोस्
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

        {/* All Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.filter(opp => !opp.featured).map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getTypeColor(opportunity.type)}>
                      {getTypeIcon(opportunity.type)}
                      <span className="ml-1 text-xs">{getTypeLabel(opportunity.type)}</span>
                    </Badge>
                    <Badge variant="secondary" className="text-xs">{opportunity.category}</Badge>
                    {opportunity.isRemote && (
                      <Badge className="bg-cyan-100 text-cyan-800 text-xs">
                        <Globe className="h-3 w-3 mr-1" />
                        अनलाइन
                      </Badge>
                    )}
                    {opportunity.isPaid && (
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        तलब
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2 mb-2">
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Organization */}
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <Award className="h-3 w-3 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">{opportunity.organization}</p>
                      <p className="text-xs text-muted-foreground">{opportunity.location}</p>
                    </div>
                  </div>

                  {/* Duration and Commitment */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span>{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3 text-muted-foreground" />
                      <span>{opportunity.commitment}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {opportunity.skills.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {opportunity.skills.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{opportunity.skills.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Positions */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span>{opportunity.filledPositions}/{opportunity.positions}</span>
                    </div>
                    <div className="font-medium">
                      {opportunity.stipend}
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="text-xs text-orange-600">
                    अन्तिम मिति: {opportunity.deadline}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1" size="sm" disabled={opportunity.isApplied}>
                      {opportunity.isApplied ? 'आवेदन भइसक्यो' : 'आवेदन गर्नुहोस्'}
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
        {filteredOpportunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <HandHeart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै स्वयंसेवक अवसर फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-agri-green-50 to-blue-50 dark:from-agri-green-950 dark:to-blue-950 border-agri-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">स्वयंसेवक बन्नुहोस्, परिवर्तन ल्याउनुहोस्</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                तपाईंको समय र सीपले कृषि क्षेत्रमा ठूलो परिवर्तन ल्याउन सक्छ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-agri-green-600 hover:bg-agri-green-700">
                  <HandHeart className="h-4 w-4 mr-2" />
                  स्वयंसेवक खोज्नुहोस्
                </Button>
                <Button variant="outline">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  स्वयंसेवक बारे बढी जान्नुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
