
import React from 'react';
import { toast } from "@/lib/toast";
import { motion } from 'framer-motion';
import Parallax from './Parallax';
import ScrollRevealSection from './ScrollRevealSection';

const MarketplaceItem = ({ 
  tag, 
  tagColor, 
  title, 
  imageSrc, 
  handleClick,
  delay = 0 
}) => {
  return (
    <ScrollRevealSection delay={delay * 0.2} animation="fade-up">
      <div 
        onClick={handleClick}
        className="rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-lg shadow-md group cursor-pointer transition-all duration-500 hover:translate-y-[-8px] hover:border-indigo-500/40 h-full"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex flex-col space-y-4 h-full">
            <div className="h-48 overflow-hidden rounded-lg mb-4 relative">
              <motion.img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`text-xs font-medium px-2 py-1 rounded ${tagColor}`}>{tag}</span>
            </div>
            
            <h3 className="text-base font-medium text-white group-hover:text-indigo-200 transition-colors">{title}</h3>
            
            <div className="mt-auto space-y-2">
              <div className="h-2 w-full bg-zinc-800 rounded group-hover:bg-zinc-700 transition-all duration-300"></div>
              <div className="h-2 w-3/4 bg-zinc-800 rounded group-hover:bg-zinc-700 transition-all duration-300"></div>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 rounded-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
};

const MarketplaceSection = () => {
  const handleItemClick = (title) => {
    toast.success(`Selected: ${title}`, {
      description: "Explore this marketplace opportunity further.",
      position: "bottom-center",
    });
  };

  return (
    <section id="marketplace" className="relative bg-zinc-950 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl animate-pulse-soft" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950 opacity-90"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="gradient-text-purple">Marketplace</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
              Explore resources, tools, and services for your startup journey.
            </p>
          </div>
        </ScrollRevealSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketplaceItem 
            tag="FEATURED" 
            tagColor="bg-indigo-900/60 text-indigo-300" 
            title="Business plan templates and resources for new founders" 
            imageSrc="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80"
            handleClick={() => handleItemClick("Business Plan Templates")} 
            delay={1}
          />
          
          <MarketplaceItem 
            tag="NEW" 
            tagColor="bg-purple-900/60 text-purple-300" 
            title="Pitch deck templates and presentation coaching services" 
            imageSrc="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=800&q=80"
            handleClick={() => handleItemClick("Pitch Deck Templates")} 
            delay={2}
          />
          
          <MarketplaceItem 
            tag="POPULAR" 
            tagColor="bg-cyan-900/60 text-cyan-300" 
            title="Branding resources for startups: logo design and brand strategy" 
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            handleClick={() => handleItemClick("Branding Resources")} 
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
