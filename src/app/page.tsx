'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout'
import IntroLanding from '@/components/sections/IntroLanding'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import ContactSection from '@/components/sections/ContactSection'

// Simplified section wrapper with minimal animation
const SectionWrapper = ({ 
  children, 
  className = ""
}: { 
  children: React.ReactNode, 
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Debug mode: Set to true to skip intro entirely
const DEBUG_SKIP_INTRO = false;

export default function Home() {
  const [showIntro, setShowIntro] = useState(!DEBUG_SKIP_INTRO);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Fallback: Show content after 8 seconds even if intro doesn't complete
  useEffect(() => {
    if (DEBUG_SKIP_INTRO) {
      return; // Skip timer if debug mode is on
    }

    const fallbackTimer = setTimeout(() => {
      if (showIntro) {
        console.log('Intro fallback triggered - showing main content');
        setShowIntro(false);
      }
    }, 8000);

    return () => clearTimeout(fallbackTimer);
  }, [showIntro]);

  // If debug mode, skip intro entirely
  if (DEBUG_SKIP_INTRO) {
    return (
      <Layout>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </Layout>
    );
  }

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div key="intro">
            <IntroLanding onComplete={handleIntroComplete} />
          </motion.div>
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Layout>
              <SectionWrapper>
                <HeroSection />
              </SectionWrapper>
              
              <SectionWrapper>
                <AboutSection />
              </SectionWrapper>
              
              <SectionWrapper>
                <ProjectsSection />
              </SectionWrapper>
              
              <SectionWrapper>
                <ExperienceSection />
              </SectionWrapper>
              
              <SectionWrapper>
                <CertificationsSection />
              </SectionWrapper>
              
              <SectionWrapper>
                <ContactSection />
              </SectionWrapper>
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
