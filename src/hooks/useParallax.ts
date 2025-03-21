import { useEffect, useState, useRef } from 'react';
import { useMotionValue } from 'framer-motion';

export const useParallax = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const y = useMotionValue(0);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const updateElementTop = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    };

    updateElementTop();
    window.addEventListener('resize', updateElementTop);
    window.addEventListener('scroll', updateElementTop);

    return () => {
      window.removeEventListener('resize', updateElementTop);
      window.removeEventListener('scroll', updateElementTop);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const relativeY = scrollY - elementTop;
      y.set(relativeY * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementTop, y]);

  return [ref, y] as const;
};