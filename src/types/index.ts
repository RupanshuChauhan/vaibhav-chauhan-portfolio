export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: 'ai-ml' | 'web-dev' | 'full-stack' | 'mobile'
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  completed: boolean
  startDate: string
  endDate?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  technologies: string[]
  achievements: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  image?: string
  description: string
  skills: string[]
}

export interface Skill {
  name: string
  category: 'programming' | 'framework' | 'database' | 'tool' | 'ai-ml' | 'cloud'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: string
  description?: string
  relevant_courses?: string[]
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
