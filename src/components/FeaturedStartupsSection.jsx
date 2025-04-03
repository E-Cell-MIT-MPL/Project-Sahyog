
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Calendar, Shield, Zap, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/lib/toast';
import AnimatedGradientBorder from './ui/animated-gradient-border';
import ScrollRevealSection from './ScrollRevealSection';
import EnhancedParallax from './EnhancedParallax';

const StartupCard = ({ name, logo, description, category, founderCount, foundedYear, rating, delay = 0 }) => {
  const handleClick = () => {
    toast.info(`Viewing details for ${name}`, {
      position: "bottom-center",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div 
        className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 h-full flex flex-col group hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 relative overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-900/30 to-zinc-800/30 opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            {logo ? (
              <img src={logo} alt={name} className="h-12 w-12 rounded-md" />
            ) : (
              <div className="h-12 w-12 rounded-md bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center text-xl font-bold text-white">
                {name.charAt(0)}
              </div>
            )}
            <span className="text-xs px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-full">{category}</span>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {name}
          </h3>
          
          <p className="text-sm text-zinc-400 mb-4 flex-grow">{description}</p>
          
          {/* Rating indicator */}
          {rating && (
            <div className="mb-4 flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-3.5 w-3.5 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-600'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-zinc-500">{rating}/5 innovation score</span>
            </div>
          )}
          
          <div className="flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-700/30 pt-4 mt-auto">
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1 text-zinc-400" />
              <span>{founderCount} founders</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1 text-zinc-400" />
              <span>Founded {foundedYear}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedStartupsSection = () => {
  const handleViewAll = () => {
    toast.success("Loading all startups...", {
      description: "Redirecting to the startup showcase page",
      position: "bottom-center",
    });
  };

  return (
    <section id="featured-startups" className="relative bg-zinc-900 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-900 opacity-90"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection 
          animation="fade-up"
          className="text-center mb-16"
        >
          <AnimatedGradientBorder 
            className="inline-block mb-4 px-4 py-1.5 rounded-full"
            gradientColors="from-indigo-500/20 via-purple-500/20 to-pink-500/20"
            borderRadius="rounded-full"
            borderWidth={1}
          >
            <div className="flex items-center space-x-1">
              <Trophy className="h-4 w-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-400">Featured Startups</span>
            </div>
          </AnimatedGradientBorder>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Breakthrough Innovations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Meet the promising startups emerging from our innovation ecosystem that are 
            disrupting industries and creating meaningful impact.
          </p>
        </ScrollRevealSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EnhancedParallax speed={0.04} direction="both" depth={5}>
            <StartupCard 
              name="EcoSense"
              description="Sustainable IoT sensors for environmental monitoring in urban areas, providing real-time data analytics for smarter city planning and reduced emissions."
              category="CleanTech"
              founderCount={2}
              foundedYear="2022"
              rating={4}
              delay={1}
            />
          </EnhancedParallax>
          
          <EnhancedParallax speed={0.04} direction="both" depth={5}>
            <StartupCard 
              name="MediLink"
              description="AI-powered diagnostic platform that connects patients with specialists and streamlines healthcare delivery, reducing wait times by 60%."
              category="HealthTech"
              founderCount={3}
              foundedYear="2021"
              rating={5}
              delay={2}
            />
          </EnhancedParallax>
          
          <EnhancedParallax speed={0.04} direction="both" depth={5}>
            <StartupCard 
              name="FinEdge"
              description="Blockchain solution for cross-border payments focusing on security, transparency, and low transaction fees for underserved markets worldwide."
              category="FinTech"
              founderCount={2}
              foundedYear="2022"
              rating={4.5}
              delay={3}
            />
          </EnhancedParallax>
        </div>
        
        <ScrollRevealSection 
          animation="fade-up" 
          delay={0.3} 
          className="mt-12 text-center"
        >
          <Button 
            onClick={handleViewAll}
            className="bg-indigo-600 hover:bg-indigo-700 text-white group transition-all duration-300"
          >
            View All Startups <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default FeaturedStartupsSection;
