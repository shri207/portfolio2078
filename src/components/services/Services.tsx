import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Sparkles, Flame, ArrowDownRight, CheckCircle2, Briefcase } from 'lucide-react';
import { SERVICES_DATA } from '../../data/content';

export const Services: React.FC = () => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-arcade-yellow" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-arcade-purple" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-arcade-mint" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-arcade-yellow" />;
      default:
        return <Briefcase className="w-6 h-6 text-arcade-yellow" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative border-b-2 border-arcade-border bg-arcade-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-arcade-yellow text-black font-pixel text-xs font-bold rounded-full border border-black shadow-[2px_2px_0px_#000000]">
              <Briefcase className="w-3.5 h-3.5 fill-black" />
              <span>05 // SPECIALS & CAPABILITIES</span>
            </div>
            <h2 className="font-pixel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              WHAT I CAN <span className="text-arcade-yellow">BUILD FOR YOU</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-xl font-normal">
              High-impact digital services designed to turn complex business requirements into fast, modern, and memorable web products.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-pixel font-bold text-arcade-yellow hover:underline"
          >
            <span>HAVE A CUSTOM PROJECT? LET'S TALK</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl p-6 sm:p-8 bg-arcade-card border-2 border-arcade-border hover:border-arcade-yellow transition-all duration-300 flex flex-col justify-between shadow-brutalist-card relative overflow-hidden group"
            >
              <div className="space-y-5 z-10">
                {/* Service Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-surface-950 border border-arcade-border group-hover:border-arcade-yellow transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="font-pixel text-3xl font-black text-text-muted/40 group-hover:text-arcade-yellow transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Service Title & Tagline */}
                <div>
                  <div className="text-xs font-pixel uppercase tracking-wider text-arcade-yellow mb-1">
                    {service.tagline}
                  </div>
                  <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-white group-hover:text-arcade-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Features Pill List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-arcade-border">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-arcade-yellow shrink-0" />
                      <span className="font-mono text-[11px]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card Footer CTA */}
              <div className="mt-8 pt-4 border-t border-arcade-border flex items-center justify-between z-10">
                <span className="text-xs font-mono text-text-muted">Turnaround: 1–3 Weeks</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-pixel font-bold text-white group-hover:text-arcade-yellow transition-colors"
                >
                  <span>INQUIRE NOW</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
