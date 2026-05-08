'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  Search,
  Filter,
  TrendingUp,
  User,
  Tag,
  Bookmark,
  ChevronRight,
  PenTool
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface BlogPost {
  id: string
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  content: string
  contentEn: string
  author: string
  authorEn: string
  authorAvatar: string
  publishedAt: string
  readTime: string
  readTimeEn: string
  category: string
  categoryEn: string
  tags: string[]
  tagsEn: string[]
  featured: boolean
  views: string
  likes: string
  comments: string
  imageUrl: string
  isBookmarked: boolean
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'वर्षात मकै खेती: अवसर र चुनौतीहरू',
      titleEn: 'Maize Farming in Monsoon: Opportunities and Challenges',
      excerpt: 'वर्षात मकै खेती गर्ने उत्तम तरिका, फाइदा र बचाउने उपायहरू',
      excerptEn: 'Best methods for maize farming during monsoon, benefits and preventive measures',
      content: 'वर्षात मकै खेतीको बारेमा विस्तृत जानकारी...',
      contentEn: 'Detailed information about maize farming in monsoon...',
      author: 'कृषि विशेषज्ञ',
      authorEn: 'Agriculture Expert',
      authorAvatar: '/authors/agriculture-expert.jpg',
      publishedAt: '२०२४-०५-०५',
      readTime: '८ मिनेट',
      readTimeEn: '8 minutes',
      category: 'अन्नबाली',
      categoryEn: 'Cereals',
      tags: ['मकै', 'वर्षा', 'खेती', 'उत्पादन'],
      tagsEn: ['Maize', 'Monsoon', 'Farming', 'Production'],
      featured: true,
      views: '१,२३४',
      likes: '८९',
      comments: '१२',
      imageUrl: '/blog/maize-monsoon.jpg',
      isBookmarked: false
    },
    {
      id: '2',
      title: 'जैविक मलको घरेलु उत्पादन: पूर्ण गाइड',
      titleEn: 'Homemade Organic Fertilizer: Complete Guide',
      excerpt: 'घरमै बनाउन सकिने जैविक मलको तयारी र प्रयोग विधि',
      excerptEn: 'Preparation and application methods of homemade organic fertilizer',
      content: 'जैविक मल बनाउने तरिकाहरू...',
      contentEn: 'Methods to make organic fertilizer...',
      author: 'जैविक खेती विशेषज्ञ',
      authorEn: 'Organic Farming Expert',
      authorAvatar: '/authors/organic-expert.jpg',
      publishedAt: '२०२४-०५-०३',
      readTime: '१० मिनेट',
      readTimeEn: '10 minutes',
      category: 'जैविक खेती',
      categoryEn: 'Organic Farming',
      tags: ['जैविक', 'मल', 'घरेलु', 'पर्यावरण मैत्री'],
      tagsEn: ['Organic', 'Fertilizer', 'Homemade', 'Eco-friendly'],
      featured: true,
      views: '२,५६७',
      likes: '१५६',
      comments: '२३',
      imageUrl: '/blog/organic-fertilizer.jpg',
      isBookmarked: true
    },
    {
      id: '3',
      title: 'टमाटरको रोग रोकथाम: नयाँ प्रविधिहरू',
      titleEn: 'Tomato Disease Prevention: New Techniques',
      excerpt: 'टमाटरका विभिन्न रोगहरू र ती रोक्ने आधुनिक तरिकाहरू',
      excerptEn: 'Various tomato diseases and modern methods to prevent them',
      content: 'टमाटर रोग रोकथामका उपायहरू...',
      contentEn: 'Tomato disease prevention measures...',
      author: 'रोग विशेषज्ञ',
      authorEn: 'Disease Expert',
      authorAvatar: '/authors/disease-expert.jpg',
      publishedAt: '२०२४-०५-०१',
      readTime: '१२ मिनेट',
      readTimeEn: '12 minutes',
      category: 'रोग नियन्त्रण',
      categoryEn: 'Disease Control',
      tags: ['टमाटर', 'रोग', 'नियन्त्रण', 'प्रविधि'],
      tagsEn: ['Tomato', 'Disease', 'Control', 'Technique'],
      featured: false,
      views: '९८७',
      likes: '६७',
      comments: '८',
      imageUrl: '/blog/tomato-disease.jpg',
      isBookmarked: false
    },
    {
      id: '4',
      title: 'आधुनिक सिंचाई प्रणाली: बचत र उत्पादकता',
      titleEn: 'Modern Irrigation Systems: Savings and Productivity',
      excerpt: 'पानी बचाउने र उत्पादन बढाउने आधुनिक सिंचाई तरिकाहरू',
      excerptEn: 'Modern irrigation methods that save water and increase production',
      content: 'आधुनिक सिंचाई प्रणालीको बारेमा...',
      contentEn: 'About modern irrigation systems...',
      author: 'सिंचाई विशेषज्ञ',
      authorEn: 'Irrigation Expert',
      authorAvatar: '/authors/irrigation-expert.jpg',
      publishedAt: '२०२४-०४-२८',
      readTime: '१५ मिनेट',
      readTimeEn: '15 minutes',
      category: 'सिंचाई',
      categoryEn: 'Irrigation',
      tags: ['सिंचाई', 'पानी बचत', 'आधुनिक', 'प्रविधि'],
      tagsEn: ['Irrigation', 'Water Saving', 'Modern', 'Technology'],
      featured: false,
      views: '१,४५६',
      likes: '९८',
      comments: '१५',
      imageUrl: '/blog/irrigation-system.jpg',
      isBookmarked: false
    }
  ]

  const categories = ['सबै', 'अन्नबाली', 'तरकारी खेती', 'जैविक खेती', 'रोग नियन्त्रण', 'सिंचाई', 'पशुपालन']
  const allTags = ['सबै', 'मकै', 'वर्षा', 'जैविक', 'मल', 'टमाटर', 'रोग', 'सिंचाई', 'पानी बचत']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || post.category === selectedCategory
    const matchesTag = !selectedTag || selectedTag === 'सबै' || post.tags.includes(selectedTag)
    
    return matchesSearch && matchesCategory && matchesTag
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

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
            कृषि ब्लग
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Agriculture Blog
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि विशेषज्ञहरूद्वारा लेखिएका लेखहरू र नयाँ जानकारीहरू
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
              placeholder="ब्लग खोज्नुहोस्... | Search blogs..."
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
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">ट्याग:</span>
            </div>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-agri-green-600" />
                विशेष लेखहरू
              </h2>
              <Button variant="outline" size="sm">
                सबै हेर्नुहोस्
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-agri-green-600 text-white">
                        विशेष
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2 mb-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.publishedAt}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-agri-green-100 flex items-center justify-center">
                            <User className="h-4 w-4 text-agri-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Bookmark className={`h-4 w-4 ${post.isBookmarked ? 'fill-current text-agri-green-600' : ''}`} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 mb-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishedAt}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-agri-green-100 flex items-center justify-center">
                        <User className="h-3 w-3 text-agri-green-600" />
                      </div>
                      <p className="text-xs font-medium">{post.author}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon">
                        <Bookmark className={`h-3 w-3 ${post.isBookmarked ? 'fill-current text-agri-green-600' : ''}`} />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
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
            <PenTool className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै ब्लग फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-agri-green-50 to-sky-blue-50 dark:from-agri-green-950 dark:to-sky-blue-950 border-agri-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">नयाँ लेखहरूको अपडेट पाउनुहोस्</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                हामी नयाँ ब्लग पोस्ट गर्दा तपाईंलाई सूचना पाउनुहुनेछ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="तपाईंको इमेल..."
                  className="flex-1"
                />
                <Button className="bg-agri-green-600 hover:bg-agri-green-700">
                  सदस्यता लिनुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
