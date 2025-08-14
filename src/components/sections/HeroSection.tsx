 'use client';
import Image from 'next/image';

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

// Dynamic typing effect component
const TypingEffect = ({ texts, speed = 100 }: { texts: string[], speed?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((currentTextIndex + 1) % texts.length)
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed])

  return (
    <span className="relative">
      {currentText}
      <motion.span
        className="absolute -right-1 text-blue-500 font-bold"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  )
}

// Interactive 3D avatar with mouse tracking
const Interactive3DAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x: x * 20, y: y * 20 })
  }, [])

  return (
    <motion.div
      className="relative mx-auto w-32 h-32 md:w-36 md:h-36 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      animate={{
        rotateX: mousePosition.y,
        rotateY: mousePosition.x,
        scale: isHovered ? 1.08 : 1
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Modern animated border */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-blue-500/40 shadow-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Profile image container */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-r from-primary to-blue-600 p-1 flex items-center justify-center">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg">
          <Image
            src="/Vaibhav-Chauhan.jpg"
            alt="Vaibhav Chauhan Profile"
            width={220}
            height={220}
            className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
            style={{ filter: isHovered ? 'brightness(1.1) saturate(1.2) drop-shadow(0 0 12px #3b82f6)' : 'brightness(1) saturate(1)' }}
            priority
          />
          {/* Glassmorphism overlay removed for clarity */}
        </div>
      </div>

      {/* Animated hover glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/20"
        animate={{
          scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 1],
          opacity: isHovered ? [0.25, 0.45, 0.25] : [0.12, 0.22, 0.12]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>
  )
}

export default function HeroSection() {
  const [currentStats, setCurrentStats] = useState({ projects: 0, experience: 0, clients: 0 })
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Animated counters
  useEffect(() => {
  const targets = { projects: 10, experience: 2, clients: 5 }
    const duration = 2000
    const increment = 50

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0
      const step = target / (duration / increment)
      
      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCurrentStats(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, increment)
    })
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const typingTexts = [
    "AI/ML Engineer",
    "Full-Stack Developer", 
    "Tech Innovator",
    "Problem Solver"
  ]

  return (
    <section id="home" className="min-h-screen md:min-h-[85vh] flex items-center justify-center relative py-8 md:py-0 w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Simple Content Container */}
        <div className="w-full space-y-3 md:space-y-4 pb-4 md:pb-8">
          {/* Interactive 3D Avatar - smaller on mobile */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="mb-2 md:mb-0"
          >
            <div className="scale-75 md:scale-100">
              <Interactive3DAvatar />
            </div>
          </motion.div>

          {/* Animated Greeting with Particles - simplified on mobile */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-6">
              <motion.div
                animate={{ rotate: [0, 14, -14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="text-lg md:text-2xl"
              >
                👋
              </motion.div>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
                Hello, I&apos;m
              </p>
              {/* Particles - show fewer on mobile */}
              {[...Array(isMobile ? 1 : 3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Name with 3D Effect - responsive sizing */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative leading-tight"
            >
              <span className="relative inline-block">
                <span className="text-blue-600 font-extrabold">
                  {personalInfo.name}
                </span>
                
                {/* Simple underline */}
                <motion.div
                  className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-primary to-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </span>
            </motion.h1>
          </motion.div>

          {/* Dynamic Typing Title - responsive sizing */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <div className="h-16 sm:h-20 md:h-24 lg:h-28 mb-8 md:mb-12 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative z-10 text-blue-500 text-center">
                <TypingEffect texts={typingTexts} speed={100} />
              </h2>
            </div>
          </motion.div>

          {/* Mission Statement - responsive text */}
          <motion.div
            className="max-w-2xl mx-auto px-2 md:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed border border-border/50 rounded-2xl p-4 md:p-6 bg-muted/30">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full inline-block mr-3 animate-pulse" />
              Passionate about building intelligent systems and scalable web applications. I specialize in machine learning, deep learning, and modern web technologies.
            </p>
          </motion.div>

          {/* Animated Stats Counter - responsive grid */}
          <motion.div
            className="grid grid-cols-3 gap-2 md:gap-4 max-w-xs sm:max-w-sm mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {[
              { label: 'Projects', value: currentStats.projects, suffix: '+' },
              { label: 'Years Exp', value: currentStats.experience, suffix: '+' },
              { label: 'Happy Clients', value: currentStats.clients, suffix: '+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: index * 0.2 + 2 }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons - better mobile spacing */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto max-w-xs"
            >
              <Button 
                variant="default"
                size="default"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 w-full sm:w-auto min-w-0"
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  Let&apos;s Connect
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Mail className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto max-w-xs"
            >
              <Button 
                variant="outline" 
                size="default"
                className="group px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full border-2 border-gradient bg-background hover:bg-muted/50 transition-all duration-300 w-full sm:w-auto min-w-0"
                onClick={() => window.open(personalInfo.resume, '_blank')}
              >
                <span className="flex items-center justify-center">
                  Download Resume
                  <motion.div
                    className="ml-2"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Download className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator - smaller on mobile */}
          <motion.div
            className="pt-4 md:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="group flex flex-col items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-2"
              whileHover={{ y: -2 }}
            >
              <span className="text-xs md:text-sm mb-1 md:mb-2 group-hover:text-primary transition-colors">
                Discover More
              </span>
              
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="h-5 w-5" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
