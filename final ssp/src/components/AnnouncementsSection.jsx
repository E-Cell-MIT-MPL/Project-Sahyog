
import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/lib/toast";
import { motion } from 'framer-motion';
import Parallax from './Parallax';

const AnnouncementCard = ({ 
  title, 
  date, 
  description, 
  items, 
  imageSrc,
  delay = 0
}) => {
  const handleLearnMore = () => {
    toast.info(`More about: ${title}`, {
      description: "Full details are now available.",
      position: "bottom-center",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Parallax speed={0.03} direction="both">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-lg shadow-md h-full group hover:border-indigo-500/50 transition-all duration-300">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-6">
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
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">{title}</h3>
              <p className="text-xs text-zinc-500">{date}</p>
            </div>
            
            <p className="text-sm text-zinc-400 mb-6 flex-grow">{description}</p>
            
            {items && (
              <ul className="space-y-2 mb-6">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-sm text-zinc-400">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 transition-all duration-500"></div>
            
            <Button 
              onClick={handleLearnMore}
              variant="outline" 
              className="mt-auto border-zinc-700 text-white hover:bg-indigo-900/30 hover:border-indigo-600 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Parallax>
    </motion.div>
  );
};

const AnnouncementsSection = () => {
  return (
    <section id="announcements" className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black opacity-90"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Announcements
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Stay updated with the latest events, opportunities, and news.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnnouncementCard 
            title="Empowering Startup Entrepreneurs" 
            date="Posted on Sept 12, 2023" 
            description="Discover your startup journey with a wealth of resources and support from our community to help you succeed."
            imageSrc="https://images.unsplash.com/photo-1559251606-c623743a6d76?auto=format&fit=crop&w=800&q=80"
            items={[
              "Apply by Oct 15, 2023",
              "Limited to 25 spots",
              "Four-month program"
            ]}
            delay={0.1}
          />
          
          <AnnouncementCard 
            title="Funding Innovation: Matching Startups with Investors" 
            date="Posted on Aug 28, 2023" 
            description="A unique opportunity matching promising startups with investors looking for the next big innovation."
            imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
            items={[
              "Pitch by Sept 30, 2023",
              "Up to $100,000 in funding",
              "Exclusive mentorship program"
            ]}
            delay={0.2}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button 
            onClick={() => toast.success("Loading more announcements...", { position: "bottom-center" })}
            variant="outline" 
            className="border-zinc-700 text-white hover:bg-indigo-900/30 hover:border-indigo-600 transition-all duration-300"
          >
            View All Announcements
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
