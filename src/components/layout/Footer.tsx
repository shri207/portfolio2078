import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t-2 border-arcade-border bg-arcade-dark text-text-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-arcade-border">
          
          {/* Brand Signature */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-arcade-card border border-arcade-border flex items-center justify-center text-arcade-yellow font-pixel text-sm font-bold shadow-[1px_1px_0px_#000000]">
                SK.
              </div>
              <h3 className="font-pixel text-xl sm:text-2xl font-bold text-white tracking-wide">
                SHRI KANTH P<span className="text-arcade-yellow">.</span>
              </h3>
            </div>
            <p className="text-xs text-text-secondary font-mono tracking-wider uppercase">
              WEB DESIGNER · FRONTEND DEVELOPER · HYDERABAD & REMOTE
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm font-mono font-bold">
            <a href="#work" className="hover:text-arcade-yellow transition-colors uppercase">
              WORK
            </a>
            <a href="#about" className="hover:text-arcade-yellow transition-colors uppercase">
              ABOUT
            </a>
            <a href="#services" className="hover:text-arcade-yellow transition-colors uppercase">
              SERVICES
            </a>
            <a href="#skills" className="hover:text-arcade-yellow transition-colors uppercase">
              SKILLS
            </a>
            <a href="#process" className="hover:text-arcade-yellow transition-colors uppercase">
              PROCESS
            </a>
            <a href="#contact" className="hover:text-arcade-yellow transition-colors uppercase">
              CONTACT
            </a>
            <a
              href="https://github.com/shri207"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-arcade-yellow transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shri-kanth-847a59329/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#0a66c2] hover:text-arcade-yellow transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span className="text-white hover:text-arcade-yellow">LINKEDIN</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-arcade-card border border-arcade-border text-text-secondary hover:text-black hover:bg-arcade-yellow hover:border-black transition-all shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Meta */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © 2026 SHRI KANTH P. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-arcade-mint animate-pulse" />
              <span>IST (HYDERABAD): <strong className="text-white">{time || '16:20:00 PM'}</strong></span>
            </div>
            <span>•</span>
            <span className="text-arcade-yellow font-pixel">CRAFTED WITH OBSESSION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
