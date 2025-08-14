'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
// import Image from 'next/image'; // Uncomment when you add your profile image

interface IntroLandingProps {
  onComplete: () => void;
}

const IntroLanding = ({ onComplete }: IntroLandingProps) => {
  const [showImage, setShowImage] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Show image first
      setTimeout(() => setShowImage(true), 500);
      // Show greeting text
      setTimeout(() => setShowGreeting(true), 1500);
      // Show name with beautiful animation
      setTimeout(() => setShowName(true), 2500);
      // Show scroll hint
      setTimeout(() => setShowScrollHint(true), 3500);
    };

    sequence();

    // Handle scroll to transition to main content
    const handleScroll = () => {
      if (window.scrollY > 100 && !isScrolling) {
        setIsScrolling(true);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onComplete, isScrolling]);

  const scrollToMain = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Profile Image */}
        <AnimatePresence>
          {showImage && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
              className="mb-8"
            >
              <motion.div
                className="relative w-48 h-48 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                      {/* Placeholder for actual profile image */}
                      <div className="w-full h-full flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        VC
                      </div>
                      {/* Replace with actual image when available */}
                      {/* <Image
                        src="/images/profile.jpg"
                        alt="Vaibhav Chauhan"
                        fill
                        className="object-cover"
                        priority
                      /> */}
                    </div>
                  </div>
                </motion.div>

                {/* Floating particles around image */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"
                  animate={{ 
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full"
                  animate={{ 
                    y: [10, -10, 10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-500 rounded-full"
                  animate={{ 
                    x: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Greeting Text */}
        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <motion.h1 
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I am
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name with Beautiful Animation */}
        <AnimatePresence>
          {showName && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h2 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 0.2,
                  duration: 1.2, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 15
                }}
              >
                {"Vaibhav Chauhan".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Subtitle with typing effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="mt-4"
              >
                <motion.p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
                  {"AI/ML Engineer & Full-Stack Developer".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 2.5 + index * 0.05,
                        duration: 0.1
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Hint */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12"
            >
              <motion.button
                onClick={scrollToMain}
                className="group flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.p 
                  className="text-sm mb-2 font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Scroll to explore
                </motion.p>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-blue-500 transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: showScrollHint ? 1 : 0 }}
        transition={{ duration: 2, delay: 1 }}
        style={{ 
          width: '100%',
          transformOrigin: 'left'
        }}
      />
    </motion.section>
  );
};

export default IntroLanding;
