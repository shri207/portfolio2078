import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDownRight, MessageSquare, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { InquiryForm } from './InquiryForm';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-36 relative border-b-2 border-arcade-border bg-arcade-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dramatic Manifesto & Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
              <MessageSquare className="w-3.5 h-3.5 fill-black" />
              <span>06 // FIND ME & INQUIRE</span>
            </div>

            <h2 className="font-pixel text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              HAVE AN IDEA? <br />
              <span className="text-arcade-yellow">LET'S BUILD IT.</span>
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              Tell me what you're building, what you're trying to solve, or even just the idea that's been sitting in your head.
            </p>

            {/* Direct Connect Channels */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-pixel uppercase tracking-widest text-text-muted">
                DIRECT CHANNELS
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/shri207"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-arcade-card border-2 border-arcade-border hover:border-arcade-yellow transition-all flex items-center justify-between group shadow-brutalist-card"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface-950 border border-arcade-border text-white group-hover:text-arcade-yellow transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-pixel font-bold text-white group-hover:text-arcade-yellow transition-colors">
                      GITHUB PROFILE
                    </div>
                    <div className="text-xs text-text-secondary font-mono">
                      github.com/shri207
                    </div>
                  </div>
                </div>
                <ArrowDownRight className="w-4 h-4 text-text-muted group-hover:text-arcade-yellow transition-transform" />
              </a>

              {/* LinkedIn Profile */}
              <a
                href="https://www.linkedin.com/in/shri-kanth-847a59329/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-arcade-card border-2 border-arcade-border hover:border-arcade-yellow transition-all flex items-center justify-between group shadow-brutalist-card"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface-950 border border-arcade-border text-[#0a66c2] group-hover:text-arcade-yellow transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-pixel font-bold text-white group-hover:text-arcade-yellow transition-colors">
                      LINKEDIN PROFILE
                    </div>
                    <div className="text-xs text-text-secondary font-mono">
                      linkedin.com/in/shri-kanth-847a59329
                    </div>
                  </div>
                </div>
                <ArrowDownRight className="w-4 h-4 text-text-muted group-hover:text-arcade-yellow transition-transform" />
              </a>

              {/* Direct Email Card */}
              <a
                href="mailto:shrikanth2078@gmail.com"
                className="p-3.5 rounded-xl bg-arcade-card border-2 border-arcade-border hover:border-arcade-yellow transition-all flex items-center justify-between group shadow-brutalist-card"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface-950 border border-arcade-border text-arcade-yellow">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-pixel font-bold text-white group-hover:text-arcade-yellow transition-colors">
                      EMAIL DIRECTLY
                    </div>
                    <div className="text-xs text-text-secondary font-mono">
                      shrikanth2078@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowDownRight className="w-4 h-4 text-text-muted group-hover:text-arcade-yellow transition-transform" />
              </a>
            </div>

            {/* Availability & Location Pill */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-text-secondary">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-arcade-yellow" />
                <span>AVAILABLE WORLDWIDE / REMOTE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-arcade-mint" />
                <span>FAST RESPONSE (24H)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form Component */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <InquiryForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
