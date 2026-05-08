'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Download, 
  Share2, 
  Eye, 
  Calendar,
  User,
  FileText,
  TrendingUp,
  Award,
  BookOpen,
  Microscope,
  BarChart3,
  Users,
  Clock,
  ExternalLink,
  Bookmark,
  Quote
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

interface ResearchPaper {
  id: string
  title: string
  titleEn: string
  abstract: string
  abstractEn: string
  authors: string[]
  authorsEn: string[]
  institution: string
  institutionEn: string
  publishedAt: string
  category: string
  categoryEn: string
  tags: string[]
  tagsEn: string[]
  type: 'journal' | 'conference' | 'thesis' | 'report'
  pages: string
  doi: string
  citations: number
  downloads: number
  views: string
  pdfUrl: string
  featured: boolean
  isBookmarked: boolean
}

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const researchPapers: ResearchPaper[] = [
    {
      id: '1',
      title: 'नेपालमा जैविक खेतीको आर्थिक प्रभाव: तराई क्षेत्रको अध्ययन',
      titleEn: 'Economic Impact of Organic Farming in Nepal: A Study of Terai Region',
      abstract: 'यो अनुसन्धानले तराई क्षेत्रमा जैविक खेतीले पारम्परिक खेतीभन्दा कति बढी आम्दानी दिन्छ र वातावरणमा पर्ने प्रभावको विश्लेषण गर्दछ',
      abstractEn: 'This research analyzes how much more income organic farming provides compared to traditional farming in the Terai region and its environmental impact',
      authors: ['डा. राम बहादुर शाह', 'डा. सीता शर्मा', 'डा. हरि अधिकारी'],
      authorsEn: ['Dr. Ram Bahadur Shah', 'Dr. Sita Sharma', 'Dr. Hari Adhikari'],
      institution: 'कृषि विश्वविद्यालय, रामपुर',
      institutionEn: 'Agriculture University, Rampur',
      publishedAt: '२०२४-०३-१५',
      category: 'जैविक खेती',
      categoryEn: 'Organic Farming',
      tags: ['जैविक', 'आर्थिक', 'तराई', 'आम्दानी'],
      tagsEn: ['Organic', 'Economic', 'Terai', 'Income'],
      type: 'journal',
      pages: '१२-२८',
      doi: '10.1234/nepali-agri.2024.001',
      citations: 15,
      downloads: 234,
      views: '१,२३४',
      pdfUrl: '/research/organic-farming-impact.pdf',
      featured: true,
      isBookmarked: false
    },
    {
      id: '2',
      title: 'धान खेतीमा पानी बचत गर्ने आधुनिक सिंचाई प्रविधिहरू',
      titleEn: 'Modern Irrigation Techniques for Water Conservation in Rice Farming',
      abstract: 'यो अनुसन्धानले धान खेतीमा पानी बचत गर्ने नयाँ सिंचाई प्रविधिहरूको प्रभावकारिता र लागत-लाभ विश्लेषण प्रस्तुत गर्दछ',
      abstractEn: 'This research presents the effectiveness and cost-benefit analysis of new irrigation techniques for water conservation in rice farming',
      authors: ['डा. कृष्ण प्रसाद', 'डा. अनिता जोशी'],
      authorsEn: ['Dr. Krishna Prasad', 'Dr. Anita Joshi'],
      institution: 'नेपाल अनुसन्धान परिषद्, काठमाडौँ',
      institutionEn: 'Nepal Research Council, Kathmandu',
      publishedAt: '२०२४-०२-२०',
      category: 'सिंचाई',
      categoryEn: 'Irrigation',
      tags: ['सिंचाई', 'पानी बचत', 'धान', 'प्रविधि'],
      tagsEn: ['Irrigation', 'Water Conservation', 'Rice', 'Technology'],
      type: 'conference',
      pages: '४५-६२',
      doi: '10.1234/nepali-agri.2024.002',
      citations: 8,
      downloads: 156,
      views: '८९०',
      pdfUrl: '/research/irrigation-techniques.pdf',
      featured: false,
      isBookmarked: true
    },
    {
      id: '3',
      title: 'टमाटरको रोग प्रतिरोधी किस्महरूको विकास: आणविक अध्ययन',
      titleEn: 'Development of Disease-Resistant Tomato Varieties: A Molecular Study',
      abstract: 'यो अनुसन्धानले आणविक प्रविधिको प्रयोग गरेर टमाटरका रोग प्रतिरोधी किस्महरू विकास गर्ने सम्भाव्यताहरूको अन्वेषण गर्दछ',
      abstractEn: 'This research explores the possibilities of developing disease-resistant tomato varieties using molecular techniques',
      authors: ['डा. सुशील कुमार', 'डा. मीरा गुरुङ', 'डा. राजेश तिवारी'],
      authorsEn: ['Dr. Sushil Kumar', 'Dr. Meera Gurung', 'Dr. Rajesh Tiwari'],
      institution: 'जैव प्रविधि अनुसन्धान केन्द्र, ललितपुर',
      institutionEn: 'Biotechnology Research Center, Lalitpur',
      publishedAt: '२०२४-०१-१०',
      category: 'रोग नियन्त्रण',
      categoryEn: 'Disease Control',
      tags: ['टमाटर', 'रोग प्रतिरोध', 'आणविक', 'किस्म'],
      tagsEn: ['Tomato', 'Disease Resistance', 'Molecular', 'Variety'],
      type: 'thesis',
      pages: '८९-११०',
      doi: '10.1234/nepali-agri.2024.003',
      citations: 12,
      downloads: 198,
      views: '१,०२३',
      pdfUrl: '/research/tomato-resistance.pdf',
      featured: true,
      isBookmarked: false
    },
    {
      id: '4',
      title: 'हिमालपारिको कृषि प्रणाली: पहाडी क्षेत्रको चुनौती र अवसर',
      titleEn: 'High Mountain Farming Systems: Challenges and Opportunities in Hill Regions',
      abstract: 'यो अनुसन्धानले हिमालपारिका कठिन भूभागहरूमा कृषि गर्ने चुनौतीहरू र ती सम्बोधन गर्ने अवसरहरूको विश्लेषण गर्दछ',
      abstractEn: 'This research analyzes the challenges of farming in difficult mountainous terrains and opportunities to address them',
      authors: ['डा. लक्ष्मण प्रधान', 'डा. गीता थापा'],
      authorsEn: ['Dr. Lakshman Pradhan', 'Dr. Geeta Thapa'],
      institution: 'पहाडी विकास अनुसन्धान, पोखरा',
      institutionEn: 'Mountain Development Research, Pokhara',
      publishedAt: '२०२४-०४-०५',
      category: 'पहाडी खेती',
      categoryEn: 'Mountain Farming',
      tags: ['हिमालपारि', 'पहाडी', 'चुनौती', 'अवसर'],
      tagsEn: ['High Mountain', 'Hilly', 'Challenges', 'Opportunities'],
      type: 'report',
      pages: '३४-५१',
      doi: '10.1234/nepali-agri.2024.004',
      citations: 6,
      downloads: 89,
      views: '५६७',
      pdfUrl: '/research/mountain-farming.pdf',
      featured: false,
      isBookmarked: false
    }
  ]

  const categories = ['सबै', 'जैविक खेती', 'सिंचाई', 'रोग नियन्त्रण', 'पहाडी खेती', 'अन्नबाली', 'तरकारी खेती']
  const types = ['सबै', 'जर्नल', 'सम्मेलन', 'शोधप्रबन्ध', 'प्रतिवेदन']
  const typesEn = ['All', 'Journal', 'Conference', 'Thesis', 'Report']

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = !selectedCategory || selectedCategory === 'सबै' || paper.category === selectedCategory
    const matchesType = !selectedType || selectedType === 'सबै' ||
                       (selectedType === 'जर्नल' && paper.type === 'journal') ||
                       (selectedType === 'सम्मेलन' && paper.type === 'conference') ||
                       (selectedType === 'शोधप्रबन्ध' && paper.type === 'thesis') ||
                       (selectedType === 'प्रतिवेदन' && paper.type === 'report')
    
    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'journal': return 'bg-blue-100 text-blue-800'
      case 'conference': return 'bg-green-100 text-green-800'
      case 'thesis': return 'bg-purple-100 text-purple-800'
      case 'report': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'journal': return <BookOpen className="h-4 w-4" />
      case 'conference': return <Users className="h-4 w-4" />
      case 'thesis': return <Award className="h-4 w-4" />
      case 'report': return <FileText className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
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
            कृषि अनुसन्धान
            <span className="block text-xl md:text-2xl text-agri-green-600 dark:text-agri-green-400 mt-2">
              Agriculture Research
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            कृषि क्षेत्रका नयाँ अनुसन्धान, खोजहरू र वैज्ञानिक अध्ययनहरू
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
              placeholder="अनुसन्धान खोज्नुहोस्... | Search research..."
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
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">प्रकार:</span>
            </div>
            {types.map((type, index) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
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
              <Microscope className="h-8 w-8 text-agri-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{researchPapers.length}</h3>
              <p className="text-sm text-muted-foreground">कुल अनुसन्धान पत्रहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {researchPapers.reduce((sum, paper) => sum + paper.citations, 0)}
              </h3>
              <p className="text-sm text-muted-foreground">कुल उद्धरणहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {researchPapers.reduce((sum, paper) => sum + paper.downloads, 0).toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">कुल डाउनलोडहरू</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {[...new Set(researchPapers.flatMap(paper => paper.authors))].length}
              </h3>
              <p className="text-sm text-muted-foreground">अनुसन्धानकर्ताहरू</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Research Papers */}
        <div className="space-y-6">
          {filteredPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className={`hover:shadow-lg transition-all duration-300 ${paper.featured ? 'border-agri-green-200 bg-agri-green-50/50' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className={getTypeColor(paper.type)}>
                          {getTypeIcon(paper.type)}
                          <span className="ml-1">
                            {paper.type === 'journal' ? 'जर्नल' :
                             paper.type === 'conference' ? 'सम्मेलन' :
                             paper.type === 'thesis' ? 'शोधप्रबन्ध' : 'प्रतिवेदन'}
                          </span>
                        </Badge>
                        <Badge variant="secondary">{paper.category}</Badge>
                        {paper.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800">
                            <Award className="h-3 w-3 mr-1" />
                            विशेष
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-2 line-clamp-2">
                        {paper.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-sm">
                        {paper.abstract}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <Bookmark className={`h-4 w-4 ${paper.isBookmarked ? 'fill-current text-agri-green-600' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Authors */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">लेखकहरू:</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {paper.authors.join(', ')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {paper.institution}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{paper.publishedAt}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="h-4 w-4" />
                        <span>पृष्ठ {paper.pages}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Quote className="h-4 w-4" />
                        <span>{paper.citations} उद्धरण</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{paper.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{paper.downloads}</span>
                      </div>
                    </div>
                  </div>

                  {/* DOI */}
                  <div className="text-xs text-muted-foreground">
                    DOI: {paper.doi}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      PDF डाउनलोड
                    </Button>
                    <Button variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      हेर्नुहोस्
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPapers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Microscope className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">कुनै अनुसन्धान फेला परेन</h3>
            <p className="text-muted-foreground">
              तपाईंको खोजको नतिजा भेटिएन, कृपया अन्य खोज शब्द प्रयोग गर्नुहोस्
            </p>
          </motion.div>
        )}

        {/* Submit Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">आफ्नो अनुसन्धान साझेदारी गर्नुहोस्</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                यदि तपाईंसँग कृषि सम्बन्धी अनुसन्धान छ भने हाम्रो प्लेटफर्ममा साझेदारी गर्नुहोस्
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <FileText className="h-4 w-4 mr-2" />
                  अनुसन्धान पेश गर्नुहोस्
                </Button>
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  अनुसन्धानकर्ताहरूसँग जोडिनुहोस्
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  )
}
