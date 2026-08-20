import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowDownRight, Sparkles } from 'lucide-react';
import { FEATURED_PROJECTS, type Project } from '../../data/projects';

interface FeaturedSpotlightProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedSpotlight: React.FC<FeaturedSpotlightProps> = ({ onSelectProject }) => {
  return (
    <section className="py-20 sm:py-28 relative border-b-2 border-arcade-border bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>SPECIALS // FLAGSHIP SPOTLIGHT</span>
            </div>
            <h2 className="font-pixel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              PROJECTS WORTH <span className="text-arcade-yellow">EXPLORING</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-text-secondary max-w-md font-normal">
            Flagship AI platforms, autonomous tools, and next-gen product interfaces engineered with precision.
          </p>
        </div>

        {/* Large Horizontal Showcase Cards */}
        <div className="space-y-8">
          {FEATURED_PROJECTS.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative rounded-2xl bg-arcade-card border-2 border-arcade-border-strong hover:border-arcade-yellow transition-all duration-300 overflow-hidden shadow-brutalist-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
                  
                  {/* Left Column: Project Info & Meta */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                    <div className="space-y-4">
                      {/* Top Badges */}
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-pixel font-bold bg-arcade-yellow text-black px-2.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000000]">
                          #{project.number}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-arcade-purple font-semibold">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-text-muted">
                          {project.year}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-pixel text-2xl sm:text-4xl font-extrabold text-white group-hover:text-arcade-yellow transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics / Key Highlight */}
                      {project.metrics && (
                        <div className="p-3 rounded-lg bg-surface-950 border border-arcade-border text-xs font-mono text-text-primary flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-arcade-yellow animate-pulse" />
                          <span>{project.metrics}</span>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded text-[11px] font-mono bg-surface-950 border border-arcade-border text-text-secondary group-hover:border-arcade-border-strong transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-arcade-yellow text-black font-pixel text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000000] hover:bg-arcade-yellow-hover hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                      >
                        <span>LAUNCH PROJECT</span>
                        <ArrowDownRight className="w-4 h-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-950 border border-arcade-border text-xs sm:text-sm font-mono text-text-secondary hover:text-white hover:border-arcade-yellow transition-colors"
                      >
                        <span>Quick Preview</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Live Website Mockup Preview */}
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative rounded-xl overflow-hidden bg-surface-950 border-2 border-arcade-border group-hover:border-arcade-border-strong p-2 sm:p-2.5 cursor-pointer shadow-xl transition-all"
                    >
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between pb-2 px-2 border-b border-arcade-border mb-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-black" />
                          <div className="w-2.5 h-2.5 rounded-full bg-arcade-yellow border border-black" />
                          <div className="w-2.5 h-2.5 rounded-full bg-arcade-mint border border-black" />
                        </div>
                        <div className="px-3 py-0.5 rounded bg-arcade-card border border-arcade-border text-[11px] font-mono text-text-secondary truncate max-w-[200px] sm:max-w-xs">
                          {project.url}
                        </div>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded text-text-muted hover:text-arcade-yellow transition-colors"
                          title="Open in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Mockup Frame */}
                      <div className="relative h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden bg-surface-950">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/20 to-transparent" />

                        {/* Interactive Banner over Image */}
                        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-arcade-dark/95 backdrop-blur-md border border-arcade-border flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-pixel text-arcade-yellow font-bold">LIVE PRODUCTION PREVIEW</div>
                            <div className="text-xs sm:text-sm font-bold text-white truncate">{project.title} • {project.category}</div>
                          </div>
                          <div className="px-3 py-1.5 rounded bg-arcade-yellow text-black text-xs font-pixel font-bold flex items-center gap-1.5 border border-black shadow-[2px_2px_0px_#000000]">
                            <span>EXPLORE</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
