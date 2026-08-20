import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Search } from 'lucide-react';
import { ALL_PROJECTS, FILTER_TABS, type Project } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects according to category tab and search input
  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesFilter =
      activeFilter === 'all' ||
      project.filterCategory === activeFilter ||
      project.filterCategories.includes(activeFilter);

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="work" className="py-24 sm:py-32 relative border-b-2 border-arcade-border bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
              <Layers className="w-3.5 h-3.5 fill-black" />
              <span>02 // THE FULL MENU</span>
            </div>
            <h2 className="font-pixel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SELECTED <span className="text-arcade-yellow">WORK</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-xl font-normal">
              A curated collection of 15 live websites, SaaS products, and experiments built with craft and code.
            </p>
          </div>

          {/* Quick Counter Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-arcade-card border border-arcade-border text-xs font-mono text-text-secondary shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-arcade-yellow animate-pulse" />
            <span>
              Showing <strong className="text-arcade-yellow">{filteredProjects.length}</strong> of{' '}
              <strong className="text-white">{ALL_PROJECTS.length}</strong> projects
            </span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-2 sm:p-2.5 rounded-xl bg-arcade-card border-2 border-arcade-border shadow-brutalist-card">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none py-1 px-1">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'text-black bg-arcade-yellow border border-black shadow-[2px_2px_0px_#000000]'
                      : 'text-text-secondary hover:text-white hover:bg-surface-950 border border-transparent'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-black text-arcade-yellow font-bold' : 'bg-surface-950 text-text-muted'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instant Search Bar */}
          <div className="relative min-w-[240px] px-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-surface-950 border border-arcade-border text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-arcade-yellow transition-colors font-mono"
            />
          </div>
        </div>

        {/* Project Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fallback for empty results */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center space-y-3 p-8 rounded-2xl bg-arcade-card border-2 border-arcade-border shadow-brutalist-card">
            <p className="text-text-secondary font-mono text-sm">
              No projects found matching your search term.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-arcade-yellow text-black text-xs font-bold font-pixel border border-black shadow-[2px_2px_0px_#000000]"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
