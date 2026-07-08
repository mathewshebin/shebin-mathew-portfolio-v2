import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Hammer, Cpu, Lightbulb } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Monitor size={20} />,
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript (Learning)', 'React (Learning)', 'Responsive UI (Learning)']
    },
    {
      title: 'Backend & Database',
      icon: <Server size={20} />,
      skills: ['SQL', 'Python (Learning)']
    },
    {
      title: 'Developer Tools',
      icon: <Hammer size={20} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Vercel', 'Netlify']
    },
    {
      title: 'UI / Web Design',
      icon: <Lightbulb size={20} />,
      skills: ['Responsive UI', 'Mobile First Design', 'Website Redesign', 'UI Debugging', 'User Experience Basics']
    },
    {
      title: 'AI Assisted Development',
      icon: <Cpu size={20} />,
      skills: ['Prompt Engineering', 'AI-assisted Dev Workflows', 'AI Productivity Tools', 'AI Problem Solving']
    },
    {
      title: 'Professional & Operations',
      icon: <Database size={20} />,
      skills: [
        'Problem Solving', 'Quick Learner', 'Analytical Thinking', 'Adaptability',
        'Communication', 'Team Collaboration', 'Time Management', 'Attention to Detail',
        'Documentation', 'Workflow Optimization', 'Process Improvement', 'Operations Coordination',
        'Digital Productivity'
      ]
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
      id="skills" 
      className="relative py-24 md:py-36 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            CORE CAPABILITIES
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl uppercase">
            Technical Skills
          </h2>
        </div>

        {/* Skills Category Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-950/20 hover:border-accent-red/20 transition-all duration-300 flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-accent-red group-hover:border-accent-red/20 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg border border-zinc-900 hover:border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white transition-all duration-300 font-sans text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
