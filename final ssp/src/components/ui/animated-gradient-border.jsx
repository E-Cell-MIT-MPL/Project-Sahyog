
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBorder = ({ 
  children, 
  className = "", 
  borderWidth = 2,
  gradientColors = "from-blue-400 via-purple-500 to-pink-400",
  animationDuration = 8,
  borderRadius = "rounded-xl",
  glowEffect = true
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Enhanced animated gradient border with glow effect */}
      <motion.div
        className={`absolute -inset-${borderWidth/2} ${borderRadius} bg-gradient-to-r ${gradientColors} opacity-80 ${glowEffect ? 'blur-sm' : ''} -z-10`}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: animationDuration,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: '300% 300%',
        }}
      />
      
      {/* Content */}
      <div className={`relative ${borderRadius} overflow-hidden h-full`}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedGradientBorder;
