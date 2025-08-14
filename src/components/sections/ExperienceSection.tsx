'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, PanInfo, MotionValue } from 'framer-motion'
import { Calendar, MapPin, Building, Award, ChevronLeft, ChevronRight, Users, Target, TrendingUp, Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { experiences } from '@/data/portfolio'

// Define proper types
interface ExperienceType {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  technologies: string[]
  achievements?: string[]
}

interface ExperienceCardProps {
  experience: ExperienceType
  index: number
  isActive: boolean
  dragX: MotionValue<number>
  onDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
  actualIndex: number
  currentIndex: number
}

// Enhanced Experience Card Component with 3D effects
const ExperienceCard = ({ 
  experience, 
  index, 
  isActive, 
  dragX, 
  onDragEnd,
  actualIndex,
  currentIndex
}: ExperienceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Calculate relative position for proper stacking
  const relativeIndex = actualIndex - currentIndex
  const isVisible = Math.abs(relativeIndex) <= 1

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
  }

  const typeColors = {
    'full-time': 'from-emerald-500 to-teal-600',
    'part-time': 'from-blue-500 to-cyan-600',
    'contract': 'from-purple-500 to-violet-600',
    'internship': 'from-orange-500 to-amber-600'
  }

  const typeIcons = {
    'full-time': <Building className="w-4 h-4" />,
    'part-time': <Users className="w-4 h-4" />,
    'contract': <Target className="w-4 h-4" />,
    'internship': <TrendingUp className="w-4 h-4" />
  }

  return (
    <motion.div
      ref={cardRef}
      className={`absolute inset-0 ${isActive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
      style={{ 
        x: isActive ? dragX : relativeIndex > 0 ? '100%' : relativeIndex < 0 ? '-100%' : '0%',
        zIndex: isActive ? 20 : 10 - Math.abs(relativeIndex)
      }}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: -200, right: 200 }}
      dragElastic={0.2}
      onDragEnd={onDragEnd}
      animate={{
        x: isActive ? 0 : relativeIndex > 0 ? '100%' : relativeIndex < 0 ? '-100%' : '0%',
        scale: isActive ? 1 : 0.85,
        opacity: isVisible ? (isActive ? 1 : 0.3) : 0,
        rotateY: isActive ? 0 : relativeIndex % 2 === 0 ? -10 : 10,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.6
      }}
      whileHover={{ 
        scale: isActive ? 1.01 : 0.87,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl overflow-hidden relative group">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20" />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
            }}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : ['100% 100%', '0% 0%']
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>

        {/* Holographic Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.1), transparent)',
            backgroundSize: '300% 300%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        <CardHeader className="relative z-10 pb-4">
          {/* Company & Position Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              {/* Position Title with Gradient */}
              <motion.h3 
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {experience.position}
              </motion.h3>
              
              {/* Company with Icon */}
              <motion.div 
                className="flex items-center text-lg font-semibold text-slate-600 dark:text-slate-300 mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Building className="w-5 h-5 mr-2" />
                {experience.company}
              </motion.div>
            </div>

            {/* Enhanced Type Badge */}
            <motion.div 
              className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${typeColors[experience.type]} shadow-lg flex items-center gap-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {typeIcons[experience.type]}
              {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
            </motion.div>
          </div>

          {/* Date and Location with Enhanced Icons */}
          <motion.div 
            className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            <div className="flex items-center bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              <span className="font-medium">
                {formatDate(experience.startDate)} - {
                  experience.endDate ? formatDate(experience.endDate) : 'Present'
                }
              </span>
            </div>
            <div className="flex items-center bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full">
              <MapPin className="w-4 h-4 mr-2 text-purple-500" />
              <span className="font-medium">{experience.location}</span>
            </div>
          </motion.div>
        </CardHeader>

        <CardContent className="relative z-10 space-y-4 max-h-64 overflow-y-auto">
          {/* Enhanced Description */}
          <motion.div
            className="relative p-3 bg-gradient-to-r from-slate-50/50 to-white/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-lg border border-slate-200/50 dark:border-slate-600/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.8 }}
          >
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
              {experience.description}
            </p>
            
            {/* Decorative corner elements */}
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60" />
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60" />
          </motion.div>

          {/* Technologies with Advanced Pills */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
          >
            <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center">
              <Star className="w-3 h-3 mr-1 text-yellow-500" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1">
              {experience.technologies.slice(0, 6).map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-300/30 dark:border-purple-400/30 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 1.2 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
              {experience.technologies.length > 6 && (
                <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-400">
                  +{experience.technologies.length - 6} more
                </span>
              )}
            </div>
          </motion.div>

          {/* Key Achievements with Enhanced Design */}
          {experience.achievements && experience.achievements.length > 0 && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 1.4 }}
            >
              <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center">
                <Award className="w-3 h-3 mr-1 text-orange-500" />
                Achievements
              </h4>
              <div className="space-y-1">
                {experience.achievements.slice(0, 2).map((achievement: string, achievementIndex: number) => (
                  <motion.div
                    key={achievementIndex}
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 1.6 + achievementIndex * 0.1 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-1.5 mr-2"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    />
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
                {experience.achievements.length > 2 && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 ml-4">
                    +{experience.achievements.length - 2} more achievements
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </CardContent>

        {/* Interactive Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)'
          }}
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card Corner Decorations */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce" />
      </Card>
    </motion.div>
  )
}

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dragX = useMotionValue(0)

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    
    if (info.offset.x > threshold) {
      // Dragged right (previous)
      setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
    } else if (info.offset.x < -threshold) {
      // Dragged left (next)
      setCurrentIndex((prev) => (prev + 1) % experiences.length)
    }
    
    dragX.set(0)
  }

  const nextExperience = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length)
  }, [])

  const prevExperience = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }, [])

  const goToExperience = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextExperience()
    }, 8000)

    return () => clearInterval(interval)
  }, [nextExperience])

  return (
    <section id="experience" className="py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden min-h-screen flex items-center">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,100 Q 250,50 500,150 T 1000,100"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 0,300 Q 300,200 600,350 T 1200,300"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </motion.div>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My journey through various roles and companies, building expertise in{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI/ML
            </span>{' '}
            and{' '}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              full-stack development
            </span>
          </motion.p>
        </motion.div>

        {/* Main Experience Cards Container */}
        <div className="relative">
          {/* Card Stack Container */}
          <div className="relative h-[500px] w-full max-w-3xl mx-auto overflow-hidden">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience as ExperienceType}
                index={index}
                isActive={index === currentIndex}
                dragX={dragX}
                onDragEnd={handleDragEnd}
                actualIndex={index}
                currentIndex={currentIndex}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6 gap-6">
            {/* Previous Button */}
            <motion.button
              onClick={prevExperience}
              className="p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.button>

            {/* Progress Indicators */}
            <div className="flex gap-3">
              {experiences.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToExperience(index)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                      : 'w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  } rounded-full`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextExperience}
              className="p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.button>
          </div>

          {/* Experience Counter */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
              <Award className="w-4 h-4 text-orange-500" />
              <span>
                Experience {currentIndex + 1} of {experiences.length}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Download Resume CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="relative bg-gradient-to-r from-white/90 to-slate-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-xl p-6 shadow-2xl">
              <motion.p
                className="text-slate-600 dark:text-slate-300 mb-4 text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Want to know more about my experience and qualifications?
              </motion.p>
              
              <motion.button
                onClick={() => window.open('/Vaibhav Resume July 2025.pdf', '_blank')}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center">
                  Download Full Resume
                  <motion.svg
                    className="ml-3 w-5 h-5"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
