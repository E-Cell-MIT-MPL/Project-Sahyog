
import React from 'react';
import { ArrowRight, Lightbulb, Rocket, Users, Globe, PiggyBank } from 'lucide-react';
import { toast } from "@/lib/toast";
import Parallax from './Parallax';

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
    <div className="glass-card hover:translate-y-[-8px] transition-all duration-300">
      <div className="p-6 space-y-4">
        <div className={`inline-flex items-center justify-center p-3 rounded-lg ${iconBg}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        
        <h3 className="text-xl font-bold text-white">{title}</h3>
        
        <p className="text-zinc-400 text-sm">{description}</p>
        
        <button 
          onClick={handleClick}
          className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 group"
        >
          {linkText} <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const JourneySection = () => {
  return (
    <section id="journey" className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-80"></div>
      
      {/* Enhanced accent lights */}
      <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/3 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-playfair mb-4">
            Start Your Entrepreneurial Journey
          </h2>
          <p className="text-zinc-400">
            Whether you're just starting out or looking to scale, we have the resources and support you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={Lightbulb} 
              title="Turn an idea into a viable product" 
              description="Learn how to validate your ideas and create minimum viable products."
              linkText="Explore Ideation" 
              linkUrl="#" 
              iconBg="bg-cyan-500/20"
              iconColor="text-cyan-400"
            />
          </Parallax>
          
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={Rocket} 
              title="Get mentorship and guidance on your venture" 
              description="Connect with experienced entrepreneurs and industry experts."
              linkText="Find Mentors" 
              linkUrl="#" 
              iconBg="bg-pink-500/20"
              iconColor="text-pink-400"
            />
          </Parallax>
          
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={PiggyBank} 
              title="Secure funding for your startup" 
              description="Explore various funding options and pitch to potential investors."
              linkText="Funding Options" 
              linkUrl="#" 
              iconBg="bg-amber-500/20"
              iconColor="text-amber-400"
            />
          </Parallax>
          
          <Parallax speed={0.02}>
            <JourneyCard 
              icon={Globe} 
              title="Network with like-minded entrepreneurs" 
              description="Join our community events and expand your professional network."
              linkText="Community Events" 
              linkUrl="#" 
              iconBg="bg-blue-500/20"
              iconColor="text-blue-400"
            />
          </Parallax>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="glass-card p-4 min-w-[180px]">
            <div className="flex items-end">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="ml-1 mb-0.5 text-xs text-blue-400">↑12%</div>
            </div>
            <div className="text-sm text-zinc-500 flex items-center">
              <Rocket className="h-3 w-3 mr-1 text-zinc-400" />
              <span>Projects Incubated</span>
            </div>
          </div>
          
          <div className="glass-card p-4 min-w-[180px]">
            <div className="flex items-end">
              <div className="text-2xl font-bold text-white">$2M+</div>
              <div className="ml-1 mb-0.5 text-xs text-green-400">↑24%</div>
            </div>
            <div className="text-sm text-zinc-500 flex items-center">
              <Globe className="h-3 w-3 mr-1 text-zinc-400" />
              <span>Startup Funding</span>
            </div>
          </div>
          
          <div className="glass-card p-4 min-w-[180px]">
            <div className="flex items-end">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="ml-1 mb-0.5 text-xs text-purple-400">New</div>
            </div>
            <div className="text-sm text-zinc-500 flex items-center">
              <Users className="h-3 w-3 mr-1 text-zinc-400" />
              <span>Active Mentors</span>
            </div>
          </div>
          
          <div className="glass-card p-4 min-w-[220px]">
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-400 leading-tight">
                <span className="text-blue-400 font-medium">90%</span> of startups 
                <br />receive mentorship
              </div>
              <div className="h-10 w-px bg-zinc-800 mx-2"></div>
              <div className="text-xl font-bold text-white">90%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
