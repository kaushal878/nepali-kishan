import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ne-NP', {
    style: 'currency',
    currency: 'NPR'
  }).format(price)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ne-NP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function nepaliNumberToEnglish(nepaliNumber: string): string {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
  return nepaliNumber.split('').map(char => {
    const index = nepaliDigits.indexOf(char)
    return index !== -1 ? englishDigits[index] : char
  }).join('')
}

export function englishNumberToNepali(englishNumber: string): string {
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  
  return englishNumber.split('').map(char => {
    const index = englishDigits.indexOf(char)
    return index !== -1 ? nepaliDigits[index] : char
  }).join('')
}
