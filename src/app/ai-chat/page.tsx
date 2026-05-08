'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Mic, 
  MicOff, 
  Bot, 
  User, 
  Sparkles,
  Volume2,
  VolumeX,
  Download,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  isTyping?: boolean
}

const suggestedQuestions = [
  'टमाटरको बिरुवा किन सुक्छ?',
  'पोखरामा कुन बाली राम्रो हुन्छ?',
  'धनमा लाग्ने रोगको उपाय के हो?',
  'आजको मौसम कस्तो छ? खेतीका लागि उपयुक्त छ?',
  'जैविक मल कसरी बनाउने?',
  'पशुपालनका लागि सरकारी सहयोग के छ?'
]

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'नमस्ते! म कृषक AI हुँ। म तपाईंको कृषि सम्बन्धी सबै प्रश्नहरूको उत्तर दिन सक्छु। तपाईंलाई के सोध्न चाहनुहुन्छ?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (question: string): string => {
    const responses = [
      'यो एक उत्कृष्ट प्रश्न हो। तपाईंको समस्याको समाधानका लागि, म यी सुझावहरू दिन्छु...',
      'तपाईंको खेतीको लागि, म यो विधि अपनाउन सुझाव दिन्छु...',
      'यो समस्याको लागि, तपाईं यी कदमहरू अपनाउन सक्नुहुन्छ...',
      'मेरो विश्लेषण अनुसार, तपाईंको लागि यो सबैभन्दा उत्तम समाधान हुन सक्छ...'
    ]
    
    return responses[Math.floor(Math.random() * responses.length)] + 
           '\n\n**विस्तृत जानकारी:**\n' +
           '१. मृदा भागको जाँच गर्नुहोस्\n' +
           '२. उपयुक्त मलको प्रयोग गर्नुहोस्\n' +
           '३. नियमित सिंचाई गर्नुहोस्\n' +
           '४. रोग नियन्त्रणका लागि ध्यान दिनुहोस्\n\n' +
           'के तपाईंलाई थप जानकारी चाहिन्छ?'
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleVoiceInput = () => {
    if (!isListening) {
      setIsListening(true)
      // Simulate voice recognition
      setTimeout(() => {
        setInputValue('मेरो टमाटरको बिरुवा सुकिरहेको छ, के गर्नु भन्नुहुन्छ?')
        setIsListening(false)
      }, 3000)
    } else {
      setIsListening(false)
    }
  }

  const handleTextToSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel()
        setIsSpeaking(false)
      } else {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = 'ne-NP'
        utterance.onend = () => setIsSpeaking(false)
        window.speechSynthesis.speak(utterance)
        setIsSpeaking(true)
      }
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const regenerateResponse = (messageId: string) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, content: generateAIResponse('Regenerated response') }
          : msg
      ))
      setIsTyping(false)
    }, 1500)
  }

  return (
    <MainLayout>
      <div className="container px-4 py-6 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-agri-green-500 to-sky-blue-500 flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">कृषक AI</h1>
              <p className="text-sm text-muted-foreground">तपाईंको कृषि सहायक</p>
            </div>
          </div>
          <Badge className="bg-agri-green-100 text-agri-green-800 dark:bg-agri-green-900 dark:text-agri-green-200">
            <Sparkles className="w-3 h-3 mr-1" />
            AI सक्रिय
          </Badge>
        </motion.div>

        {/* Chat Container */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <span>वार्तालाप</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => setMessages([])}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-hidden p-0">
            <div className="h-full overflow-y-auto px-4 pb-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user' 
                          ? 'bg-agri-green-500' 
                          : 'bg-sky-blue-500'
                      }`}>
                        {message.role === 'user' ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      
                      <div className={`rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-agri-green-500 text-white'
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        
                        {message.role === 'assistant' && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleTextToSpeech(message.content)}
                              className="h-6 w-6 p-0"
                            >
                              {isSpeaking ? (
                                <VolumeX className="h-3 w-3" />
                              ) : (
                                <Volume2 className="h-3 w-3" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(message.content)}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => regenerateResponse(message.id)}
                              className="h-6 w-6 p-0"
                            >
                              <RefreshCw className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                            >
                              <ThumbsUp className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                            >
                              <ThumbsDown className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start mb-4"
                  >
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-sky-blue-500 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="rounded-lg p-3 bg-muted">
                        <LoadingSpinner size="sm" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>

        {/* Suggested Questions */}
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">सुझावित प्रश्नहरू:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setInputValue(question)}
                className="text-xs h-auto py-2 px-3 whitespace-normal text-left"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="तपाईंको प्रश्न यहाँ लेख्नुहोस्..."
              className="flex-1"
              disabled={isTyping}
            />
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleVoiceInput}
              className={isListening ? 'bg-red-100 text-red-600' : ''}
            >
              {isListening ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-agri-green-500 hover:bg-agri-green-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {isListening && (
            <div className="mt-2 text-sm text-red-600 flex items-center">
              <LoadingSpinner size="sm" variant="agri" className="mr-2" />
              सुन्दै...
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
