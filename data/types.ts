export interface ServiceItem {
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  image: string
  imagePosition?: string
  features: string[]
  /** Hidden services stay routable by direct URL but are excluded from nav, grids, and forms. */
  hidden?: boolean
}

export interface ProjectItem {
  id: string
  title: string
  location: string
  systemSize: string
  propertyType: 'Residential' | 'Commercial' | 'Industrial'
  estimatedSavings: string
  image: string
  imagePosition?: string
  description: string
}

export interface TestimonialItem {
  id: string
  name: string
  location: string
  rating: number
  quote: string
  systemSize: string
  avatar: string
}

export interface FaqItem {
  question: string
  answer: string
  category?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface TrustStat {
  label: string
  value: string
  icon: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
}

export interface WhyChooseUsItem {
  title: string
  description: string
  icon: string
  image: string
  imagePosition?: string
}
