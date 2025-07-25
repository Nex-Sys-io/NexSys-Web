'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CursorTrail() {
  const [points, setPoints] = useState([]);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);

  // raw vs display positions
  const rawPos = useRef({ x: 0, y: 0 });
  const displayPos = useRef({ x: 0, y: 0 });

  const pointId = useRef(0);
  const MAX_POINTS = 80;               // longer, higher-res tail
  const SMOOTHING_FACTOR = 0.75;      // slightly less lag, more responsive
  const ITERATIONS_PER_FRAME = 4;     // more sub-steps per rAF for smoothness

  // detect desktop vs touch
  useEffect(() => {
    const check = () =>
      setIsDesktop(window.matchMedia('(hover: hover)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // capture raw coords
  useEffect(() => {
    const onMouse = (e) => {
      if (isDesktop && isEnabled) {
        rawPos.current.x = e.clientX;
        rawPos.current.y = e.clientY;
      }
    };
    const onTouch = (e) => {
      const t = e.touches[0];
      rawPos.current.x = t.clientX;
      rawPos.current.y = t.clientY;
    };
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('touchmove', onTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
    };
  }, [isDesktop, isEnabled]);

  // frame loop: do multiple chase+push steps per raf
  useEffect(() => {
    let frameId;
    const loop = () => {
      if (isEnabled && isDesktop) {
        setPoints(prev => {
          let tail = prev;
          for (let i = 0; i < ITERATIONS_PER_FRAME; i++) {
            // exponential chase
            const dx = rawPos.current.x - displayPos.current.x;
            const dy = rawPos.current.y - displayPos.current.y;
            displayPos.current.x += dx * SMOOTHING_FACTOR;
            displayPos.current.y += dy * SMOOTHING_FACTOR;
            // push new display point
            tail = [
              { x: displayPos.current.x, y: displayPos.current.y, id: pointId.current++ },
              ...tail
            ];
          }
          return tail.slice(0, MAX_POINTS);
        });
      }
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [isDesktop, isEnabled]);

  // catmull-rom → bézier
  const generateSmoothPath = (pts) => {
    if (pts.length < 2) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = i > 0 ? pts[i - 1] : pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = i < pts.length - 2 ? pts[i + 2] : p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  // moving average smoothing for points
  function smoothPoints(points, windowSize = 6) {
    if (points.length < 2) return points;
    const smoothed = [];
    for (let i = 0; i < points.length; i++) {
      let sumX = 0, sumY = 0, count = 0;
      for (let j = Math.max(0, i - windowSize + 1); j <= i; j++) {
        sumX += points[j].x;
        sumY += points[j].y;
        count++;
      }
      smoothed.push({ x: sumX / count, y: sumY / count, id: points[i].id });
    }
    return smoothed;
  }

  if (!isDesktop) return null;
  const path = generateSmoothPath(smoothPoints(points));

  return (
    <>
      <AnimatePresence>
        {isEnabled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            <svg className="absolute inset-0 w-full h-full">
              {/* Neon glow */}
              <motion.path
                d={path}
                fill="none"
                stroke="hsl(220, 90%, 60%)"
                strokeWidth={8}
                strokeLinecap="round"
                className="drop-shadow-[0_0_20px_rgba(0,120,255,0.8)]"
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              />
              {/* White core */}
              <motion.path
                d={path}
                fill="none"
                stroke="#fff"
                strokeWidth={5}
                strokeLinecap="round"
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-50 bg-background-medium/80 backdrop-blur-sm border border-[hsl(220,90%,60%)]/30 rounded-lg px-4 py-2 text-[hsl(220,90%,60%)] hover:bg-[hsl(220,90%,60%)]/10 transition-colors duration-300 hidden md:flex items-center gap-2"
        onClick={() => setIsEnabled(!isEnabled)}
        aria-label={isEnabled ? "Disable cursor trail" : "Enable cursor trail"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          {isEnabled ? (
            <>
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M15 9l-6 6" />
              <path d="M9 9l6 6" />
            </>
          ) : (
            <>
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </>
          )}
        </svg>
        <span className="text-sm font-medium">
          {isEnabled ? 'Disable Trail' : 'Enable Trail'}
        </span>
      </motion.button>
    </>
  );
} 