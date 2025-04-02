
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Parallax from './Parallax';
import { toast } from "@/lib/toast";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    toast.success("Getting started with your entrepreneurial journey!", {
      description: "Your journey to success begins now.",
      position: "bottom-center",
    });
  };

  const handleLearnMore = () => {
    toast.info("Learn more about our platform", {
      description: "Discover resources, mentorship, and funding opportunities.",
      position: "bottom-center",
    });
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-black min-h-screen flex items-center pt-20 pb-16">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-900/30 via-black/70 to-black"></div>
      
      {/* Animated particles/gradient background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-pulse-soft" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-left"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <motion.span 
                className="block font-playfair"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Empowering
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Entrepreneurs
              </motion.span>
            </h1>
            <motion.p 
              className="mt-6 max-w-xl text-lg text-zinc-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Connect, collaborate, and grow your startup with resources, mentorship, and a community of like-minded innovators.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all duration-300 text-sm px-6 py-6 rounded-md shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={handleLearnMore}
                variant="outline" 
                className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800/50 hover:border-indigo-500 transition-all duration-300 text-sm px-6 py-6 rounded-md"
              >
                View Marketplace
              </Button>
            </motion.div>
            <motion.div 
              className="mt-12 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex -space-x-2">
                {['S', 'E', 'M', 'H'].map((letter, index) => (
                  <motion.div 
                    key={index} 
                    className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold"
                    style={{zIndex: 10 - index}}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-zinc-500">50+ startups already registered</p>
            </motion.div>
          </motion.div>
          
          <Parallax className="hidden lg:block" speed={0.04} direction="both" scale={true}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative overflow-hidden rounded-xl shadow-2xl max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 mix-blend-overlay"></div>
              <div ref={imageRef} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                  alt="Student Startup Portal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </Parallax>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-zinc-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown className="h-6 w-6 text-zinc-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
