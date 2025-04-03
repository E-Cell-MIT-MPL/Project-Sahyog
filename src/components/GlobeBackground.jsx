
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

const GlobeBackground = ({ className = "" }) => {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Make sure VANTA is available
    if (typeof window.VANTA === 'undefined') {
      console.error('VANTA is not defined, check that the script is loaded properly');
      return;
    }
    
    // Initialize Vanta globe effect with orange color scheme
    const vantaEffect = window.VANTA.GLOBE({
      el: containerRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      scale: 1.30,
      scaleMobile: 1.10,
      color: 0xF97316,             // Bright orange
      color2: 0xFEC6A1,            // Soft orange
      size: 1.80,                  
      points: 20.00,               
      maxDistance: 40.00,          
      spacing: 15.00,              
      showDots: true,              
      speed: 1.2,                  
      backgroundColor: theme === 'dark' ? 0x111827 : 0xF8FAFC    // Theme-based background
    });
    
    // Handle window resize
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);
  
  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default GlobeBackground;
