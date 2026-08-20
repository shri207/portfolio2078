import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowDownRight } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-xl bg-arcade-card border-2 border-arcade-border hover:border-arcade-yellow overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-brutalist-card cursor-pointer ${
        project.layoutSpan || 'col-span-1'
      }`}
      onClick={() => onSelect(project)}
    >
      {/* Card Header (Meta & External Link) */}
      <div className="p-5 pb-3 flex items-center justify-between z-10 border-b border-arcade-border bg-surface-950/40">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-pixel font-bold text-black bg-arcade-yellow px-2 py-0.2 rounded border border-black shadow-[1px_1px_0px_#000000]">
            #{project.number}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-arcade-purple font-semibold">
            {project.category}
          </span>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-1.5 rounded bg-arcade-card border border-arcade-border text-text-secondary hover:text-black hover:bg-arcade-yellow hover:border-black transition-all duration-200 shadow-[1px_1px_0px_#000000]"
          title="Open live website"
          aria-label={`Open ${project.title} live website`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Visual Website Preview Container */}
      <div className="p-4">
        <div className="relative rounded-lg overflow-hidden bg-surface-950 border border-arcade-border group-hover:border-arcade-border-strong transition-colors">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-arcade-card/90 border-b border-arcade-border">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/80 border border-black" />
              <div className="w-2 h-2 rounded-full bg-arcade-yellow border border-black" />
              <div className="w-2 h-2 rounded-full bg-arcade-mint border border-black" />
            </div>
            <div className="text-[9px] font-mono text-text-muted truncate max-w-[180px]">
              {project.url.replace('https://', '')}
            </div>
            <div className="w-2 h-2" />
          </div>

          {/* Screenshot / Mockup Preview */}
          <div className="relative h-44 sm:h-52 overflow-hidden bg-surface-950">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/20 to-transparent" />
            
            {/* Hover Indicator Badge */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px]">
              <span className="px-3.5 py-1.5 rounded-lg bg-arcade-yellow text-black text-xs font-pixel font-bold tracking-wider flex items-center gap-1.5 border-2 border-black shadow-[3px_3px_0px_#000000]">
                <span>EXPLORE DETAILS</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 pt-1 space-y-3 z-10 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-pixel text-xl sm:text-2xl font-bold text-white group-hover:text-arcade-yellow transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowDownRight className="w-4 h-4 text-text-muted group-hover:text-arcade-yellow transition-transform" />
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-950 border border-arcade-border text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Footer Live Button */}
        <div className="pt-3 border-t border-arcade-border flex items-center justify-between">
          <span className="text-[10px] font-mono text-text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-arcade-mint inline-block" />
            <span>LIVE WEB APP</span>
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs font-pixel font-bold text-arcade-yellow hover:underline"
          >
            <span>VIEW LIVE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
