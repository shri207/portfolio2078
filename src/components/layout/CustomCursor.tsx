import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'button' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view') setCursorVariant('project');
        else if (type === 'click') setCursorVariant('button');
        else if (type === 'text') setCursorVariant('text');
      } else if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setCursorVariant('button');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants: Variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      width: 10,
      height: 10,
      backgroundColor: '#FFE500',
      border: '1px solid #000000',
      borderRadius: '2px',
      transition: { type: 'spring', mass: 0.1, stiffness: 800, damping: 30 }
    },
    button: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      width: 36,
      height: 36,
      backgroundColor: 'rgba(255, 229, 0, 0.18)',
      border: '2px solid #FFE500',
      borderRadius: '4px',
      transition: { type: 'spring', mass: 0.15, stiffness: 600, damping: 28 }
    },
    project: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      width: 72,
      height: 72,
      backgroundColor: '#FFE500',
      border: '2px solid #000000',
      borderRadius: '6px',
      transition: { type: 'spring', mass: 0.2, stiffness: 500, damping: 25 }
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      backgroundColor: 'rgba(184, 161, 255, 0.2)',
      border: '1px solid #B8A1FF',
      borderRadius: '3px',
      transition: { type: 'spring', mass: 0.1, stiffness: 700, damping: 30 }
    }
  };

  return (
    <>
      {/* Outer Follower Box */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-pixel text-[10px] font-bold tracking-wider text-black mix-blend-difference select-none"
        variants={variants}
        animate={cursorVariant}
      >
        {cursorVariant === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-black font-extrabold tracking-widest font-pixel"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Subtle Glow Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full bg-arcade-yellow/[0.08] blur-xl"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          width: 100,
          height: 100,
        }}
        transition={{ type: 'spring', mass: 0.4, stiffness: 200, damping: 25 }}
      />
    </>
  );
};
