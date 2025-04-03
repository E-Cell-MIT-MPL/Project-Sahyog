
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';
import AnimatedGradientBorder from './ui/animated-gradient-border';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials = [
    {
      quote: "The startup portal transformed our vision into reality. Their mentorship and networking opportunities helped us secure seed funding within just 3 months of joining the program.",
      author: "Rahul Sharma",
      position: "Co-founder, TechSphere",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "From a simple idea to a fully operational business with 10+ employees in under a year. The guidance and resources provided by MAHE's innovation center were instrumental in our rapid growth.",
      author: "Priya Patel",
      position: "Founder, GreenLeaf Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "As a student entrepreneur, the ecosystem here provided everything I needed to turn my analytics concept into a profitable venture. The mentor connections and investor introductions changed everything.",
      author: "Arjun Nair",
      position: "CEO, NextGen Analytics",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4
    },
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black opacity-90"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30">
            <MessageSquare className="h-4 w-4 mr-2 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Startups Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Real experiences shared by entrepreneurs who have grown with our support and guidance
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedGradientBorder
            gradientColors="from-indigo-500/20 via-purple-500/20 to-blue-500/20"
            borderRadius="rounded-xl"
            className="p-8 bg-zinc-900/50 backdrop-blur-sm rounded-xl"
          >
            <div className="mb-8 flex justify-center">
              <div className="h-16 w-16 relative">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 flex items-center justify-center">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="relative min-h-[220px]">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : (index < currentIndex ? -100 : 100),
                    position: currentIndex === index ? "relative" : "absolute"
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-center w-full"
                  style={{ display: currentIndex === index ? 'block' : 'none', top: 0, left: 0 }}
                >
                  <p className="text-lg md:text-xl text-zinc-200 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="h-20 w-20 rounded-full overflow-hidden mb-4 border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-600'}`} 
                        />
                      ))}
                    </div>
                    <h4 className="text-white text-lg font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-indigo-400">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-12 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'w-8 bg-indigo-500' 
                        : 'w-3 bg-zinc-700 hover:bg-indigo-500/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </AnimatedGradientBorder>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
