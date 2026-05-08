'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar as CalendarIcon, 
  Bell, 
  Plus, 
  Droplets, 
  Sprout, 
  Scissors,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Filter,
  Download,
  RefreshCw,
  Edit,
  Trash2,
  Eye
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface CalendarEvent {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  date: string
  time: string
  type: 'planting' | 'fertilizing' | 'irrigation' | 'harvesting' | 'pesticide' | 'inspection' | 'vaccination' | 'other'
  priority: 'low' | 'medium' | 'high'
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled'
  location?: string
  crop?: string
  livestock?: string
  reminder: boolean
  reminderTime?: string
  notes?: string
  recurring: boolean
  recurringPattern?: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

interface FarmingTip {
  id: string
  month: string
  monthEn: string
  activities: string[]
  activitiesEn: string[]
  tips: string[]
  tipsEn: string[]
  warnings: string[]
  warningsEn: string[]
}

export default function FarmingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [monthlyTips, setMonthlyTips] = useState<FarmingTip[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth())
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear())
  const [filterType, setFilterType] = useState<string>('all')

  useState(() => {
    // Initialize with mock data
    const mockEvents: CalendarEvent[] = [
      {
        id: '1',
        title: 'टमाटर रोपण',
        titleEn: 'Tomato Planting',
        description: 'नया टमाटर बिउ रोप्नुहोस्',
        descriptionEn: 'Plant new tomato seeds',
        date: '2024-01-15',
        time: '06:00',
        type: 'planting',
        priority: 'high',
        status: 'pending',
        location: 'खेत नं. १',
        crop: 'टमाटर',
        reminder: true,
        reminderTime: '05:30',
        recurring: false
      },
      {
        id: '2',
        title: 'गोबर मल लगाउने',
        titleEn: 'Apply Cow Dung Manure',
        description: 'आलु खेतमा गोबरको मल लगाउनुहोस्',
        descriptionEn: 'Apply cow dung manure in potato field',
        date: '2024-01-18',
        time: '07:00',
        type: 'fertilizing',
        priority: 'medium',
        status: 'pending',
        location: 'खेत नं. २',
        crop: 'आलु',
        reminder: true,
        reminderTime: '06:30',
        recurring: false
      },
      {
        id: '3',
        title: 'सिंचाई',
        titleEn: 'Irrigation',
        description: 'टमाटर खेतमा सिंचाई गर्नुहोस्',
        descriptionEn: 'Irrigate tomato field',
        date: '2024-01-20',
        time: '05:00',
        type: 'irrigation',
        priority: 'medium',
        status: 'completed',
        location: 'खेत नं. १',
        crop: 'टमाटर',
        reminder: true,
        reminderTime: '04:30',
        recurring: true,
        recurringPattern: 'weekly'
      },
      {
        id: '4',
        title: 'बिरुवा जाँच',
        titleEn: 'Disease Inspection',
        description: 'बालीमा रोगका लक्षणहरू जाँच गर्नुहोस्',
        descriptionEn: 'Inspect crops for disease symptoms',
        date: '2024-01-22',
        time: '16:00',
        type: 'inspection',
        priority: 'low',
        status: 'pending',
        location: 'सबै खेत',
        reminder: false,
        recurring: true,
        recurringPattern: 'weekly'
      }
    ]

    const mockTips: FarmingTip[] = [
      {
        id: '1',
        month: 'माघ',
        monthEn: 'January',
        activities: [
          'वसन्त बाली रोपण',
          'खेत तयारी',
          'जैविक मल लगाउने',
          'बिरुवा जाँच'
        ],
        activitiesEn: [
          'Spring crop planting',
          'Field preparation',
          'Organic fertilizer application',
          'Disease inspection'
        ],
        tips: [
          'बिहान बेलुकै सिंचाई गर्नुहोस्',
          'नया बिउ छनोट गर्नुहोस्',
          'जैविक मलको प्रयोग गर्नुहोस्',
          'खेतको माटो परीक्षण गर्नुहोस्'
        ],
        tipsEn: [
          'Irrigate in early morning',
          'Choose quality seeds',
          'Use organic fertilizers',
          'Monitor soil health'
        ],
        warnings: [
          'ओसिलो हावाको सम्भावना',
          'शीतलहरको जोखिम',
          'रोगको प्रकोप राख्नुहोस्'
        ],
        warningsEn: [
          'Frost warning possible',
          'Cold weather risk',
          'Monitor for diseases'
        ]
      }
    ]

    setEvents(mockEvents)
    setMonthlyTips(mockTips)
    setLoading(false)
  })

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return events.filter(event => event.date === dateStr)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'planting': return <Sprout className="h-4 w-4" />
      case 'fertilizing': return <Droplets className="h-4 w-4" />
      case 'irrigation': return <Droplets className="h-4 w-4" />
      case 'harvesting': return <Scissors className="h-4 w-4" />
      case 'inspection': return <Eye className="h-4 w-4" />
      case 'pesticide': return <AlertTriangle className="h-4 w-4" />
      default: return <CalendarIcon className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'planting': return 'bg-agri-green-500'
      case 'fertilizing': return 'bg-earth-brown-500'
      case 'irrigation': return 'bg-sky-blue-500'
      case 'harvesting': return 'bg-yellow-500'
      case 'inspection': return 'bg-purple-500'
      case 'pesticide': return 'bg-red-500'
      default: return 'bg-gray-500'
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-blue-500'
      case 'pending': return 'bg-yellow-500'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'सम्पन्न'
      case 'in-progress': return 'चलिरहेको'
      case 'pending': return 'विचाराधीन'
      case 'cancelled': return 'रद्द गरियो'
      default: return 'अज्ञात'
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-100" />)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dayEvents = getEventsForDate(date)
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()

      days.push(
        <motion.div
          key={day}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: day * 0.01 }}
          className={`h-24 border border-gray-200 p-1 cursor-pointer hover:bg-agri-green-50 transition-colors ${isToday ? 'bg-agri-green-100' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium ${isToday ? 'text-agri-green-600' : ''}`}>
              {day}
            </span>
            {dayEvents.length > 0 && (
              <Badge className="text-xs bg-agri-green-500 text-white">
                {dayEvents.length}
              </Badge>
            )}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className={`text-xs p-1 rounded truncate ${getTypeColor(event.type)} text-white`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </motion.div>
      )
    }

    return days
  }

  const monthNames = [
    'जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मई', 'जुन',
    'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'
  ]

  const weekDays = ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि']

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
            📅 कृषि क्यालेन्डर | Farming Calendar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            तपाईंको खेतीको लागि कार्यक्रम, अनुस्मरण र गतिविधिहरू व्यवस्थापन गर्नुहोस्
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" variant="agri" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newDate = new Date(currentDate)
                          newDate.setMonth(newDate.getMonth() - 1)
                          setCurrentDate(newDate)
                        }}
                      >
                        ←
                      </Button>
                      <h2 className="text-xl font-semibold">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </h2>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newDate = new Date(currentDate)
                          newDate.setMonth(newDate.getMonth() + 1)
                          setCurrentDate(newDate)
                        }}
                      >
                        →
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        फिल्टर
                      </Button>
                      <Button variant="agri" size="sm" onClick={() => setShowAddEvent(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        घटनाउहोस्
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Week days header */}
                  <div className="grid grid-cols-7 border-b">
                    {weekDays.map((day) => (
                      <div key={day} className="p-2 text-center text-sm font-medium border-r">
                        {day}
                      </div>
                    ))}
                  </div>
                  {/* Calendar days */}
                  <div className="grid grid-cols-7">
                    {renderCalendar()}
                  </div>
                </CardContent>
              </Card>

              {/* Selected Date Events */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span>
                          {selectedDate.toLocaleDateString('ne-NP', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {getEventsForDate(selectedDate).map((event) => (
                          <div
                            key={event.id}
                            className="border rounded-lg p-3 space-y-2"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-2">
                                <div className={`p-1 rounded ${getTypeColor(event.type)} text-white`}>
                                  {getTypeIcon(event.type)}
                                </div>
                                <div>
                                  <h4 className="font-medium">{event.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {event.time} • {event.location}
                                  </p>
                                </div>
                              </div>
                              <div className="flex space-x-1">
                                <Badge className={`${getPriorityColor(event.priority)} text-white text-xs`}>
                                  {event.priority === 'high' && 'उच्च'}
                                  {event.priority === 'medium' && 'मध्यम'}
                                  {event.priority === 'low' && 'कम'}
                                </Badge>
                                <Badge className={`${getStatusColor(event.status)} text-white text-xs`}>
                                  {getStatusText(event.status)}
                                </Badge>
                              </div>
                            </div>
                            {event.description && (
                              <p className="text-sm text-muted-foreground">
                                {event.description}
                              </p>
                            )}
                            {event.reminder && (
                              <div className="flex items-center space-x-2 text-sm">
                                <Bell className="h-3 w-3 text-blue-500" />
                                <span>अनुस्मरण: {event.reminderTime}</span>
                              </div>
                            )}
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3 mr-1" />
                                सम्पादन
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-3 w-3 mr-1" />
                                हटाउनुहोस्
                              </Button>
                            </div>
                          </div>
                        ))}
                        {getEventsForDate(selectedDate).length === 0 && (
                          <div className="text-center py-8 text-muted-foreground">
                            <CalendarIcon className="h-8 w-8 mx-auto mb-2" />
                            <p>यो दिनमा कुनै कार्यक्रम छैन</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>

            {/* Monthly Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {/* Farming Tips */}
              {monthlyTips.map((tip) => (
                <Card key={tip.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.month} महिना</CardTitle>
                    <CardDescription>कृषि गतिविधिहरू</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        गतिविधिहरू
                      </h5>
                      <ul className="space-y-1">
                        {tip.activities.map((activity, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                        चेतावनीहरू
                      </h5>
                      <ul className="space-y-1">
                        {tip.warnings.map((warning, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-1 mr-2" />
                            {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">छिटो कार्यहरू</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    नयाँ कार्यक्रम थप्नुहोस्
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    क्यालेन्डर डाउनलोड गर्नुहोस्
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    अनुस्मरण सेटिङहरू
                  </Button>
                </CardContent>
              </Card>

              {/* Weather Integration */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">मौसम जानकारी</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">तापक्रम</span>
                      <span className="font-medium">२४°C</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">आद्रता</span>
                      <span className="font-medium">६५%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">वर्षा</span>
                      <span className="font-medium">२०%</span>
                    </div>
                    <Button variant="agri" className="w-full mt-2">
                      पूरा मौसम विवरण
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
