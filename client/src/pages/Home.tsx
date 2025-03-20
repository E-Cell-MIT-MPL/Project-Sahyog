import React, { useEffect, useRef, useState } from "react";
import BusinessHeader from "@/components/BusinessHeader";
import ResourceSection from "@/components/ResourceSection";
import PitchForm from "@/components/PitchForm";
import BusinessFooter from "@/components/BusinessFooter";
import { FiZap } from "react-icons/fi";

const Home: React.FC = () => {
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (formSectionRef.current) {
        const formSectionTop = formSectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (formSectionTop <= windowHeight * 0.75) {
          setShowLogoAnimation(true);
        } else {
          setShowLogoAnimation(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessHeader />
      
      <main className="max-w-4xl mx-auto px-4 pb-16 flex-grow">
        <ResourceSection />
        
        <div ref={formSectionRef} className="relative pt-16">
          {/* Animated logo that appears on scroll */}
          <div 
            ref={logoRef}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none ${
              showLogoAnimation 
                ? 'visible' 
                : 'invisible'
            }`}
          >
            <div className={`bg-[#E8D4C3] rounded-full p-10 shadow-2xl animate-float ${
              showLogoAnimation ? 'animate-popIn' : 'opacity-0 scale-0'
            }`}>
              <FiZap size={100} className="text-yellow-500 animate-pulse" />
            </div>
            <div className={`text-center mt-4 font-bold text-2xl text-white ${
              showLogoAnimation ? 'animate-fadeIn' : 'opacity-0'
            }`} style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              BUSINESS CLINIC
            </div>
          </div>
          
          <PitchForm />
        </div>
      </main>
      
      <BusinessFooter />
    </div>
  );
};

export default Home;
