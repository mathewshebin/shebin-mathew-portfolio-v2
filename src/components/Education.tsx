import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  const educationList = [
    {
      institution: 'NxtWave CCBP 4.0 Program',
      degree: 'Full Stack Development',
      duration: '2023 - Present',
      details: 'Comprehensive developer training covering React, Python, databases, and responsive UI fundamentals. Focuses on building responsive user interfaces, modular components, and database queries.',
      highlighted: true,
      icon: <Award size={20} className="text-accent-red" />
    },
    {
      institution: 'Anna University',
      degree: 'Bachelor of Engineering in Electronics & Communication Engineering',
      duration: '2019 - 2023',
      details: 'Studied electronics, circuit designs, telecommunications, microprocessors, signal processing, and analytical logical fundamentals.',
      highlighted: false,
      icon: <GraduationCap size={20} className="text-zinc-500" />
    }
  ];

  return (
    <section 
      id="education" 
      className="relative py-24 md:py-32 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl uppercase">
            Education
          </h2>
        </div>

        {/* Education List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto lg:mx-0">
          {educationList.map((item, index) => (
            <motion.div 
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                item.highlighted 
                  ? 'border-accent-red/20 bg-accent-red/[0.01] hover:border-accent-red/40' 
                  : 'border-zinc-800 bg-zinc-950/20 hover:border-zinc-700'
              }`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Top Accent Gradient Border for Highlighted Entry */}
              {item.highlighted && (
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-red to-transparent rounded-t-2xl" />
              )}

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="font-display text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                    {item.duration}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-black text-white tracking-tight leading-snug">
                    {item.institution}
                  </h3>
                  <p className="mt-1 font-display text-sm font-semibold text-accent-red tracking-wide uppercase">
                    {item.degree}
                  </p>
                  <p className="mt-4 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
