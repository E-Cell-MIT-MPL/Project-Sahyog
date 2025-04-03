
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Globe, ArrowRight, BarChart4 } from 'lucide-react';
import ScrollRevealSection from './ScrollRevealSection';
import { Button } from '@/components/ui/button';
import { toast } from '@/lib/toast';

const MetricCard = ({ icon: Icon, value, label, prefix = '', suffix = '', delay = 0, countAnimation = true }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  useEffect(() => {
    if (!countAnimation) {
      setCount(numericValue);
      return;
    }
    
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.floor(numericValue * progress));
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [numericValue, countAnimation]);

  const displayValue = countAnimation 
    ? `${prefix}${count}${value.includes('+') ? '+' : ''}${suffix}`
    : `${prefix}${value}${suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="border border-indigo-500/20 rounded-lg bg-zinc-900/60 backdrop-blur-sm p-6 h-full flex flex-col items-center hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6 text-indigo-400" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-baseline">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{displayValue}</span>
        </h3>
        
        <p className="text-zinc-400 text-center">{label}</p>
      </div>
    </motion.div>
  );
};

const ImpactMetricsSection = () => {
  const handleClick = () => {
    toast.info("Join our entrepreneurial community", {
      description: "Connect with fellow innovators and access resources to grow your startup.",
      position: "bottom-center",
    });
  };

  return (
    <section id="impact" className="relative bg-zinc-950 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
            <BarChart4 className="h-4 w-4 mr-2 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-400">IMPACT METRICS</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Idea to Impact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            We measure our success by the growth and achievements of the startups we support.
          </p>
        </ScrollRevealSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            icon={TrendingUp} 
            value="8.2M" 
            prefix="$" 
            label="Total funding raised by our startups" 
            delay={1} 
          />
          <MetricCard 
            icon={Users} 
            value="500+" 
            label="Student entrepreneurs supported" 
            delay={2} 
          />
          <MetricCard 
            icon={Award} 
            value="35+" 
            label="Awards won by our startups" 
            delay={3} 
          />
          <MetricCard 
            icon={Globe} 
            value="12" 
            label="Countries with our startups' presence" 
            delay={4} 
          />
        </div>
        
        <ScrollRevealSection delay={0.5} animation="zoom-in">
          <div className="mt-16 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-blue-900/30 rounded-lg p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/5 group">
            <div className="text-center">
              <h3 className="text-2xl text-white font-semibold mb-4 group-hover:text-indigo-300 transition-colors">Ready to make your impact?</h3>
              <p className="text-zinc-300 max-w-2xl mx-auto mb-6">
                Join our thriving community of innovators and be part of the next generation of entrepreneurial success stories.
              </p>
              <Button 
                onClick={handleClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white group"
              >
                Join Our Community <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;
