'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  Send, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown,
  Heart,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Bug,
  Award,
  Users,
  ChevronRight,
  BarChart3,
  TrendingUp
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function Feedback() {
  const [feedbackType, setFeedbackType] = useState<'general' | 'feature' | 'bug' | 'complaint' | 'suggestion'>('general')
  const [rating, setRating] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    feature: '',
    priority: 'medium'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
        name: '',
        email: '',
        subject: '',
        message: '',
        feature: '',
        priority: 'medium'
      })
      setRating(0)
      setFeedbackType('general')
    }, 3000)
  }

  const feedbackTypes = [
    {
      type: 'general' as const,
      title: 'सामान्य प्रतिक्रिया',
      titleEn: 'General Feedback',
      description: 'हाम्रो सेवाको बारेमा तपाईंको सामान्य विचार',
      descriptionEn: 'Your general thoughts about our service',
      icon: MessageSquare,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      type: 'feature' as const,
      title: 'नयाँ सुविधा सुझाव',
      titleEn: 'Feature Suggestion',
      description: 'नयाँ सुविधा वा सुधारका लागि तपाईंको सुझाव',
      descriptionEn: 'Your suggestions for new features or improvements',
      icon: Lightbulb,
      color: 'bg-green-100 text-green-800'
    },
    {
      type: 'bug' as const,
      title: 'त्रुटि रिपोर्ट',
      titleEn: 'Bug Report',
      description: 'प्लेटफर्ममा भेटिएका समस्याहरू र त्रुटिहरू',
      descriptionEn: 'Issues and bugs found in the platform',
      icon: Bug,
      color: 'bg-red-100 text-red-800'
    },
    {
      type: 'complaint' as const,
      title: 'गुनासो',
      titleEn: 'Complaint',
      description: 'सेवा वा प्रक्रियाबारे तपाईंको गुनासो',
      descriptionEn: 'Your complaints about service or process',
      icon: AlertCircle,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      type: 'suggestion' as const,
      title: 'सुधार सुझाव',
      titleEn: 'Improvement Suggestion',
      description: 'प्लेटफर्म सुधारका लागि तपाईंको सुझाव',
      descriptionEn: 'Your suggestions for platform improvement',
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-800'
    }
  ]

  const recentFeedback = [
    {
      type: 'feature',
      title: 'बजार मूल्य अपडेट',
      description: 'बजार मूल्य रियल-टाइममा अपडेट हुनुपर्छ',
      author: 'राम शर्मा',
      date: '२०२४-०५-०८',
      status: 'under-review'
    },
    {
      type: 'bug',
      title: 'बाली सुझावमा त्रुटि',
      description: 'जिल्ला छनोट गर्दा कहिलेकाहीं त्रुटि आउँछ',
      author: 'सीता देवी',
      date: '२०२४-०५-०७',
      status: 'resolved'
    },
    {
      type: 'general',
      title: 'उत्कृष्ट प्लेटफर्म',
      description: 'नेपाली किसान धेरै उपयोगी छ',
      author: 'हरि अधिकारी',
      date: '२०२४-०५-०६',
      status: 'acknowledged'
    }
  ]

  const statistics = [
    { label: 'कुल प्रतिक्रिया', value: '१,२३४', icon: MessageSquare, color: 'text-blue-600' },
    { label: 'समाधान भएका', value: '८९०', icon: CheckCircle, color: 'text-green-600' },
    { label: 'विचार अन्तर्गत', value: '१५६', icon: BarChart3, color: 'text-purple-600' },
    { label: 'औसत रेटिङ', value: '४.५', icon: Star, color: 'text-yellow-600' }
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'under-review': return 'bg-yellow-100 text-yellow-800'
      case 'acknowledged': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'resolved': return 'समाधान भयो'
      case 'under-review': return 'समीक्षामा'
      case 'acknowledged': return 'स्वीकार भयो'
      default: return status
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
            प्रतिक्रिया
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Feedback
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            तपाईंको प्रतिक्रिया हाम्रो लागि महत्वपूर्ण छ, कृपया आफ्ना विचारहरू साझेदा गर्नुहोस्
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

        {/* Feedback Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">प्रतिक्रियाको प्रकार छनोट गर्नुहोस्</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {feedbackTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setFeedbackType(type.type)}
                className={`cursor-pointer ${
                  feedbackType === type.type ? 'ring-2 ring-agri-green-500' : ''
                }`}
              >
                <Card className={`hover:shadow-lg transition-all duration-300 text-center ${
                  feedbackType === type.type ? 'bg-agri-green-50' : ''
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
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">
                  {feedbackTypes.find(t => t.type === feedbackType)?.title}
                </CardTitle>
                <CardDescription>
                  {feedbackTypes.find(t => t.type === feedbackType)?.description}
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
                    <h3 className="text-xl font-semibold mb-2">धन्यवाद!</h3>
                    <p className="text-muted-foreground">
                      तपाईंको प्रतिक्रिया प्राप्त भयो। हामी यसको समीक्षा गर्नेछौं।
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">पूरा नाम *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="तपाईंको नाम"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">इमेल *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="तपाईंको इमेल"
                        />
                      </div>
                    </div>

                    {feedbackType === 'feature' && (
                      <div>
                        <label className="block text-sm font-medium mb-2">सुविधाको नाम *</label>
                        <Input
                          type="text"
                          name="feature"
                          value={formData.feature}
                          onChange={handleInputChange}
                          required
                          placeholder="तपाईंले सुझाव दिन चाहनुभएको सुविधा"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2">विषय *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="तपाईंको प्रतिक्रियाको विषय"
                      />
                    </div>

                    {feedbackType === 'bug' && (
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
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-2">विस्तृत जानकारी *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full p-2 border rounded-md"
                        placeholder={
                          feedbackType === 'feature' ? 'सुविधाको विस्तृत विवरण र यसले कसरी मद्दत गर्छ...' :
                          feedbackType === 'bug' ? 'त्रुटिको विस्तृत विवरण, यो कहिले भयो, र के गर्दा भयो...' :
                          feedbackType === 'complaint' ? 'आफ्नो गुनासोको विस्तृत विवरण...' :
                          'तपाईंको प्रतिक्रियाको विस्तृत विवरण...'
                        }
                      ></textarea>
                    </div>

                    {feedbackType === 'general' && (
                      <div>
                        <label className="block text-sm font-medium mb-2">समग्र रेटिङ</label>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="p-1"
                            >
                              <Star
                                className={`h-6 w-6 ${
                                  star <= rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

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
                          प्रतिक्रिया पठाउनुहोस्
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Feedback */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl mb-2 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  हालसालैका प्रतिक्रियाहरू
                </CardTitle>
                <CardDescription>
                  अन्य प्रयोगकर्ताहरूले दिएका प्रतिक्रियाहरू
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentFeedback.map((feedback, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{feedback.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{feedback.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{feedback.author}</span>
                          <span>•</span>
                          <span>{feedback.date}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(feedback.status)}>
                        {getStatusLabel(feedback.status)}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  तपाईंको प्रतिक्रियाको प्रभाव
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">१५ नयाँ सुविधाहरू थपिइयो</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">४५ त्रुटिहरू समाधान भयो</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">९०% प्रयोगकर्ता सन्तुष्ट</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-agri-green-50 to-sky-blue-50 dark:from-agri-green-950 dark:to-sky-blue-950">
            <CardContent className="p-8 text-center">
              <Heart className="h-16 w-16 text-agri-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">तपाईंको प्रतिक्रियाको धन्यवाद</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                तपाईंको मूल्यवान प्रतिक्रियाले हामीलाई उत्तम सेवा प्रदान गर्न मद्दत गर्छ। 
                हामी प्रत्येक प्रतिक्रियालाई गम्भीरतापूर्वक लिन्छौं र आवश्यक सुधार गर्छौं।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  समुदायमा सामेल हुनुहोस्
                </Button>
                <Button variant="outline">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  थप सुझावहरू हेर्नुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
