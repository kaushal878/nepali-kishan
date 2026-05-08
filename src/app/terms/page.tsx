'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  Download,
  ChevronRight,
  Info,
  Gavel,
  Heart,
  Star,
  MapPin,
  AlertCircle
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function TermsOfService() {
  const lastUpdated = '२ेपाली किसानमा खाता बनाउँदा तपाईंले यी सेवाका सर्तहरू स्वीकार गर्नुहुन्छ।'

  const sections = [
    {
      title: 'सेवाको स्वीकार',
      titleEn: 'Acceptance of Service',
      icon: CheckCircle,
      color: 'bg-green-100 text-green-800',
      content: [
        'नेपाली किसान प्लेटफर्म प्रयोग गर्नुले तपाईंले यी सेवाका सर्तहरू स्वीकार गर्नुहुन्छ।',
        'यदि तपाईं यी सर्तहरू मान्दैनुहुन्छ भने प्लेटफर्म प्रयोग गर्नुहुनेछ।',
        '१८ वर्ष मुनिका व्यक्तिहरूले अभिभावकको स्वीकृतिमा मात्र प्रयोग गर्न सक्छन्।',
        'सेवा प्रयोग गर्नुले तपाईंले यी सर्तहरू पढेर बुझेको मानिन्छ।'
      ]
    },
    {
      title: 'खाता जिम्मेदारी',
      titleEn: 'Account Responsibility',
      icon: Users,
      color: 'bg-blue-100 text-blue-800',
      content: [
        'प्रयोगकर्ताहरूले आफ्नो खाताको सुरक्षा र गोपनीयताको जिम्मेदारी लिनुपर्छ।',
        'खाताको जानकारी सही र सटीक राख्नुपर्छ।',
        'आफ्नो खाता अन्यलाई प्रयोग गर्न दिनुहुन्छ।',
        'खातामा कुनै पनि अवैध गतिविधि प्रयोग गर्न निषेध छ।'
      ]
    },
    {
      title: 'उपयुक्त प्रयोग',
      titleEn: 'Acceptable Use',
      icon: Shield,
      color: 'bg-purple-100 text-purple-800',
      content: [
        'प्लेटफर्म कृषि सम्बन्धी कार्यहरूमा मात्र प्रयोग गर्नुपर्छ।',
        'अवैध गतिविधि, धोकाबाजी, वा हानिकारक सामग्रीहरू पोस्ट गर्न निषेध छ।',
        'अन्य प्रयोगकर्ताहरूलाई आपत्ति दिनुहुन्छ।',
        'बौद्धिक वा वाणिज्यिक प्रयोग गर्न अग्रि अनुमति लिनुपर्छ।'
      ]
    },
    {
      title: 'बौद्धिक प्रयोग',
      titleEn: 'Commercial Use',
      icon: Star,
      color: 'bg-orange-100 text-orange-800',
      content: [
        'बौद्धिक प्रयोगका लागि विशेष योजनाहरू उपलब्ध छन्।',
        'व्यावसायिक प्रयोगकर्ताहरूले अग्रि सम्झौता गर्नुपर्छ।',
        'प्रिमियम सेवाहरू वार्षिक शुल्क शुल्कमा उपलब्ध छन्।',
        'बडा कृषक र संस्थाहरूका लागि छुट छुट प्याकेजहरू छन्।'
      ]
    },
    {
      title: 'बौद्धिक सम्झौता',
      titleEn: 'Commercial Agreement',
      icon: Heart,
      color: 'bg-cyan-100 text-cyan-800',
      content: [
        'बौद्धिक प्रयोगकर्ताहरूले निम्न सर्तहरू स्वीकार गर्नुपर्छन्।',
        '• वार्षिक शुल्क शुल्क भुक्तानी गर्नुपर्छ।',
        '• डाटाको वाणिज्यिक प्रयोग सम्झौता गर्नुपर्छ।',
        '• बौद्धिक गोपनीयता कायम अनुसरण गर्नुपर्छ।',
        '• तेस्रो पक्ष साझेदारीमा सहमति नहुँ डाटा प्रयोग गर्न निषेध छ।'
      ]
    },
    {
      title: 'बौद्धिक गोपनीयता',
      titleEn: 'Commercial Privacy',
      icon: Shield,
      color: 'bg-red-100 text-red-800',
      content: [
        'बौद्धिक प्रयोगकर्ताहरूको डाटा थप गोपनीयताको सुरक्षा गरिन्छ।',
        '• वाणिज्यिक सम्झौतामा उल्लेखित डाटा मात्र साझेदा गरिन्छ।',
        '• ग्राहक डाटा बिना स्वीकृति तेस्रो पक्षलाई साझेदा गरिदैन।',
        '• डाटा सुरक्षाका लागि उन्नत सुरक्षा उपायहरू प्रयोग गरिन्छ।'
      ]
    },
    {
      title: 'सेवा परिवर्तन',
      titleEn: 'Service Modification',
      icon: AlertTriangle,
      color: 'bg-yellow-100 text-yellow-800',
      content: [
        'हामी कुनै पनि समयमा सेवाहरू परिवर्तन, संशोधन, वा बन्द गर्न सक्छौं।',
        'महत्वपूर्ण परिवर्तनहरू ३० दिन अघिलै सूचित गरिन्छ।',
        'सेवा बन्द गर्दा प्रयोगकर्ताहरूलाई ३० दिनको अवधि दिइन्छ।',
        'बन्द भएका सेवाहरूमा रिफन्डको नीति लागू हुन्छ।'
      ]
    },
    {
      title: 'सेवा समाप्ति',
      titleEn: 'Service Termination',
      icon: Gavel,
      color: 'bg-red-100 text-red-800',
      content: [
        'हामी वा प्रयोगकर्ताले कुनै पनि समयमा सेवाको सम्प्ति गर्न सक्छौं।',
        'सेवा समाप्ति गरेपछि सबै डाटा ३० दिनपछि मेटाइन्छ।',
        'बौद्धिक योजनाहरू कुनै पनि समयमा रद्द गर्न सकिन्छ।',
        'सेवा समाप्ति गरेपछि बकायदा राशि फिर्ता नहुने सक्छ।'
      ]
    },
    {
      title: 'दायित्व र खण्डन',
      titleEn: 'Liability and Disclaimers',
      icon: AlertTriangle,
      color: 'bg-gray-100 text-gray-800',
      content: [
        'प्लेटफर्मको जानकारी "जस्ता छ" को आधारमा प्रदान गरिएको छ।',
        'हामी कृषि सम्बन्धी निर्णयहरूको लागि जिम्मेदारी लिदैनौं।',
        'प्लेटफर्म प्रयोगबाट हुने कुनै पनि हानिको लागि हामी जिम्मेदारी बहनौं।',
        'प्रयोगकर्ताहरूले आफ्नै जिम्मेदारीमा निर्णय लिनुपर्छन्।'
      ]
    }
  ]

  const commercialPlans = [
    {
      name: 'बेसिक',
      price: 'निःशुल्क',
      features: ['आधारभूत सेवाहरू', '१० एकइन्ट्रिक्स', 'आधारभूत समर्थन'],
      icon: Users
    },
    {
      name: 'प्रिमियम',
      price: 'रु. ५,०००/वर्ष',
      features: ['अग्रित सेवाहरू', 'असीमित एकइन्ट्रिक्स', 'प्राथमिक समर्थन', 'डाटा एनालाइसिस'],
      icon: Star
    },
    {
      name: 'एन्टरप्राइज',
      price: 'रु. २५,०००/वर्ष',
      features: ['सबै सेवाहरू', 'असीमित सबै', 'विशेष समर्थन', 'API पहुँच', 'कस्टमाइजेसन'],
      icon: Heart
    }
  ]

  const contactInfo = [
    { type: 'इमेल', value: 'commercial@nepalikishan.com', icon: Mail },
    { type: 'फोन', value: '९ो सम्पर्क फार्ममा सम्पर्क गर्नुहोस्', icon: Phone },
    { type: 'ेगाना', value: 'काठमाडौँ, नेपाल', icon: MapPin }
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
            सेवाका सर्तहरू
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Terms of Service
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            नेपाली किसान प्लेटफर्म प्रयोग गर्ने शर्तहरू र नियमहरू
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              अन्तिम अपडेट: २०२४-०५-०८
            </span>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <FileText className="h-8 w-8 text-agri-green-600 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">सेवाका सर्तहरूमा स्वागत</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    नेपाली किसान प्लेटफर्म प्रयोग गर्नुले तपाईंले यी सेवाका सर्तहरू स्वीकार गर्नुहुन्छ।
                    हामी यी सर्तहरू नेपालको कानून अनुसार बनाएका छौं र प्रयोगकर्ताहरूको हित र सुरक्षाको लागि प्रतिबद्ध छौं।
                    कृपया यी सर्तहरू ध्यानपूर्वक रूपमा पढ्नुहोस् र अन्यै जिज्ञासा भए सम्पर्क गर्नुहोस्।
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full ${section.color} flex items-center justify-center`}>
                      <section.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      <CardDescription>{section.titleEn}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {section.content.map((item, idx) => (
                      <p key={idx} className="text-sm leading-relaxed">{item}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Commercial Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">बौद्धिक योजनाहरू</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercialPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={`hover:shadow-lg transition-all duration-300 ${
                  plan.name === 'प्रिमियम' ? 'border-agri-green-200' : ''
                }`}>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 rounded-full bg-agri-green-100 flex items-center justify-center mx-auto mb-3">
                      <plan.icon className="h-6 w-6 text-agri-green-600" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-2xl font-bold text-agri-green-600">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4">
                      विस्तृत जान्नुहोस्
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-3">महत्वपूर्ण सूचनाहरू</h3>
                  <div className="space-y-2 text-sm">
                    <p>• यी सर्तहरू कुनै पनि समयमा परिवर्तन हुन सक्छ।</p>
                    <p>• महत्वपूर्ण परिवर्तनहरू हाम्रो वेबसाइटमा सूचित गरिनेछ।</p>
                    <p>• परिवर्तनहरू प्रभाव तत्काल लागू हुन्छ।</p>
                    <p>• नियमित अवधिमा भित्र सेवाहरू रद्द गर्न सकिन्छ।</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-2">सेवाका सर्तहरू सम्बन्धमा सम्पर्क</CardTitle>
              <CardDescription>
                यदि तपाईंसँग सेवाका सर्तहरू सम्बन्धमा कुनै प्रश्न वा चिन्ता छ भने हामीलाई सम्पर्क गर्नुहोस्
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={contact.type} className="flex items-center space-x-3">
                    <contact.icon className="h-5 w-5 text-agri-green-600" />
                    <div>
                      <p className="font-medium">{contact.type}</p>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button className="bg-agri-green-600 hover:bg-agri-green-700">
                  <Mail className="h-4 w-4 mr-2" />
                  सेवाका सर्तहरू सम्पर्क फार्म
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Download Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Card className="bg-gradient-to-r from-agri-green-50 to-sky-blue-50 dark:from-agri-green-950 dark:to-sky-blue-950">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">सेवाका सर्तहरू डाउनलोड गर्नुहोस्</h3>
              <p className="text-muted-foreground mb-6">
                भविष्यका सन्दर्भका लागि सेवाका सर्तहरूको PDF प्रतिलिपि डाउनलोड गर्नुहोस्
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  PDF डाउनलोड
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  मुद्रित गर्नुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
