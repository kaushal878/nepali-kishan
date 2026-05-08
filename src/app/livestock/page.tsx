'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Plus, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Syringe,
  Weight,
  Activity,
  Filter,
  Download,
  RefreshCw,
  Edit,
  Trash2,
  TrendingUp,
  Clock,
  MapPin,
  DollarSign,
  Users
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { LIVESTOCK_TYPES } from '@/lib/constants'

interface LivestockItem {
  id: string
  type: string
  typeEn: string
  breed: string
  breedEn: string
  count: number
  age: number
  weight: number
  health: 'healthy' | 'sick' | 'recovering' | 'critical'
  location: string
  purchaseDate: string
  purchaseCost: number
  expectedYield: string
  expectedYieldEn: string
  marketValue: number
  notes: string
  vaccinations: Vaccination[]
  feedType: string
  feedTypeEn: string
  feedCost: number
  lastCheckup: string
  nextCheckup: string
  image?: string
}

interface Vaccination {
  id: string
  name: string
  nameEn: string
  date: string
  nextDue: string
  veterinarian: string
  veterinarianEn: string
  cost: number
  notes: string
}

interface HealthTip {
  id: string
  animal: string
  animalEn: string
  season: string
  seasonEn: string
  symptoms: string[]
  symptomsEn: string[]
  prevention: string[]
  preventionEn: string[]
  treatment: string
  treatmentEn: string
  urgency: 'low' | 'medium' | 'high'
}

