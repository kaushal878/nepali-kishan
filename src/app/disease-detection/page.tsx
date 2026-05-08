'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Camera, 
  Upload, 
  X, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  Download,
  Share2,
  RefreshCw,
  Droplets,
  Sun,
  Wind,
  Bug
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LoadingSpinner, ScanLine } from '@/components/ui/loading-spinner'

interface DiseaseResult {
  disease: string
  diseaseEn: string
  confidence: number
  severity: 'low' | 'medium' | 'high' | 'critical'
  symptoms: string[]
  symptomsEn: string[]
  causes: string[]
  causesEn: string[]
  prevention: string[]
  preventionEn: string[]
  chemicalTreatment: string
  chemicalTreatmentEn: string
  organicTreatment: string
  organicTreatmentEn: string
  urgency: string
  urgencyEn: string
}

export default function DiseaseDetection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<DiseaseResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isCameraOpen, setIsCameraOpen] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas')
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(videoRef.current, 0, 0)
      const imageData = canvas.toDataURL('image/jpeg')
      setSelectedImage(imageData)
      setIsCameraOpen(false)
      setResult(null)
    }
  }

  const analyzeDisease = async () => {
    if (!selectedImage) return

    setIsAnalyzing(true)
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult: DiseaseResult = {
        disease: 'टमाटर ढुसी रोग',
        diseaseEn: 'Tomato Blight',
        confidence: 92,
        severity: 'high',
        symptoms: [
          'पातहरूमा पहेँलो वा खैरो धब्बा',
          'पातहरू सुक्ने र झर्ने',
          'फलमा कालो धब्बा र खराबी',
          'बोटको झड्ने'
        ],
        symptomsEn: [
          'Yellow or dark spots on leaves',
          'Drying and falling leaves',
          'Dark spots and rot on fruits',
          'Plant wilting'
        ],
        causes: [
          'उच्च आद्रता र तापक्रम',
          'खराब हावाको प्रवाह',
          'दूषित बिउ वा बिरुवा',
          'अत्यधिक सिंचाई'
        ],
        causesEn: [
          'High humidity and temperature',
          'Poor air circulation',
          'Contaminated seeds or plants',
          'Excessive irrigation'
        ],
        prevention: [
          'उपयुक्त जातको बिउ छनोट गर्नुहोस्',
          'बोटहरू बीच उचित दुरी राख्नुहोस्',
          'नियमित रूपमा जाँच गर्नुहोस्',
          'रोग प्रतिरोधी जातहरू लगाउनुहोस्'
        ],
        preventionEn: [
          'Choose resistant varieties',
          'Maintain proper spacing between plants',
          'Regular monitoring',
          'Plant disease-resistant varieties'
        ],
        chemicalTreatment: 'कपर हाइड्रोक्साइड वा क्लोरोथालोनिल फफूंदनाशकको प्रयोग गर्नुहोस्। १० दिनको अन्तरालमा २-३ पटक छर्ने गर्नुहोस्।',
        chemicalTreatmentEn: 'Apply copper hydroxide or chlorothalonil fungicide. Spray 2-3 times with 10-day intervals.',
        organicTreatment: 'निमको अर्क (५%) वा गोबरको जुस (१:१० अनुपात) छर्नुहोस्। बोर्डो मिश्रण पनि प्रभावकारी छ।',
        organicTreatmentEn: 'Apply neem oil (5%) or cow dung juice (1:10 ratio). Bordeaux mixture is also effective.',
        urgency: 'तुरुन्त उपचार गर्नुहोस् - यो रोग छिटो फैलिन्छ',
        urgencyEn: 'Immediate treatment required - this disease spreads quickly'
      }
      
      setResult(mockResult)
      setIsAnalyzing(false)
    }, 3000)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'high': return 'bg-orange-500'
      case 'critical': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'low': return 'कम'
      case 'medium': return 'मध्यम'
      case 'high': return 'उच्च'
      case 'critical': return 'गम्भीर'
      default: return 'अज्ञात'
    }
  }

  return (
    <MainLayout>
      <div className="container px-4 py-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🌾 रोग पहिचान | Disease Detection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            तपाईंको बालीको रोग AI ले पहिचान गर्नुहोस् र उपचारका लागि सुझाव प्राप्त गर्नुहोस्
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>फोटो अपलोड गर्नुहोस्</span>
                </CardTitle>
                <CardDescription>
                  बालीको फोटो खिचेर वा छानेर रोग पहिचान गर्नुहोस्
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-agri-green-500 transition-colors">
                  {selectedImage ? (
                    <div className="relative">
                      <img
                        src={selectedImage}
                        alt="Selected plant"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setSelectedImage(null)
                          setResult(null)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto bg-agri-green-100 rounded-full flex items-center justify-center">
                        <Upload className="h-8 w-8 text-agri-green-600" />
                      </div>
                      <div>
                        <p className="text-lg font-medium">फोटो छान्नुहोस् वा खिच्नुहोस्</p>
                        <p className="text-sm text-muted-foreground">
                          JPG, PNG वा WEBP (अधिकतम १०MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                {!selectedImage && (
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1"
                      variant="outline"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      फाइल छान्नुहोस्
                    </Button>
                    <Button
                      onClick={() => setIsCameraOpen(true)}
                      className="flex-1"
                      variant="agri"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      क्यामेरा
                    </Button>
                  </div>
                )}

                {selectedImage && (
                  <Button
                    onClick={analyzeDisease}
                    disabled={isAnalyzing}
                    className="w-full bg-agri-green-500 hover:bg-agri-green-600"
                  >
                    {isAnalyzing ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        विश्लेषण गर्दै...
                      </>
                    ) : (
                      <>
                        <Bug className="h-4 w-4 mr-2" />
                        रोग पहिचान गर्नुहोस्
                      </>
                    )}
                  </Button>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">फोटो खिच्ने सुझावहरू</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Sun className="h-4 w-4 text-yellow-500 mt-0.5" />
                  <p className="text-sm">राम्रो प्रकाशमा फोटो खिच्नुहोस्</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Droplets className="h-4 w-4 text-blue-500 mt-0.5" />
                  <p className="text-sm">ओसिलो पातहरूको फोटो नखिच्नुहोस्</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Wind className="h-4 w-4 text-gray-500 mt-0.5" />
                  <p className="text-sm">रोगका लक्षणहरू स्पष्ट देखिने गरी खिच्नुहोस्</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence>
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Card className="h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <LoadingSpinner size="lg" variant="agri" />
                        <ScanLine className="absolute inset-0" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">AI विश्लेषण गर्दै</h3>
                        <p className="text-sm text-muted-foreground">
                          तपाईंको बालीको रोग पहिचान गर्दै...
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {result && !isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  {/* Result Header */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl">{result.disease}</CardTitle>
                          <CardDescription className="text-base">{result.diseaseEn}</CardDescription>
                        </div>
                        <div className="text-center">
                          <div className={`w-16 h-16 rounded-full ${getSeverityColor(result.severity)} flex items-center justify-center text-white font-bold text-xl`}>
                            {result.confidence}%
                          </div>
                          <p className="text-sm mt-1">विश्वास</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <Badge className={`${getSeverityColor(result.severity)} text-white`}>
                          {getSeverityText(result.severity)}
                        </Badge>
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium">{result.urgency}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Symptoms */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Info className="h-5 w-5" />
                        <span>लक्षणहरू</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {result.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-agri-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Treatments */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">रासायनिक उपचार</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{result.chemicalTreatment}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-agri-green-600">जैविक उपचार</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{result.organicTreatment}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Prevention */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>रोकथाम</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {result.prevention.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      रिपोर्ट डाउनलोड
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="h-4 w-4 mr-2" />
                      सेयर गर्नुहोस्
                    </Button>
                    <Button variant="agri" onClick={() => {
                      setSelectedImage(null)
                      setResult(null)
                    }}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      पुन: परीक्षण
                    </Button>
                  </div>
                </motion.div>
              )}

              {!result && !isAnalyzing && (
                <Card className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                      <Camera className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">रोग पहिचान गर्नुहोस्</h3>
                      <p className="text-sm text-muted-foreground">
                        बालीको फोटो अपलोड गरेर AI ले रोग पहिचान गर्नुहोस्
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Camera Modal */}
        <AnimatePresence>
          {isCameraOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setIsCameraOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-background rounded-lg p-4 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">क्यामेरा</h3>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full rounded-lg"
                  />
                  <div className="flex space-x-2">
                    <Button
                      onClick={handleCameraCapture}
                      className="flex-1 bg-agri-green-500 hover:bg-agri-green-600"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      फोटो खिच्नुहोस्
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsCameraOpen(false)}
                      className="flex-1"
                    >
                      रद्द गर्नुहोस्
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  )
}
