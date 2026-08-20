import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2, Compass, Code, Layout, Cpu } from 'lucide-react';
import { ABOUT_DOMAINS } from '../../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative border-b-2 border-arcade-border bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Editorial Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
              <Compass className="w-3.5 h-3.5 fill-black" />
              <span>01 // THE STORY</span>
            </div>

            {/* Heading */}
            <h2 className="font-pixel text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              A DESIGNER WHO THINKS{' '}
              <span className="text-arcade-yellow">LIKE A DEVELOPER.</span>
            </h2>

            {/* Editorial Body Text */}
            <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              <p>
                I'm a web designer and frontend developer focused on creating modern websites, high-converting landing pages, digital products and AI-powered experiences.
              </p>
              <p>
                I combine visual design, UI/UX thinking and modern frontend engineering to turn abstract ideas into polished, fluid, and memorable digital experiences.
              </p>
              <p className="text-xs sm:text-sm font-mono text-text-muted italic bg-arcade-card p-3 rounded-lg border border-arcade-border">
                * Zero bloated templates or cookie-cutter patterns. Every layout is intentionally constructed with bespoke typography, thoughtful spacing, and responsive craft.
              </p>
            </div>

            {/* Currently Building Live Card */}
            <div className="p-5 rounded-xl bg-arcade-card border-2 border-arcade-border shadow-brutalist-card relative overflow-hidden group hover:border-arcade-yellow transition-colors">
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-arcade-yellow via-arcade-purple to-arcade-mint" />
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-arcade-yellow text-black mt-1 shadow-[2px_2px_0px_#000000]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-arcade-yellow animate-ping" />
                    <span className="text-[11px] font-pixel uppercase tracking-wider text-arcade-yellow font-bold">
                      CURRENTLY BUILDING
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white">
                    Digital experiences, AI tools & experimental web products.
                  </p>
                  <p className="text-xs text-text-secondary font-mono">
                    Exploring autonomous agent interfaces, interactive 3D WebGL workflows, and ultra-fast Next.js architecture.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Domains of Expertise Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-arcade-card border-2 border-arcade-border-strong shadow-brutalist-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-arcade-border">
                <div>
                  <h3 className="font-pixel text-xl sm:text-2xl font-bold text-white">MY WORK SPANS</h3>
                  <p className="text-xs text-text-secondary font-mono mt-0.5">Execution across 8 distinct industries</p>
                </div>
                <Sparkles className="w-5 h-5 text-arcade-yellow" />
              </div>

              {/* Grid of Domain Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ABOUT_DOMAINS.map((domain, index) => (
                  <motion.div
                    key={domain}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="p-3 rounded-lg bg-surface-950 border border-arcade-border hover:border-arcade-yellow transition-all flex items-center justify-between group cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-pixel font-bold text-arcade-yellow">
                        0{index + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-text-primary group-hover:text-white transition-colors">
                        {domain}
                      </span>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-arcade-border-strong group-hover:text-arcade-yellow transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* 3 Core Pillars */}
              <div className="pt-4 border-t border-arcade-border grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-surface-950 border border-arcade-border">
                  <Layout className="w-4 h-4 text-arcade-purple mx-auto mb-1.5" />
                  <div className="text-xs font-pixel font-bold text-white">VISUAL DESIGN</div>
                  <div className="text-[10px] text-text-muted font-mono">UI/UX & Systems</div>
                </div>
                <div className="p-3 rounded-lg bg-surface-950 border border-arcade-border">
                  <Code className="w-4 h-4 text-arcade-mint mx-auto mb-1.5" />
                  <div className="text-xs font-pixel font-bold text-white">FRONTEND DEV</div>
                  <div className="text-[10px] text-text-muted font-mono">React & Next.js</div>
                </div>
                <div className="p-3 rounded-lg bg-surface-950 border border-arcade-border">
                  <Cpu className="w-4 h-4 text-arcade-yellow mx-auto mb-1.5" />
                  <div className="text-xs font-pixel font-bold text-white">CREATIVE TECH</div>
                  <div className="text-[10px] text-text-muted font-mono">AI & Interactions</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
