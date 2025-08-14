'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink, Download, Eye, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  featured?: boolean;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    image: '/images/certifications/aws-solutions-architect.jpg',
    credentialId: 'AWS-SAA-2024-001',
    verificationUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
    description: 'Comprehensive certification covering AWS cloud architecture, security, and best practices for designing scalable solutions.',
    level: 'Advanced',
    featured: true
  },
  {
    id: '2',
    title: 'Google Cloud Professional ML Engineer',
    issuer: 'Google Cloud',
    date: 'November 2024',
    image: '/images/certifications/gcp-ml-engineer.jpg',
    credentialId: 'GCP-MLE-2024-002',
    verificationUrl: 'https://cloud.google.com/certification',
    skills: ['Machine Learning', 'TensorFlow', 'BigQuery', 'Vertex AI'],
    description: 'Professional-level certification in machine learning engineering on Google Cloud Platform.',
    level: 'Expert',
    featured: true
  },
  {
    id: '3',
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'October 2024',
    image: '/images/certifications/azure-ai-fundamentals.jpg',
    credentialId: 'MS-AI-900-2024',
    verificationUrl: 'https://docs.microsoft.com/learn/certifications',
    skills: ['Azure AI', 'Cognitive Services', 'Bot Framework', 'ML Studio'],
    description: 'Foundational knowledge of AI and machine learning concepts on Microsoft Azure platform.',
    level: 'Intermediate'
  },
  {
    id: '4',
    title: 'Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'September 2024',
    image: '/images/certifications/cka-kubernetes.jpg',
    credentialId: 'CKA-2024-004',
    verificationUrl: 'https://training.linuxfoundation.org/certification/verify',
    skills: ['Kubernetes', 'Docker', 'Container Orchestration', 'DevOps'],
    description: 'Hands-on certification for Kubernetes cluster administration and management.',
    level: 'Advanced'
  },
  {
    id: '5',
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow',
    date: 'August 2024',
    image: '/images/certifications/tensorflow-developer.jpg',
    credentialId: 'TF-DEV-2024-005',
    verificationUrl: 'https://www.tensorflow.org/certificate',
    skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Python'],
    description: 'Professional certification demonstrating proficiency in TensorFlow for machine learning applications.',
    level: 'Advanced',
    featured: true
  },
  {
    id: '6',
    title: 'React Advanced Patterns',
    issuer: 'Meta (Facebook)',
    date: 'July 2024',
    image: '/images/certifications/react-advanced.jpg',
    credentialId: 'META-REACT-2024',
    verificationUrl: 'https://developers.facebook.com/certification',
    skills: ['React', 'JavaScript', 'Frontend Development', 'State Management'],
    description: 'Advanced React patterns, performance optimization, and modern frontend development practices.',
    level: 'Expert'
  }
];

const levelColors = {
  Beginner: 'from-green-400 to-green-600',
  Intermediate: 'from-blue-400 to-blue-600',
  Advanced: 'from-purple-400 to-purple-600',
  Expert: 'from-red-400 to-red-600'
};

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const currentCert = certifications[currentIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextCertification = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCertification = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const goToCertification = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    setAutoPlay(!isZoomed); // Stop autoplay when zoomed
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-cyan-900/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications demonstrating expertise across cloud platforms, 
            AI/ML technologies, and modern development frameworks
          </p>
        </motion.div>

        {/* Main Certification Display */}
        <div className="relative">
          <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Certificate Image with Zoom */}
              <motion.div
                className="relative group cursor-pointer"
                onClick={toggleZoom}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isZoomed ? 1.1 : 1, 
                      rotateY: 0,
                      z: isZoomed ? 50 : 0
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl transform-gpu perspective-1000 ${
                      isZoomed ? 'fixed inset-4 z-50 bg-black/90 flex items-center justify-center' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Certificate Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                      {/* Certificate Design */}
                      <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 p-8 relative">
                        {/* Certificate Border */}
                        <div className="absolute inset-4 border-4 border-gradient-to-r from-blue-400 to-cyan-400 rounded-lg"></div>
                        <div className="absolute inset-6 border-2 border-gold-400 rounded-lg"></div>
                        
                        {/* Certificate Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between text-center">
                          <div>
                            <div className="text-2xl font-bold text-gray-800 mb-2">
                              Certificate of Achievement
                            </div>
                            <div className="text-lg text-gray-600 mb-4">This certifies that</div>
                            <div className="text-3xl font-bold text-blue-700 mb-4">
                              Vaibhav Chauhan
                            </div>
                            <div className="text-lg text-gray-600 mb-2">has successfully completed</div>
                            <div className="text-2xl font-bold text-gray-800 mb-4">
                              {currentCert.title}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-sm text-gray-600 mb-1">Issued by</div>
                              <div className="text-lg font-semibold text-gray-800">
                                {currentCert.issuer}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600 mb-1">Date</div>
                              <div className="text-lg font-semibold text-gray-800">
                                {currentCert.date}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        {currentCert.featured && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-semibold">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <Eye className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {!isZoomed && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevCertification();
                      }}
                      title="Previous certification"
                      aria-label="Previous certification"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextCertification();
                      }}
                      title="Next certification"
                      aria-label="Next certification"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </motion.div>

              {/* Certificate Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Title and Level */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{currentCert.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${levelColors[currentCert.level]}`}>
                        {currentCert.level}
                      </span>
                    </div>
                    <p className="text-lg text-purple-300 font-medium">{currentCert.issuer}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{currentCert.description}</p>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">SKILLS COVERED</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCert.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">{currentCert.date}</span>
                    </div>
                    {currentCert.credentialId && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 text-sm">{currentCert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {currentCert.verificationUrl && (
                      <motion.a
                        href={currentCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>
        </div>

        {/* Certification Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {certifications.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToCertification(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-400 shadow-lg shadow-purple-400/50'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={() => setAutoPlay(!autoPlay)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              autoPlay
                ? 'bg-purple-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {autoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
          </motion.button>
        </div>

        {/* Close Zoom Overlay */}
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleZoom}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 cursor-pointer"
          />
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
