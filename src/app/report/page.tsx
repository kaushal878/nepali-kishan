'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bug, 
  AlertTriangle, 
  Send, 
  Upload, 
  Camera, 
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  BarChart3,
  Shield,
  ChevronRight,
  HelpCircle,
  Download,
  Eye,
  Star
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function ReportIssue() {
  const [issueType, setIssueType] = useState<'bug' | 'feature' | 'performance' | 'security' | 'other'>('bug')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    steps: '',
    expected: '',
    actual: '',
    priority: 'medium',
    environment: '',
    browser: '',
    device: '',
    attachments: [] as File[]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: Array.from(e.target.files)
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        title: '',
        description: '',
        steps: '',
        expected: '',
        actual: '',
        priority: 'medium',
        environment: '',
        browser: '',
        device: '',
        attachments: []
      })
      setIssueType('bug')
    }, 3000)
  }

  const issueTypes = [
    {
      type: 'bug' as const,
      title: 'बग / त्रुटि',
      titleEn: 'Bug / Error',
      description: 'प्लेटफर्ममा भेटिएका त्रुटिहरू र समस्याहरू',
      descriptionEn: 'Errors and issues found in the platform',
      icon: Bug,
      color: 'bg-red-100 text-red-800'
    },
    {
      type: 'feature' as const,
      title: 'सुविधा अनुरोध',
      titleEn: 'Feature Request',
      description: 'नयाँ सुविधाहरू वा सुधारको अनुरोध',
      descriptionEn: 'Request for new features or improvements',
      icon: Star,
      color: 'bg-green-100 text-green-800'
    },
    {
      type: 'performance' as const,
      title: 'प्रदर्शन समस्या',
      titleEn: 'Performance Issue',
      description: 'ढिलो लोडिङ, क्र्यास, वा अन्य प्रदर्शन सम्बन्धी समस्याहरू',
      descriptionEn: 'Slow loading, crashes, or other performance issues',
      icon: BarChart3,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      type: 'security' as const,
      title: 'सुरक्षा चिन्ता',
      titleEn: 'Security Concern',
      description: 'सुरक्षा सम्बन्धी चिन्ताहरू वा भेद्यताहरू',
      descriptionEn: 'Security concerns or vulnerabilities',
      icon: Shield,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      type: 'other' as const,
      title: 'अन्य',
      titleEn: 'Other',
      description: 'अन्य कुनै पनि समस्या वा सुझाव',
      descriptionEn: 'Any other issue or suggestion',
      icon: HelpCircle,
      color: 'bg-gray-100 text-gray-800'
    }
  ]

  const recentIssues = [
    {
      type: 'bug',
      title: 'बाली सुझावमा जिल्ला छनोट त्रुटि',
      description: 'काठमाडौँ छनोट गर्दा अन्य जिल्लाहरू देखिन्छन्',
      author: 'राम शर्मा',
      date: '२०२४-०५-०८',
      status: 'resolved',
      priority: 'high'
    },
    {
      type: 'performance',
      title: 'मौसम पृष्ठ ढिलो लोड हुन्छ',
      description: 'मौसम जानकारी पृष्ठ लोड गर्न १० सेकेन्ड लाग्छ',
      author: 'सीता देवी',
      date: '२०२४-०५-०७',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      type: 'feature',
      title: 'बजार दर अधिसूचन',
      description: 'बजार दर अधिसूचन सुविधा थप्नुहोस्',
      author: 'हरि अधिकारी',
      date: '२०२४-०५-०६',
      status: 'under-review',
      priority: 'low'
    }
  ]

  const statistics = [
    { label: 'कुल रिपोर्ट', value: '३४५', icon: FileText, color: 'text-blue-600' },
    { label: 'समाधान भएका', value: '२६७', icon: CheckCircle, color: 'text-green-600' },
    { label: 'समीक्षामा', value: '५६', icon: Clock, color: 'text-yellow-600' },
    { label: 'औसत समय', value: '२.५ दिन', icon: BarChart3, color: 'text-purple-600' }
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      case 'under-review': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'resolved': return 'समाधान भयो'
      case 'in-progress': 'काम भइरहेछ'
      case 'under-review': return 'समीक्षामा'
      default: return status
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

  const getPriorityLabel = (priority: string) => {
    switch(priority) {
      case 'high': return 'उच्च'
      case 'medium': return 'मध्यम'
      case 'low': return 'न्यून'
      default: return priority
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
            समस्या रिपोर्ट
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Report Issue
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            प्लेटफर्ममा भेटिएका समस्याहरू रिपोर्ट गर्नुहोस्, हामी चाँडै समाधान गर्नेछौं
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Issue Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">समस्याको प्रकार छनोट गर्नुहोस्</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {issueTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIssueType(type.type)}
                className={`cursor-pointer ${
                  issueType === type.type ? 'ring-2 ring-agri-green-500' : ''
                }`}
              >
                <Card className={`hover:shadow-lg transition-all duration-300 text-center ${
                  issueType === type.type ? 'bg-agri-green-50' : ''
                }`}>
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center mx-auto mb-3`}>
                      <type.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-sm mb-1">{type.title}</CardTitle>
                    <CardDescription className="text-xs">{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">
                  {issueTypes.find(t => t.type === issueType)?.title}
                </CardTitle>
                <CardDescription>
                  {issueTypes.find(t => t.type === issueType)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">रिपोर्ट प्राप्त भयो!</h3>
                    <p className="text-muted-foreground">
                      तपाईंको रिपोर्ट प्राप्त भयो। हामी यसको समीक्षा गर्नेछौं र चाँडै समाधान गर्नेछौं।
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">शीर्षक *</label>
                      <Input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="समस्याको छोटो विवरण"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">विस्तृत विवरण *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-2 border rounded-md"
                        placeholder="समस्याको विस्तृत विवरण दिनुहोस्..."
                      ></textarea>
                    </div>

                    {issueType === 'bug' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">समस्या पुन: उत्पादन गर्ने चरणहरू *</label>
                          <textarea
                            name="steps"
                            value={formData.steps}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className="w-full p-2 border rounded-md"
                            placeholder="१. यो गर्नुहोस्\n२. त्यसपछि यो गर्नुहोस्\n३. समस्या देखिन्छ..."
                          ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">अपेक्षित परिणाम *</label>
                            <textarea
                              name="expected"
                              value={formData.expected}
                              onChange={handleInputChange}
                              required
                              rows={2}
                              className="w-full p-2 border rounded-md"
                              placeholder="के हुनुपर्थ्यो?"
                            ></textarea>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">वास्तविक परिणाम *</label>
                            <textarea
                              name="actual"
                              value={formData.actual}
                              onChange={handleInputChange}
                              required
                              rows={2}
                              className="w-full p-2 border rounded-md"
                              placeholder="वास्तवमा के भयो?"
                            ></textarea>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">प्राथमिकता *</label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="low">न्यून</option>
                          <option value="medium">मध्यम</option>
                          <option value="high">उच्च</option>
                          <option value="critical">गम्भीर</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">वातावरण</label>
                        <select
                          name="environment"
                          value={formData.environment}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">छनोट गर्नुहोस्</option>
                          <option value="mobile">मोबाइल</option>
                          <option value="desktop">डेस्कटप</option>
                          <option value="tablet">ट्याबलेट</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">ब्राउजर</label>
                        <Input
                          type="text"
                          name="browser"
                          value={formData.browser}
                          onChange={handleInputChange}
                          placeholder="Chrome, Firefox, Safari, आदि"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">डिभाइस</label>
                        <Input
                          type="text"
                          name="device"
                          value={formData.device}
                          onChange={handleInputChange}
                          placeholder="iPhone, Android, Windows, Mac, आदि"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">संलग्नकहरू</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          accept="image/*,.pdf,.doc,.docx"
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            फाइलहरू यहाँ ड्र्याग गर्नुहोस् वा क्लिक गर्नुहोस्
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            छवि, PDF, DOC अधिकतम १०MB
                          </p>
                        </label>
                        {formData.attachments.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {formData.attachments.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                <span className="text-sm">{file.name}</span>
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-agri-green-600 hover:bg-agri-green-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          पठाउँदै...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          रिपोर्ट पठाउनुहोस्
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Issues */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl mb-2 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  हालसालैका रिपोर्टहरू
                </CardTitle>
                <CardDescription>
                  अन्य प्रयोगकर्ताहरूले दिएका रिपोर्टहरू र तिनीहरूको स्थिति
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentIssues.map((issue, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className={getPriorityColor(issue.priority)}>
                            {getPriorityLabel(issue.priority)}
                          </Badge>
                          <Badge className={getStatusColor(issue.status)}>
                            {getStatusLabel(issue.status)}
                          </Badge>
                        </div>
                        <h4 className="font-medium mb-1">{issue.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{issue.author}</span>
                          <span>•</span>
                          <span>{issue.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                  रिपोर्ट गाइडलाइन
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">स्पष्ट र विस्तृत विवरण दिनुहोस्</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">समस्या पुन: उत्पादन गर्ने चरणहरू समावेश गर्नुहोस्</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">स्क्रिनसट वा भिडियो संलग्न गर्नुहोस्</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">एक रिपोर्टमा एउटा समस्या मात्र राख्नुहोस्</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-agri-green-50 to-sky-blue-50 dark:from-agri-green-950 dark:to-sky-blue-950">
            <CardContent className="p-8 text-center">
              <Users className="h-16 w-16 text-agri-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">हामीलाई सुधार गर्न मद्दत गर्नुहोस्</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                तपाईंको रिपोर्टले हामीलाई उत्कृष्ट सेवा प्रदान गर्न मद्दत गर्छ। 
                हामी प्रत्येक रिपोर्टलाई गम्भीरतापूर्वक लिन्छौं र छिटो समयमा समाधान गर्न प्रयास गर्छौं।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  रिपोर्ट ट्र्याकर डाउनलोड गर्नुहोस्
                </Button>
                <Button variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  सबै रिपोर्टहरू हेर्नुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
