'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Play, 
  Download, 
  Search, 
  Filter,
  Clock,
  Eye,
  Users,
  Star,
  CheckCircle,
  PlayCircle,
  FileText,
  Image as ImageIcon,
  Video,
  Headphones,
  Award,
  TrendingUp,
  Calendar,
  Filter as FilterIcon,
  Bookmark as BookmarkIcon,
  Share as ShareIcon
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface Tutorial {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  type: 'video' | 'article' | 'audio' | 'infographic' | 'guide'
  category: string
  categoryEn: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  language: 'nepali' | 'english' | 'both'
  duration: string
  durationEn: string
  author: string
  authorEn: string
  authorAvatar: string
  thumbnail: string
  views: number
  likes: number
  rating: number
  completed: boolean
  progress: number
  tags: string[]
  tagsEn: string[]
  createdAt: string
  isBookmarked: boolean
  isLiked: boolean
  materials: {
    type: string
    url: string
    name: string
    nameEn: string
  }[]
}

interface LearningPath {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  category: string
  categoryEn: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  durationEn: string
  tutorials: string[]
  enrolled: number
  completed: number
  progress: number
  isEnrolled: boolean
  thumbnail: string
  instructor: {
    name: string
    nameEn: string
    avatar: string
    bio: string
    bioEn: string
  }
}

