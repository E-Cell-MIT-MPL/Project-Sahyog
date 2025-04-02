
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InnovationSection from '@/components/InnovationSection';
import StartupSection from '@/components/StartupSection';
import JourneySection from '@/components/JourneySection';
import MarketplaceSection from '@/components/MarketplaceSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import ImageSection from '@/components/ImageSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import LoadingScreen from '@/components/LoadingScreen';
import { useTheme } from '@/context/ThemeContext';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  // Finish loading handler
  const handleFinishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Preload all images
    const preloadImages = () => {
      const imageUrls = [
        '/lovable-uploads/245aef94-a0de-4d93-854f-1b54c6107be0.png',
        '/lovable-uploads/580d20e0-5521-405f-8676-7a36ac1e4377.png',
        '/lovable-uploads/ca42ba1a-3913-445f-a7a5-b8111c75a4c0.png',
        '/lovable-uploads/b9f002fc-ec6b-4ca7-86ac-305d4506f115.png',
        '/lovable-uploads/316aa141-461a-4b23-aa19-fe16ddd10651.png',
        '/lovable-uploads/0d6d957c-49ac-4dd0-ba2e-ab304d107fa0.png',
        '/lovable-uploads/0369573d-7184-4276-9e5b-05bfed486509.png',
        '/lovable-uploads/3b3265bf-e520-49e0-832e-540df1f6c8ee.png',
        '/lovable-uploads/675c8ea4-fc9e-4501-a83a-a21eec3a6ae9.png'
      ];
      
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };
    
    preloadImages();
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize ScrollReveal-like effect with Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all sections to observe
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0');
      section.classList.add('transition-opacity');
      section.classList.add('duration-700');
      observer.observe(section);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    // Style for visible elements
    const style = document.createElement('style');
    style.innerHTML = `
      .visible {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'text-zinc-900' : 'text-white'} relative`}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen finishLoading={handleFinishLoading} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Header />
          <main className="relative z-10">
            <HeroSection />
            <InnovationSection />
            <StartupSection />
            <JourneySection />
            <ImageSection />
            <MarketplaceSection />
            <AnnouncementsSection />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
};

export default Index;
