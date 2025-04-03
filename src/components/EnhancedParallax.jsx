
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedParallax = ({ 
  children, 
  speed = 0.08, 
  direction = 'vertical', // 'vertical', 'horizontal', 'both'
  scale = false,
  depth = 10,
  className = '',
}) => {
  const ref = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center (normalized from -1 to 1)
      const distanceX = (e.clientX - centerX) / (window.innerWidth / 2);
      const distanceY = (e.clientY - centerY) / (window.innerHeight / 2);
      
      // Apply movement based on direction
      const x = direction === 'horizontal' || direction === 'both' ? distanceX * depth : 0;
      const y = direction === 'vertical' || direction === 'both' ? distanceY * depth : 0;
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [direction, depth]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: scale ? 1 - Math.abs(position.x + position.y) * speed * 0.05 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
          mass: 1
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default EnhancedParallax;
