import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "agri" | "earth" | "sky"
}

export function LoadingSpinner({ 
  className, 
  size = "md", 
  variant = "default" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  }

  const variantClasses = {
    default: "border-primary",
    agri: "border-agri-green-500",
    earth: "border-earth-brown-500", 
    sky: "border-sky-blue-500"
  }

  return (
    <div className={cn(
      "animate-spin rounded-full border-2 border-t-transparent",
      sizeClasses[size],
      variantClasses[variant],
      className
    )} />
  )
}

export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-1", className)}>
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  )
}

export function ScanLine({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-agri-green-400 to-transparent animate-scan" />
    </div>
  )
}