export default function LivestockManagement() {
  const [livestock, setLivestock] = useState<LivestockItem[]>([])
  const [filteredLivestock, setFilteredLivestock] = useState<LivestockItem[]>([])
  const [healthTips, setHealthTips] = useState<HealthTip[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedHealth, setSelectedHealth] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  useState(() => {
    // Initialize with mock data
    const mockLivestock: LivestockItem[] = [
      {
        id: '1',
        type: 'गाई',
        typeEn: 'Cow',
        breed: 'जर्सी',
        breedEn: 'Jersey',
        count: 5,
        age: 36,
        weight: 450,
        health: 'healthy',
        location: 'खेत नं. १',
        purchaseDate: '२०२१-०१-१५',
        purchaseCost: 25000,
        expectedYield: 'दुध १५ लिटर/दिन',
        expectedYieldEn: '15 liters milk/day',
        marketValue: 180000,
        notes: 'राम्रो दुध उत्पादन गर्ने',
        vaccinations: [
          {
            id: '1',
            name: 'फुट एण्ड माउथ',
            nameEn: 'Foot and Mouth',
            date: '२०२३-१२-०१',
            nextDue: '२०२४-१२-०१',
            veterinarian: 'डा. राम शर्मा',
            veterinarianEn: 'Dr. Ram Sharma',
            cost: 500,
            notes: 'सफलत भैक्सिनेसन'
          }
        ],
        feedType: 'घाउँ खुरानी, भुसा, चोकी',
        feedTypeEn: 'Local grass, husk, chaff',
        feedCost: 1500,
        lastCheckup: '२०२३-११-१५',
        nextCheckup: '२०२४-०२-१५'
      },
      {
        id: '2',
        type: 'भैंसी',
        typeEn: 'Buffalo',
        breed: 'मुर्रा',
        breedEn: 'Murrah',
        count: 3,
        age: 48,
        weight: 600,
        health: 'healthy',
        location: 'खेत नं. २',
        purchaseDate: '२०२०-०६-१०',
        purchaseCost: 45000,
        expectedYield: 'दुध १२ लिटर/दिन',
        expectedYieldEn: '12 liters milk/day',
        marketValue: 150000,
        notes: 'अझै दुध उत्पादन',
        vaccinations: [
          {
            id: '2',
            name: 'एन्थ्राक्स',
            nameEn: 'Anthrax',
            date: '२०२३-१०-०५',
            nextDue: '२०२४-१०-०५',
            veterinarian: 'डा. सीता गुरुङ',
            veterinarianEn: 'Dr. Sita Gurung',
            cost: 600,
            notes: 'वार्षिक भैक्सिन'
          }
        ],
        feedType: 'घाउँ खुरानी, भुसा',
        feedTypeEn: 'Local grass, husk',
        feedCost: 1200,
        lastCheckup: '२०२३-१०-२०',
        nextCheckup: '२०२४-०१-२०'
      },
      {
        id: '3',
        type: 'बाख्रा',
        typeEn: 'Goat',
        breed: 'जमुनापारी',
        breedEn: 'Jamunapari',
        count: 12,
        age: 24,
        weight: 45,
        health: 'sick',
        location: 'खेत नं. ३',
        purchaseDate: '२०२२-०८-०५',
        purchaseCost: 18000,
        expectedYield: 'बच्चा २ के.ग्रा/दिन',
        expectedYieldEn: '2 kg milk/day',
        marketValue: 72000,
        notes: 'खोकिरो उपचारमा',
        vaccinations: [
          {
            id: '3',
            name: 'पी.पी.आर',
            nameEn: 'PPR',
            date: '२०२३-०९-१०',
            nextDue: '२०२४-०९-१०',
            veterinarian: 'डा. हरि बहादुर',
            veterinarianEn: 'Dr. Hari Bahadur',
            cost: 300,
            notes: 'वार्षिक भैक्सिन'
          }
        ],
        feedType: 'घाउँ खुरानी, अन्न, चोकी',
        feedTypeEn: 'Local grass, grains, chaff',
        feedCost: 800,
        lastCheckup: '२०२३-११-२५',
        nextCheckup: '२०२३-११-३०'
      }
    ]

    const mockHealthTips: HealthTip[] = [
      {
        id: '1',
        animal: 'गाई',
        animalEn: 'Cow',
        season: 'शीतोष्ण',
        seasonEn: 'Winter',
        symptoms: ['खाँसी', 'खोकिनो', 'घटाउने'],
        symptomsEn: ['Coughing', 'Sneezing', 'Watery eyes'],
        prevention: ['गर्म बसाउने', 'पौष्टिक आहारा', 'नियमित सफा'],
        preventionEn: ['Warm shelter', 'Organic feed', 'Regular cleaning'],
        treatment: 'गुलाफो रस दिनुहोस्',
        treatmentEn: 'Give turmeric solution',
        urgency: 'medium'
      },
      {
        id: '2',
        animal: 'बाख्रा',
        animalEn: 'Goat',
        season: 'वर्षा',
        seasonEn: 'Monsoon',
        symptoms: ['पेट दुख्ने', 'दिसा आउने', 'भोक नखाने'],
        symptomsEn: ['Stomach pain', 'Diarrhea', 'Not eating'],
        prevention: ['सुख्खा खाना', 'सफा पानी', 'नियमित टीका'],
        preventionEn: ['Dry feed', 'Clean water', 'Regular deworming'],
        treatment: 'ओरल रिहाइड्रेशन दिनुहोस्',
        treatmentEn: 'Give oral rehydration',
        urgency: 'high'
      }
    ]

    setLivestock(mockLivestock)
    setHealthTips(mockHealthTips)
    setLoading(false)
  })

  useState(() => {
    filterLivestock()
  }, [livestock, selectedType, selectedHealth, searchTerm])

  const filterLivestock = () => {
    let filtered = [...livestock]

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType)
    }

    // Filter by health status
    if (selectedHealth !== 'all') {
      filtered = filtered.filter(item => item.health === selectedHealth)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredLivestock(filtered)
  }

  const refreshData = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 1000)
  }

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'healthy': return 'bg-green-500'
      case 'sick': return 'bg-red-500'
      case 'recovering': return 'bg-yellow-500'
      case 'critical': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  const getHealthText = (health: string) => {
    switch (health) {
      case 'healthy': return 'स्वस्थ'
      case 'sick': return 'बिरामी'
      case 'recovering': return 'स्वस्थ हुँदै'
      case 'critical': return 'गम्भीर'
      default: return 'अज्ञात'
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'low': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'high': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getLivestockIcon = (type: string) => {
    const livestock = LIVESTOCK_TYPES.find(l => l.name === type)
    return livestock?.icon || '🐄'
  }

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
            🐄 पशुपालन व्यवस्थापन | Livestock Management
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            तपाईंको पशुपालनको स्वास्थ्य, खाना र उत्पादन व्यवस्थापन गर्नुहोस्
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" variant="earth" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Summary Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-agri-green-600">
                    {livestock.reduce((sum, item) => sum + item.count, 0)}
                  </div>
                  <p className="text-sm text-muted-foreground">कुल जनावर</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {livestock.filter(item => item.health === 'healthy').length}
                  </div>
                  <p className="text-sm text-muted-foreground">स्वस्थ जनावर</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {livestock.filter(item => item.health === 'sick').length}
                  </div>
                  <p className="text-sm text-muted-foreground">बिरामी जनावर</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    रु. {livestock.reduce((sum, item) => sum + item.marketValue, 0).toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">कुल बजार मूल्य</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Search */}
                    <div className="flex-1 min-w-[200px]">
                      <div className="relative">
                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="खोज्नुहोस्..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Type Filter */}
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="px-3 py-2 border rounded-md"
                    >
                      <option value="all">सबै प्रकार</option>
                      {LIVESTOCK_TYPES.map((type) => (
                        <option key={type.id} value={type.name}>
                          {type.name}
                        </option>
                      ))}
                    </select>

                    {/* Health Filter */}
                    <select
                      value={selectedHealth}
                      onChange={(e) => setSelectedHealth(e.target.value)}
                      className="px-3 py-2 border rounded-md"
                    >
                      <option value="all">सबै स्वास्थ्य</option>
                      <option value="healthy">स्वस्थ</option>
                      <option value="sick">बिरामी</option>
                      <option value="recovering">स्वस्थ हुँदै</option>
                      <option value="critical">गम्भीर</option>
                    </select>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={refreshData}
                        disabled={refreshing}
                      >
                        <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                        रिफ्रेस
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        डाउनलोड
                      </Button>
                      <Button variant="agri" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        नयाँ थप्नुहोस्
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Livestock Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLivestock.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">
                              {getLivestockIcon(item.type)}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{item.type}</CardTitle>
                              <CardDescription className="text-sm">
                                {item.breed} • {item.count} वट
                              </CardDescription>
                            </div>
                          </div>
                          <Badge className={`${getHealthColor(item.health)} text-white`}>
                            {getHealthText(item.health)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Weight className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">औसत</p>
                              <p className="font-medium">{item.weight} के.ग्रा</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">उमेर</p>
                              <p className="font-medium">{item.age} महिना</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">स्थान</p>
                              <p className="font-medium">{item.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">बजार मूल्य</p>
                              <p className="font-medium">रु. {item.marketValue.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium mb-2">उत्पादन:</h5>
                            <p className="text-sm text-muted-foreground">{item.expectedYield}</p>
                          </div>

                          <div>
                            <h5 className="text-sm font-medium mb-2">खाना लागत:</h5>
                            <p className="text-sm text-muted-foreground">
                              रु. {item.feedCost.toLocaleString()}/महिना
                            </p>
                          </div>

                          {item.vaccinations.length > 0 && (
                            <div>
                              <h5 className="text-sm font-medium mb-2 flex items-center">
                                <Syringe className="h-3 w-3 mr-2 text-blue-500" />
                                भैक्सिनेसन:
                              </h5>
                              <div className="space-y-1">
                                {item.vaccinations.slice(0, 2).map((vaccination, i) => (
                                  <div key={i} className="flex items-center justify-between text-sm">
                                    <span>{vaccination.name}</span>
                                    <span className="text-muted-foreground">
                                      {vaccination.nextDue}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>अगला जाँच: {item.lastCheckup}</span>
                            <span>अर्को जाँच: {item.nextCheckup}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="h-3 w-3 mr-1" />
                              सम्पादन
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Activity className="h-3 w-3 mr-1" />
                              स्वास्थ जाँच
                            </Button>
                            <Button variant="agri" size="sm" className="flex-1">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              उत्पादन
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Health Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>स्वास्थ्य सुझावहरू</span>
                  </CardTitle>
                  <CardDescription>
                    पशुपालनको स्वास्थ्य र रोग नियन्त्रण गर्न सुझावहरू
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {healthTips.map((tip, index) => (
                      <div key={tip.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{tip.animal}</h4>
                          <Badge className={`${getUrgencyColor(tip.urgency)} text-white text-xs`}>
                            {tip.urgency === 'high' && 'उच्च'}
                            {tip.urgency === 'medium' && 'मध्यम'}
                            {tip.urgency === 'low' && 'कम'}
                          </Badge>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-2">{tip.season} मौसम</h5>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-medium mb-1">लक्षणहरू:</p>
                              <ul className="text-xs space-y-1">
                                {tip.symptoms.map((symptom, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1 mr-2" />
                                    {symptom}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <p className="text-xs font-medium mb-1">रोकथाम:</p>
                              <ul className="text-xs space-y-1">
                                {tip.prevention.map((prevention, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 mr-2" />
                                    {prevention}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <p className="text-xs font-medium mb-1">उपचार:</p>
                              <p className="text-xs">{tip.treatment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">छिटो कार्यहरू</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Users className="h-6 w-6 mb-2" />
                      <span>पशुपालन जोड्नुहोस्</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Syringe className="h-6 w-6 mb-2" />
                      <span>भैक्सिन रिमाइन्डर</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <DollarSign className="h-6 w-6 mb-2" />
                      <span>बजार विश्लेषण</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