export default function LearningCenter() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([])
  const [filteredTutorials, setFilteredTutorials] = useState<Tutorial[]>([])
  const [filteredPaths, setFilteredPaths] = useState<LearningPath[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState<'tutorials' | 'paths'>('tutorials')
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null)

  useState(() => {
    // Initialize with mock data
    const mockTutorials: Tutorial[] = [
      {
        id: '1',
        title: 'जैविक खेतीको परिचय',
        titleEn: 'Introduction to Organic Farming',
        description: 'जैविक खेतीको मूलभूत सिद्धान्तहरू र आधुनिक तरिकाहरूको विस्तृत जानकारी',
        descriptionEn: 'Fundamental principles and modern techniques of organic farming',
        type: 'video',
        category: 'जैविक खेती',
        categoryEn: 'Organic Farming',
        difficulty: 'beginner',
        language: 'nepali',
        duration: '४५ मिनेट',
        durationEn: '45 minutes',
        author: 'डा. राम शर्मा',
        authorEn: 'Dr. Ram Sharma',
        authorAvatar: '/avatars/ram-sharma.jpg',
        thumbnail: '/tutorials/organic-farming.jpg',
        views: 1234,
        likes: 89,
        rating: 4.8,
        completed: false,
        progress: 0,
        tags: ['जैविक', 'खेती', 'मल', 'सिद्धान्त'],
        tagsEn: ['organic', 'farming', 'fertilizer', 'principles'],
        createdAt: '२ दिन अगाड',
        isBookmarked: false,
        isLiked: false,
        materials: [
          {
            type: 'pdf',
            url: '/materials/organic-farming-guide.pdf',
            name: 'जैविक खेती गाइड',
            nameEn: 'Organic Farming Guide'
          },
          {
            type: 'image',
            url: '/materials/organic-chart.jpg',
            name: 'जैविक खेती चार्ट',
            nameEn: 'Organic Farming Chart'
          }
        ]
      },
      {
        id: '2',
        title: 'टमाटर रोपण र खेती',
        titleEn: 'Tomato Planting and Cultivation',
        description: 'टमाटरको उत्पादनका लागि उत्तम विधि, रोग नियन्त्रण र बढुवा',
        descriptionEn: 'Best practices for tomato production, disease control and yield improvement',
        type: 'article',
        category: 'तरकारी खेती',
        categoryEn: 'Vegetable Farming',
        difficulty: 'intermediate',
        language: 'both',
        duration: '२० मिनेट पढ्न',
        durationEn: '20 minutes read',
        author: 'सीता गुरुङ',
        authorEn: 'Sita Gurung',
        authorAvatar: '/avatars/sita-gurung.jpg',
        thumbnail: '/tutorials/tomato-cultivation.jpg',
        views: 856,
        likes: 67,
        rating: 4.6,
        completed: true,
        progress: 100,
        tags: ['टमाटर', 'रोपण', 'रोग', 'उत्पादन'],
        tagsEn: ['tomato', 'planting', 'disease', 'production'],
        createdAt: '१ सप्ताह अगाड',
        isBookmarked: true,
        isLiked: true,
        materials: [
          {
            type: 'pdf',
            url: '/materials/tomato-guide.pdf',
            name: 'टमाटर खेती गाइड',
            nameEn: 'Tomato Farming Guide'
          }
        ]
      },
      {
        id: '3',
        title: 'बाली रोग पहिचान र उपचार',
        titleEn: 'Crop Disease Identification and Treatment',
        description: 'सामान्य बाली रोगहरूको पहिचान, लक्षण र उपचार विधि',
        descriptionEn: 'Identification of common crop diseases, symptoms and treatment methods',
        type: 'infographic',
        category: 'रोग नियन्त्रण',
        categoryEn: 'Disease Control',
        difficulty: 'beginner',
        language: 'nepali',
        duration: '१५ मिनेट',
        durationEn: '15 minutes',
        author: 'हरि बहादुर',
        authorEn: 'Hari Bahadur',
        authorAvatar: '/avatars/hari-bahadur.jpg',
        thumbnail: '/tutorials/disease-identification.jpg',
        views: 2341,
        likes: 156,
        rating: 4.9,
        completed: false,
        progress: 45,
        tags: ['रोग', 'पहिचान', 'उपचार', 'स्वास्थ्य'],
        tagsEn: ['disease', 'identification', 'treatment', 'health'],
        createdAt: '३ दिन अगाड',
        isBookmarked: false,
        isLiked: false,
        materials: [
          {
            type: 'pdf',
            url: '/materials/disease-chart.pdf',
            name: 'रोग पहिचान चार्ट',
            nameEn: 'Disease Identification Chart'
          }
        ]
      },
      {
        id: '4',
        title: 'आधुनिक सिंचाई प्रविधि',
        titleEn: 'Modern Irrigation Techniques',
        description: 'ड्रिप सिंचाई, स्प्रिंकलर र अन्य आधुनिक सिंचाई प्रविधिहरू',
        descriptionEn: 'Drip irrigation, sprinklers and other modern irrigation techniques',
        type: 'audio',
        category: 'सिंचाई',
        categoryEn: 'Irrigation',
        difficulty: 'intermediate',
        language: 'nepali',
        duration: '३० मिनेट',
        durationEn: '30 minutes',
        author: 'डा. गोपाल श्रेष्ठ',
        authorEn: 'Dr. Gopal Shrestha',
        authorAvatar: '/avatars/gopal-shrestha.jpg',
        thumbnail: '/tutorials/irrigation.jpg',
        views: 567,
        likes: 43,
        rating: 4.5,
        completed: false,
        progress: 20,
        tags: ['सिंचाई', 'ड्रिप', 'स्प्रिंकलर', 'पानी'],
        tagsEn: ['irrigation', 'drip', 'sprinkler', 'water'],
        createdAt: '५ दिन अगाड',
        isBookmarked: true,
        isLiked: false,
        materials: [
          {
            type: 'pdf',
            url: '/materials/irrigation-guide.pdf',
            name: 'सिंचाई गाइड',
            nameEn: 'Irrigation Guide'
          }
        ]
      }
    ]

    const mockLearningPaths: LearningPath[] = [
      {
        id: '1',
        title: 'जैविक कृषक बन्नुहोस्',
        titleEn: 'Become an Organic Farmer',
        description: 'शुरुवात देखि अघिल्लोसम्म जैविक खेतीको पूर्ण ज्ञान',
        descriptionEn: 'Complete knowledge of organic farming from basics to advanced',
        category: 'जैविक खेती',
        categoryEn: 'Organic Farming',
        difficulty: 'beginner',
        duration: '३ महिना',
        durationEn: '3 months',
        tutorials: ['1', '2', '3', '4'],
        enrolled: 234,
        completed: 89,
        progress: 0,
        isEnrolled: false,
        thumbnail: '/paths/organic-farmer.jpg',
        instructor: {
          name: 'डा. राम शर्मा',
          nameEn: 'Dr. Ram Sharma',
          avatar: '/avatars/ram-sharma.jpg',
          bio: 'जैविक खेती विशेषज्ञ',
          bioEn: 'Organic Farming Expert'
        }
      },
      {
        id: '2',
        title: 'तरकारी खेती विशेषज्ञ',
        titleEn: 'Vegetable Farming Expert',
        description: 'सबै प्रकारका तरकारी खेतीको व्यावसायिक ज्ञान',
        descriptionEn: 'Commercial knowledge of all types of vegetable farming',
        category: 'तरकारी खेती',
        categoryEn: 'Vegetable Farming',
        difficulty: 'intermediate',
        duration: '६ महिना',
        durationEn: '6 months',
        tutorials: ['2', '3'],
        enrolled: 156,
        completed: 67,
        progress: 25,
        isEnrolled: true,
        thumbnail: '/paths/vegetable-expert.jpg',
        instructor: {
          name: 'सीता गुरुङ',
          nameEn: 'Sita Gurung',
          avatar: '/avatars/sita-gurung.jpg',
          bio: 'तरकारी खेती विशेषज्ञ',
          bioEn: 'Vegetable Farming Expert'
        }
      }
    ]

    setTutorials(mockTutorials)
    setLearningPaths(mockLearningPaths)
    setFilteredTutorials(mockTutorials)
    setFilteredPaths(mockLearningPaths)
    setLoading(false)
  })

  useState(() => {
    filterContent()
  }, [tutorials, learningPaths, selectedCategory, selectedType, selectedDifficulty, searchTerm])

  const filterContent = () => {
    let filteredTuts = [...tutorials]
    let filteredLps = [...learningPaths]

    // Filter tutorials
    if (selectedCategory !== 'all') {
      filteredTuts = filteredTuts.filter(tutorial => tutorial.category === selectedCategory)
    }
    if (selectedType !== 'all') {
      filteredTuts = filteredTuts.filter(tutorial => tutorial.type === selectedType)
    }
    if (selectedDifficulty !== 'all') {
      filteredTuts = filteredTuts.filter(tutorial => tutorial.difficulty === selectedDifficulty)
    }
    if (searchTerm) {
      filteredTuts = filteredTuts.filter(tutorial => 
        tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter learning paths
    if (selectedCategory !== 'all') {
      filteredLps = filteredLps.filter(path => path.category === selectedCategory)
    }
    if (selectedDifficulty !== 'all') {
      filteredLps = filteredLps.filter(path => path.difficulty === selectedDifficulty)
    }
    if (searchTerm) {
      filteredLps = filteredLps.filter(path => 
        path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        path.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredTutorials(filteredTuts)
    setFilteredPaths(filteredLps)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle className="h-5 w-5" />
      case 'article': return <FileText className="h-5 w-5" />
      case 'audio': return <Headphones className="h-5 w-5" />
      case 'infographic': return <ImageIcon className="h-5 w-5" />
      case 'guide': return <BookOpen className="h-5 w-5" />
      default: return <BookOpen className="h-5 w-5" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500'
      case 'intermediate': return 'bg-yellow-500'
      case 'advanced': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'सुरुवाती'
      case 'intermediate': return 'मध्यम'
      case 'advanced': return 'उन्नत'
      default: return 'अज्ञात'
    }
  }

  const categories = [
    { value: 'all', label: 'सबै', labelEn: 'All' },
    { value: 'जैविक खेती', label: 'जैविक खेती', labelEn: 'Organic Farming' },
    { value: 'तरकारी खेती', label: 'तरकारी खेती', labelEn: 'Vegetable Farming' },
    { value: 'अन्नबाली', label: 'अन्नबाली', labelEn: 'Grain Farming' },
    { value: 'रोग नियन्त्रण', label: 'रोग नियन्त्रण', labelEn: 'Disease Control' },
    { value: 'सिंचाई', label: 'सिंचाई', labelEn: 'Irrigation' },
    { value: 'बजार', label: 'बजार', labelEn: 'Market' }
  ]

  const types = [
    { value: 'all', label: 'सबै', labelEn: 'All' },
    { value: 'video', label: 'भिडियो', labelEn: 'Video' },
    { value: 'article', label: 'लेख', labelEn: 'Article' },
    { value: 'audio', label: 'अडियो', labelEn: 'Audio' },
    { value: 'infographic', label: 'इन्फोग्राफिक', labelEn: 'Infographic' },
    { value: 'guide', label: 'गाइड', labelEn: 'Guide' }
  ]

  const difficulties = [
    { value: 'all', label: 'सबै', labelEn: 'All' },
    { value: 'beginner', label: 'सुरुवाती', labelEn: 'Beginner' },
    { value: 'intermediate', label: 'मध्यम', labelEn: 'Intermediate' },
    { value: 'advanced', label: 'उन्नत', labelEn: 'Advanced' }
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
            📚 सिक्न केन्द्र | Learning Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि विशेषज्यहरूबाट सिक्नुहोस् र आफ्नो खेती सुधार्नुहोस्
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" variant="agri" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex space-x-4 border-b">
                <button
                  onClick={() => setActiveTab('tutorials')}
                  className={`pb-2 px-1 border-b-2 transition-colors ${
                    activeTab === 'tutorials'
                      ? 'border-agri-green-500 text-agri-green-600'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>ट्युटोरियलहरू</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('paths')}
                  className={`pb-2 px-1 border-b-2 transition-colors ${
                    activeTab === 'paths'
                      ? 'border-agri-green-500 text-agri-green-600'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>सिकाइ मार्गहरू</span>
                  </div>
                </button>
              </div>
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
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="ट्युटोरियल खोज्नुहोस्..."
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

                    {/* Type Filter (only for tutorials) */}
                    {activeTab === 'tutorials' && (
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="px-3 py-2 border rounded-md"
                      >
                        {types.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    )}

                    {/* Difficulty Filter */}
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="px-3 py-2 border rounded-md"
                    >
                      {difficulties.map((difficulty) => (
                        <option key={difficulty.value} value={difficulty.value}>
                          {difficulty.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Content */}
            {activeTab === 'tutorials' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTutorials.map((tutorial, index) => (
                    <motion.div
                      key={tutorial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedTutorial(tutorial)}>
                        <div className="relative">
                          <img
                            src={tutorial.thumbnail}
                            alt={tutorial.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className={`${getDifficultyColor(tutorial.difficulty)} text-white text-xs`}>
                              {getDifficultyText(tutorial.difficulty)}
                            </Badge>
                          </div>
                          <div className="absolute top-2 right-2">
                            <div className="flex items-center space-x-1">
                              {getTypeIcon(tutorial.type)}
                              <Badge variant="secondary" className="text-xs">
                                {tutorial.type === 'video' && 'भिडियो'}
                                {tutorial.type === 'article' && 'लेख'}
                                {tutorial.type === 'audio' && 'अडियो'}
                                {tutorial.type === 'infographic' && 'इन्फोग्राफिक'}
                                {tutorial.type === 'guide' && 'गाइड'}
                              </Badge>
                            </div>
                          </div>
                          {tutorial.progress > 0 && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                              <div className="flex items-center justify-between text-white text-xs mb-1">
                                <span>प्रगति</span>
                                <span>{tutorial.progress}%</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-1">
                                <div 
                                  className="bg-agri-green-500 h-1 rounded-full"
                                  style={{ width: `${tutorial.progress}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg line-clamp-2">{tutorial.title}</CardTitle>
                              <CardDescription className="text-sm mt-1">
                                {tutorial.author} • {tutorial.duration}
                              </CardDescription>
                            </div>
                            {tutorial.completed && (
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {tutorial.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {tutorial.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{tutorial.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3" />
                                <span>{tutorial.rating}</span>
                              </div>
                            </div>
                            <span>{tutorial.createdAt}</span>
                          </div>

                          <div className="flex space-x-2">
                            <Button variant="agri" className="flex-1">
                              {tutorial.progress > 0 ? 'जारी राख्नुहोस्' : 'सुरु गर्नुहोस्'}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPaths.map((path, index) => (
                    <motion.div
                      key={path.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full">
                        <div className="relative">
                          <img
                            src={path.thumbnail}
                            alt={path.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className={`${getDifficultyColor(path.difficulty)} text-white text-xs`}>
                              {getDifficultyText(path.difficulty)}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{path.title}</CardTitle>
                          <CardDescription>
                            {path.instructor.name} • {path.duration}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {path.description}
                          </p>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3" />
                              <span>{path.enrolled} सहभागी</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="h-3 w-3" />
                              <span>{path.completed} पूर्ण</span>
                            </div>
                          </div>

                          {path.progress > 0 && (
                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span>तपाईंको प्रगति</span>
                                <span>{path.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-agri-green-500 h-2 rounded-full"
                                  style={{ width: `${path.progress}%` }}
                                />
                              </div>
                            </div>
                          )}

                          <div className="flex space-x-2">
                            <Button 
                              variant={path.isEnrolled ? "agri" : "outline"} 
                              className="flex-1"
                            >
                              {path.isEnrolled ? 'जारी राख्नुहोस्' : 'दर्ता गर्नुहोस्'}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* No Content State */}
            {((activeTab === 'tutorials' && filteredTutorials.length === 0) ||
              (activeTab === 'paths' && filteredPaths.length === 0)) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">कुनै सामग्री फेला परेन</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? 'तपाईंको खोजसँग मेल खानेको छैन' : 'यो वर्गमा कुनै सामग्री छैन'}
                </p>
              </motion.div>
            )}
          </div>
        )}

        {/* Tutorial Detail Modal */}
        {selectedTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTutorial(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-background rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{selectedTutorial.title}</h3>
                <Button variant="outline" size="sm" onClick={() => setSelectedTutorial(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img
                      src={selectedTutorial.thumbnail}
                      alt={selectedTutorial.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">विवरण</h4>
                      <p className="text-sm text-muted-foreground">{selectedTutorial.description}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{selectedTutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{selectedTutorial.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{selectedTutorial.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">ट्यागहरू</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedTutorial.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedTutorial.materials.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">सामग्रीहरू</h4>
                    <div className="space-y-2">
                      {selectedTutorial.materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4" />
                            <span className="text-sm">{material.name}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            डाउनलोड
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button variant="agri" className="flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    {selectedTutorial.progress > 0 ? 'जारी राख्नुहोस्' : 'सुरु गर्नुहोस्'}
                  </Button>
                  <Button variant="outline">
                    <BookmarkIcon className="h-4 w-4 mr-2" />
                    {selectedTutorial.isBookmarked ? 'सेभ गरिएको' : 'बुकमार्क गर्नुहोस्'}
                  </Button>
                  <Button variant="outline">
                    <Share className="h-4 w-4 mr-2" />
                    सेयर गर्नुहोस्
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
