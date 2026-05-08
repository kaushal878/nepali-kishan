'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  Eye, 
  Heart, 
  Share2,
  TrendingUp,
  Users,
  Calendar,
  Pin,
  Lock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  Award,
  Bookmark,
  ChevronRight,
  User,
  Reply
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface ForumPost {
  id: string
  title: string
  titleEn: string
  content: string
  contentEn: string
  author: string
  authorEn: string
  authorAvatar: string
  authorRole: 'farmer' | 'expert' | 'student' | 'official'
  category: string
  categoryEn: string
  tags: string[]
  tagsEn: string[]
  status: 'open' | 'closed' | 'solved'
  priority: 'low' | 'medium' | 'high'
  views: string
  replies: string
  likes: string
  createdAt: string
  lastActivity: string
  isPinned: boolean
  isLocked: boolean
  isBookmarked: boolean
  hasBestAnswer: boolean
}

export default function Forum() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')

  const forumPosts: ForumPost[] = [
    {
      id: '1',
      title: 'टमाटरका पातहरू पहेँलो हुँदै छन्, के गर्नुहुन्छ?',
      titleEn: 'Tomato leaves are turning yellow, what should I do?',
      content: 'मेरा टमाटरका पातहरू पछिल्लो दुई हप्तादेखि पहेँलो हुँदै छन्। बोटहरू साना छन् र अझै बढ्न सकेका छैनन्।',
      contentEn: 'My tomato leaves have been turning yellow for the past two weeks. The plants are small and not growing well.',
      author: 'राम बहादुर',
      authorEn: 'Ram Bahadur',
      authorAvatar: '/avatars/ram-bahadur.jpg',
      authorRole: 'farmer',
      category: 'रोग नियन्त्रण',
      categoryEn: 'Disease Control',
      tags: ['टमाटर', 'पात पहेँलो', 'रोग', 'समस्या'],
      tagsEn: ['Tomato', 'Yellow Leaves', 'Disease', 'Problem'],
      status: 'open',
      priority: 'high',
      views: '१२३',
      replies: '८',
      likes: '१५',
      createdAt: '२०२४-०५-०५',
      lastActivity: '२०२४-०५-०८',
      isPinned: true,
      isLocked: false,
      isBookmarked: false,
      hasBestAnswer: false
    },
    {
      id: '2',
      title: 'नयाँ सिंचाई प्रणाली: ड्रिप सिंचाई र स्प्रिंकलर कुन राम्रो?',
      titleEn: 'New Irrigation System: Drip Irrigation vs Sprinkler - Which is better?',
      content: 'म मेरो २ बिगाहा जमिनमा नयाँ सिंचाई प्रणाली लगाउन चाहन्छु। ड्रिप सिंचाई र स्प्रिंकलर बीच कुन छनोट गर्नु राम्रो हुन्छ?',
      contentEn: 'I want to install a new irrigation system on my 2 bigha land. Which should I choose between drip irrigation and sprinkler?',
      author: 'हरि शर्मा',
      authorEn: 'Hari Sharma',
      authorAvatar: '/avatars/hari-sharma.jpg',
      authorRole: 'farmer',
      category: 'सिंचाई',
      categoryEn: 'Irrigation',
      tags: ['सिंचाई', 'ड्रिप', 'स्प्रिंकलर', 'निर्णय'],
      tagsEn: ['Irrigation', 'Drip', 'Sprinkler', 'Decision'],
      status: 'solved',
      priority: 'medium',
      views: '२३४',
      replies: '१२',
      likes: '२८',
      createdAt: '२०२४-०५-०३',
      lastActivity: '२०२४-०५-०७',
      isPinned: false,
      isLocked: false,
      isBookmarked: true,
      hasBestAnswer: true
    },
    {
      id: '3',
      title: 'जैविक मलको बजार मूल्य र ग्राहकहरू कति छन्?',
      titleEn: 'Organic Fertilizer Market Price and Customer Base',
      content: 'म जैविक मल बनाउन थालेको छु। बजारमूल्य कति राख्नु उपयुक्त हुन्छ र ग्राहकहरू कसरी खोज्ने?',
      contentEn: 'I have started making organic fertilizer. What is the appropriate market price and how to find customers?',
      author: 'सीता देवी',
      authorEn: 'Sita Devi',
      authorAvatar: '/avatars/sita-devi.jpg',
      authorRole: 'farmer',
      category: 'बजार',
      categoryEn: 'Market',
      tags: ['जैविक मल', 'बजार', 'मूल्य', '्राहक'],
      tagsEn: ['Organic Fertilizer', 'Market', 'Price', 'Customers'],
      status: 'open',
      priority: 'medium',
      views: '८९',
      replies: '६',
      likes: '१२',
      createdAt: '२०२४-०५-०४',
      lastActivity: '२०२४-०५-०६',
      isPinned: false,
      isLocked: false,
      isBookmarked: false,
      hasBestAnswer: false
    },
    {
      id: '4',
      title: 'धान रोप्ने उत्तम समय कहिले हुन्छ?',
      titleEn: 'What is the best time to plant rice?',
      content: 'यो वर्ष धान रोप्ने उत्तम समय कहिले हुन्छ? मौसम परिवर्तनका कारण अन्यौला समयमा रोप्नु उपयुक्त होला?',
      contentEn: 'What is the best time to plant rice this year? Due to climate change, would it be appropriate to plant at unusual times?',
      author: 'कृषि विशेषज्ञ',
      authorEn: 'Agriculture Expert',
      authorAvatar: '/avatars/agriculture-expert.jpg',
      authorRole: 'expert',
      category: 'अन्नबाली',
      categoryEn: 'Cereals',
      tags: ['धान', 'रोपाइ', 'समय', 'मौसम'],
      tagsEn: ['Rice', 'Planting', 'Time', 'Climate'],
      status: 'closed',
      priority: 'low',
      views: '१५६',
      replies: '४',
      likes: '८',
      createdAt: '२०२४-०४-२८',
      lastActivity: '२०२४-०५-०१',
      isPinned: false,
      isLocked: true,
      isBookmarked: false,
      hasBestAnswer: true
    }
  ]

  const categories = ['सबै', 'रोग नियन्त्रण', 'सिंचाई', 'बजार', 'अन्नबाली', 'तरकारी खेती', 'जैविक खेती']
  const statuses = ['सबै', 'खुल्ला', 'बन्द', 'समाधान']
  const statusesEn = ['All', 'Open', 'Closed', 'Solved']

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || post.category === selectedCategory
    const matchesStatus = !selectedStatus || selectedStatus === 'सबै' ||
                        (selectedStatus === 'खुल्ला' && post.status === 'open') ||
                        (selectedStatus === 'बन्द' && post.status === 'closed') ||
                        (selectedStatus === 'समाधान' && post.status === 'solved')
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'open': return 'bg-blue-100 text-blue-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      case 'solved': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleColor = (role: string) => {
    switch(role) {
      case 'farmer': return 'bg-agri-green-100 text-agri-green-800'
      case 'expert': return 'bg-blue-100 text-blue-800'
      case 'student': return 'bg-purple-100 text-purple-800'
      case 'official': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleIcon = (role: string) => {
    switch(role) {
      case 'farmer': return <Users className="h-3 w-3" />
      case 'expert': return <Award className="h-3 w-3" />
      case 'student': return <HelpCircle className="h-3 w-3" />
      case 'official': return <CheckCircle className="h-3 w-3" />
      default: return <User className="h-3 w-3" />
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
            किसान छलफल
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Farmer Forum
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            किसानहरूबीच ज्ञान, अनुभव र समस्याहरूको समाधानको लागि खुल्ला छलफल प्लेटफर्म
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-center"
        >
          <Button size="lg" className="bg-agri-green-600 hover:bg-agri-green-700">
            <Plus className="h-5 w-5 mr-2" />
            नयाँ प्रश्न सोध्नुहोस्
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
              placeholder="प्रश्न खोज्नुहोस्... | Search questions..."
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
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">स्थिति:</span>
            </div>
            {statuses.map((status, index) => (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status)}
              >
                {status}
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
              <MessageSquare className="h-8 w-8 text-agri-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{forumPosts.length}</h3>
              <p className="text-sm text-muted-foreground">कुल प्रश्नहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {[...new Set(forumPosts.map(post => post.author))].length}
              </h3>
              <p className="text-sm text-muted-foreground">सहभागीहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {forumPosts.filter(post => post.status === 'solved').length}
              </h3>
              <p className="text-sm text-muted-foreground">समाधान भएका</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Reply className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {forumPosts.reduce((sum, post) => sum + parseInt(post.replies), 0)}
              </h3>
              <p className="text-sm text-muted-foreground">कुल उत्तरहरू</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Forum Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className={`hover:shadow-lg transition-all duration-300 ${post.isPinned ? 'border-yellow-200 bg-yellow-50/50' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {post.isPinned && (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            <Pin className="h-3 w-3 mr-1" />
                            पिन गरिएको
                          </Badge>
                        )}
                        {post.isLocked && (
                          <Badge className="bg-red-100 text-red-800">
                            <Lock className="h-3 w-3 mr-1" />
                            बन्द
                          </Badge>
                        )}
                        <Badge className={getStatusColor(post.status)}>
                          {post.status === 'open' ? 'खुल्ला' :
                           post.status === 'closed' ? 'बन्द' : 'समाधान'}
                        </Badge>
                        <Badge className={getPriorityColor(post.priority)}>
                          {post.priority === 'high' ? 'उच्च' :
                           post.priority === 'medium' ? 'मध्यम' : 'न्यून'}
                        </Badge>
                        {post.hasBestAnswer && (
                          <Badge className="bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            उत्तम उत्तर
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg mb-2 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.content}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Bookmark className={`h-4 w-4 ${post.isBookmarked ? 'fill-current text-agri-green-600' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Author and Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-agri-green-100 flex items-center justify-center">
                          <User className="h-4 w-4 text-agri-green-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium">{post.author}</p>
                            <Badge className={getRoleColor(post.authorRole)} variant="outline">
                              {getRoleIcon(post.authorRole)}
                              <span className="ml-1 text-xs">
                                {post.authorRole === 'farmer' ? 'किसान' :
                                 post.authorRole === 'expert' ? 'विशेषज्ञ' :
                                 post.authorRole === 'student' ? 'विद्यार्थी' : 'अधिकारी'}
                              </span>
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{post.createdAt}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Reply className="h-4 w-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.lastActivity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      हेर्नुहोस्
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
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै प्रश्न फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">छिटो सहायता</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  सामान्य प्रश्नहरू
                </Button>
                <Button variant="outline" className="justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  विशेषज्ञहरूसँग कुरा गर्नुहोस्
                </Button>
                <Button variant="outline" className="justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  छलफल नियमहरू
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
