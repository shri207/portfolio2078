import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Sparkles, ArrowDownRight, ArrowRight, Coffee, Code2, Layers, Cpu, Zap, Star } from 'lucide-react';
import { FloatingMockups } from './FloatingMockups';

export const Hero: React.FC = () => {
  const tickerItems = [
    { icon: Coffee, text: 'Single Origin Coffee & Code' },
    { icon: Layers, text: '15+ Shipped Web Experiences' },
    { icon: Sparkles, text: 'Bespoke UI/UX Systems' },
    { icon: Code2, text: 'Next.js & React Engineering' },
    { icon: Cpu, text: 'Autonomous AI SaaS Dashboards' },
    { icon: Zap, text: 'Ultra-Fast 60fps Micro-interactions' },
    { icon: Star, text: 'Pixel-Perfect Craftsmanship' },
  ];

  return (
    <section className="relative min-h-[94vh] pt-28 sm:pt-36 pb-12 flex flex-col justify-between overflow-hidden bg-arcade-grid bg-radial-vignette border-b-2 border-arcade-border">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-arcade-yellow/[0.04] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-arcade-purple/[0.04] blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Pixel Sparkle Stars */}
      <div className="absolute top-28 right-[15%] text-arcade-yellow/40 font-pixel text-xl select-none pointer-events-none hidden sm:block animate-pulse">
        ✦
      </div>
      <div className="absolute top-44 left-[8%] text-arcade-purple/40 font-pixel text-lg select-none pointer-events-none hidden sm:block">
        ✦
      </div>
      <div className="absolute bottom-28 right-[40%] text-arcade-yellow/30 font-pixel text-sm select-none pointer-events-none hidden md:block">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Pill Badges, Headline, Subtext, Brutalist CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Top 3 Pill Badges matching reference screenshot */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Location Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
                <MapPin className="w-3.5 h-3.5 fill-black text-arcade-yellow" />
                <span>REMOTE / WORLDWIDE</span>
              </div>

              {/* Lavender Vibe Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-arcade-purple text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
                <Heart className="w-3.5 h-3.5 fill-black text-arcade-purple" />
                <span>GOOD CODE. GOOD VIBES.</span>
              </div>

              {/* Dashed Outline Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-arcade-card/80 text-text-secondary border border-dashed border-white/20 font-mono text-[11px] rounded-full">
                <span className="text-arcade-yellow font-bold">#</span>
                <span>15+ LIVE WEBSITES · FULL STACK & AI</span>
              </div>
            </div>

            {/* Main Headline with Yellow Tape Marker on Top */}
            <div className="space-y-2 pt-2">
              {/* Angled Yellow Marker Tape Banner */}
              <div className="inline-block px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs sm:text-sm font-bold uppercase tracking-wider -rotate-1 shadow-[2px_2px_0px_#000000]">
                WEB DESIGNER & CREATIVE TECHNOLOGIST
              </div>

              {/* Chunky Pixel Headline */}
              <h1 className="font-pixel text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                SHRI KANTH P.<br />
                <span className="text-arcade-yellow">
                  CRAFTING DIGITAL EXPERIENCES
                </span>
              </h1>
            </div>

            {/* Supporting Subtitle with Wavy Underlines & Warning Note */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed">
                A creative corner on the web for{' '}
                <span className="text-white font-bold squiggle-yellow">good design</span>,{' '}
                artisanal frontend code, spontaneous interactions &{' '}
                <span className="text-white font-bold squiggle-purple">unplanned hours</span>.
              </p>

              {/* Authenticity Warning Subtext */}
              <p className="text-xs sm:text-sm font-mono text-text-muted italic">
                * Warning: You might come for a 20-minute portfolio look and stay inspecting all 15 live projects.
              </p>
            </div>

            {/* Action Buttons & Status */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Neo-brutalist Yellow Button */}
              <a
                href="#work"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-lg bg-arcade-yellow text-black font-pixel text-sm sm:text-base font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000000] hover:bg-arcade-yellow-hover hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary Dark Brutalist Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-lg bg-arcade-card text-white font-pixel text-sm sm:text-base font-bold uppercase tracking-wider border-2 border-arcade-border-strong shadow-[4px_4px_0px_#000000] hover:border-arcade-yellow hover:text-arcade-yellow hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 text-arcade-yellow transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Location & Status Line matching reference */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span>AVAILABLE FOR NEW CLIENT WEBSITES & AI PRODUCT CONTRACTS</span>
            </div>

          </motion.div>

          {/* Right Column: Interactive Line-Art Wireframe & Floating Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <FloatingMockups />
          </motion.div>

        </div>
      </div>

      {/* Bottom Marquee Ticker matching reference bottom bar */}
      <div className="mt-12 w-full border-t-2 border-b-2 border-arcade-border bg-arcade-card/90 py-3 overflow-hidden select-none">
        <div className="flex w-max animate-marquee gap-8">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm text-text-primary tracking-wide whitespace-nowrap"
              >
                <Icon className="w-4 h-4 text-arcade-yellow shrink-0" />
                <span>{item.text}</span>
                <span className="text-arcade-border-strong font-pixel ml-4">✦</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
