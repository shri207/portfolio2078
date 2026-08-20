import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Palette, Code2, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA } from '../../data/content';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-arcade-purple" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-arcade-mint" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-arcade-yellow" />;
      default:
        return <Wrench className="w-5 h-5 text-arcade-yellow" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-b-2 border-arcade-border bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
              <Wrench className="w-3.5 h-3.5 fill-black" />
              <span>03 // ARSENAL & CRAFT</span>
            </div>
            <h2 className="font-pixel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              TOOLS I <span className="text-arcade-yellow">WORK WITH</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-xl font-normal">
              A carefully honed stack spanning high-converting visual design, modern frontend architecture, and autonomous AI systems.
            </p>
          </div>

          <div className="p-3 px-4 rounded-lg bg-arcade-card border border-arcade-border text-xs font-mono text-text-secondary hidden sm:flex items-center gap-2 shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-4 h-4 text-arcade-yellow" />
            <span>Production-Tested Tooling</span>
          </div>
        </div>

        {/* 3 Interactive Category Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`rounded-xl p-6 sm:p-7 bg-arcade-card border-2 transition-all duration-300 flex flex-col justify-between shadow-brutalist-card relative overflow-hidden group ${
                activeCategory === idx ? 'border-arcade-yellow' : 'border-arcade-border'
              }`}
            >
              <div className="space-y-5 z-10">
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-arcade-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-surface-950 border border-arcade-border">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="font-pixel text-xl font-bold text-white group-hover:text-arcade-yellow transition-colors">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-text-muted">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Tagline */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                  {cat.description}
                </p>

                {/* Interactive Pills / Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04 }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 cursor-default ${
                        skill.highlight
                          ? 'bg-arcade-yellow text-black font-bold border border-black shadow-[1px_1px_0px_#000000]'
                          : 'bg-surface-950 border border-arcade-border text-text-primary hover:border-arcade-yellow'
                      }`}
                    >
                      <CheckCircle2 className={`w-3 h-3 ${skill.highlight ? 'text-black' : 'text-arcade-yellow/60'}`} />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Feature Line */}
              <div className="mt-6 pt-3 border-t border-arcade-border flex items-center justify-between text-xs font-mono text-text-muted z-10">
                <span>Production Standard</span>
                <span className="text-arcade-yellow font-pixel font-bold">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
