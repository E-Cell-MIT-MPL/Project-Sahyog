
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const animations = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-left': {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  'fade-right': {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  'zoom-out': {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 }
  }
};

const ScrollRevealSection = ({ 
  children, 
  animation = 'fade-up',
  delay = 0, 
  duration = 0.6,
  className = '',
  once = true,
  threshold = 0.1
}) => {
  const variant = animations[animation] || animations['fade-up'];
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={variant}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealSection;
