'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets, 
  Thermometer,
  Eye,
  Gauge,
  AlertTriangle,
  CloudSnow,
  Zap,
  Sunrise,
  Sunset,
  MapPin,
  Bell,
  TrendingUp,
  TrendingDown,
  Calendar,
  RefreshCw
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface WeatherData {
  location: string
  temperature: number
  feelsLike: number
  humidity: number
  windSpeed: number
  windDirection: string
  pressure: number
  visibility: number
  uvIndex: number
  sunrise: string
  sunset: string
  condition: string
  conditionEn: string
  icon: string
}

interface WeatherAlert {
  id: string
  type: 'frost' | 'rain' | 'drought' | 'storm' | 'heat'
  severity: 'low' | 'medium' | 'high' | 'extreme'
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  recommendation: string
  recommendationEn: string
  startTime: string
  endTime: string
}

interface FarmingAdvice {
  day: string
  activities: string[]
  activitiesEn: string[]
  warnings: string[]
  warningsEn: string[]
  suitability: 'excellent' | 'good' | 'moderate' | 'poor'
}

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [alerts, setAlerts] = useState<WeatherAlert[]>([])
  const [forecast, setForecast] = useState<FarmingAdvice[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLocation, setSelectedLocation] = useState('काठमाडौँ')
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    fetchWeatherData()
  }, [selectedLocation])

  const fetchWeatherData = async () => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockWeatherData: WeatherData = {
        location: selectedLocation,
        temperature: 24,
        feelsLike: 26,
        humidity: 65,
        windSpeed: 12,
        windDirection: 'दक्षिण-पूर्व',
        pressure: 1012,
        visibility: 10,
        uvIndex: 6,
        sunrise: '०५:३०',
        sunset: '१८:४५',
        condition: 'आंशिक बदली',
        conditionEn: 'Partly Cloudy',
        icon: 'partly-cloudy'
      }

      const mockAlerts: WeatherAlert[] = [
        {
          id: '1',
          type: 'rain',
          severity: 'medium',
          title: 'वर्षाको चेतावनी',
          titleEn: 'Rain Warning',
          description: 'आगामी २४ घण्टामा भारी वर्षाको सम्भावना',
          descriptionEn: 'Heavy rainfall expected in next 24 hours',
          recommendation: 'सिंचाई रोक्नुहोस्, खेतमा पानी नजम्ने व्यवस्था गर्नुहोस्',
          recommendationEn: 'Stop irrigation, arrange field drainage',
          startTime: 'आज साँझ २ बजे',
          endTime: 'भोलि बिहान १० बजे'
        },
        {
          id: '2',
          type: 'frost',
          severity: 'low',
          title: 'शीतलहरको सम्भावना',
          titleEn: 'Frost Possibility',
          description: 'याममा तापक्रम कम हुन सक्छ',
          descriptionEn: 'Temperature may drop at night',
          recommendation: 'केलाहरूलाई ढाँटेर राख्नुहोस्',
          recommendationEn: 'Cover sensitive plants',
          startTime: 'आज राति ११ बजे',
          endTime: 'भोलि बिहान ५ बजे'
        }
      ]

      const mockForecast: FarmingAdvice[] = [
        {
          day: 'आज',
          activities: [
            'टमाटर र बिरुवा रोप्न सकिन्छ',
            'सिंचाई मध्यम मात्रा गर्नुहोस्',
            'रोग जाँच गर्न उपयुक्त समय'
          ],
          activitiesEn: [
            'Suitable for tomato and chili planting',
            'Moderate irrigation recommended',
            'Good time for disease inspection'
          ],
          warnings: [
            'दिउँसो वर्षा हुन सक्छ',
            'ओसिलो पातहरूमा ढुसी हुन सक्छ'
          ],
          warningsEn: [
            'Rain expected in evening',
            'Fungal disease possible on wet leaves'
          ],
          suitability: 'good'
        },
        {
          day: 'भोलि',
          activities: [
            'जमिना तयार गर्न उपयुक्त',
            'मल छर्न सकिन्छ',
            'बीउ छनोट गर्न सकिन्छ'
          ],
          activitiesEn: [
            'Good for soil preparation',
            'Fertilizer application possible',
            'Seed selection possible'
          ],
          warnings: [
            'दिउँसो बलेको हावा चल्न सक्छ',
            'धुलो धूवाँको समस्या हुन सक्छ'
          ],
          warningsEn: [
            'Strong winds expected in evening',
            'Dust storm possible'
          ],
          suitability: 'moderate'
        },
        {
          day: 'पर्सि',
          activities: [
            'बाली रोप्नका लागि उत्तम',
            'जैविक मलको प्रयोग गर्नुहोस्',
            'बोटहरूलाई सहारा दिनुहोस्'
          ],
          activitiesEn: [
            'Excellent for crop planting',
            'Use organic fertilizers',
            'Support young plants'
          ],
          warnings: [
            'तापक्रम बढ्न सक्छ',
            'पानीको अभाव हुन सक्छ'
          ],
          warningsEn: [
            'Temperature may increase',
            'Water scarcity possible'
          ],
          suitability: 'excellent'
        }
      ]

      setWeatherData(mockWeatherData)
      setAlerts(mockAlerts)
      setForecast(mockForecast)
      setLoading(false)
    }, 1500)
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'clear': return <Sun className="h-8 w-8 text-yellow-500" />
      case 'partly-cloudy': return <Cloud className="h-8 w-8 text-gray-500" />
      case 'cloudy': return <Cloud className="h-8 w-8 text-gray-600" />
      case 'rain': return <CloudRain className="h-8 w-8 text-blue-500" />
      case 'storm': return <Zap className="h-8 w-8 text-purple-500" />
      case 'snow': return <CloudSnow className="h-8 w-8 text-blue-300" />
      default: return <Sun className="h-8 w-8 text-yellow-500" />
    }
  }

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-500'
      case 'medium': return 'bg-yellow-500'
      case 'high': return 'bg-orange-500'
      case 'extreme': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getSuitabilityColor = (suitability: string) => {
    switch (suitability) {
      case 'excellent': return 'bg-green-500'
      case 'good': return 'bg-agri-green-500'
      case 'moderate': return 'bg-yellow-500'
      case 'poor': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getSuitabilityText = (suitability: string) => {
    switch (suitability) {
      case 'excellent': return 'उत्तम'
      case 'good': return 'राम्रो'
      case 'moderate': return 'मध्यम'
      case 'poor': return 'खराब'
      default: return 'अज्ञात'
    }
  }

  const refreshWeather = () => {
    setRefreshing(true)
    fetchWeatherData()
    setTimeout(() => setRefreshing(false), 1000)
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
            ☁️ मौसम | Weather
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            वास्तविक मौसम जानकारी र कृषि गतिविधिहरूका लागि सुझावहरू
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" variant="sky" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Current Weather */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="bg-transparent border-none text-lg font-semibold focus:outline-none"
                      >
                        <option value="काठमाडौँ">काठमाडौँ</option>
                        <option value="पोखरा">पोखरा</option>
                        <option value="भरतपुर">भरतपुर</option>
                        <option value="बिराटनगर">बिराटनगर</option>
                        <option value="नेपालगञ्ज">नेपालगञ्ज</option>
                      </select>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={refreshWeather}
                      disabled={refreshing}
                    >
                      <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>
                
                {weatherData && (
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Main Weather */}
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {getWeatherIcon(weatherData.icon)}
                        </div>
                        <div className="text-5xl font-bold text-foreground mb-2">
                          {weatherData.temperature}°C
                        </div>
                        <div className="text-lg text-muted-foreground mb-1">
                          {weatherData.condition}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          महसुस: {weatherData.feelsLike}°C
                        </div>
                      </div>

                      {/* Weather Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Droplets className="h-4 w-4 text-blue-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">आद्रता</p>
                            <p className="font-semibold">{weatherData.humidity}%</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Wind className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">हावा</p>
                            <p className="font-semibold">{weatherData.windSpeed} km/h</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Gauge className="h-4 w-4 text-purple-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">दाब</p>
                            <p className="font-semibold">{weatherData.pressure} hPa</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4 text-green-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">दृश्यता</p>
                            <p className="font-semibold">{weatherData.visibility} km</p>
                          </div>
                        </div>
                      </div>

                      {/* Sun Times */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Sunrise className="h-5 w-5 text-orange-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">सूर्योदय</p>
                            <p className="font-semibold">{weatherData.sunrise}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Sunset className="h-5 w-5 text-orange-600" />
                          <div>
                            <p className="text-sm text-muted-foreground">सूर्यास्त</p>
                            <p className="font-semibold">{weatherData.sunset}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Thermometer className="h-5 w-5 text-red-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">UV इन्डेक्स</p>
                            <p className="font-semibold">{weatherData.uvIndex}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>

            {/* Weather Alerts */}
            {alerts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <span>मौसम चेतावनीहरू</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {alerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`p-4 rounded-lg border-l-4 ${getAlertColor(alert.severity)} bg-opacity-10`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{alert.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {alert.description}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <span>{alert.startTime}</span>
                                <span>-</span>
                                <span>{alert.endTime}</span>
                              </div>
                            </div>
                            <Badge className={`${getAlertColor(alert.severity)} text-white`}>
                              {alert.severity === 'low' && 'कम'}
                              {alert.severity === 'medium' && 'मध्यम'}
                              {alert.severity === 'high' && 'उच्च'}
                              {alert.severity === 'extreme' && 'गम्भीर'}
                            </Badge>
                          </div>
                          <div className="mt-3 p-3 bg-muted rounded-lg">
                            <p className="text-sm font-medium mb-1">सुझाव:</p>
                            <p className="text-sm">{alert.recommendation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Farming Forecast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>कृषि पूर्वानुमान</span>
                  </CardTitle>
                  <CardDescription>
                    आगामी दिनहरूमा उपयुक्त कृषि गतिविधिहरू
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {forecast.map((day, index) => (
                      <div
                        key={day.day}
                        className="border rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{day.day}</h4>
                          <Badge className={`${getSuitabilityColor(day.suitability)} text-white`}>
                            {getSuitabilityText(day.suitability)}
                          </Badge>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium mb-2 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                            उपयुक्त गतिविधिहरू
                          </h5>
                          <ul className="space-y-1">
                            {day.activities.slice(0, 3).map((activity, i) => (
                              <li key={i} className="text-xs flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 mr-2 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {day.warnings.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium mb-2 flex items-center">
                              <AlertTriangle className="h-3 w-3 mr-1 text-orange-500" />
                              चेतावनीहरू
                            </h5>
                            <ul className="space-y-1">
                              {day.warnings.slice(0, 2).map((warning, i) => (
                                <li key={i} className="text-xs flex items-start">
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1 mr-2 flex-shrink-0" />
                                  {warning}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Weather Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">मौसम आधारित कृषि सुझावहरू</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h5 className="font-medium flex items-center">
                        <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                        गर्मी मौसम
                      </h5>
                      <ul className="space-y-1 text-sm">
                        <li>• बिहान/बेलुको सिंचाई बेलुकै गर्नुहोस्</li>
                        <li>• छायाँदार बनाउने व्यवस्था गर्नुहोस्</li>
                        <li>• गर्मी-प्रतिरोध बालीहरू छनोट गर्नुहोस्</li>
                        <li>• अत्यधिक पानीको बचाव गर्नुहोस्</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium flex items-center">
                        <CloudRain className="h-4 w-4 mr-2 text-blue-500" />
                        वर्षा मौसम
                      </h5>
                      <ul className="space-y-1 text-sm">
                        <li>• खेतको जल निकास व्यवस्था गर्नुहोस्</li>
                        <li>• ढुसीरोध बालीहरू छनोट गर्नुहोस्</li>
                        <li>• अत्यधिक सिंचाईबाट बच्नुहोस्</li>
                        <li>• खाडल गर्ने समय छनोट गर्नुहोस्</li>
                      </ul>
                    </div>
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
