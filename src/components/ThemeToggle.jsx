
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className={`rounded-full w-10 h-10 transition-all duration-300 relative overflow-hidden group ${
        theme === 'dark' 
          ? 'bg-black/60 border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700' 
          : 'bg-white/60 border-zinc-200 hover:bg-zinc-100/80 hover:border-zinc-300'
      }`}
      aria-label="Toggle theme"
    >
      <span className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-gradient-to-tr from-blue-500/10 to-orange-500/10'
          : 'bg-gradient-to-tr from-amber-500/10 to-orange-500/10'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
      
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-orange-400" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500" />
      )}
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
