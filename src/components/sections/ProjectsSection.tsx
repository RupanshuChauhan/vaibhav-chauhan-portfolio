'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { ExternalLink, Github, Calendar, Star, TrendingUp, Code, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/portfolio'

const categories = [
  { value: 'all', label: 'All Projects', icon: Code, color: 'from-slate-500 to-slate-600' },
  { value: 'ai-ml', label: 'AI/ML', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
  { value: 'web-dev', label: 'Web Development', icon: Eye, color: 'from-blue-500 to-cyan-500' },
  { value: 'full-stack', label: 'Full Stack', icon: Star, color: 'from-green-500 to-emerald-500' },
  { value: 'mobile', label: 'Mobile', icon: ExternalLink, color: 'from-orange-500 to-red-500' },
]

// 3D Project Card Component
const ProjectCard3D = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [10, -10])
  const rotateY = useTransform(x, [-50, 50], [-10, 10])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((event.clientX - centerX) / 10)
    y.set((event.clientY - centerY) / 10)
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

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
    <section id="projects" className="py-20">
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
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI/ML and full-stack development.
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.value}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  selectedCategory === category.value 
                    ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-lg` 
                    : 'hover:shadow-md'
                }`}
              >
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </motion.div>
                
                {/* Animated background for non-selected buttons */}
                {selectedCategory !== category.value && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                )}
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
              <ProjectCard3D className="h-full">
                <Card className="h-full group relative overflow-hidden border-0 bg-gradient-to-br from-slate-50/80 to-slate-100/80 dark:from-slate-900/80 dark:to-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  {/* Enhanced Project Image */}
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 flex items-center justify-center">
                      <motion.div 
                        className="text-7xl opacity-30"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      >
                        🚀
                      </motion.div>
                    </div>
                    
                    {/* Animated grid background */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer" />
                    </div>
                    
                    {project.featured && (
                      <motion.div 
                        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        ⭐ Featured
                      </motion.div>
                    )}
                    
                    {/* Hover overlay with enhanced effects */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ backgroundImage: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))' }}
                    />
                    
                    {/* Floating action buttons on hover */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.button
                        className="p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                      </motion.button>
                    </motion.div>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                          <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {project.title}
                          </CardTitle>
                        </motion.div>
                        <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10">
                    {/* Enhanced Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-300 dark:border-slate-600 hover:shadow-md transition-all duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                          }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <motion.span
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          +{project.technologies.length - 4} more
                        </motion.span>
                      )}
                    </div>
                    {/* Enhanced Project Date */}
                    <motion.div 
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(project.startDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                      {project.endDate && (
                        <> - {new Date(project.endDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}</>
                      )}
                    </motion.div>

                    {/* Enhanced Action Buttons */}
                    <motion.div 
                      className="flex gap-3 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.liveUrl && (
                        <motion.div 
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full group relative overflow-hidden border-2 hover:border-blue-500 transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.liveUrl, '_blank')
                            }}
                          >
                            <motion.div className="flex items-center justify-center">
                              <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                              Live Demo
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl && (
                        <motion.div 
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full group relative overflow-hidden border-2 hover:border-purple-500 transition-all duration-300"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.githubUrl, '_blank')
                            }}
                          >
                            <motion.div className="flex items-center justify-center">
                              <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                              Code
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </CardContent>
                  
                  {/* Overall card glow effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
                </Card>
              </ProjectCard3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                // This could link to a dedicated projects page
                console.log('Navigate to all projects page')
              }}
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
