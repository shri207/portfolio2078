import React from 'react';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../../data/content';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 relative border-b-2 border-arcade-border bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-xl bg-arcade-card border-2 border-arcade-border hover:border-arcade-yellow transition-all duration-200 flex flex-col justify-between group shadow-brutalist-card"
            >
              <div className="space-y-2">
                {/* Big Chunky Pixel Metric */}
                <div
                  className="font-pixel text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight group-hover:scale-105 transition-transform duration-200 origin-left text-arcade-yellow"
                >
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-sm sm:text-base font-bold text-white leading-snug">
                  {stat.label}
                </div>
              </div>

              {/* Sublabel / Context */}
              <div className="mt-4 pt-3 border-t border-arcade-border text-xs font-mono text-text-secondary">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
