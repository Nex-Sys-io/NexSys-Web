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
  const [theme, setTheme] = useState('dark');
  const isMobile = useIsMobile();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isMobile && (
        <Particles
          className="fixed inset-0 -z-10 animate-fade-in"
          quantity={200}
          staticity={30}
          color={theme === 'dark' ? '#ffffff' : '#000000'}
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