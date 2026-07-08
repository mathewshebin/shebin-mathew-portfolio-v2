import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ASSETS } from '../constants/assets';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-matte-black"
    >
      {/* Editorial Grid Backdrop overlay */}
      <div className="absolute inset-0 editorial-grid-bg opacity-30 pointer-events-none" />
      
      {/* Ambient Red Glow Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(229,57,53,0.15)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative max-w-[1440px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Typographic Layout (5 columns) */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red px-3 py-1 border border-accent-red/20 rounded bg-accent-red/5">
              Aspiring Full Stack Developer
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="mt-6 font-display font-black leading-[0.85] tracking-tighter text-white text-[12vw] sm:text-[7vw] lg:text-[5.5vw] uppercase"
          >
            Shebin<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red to-red-500 drop-shadow-[0_0_30px_rgba(229,57,53,0.2)]">Mathew</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mt-4 font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-300"
          >
            Aspiring Full Stack Developer
          </motion.p>

          <motion.p 
            variants={itemVariants} 
            className="mt-6 font-sans text-sm sm:text-base leading-relaxed text-zinc-400 max-w-sm"
          >
            Building practical web applications through continuous learning, real-world projects and modern AI-assisted development.
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4 items-center">
            <a 
              href="#products" 
              className="px-8 py-3.5 rounded-full bg-accent-red hover:bg-accent-red-hover text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(229,57,53,0.35)]"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full border border-zinc-800 hover:border-zinc-500 bg-zinc-950/20 hover:bg-zinc-900/40 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links & Anchor */}
          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
            <a 
              href="https://github.com/mathewshebin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-accent-red transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shebinmathew/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-accent-red transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="mailto:shebinmathew02@gmail.com" 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-email-modal'));
              }}
              className="text-zinc-500 hover:text-accent-red transition-colors duration-300"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Magazine Portrait Frame (7 columns) */}
        <motion.div 
          className="lg:col-span-7 flex justify-center items-center relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Subtle outer borders like an editorial layout */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          
          <motion.div 
            className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm shadow-2xl animate-float"
            variants={imageVariants}
          >
            <img 
              src={ASSETS.heroPhoto} 
              alt="Shebin Mathew" 
              className="w-full h-full object-cover object-top filter grayscale contrast-125 transition-all duration-500" 
            />
            
            {/* Visual overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
          </motion.div>
        </motion.div>

      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10 opacity-60">
        <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">SCROLL DOWN</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
};
