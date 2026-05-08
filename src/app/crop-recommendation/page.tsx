'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sprout, 
  MapPin, 
  Droplets, 
  Thermometer, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info,
  Filter,
  Download
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { NEPALI_PROVINCES, NEPALI_DISTRICTS, PROVINCE_DISTRICTS, CROP_TYPES, SEASONS, SOIL_TYPES } from '@/lib/constants'

interface CropRecommendation {
  id: string
  name: string
  nameEn: string
  type: string
  icon: string
  suitability: number
  growingPeriod: string
  growingPeriodEn: string
  expectedYield: string
  expectedYieldEn: string
  profit: string
  profitEn: string
  difficulty: 'easy' | 'medium' | 'hard'
  waterRequirement: 'low' | 'medium' | 'high'
  climate: string[]
  soil: string[]
  benefits: string[]
  benefitsEn: string[]
  risks: string[]
  risksEn: string[]
}

export default function CropRecommendation() {
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedSoil, setSelectedSoil] = useState('')
  const [altitude, setAltitude] = useState('')
  const [waterAvailability, setWaterAvailability] = useState('')
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateRecommendations = async () => {
    setIsGenerating(true)
    
    // Simulate AI-based recommendation generation
    setTimeout(() => {
      const mockRecommendations: CropRecommendation[] = [
        {
          id: '1',
          name: 'टमाटर',
          nameEn: 'Tomato',
          type: 'तरकारी',
          icon: '🍅',
          suitability: 92,
          growingPeriod: '६-८ हप्ता',
          growingPeriodEn: '6-8 weeks',
          expectedYield: '१५-२० टन/हे',
          expectedYieldEn: '15-20 tons/ha',
          profit: 'रु. २,००,०००-३,००,०००/हे',
          profitEn: 'Rs. 200,000-300,000/ha',
          difficulty: 'medium',
          waterRequirement: 'high',
          climate: ['उष्ण', 'अर्ध-उष्ण'],
          soil: ['दोमट माटो', 'बलौटे माटो'],
          benefits: [
            'बजारमा उच्च माग',
            'छिटो पाक्ने',
            'बहुउद्देश्य प्रयोग',
            'ग्रीनहाउसमा पनि सम्भव'
          ],
          benefitsEn: [
            'High market demand',
            'Fast growing',
            'Multiple uses',
            'Greenhouse compatible'
          ],
          risks: [
            'ढुसी रोगको जोखिम',
            'किराहरूको आक्रमण',
            'मौसम परिवर्तनको प्रभाव',
            'अत्यधिक सिंचाई आवश्यक'
          ],
          risksEn: [
            'Fungal disease risk',
            'Pest attacks',
            'Weather impact',
            'Requires excessive irrigation'
          ]
        },
        {
          id: '2',
          name: 'गहुँ',
          nameEn: 'Wheat',
          type: 'अन्नबाली',
          icon: '🌾',
          suitability: 88,
          growingPeriod: '१२०-१५० दिन',
          growingPeriodEn: '120-150 days',
          expectedYield: '३-४ टन/हे',
          expectedYieldEn: '3-4 tons/ha',
          profit: 'रु. ८०,०००-१,२०,०००/हे',
          profitEn: 'Rs. 80,000-120,000/ha',
          difficulty: 'easy',
          waterRequirement: 'medium',
          climate: ['अर्ध-उष्ण', 'शीतोष्ण'],
          soil: ['दोमट माटो', 'चिल्ला माटो'],
          benefits: [
            'अत्यावश्यक खाद्यान्न',
            'भण्डारण सजिलो',
            'बजार स्थिर',
            'कम लागत'
          ],
          benefitsEn: [
            'Essential food crop',
            'Easy storage',
            'Stable market',
            'Low cost'
          ],
          risks: [
            'हिउँदको प्रभाव',
            'ओसिलो रोग',
            'उत्पादन कम हुने',
            'बढ्दो लागत'
          ],
          risksEn: [
            'Winter impact',
            'Powdery mildew',
            'Low yield',
            'Increasing costs'
          ]
        },
        {
          id: '3',
          name: 'दुधी',
          nameEn: 'Cauliflower',
          type: 'तरकारी',
          icon: '🥦',
          suitability: 85,
          growingPeriod: '८०-९० दिन',
          growingPeriodEn: '80-90 days',
          expectedYield: '२०-२५ टन/हे',
          expectedYieldEn: '20-25 tons/ha',
          profit: 'रु. १,५०,०००-२,५०,०००/हे',
          profitEn: 'Rs. 150,000-250,000/ha',
          difficulty: 'medium',
          waterRequirement: 'medium',
          climate: ['अर्ध-उष्ण', 'शीतोष्ण'],
          soil: ['दोमट माटो', 'बलौटे माटो'],
          benefits: [
            'पौष्टिक मूल्य उच्च',
            'बजारमा राम्रो मूल्य',
            'विभिन्न प्रजाति',
            'चिसो जलवायुमा राम्रो'
          ],
          benefitsEn: [
            'High nutritional value',
            'Good market price',
            'Multiple varieties',
            'Good in cool climate'
          ],
          risks: [
            'किरा आक्रमण',
            'फूल झर्ने समस्या',
            'मौसम अनुकूल हुनुपर्ने',
            'पाक्ने समय सीमित'
          ],
          risksEn: [
            'Pest attacks',
            'Button drop issues',
            'Weather dependent',
            'Limited harvesting time'
          ]
        }
      ]
      
      setRecommendations(mockRecommendations)
      setIsGenerating(false)
    }, 2000)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'hard': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'सजिलो'
      case 'medium': return 'मध्यम'
      case 'hard': return 'गाह्रो'
      default: return 'अज्ञात'
    }
  }

  const getWaterRequirementColor = (requirement: string) => {
    switch (requirement) {
      case 'low': return 'bg-blue-300'
      case 'medium': return 'bg-blue-500'
      case 'high': return 'bg-blue-700'
      default: return 'bg-gray-500'
    }
  }

  const getWaterRequirementText = (requirement: string) => {
    switch (requirement) {
      case 'low': return 'कम'
      case 'medium': return 'मध्यम'
      case 'high': return 'उच्च'
      default: return 'अज्ञात'
    }
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
            🌾 बाली सुझाव | Crop Recommendation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            तपाईंको क्षेत्र, मौसम र अवस्थाअनुसार उत्तम बाली छनोट गर्नुहोस्
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>फिल्टर गर्नुहोस्</span>
                </CardTitle>
                <CardDescription>
                  तपाईंको खेतीको विवरण प्रविष्ट गर्नुहोस्
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Province */}
                <div>
                  <label className="text-sm font-medium mb-2 block">प्रदेश</label>
                  <select
                    value={selectedProvince}
                    onChange={(e) => {
                      setSelectedProvince(e.target.value)
                      setSelectedDistrict('')
                    }}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">प्रदेश छनोट गर्नुहोस्</option>
                    {NEPALI_PROVINCES.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="text-sm font-medium mb-2 block">जिल्ला</label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    disabled={!selectedProvince}
                  >
                    <option value="">जिल्ला छनोट गर्नुहोस्</option>
                    {selectedProvince && PROVINCE_DISTRICTS[Number(selectedProvince)]?.map((district: string) => (
                      <option key={`${selectedProvince}-${district}`} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Season */}
                <div>
                  <label className="text-sm font-medium mb-2 block">सिजन</label>
                  <select
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">सिजन छनोट गर्नुहोस्</option>
                    {SEASONS.map((season) => (
                      <option key={season.id} value={season.name}>
                        {season.name} ({season.months})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Soil Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">माटोको प्रकार</label>
                  <select
                    value={selectedSoil}
                    onChange={(e) => setSelectedSoil(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">माटोको प्रकार छनोट गर्नुहोस्</option>
                    {SOIL_TYPES.map((soil) => (
                      <option key={soil.id} value={soil.name}>
                        {soil.name} (pH: {soil.ph})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Altitude */}
                <div>
                  <label className="text-sm font-medium mb-2 block">उचाई (मिटर)</label>
                  <Input
                    type="number"
                    value={altitude}
                    onChange={(e) => setAltitude(e.target.value)}
                    placeholder="उदाहरण: १५००"
                  />
                </div>

                {/* Water Availability */}
                <div>
                  <label className="text-sm font-medium mb-2 block">पानीको उपलब्धता</label>
                  <select
                    value={waterAvailability}
                    onChange={(e) => setWaterAvailability(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">छनोट गर्नुहोस्</option>
                    <option value="abundant">प्रशस्त</option>
                    <option value="moderate">मध्यम</option>
                    <option value="limited">सीमित</option>
                    <option value="scarce">दुर्लभ</option>
                  </select>
                </div>

                <Button
                  onClick={generateRecommendations}
                  disabled={!selectedProvince || !selectedSeason || !selectedSoil || isGenerating}
                  className="w-full bg-agri-green-500 hover:bg-agri-green-600"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      सुझाव उत्पन्न गर्दै...
                    </>
                  ) : (
                    <>
                      <Sprout className="h-4 w-4 mr-2" />
                      सुझावहरू प्राप्त गर्नुहोस्
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Info className="h-4 w-4" />
                  <span>सुझावहरू</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-agri-green-500 mt-0.5" />
                  <p className="text-sm">स्थानीय बजार अनुसार बाली छनोट गर्नुहोस्</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Droplets className="h-4 w-4 text-sky-blue-500 mt-0.5" />
                  <p className="text-sm">पानीको उपलब्धता ध्यानमा राख्नुहोस्</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Thermometer className="h-4 w-4 text-red-500 mt-0.5" />
                  <p className="text-sm">मौसम अनुकूल बाली छनोट गर्नुहोस्</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {recommendations.length === 0 ? (
              <Card className="h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <Sprout className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">बाली सुझावहरू</h3>
                    <p className="text-sm text-muted-foreground">
                      तपाईंको खेतीको लागि उपयुक्त बालीहरू प्राप्त गर्न कृपया फिल्टर भर्नुहोस्
                    </p>
                  </div>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {recommendations.length} वटा सुझावहरू
                  </h3>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    डाउनलोड गर्नुहोस्
                  </Button>
                </div>

                {recommendations.map((crop, index) => (
                  <motion.div
                    key={crop.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="text-4xl">{crop.icon}</div>
                            <div>
                              <h4 className="text-xl font-semibold">{crop.name}</h4>
                              <p className="text-sm text-muted-foreground">{crop.nameEn}</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-agri-green-600">
                              {crop.suitability}%
                            </div>
                            <p className="text-xs text-muted-foreground">उपयुक्तता</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <Calendar className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                            <p className="text-sm font-medium">{crop.growingPeriod}</p>
                            <p className="text-xs text-muted-foreground">पाक्ने समय</p>
                          </div>
                          <div className="text-center">
                            <TrendingUp className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                            <p className="text-sm font-medium">{crop.expectedYield}</p>
                            <p className="text-xs text-muted-foreground">उत्पादन</p>
                          </div>
                          <div className="text-center">
                            <div className={`w-4 h-4 mx-auto mb-1 rounded-full ${getDifficultyColor(crop.difficulty)}`} />
                            <p className="text-sm font-medium">{getDifficultyText(crop.difficulty)}</p>
                            <p className="text-xs text-muted-foreground">कठिनाइ</p>
                          </div>
                          <div className="text-center">
                            <Droplets className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                            <p className="text-sm font-medium">{getWaterRequirementText(crop.waterRequirement)}</p>
                            <p className="text-xs text-muted-foreground">पानी</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm mb-2 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                              फाइदाहरू
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {crop.benefits.slice(0, 3).map((benefit, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium text-sm mb-2 flex items-center">
                              <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                              जोखिमहरू
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {crop.risks.slice(0, 3).map((risk, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {risk}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">अपेक्षित नाफा</p>
                              <p className="font-semibold">{crop.profit}</p>
                            </div>
                            <Button className="bg-agri-green-500 hover:bg-agri-green-600">
                              विस्तृत जानकारी
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}
