import React, { useEffect, useRef, useState } from "react";
import BusinessHeader from "@/components/BusinessHeader";
import ResourceSection from "@/components/ResourceSection";
import PitchForm from "@/components/PitchForm";
import BusinessFooter from "@/components/BusinessFooter";

const Home: React.FC = () => {
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);
  
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
          <PitchForm showLogoAnimation={showLogoAnimation} />
        </div>
      </main>
      
      <BusinessFooter />
    </div>
  );
};

export default Home;
