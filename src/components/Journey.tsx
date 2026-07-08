import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Layers, Briefcase, Globe, CheckCircle2 } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Journey: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: 'Vocational',
      title: 'Vocational Higher Secondary',
      description: 'Completed higher secondary education in Electronics & Communication Technology, establishing a foundational understanding of hardware and electronic systems.',
      icon: <Compass size={18} />
    },
    {
      year: 'Engineering',
      title: 'Bachelor of Engineering',
      description: 'Graduated in Electronics & Communication Engineering from Anna University, developing strong analytical thinking, logical foundations, and mathematical problem-solving skills.',
      icon: <BookOpen size={18} />
    },
    {
      year: 'NxtWave',
      title: 'Joined NxtWave CCBP 4.0',
      description: 'Enrolled in full stack developer training to transition into software engineering, building comprehensive coding foundations in React, SQL, and Python.',
      icon: <Layers size={18} />
    },
    {
      year: 'Projects',
      title: 'Built Practical Projects',
      description: 'Built standalone applications (Routine Planner, Books Catalog, FoodMuch) focused on practical utility, clean code, and database logic.',
      icon: <Globe size={18} />
    },
    {
      year: 'DelegateMe',
      title: 'Joined DelegateMe',
      description: 'Appointed as Operations & Personal Assistant, supporting day-to-day administrative operations, documentation, and website management.',
      icon: <Briefcase size={18} />
    },
    {
      year: 'Goal',
      title: 'Aspiring Full Stack Developer',
      description: 'Leveraging structural logical skills and operations experience to prepare for internships and junior software engineering roles.',
      icon: <CheckCircle2 size={18} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: 'easeInOut' as const }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'backOut' as const }
    }
  };

  const cardVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const cardRightVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      id="journey" 
      className="relative py-24 md:py-36 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-xl mx-auto">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            MY ROADMAP
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl uppercase">
            Journey Timeline
          </h2>
          <p className="mt-4 font-sans text-sm text-zinc-400">
            A progression from academic engineering foundations to business workflow transformation and full-stack software development.
          </p>
        </div>

        {/* Timeline Structure */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical central path line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[1px] bg-gradient-to-b from-accent-red via-zinc-800 to-zinc-900 -translate-x-1/2 z-0"
            variants={lineVariants}
          />

          {milestones.map((node, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 md:mb-16 last:mb-0"
              >
                
                {/* Node Symbol (centered on desktop, left on mobile) */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center -translate-x-1/2 z-10 text-zinc-400 group cursor-pointer hover:border-accent-red hover:text-accent-red transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  variants={nodeVariants}
                  whileHover={{ scale: 1.15 }}
                >
                  <div className="absolute inset-0.5 rounded-full bg-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {node.icon}
                </motion.div>

                {/* Left Side Container (Active on even index for desktop, empty on odd) */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0 order-2 md:order-1">
                  {isEven ? (
                    <motion.div 
                      className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300"
                      variants={cardVariants}
                    >
                      <span className="font-display text-xs font-black text-accent-red tracking-wider uppercase">
                        {node.year}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-white tracking-tight">
                        {node.title}
                      </h3>
                      <p className="mt-2 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {node.description}
                      </p>
                    </motion.div>
                  ) : (
                    // Empty spacer on desktop to balance layout
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Right Side Container (Active on odd index for desktop, mobile always right) */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0 order-2 md:order-2 mt-2 md:mt-0">
                  {!isEven ? (
                    <motion.div 
                      className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300"
                      variants={cardRightVariants}
                    >
                      <span className="font-display text-xs font-black text-accent-red tracking-wider uppercase">
                        {node.year}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-white tracking-tight">
                        {node.title}
                      </h3>
                      <p className="mt-2 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {node.description}
                      </p>
                    </motion.div>
                  ) : (
                    // Empty spacer on desktop to balance layout
                    <div className="hidden md:block" />
                  )}
                </div>

              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
