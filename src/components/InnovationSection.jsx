
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Parallax from './Parallax';
import { toast } from "@/lib/toast";
import { ArrowRight, Calendar, Rocket, Users, BookOpen, Lightbulb, Briefcase, Database } from 'lucide-react';

const InnovationSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleButtonClick = (option) => {
    toast.success(`Selected: ${option}`, {
      description: "Thank you for your interest. We'll be in touch soon.",
      position: "bottom-center",
    });
  };

  return (
    <section id="innovation" className="relative bg-zinc-950 py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* NIRF Ranking Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-zinc-900/60 text-zinc-400 text-sm px-4 py-1.5 rounded-full border border-zinc-800">
            NIRF Innovation Ranking 51-100 band (2023)
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Innovation Centre at MAHE</h2>
          <p className="mt-4 max-w-3xl mx-auto text-zinc-400 text-lg">
            Established in 2007 to mark MIT's Golden Jubilee, fostering innovation and entrepreneurship 
            among students, faculty, alumni, and the local community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">A Supportive Ecosystem</h3>
            <p className="text-zinc-400 mb-6">
              The Innovation Centre provides a comprehensive ecosystem that nurtures creativity
              and entrepreneurship, helping innovators transform ideas into market-ready
              solutions.
            </p>
            
            <div className="space-y-4">
              {/* Mentorship */}
              <Card className="bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Mentorship</h4>
                      <p className="text-zinc-400">Expert guidance from industry professionals and academic leaders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Funding Support */}
              <Card className="bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/10 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Funding Support</h4>
                      <p className="text-zinc-400">Access to seed funding and connections to potential investors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Infrastructure */}
              <Card className="bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500/10 p-3 rounded-full">
                      <Database className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Infrastructure</h4>
                      <p className="text-zinc-400">State-of-the-art facilities and resources for prototype development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Collaborative Ecosystem */}
              <Card className="bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/10 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Collaborative Ecosystem</h4>
                      <p className="text-zinc-400">Network with like-minded innovators, students, and faculty</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              onClick={() => handleButtonClick("Learn More")} 
              className="flex items-center mt-6 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white"
            >
              Learn More About Innovation Centre 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right Column - Tabs and Info */}
          <div className="bg-zinc-900/20 border border-zinc-800 rounded-lg p-6">
            <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-800/30">
                <TabsTrigger value="about" className={activeTab === "about" ? "text-white font-medium" : "text-zinc-400"}>
                  About
                </TabsTrigger>
                <TabsTrigger value="incubation" className={activeTab === "incubation" ? "text-white font-medium" : "text-zinc-400"}>
                  Incubation
                </TabsTrigger>
                <TabsTrigger value="connect" className={activeTab === "connect" ? "text-white font-medium" : "text-zinc-400"}>
                  Connect
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-6">
                <h3 className="text-xl font-semibold text-white">About the Innovation Centre</h3>
                <p className="text-zinc-400">
                  The Innovation Centre at MAHE is dedicated to fostering a culture of 
                  innovation and entrepreneurship. It serves as a bridge between academic 
                  research and commercial applications.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Card className="bg-zinc-800/30 border-zinc-700/30">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <Calendar className="h-6 w-6 text-zinc-400 mb-2" />
                      <div className="text-sm text-zinc-400">Established</div>
                      <div className="text-2xl font-bold text-white">2007</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-zinc-800/30 border-zinc-700/30">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <Rocket className="h-6 w-6 text-zinc-400 mb-2" />
                      <div className="text-sm text-zinc-400">Startups Incubated</div>
                      <div className="text-2xl font-bold text-white">50+</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6">
                  <img 
                    src="/lovable-uploads/580d20e0-5521-405f-8676-7a36ac1e4377.png" 
                    alt="Innovation Centre Preview" 
                    className="w-full h-auto rounded-lg border border-zinc-800 object-cover" 
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="incubation" className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Incubation Programs</h3>
                <p className="text-zinc-400">
                  Our incubation programs provide startups with resources, mentorship, and infrastructure 
                  to help transform innovative ideas into successful businesses.
                </p>
                <div className="space-y-4 mt-4">
                  <Card className="bg-zinc-800/30 border-zinc-700/30">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-white">Pre-Incubation</h4>
                      <p className="text-sm text-zinc-400">For early-stage ideas requiring validation and refinement</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-zinc-800/30 border-zinc-700/30">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-white">Incubation</h4>
                      <p className="text-sm text-zinc-400">For startups with validated ideas and prototype</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-zinc-800/30 border-zinc-700/30">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-white">Acceleration</h4>
                      <p className="text-sm text-zinc-400">For startups ready to scale and grow their business</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="connect" className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
                <p className="text-zinc-400">
                  Reach out to the Innovation Centre team to explore collaboration opportunities, 
                  mentorship programs, or to learn more about our incubation facilities.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="text-zinc-300">innovation@mahe.edu</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Users className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="text-zinc-300">+91 1234 567890</div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleButtonClick("Contact Form")} 
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 border-0"
                >
                  Get in Touch
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
