
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Rocket } from 'lucide-react';
import { toast } from "@/lib/toast";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Startup', href: '#startup' },
    { name: 'Journey', href: '#journey' },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Announcements', href: '#announcements' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'bg-black/80 border-zinc-800 py-2' : 'bg-transparent border-transparent py-4'
    } ${mobileMenuOpen ? 'bg-black/90' : ''}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          {/* Logo */}
          <a href="#" aria-label="Home" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center p-2">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">Student Startup Portal</span>
          </a>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-6"
        >
          {navItems.map((item, index) => (
            <motion.a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.nav>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <ThemeToggle />
          
          <Button 
            className="hidden md:flex rounded-md border border-zinc-800 bg-black px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 hover:border-zinc-700 transition duration-300 ease-in-out"
            onClick={() => toast.success("Sign In feature coming soon!")}
          >
            Sign In
          </Button>
          
          <Button 
            className="hidden md:flex rounded-md bg-gradient-to-r from-blue-600 to-orange-500 px-5 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-700 hover:to-orange-600 transition duration-300 ease-in-out"
            onClick={() => toast.success("Register feature coming soon!")}
          >
            Register
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pt-2 pb-4 bg-black/90 border-b border-zinc-800"
          >
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-sm font-medium py-2 text-zinc-400 transition hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col space-y-2">
                <Button 
                  className="w-full justify-center rounded-md border border-zinc-800 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 hover:border-zinc-700 transition duration-300 ease-in-out"
                  onClick={() => toast.success("Sign In feature coming soon!")}
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full justify-center rounded-md bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-700 hover:to-orange-600 transition duration-300 ease-in-out"
                  onClick={() => toast.success("Register feature coming soon!")}
                >
                  Register
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
