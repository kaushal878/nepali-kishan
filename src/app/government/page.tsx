'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building, 
  FileText, 
  Phone, 
  MapPin, 
  Calendar,
  DollarSign,
  Users,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Download,
  ExternalLink,
  Search,
  Filter,
  Clock,
  Target,
  Award
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface GovernmentScheme {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  category: 'subsidy' | 'loan' | 'insurance' | 'training' | 'equipment' | 'infrastructure'
  ministry: string
  ministryEn: string
  eligibility: string[]
  eligibilityEn: string[]
  benefits: string[]
  benefitsEn: string[]
  applicationProcess: string
  applicationProcessEn: string
  requiredDocuments: string[]
  requiredDocumentsEn: string[]
  deadline?: string
  contactPerson: string
  contactPersonEn: string
  phone: string
  email: string
  website: string
  amount?: string
  amountEn?: string
  status: 'active' | 'closed' | 'upcoming'
  priority: 'high' | 'medium' | 'low'
  targetGroup: string[]
  targetGroupEn: string[]
}

interface AgricultureOffice {
  id: string
  name: string
  nameEn: string
  type: 'regional' | 'district' | 'municipal'
  province: string
  district: string
  address: string
  addressEn: string
  phone: string
  email: string
  headOfOffice: string
  headOfOfficeEn: string
  services: string[]
  servicesEn: string[]
  workingHours: string
  workingHoursEn: string
  coordinates: {
    lat: number
    lng: number
  }
}

