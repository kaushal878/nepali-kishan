'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  Shield,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Smartphone,
  Globe
} from 'lucide-react'
import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', '', '', ''])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState<'phone' | 'otp' | 'register'>('phone')
  const [loading, setLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)
  const [errors, setErrors] = useState<string[]>([])
  const [success, setSuccess] = useState('')

  const handlePhoneSubmit = async () => {
    if (!phoneNumber) {
      setErrors(['फोन नम्बर आवश्यक छ'])
      return
    }

    if (phoneNumber.length !== 10) {
      setErrors(['फोन नम्बर १० अंकको हुनुपर्छ'])
      return
    }

    setLoading(true)
    setErrors([])

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setStep('otp')
      setSuccess('OTP सफलतापूर्वक पठाइएको छ')
      startResendTimer()
    }, 1500)
  }

  const handleOtpSubmit = async () => {
    const otpString = otp.join('')
    if (otpString.length !== 6) {
      setErrors(['६ अंकको OTP हाल्नुहोस्'])
      return
    }

    setLoading(true)
    setErrors([])

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess('लगइन सफलतापूर्वक भयो!')
      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1000)
    }, 1500)
  }

  const handleRegister = async () => {
    if (!phoneNumber || !email || !password) {
      setErrors(['सबै फाँटहरू भर्नुहोस्'])
      return
    }

    setLoading(true)
    setErrors([])

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess('दर्ता सफलतापूर्वक भयो!')
      setStep('otp')
      startResendTimer()
    }, 1500)
  }

  const handleResendOtp = () => {
    if (resendTimer > 0) return
    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess('OTP पुन: पठाइएको छ')
      startResendTimer()
    }, 1000)
  }

  const startResendTimer = () => {
    setResendTimer(60)
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '')
    // Limit to 10 digits
    return digits.slice(0, 10)
  }

  return (
    <MainLayout>
      <div className="container px-4 py-6 max-w-md mx-auto min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card className="w-full">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-agri-green-500 to-sky-blue-500 rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">
                {isLogin ? 'लगइन गर्नुहोस्' : 'दर्ता गर्नुहोस्'}
              </CardTitle>
              <CardDescription>
                {isLogin 
                  ? 'तपाईंको फोन नम्बर प्रयोग गरेर लगइन गर्नुहोस्'
                  : 'नयाँ खाता खोल्न फोन नम्बर प्रयोग गर्नुहोस्'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-3"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-700 text-sm">{success}</span>
                  </div>
                </motion.div>
              )}

              {/* Error Messages */}
              {errors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-3"
                >
                  <div className="space-y-1">
                    {errors.map((error, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <span className="text-red-700 text-sm">{error}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Phone Number Step */}
              {(step === 'phone' || step === 'register') && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      फोन नम्बर
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="९८१२३४५६७८"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                        className="pl-10"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  {!isLogin && step === 'register' && (
                    <>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          इमेल ठेगाना
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          पासवर्ड
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="पासवर्ड टाइप गर्नुहोस्"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  <Button
                    onClick={step === 'register' ? handleRegister : handlePhoneSubmit}
                    disabled={loading}
                    className="w-full bg-agri-green-500 hover:bg-agri-green-600"
                  >
                    {loading ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        {step === 'register' ? 'दर्ता हुँदै...' : 'OTP पठाउँदै...'}
                      </>
                    ) : (
                      <>
                        {step === 'register' ? 'दर्ता गर्नुहोस्' : 'OTP माग्नुहोस्'}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}

              {/* OTP Step */}
              {step === 'otp' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {phoneNumber} मा पठाइएको ६ अंकको OTP हाल्नुहोस्
                    </p>
                  </div>

                  <div className="flex justify-center space-x-2">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-semibold"
                      />
                    ))}
                  </div>

                  <div className="text-center space-y-2">
                    <Button
                      onClick={handleOtpSubmit}
                      disabled={loading || otp.join('').length !== 6}
                      className="w-full bg-agri-green-500 hover:bg-agri-green-600"
                    >
                      {loading ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          प्रमाणित गर्दै...
                        </>
                      ) : (
                        <>
                          प्रमाणित गर्नुहोस्
                          <CheckCircle className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={handleResendOtp}
                      disabled={resendTimer > 0}
                      className="w-full"
                    >
                      {resendTimer > 0 ? (
                        `${resendTimer} सेकेन्डमा OTP पुन: पठाउनुहोस्`
                      ) : (
                        <>
                          OTP पुन: पठाउनुहोस्
                          <RefreshCw className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Login/Register Toggle */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  {isLogin ? 'खाता छैन?' : 'पहिले नै खाता छ?'}
                  <button
                    onClick={() => {
                      setIsLogin(!isLogin)
                      setStep('phone')
                      setErrors([])
                      setSuccess('')
                      setPhoneNumber('')
                      setEmail('')
                      setPassword('')
                      setOtp(['', '', '', '', '', '', ''])
                    }}
                    className="text-agri-green-600 hover:text-agri-green-700 font-medium ml-1"
                  >
                    {isLogin ? 'दर्ता गर्नुहोस्' : 'लगइन गर्नुहोस्'}
                  </button>
                </p>
              </div>

              {/* Security Badge */}
              <div className="flex items-center justify-center space-x-2 pt-4">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-xs text-muted-foreground">
                  तपाईंको जानकारी सुरक्षित छ
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Language and Country Info */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>नेपाल +९७७ ९८१२३४५६७८</span>
            </div>
            <div className="mt-2">
              <Badge variant="outline" className="text-xs">
                नेपाली कृषक सत्यापन प्रणाली
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
