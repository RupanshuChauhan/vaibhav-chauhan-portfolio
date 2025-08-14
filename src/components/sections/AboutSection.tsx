'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Code, Brain, Globe, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { skills } from '@/data/portfolio'

// Enhanced highlights with more interactive features
const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Expertise',
    description: 'Deep learning, computer vision, and NLP with TensorFlow and PyTorch',
    color: 'from-purple-500 to-pink-500',
  stats: '10+ AI Models Built'
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Modern web applications with React, Next.js, and Node.js',
    color: 'from-blue-500 to-cyan-500',
    stats: '100+ Projects Delivered'
  },
  {
    icon: Globe,
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, and scalable application deployment',
    color: 'from-green-500 to-emerald-500',
    stats: '99.9% Uptime Achieved'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Building fast, responsive, and user-friendly applications',
    color: 'from-orange-500 to-red-500',
    stats: '40% Speed Improvement'
  }
]

// 3D Card Component with mouse tracking
const InteractiveCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const skillCategories = [
  { name: 'Programming', category: 'programming', color: 'from-blue-500 to-blue-700' },
  { name: 'AI/ML', category: 'ai-ml', color: 'from-purple-500 to-purple-700' },
  { name: 'Frameworks', category: 'framework', color: 'from-green-500 to-green-700' },
  { name: 'Databases', category: 'database', color: 'from-orange-500 to-orange-700' },
  { name: 'Cloud & Tools', category: 'cloud', color: 'from-pink-500 to-pink-700' },
]

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m passionate about leveraging cutting-edge technology to solve real-world problems and create meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With a strong foundation in Computer Science and Engineering from IIT, I&apos;ve developed expertise in both artificial intelligence and full-stack web development. My passion lies at the intersection of these fields, where I can build intelligent, scalable applications that make a real impact.
                </p>
                <p>
                  I&apos;ve worked on diverse projects ranging from deep learning models for computer vision to enterprise-level web applications. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new AI research papers, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <InteractiveCard className="h-full">
                  <Card className="h-full group relative overflow-hidden border-0 bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <CardHeader className="text-center relative z-10">
                      <motion.div 
                        className={`mx-auto w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      >
                        <highlight.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                        {highlight.title}
                      </CardTitle>
                      <motion.div 
                        className="text-sm font-semibold text-primary mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {highlight.stats}
                      </motion.div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-center text-muted-foreground">
                        {highlight.description}
                      </CardDescription>
                      
                      {/* Floating particles effect */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/50 rounded-full animate-bounce" />
                    </CardContent>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out" />
                  </Card>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          
          <div className="space-y-8">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(skill => 
                skill.category === category.category || 
                (category.category === 'cloud' && skill.category === 'tool')
              )
              
              if (categorySkills.length === 0) return null

              return (
                <motion.div
                  key={category.name}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-medium flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                    {category.name}
                  </h4>
                  
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          rotateX: 10,
                          rotateY: 5,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ 
                          duration: 0.3,
                          delay: skillIndex * 0.05,
                          type: 'spring',
                          stiffness: 200,
                          damping: 10
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className={`relative px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-2xl text-sm font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm overflow-hidden`}>
                          {/* Animated background particles */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping" />
                            <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
                          </div>
                          
                          {/* Skill name */}
                          <span className="relative z-10">{skill.name}</span>
                          
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out" />
                        </div>
                        
                        {/* Enhanced Skill Level Tooltip with progress bar */}
                        <motion.div 
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-lg px-3 py-2 shadow-xl border border-gray-700">
                            <div className="text-center font-medium mb-1">
                              {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)} Level
                            </div>
                            <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ 
                                  width: skill.level === 'expert' ? '100%' : 
                                         skill.level === 'advanced' ? '80%' : 
                                         skill.level === 'intermediate' ? '60%' : '40%'
                                }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                              />
                            </div>
                          </div>
                          {/* Tooltip arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
