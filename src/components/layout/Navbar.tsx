import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, Sparkles, ArrowDownRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  // Web Audio Context reference for generated ambient lo-fi chord progression
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio Ambient Synthesizer
  const toggleLoFiAudio = () => {
    if (isAudioPlaying) {
      // Stop audio
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
            audioCtxRef.current.suspend();
          }
        }, 600);
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsAudioPlaying(false);
    } else {
      // Start audio
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        } else if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        const ctx = audioCtxRef.current;
        const mainGain = ctx.createGain();
        mainGain.gain.setValueAtTime(0.04, ctx.currentTime);
        mainGain.connect(ctx.destination);
        gainNodeRef.current = mainGain;

        // Warm chord frequencies: Dm9 -> G13 -> Cmaj9 -> Am7 (classic lo-fi progression)
        const chordProgressions = [
          [146.83, 220.00, 261.63, 329.63, 392.00], // Dm9
          [196.00, 246.94, 293.66, 329.63, 440.00], // G13
          [130.81, 196.00, 246.94, 329.63, 392.00], // Cmaj9
          [110.00, 164.81, 220.00, 261.63, 329.63], // Am7
        ];

        let chordIdx = 0;

        const playChord = () => {
          if (!ctx || ctx.state === 'closed') return;
          const chord = chordProgressions[chordIdx];
          chordIdx = (chordIdx + 1) % chordProgressions.length;

          chord.forEach((freq) => {
            const osc = ctx.createOscillator();
            const noteGain = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            // Warm lowpass filter to create vintage lo-fi tape sound
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(450 + Math.random() * 100, ctx.currentTime);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
            noteGain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.8);
            noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.8);

            osc.connect(filter);
            filter.connect(noteGain);
            noteGain.connect(mainGain);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 4.0);
          });
        };

        playChord();
        intervalRef.current = window.setInterval(playChord, 3800);
        setIsAudioPlaying(true);
      } catch (err) {
        console.error('Audio synthesizer error:', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  const navLinks = [
    { name: 'MENU', label: 'WORK', href: '#work' },
    { name: 'STORY', label: 'ABOUT', href: '#about' },
    { name: 'SPECIALS', label: 'SERVICES', href: '#services' },
    { name: 'ARSENAL', label: 'SKILLS', href: '#skills' },
    { name: 'PROCESS', label: 'PROCESS', href: '#process' },
    { name: 'FIND ME', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-arcade-dark/95 backdrop-blur-md border-b-2 border-arcade-border shadow-brutalist-black'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Left Brand Identity matching reference [प.] style */}
          <a
            href="#"
            className="group flex items-center gap-3 select-none"
          >
            {/* Boxed Icon */}
            <div className="w-9 h-9 rounded-md bg-arcade-card border-2 border-arcade-border-strong flex items-center justify-center text-arcade-yellow font-pixel text-lg font-black shadow-[2px_2px_0px_#000000] group-hover:border-arcade-yellow transition-colors">
              SK.
            </div>

            {/* Title & Subtext */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-pixel text-base sm:text-lg font-bold tracking-wide text-white group-hover:text-arcade-yellow transition-colors uppercase">
                  SHRI KANTH P.
                </span>
                <span className="px-1.5 py-0.2 rounded bg-arcade-yellow text-black font-pixel text-[11px] font-bold">
                  DEV
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
                AVAILABLE · REMOTE
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Uppercase Mono Arcade Links) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-lg bg-arcade-card/90 border border-arcade-border backdrop-blur-md shadow-[2px_2px_0px_#000000]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-black bg-arcade-yellow shadow-[2px_2px_0px_#000000]'
                      : 'text-text-secondary hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Utilities: Lo-Fi Toggle + Brutalist Button */}
          <div className="flex items-center gap-3">
            {/* Lo-Fi Atmosphere Audio Synthesizer Button */}
            <button
              type="button"
              onClick={toggleLoFiAudio}
              className={`hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] ${
                isAudioPlaying
                  ? 'bg-arcade-purple text-black border-arcade-purple font-bold'
                  : 'bg-arcade-card border-arcade-border text-text-secondary hover:text-arcade-yellow hover:border-arcade-yellow'
              }`}
              title={isAudioPlaying ? 'Mute lo-fi ambient audio' : 'Play lo-fi ambient audio'}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="text-[11px] font-mono font-semibold">LO-FI: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono">LO-FI ATMOSPHERE</span>
                </>
              )}
            </button>

            {/* Brutalist Yellow Action Button */}
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-arcade-yellow text-black font-pixel text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000000] hover:bg-arcade-yellow-hover hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <span>START PROJECT</span>
              <ArrowDownRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-arcade-card border border-arcade-border text-text-primary hover:text-arcade-yellow transition-colors focus:outline-none shadow-[2px_2px_0px_#000000]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[58px] z-30 bg-arcade-dark/98 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between lg:hidden border-t-2 border-arcade-border"
          >
            <div className="flex flex-col gap-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted mb-2 flex items-center justify-between">
                <span>Navigation Directory</span>
                <span className="text-arcade-yellow font-pixel">MENU</span>
              </div>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-pixel font-bold text-text-primary border-b border-arcade-border hover:text-arcade-yellow hover:pl-2 transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-text-muted">↗</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={toggleLoFiAudio}
                className="p-3.5 rounded-xl bg-arcade-card border border-arcade-border flex items-center justify-between text-xs font-mono text-white"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-arcade-yellow" />
                  Lo-Fi Ambient Atmosphere
                </span>
                <span className="font-bold text-arcade-yellow">
                  {isAudioPlaying ? 'PLAYING ♫' : 'ENABLE'}
                </span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-arcade-yellow text-black font-pixel font-bold text-sm border-2 border-black shadow-[4px_4px_0px_#000000] text-center"
              >
                <span>LET'S TALK / INQUIRE</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
