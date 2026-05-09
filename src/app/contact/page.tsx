'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Users,
  Building,
  Globe,
  Share2,
  MessageSquare,
  Play,
  Camera,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
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
        phone: '',
        subject: '',
        message: '',
        category: 'general'
      })
    }, 3000)
  }

  const contactInfo = [
    {
      title: 'फोन सम्पर्क',
      titleEn: 'Phone Contact',
      icon: Phone,
      details: ['९८०-१२३४५६७८९', '९८१-९८७६५४३२१'],
      description: 'सोमवार-शुक्रबार: ९:०० AM - ६:०० PM',
      descriptionEn: 'Monday-Friday: 9:00 AM - 6:00 PM',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'इमेल सम्पर्क',
      titleEn: 'Email Contact',
      icon: Mail,
      details: ['info@nepalikishan.com', 'support@nepalikishan.com'],
      description: '२४/७ प्रतिक्रिया',
      descriptionEn: '24/7 Response',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'भौतिक सम्पर्क',
      titleEn: 'Physical Address',
      icon: MapPin,
      details: ['काठमाडौँ, नेपाल', 'पोष्ट बक्स: १२३४५'],
      description: 'आइतबार-शुक्रबार: १०:०० AM - ५:०० PM',
      descriptionEn: 'Sunday-Thursday: 10:00 AM - 5:00 PM',
      color: 'bg-purple-100 text-purple-800'
    }
  ]

  const departments = [
    {
      name: 'सामान्य जिज्ञासा',
      nameEn: 'General Inquiries',
      email: 'info@nepalikishan.com',
      phone: '९८०-१२३४५६७८९',
      description: 'सामान्य जानकारी र सहायताका लागि',
      descriptionEn: 'For general information and assistance'
    },
    {
      name: 'प्राविधिक समर्थन',
      nameEn: 'Technical Support',
      email: 'support@nepalikishan.com',
      phone: '९८१-९८७६५४३२१',
      description: 'प्राविधिक समस्याहरू र समाधानका लागि',
      descriptionEn: 'For technical issues and solutions'
    },
    {
      name: 'साझेदारी र सहकार्य',
      nameEn: 'Partnership & Collaboration',
      email: 'partnership@nepalikishan.com',
      phone: '९८२-३४५६७८९०',
      description: 'व्यावसायिक साझेदारी र सहकार्यका लागि',
      descriptionEn: 'For business partnerships and collaborations'
    },
    {
      name: 'मिडिया र प्रेस',
      nameEn: 'Media & Press',
      email: 'media@nepalikishan.com',
      phone: '९८३-४५६७८९०१',
      description: 'मिडिया पूछताछ र प्रेस विज्ञप्तिका लागि',
      descriptionEn: 'For media inquiries and press releases'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Share2, url: '#', color: 'bg-blue-600' },
    { name: 'Twitter', icon: MessageSquare, url: '#', color: 'bg-sky-500' },
    { name: 'YouTube', icon: Play, url: '#', color: 'bg-red-600' },
    { name: 'Instagram', icon: Camera, url: '#', color: 'bg-pink-600' },
    { name: 'LinkedIn', icon: Users, url: '#', color: 'bg-blue-700' }
  ]

  const faqs = [
    {
      question: 'फोन कल गर्ने सबैभन्दा राम्रो समय कहिले हो?',
      questionEn: 'What is the best time to call?',
      answer: 'सोमवारदेखि शुक्रबार बिहान ९ बजे देखि साँझ ६ बजेसम्म सबैभन्दा राम्रो समय हो।',
      answerEn: 'Monday to Friday, 9 AM to 6 PM is the best time.'
    },
    {
      question: 'इमेलको जवाफ कति समयमा पाइन्छ?',
      questionEn: 'How long does it take to get email response?',
      answer: 'सामान्यतया २४ घण्टाभित्र जवाफ पाइन्छ, जटिला मामिलाहरूमा ४८ घण्टा लाग्न सक्छ।',
      answerEn: 'Generally within 24 hours, complex issues may take 48 hours.'
    },
    {
      question: 'कार्यालयमा भेट्न सकिन्छ?',
      questionEn: 'Can we visit the office?',
      answer: 'हो, आइतबारदेखि बिहान १० बजे देखि साँझ ५ बजेसम्म कार्यालयमा भेट्न सकिन्छ।',
      answerEn: 'Yes, you can visit the office Sunday to Thursday, 10 AM to 5 PM.'
    }
  ]

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
            सम्पर्क
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Contact Us
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            हामीसँग सम्पर्कमा रहनुहोस्, हामी तपाईंको मद्दत गर्न तत्पर छौं
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-3">
                  <div className={`w-16 h-16 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg mb-2">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-sm font-medium">{detail}</div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">सम्पर्क फारम</CardTitle>
                <CardDescription>
                  तल दिइएको फारम भर्नुहोस्, हामी चाँडै सम्पर्कमा आउनेछौं
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
                      तपाईंको सन्देश प्राप्त भयो। हामी चाँडै सम्पर्कमा आउनेछौं।
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">फोन नम्बर</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="तपाईंको फोन नम्बर"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">विषय *</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="general">सामान्य</option>
                          <option value="technical">प्राविधिक</option>
                          <option value="partnership">साझेदारी</option>
                          <option value="feedback">प्रतिक्रिया</option>
                          <option value="other">अन्य</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">विषय *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="तपाईंको सन्देशको विषय"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">सन्देश *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full p-2 border rounded-md"
                        placeholder="तपाईंको सन्देश यहाँ लेख्नुहोस्..."
                      ></textarea>
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
                          सन्देश पठाउनुहोस्
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">विभागहरू</CardTitle>
                <CardDescription>
                  तपाईंको जिज्ञासा अनुसार सही विभागमा सम्पर्क गर्नुहोस्
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="h-3 w-3 text-muted-foreground" />
                            <span>{dept.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            <span>{dept.phone}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground mt-2" />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2" />
                  बारम्बार सोधिने प्रश्नहरू
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b pb-4 last:border-b-0"
                  >
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">सामाजिक संजालमा हामीसँग जोडिनुहोस्</h3>
                <p className="text-muted-foreground">
                  नयाँ अपडेट, टिप्स र कृषि समाचारहरूका लागि हाम्रा सामाजिक संजालहरू फलो गर्नुहोस्
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`${social.color} text-white border-none hover:opacity-80`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-2">हाम्रो स्थान</CardTitle>
              <CardDescription>
                काठमाडौँ, नेपालमा हाम्रो मुख्य कार्यालय
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    नक्सा लोड हुँदैछ...
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    काठमाडौँ, नेपाल
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
