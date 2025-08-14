"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface IntroLandingProps {
  onComplete: () => void;
}

const IntroLanding: React.FC<IntroLandingProps> = ({ onComplete }) => {
  const [showImage, setShowImage] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 300);
    setTimeout(() => setShowGreeting(true), 900);
    setTimeout(() => setShowName(true), 1700);
    setTimeout(() => setShowScrollHint(true), 2700);
  }, []);

  const scrollToMain = () => {
    if (onComplete) onComplete();
    const mainSection = document.getElementById("main-content");
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl mx-auto px-4 py-12 md:py-24 text-center relative">
        {/* Profile Image */}
        <AnimatePresence>
          {showImage && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
              className="mb-16" // Increased margin-bottom for more spacing
            >
              <motion.div
                className="relative w-40 h-40 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Vaibhav-Chauhan.jpg"
                  alt="Vaibhav Chauhan"
                  width={208}
                  height={208}
                  className="object-cover rounded-full transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
                  priority
                />
                {/* Floating particles around image */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"
                  animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full"
                  animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-500 rounded-full"
                  animate={{ x: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
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
                transition={{ delay: 0.2, duration: 1.2, type: "spring", stiffness: 100, damping: 15 }}
              >
                {"Vaibhav Chauhan".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring", stiffness: 200 }}
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
                      transition={{ delay: 2.5 + index * 0.05, duration: 0.1 }}
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
        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: showScrollHint ? 1 : 0 }}
          transition={{ duration: 2, delay: 1 }}
          style={{ width: '100%', transformOrigin: 'left' }}
        />
      </div>
    </motion.section>
  );
};

export default IntroLanding;
