import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, CheckCircle } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl rounded-2xl bg-arcade-card border-2 border-arcade-border-strong shadow-brutalist-card overflow-hidden flex flex-col my-auto max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-5 border-b-2 border-arcade-border flex items-center justify-between bg-surface-950">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-pixel font-bold bg-arcade-yellow text-black border border-black shadow-[1px_1px_0px_#000000]">
                #{project.number}
              </span>
              <div>
                <h3 className="font-pixel text-lg sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-text-secondary font-mono">
                  {project.category} • Shipped 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-pixel font-bold bg-arcade-yellow text-black border border-black shadow-[2px_2px_0px_#000000] hover:bg-arcade-yellow-hover transition-colors"
              >
                <span>LAUNCH SITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg bg-arcade-card border border-arcade-border text-text-secondary hover:text-white hover:border-arcade-yellow transition-colors shadow-[2px_2px_0px_#000000]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Live Interactive Frame / Visual Mockup */}
            <div className="rounded-xl overflow-hidden bg-surface-950 border-2 border-arcade-border shadow-xl">
              {/* Browser Navigation Bar */}
              <div className="p-2.5 bg-arcade-card border-b border-arcade-border flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-black" />
                  <div className="w-2.5 h-2.5 rounded-full bg-arcade-yellow border border-black" />
                  <div className="w-2.5 h-2.5 rounded-full bg-arcade-mint border border-black" />
                </div>
                
                <div className="px-3 py-1 rounded bg-surface-950 border border-arcade-border text-xs font-mono text-text-secondary flex items-center gap-2 max-w-md w-full justify-center">
                  <Globe className="w-3.5 h-3.5 text-arcade-yellow" />
                  <span className="truncate">{project.url}</span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-pixel font-bold text-arcade-yellow hover:underline flex items-center gap-1"
                >
                  <span className="hidden sm:inline">OPEN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Visual Display */}
              <div className="relative h-56 sm:h-80 w-full bg-surface-950 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-arcade-dark/95 backdrop-blur-md border border-arcade-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-pixel text-arcade-yellow font-bold">READY TO EXPLORE</div>
                    <div className="text-xs sm:text-sm font-bold text-white">Direct production deployment is online and active.</div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-arcade-yellow text-black font-pixel font-bold text-xs border border-black shadow-[2px_2px_0px_#000000] hover:bg-arcade-yellow-hover transition-colors"
                  >
                    <span>VIEW LIVE WEBSITE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Deep Dive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Overview & Description */}
              <div className="md:col-span-8 space-y-3">
                <h4 className="font-pixel text-lg font-bold text-white">PROJECT OVERVIEW</h4>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                  {project.description}
                </p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                  Crafted with a focus on visual identity, clean typography, intuitive user journeys, and seamless responsiveness across devices.
                </p>

                {/* Highlights List */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-surface-950 border border-arcade-border flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-arcade-yellow shrink-0" />
                    <span className="text-xs text-text-primary font-mono">100% Responsive Craft</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-950 border border-arcade-border flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-arcade-yellow shrink-0" />
                    <span className="text-xs text-text-primary font-mono">Conversion-Optimized UI</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-950 border border-arcade-border flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-arcade-yellow shrink-0" />
                    <span className="text-xs text-text-primary font-mono">Micro-animations & Polish</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-950 border border-arcade-border flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-arcade-yellow shrink-0" />
                    <span className="text-xs text-text-primary font-mono">Fast Performance & SEO</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Meta */}
              <div className="md:col-span-4 p-4 rounded-xl bg-surface-950 border border-arcade-border space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-pixel uppercase tracking-wider text-arcade-yellow">
                    TECH STACK & TOOLS
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-arcade-card border border-arcade-border text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-arcade-border space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-text-muted">Category:</span>
                      <span className="text-white">{project.category}</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-text-muted">Status:</span>
                      <span className="text-arcade-mint font-semibold">Live Production</span>
                    </div>
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-arcade-yellow text-black font-pixel font-bold text-xs border border-black shadow-[2px_2px_0px_#000000] hover:bg-arcade-yellow-hover transition-colors text-center mt-3"
                >
                  <span>OPEN LIVE WEBSITE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
