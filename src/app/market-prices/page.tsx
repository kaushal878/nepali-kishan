'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  MapPin, 
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Search,
  Bell,
  Star,
  Info
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface MarketPrice {
  id: string
  commodity: string
  commodityEn: string
  category: 'vegetable' | 'fruit' | 'grain' | 'spice' | 'livestock'
  price: number
  unit: string
  previousPrice: number
  change: number
  changePercent: number
  market: string
  marketEn: string
  location: string
  date: string
  trend: 'up' | 'down' | 'stable'
  quality: 'premium' | 'standard' | 'basic'
  availability: 'high' | 'medium' | 'low'
  seasonality: 'in-season' | 'off-season' | 'peak'
}

interface MarketSummary {
  totalCommodities: number
  averageChange: number
  topGainer: string
  topLoser: string
  lastUpdated: string
}

export default function MarketPrices() {
  const [prices, setPrices] = useState<MarketPrice[]>([])
  const [filteredPrices, setFilteredPrices] = useState<MarketPrice[]>([])
  const [summary, setSummary] = useState<MarketSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedMarket, setSelectedMarket] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'price' | 'change' | 'name'>('price')

  useEffect(() => {
    fetchMarketPrices()
  }, [])

  useEffect(() => {
    filterPrices()
  }, [prices, selectedCategory, selectedMarket, searchTerm, sortBy])

  const fetchMarketPrices = async () => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockPrices: MarketPrice[] = [
        {
          id: '1',
          commodity: 'टमाटर',
          commodityEn: 'Tomato',
          category: 'vegetable',
          price: 60,
          unit: 'के.ग्रा',
          previousPrice: 55,
          change: 5,
          changePercent: 9.1,
          market: 'कालिमाटी',
          marketEn: 'Kalimati',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'up',
          quality: 'premium',
          availability: 'high',
          seasonality: 'peak'
        },
        {
          id: '2',
          commodity: 'आलु',
          commodityEn: 'Potato',
          category: 'vegetable',
          price: 45,
          unit: 'के.ग्रा',
          previousPrice: 48,
          change: -3,
          changePercent: -6.3,
          market: 'कालिमाटी',
          marketEn: 'Kalimati',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'down',
          quality: 'standard',
          availability: 'high',
          seasonality: 'in-season'
        },
        {
          id: '3',
          commodity: 'प्याज',
          commodityEn: 'Onion',
          category: 'vegetable',
          price: 80,
          unit: 'के.ग्रा',
          previousPrice: 82,
          change: -2,
          changePercent: -2.4,
          market: 'बल्खु',
          marketEn: 'Balkhu',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'down',
          quality: 'premium',
          availability: 'medium',
          seasonality: 'in-season'
        },
        {
          id: '4',
          commodity: 'सिमी',
          commodityEn: 'Apple',
          category: 'fruit',
          price: 120,
          unit: 'के.ग्रा',
          previousPrice: 115,
          change: 5,
          changePercent: 4.3,
          market: 'कालिमाटी',
          marketEn: 'Kalimati',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'up',
          quality: 'premium',
          availability: 'medium',
          seasonality: 'peak'
        },
        {
          id: '5',
          commodity: 'केरा',
          commodityEn: 'Banana',
          category: 'fruit',
          price: 90,
          unit: 'दजन',
          previousPrice: 90,
          change: 0,
          changePercent: 0,
          market: 'नयबजार',
          marketEn: 'New Baneshwor',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'stable',
          quality: 'standard',
          availability: 'high',
          seasonality: 'in-season'
        },
        {
          id: '6',
          commodity: 'धान',
          commodityEn: 'Rice',
          category: 'grain',
          price: 55,
          unit: 'के.ग्रा',
          previousPrice: 52,
          change: 3,
          changePercent: 5.8,
          market: 'बल्खु',
          marketEn: 'Balkhu',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'up',
          quality: 'standard',
          availability: 'high',
          seasonality: 'in-season'
        },
        {
          id: '7',
          commodity: 'गहुँ',
          commodityEn: 'Wheat',
          category: 'grain',
          price: 48,
          unit: 'के.ग्रा',
          previousPrice: 50,
          change: -2,
          changePercent: -4.0,
          market: 'कालिमाटी',
          marketEn: 'Kalimati',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'down',
          quality: 'standard',
          availability: 'high',
          seasonality: 'in-season'
        },
        {
          id: '8',
          commodity: 'मकै',
          commodityEn: 'Corn',
          category: 'grain',
          price: 42,
          unit: 'के.ग्रा',
          previousPrice: 40,
          change: 2,
          changePercent: 5.0,
          market: 'बल्खु',
          marketEn: 'Balkhu',
          location: 'काठमाडौँ',
          date: 'आज',
          trend: 'up',
          quality: 'standard',
          availability: 'medium',
          seasonality: 'peak'
        }
      ]

      const mockSummary: MarketSummary = {
        totalCommodities: mockPrices.length,
        averageChange: 1.2,
        topGainer: 'टमाटर (+9.1%)',
        topLoser: 'आलु (-6.3%)',
        lastUpdated: new Date().toLocaleString('ne-NP')
      }

      setPrices(mockPrices)
      setSummary(mockSummary)
      setLoading(false)
    }, 1500)
  }

  const filterPrices = () => {
    let filtered = [...prices]

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(price => price.category === selectedCategory)
    }

    // Filter by market
    if (selectedMarket !== 'all') {
      filtered = filtered.filter(price => price.market === selectedMarket)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(price => 
        price.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        price.commodityEn.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.price - a.price
        case 'change':
          return b.changePercent - a.changePercent
        case 'name':
          return a.commodity.localeCompare(b.commodity)
        default:
          return 0
      }
    })

    setFilteredPrices(filtered)
  }

  const refreshPrices = () => {
    setRefreshing(true)
    fetchMarketPrices()
    setTimeout(() => setRefreshing(false), 1000)
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />
      case 'stable': return <Minus className="h-4 w-4 text-gray-500" />
      default: return <Minus className="h-4 w-4 text-gray-500" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-500'
      case 'down': return 'text-red-500'
      case 'stable': return 'text-gray-500'
      default: return 'text-gray-500'
    }
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'premium': return 'bg-purple-500'
      case 'standard': return 'bg-blue-500'
      case 'basic': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'high': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const categories = [
    { value: 'all', label: 'सबै', labelEn: 'All' },
    { value: 'vegetable', label: 'तरकारी', labelEn: 'Vegetables' },
    { value: 'fruit', label: 'फलफूल', labelEn: 'Fruits' },
    { value: 'grain', label: 'अन्नबाली', labelEn: 'Grains' },
    { value: 'spice', label: 'मसला', labelEn: 'Spices' },
    { value: 'livestock', label: 'पशुपालन', labelEn: 'Livestock' }
  ]

  const markets = [
    { value: 'all', label: 'सबै बजार', labelEn: 'All Markets' },
    { value: 'कालिमाटी', label: 'कालिमाटी', labelEn: 'Kalimati' },
    { value: 'बल्खु', label: 'बल्खु', labelEn: 'Balkhu' },
    { value: 'नयबजार', label: 'नयबजार', labelEn: 'New Baneshwor' },
    { value: 'पाटन', label: 'पाटन', labelEn: 'Patan' },
    { value: 'ललितपुर', label: 'ललितपुर', labelEn: 'Lalitpur' }
  ]

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
            📈 बजार दर | Market Prices
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            नेपालका विभिन्न बजारहरूमा आजको ताजा फलफूल र तरकारीका दरहरू
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" variant="earth" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Summary Cards */}
            {summary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
              >
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-agri-green-600">
                      {summary.totalCommodities}
                    </div>
                    <p className="text-sm text-muted-foreground">कुल वस्तुहरू</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className={`text-2xl font-bold ${summary.averageChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {summary.averageChange >= 0 ? '+' : ''}{summary.averageChange}%
                    </div>
                    <p className="text-sm text-muted-foreground">औसत परिवर्तन</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-green-600">
                      {summary.topGainer}
                    </div>
                    <p className="text-sm text-muted-foreground">उच्च वृद्धि</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold text-red-600">
                      {summary.topLoser}
                    </div>
                    <p className="text-sm text-muted-foreground">उच्च गिरावट</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

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
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="खोज्नुहोस्..."
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
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>

                    {/* Market Filter */}
                    <select
                      value={selectedMarket}
                      onChange={(e) => setSelectedMarket(e.target.value)}
                      className="px-3 py-2 border rounded-md"
                    >
                      {markets.map((market) => (
                        <option key={market.value} value={market.value}>
                          {market.label}
                        </option>
                      ))}
                    </select>

                    {/* Sort */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-3 py-2 border rounded-md"
                    >
                      <option value="price">मूल्यानुसार</option>
                      <option value="change">परिवर्तनानुसार</option>
                      <option value="name">नामानुसार</option>
                    </select>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={refreshPrices}
                        disabled={refreshing}
                      >
                        <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                        रिफ्रेस
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        डाउनलोड
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bell className="h-4 w-4 mr-2" />
                        अलर्ट
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Price Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>आजका दरहरू</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {summary?.lastUpdated}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-medium">वस्तु</th>
                          <th className="text-left p-3 font-medium">बजार</th>
                          <th className="text-right p-3 font-medium">मूल्य (रु.)</th>
                          <th className="text-right p-3 font-medium">परिवर्तन</th>
                          <th className="text-center p-3 font-medium">गुणस्ता</th>
                          <th className="text-center p-3 font-medium">उपलब्धता</th>
                          <th className="text-center p-3 font-medium">कार्य</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPrices.map((price, index) => (
                          <motion.tr
                            key={price.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="border-b hover:bg-muted/50 transition-colors"
                          >
                            <td className="p-3">
                              <div>
                                <div className="font-medium">{price.commodity}</div>
                                <div className="text-sm text-muted-foreground">
                                  {price.commodityEn}
                                </div>
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3 text-muted-foreground" />
                                <div>
                                  <div className="text-sm">{price.market}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {price.location}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-right">
                              <div className="font-semibold">
                                रु. {price.price}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                प्रति {price.unit}
                              </div>
                            </td>
                            <td className="p-3 text-right">
                              <div className="flex items-center justify-end space-x-1">
                                {getTrendIcon(price.trend)}
                                <span className={`font-medium ${getTrendColor(price.trend)}`}>
                                  {price.change >= 0 ? '+' : ''}{price.change} ({price.changePercent}%)
                                </span>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <Badge className={`${getQualityColor(price.quality)} text-white text-xs`}>
                                {price.quality === 'premium' && 'प्रिमियम'}
                                {price.quality === 'standard' && 'मानक'}
                                {price.quality === 'basic' && 'आधारभूत'}
                              </Badge>
                            </td>
                            <td className="p-3 text-center">
                              <Badge className={`${getAvailabilityColor(price.availability)} text-white text-xs`}>
                                {price.availability === 'high' && 'उच्च'}
                                {price.availability === 'medium' && 'मध्यम'}
                                {price.availability === 'low' && 'कम'}
                              </Badge>
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center space-x-1">
                                {price.seasonality === 'peak' && <Star className="h-3 w-3 text-yellow-500" />}
                                <Badge variant="outline" className="text-xs">
                                  {price.seasonality === 'peak' && 'उच्च मौसम'}
                                  {price.seasonality === 'in-season' && 'मौसम अनुकूल'}
                                  {price.seasonality === 'off-season' && 'बस्न मौसम'}
                                </Badge>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Market Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="h-5 w-5" />
                    <span>बजार सुझावहरू</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h5 className="font-medium">खरिद गर्ने सुझावहरू</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" />
                          <span>बिहान बजार अवलोकन गर्नुहोस्</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" />
                          <span>गुणस्ता राम्रो वस्तु छनोट गर्नुहोस्</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" />
                          <span>मौसमी उत्पादन बेच्नुहोस्</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium">मूल्य तुलना सुझावहरू</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5" />
                          <span>विभिन्न बजारका दरहरू तुलना गर्नुहोस्</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5" />
                          <span>याताया र भण्डारण लागत गणना गर्नुहोस्</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5" />
                          <span>बजार माग अनुसार बेच्नुहोस्</span>
                        </li>
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
