import React, { useEffect, useState } from "react";
import { FiZap } from "react-icons/fi";

const BusinessHeader: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="pt-16 pb-10 text-center">
      <div className={`inline-flex items-center justify-center transition-all duration-1000 transform ${
        animationComplete ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-wide text-black relative">
          <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
            animationComplete ? 'opacity-100 scale-100 animate-float' : 'opacity-0 scale-0'
          }`}>
            <div className="relative">
              <FiZap size={60} className="text-yellow-400" />
              <div className="absolute inset-0 animate-pulse text-yellow-400 opacity-50">
                <FiZap size={60} />
              </div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${
            animationComplete ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <span className="mr-1">BUSIN</span>
            <span className="transform skew-x-12 inline-block relative -top-2">E</span>
            <span className="ml-1">SS</span>
            <br/>
            <span className="tracking-widest">CLINIC</span>
          </div>
        </h1>
      </div>
    </header>
  );
};

export default BusinessHeader;
