import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Workflow } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/content';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 relative border-b-2 border-arcade-border bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
              <Workflow className="w-3.5 h-3.5 fill-black" />
              <span>04 // METHODOLOGY</span>
            </div>
            <h2 className="font-pixel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              FROM IDEA → INTERFACE → <span className="text-arcade-yellow">REALITY</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-xl font-normal">
              A structured 4-step creative engineering process designed to eliminate friction and launch conversion-ready digital experiences.
            </p>
          </div>

          <div className="px-4 py-2 rounded-lg bg-arcade-card border border-arcade-border text-xs font-mono text-text-secondary hidden sm:flex items-center gap-2 shadow-[2px_2px_0px_#000000]">
            <span className="w-2 h-2 rounded-full bg-arcade-yellow animate-pulse" />
            <span>Iterative & Rapid Delivery</span>
          </div>
        </div>

        {/* 4 Steps Progressive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl p-6 bg-arcade-card border-2 border-arcade-border hover:border-arcade-yellow transition-all duration-300 flex flex-col justify-between shadow-brutalist-card relative overflow-hidden group"
            >
              <div className="space-y-5">
                {/* Step Marker */}
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-3xl font-black text-arcade-yellow">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-pixel uppercase tracking-widest text-black bg-arcade-purple px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000000] font-bold">
                    {item.tagline}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-pixel text-xl sm:text-2xl font-bold text-white group-hover:text-arcade-yellow transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-1.5 pt-2 border-t border-arcade-border">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted font-bold">
                    Key Outcomes
                  </div>
                  {item.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-center gap-2 text-xs text-text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-arcade-yellow shrink-0" />
                      <span className="font-mono text-[11px]">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Flow Arrow */}
              {index < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-arcade-dark border border-arcade-border flex items-center justify-center text-text-muted shadow-[1px_1px_0px_#000000]">
                    <ArrowRight className="w-3 h-3 text-arcade-yellow" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
