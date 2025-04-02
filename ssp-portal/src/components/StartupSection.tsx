
import React from 'react';
import Parallax from './Parallax';
import { toast } from "@/lib/toast";
import { ArrowRight, Sparkles, Rocket, Globe, Users, Code, Laptop, Zap, Heart, Lightbulb, TrendingUp, Target, Briefcase } from 'lucide-react';

const StartupSection = () => {
  const handleLearnMore = () => {
    toast.info("Learn more about our Student Startup Portal", {
      description: "Access resources, mentorship, and funding opportunities for student entrepreneurs.",
      position: "bottom-center",
    });
  };

  return (
    <section id="startup" className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-black to-black opacity-80"></div>
      
      {/* Enhanced accent lights with more vibrance */}
      <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-1/3 h-48 w-48 rounded-full bg-violet-600/15 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/3 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-cyan-500/15 blur-2xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="animate-fade-in-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/30">
              <Sparkles className="h-3.5 w-3.5 mr-2 text-blue-400" />
              <span className="text-xs font-medium text-blue-400">STUDENT OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-playfair">
              Student Startup Portal <span className="text-gradient">&</span> Innovation Centre
            </h2>
            <p className="mt-6 text-lg text-zinc-300">
              The Student Startup Portal aims to nurture student entrepreneurs with the guidance and support they need to transform their ideas into successful startups—all while pursuing their academic studies.
            </p>
            
            {/* Enhanced E-Cell tech team signature */}
            <div className="mt-3 flex items-center space-x-2">
              <div className="group flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 border border-blue-500/30 animate-pulse-soft hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40 hover:border-blue-500/40 transition-all duration-300">
                <Code className="h-3.5 w-3.5 mr-1.5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300">
                  Made with <Heart className="inline h-3 w-3 text-pink-400 animate-pulse" /> by the Tech Team of E-Cell 24/25
                </span>
              </div>
            </div>
            
            <button 
              onClick={handleLearnMore}
              className="mt-8 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-300"
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </button>
            
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-4 hover:bg-zinc-800/30 hover:border-zinc-700 transition-all duration-300">
                <div className="flex items-end">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="ml-1 mb-0.5 text-xs text-blue-400">↑12%</div>
                </div>
                <div className="text-sm text-zinc-500 flex items-center">
                  <Rocket className="h-3 w-3 mr-1 text-zinc-400" />
                  <span>Projects Incubated</span>
                </div>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-4 hover:bg-zinc-800/30 hover:border-zinc-700 transition-all duration-300">
                <div className="flex items-end">
                  <div className="text-2xl font-bold text-white">$2M+</div>
                  <div className="ml-1 mb-0.5 text-xs text-green-400">↑24%</div>
                </div>
                <div className="text-sm text-zinc-500 flex items-center">
                  <Globe className="h-3 w-3 mr-1 text-zinc-400" />
                  <span>Startup Funding</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-2 rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-4 hover:bg-zinc-800/30 hover:border-zinc-700 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-end">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="ml-1 mb-0.5 text-xs text-purple-400">New</div>
                    </div>
                    <div className="text-sm text-zinc-500 flex items-center">
                      <Users className="h-3 w-3 mr-1 text-zinc-400" />
                      <span>Active Mentors</span>
                    </div>
                  </div>
                  <div className="h-10 w-px bg-zinc-800 mx-2"></div>
                  <div className="text-xs text-zinc-400 leading-tight">
                    <span className="text-blue-400 font-medium">90%</span> of startups 
                    <br />receive mentorship
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Parallax className="order-1 lg:order-2" speed={0.03}>
            <div className="glass-card relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              {/* Enhanced glow effect with multiple colors */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-violet-500/10 to-transparent"></div>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-xl"></div>
              
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-bl-3xl"></div>
                
                <div className="h-48 w-full bg-zinc-900/80 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  {/* Entrepreneurship visualization with business concept imagery */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
                  
                  {/* Business concept elements */}
                  <div className="absolute grid grid-cols-3 gap-2 p-4 w-full h-full">
                    <div className="col-span-1 flex flex-col space-y-2">
                      <div className="bg-blue-500/10 h-10 rounded flex items-center justify-center">
                        <Lightbulb className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="bg-purple-500/10 h-10 rounded flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="bg-cyan-500/10 h-10 rounded flex items-center justify-center">
                        <Target className="h-5 w-5 text-cyan-400" />
                      </div>
                    </div>
                    <div className="col-span-2 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-lg border border-zinc-700/30 p-3 flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-blue-400 font-medium">Startup Roadmap</div>
                        <Briefcase className="h-3 w-3 text-blue-400" />
                      </div>
                      <div className="space-y-2 my-2">
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-1">
                          <div className="h-4 w-4 rounded-full bg-blue-500/30 flex items-center justify-center text-[8px] text-white">S</div>
                          <div className="h-4 w-4 rounded-full bg-purple-500/30 flex items-center justify-center text-[8px] text-white">E</div>
                          <div className="h-4 w-4 rounded-full bg-pink-500/30 flex items-center justify-center text-[8px] text-white">C</div>
                        </div>
                        <div className="text-[8px] text-zinc-500">Team E-Cell</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center border border-blue-500/30">
                      <div className="h-12 w-12 bg-black/50 rounded-full flex items-center justify-center">
                        <Rocket className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-medium text-blue-400">Student Startups</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gradient-to-r from-zinc-800 to-zinc-800/70 rounded"></div>
                  <div className="h-4 w-2/3 bg-gradient-to-r from-zinc-800 to-zinc-800/70 rounded"></div>
                  <div className="grid grid-cols-12 gap-2 mt-6">
                    <div className="col-span-2 h-2 bg-blue-500/20 rounded"></div>
                    <div className="col-span-3 h-2 bg-violet-500/20 rounded"></div>
                    <div className="col-span-7 h-2 bg-zinc-800 rounded"></div>
                  </div>
                </div>
                
                {/* Enhanced E-Cell tech team signature */}
                <div className="absolute bottom-3 right-3">
                  <div className="flex items-center space-x-1.5 bg-gradient-to-r from-black/50 to-transparent px-2 py-1 rounded-full">
                    <Laptop className="h-3 w-3 text-blue-400" />
                    <span className="text-xs bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-medium">E-Cell Tech 24/25</span>
                    <Zap className="h-3 w-3 text-purple-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
