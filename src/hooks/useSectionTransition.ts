import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useSectionTransition = (threshold = 0.3) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-100px',
    amount: threshold 
  });

  return { ref, isInView };
};

export const createStaggerChildren = (staggerDelay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.3
    }
  }
});

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};
