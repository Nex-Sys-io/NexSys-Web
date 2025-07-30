"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { Particles } from '../components/particles';

const ThemeContext = createContext();

// utility hook to detect mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.matchMedia('(max-width: 767px)').matches);
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export function ThemeProvider({ children }) {
  const isMobile = useIsMobile();

  useEffect(() => {
    // always set dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {isMobile && (
        <Particles
          className="fixed inset-0 -z-10 animate-fade-in"
          quantity={200}
          staticity={30}
          color="#ffffff"
          ease={100}
        />
      )}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 