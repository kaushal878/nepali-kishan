'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  UserCheck,
  Calendar,
  Mail,
  Phone,
  Download,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info,
  Edit,
  Trash2,
  FileText,
  MapPin
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function PrivacyPolicy() {
  const lastUpdated = '२०२४-०५-०८'

  const sections = [
    {
      title: 'जानकारी संकलन',
      titleEn: 'Information Collection',
      icon: Database,
      color: 'bg-blue-100 text-blue-800',
      content: [
        'हामी तपाईंबाट निम्न जानकारीहरू संकलन गर्छौं:',
        '• खाता जानकारी: नाम, इमेल, फोन नम्बर, प्रदेश, जिल्ला',
        '• कृषि डाटा: खेतीको क्षेत्रफल, बाली प्रकार, उत्पादन विवरण',
        '• प्रयोग डाटा: प्लेटफर्म प्रयोगको तरिका, पहुँच रेकर्डहरू',
        '• डिभाइस जानकारी: ब्राउजर, अपरेटिङ सिस्टम, IP ठेगाना'
      ]
    },
    {
      title: 'जानकारी प्रयोग',
      titleEn: 'Information Usage',
      icon: Eye,
      color: 'bg-green-100 text-green-800',
      content: [
        'हामी तपाईंको जानकारी निम्न उद्देश्यका लागि प्रयोग गर्छौं:',
        '• सेवा प्रदान: बाली सुझाव, रोग पहिचान, मौसम जानकारी',
        '• व्यक्तिगतकरण: तपाईंको आवश्यकता अनुसार सेवा प्रदान गर्न',
        '• सुधार: प्लेटफर्मको गुणस्तर र कार्यक्षमता सुधार गर्न',
        '• सञ्चार: महत्वपूर्ण सूचनाहरू र अपडेटहरू पठाउन'
      ]
    },
    {
      title: 'जानकारी सुरक्षा',
      titleEn: 'Information Security',
      icon: Lock,
      color: 'bg-red-100 text-red-800',
      content: [
        'हामी तपाईंको जानकारी सुरक्षित राख्न निम्न उपायहरू अपनाउँछौं:',
        '• एन्क्रिप्सन: संवेदनशील जानकारी एन्क्रिप्ट गरिएको छ',
        '• पहुँच नियन्त्रण: अधिकृत कर्मचारीहरू मात्र पहुँच गर्न सक्छन्',
        '• नियमित अडिट: सुरक्षा उपायहरू नियमित रूपमा जाँच गरिन्छ',
        '• डाटा ब्याकअप: नियमित अन्तरालमा डाटा ब्याकअप गरिन्छ'
      ]
    },
    {
      title: 'कुकीज र ट्र्याकिङ',
      titleEn: 'Cookies and Tracking',
      icon: UserCheck,
      color: 'bg-purple-100 text-purple-800',
      content: [
        'हामी कुकीज प्रयोग गर्छौं:',
        '• आवश्यक कुकीज: प्लेटफर्म कार्य गर्न आवश्यक',
        '• कार्यात्मक कुकीज: प्रयोगकर्ता अनुभव सुधार गर्न',
        '• एनालिटिकल कुकीज: प्रयोग तथ्यहरू संकलन गर्न',
        '• तपाईं कुकीज अस्वीकार गर्न सक्नुहुन्छ'
      ]
    },
    {
      title: 'तृतीय पक्ष साझेदारी',
      titleEn: 'Third Party Sharing',
      icon: Shield,
      color: 'bg-orange-100 text-orange-800',
      content: [
        'हामी तपाईंको जानकारी निम्न अवसरहरूमा साझेदा गर्न सक्छौं:',
        '• सरकारी निकाय: कानूनी आवश्यकता अनुसार',
        '• सेवा प्रदायकहरू: प्लेटफर्म सञ्चालन गर्न',
        '• अनुसन्धान संस्थाहरू: कृषि अनुसन्धानका लागि',
        '• तपाईंको स्वीकृति बिना कहिल्यै साझेदा गरिदैन'
      ]
    },
    {
      title: 'प्रयोगकर्ता अधिकारहरू',
      titleEn: 'User Rights',
      icon: UserCheck,
      color: 'bg-cyan-100 text-cyan-800',
      content: [
        'तपाईंसँग निम्न अधिकारहरू छन्:',
        '• पहुँच: आफ्नो जानकारी हेर्न र सम्पादन गर्ने',
        '• सुधार: गलत जानकारी सुधार गर्ने',
        '• रिपोर्ट गर्नुहोस्।',
        '• निश्चित अवधिमा विलोप गर्ने',
        '• डाटा पोर्टेबिलिटी: आफ्नो डाटा अन्य सेवामा सार्ने'
      ]
    }
  ]

  const rights = [
    {
      title: 'जानकारी पहुँच',
      description: 'तपाईं आफ्नो खातामा लगइन गरेर आफ्नो सबै जानकारी हेर्न सक्नुहुन्छ।',
      icon: Eye
    },
    {
      title: 'जानकारी सुधार',
      description: 'तपाईं आफ्नो जानकारी कुनै पनि समयमा सुधार गर्न सक्नुहुन्छ।',
      icon: Edit
    },
    {
      title: 'जानकारी मेटाउने',
      description: 'तपाईं आफ्नो खाता मेटाउन सक्नुहुन्छ, यसले सबै डाटा मेटिन्छ।',
      icon: Trash2
    },
    {
      title: 'डाटा निर्यात',
      description: 'तपाईं आफ्नो डाटा मेसिन रिडेबल ढाँचामा प्राप्त गर्न सक्नुहुन्छ।',
      icon: Download
    }
  ]

  const contactInfo = [
    { type: 'इमेल', value: 'privacy@nepalikishan.com', icon: Mail },
    { type: 'फोन', value: '९ो सम्पर्क फारममा सम्पर्क गर्नुहोस्', icon: Phone },
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
            गोपनीयता नीति
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            नेपाली किसानले तपाईंको जानकारी कसरी संकलन, प्रयोग, र सुरक्षित गर्छ भन्ने बारेमा विस्तृत जानकारी
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              अन्तिम अपडेट: {lastUpdated}
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
                <Shield className="h-8 w-8 text-agri-green-600 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">हाम्रो प्रतिबद्धता</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    नेपाली किसानले तपाईंको गोपनीयताको सम्मान गर्छ र तपाईंको व्यक्तिगत जानकारी सुरक्षित राख्न प्रतिबद्ध छ।।
                    हामी नेपालको डाटा सुरक्षा ऐन २०२१ र अन्तर्राष्ट्रिय गोपनीयता मानकहरूको पालना गर्छौं।
                    यो गोपनीयता नीति तपाईंले हाम्रो प्लेटफर्म प्रयोग गर्दा हामी कसरी जानकारी संकलन गर्छौं, प्रयोग गर्छौं, 
                    र सुरक्षित राख्छौं भन्ने बारेमा स्पष्ट विवरण दिन्छ।
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

        {/* User Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">तपाईंका अधिकारहरू</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-full bg-agri-green-100 flex items-center justify-center mx-auto mb-3">
                      <right.icon className="h-6 w-6 text-agri-green-600" />
                    </div>
                    <CardTitle className="text-lg">{right.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl mb-2">गोपनीयता सम्बन्धमा सम्पर्क</CardTitle>
              <CardDescription>
                यदि तपाईंसँग गोपनीयता सम्बन्धमा कुनै प्रश्न वा चिन्ता छ भने हामीलाई सम्पर्क गर्नुहोस्
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
                  गोपनीयता सम्पर्क फार्म
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-3">महत्वपूर्ण सूचनाहरू</h3>
                  <div className="space-y-2 text-sm">
                    <p>• यो गोपनीयता नीति कुनै पनि समयमा परिवर्तन हुन सक्छ।</p>
                    <p>• महत्वपूर्ण परिवर्तनहरू हाम्रो वेबसाइटमा सूचित गरिनेछ।</p>
                    <p>• प्लेटफर्म प्रयोग गर्नुले यो नीति स्वीकार गर्नु हुन्छ।</p>
                    <p>• यो नीति नेपालको कानून अनुसार बनाइएको छ।</p>
                  </div>
                </div>
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
              <h3 className="text-2xl font-bold mb-4">गोपनीयता नीति डाउनलोड गर्नुहोस्</h3>
              <p className="text-muted-foreground mb-6">
                भविष्यका सन्दर्भका लागि गोपनीयता नीतिको PDF प्रतिलिपि डाउनलोड गर्नुहोस्
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
