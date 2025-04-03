
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Parallax = ({ 
  children, 
  speed = 0.05,
  className = "",
  direction = 'both',
  offset = 30,
  scale = false
}) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !innerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Check if the mouse is within the container boundaries
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        // Calculate the center point of the container
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate the difference between mouse position and center
        const distanceX = (e.clientX - centerX) * speed;
        const distanceY = (e.clientY - centerY) * speed;
        
        // Apply transforms based on direction
        let transform = '';
        
        if (direction === 'both' || direction === 'x') {
          transform += `rotateY(${distanceX / 30}deg) translateX(${distanceX / 10}px) `;
        }
        
        if (direction === 'both' || direction === 'y') {
          transform += `rotateX(${-distanceY / 30}deg) translateY(${distanceY / 10}px) `;
        }
        
        transform += 'translateZ(0)';
        
        if (scale) {
          // Add subtle scale effect on hover
          transform += ' scale(1.02)';
        }
        
        // Apply the transform to create the parallax effect
        innerRef.current.style.transform = transform;
      }
    };

    const handleMouseLeave = () => {
      if (innerRef.current) {
        innerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [speed, direction, scale]);

  return (
    <div ref={containerRef} className={`parallax-container ${className}`}>
      <motion.div 
        ref={innerRef} 
        className="parallax-inner transition-transform duration-300 ease-out"
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Parallax;
