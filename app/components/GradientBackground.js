"use client";
import { useEffect, useState } from 'react';

export default function GradientBackground() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show gradients on laptop and ultrawide screens (768px and above)
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 -z-10">
      {/* Home section gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #0077ff 100%)",
          height: "100vh",
          zIndex: 1
        }}
      />
      
      {/* About section gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #000 40%, #0077ff 100%)",
          top: "100vh",
          height: "100vh",
          zIndex: 2
        }}
      />
      
      {/* Projects section gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #0077ff 100%)",
          top: "200vh",
          height: "100vh",
          zIndex: 3
        }}
      />
      
      {/* Contact section gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #000 40%, #0077ff 100%)",
          top: "300vh",
          height: "100vh",
          zIndex: 4
        }}
      />
    </div>
  );
} 