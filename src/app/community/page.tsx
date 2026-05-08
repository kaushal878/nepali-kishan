'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Heart, 
  Share, 
  Plus, 
  Search, 
  Filter,
  ThumbsUp,
  ThumbsDown,
  Eye,
  Calendar,
  MapPin,
  Image as ImageIcon,
  User,
  Clock,
  TrendingUp,
  Pin,
  MoreHorizontal,
  Bookmark as BookmarkIcon,
  Flag,
  Send,
  Camera,
  Paperclip
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface CommunityPost {
  id: string
  title: string
  titleEn: string
  content: string
  contentEn: string
  author: {
    name: string
    avatar: string
    location: string
    farmType: string
    experience: string
  }
  category: string
  tags: string[]
  images: string[]
  likes: number
  comments: number
  views: number
  isPinned: boolean
  createdAt: string
  isFollowing: boolean
  isLiked: boolean
  isBookmarked: boolean
}

interface Comment {
  id: string
  postId: string
  author: {
    name: string
    avatar: string
  }
  content: string
  likes: number
  createdAt: string
  isLiked: boolean
}

export default function CommunityForum() {
  const [posts, setPosts] = useState<CommunityPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<CommunityPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest')
  const [loading, setLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null)
  const [showNewPost, setShowNewPost] = useState(false)
  const [newPostContent, setNewPostContent] = useState('')

  useState(() => {
    // Initialize with mock data
    const mockPosts: CommunityPost[] = [
      {
        id: '1',
        title: 'टमाटर खेतीमा ढुसी रोगको समस्या',
        titleEn: 'Tomato blight problem in my field',
        content: 'मेरो टमाटर खेतीमा अचानक ढुसी रोग फैलिएको छ। पातहरू पहेँलो हुँदैछन् र झर्न थालिएको छन्। मैले के गर्नुपर्छ?',
        contentEn: 'My tomato field has been affected by severe blight disease. The leaves are turning yellow and falling off. What should I do?',
        author: {
          name: 'राम बहादुर थापा',
          avatar: '/avatars/ram-thapa.jpg',
          location: 'कास्की',
          farmType: 'तरकारी खेती',
          experience: '५ वर्ष'
        },
        category: 'रोग नियन्त्रण',
        tags: ['टमाटर', 'ढुसी', 'रोग', 'समस्या'],
        images: ['/posts/tomato-blight-1.jpg', '/posts/tomato-blight-2.jpg'],
        likes: 24,
        comments: 18,
        views: 156,
        isPinned: true,
        createdAt: '२ घण्टा अगाड',
        isFollowing: false,
        isLiked: false,
        isBookmarked: false
      },
      {
        id: '2',
        title: 'जैविक मलको बनाउने विधि',
        titleEn: 'Organic compost making method',
        content: 'मैले घरमै जैविक मल बनाउने सफलता पाएको छु। यो विधिले मेरो बालीको उत्पादन बढाएको छ र खर्च नियन्त्रण गरेको छ।',
        contentEn: 'I have successfully started making organic compost at home. This method has increased my crop yield and reduced pest problems.',
        author: {
          name: 'सीता शर्मा',
          avatar: '/avatars/sita-sharma.jpg',
          location: 'रुपन्देही',
          farmType: 'अन्नबाली खेती',
          experience: '८ वर्ष'
        },
        category: 'जैविक खेती',
        tags: ['जैविक', 'मल', 'खाद', 'उत्पादन'],
        images: ['/posts/compost-1.jpg', '/posts/compost-2.jpg'],
        likes: 45,
        comments: 32,
        views: 289,
        isPinned: false,
        createdAt: '१ घण्टा अगाड',
        isFollowing: true,
        isLiked: true,
        isBookmarked: true
      },
      {
        id: '3',
        title: 'नयाँ बालीको लागति बजार मूल्य',
        titleEn: 'New crop market prices',
        content: 'आजको बजारमा टमाटरको मूल्य बढेको छ। गाईँ, आलु र प्याजमा पनि राम्रो मूल्य छ। किसानहरूले यो अवसर पाउनुहोस्।',
        contentEn: 'Today\'s market prices have increased significantly for tomatoes. Good prices are also available for potatoes and peas. Farmers should take advantage of this opportunity.',
        author: {
          name: 'हरि बहादुर गुरुङ',
          avatar: '/avatars/hari-gurung.jpg',
          location: 'धादिङ',
          farmType: 'मिश्रित खेती',
          experience: '१२ वर्ष'
        },
        category: 'बजार जानकारी',
        tags: ['बजार', 'मूल्य', '�माटर', '�लु', 'प्याज'],
        images: ['/posts/market-prices.jpg'],
        likes: 67,
        comments: 41,
        views: 423,
        isPinned: false,
        createdAt: '१ घण्टा अगाड',
        isFollowing: false,
        isLiked: false,
        isBookmarked: false
      }
    ]

    setPosts(mockPosts)
    setFilteredPosts(mockPosts)
    setLoading(false)
  })

  useState(() => {
    filterPosts()
  }, [posts, selectedCategory, searchTerm, sortBy])

  const filterPosts = () => {
    let filtered = [...posts]

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Sort
    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case 'trending':
        filtered.sort((a, b) => b.views - a.views)
        break
    }

    setFilteredPosts(filtered)
  }

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ))
  }

  const handleBookmark = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, isBookmarked: !post.isBookmarked }
        : post
    ))
  }

  const handleFollow = (authorName: string) => {
    // Toggle follow status for author
    setPosts(prev => prev.map(post => 
      post.author.name === authorName 
        ? { ...post, isFollowing: !post.isFollowing }
        : post
    ))
  }

  const categories = [
    { value: 'all', label: 'सबै', labelEn: 'All' },
    { value: 'रोग नियन्त्रण', label: 'रोग नियन्त्रण', labelEn: 'Disease Control' },
    { value: 'जैविक खेती', label: 'जैविक खेती', labelEn: 'Organic Farming' },
    { value: 'बजार जानकारी', label: 'बजार जानकारी', labelEn: 'Market Info' },
    { value: 'उत्पादन सुझाव', label: 'उत्पादन सुझाव', labelEn: 'Production Tips' },
    { value: 'सरकारी सहयोग', label: 'सरकारी सहयोग', labelEn: 'Gov Support' },
    { value: 'अनुभव', label: 'अनुभव', labelEn: 'Experience' }
  ]

  const sortOptions = [
    { value: 'latest', label: 'नयाँ', labelEn: 'Latest' },
    { value: 'popular', label: 'लोकप्रिय', labelEn: 'Popular' },
    { value: 'trending', label: 'ट्रेन्डिङ', labelEn: 'Trending' }
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
            👥 समुदाय | Community Forum
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            किसानहरूसँग जोडिएर, अनुभव साझें, र समस्याहरू समाधान गर्नुहोस्
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" variant="agri" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Create Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="समुदाय खोज्नुहोस्..."
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

                    {/* Sort */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-3 py-2 border rounded-md"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    {/* Create Post Button */}
                    <Button variant="agri" onClick={() => setShowNewPost(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      नयाँ पोस्ट
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedPost(post)}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold">{post.author.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {post.author.location} • {post.author.farmType}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {post.isPinned && (
                            <Pin className="h-4 w-4 text-red-500" />
                          )}
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {/* Title and Category */}
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {post.createdAt}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {post.content}
                        </p>

                        {/* Images */}
                        {post.images.length > 0 && (
                          <div className="flex space-x-2 overflow-x-auto">
                            {post.images.slice(0, 3).map((image, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={image}
                                alt={`Post image ${imgIndex + 1}`}
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                              />
                            ))}
                            {post.images.length > 3 && (
                              <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-sm">
                                +{post.images.length - 3}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Engagement */}
                        <div className="flex items-center justify-between pt-3 border-t">
                          <div className="flex items-center space-x-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleLike(post.id)
                              }}
                              className={post.isLiked ? 'text-red-500' : ''}
                            >
                              <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                              <span className="ml-1 text-sm">{post.likes}</span>
                            </Button>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleBookmark(post.id)
                              }}
                              className={post.isBookmarked ? 'text-blue-500' : ''}
                            >
                              <BookmarkIcon className={`h-4 w-4 ${post.isBookmarked ? 'fill-current' : ''}`} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleFollow(post.author.name)
                              }}
                              className={post.isFollowing ? 'text-green-500' : ''}
                            >
                              <User className={`h-4 w-4 ${post.isFollowing ? 'fill-current' : ''}`} />
                              <span className="ml-1 text-sm">
                                {post.isFollowing ? 'फलोइङ' : 'फलो गर्नुहोस्'}
                              </span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* No Posts State */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">कुनै पोस्टहरू छैनन्</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? 'तपाईंको खोजसँग मेल खानेको छैन' : 'यो कोटेगोरीमा कुनै पोस्टहरू छैनन्'}
                </p>
              </motion.div>
            )}
          </div>
        )}

        {/* New Post Modal */}
        {showNewPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewPost(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-background rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">नयाँ पोस्ट सिर्जना गर्नुहोस्</h3>
                <Button variant="outline" size="sm" onClick={() => setShowNewPost(false)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">शीर्षक</label>
                  <Input placeholder="पोस्टको शीर्षक लेख्नुहोस्..." />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">विवरण</label>
                  <textarea
                    placeholder="तपाईंको अनुभव वा प्रश्न सेयर गर्नुहोस्..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="w-full p-3 border rounded-md min-h-[200px] resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">वर्ग</label>
                    <select className="w-full p-2 border rounded-md">
                      {categories.slice(1).map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">ट्यागहरू</label>
                    <Input placeholder="ट्यागहरू कमा रेख्नुहोस्" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    फोटो थप्नुहोस्
                  </Button>
                  <Button variant="outline" size="sm">
                    <Paperclip className="h-4 w-4 mr-2" />
                    फाइल संलग्नुहोस्
                  </Button>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowNewPost(false)}>
                    रद्द गर्नुहोस्
                  </Button>
                  <Button variant="agri">
                    <Send className="h-4 w-4 mr-2" />
                    पोस्ट गर्नुहोस्
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Post Detail Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-background rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{selectedPost.title}</h3>
                <Button variant="outline" size="sm" onClick={() => setSelectedPost(null)}>
                  ✕
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Author Info */}
                <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{selectedPost.author.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedPost.author.location} • {selectedPost.author.farmType} • {selectedPost.author.experience}
                    </p>
                  </div>
                  <Button
                    variant={selectedPost.isFollowing ? "agri" : "outline"}
                    size="sm"
                    onClick={() => handleFollow(selectedPost.author.name)}
                  >
                    {selectedPost.isFollowing ? 'फलोइङ' : 'फलो गर्नुहोस्'}
                  </Button>
                </div>

                {/* Content */}
                <div className="prose max-w-none">
                  <p>{selectedPost.content}</p>
                </div>

                {/* Images */}
                {selectedPost.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedPost.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Post image ${index + 1}`}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant={selectedPost.isLiked ? "agri" : "outline"}
                      size="sm"
                      onClick={() => handleLike(selectedPost.id)}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${selectedPost.isLiked ? 'fill-current' : ''}`} />
                      {selectedPost.likes}
                    </Button>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MessageCircle className="h-4 w-4" />
                      {selectedPost.comments}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      {selectedPost.views}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={selectedPost.isBookmarked ? "agri" : "outline"}
                      size="sm"
                      onClick={() => handleBookmark(selectedPost.id)}
                    >
                      <BookmarkIcon className={`h-4 w-4 mr-2 ${selectedPost.isBookmarked ? 'fill-current' : ''}`} />
                      {selectedPost.isBookmarked ? 'सेभ गरिएको' : 'बुकमार्क गर्नुहोस्'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4 mr-2" />
                      सेयर गर्नुहोस्
                    </Button>
                    <Button variant="outline" size="sm">
                      <Flag className="h-4 w-4 mr-2" />
                      रिपोर्ट गर्नुहोस्
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  )
}
