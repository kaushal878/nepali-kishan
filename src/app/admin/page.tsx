'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  FileText, 
  Settings, 
  BarChart3, 
  Calendar,
  AlertTriangle,
  TrendingUp,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Bell,
  Shield,
  Database,
  Globe,
  MessageSquare,
  Image as ImageIcon,
  Video,
  FileText as FileIcon
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface AdminStats {
  totalUsers: number
  activeUsers: number
  totalPosts: number
  pendingPosts: number
  totalTutorials: number
  pendingTutorials: number
  totalReports: number
  pendingReports: number
  systemHealth: 'good' | 'warning' | 'critical'
  lastBackup: string
  storageUsed: number
  storageTotal: number
}

interface ContentItem {
  id: string
  title: string
  titleEn: string
  type: 'post' | 'tutorial' | 'tutorial' | 'scheme' | 'market_price'
  status: 'published' | 'draft' | 'pending' | 'rejected'
  author: string
  authorEn: string
  createdAt: string
  updatedAt: string
  views: number
  likes: number
  reports: number
  category: string
  tags: string[]
}

interface SystemLog {
  id: string
  type: 'info' | 'warning' | 'error' | 'success'
  message: string
  messageEn: string
  timestamp: string
  user?: string
  ip?: string
}

export default function AdminPanel() {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [content, setContent] = useState<ContentItem[]>([])
  const [logs, setLogs] = useState<SystemLog[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'dashboard' | 'content' | 'users' | 'analytics' | 'settings'>('dashboard')
  const [selectedContentType, setSelectedContentType] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null)

  useState(() => {
    // Initialize with mock data
    const mockStats: AdminStats = {
      totalUsers: 1234,
      activeUsers: 892,
      totalPosts: 456,
      pendingPosts: 12,
      totalTutorials: 78,
      pendingTutorials: 5,
      totalReports: 23,
      pendingReports: 8,
      systemHealth: 'good',
      lastBackup: '२०२४-०१-१५ ०२:३०',
      storageUsed: 2.3,
      storageTotal: 10
    }

    const mockContent: ContentItem[] = [
      {
        id: '1',
        title: 'टमाटर खेतीको नयाँ विधि',
        titleEn: 'New Tomato Farming Method',
        type: 'tutorial',
        status: 'published',
        author: 'राम शर्मा',
        authorEn: 'Ram Sharma',
        createdAt: '२०२४-०१-१०',
        updatedAt: '२०२४-०१-१२',
        views: 1234,
        likes: 89,
        reports: 0,
        category: 'तरकारी खेती',
        tags: ['टमाटर', 'खेती', 'नयाँ विधि']
      },
      {
        id: '2',
        title: 'गाई रोगको उपचार',
        titleEn: 'Cow Disease Treatment',
        type: 'post',
        status: 'pending',
        author: 'सीता गुरुङ',
        authorEn: 'Sita Gurung',
        createdAt: '२०२४-०१-१४',
        updatedAt: '२०२४-०१-१४',
        views: 0,
        likes: 0,
        reports: 0,
        category: 'पशुपालन',
        tags: ['गाई', 'रोग', 'उपचार']
      },
      {
        id: '3',
        title: 'बजार मूल्य अद्यावन',
        titleEn: 'Market Price Update',
        type: 'market_price',
        status: 'published',
        author: 'प्रणाली',
        authorEn: 'System',
        createdAt: '२०२४-०१-१५',
        updatedAt: '२०२४-०१-१५',
        views: 567,
        likes: 23,
        reports: 1,
        category: 'बजार',
        tags: ['बजार', 'मूल्य', 'अद्यावन']
      }
    ]

    const mockLogs: SystemLog[] = [
      {
        id: '1',
        type: 'info',
        message: 'नयाँ प्रयोगकर्ता दर्ता गरियो',
        messageEn: 'New user registered',
        timestamp: '२०२४-०१-१५ १०:३०',
        user: 'राम बहादुर',
        ip: '192.168.1.1'
      },
      {
        id: '2',
        type: 'warning',
        message: 'सर्भरमा उच्च CPU उपयोग',
        messageEn: 'High CPU usage on server',
        timestamp: '२०२४-०१-१५ ०९:४५',
        ip: 'server-01'
      },
      {
        id: '3',
        type: 'error',
        message: 'डाटाबेस कनेक्सन असफल',
        messageEn: 'Database connection failed',
        timestamp: '२०२४-०१-१५ ०८:३०',
        ip: 'server-02'
      },
      {
        id: '4',
        type: 'success',
        message: 'ब्याकअप सफलतापूर्वक सम्पन्न',
        messageEn: 'Backup completed successfully',
        timestamp: '२०२४-०१-१५ ०२:००',
        ip: 'backup-server'
      }
    ]

    setStats(mockStats)
    setContent(mockContent)
    setLogs(mockLogs)
    setLoading(false)
  })

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'post': return <MessageSquare className="h-4 w-4" />
      case 'tutorial': return <Video className="h-4 w-4" />
      case 'guide': return <FileIcon className="h-4 w-4" />
      case 'scheme': return <Shield className="h-4 w-4" />
      case 'market_price': return <BarChart3 className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500'
      case 'pending': return 'bg-yellow-500'
      case 'draft': return 'bg-blue-500'
      case 'rejected': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'प्रकाशित'
      case 'pending': return 'विचाराधीन'
      case 'draft': return 'ड्राफ्ट'
      case 'rejected': return 'अस्वीकृत'
      default: return 'अज्ञात'
    }
  }

  const getLogTypeColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-500'
      case 'warning': return 'bg-yellow-500'
      case 'error': return 'bg-red-500'
      case 'success': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'good': return 'text-green-500'
      case 'warning': return 'text-yellow-500'
      case 'critical': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const filteredContent = content.filter(item => {
    const matchesType = selectedContentType === 'all' || item.type === selectedContentType
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.titleEn.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner size="lg" variant="earth" />
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container px-4 py-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🛠️ एडमिन प्यानल | Admin Panel
          </h1>
          <p className="text-lg text-muted-foreground">
            नेपाली किसान प्लेटफर्मको व्यवस्थापन र सामग्री व्यवस्थापन
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex space-x-1 border-b">
            {[
              { id: 'dashboard', label: 'ड्यासबोर्ड', icon: <BarChart3 className="h-4 w-4" /> },
              { id: 'content', label: 'सामग्री', icon: <FileText className="h-4 w-4" /> },
              { id: 'users', label: 'प्रयोगकर्ताहरू', icon: <Users className="h-4 w-4" /> },
              { id: 'analytics', label: 'विश्लेषण', icon: <TrendingUp className="h-4 w-4" /> },
              { id: 'settings', label: 'सेटिङहरू', icon: <Settings className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 border-b-2 transition-colors flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-agri-green-500 text-agri-green-600'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">कुल प्रयोगकर्ताहरू</p>
                      <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-agri-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">सक्रिय प्रयोगकर्ताहरू</p>
                      <p className="text-2xl font-bold text-green-600">{stats.activeUsers.toLocaleString()}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">विचाराधीन पोस्टहरू</p>
                      <p className="text-2xl font-bold text-yellow-600">{stats.pendingPosts}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">सिस्टम स्वास्थ्य</p>
                      <p className={`text-lg font-bold ${getHealthColor(stats.systemHealth)}`}>
                        {stats.systemHealth === 'good' && 'राम्रो'}
                        {stats.systemHealth === 'warning' && 'चेतावनी'}
                        {stats.systemHealth === 'critical' && 'गम्भीर'}
                      </p>
                    </div>
                    <Shield className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">सिस्टम जानकारी</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">अन्तिम ब्याकअप</span>
                    <span className="text-sm font-medium">{stats.lastBackup}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">भण्डार उपयोग</span>
                    <span className="text-sm font-medium">
                      {stats.storageUsed}GB / {stats.storageTotal}GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-agri-green-500 h-2 rounded-full"
                      style={{ width: `${(stats.storageUsed / stats.storageTotal) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">छिटो कार्यहरू</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Database className="h-4 w-4 mr-2" />
                    डाटाबेस ब्याकअप
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    डाटा आयात गर्नुहोस्
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    रिपोर्ट डाउनलोड गर्नुहोस्
                  </Button>
                  <Button variant="agri" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    सूचनाहरू पठाउनुहोस्
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="सामग्री खोज्नुहोस्..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <select
                    value={selectedContentType}
                    onChange={(e) => setSelectedContentType(e.target.value)}
                    className="px-3 py-2 border rounded-md"
                  >
                    <option value="all">सबै प्रकार</option>
                    <option value="post">पोस्टहरू</option>
                    <option value="tutorial">ट्युटोरियलहरू</option>
                    <option value="guide">मार्गदर्शकहरू</option>
                    <option value="scheme">योजनाहरू</option>
                    <option value="market_price">बजार मूल्य</option>
                  </select>

                  <Button variant="agri">
                    <Plus className="h-4 w-4 mr-2" />
                    नयाँ सामग्री
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Content List */}
            <div className="space-y-4">
              {filteredContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getContentIcon(item.type)}
                            <h4 className="font-semibold">{item.title}</h4>
                            <Badge className={`${getStatusColor(item.status)} text-white text-xs`}>
                              {getStatusText(item.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.author} • {item.createdAt}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{item.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="h-3 w-3" />
                              <span>{item.likes}</span>
                            </div>
                            {item.reports > 0 && (
                              <div className="flex items-center space-x-1 text-red-500">
                                <AlertTriangle className="h-3 w-3" />
                                <span>{item.reports}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500">
                            <Trash2 className="h-3 w-3" />
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

        {/* System Logs */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>सिस्टम लगहरू</CardTitle>
                <CardDescription>
                  हालको सिस्टम गतिविधि र घटनाहरू
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {logs.map((log, index) => (
                    <div key={log.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${getLogTypeColor(log.type)}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">{log.message}</p>
                          <span className="text-sm text-muted-foreground">{log.timestamp}</span>
                        </div>
                        {log.user && (
                          <p className="text-sm text-muted-foreground">
                            प्रयोगकर्ता: {log.user}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === 'users' || activeTab === 'analytics') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">
              {activeTab === 'users' ? <Users className="h-12 w-12 mx-auto text-muted-foreground" /> : <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground" />}
            </div>
            <h3 className="text-lg font-medium mb-2">
              {activeTab === 'users' ? 'प्रयोगकर्ता व्यवस्थापन' : 'विश्लेषण र रिपोर्टहरू'}
            </h3>
            <p className="text-muted-foreground">
              {activeTab === 'users' 
                ? 'प्रयोगकर्ताहरूको व्यवस्थापन, भूमिका जानकारी, र अनुमति गर्ने उपकरणहरू'
                : 'विश्लेषण ड्यासबोर्ड, रिपोर्टहरू, र मेट्रिक्सहरू'
              }
            </p>
          </motion.div>
        )}
      </div>
    </MainLayout>
  )
}
