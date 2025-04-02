
import React from 'react';
import { toast } from "@/lib/toast";
import { motion } from 'framer-motion';
import Parallax from './Parallax';
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";

interface MarketplaceItemProps {
  tag: string;
  tagColor: string;
  title: string;
  imageSrc: string;
  handleClick: () => void;
  delay?: number;
}

const MarketplaceItem: React.FC<MarketplaceItemProps> = ({ 
  tag, 
  tagColor, 
  title, 
  imageSrc, 
  handleClick,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Parallax speed={0.05} direction="both" scale={true}>
        <div 
          onClick={handleClick}
          className="glass-card group cursor-pointer transition-all duration-500 hover:translate-y-[-12px] h-full"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex flex-col space-y-4 h-full">
              <div className="h-48 overflow-hidden rounded-lg mb-4 relative">
                <motion.img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
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
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-4 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </motion.div>
  );
};

const MarketplaceSection = () => {
  const handleItemClick = (title: string) => {
    toast.success(`Selected: ${title}`, {
      description: "Explore this marketplace opportunity further.",
      position: "bottom-center",
    });
  };

  return (
    <section id="marketplace" className="relative bg-zinc-950 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950 opacity-90"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Marketplace</h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Explore resources, tools, and services for your startup journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MarketplaceItem 
            tag="FEATURED" 
            tagColor="bg-indigo-900/60 text-indigo-400" 
            title="Business plan templates and resources for new founders" 
            imageSrc="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80"
            handleClick={() => handleItemClick("Business Plan Templates")} 
            delay={0.1}
          />
          
          <MarketplaceItem 
            tag="NEW" 
            tagColor="bg-purple-900/60 text-purple-400" 
            title="Pitch deck templates and presentation coaching services" 
            imageSrc="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=800&q=80"
            handleClick={() => handleItemClick("Pitch Deck Templates")} 
            delay={0.2}
          />
          
          <MarketplaceItem 
            tag="POPULAR" 
            tagColor="bg-violet-900/60 text-violet-400" 
            title="Branding resources for startups: logo design and brand strategy" 
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            handleClick={() => handleItemClick("Branding Resources")} 
            delay={0.3}
          />
        </div>
      </div>
      
      {/* Animated particles effect */}
      <div className="absolute left-0 right-0 bottom-0 h-40 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
