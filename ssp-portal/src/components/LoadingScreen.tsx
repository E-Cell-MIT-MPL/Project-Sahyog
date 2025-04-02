
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GlobeBackground from './GlobeBackground';

interface LoadingScreenProps {
  finishLoading: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ finishLoading }) => {
  const [loadingText, setLoadingText] = useState('Loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText((text) => {
        if (text === 'Loading...') return 'Loading';
        return `${text}.`;
      });
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    const timer = setTimeout(() => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      finishLoading();
    }, 2500);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Show the globe background only on loading screen */}
      <GlobeBackground />

      <div className="z-10 flex flex-col items-center justify-center space-y-6 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 text-4xl font-bold text-white md:text-5xl flex flex-col items-center">
            <span className="font-playfair">Student Startup Portal</span>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-zinc-400"
        >
          {loadingText}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "240px" }}
          transition={{ delay: 0.5 }}
          className="h-1 w-60 overflow-hidden rounded-full bg-zinc-800"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
          ></motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs relative px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm shadow-lg"
        >
          <span className="text-zinc-300 font-medium relative z-10">E-Cell Tech Team 24/25</span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-md -z-10"></div>
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-sm opacity-50 animate-pulse-soft -z-20"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
