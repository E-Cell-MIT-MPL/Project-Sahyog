
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/lib/toast";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage or default to dark
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Apply theme class to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light-mode');
      
      // Add meta theme-color for browser UI
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#000000');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'theme-color';
        meta.content = '#000000';
        document.head.appendChild(meta);
      }
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light-mode');
      
      // Update meta theme-color for browser UI
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#ffffff');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'theme-color';
        meta.content = '#ffffff';
        document.head.appendChild(meta);
      }
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    toast.success(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated!`);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
