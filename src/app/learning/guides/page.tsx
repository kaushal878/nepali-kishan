'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Download, 
  Share2, 
  Clock, 
  Eye,
  Filter,
  Search,
  FileText,
  Printer,
  Bookmark,
  Star,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface Guide {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  category: string
  categoryEn: string
  difficulty: 'easy' | 'medium' | 'hard'
  readTime: string
  readTimeEn: string
  views: string
  downloads: string
  rating: number
  author: string
  authorEn: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  tagsEn: string[]
  content: string
  contentEn: string
  pdfUrl: string
  isBookmarked: boolean
  isCompleted: boolean
}

export default function Guides() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')

  const guides: Guide[] = [
    {
      id: '1',
      title: 'टमाटर खेती गर्ने पूर्ण गाइड',
      titleEn: 'Complete Guide to Tomato Farming',
      description: 'टमाटर खेतीका लागि आवश्यक सबै जानकारी, बिउ देखि उत्पादनसम्म',
      descriptionEn: 'All necessary information for tomato farming, from seed to harvest',
      category: 'तरकारी खेती',
      categoryEn: 'Vegetable Farming',
      difficulty: 'easy',
      readTime: '१५ मिनेट',
      readTimeEn: '15 minutes',
      views: '२,३४५',
      downloads: '८९०',
      rating: 4.7,
      author: 'कृषि विशेषज्ञ',
      authorEn: 'Agriculture Expert',
      publishedAt: '२०२४-०४-१५',
      updatedAt: '२०२४-०५-०१',
      tags: ['टमाटर', 'खेती', 'सब्जी', 'उत्पादन'],
      tagsEn: ['Tomato', 'Farming', 'Vegetable', 'Production'],
      content: 'टमाटर खेतीका लागि...',
      contentEn: 'For tomato farming...',
      pdfUrl: '/guides/tomato-farming.pdf',
      isBookmarked: false,
      isCompleted: false
    },
    {
      id: '2',
      title: 'जैविक खेतीको आधारभूत जानकारी',
      titleEn: 'Basic Information about Organic Farming',
      description: 'जैविक खेतीका तरिका, फाइदा र चुनौतीहरू',
      descriptionEn: 'Methods, benefits, and challenges of organic farming',
      category: 'जैविक खेती',
      categoryEn: 'Organic Farming',
      difficulty: 'medium',
      readTime: '२० मिनेट',
      readTimeEn: '20 minutes',
      views: '३,४५६',
      downloads: '१,२३४',
      rating: 4.8,
      author: 'जैविक खेती विशेषज्ञ',
      authorEn: 'Organic Farming Expert',
      publishedAt: '२०२४-०३-२०',
      updatedAt: '२०२४-०४-२५',
      tags: ['जैविक', 'खेती', 'मल', 'रासायनिक मुक्त'],
      tagsEn: ['Organic', 'Farming', 'Fertilizer', 'Chemical-free'],
      content: 'जैविक खेतीको बारेमा...',
      contentEn: 'About organic farming...',
      pdfUrl: '/guides/organic-farming.pdf',
      isBookmarked: true,
      isCompleted: false
    },
    {
      id: '3',
      title: 'धान खेतीको उन्नत तरिका',
      titleEn: 'Advanced Rice Farming Methods',
      description: 'आधुनिक प्रविधिहरू प्रयोग गरेर धानको उत्पादन बढाउने तरिका',
      descriptionEn: 'Increasing rice production using modern techniques',
      category: 'अन्नबाली',
      categoryEn: 'Cereals',
      difficulty: 'hard',
      readTime: '२५ मिनेट',
      readTimeEn: '25 minutes',
      views: '१,८९०',
      downloads: '६७८',
      rating: 4.6,
      author: 'धान विशेषज्ञ',
      authorEn: 'Rice Expert',
      publishedAt: '२०२४-०२-१०',
      updatedAt: '२०२४-०४-१८',
      tags: ['धान', 'उन्नत', 'आधुनिक', 'उत्पादन'],
      tagsEn: ['Rice', 'Advanced', 'Modern', 'Production'],
      content: 'धान खेतीका उन्नत तरिकाहरू...',
      contentEn: 'Advanced rice farming methods...',
      pdfUrl: '/guides/advanced-rice.pdf',
      isBookmarked: false,
      isCompleted: true
    }
  ]

  const categories = ['सबै', 'तरकारी खेती', 'अन्नबाली', 'फलफूल', 'जैविक खेती', 'पशुपालन']
  const difficulties = ['सबै', 'सजिलो', 'मध्यम', 'कठिन']

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || guide.category === selectedCategory
    const matchesDifficulty = !selectedDifficulty || selectedDifficulty === 'सबै' ||
                             (selectedDifficulty === 'सजिलो' && guide.difficulty === 'easy') ||
                             (selectedDifficulty === 'मध्यम' && guide.difficulty === 'medium') ||
                             (selectedDifficulty === 'कठिन' && guide.difficulty === 'hard')
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
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
            मार्गदर्शन
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Guides
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि विधिहरूको विस्तृत जानकारी र चरण-बद्ध मार्गदर्शन
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
              placeholder="गाइड खोज्नुहोस्... | Search guides..."
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
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">कठिनाई:</span>
            </div>
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
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
              <FileText className="h-8 w-8 text-agri-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{guides.length}</h3>
              <p className="text-sm text-muted-foreground">कुल गाइडहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {guides.reduce((sum, guide) => sum + parseInt(guide.views.replace(',', '')), 0).toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">कुल पढ्नेहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {guides.reduce((sum, guide) => sum + parseInt(guide.downloads.replace(',', '')), 0).toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">कुल डाउनलोडहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {(guides.reduce((sum, guide) => sum + guide.rating, 0) / guides.length).toFixed(1)}
              </h3>
              <p className="text-sm text-muted-foreground">औसत रेटिङ</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getDifficultyColor(guide.difficulty)}>
                          {guide.difficulty === 'easy' ? 'सजिलो' : 
                           guide.difficulty === 'medium' ? 'मध्यम' : 'कठिन'}
                        </Badge>
                        {guide.isCompleted && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            पूरा
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg line-clamp-2 mb-2">
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {guide.description}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Bookmark className={`h-4 w-4 ${guide.isBookmarked ? 'fill-current text-agri-green-600' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {guide.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{guide.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{guide.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{guide.rating}</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{guide.author}</p>
                      <p className="text-xs text-muted-foreground">{guide.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">अपडेट: {guide.updatedAt}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <BookOpen className="h-4 w-4 mr-2" />
                      पढ्नुहोस्
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
        {filteredGuides.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै गाइड फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}
      </div>
    </MainLayout>
  )
}
