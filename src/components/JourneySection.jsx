
import React from 'react';
import { ArrowRight, Lightbulb, Rocket, Users, Globe, PiggyBank, BookOpen, Target, Shield } from 'lucide-react';
import { toast } from "@/lib/toast";
import Parallax from './Parallax';
import { Button } from '@/components/ui/button';

const JourneyCard = ({ 
  icon: Icon, 
  title, 
  description, 
  linkText, 
  linkUrl, 
  accent = "blue",
  iconBg = "bg-blue-500/20",
  iconColor = "text-blue-400"
}) => {
  const handleClick = () => {
    toast.info(`Navigating to ${title}`, {
      description: "Opening resource page",
      position: "bottom-center",
    });
  };

  return (
    <div className="glass-card group hover:-translate-y-2 transition-all duration-300 border border-zinc-800 hover:border-indigo-500/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-6 space-y-4 relative z-10">
        <div className={`inline-flex items-center justify-center p-3 rounded-lg ${iconBg} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{title}</h3>
        
        <p className="text-zinc-400 text-sm">{description}</p>
        
        <button 
          onClick={handleClick}
          className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 group cursor-pointer"
        >
          {linkText} <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const StatCard = ({ value, trend, label, icon: Icon }) => {
  return (
    <div className="glass-card p-4 min-w-[180px] hover:border-indigo-500/30 transition-colors group">
      <div className="flex items-end">
        <div className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{value}</div>
        {trend && (
          <div className={`ml-1 mb-0.5 text-xs ${
            trend.startsWith('↑') ? 'text-green-400' : 
            trend === 'New' ? 'text-purple-400' : 'text-blue-400'
          }`}>{trend}</div>
        )}
      </div>
      <div className="text-sm text-zinc-500 flex items-center">
        <Icon className="h-3 w-3 mr-1 text-zinc-400" />
        <span>{label}</span>
      </div>
    </div>
  );
};

const JourneySection = () => {
  const handleExploreClick = () => {
    toast.success("Let's start your journey!", {
      description: "Exploring entrepreneurial resources",
      position: "bottom-center",
    });
  };

  return (
    <section id="journey" className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-80"></div>
      
      {/* Enhanced accent lights */}
      <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-blue-600/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 h-48 w-48 rounded-full bg-violet-600/5 blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30">
            <Target className="h-4 w-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">YOUR JOURNEY WITH US</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Start Your Entrepreneurial Journey
          </h2>
          <p className="text-zinc-400 text-lg">
            We'll help you navigate every stage of building a successful startup, from ideation to growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={Lightbulb} 
              title="Idea Validation" 
              description="Test and validate your concept with our proven methodologies and market research tools."
              linkText="Explore Ideation" 
              linkUrl="#" 
              iconBg="bg-cyan-500/20"
              iconColor="text-cyan-400"
            />
          </Parallax>
          
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={BookOpen} 
              title="Expert Mentorship" 
              description="Connect with entrepreneurs and industry leaders who've built successful companies."
              linkText="Meet Mentors" 
              linkUrl="#" 
              iconBg="bg-pink-500/20"
              iconColor="text-pink-400"
            />
          </Parallax>
          
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={PiggyBank} 
              title="Funding Access" 
              description="Get connected to angel investors, VCs, and grant opportunities tailored to your stage."
              linkText="Funding Options" 
              linkUrl="#" 
              iconBg="bg-amber-500/20"
              iconColor="text-amber-400"
            />
          </Parallax>
          
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={Shield} 
              title="Startup Resources" 
              description="Access legal templates, software credits, workspace, and essential tools for growth."
              linkText="View Resources" 
              linkUrl="#" 
              iconBg="bg-blue-500/20"
              iconColor="text-blue-400"
            />
          </Parallax>
        </div>
        
        <div className="mt-20 flex flex-col items-center">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">Our Impact in Numbers</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            <StatCard 
              value="200+" 
              trend="↑12%" 
              label="Projects Incubated" 
              icon={Rocket} 
            />
            
            <StatCard 
              value="$2.5M+" 
              trend="↑24%" 
              label="Startup Funding" 
              icon={Globe} 
            />
            
            <StatCard 
              value="65+" 
              trend="New" 
              label="Active Mentors" 
              icon={Users} 
            />
            
            <div className="glass-card p-4 min-w-[220px] group hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-400 leading-tight">
                  <span className="text-blue-400 font-medium">93%</span> of startups 
                  <br />receive specialized mentorship
                </div>
                <div className="h-10 w-px bg-zinc-800 mx-2 group-hover:bg-indigo-500/30 transition-colors"></div>
                <div className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">93%</div>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleExploreClick}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group px-8"
          >
            <span>Explore Our Programs</span> <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
