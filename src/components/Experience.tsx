import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, RefreshCw, Layers, Layout, Users, TrendingUp } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Experience: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'Website Management',
      description: 'Maintains company web properties, updating copy, testing form responsiveness, and managing content deployments.',
      icon: <Layout size={18} />
    },
    {
      title: 'Website Redesign Support',
      description: 'Contributed feedback, layout assets, and user interface recommendations during the brand redesign planning cycles.',
      icon: <Layers size={18} />
    },
    {
      title: 'Workflow Improvements',
      description: 'Helped implement Google Workspace logic and automations to remove task verification lags between teams.',
      icon: <RefreshCw size={18} />
    },
    {
      title: 'Business Productivity',
      description: 'Organized administrative templates, custom spreadsheets, and documentation guidelines to speed up report compilation.',
      icon: <Zap size={18} />
    },
    {
      title: 'Client Coordination',
      description: 'Manages incoming inquiries, supports onboarding workflows, and maintains clear communications with business clients.',
      icon: <Users size={18} />
    },
    {
      title: 'Operations Support & Docs',
      description: 'Coordinates scheduling, operational logs, meeting transcripts, and builds user-facing manuals for services.',
      icon: <TrendingUp size={18} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      id="experience" 
      className="relative py-24 md:py-36 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            PROFESSIONAL ROLES
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl uppercase">
            Work Experience
          </h2>
        </div>

        {/* Experience Core Layout: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (4 columns) - Company Info Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm">
              <span className="font-display text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                2026 - Present
              </span>
              <h3 className="mt-4 font-display text-3xl font-black text-white tracking-tight">
                DelegateMe
              </h3>
              <p className="mt-2 font-display text-sm font-semibold text-accent-red tracking-wide uppercase">
                Operations &amp; Personal Assistant
              </p>
              
              <p className="mt-6 font-sans text-sm text-zinc-400 leading-relaxed">
                In this hybrid administrative role, Shebin assists the leadership team with day-to-day operations, document compilation, digital layout maintenance, and client relations.
              </p>
              
              <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col gap-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-semibold uppercase">Focus Areas</span>
                  <span className="text-white font-bold">Operations &amp; Digital Docs</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-semibold uppercase">Employment</span>
                  <span className="text-white font-bold">Part-Time</span>
                </div>
              </div>

              <a 
                href="https://github.com/mathewshebin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 group w-full inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-zinc-800 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                <span>View Contribution Code</span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column (8 columns) - Key Achievements Showcase */}
          <motion.div 
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {achievements.map((item, index) => (
              <motion.div 
                key={index} 
                className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-950/20 hover:bg-zinc-900/40 hover:border-accent-red/40 transition-all duration-300 flex flex-col justify-between"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 group-hover:bg-accent-red/10 border border-zinc-800 group-hover:border-accent-red/20 flex items-center justify-center text-zinc-400 group-hover:text-accent-red transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="mt-6 font-display text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-2 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
