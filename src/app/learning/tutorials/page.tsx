'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Clock, 
  Eye, 
  BookOpen, 
  Star,
  Filter,
  Search,
  Download,
  Share2,
  Heart,
  Calendar
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface Tutorial {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  thumbnail: string
  duration: string
  durationEn: string
  views: string
  level: 'beginner' | 'intermediate' | 'advanced'
  category: string
  categoryEn: string
  instructor: string
  instructorEn: string
  rating: number
  publishedAt: string
  videoUrl: string
  materials: string[]
  materialsEn: string[]
}

export default function VideoTutorials() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')

  const tutorials: Tutorial[] = [
    {
      id: '1',
      title: 'टमाटर खेती बारे पूर्ण ट्युटोरियल',
      titleEn: 'Complete Tomato Farming Tutorial',
      description: 'टमाटर खेती गर्ने उत्तम तरिका र आवश्यक सामग्रीहरू',
      descriptionEn: 'Best methods and required materials for tomato farming',
      thumbnail: '/tutorials/tomato-farming.jpg',
      duration: '४५ मिनेट',
      durationEn: '45 minutes',
      views: '१२,३४५',
      level: 'beginner',
      category: 'तरकारी खेती',
      categoryEn: 'Vegetable Farming',
      instructor: 'राम बहादुर',
      instructorEn: 'Ram Bahadur',
      rating: 4.8,
      publishedAt: '२०२४-०५-०१',
      videoUrl: '#',
      materials: ['टमाटर बिउ', 'मल', 'कीटनाशक', 'सिंचाई उपकरण'],
      materialsEn: ['Tomato seeds', 'Fertilizer', 'Pesticides', 'Irrigation equipment']
    },
    {
      id: '2',
      title: 'धान रोप्ने आधुनिक तरिका',
      titleEn: 'Modern Rice Planting Methods',
      description: 'पारम्परिक र आधुनिक धान रोपाइको तुलना र उत्पादन बढाउने तरिका',
      descriptionEn: 'Comparison of traditional and modern rice planting methods and yield improvement techniques',
      thumbnail: '/tutorials/rice-planting.jpg',
      duration: '६० मिनेट',
      durationEn: '60 minutes',
      views: '८,९०१',
      level: 'intermediate',
      category: 'अन्नबाली',
      categoryEn: 'Cereals',
      instructor: 'शिव शर्मा',
      instructorEn: 'Shiv Sharma',
      rating: 4.6,
      publishedAt: '२०२४-०४-२८',
      videoUrl: '#',
      materials: ['धान बिउ', 'ट्राक्टर', 'थ्रेसर', 'मल'],
      materialsEn: ['Rice seeds', 'Tractor', 'Thresher', 'Fertilizer']
    },
    {
      id: '3',
      title: 'जैविक मल बनाउने तरिका',
      titleEn: 'How to Make Organic Fertilizer',
      description: 'घरमै बनाउन सकिने जैविक मल र त्यसको प्रयोग विधि',
      descriptionEn: 'Homemade organic fertilizer preparation and application methods',
      thumbnail: '/tutorials/organic-fertilizer.jpg',
      duration: '३० मिनेट',
      durationEn: '30 minutes',
      views: '१५,६७८',
      level: 'beginner',
      category: 'जैविक खेती',
      categoryEn: 'Organic Farming',
      instructor: 'सीता देवी',
      instructorEn: 'Sita Devi',
      rating: 4.9,
      publishedAt: '२०२४-०५-०३',
      videoUrl: '#',
      materials: ['गोबर', 'भाँडा', 'पानी', 'घाँस'],
      materialsEn: ['Cow dung', 'Containers', 'Water', 'Grass']
    }
  ]

  const categories = ['सबै', 'तरकारी खेती', 'अन्नबाली', 'फलफूल', 'जैविक खेती', 'पशुपालन']
  const categoriesEn = ['All', 'Vegetable Farming', 'Cereals', 'Fruits', 'Organic Farming', 'Livestock']
  const levels = ['सबै', 'सुरुवाती', 'बीचको', 'उन्नत']
  const levelsEn = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.titleEn.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || tutorial.category === selectedCategory
    const matchesLevel = !selectedLevel || selectedLevel === 'सबै' || 
                        (selectedLevel === 'सुरुवाती' && tutorial.level === 'beginner') ||
                        (selectedLevel === 'बीचको' && tutorial.level === 'intermediate') ||
                        (selectedLevel === 'उन्नत' && tutorial.level === 'advanced')
    
    return matchesSearch && matchesCategory && matchesLevel
  })

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
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
            भिडियो ट्युटोरियल
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Video Tutorials
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि विधिहरू सिक्नका लागि विशेषज्ञहरूद्वारा बनाइएका भिडियो ट्युटोरियलहरू
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
              placeholder="ट्युटोरियल खोज्नुहोस्... | Search tutorials..."
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
            {categories.map((category, index) => (
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
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">स्तर:</span>
            </div>
            {levels.map((level, index) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Button size="lg" className="opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">
                    {tutorial.duration}
                  </Badge>
                  <Badge className={`absolute top-2 left-2 ${getLevelColor(tutorial.level)}`}>
                    {tutorial.level === 'beginner' ? 'सुरुवाती' : 
                     tutorial.level === 'intermediate' ? 'बीचको' : 'उन्नत'}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2 mb-2">
                        {tutorial.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {tutorial.description}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{tutorial.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{tutorial.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{tutorial.publishedAt}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-agri-green-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-agri-green-600">
                        {tutorial.instructor.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{tutorial.instructor}</p>
                      <p className="text-xs text-muted-foreground">{tutorial.category}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      हेर्नुहोस्
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
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

        {/* Empty State */}
        {filteredTutorials.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै ट्युटोरियल फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}
      </div>
    </MainLayout>
  )
}
