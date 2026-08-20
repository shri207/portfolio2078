import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Activity, ShieldCheck, Play, ArrowRight } from 'lucide-react';

export const FloatingMockups: React.FC = () => {
  return (
    <div className="relative w-full h-[460px] lg:h-[520px] flex items-center justify-center select-none">
      
      {/* Background Architectural Wireframe Illustration matching reference image style */}
      <svg
        className="absolute inset-0 w-full h-full text-white/[0.08] pointer-events-none stroke-current"
        viewBox="0 0 450 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground Line */}
        <line x1="20" y1="420" x2="430" y2="420" strokeWidth="1.5" strokeDasharray="6 6" />

        {/* Building 1 (Tall Skyscraper / Server Tower) */}
        <rect x="340" y="140" width="80" height="280" strokeWidth="1.5" />
        <rect x="355" y="165" width="20" height="20" strokeWidth="1" />
        <rect x="385" y="165" width="20" height="20" strokeWidth="1" />
        <rect x="355" y="200" width="20" height="20" strokeWidth="1" />
        <rect x="385" y="200" width="20" height="20" strokeWidth="1" />
        <rect x="355" y="235" width="20" height="20" strokeWidth="1" />
        <rect x="385" y="235" width="20" height="20" strokeWidth="1" />
        <line x1="380" y1="140" x2="380" y2="100" strokeWidth="1.5" />
        <circle cx="380" cy="96" r="3" strokeWidth="1" />

        {/* Building 2 (Creative Cafe / Studio Pavilion) */}
        <polygon points="210,170 310,170 300,195 220,195" strokeWidth="1.5" />
        <rect x="215" y="195" width="90" height="225" strokeWidth="1.5" />
        
        {/* Cafe Window with Coffee Mug */}
        <rect x="230" y="225" width="60" height="50" rx="3" strokeWidth="1.2" />
        {/* Coffee Mug inside Window */}
        <path d="M255 245 C255 258, 267 258, 267 245 Z" strokeWidth="1.2" />
        <path d="M267 247 C271 247, 271 253, 267 253" strokeWidth="1" />

        {/* Small Hindi/Pixel Rune Badge box */}
        <rect x="200" y="215" width="36" height="20" rx="2" strokeWidth="1" className="stroke-arcade-purple/50" />
        <text x="204" y="229" fill="#B8A1FF" fontSize="9" fontFamily="JetBrains Mono">पंचतंत्र</text>

        {/* Ambient Sparkle Stars */}
        <path d="M190 140 L193 148 L201 151 L193 154 L190 162 L187 154 L179 151 L187 148 Z" strokeWidth="1" className="stroke-arcade-yellow/60 fill-arcade-yellow/20" />
        <circle cx="325" cy="115" r="14" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* Main Center Card: VoiceForge AI Audio Engine */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className="relative z-20 w-[310px] sm:w-[360px] rounded-xl bg-arcade-card border-2 border-arcade-border-strong p-4 shadow-brutalist-card group cursor-pointer"
      >
        {/* Window Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-arcade-border mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-black" />
            <div className="w-2.5 h-2.5 rounded-full bg-arcade-yellow border border-black" />
            <div className="w-2.5 h-2.5 rounded-full bg-arcade-mint border border-black" />
          </div>
          <div className="px-2.5 py-0.5 rounded bg-surface-950 text-[10px] font-mono text-text-secondary border border-arcade-border flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-arcade-yellow animate-ping" />
            <span>voiceforge.ai</span>
          </div>
          <a
            href="https://voicefoger.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-arcade-yellow transition-colors"
            title="Open live website"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Card Visual Screen */}
        <div className="relative h-40 sm:h-44 rounded-lg overflow-hidden bg-surface-950 border border-arcade-border p-3 flex flex-col justify-between group-hover:border-arcade-yellow/40 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-tr from-arcade-purple/10 via-surface-950 to-arcade-yellow/10" />
          
          {/* Top Status */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-arcade-purple/20 text-arcade-purple border border-arcade-purple/40 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Neural Waveform v2.4
            </span>
            <span className="text-[10px] font-mono text-arcade-mint">ONLINE</span>
          </div>

          {/* Sound Wave Animation Visual */}
          <div className="relative z-10 flex items-end gap-1 h-14 justify-center px-2">
            {[40, 75, 55, 95, 30, 85, 60, 100, 45, 90, 65, 35, 80, 50, 95, 70, 40].map((h, i) => (
              <motion.div
                key={i}
                className="w-1.5 rounded-sm bg-gradient-to-t from-arcade-purple via-arcade-yellow to-arcade-yellow"
                animate={{ height: [`${h * 0.25}%`, `${h}%`, `${h * 0.35}%`] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1 + (i % 5) * 0.18,
                  ease: 'easeInOut',
                  delay: i * 0.04,
                }}
              />
            ))}
          </div>

          {/* Bottom Controls Preview */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-arcade-yellow text-black flex items-center justify-center font-bold">
                <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
              </div>
              <span className="text-[10px] font-mono font-medium text-white">Synthesizer Stream</span>
            </div>
            <span className="text-[10px] font-mono text-arcade-yellow font-bold">99.8%</span>
          </div>
        </div>

        {/* Card Footer Info */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-xs font-pixel font-bold text-white flex items-center gap-1.5">
              VOICEFORGE PLATFORM
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-arcade-yellow text-black font-pixel">#14</span>
            </div>
            <div className="text-[10px] font-mono text-text-secondary">AI Audio & Transcription System</div>
          </div>
          <a
            href="https://voicefoger.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-pixel font-bold text-arcade-yellow hover:underline"
          >
            LIVE <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </motion.div>

      {/* Floating Card 2 (Top Left): Orion AI */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.2 } }}
        className="absolute -top-4 -left-2 sm:top-2 sm:left-4 lg:-left-10 z-30 w-52 sm:w-60 rounded-xl bg-arcade-card border-2 border-arcade-border-strong p-3 shadow-brutalist-card cursor-pointer hidden sm:block"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-arcade-mint animate-pulse" />
            <span className="text-[10px] font-mono text-text-secondary">orion-ai.vercel.app</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.2 rounded bg-arcade-mint/20 text-arcade-mint font-mono">SaaS</span>
        </div>
        <div className="p-2 rounded bg-surface-950 border border-arcade-border flex items-center justify-between">
          <div>
            <div className="text-[11px] font-pixel font-bold text-white">ORION AI AGENT</div>
            <div className="text-[9px] font-mono text-text-muted">Workflow Automation</div>
          </div>
          <Activity className="w-4 h-4 text-arcade-mint" />
        </div>
      </motion.div>

      {/* Floating Card 3 (Bottom Right): AI Cyber HQ */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.2 } }}
        className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 lg:-right-8 z-30 w-56 sm:w-64 rounded-xl bg-arcade-card border-2 border-arcade-border-strong p-3 shadow-brutalist-card cursor-pointer hidden sm:block"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-arcade-yellow" />
            <span className="text-[11px] font-pixel font-bold text-white">AI CYBER HQ</span>
          </div>
          <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-arcade-yellow/20 text-arcade-yellow">#10</span>
        </div>
        <div className="space-y-1.5 text-[9px] font-mono">
          <div className="flex justify-between text-text-secondary">
            <span>Threat Telemetry</span>
            <span className="text-arcade-mint font-bold">Active (0ms)</span>
          </div>
          <div className="w-full bg-surface-950 h-1.5 rounded overflow-hidden border border-arcade-border">
            <div className="bg-arcade-yellow h-full w-[88%]" />
          </div>
        </div>
      </motion.div>

      {/* Floating Live Badge Top Right */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute top-4 right-2 sm:right-8 z-30 px-3 py-1.5 rounded-full bg-arcade-yellow text-black border-2 border-black shadow-[3px_3px_0px_#000000] flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-black animate-ping" />
        <span className="text-[11px] font-pixel font-bold uppercase">15 LIVE SITES</span>
      </motion.div>

    </div>
  );
};
