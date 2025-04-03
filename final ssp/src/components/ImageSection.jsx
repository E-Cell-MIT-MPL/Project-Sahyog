
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Parallax from './Parallax';
import { motion } from 'framer-motion';
import ScrollRevealSection from './ScrollRevealSection';

const ImageSection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      alt: "Team collaboration in startup environment",
      caption: "Transforming innovative ideas into sustainable ventures"
    },
    {
      url: "https://images.unsplash.com/photo-1536825211030-094de935f680?auto=format&fit=crop&w=800&q=80",
      alt: "Business pitch presentation",
      caption: "Empowering student entrepreneurs to make their mark"
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      alt: "Student collaboration",
      caption: "Building tomorrow's businesses through campus collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      alt: "Successful business leader",
      caption: "From classroom projects to market-ready solutions"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollRevealSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white font-playfair mb-4">
            Entrepreneur Spotlight
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Highlighting the journey of innovators and founders transforming ideas into reality.
          </p>
        </ScrollRevealSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <ScrollRevealSection key={index} delay={index * 0.1} animation="fade-up">
              <Parallax speed={0.03} direction="both" scale={true}>
                <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden rounded-xl hover:border-indigo-500/40 transition-all duration-500 hover:translate-y-[-8px] shadow-lg shadow-zinc-900/50 hover:shadow-indigo-600/10 group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img 
                      src={image.url} 
                      alt={image.alt} 
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-5">
                      <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">{image.caption}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-zinc-300 text-sm font-medium">{image.alt}</p>
                    <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-indigo-500 to-purple-600 mt-2 rounded-full transition-all duration-500"></div>
                  </CardContent>
                </Card>
              </Parallax>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
    </section>
  );
};

export default ImageSection;