export default function GovernmentSupport() {
  const [schemes, setSchemes] = useState<GovernmentScheme[]>([])
  const [offices, setOffices] = useState<AgricultureOffice[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedScheme, setSelectedScheme] = useState<GovernmentScheme | null>(null)

  useState(() => {
    // Initialize with mock data
    const mockSchemes: GovernmentScheme[] = [
      {
        id: '1',
        title: 'कृषक कल्याण अनुदान',
        titleEn: 'Agriculture Grant Program',
        description: 'साना कृषकहरूलाई आधुनिक कृषि प्रविधि अपनाउनका लागि आर्थिक सहयोग',
        descriptionEn: 'Financial support for small farmers to adopt modern farming techniques',
        category: 'subsidy',
        ministry: 'कृषि विकास मन्त्रालय',
        ministryEn: 'Ministry of Agriculture Development',
        eligibility: [
          'नेपाली नागरिक हुनुपर्ने',
          'साना कृषक (२ हेक्टर सम्म जग्गा)',
          'कृषि पेशा गर्दै आएको वर्ष',
          'कृषि सम्बन्धित तालिमा प्रमाण पत्र',
          'कृषि सहकारी संस्थाको सदस्य'
        ],
        eligibilityEn: [
          'Nepali citizen',
          'Small farmer (less than 2 hectares)',
          'Farming for at least 1 year',
          'Agriculture related certificate',
          'Cooperative membership'
        ],
        benefits: [
          'अधिकतम रु. ५०,००० प्रति किसान',
          'आधुनिक उपकरण किट खरिद',
          'प्रशिक्षण र प्रशिक्षण',
          'बीमा अनुदान',
          'बजार पहुँच सहयोग'
        ],
        benefitsEn: [
          'Up to Rs. 50,000 per farmer',
          'Modern equipment subsidy',
          'Training and extension services',
          'Insurance grant',
          'Market access support'
        ],
        applicationProcess: 'अनलाइन आवेदन, कागजात प्रक्रिया, साक्षात्कारण',
        applicationProcessEn: 'Online application, document verification, field visit',
        requiredDocuments: [
          'नागरिकता प्रमाण पत्र',
          'कृषि पेशा प्रमाण पत्र',
          'जग्गा दस्तावेज',
          'कर भुक्तानी प्रमाण',
          'सहकारी सदस्य',
          'बैंक खाता विवरण'
        ],
        requiredDocumentsEn: [
          'Citizenship certificate',
          'Farmers certificate',
          'Land ownership documents',
          'Tax clearance certificate',
          'Cooperative membership',
          'Bank statement'
        ],
        deadline: '२०२४ चैत्र अन्त्य',
        contactPerson: 'कृषि अधिकारी',
        contactPersonEn: 'Agriculture Officer',
        phone: '०१-४२१२३४',
        email: 'grant@agri.gov.np',
        website: 'www.agri.gov.np/grants',
        amount: 'रु. ५०,०००',
        amountEn: 'Rs. 50,000',
        status: 'active',
        priority: 'high',
        targetGroup: ['साना कृषकहरू', 'विकासशील क्षेत्रहरू'],
        targetGroupEn: ['Small farmers', 'Developing regions']
      },
      {
        id: '2',
        title: 'कृषि ऋण योजना',
        titleEn: 'Agriculture Loan Scheme',
        description: 'कम ब्याजदरमा कृषकहरूलाई ऋण प्रदान गर्ने कार्यक्रम',
        descriptionEn: 'Low-interest loan program for farmers',
        category: 'loan',
        ministry: 'वित्त मन्त्रालय',
        ministryEn: 'Ministry of Finance',
        eligibility: [
          '१८ वर्ष भन्दा माथि',
          'आम्दानी श्रोतको व्यवसाय',
          'कृषि वा पशुपालन पेशा',
          'ऋण चुकाउन सक्ने क्षमता',
          'जमानत मान्य जग्गा वा सम्पत्ति'
        ],
        eligibilityEn: [
          'Above 18 years',
          'Regular income source',
          'Farming or livestock business',
          'Loan repayment capacity',
          'Collateral (land or assets)'
        ],
        benefits: [
          '५% ब्याजदर',
          'अधिकतम रु. १० लाख ऋण',
          '५ वर्षसम्म चुकौनी अवधि',
          'ऋण प्रक्रियामा सरलो प्रक्रिया',
          'बीमा र जामानत सुविधा'
        ],
        benefitsEn: [
          '5% interest rate',
          'Up to Rs. 1 million loan',
          '5 year repayment period',
          'Simple loan process',
          'Insurance and guarantee facilities'
        ],
        applicationProcess: 'बैंक आवेदन, कागजात प्रक्रिया, ऋण स्वीकृति',
        applicationProcessEn: 'Bank application, document verification, loan approval',
        requiredDocuments: [
          'नागरिकता प्रमाण पत्र',
          'आम्दानी प्रमाण',
          'जग्गा दस्तावेज',
          'बैंक खाता विवरण',
          'व्यवसाय प्रमाण',
          'जामानत विवरण'
        ],
        requiredDocumentsEn: [
          'Citizenship certificate',
          'Income certificate',
          'Land ownership documents',
          'Bank statement',
          'Business registration',
          'Guarantor documents'
        ],
        contactPerson: 'ऋण अधिकारी',
        contactPersonEn: 'Loan Officer',
        phone: '०१-४२१५६७८',
        email: 'loan@agriculturebank.com.np',
        website: 'www.agriculturebank.com.np',
        amount: 'रु. १० लाख',
        amountEn: 'Rs. 1 million',
        status: 'active',
        priority: 'high',
        targetGroup: ['सबै कृषकहरू', 'पशुपालकहरू'],
        targetGroupEn: ['All farmers', 'Livestock owners']
      },
      {
        id: '3',
        title: 'कृषि बीमा योजना',
        titleEn: 'Crop Insurance Program',
        description: 'प्राकृतिक विपदाबाट बाट बच्न कृषकहरूलाई बीमा सुविधा',
        descriptionEn: 'Insurance protection for farmers against natural disasters',
        category: 'insurance',
        ministry: 'वित्त मन्त्रालय',
        ministryEn: 'Ministry of Finance',
        eligibility: [
          'पंजीकृत कृषक',
          'बीमा योग्य क्षेत्रमा खेती',
          'उत्पादन रेकर्ड',
          'बीमा प्रिमियम तिर्न सक्ने'
        ],
        eligibilityEn: [
          'Registered farmer',
          'Farming in insured area',
          'Production records',
          'Able to pay premium'
        ],
        benefits: [
          'प्राकृतिक विपदाबाटको ८०% क्षतिपूर्ति',
          'बाढीवाला खर्चमा सरकार सहयोग',
          'छिटो दावा प्रक्रिया',
          'सरकारी अनुशासन',
          'विशेषज विशेषज सेवा'
        ],
        benefitsEn: [
          '80% compensation for natural disasters',
          'Government premium subsidy',
          'Quick claim processing',
          'Technical assistance',
          'Expert consultation services'
        ],
        applicationProcess: 'बीमा कम्पनीमा आवेदन, खेत निरीक्षण, बीमा प्रिमियम भुक्तानी',
        applicationProcessEn: 'Insurance company application, field inspection, premium payment',
        requiredDocuments: [
          'कृषक परिचय पत्र',
          'खेत दस्तावेज',
          'उत्पादन रेकर्ड',
          'आधार कागजात',
          'बैंक विवरण'
        ],
        requiredDocumentsEn: [
          'Farmer identity card',
          'Land documents',
          'Production records',
          'Previous year documents',
          'Bank details'
        ],
        contactPerson: 'बीमा अधिकारी',
        contactPersonEn: 'Insurance Officer',
        phone: '०१-४२१९८७६',
        email: 'insurance@cropinsurance.gov.np',
        website: 'www.cropinsurance.gov.np',
        amount: 'वार्षिक प्रिमियमको २%',
        amountEn: '2% of annual premium',
        status: 'active',
        priority: 'medium',
        targetGroup: ['सबै कृषकहरू'],
        targetGroupEn: ['All farmers']
      }
    ]

    const mockOffices: AgricultureOffice[] = [
      {
        id: '1',
        name: 'कृषि विकास निर्देशकालय कार्यालय',
        nameEn: 'Directorate of Agriculture Development',
        type: 'regional',
        province: 'बाग्मती प्रदेश',
        district: 'काठमाडौँ',
        address: 'कृषि मन्त्रालय, सिंहदरबार, काठमाडौँ',
        addressEn: 'Ministry of Agriculture, Singha Durbar, Kathmandu',
        phone: '०१-४२११२३४',
        email: 'info@agri.gov.np',
        headOfOffice: 'कृषि सचिव',
        headOfOfficeEn: 'Agriculture Secretary',
        services: [
          'कृषि नीति निर्माण',
          'योजना कार्यान्वयन',
          'अनुदान वितरण',
          'अनुसन्धान सेवा',
          'अनुसन्धान अनुसन्धान'
        ],
        servicesEn: [
          'Agriculture policy formulation',
          'Program implementation',
          'Grant distribution',
          'Extension services',
          'Research coordination'
        ],
        workingHours: 'सोमवार-शुक्रबार १०:००-१७:००',
        workingHoursEn: 'Sunday-Friday 10:00-17:00',
        coordinates: { lat: 27.7172, lng: 85.3240 }
      },
      {
        id: '2',
        name: 'काठमाडौँ कृषि विकास कार्यालय',
        nameEn: 'Kathmandu Agriculture Development Office',
        type: 'district',
        province: 'बाग्मती प्रदेश',
        district: 'काठमाडौँ',
        address: 'काठमाडौँ, नयबजार',
        addressEn: 'New Baneshwor, Kathmandu',
        phone: '०१-४४१२३४५',
        email: 'kathmandu@agri.gov.np',
        headOfOffice: 'जिल्ला कृषि विकास अधिकारी',
        headOfOfficeEn: 'District Agriculture Development Officer',
        services: [
          'कृषक परिचय पत्र जारी',
          'उपकरण किट वितरण',
          'प्रशिक्षण आयोजना',
          'बाली सुझाव',
          'रोग नियन्त्रण'
        ],
        servicesEn: [
          'Farmer ID card issuance',
          'Equipment kit distribution',
          'Training programs',
          'Crop recommendations',
          'Disease control'
        ],
        workingHours: 'सोमवार-शुक्रबार ९:००-१७:००',
        workingHoursEn: 'Sunday-Friday 09:00-17:00',
        coordinates: { lat: 27.7172, lng: 85.3240 }
      }
    ]

    setSchemes(mockSchemes)
    setOffices(mockOffices)
    setLoading(false)
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'subsidy': return 'bg-green-500'
      case 'loan': return 'bg-blue-500'
      case 'insurance': return 'bg-purple-500'
      case 'training': return 'bg-yellow-500'
      case 'equipment': return 'bg-orange-500'
      case 'infrastructure': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getCategoryText = (category: string) => {
    switch (category) {
      case 'subsidy': return 'अनुदान'
      case 'loan': return 'ऋण'
      case 'insurance': return 'बीमा'
      case 'training': return 'प्रशिक्षण'
      case 'equipment': return 'उपकरण'
      case 'infrastructure': return 'पूर्वाधार'
      default: return 'अन्य'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'closed': return 'bg-red-500'
      case 'upcoming': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'सक्रिय'
      case 'closed': return 'बन्द'
      case 'upcoming': return 'आगामी'
      default: return 'अज्ञात'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'उच्च'
      case 'medium': return 'मध्यम'
      case 'low': return 'कम'
      default: return 'अज्ञात'
    }
  }

  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.titleEn.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <MainLayout>
      <div className="container px-4 py-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🏛️ सरकारी सहयोग | Government Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            नेपाल सरकारबाट कृषकहरूलाई उपलब्ध हुने योजना, अनुदान र सेवाहरू
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" variant="earth" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Search */}
                    <div className="flex-1 min-w-[200px]">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="योजना खोज्नुहोस्..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Category Filter */}
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border rounded-md"
                    >
                      <option value="all">सबै वर्ग</option>
                      <option value="subsidy">अनुदान</option>
                      <option value="loan">ऋण</option>
                      <option value="insurance">बीमा</option>
                      <option value="training">प्रशिक्षण</option>
                      <option value="equipment">उपकरण</option>
                      <option value="infrastructure">पूर्वाधार</option>
                    </select>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        फिल्टर
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        डाउनलोड
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Schemes Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSchemes.map((scheme, index) => (
                  <motion.div
                    key={scheme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedScheme(scheme)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className={`${getCategoryColor(scheme.category)} text-white text-xs`}>
                                {getCategoryText(scheme.category)}
                              </Badge>
                              <Badge className={`${getPriorityColor(scheme.priority)} text-white text-xs`}>
                                {getPriorityText(scheme.priority)}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg">{scheme.title}</CardTitle>
                            <CardDescription className="text-sm">{scheme.titleEn}</CardDescription>
                          </div>
                          <div className="flex flex-col items-end space-y-1">
                            <Badge className={`${getStatusColor(scheme.status)} text-white text-xs`}>
                              {getStatusText(scheme.status)}
                            </Badge>
                            {scheme.deadline && (
                              <div className="text-xs text-muted-foreground flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {scheme.deadline}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {scheme.description}
                        </p>
                        
                        {scheme.amount && (
                          <div className="mb-4">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="h-4 w-4 text-green-500" />
                              <span className="font-semibold text-green-600">{scheme.amount}</span>
                            </div>
                          </div>
                        )}

                        <div className="space-y-2">
                          <div>
                            <h5 className="text-sm font-medium mb-1">योग्य वर्ग:</h5>
                            <div className="flex flex-wrap gap-1">
                              {scheme.targetGroup.slice(0, 2).map((group, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {group}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">मुख्य लाभहरू:</h5>
                            <ul className="text-xs space-y-1">
                              {scheme.benefits.slice(0, 3).map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">
                              <Building className="h-3 w-3 inline mr-1" />
                              {scheme.ministry}
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              विस्तृत जानकारी
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Agriculture Offices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>कृषि कार्यालयहरू</span>
                  </CardTitle>
                  <CardDescription>
                    तपाईंको नजिकको कृषि विकास कार्यालय र सम्पर्क सूचना
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {offices.map((office, index) => (
                      <motion.div
                        key={office.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{office.name}</h4>
                              <p className="text-sm text-muted-foreground">{office.nameEn}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {office.type === 'regional' && 'प्रदेशिय'}
                              {office.type === 'district' && 'जिल्ला'}
                              {office.type === 'municipal' && 'नगरपालिका'}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div>
                                <p className="text-sm">{office.address}</p>
                                <p className="text-xs text-muted-foreground">{office.addressEn}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start space-x-2">
                              <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <p className="text-sm">{office.phone}</p>
                            </div>
                            
                            <div className="flex items-start space-x-2">
                              <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div>
                                <p className="text-sm">{office.headOfOffice}</p>
                                <p className="text-xs text-muted-foreground">{office.headOfOfficeEn}</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pt-3 border-t">
                            <h5 className="text-sm font-medium mb-2">सेवाहरू:</h5>
                            <div className="flex flex-wrap gap-1">
                              {office.services.slice(0, 3).map((service, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 inline mr-1" />
                            {office.workingHours}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Application Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>आवेदन सुझावहरू</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h5 className="font-medium flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        आवदेन गर्नुअघि
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2" />
                          <span>आवश्यक कागजातहरू तयार गर्नुहोस्</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2" />
                          <span>अनलाइन आवेदन गर्नुहोस्</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2" />
                          <span>आवेदन मिति अघि जाँच गर्नुहोस्</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                        ध्यान दिनुपर्ने कुराहरू
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-1 mr-2" />
                          <span>नक्कल आवेदन नगर्नुहोस्</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-1 mr-2" />
                          <span>मिति समाप्ति गर्नुहोस्</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-1 mr-2" />
                          <span>अनुशासन अनुसार तयार गर्नुहोस्</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}

        {/* Scheme Detail Modal */}
        {selectedScheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedScheme(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-background rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{selectedScheme.title}</h3>
                <Button variant="outline" size="sm" onClick={() => setSelectedScheme(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">विवरण</h4>
                  <p className="text-sm text-muted-foreground">{selectedScheme.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">योग्यता</h4>
                  <ul className="text-sm space-y-1">
                    {selectedScheme.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">लाभहरू</h4>
                  <ul className="text-sm space-y-1">
                    {selectedScheme.benefits.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">आवश्यक कागजातहरू</h4>
                  <ul className="text-sm space-y-1">
                    {selectedScheme.requiredDocuments.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">सम्पर्क जानकारी</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>सम्पर्क व्यक्ति:</strong> {selectedScheme.contactPerson}</p>
                    <p><strong>फोन:</strong> {selectedScheme.phone}</p>
                    <p><strong>इमेल:</strong> {selectedScheme.email}</p>
                    <p><strong>वेबसाइट:</strong> {selectedScheme.website}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-agri-green-500 hover:bg-agri-green-600">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    आवेदन गर्नुहोस्
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    जानकारी डाउनलोड गर्नुहोस्
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  )
}
