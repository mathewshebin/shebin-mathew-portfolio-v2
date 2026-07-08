import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants/assets';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-36 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            WHO I AM
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl uppercase max-w-2xl">
            Building Products. Solving Problems. Growing Every Day.
          </h2>
        </div>

        {/* 2-Column Editorial Spread */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column (5 columns) - Editorial Wireframe & Statistics */}
          <motion.div className="lg:col-span-5 flex flex-col gap-8" variants={itemVariants}>
            {/* Minimalist Camera Frame Portrait Placeholder */}
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm">
              <img 
                src={ASSETS.aboutPhoto} 
                alt="Shebin Mathew Bio" 
                className="w-full h-full object-cover object-top filter grayscale contrast-125 transition-all duration-500" 
              />
              <div className="absolute bottom-6 left-6 font-display text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                SHEBIN MATHEW // DEV PROFILE
              </div>
            </div>
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 border-t border-zinc-900 pt-8">
              <div>
                <span className="font-display text-xs font-bold text-zinc-500 uppercase tracking-widest">Training Program</span>
                <p className="mt-1 font-display text-lg font-black text-white">NxtWave CCBP 4.0</p>
              </div>
              <div>
                <span className="font-display text-xs font-bold text-zinc-500 uppercase tracking-widest">Real-World Work</span>
                <p className="mt-1 font-display text-lg font-black text-white">DelegateMe Operations</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 columns) - Editorial Biography */}
          <motion.div className="lg:col-span-7 flex flex-col gap-6" variants={itemVariants}>
            <div className="border-l-2 border-accent-red pl-6 py-2">
              <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-normal">
                "Tutorials are guidelines, but software is only learned by building real-world solutions that impact lives."
              </p>
            </div>

            {/* Split layout: 50% NxtWave foundation, 50% Real Work */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
              
              {/* NxtWave Foundation (50%) */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xs font-extrabold text-white uppercase tracking-widest border-b border-zinc-900 pb-2">
                  01 / Engineering Foundation
                </h3>
                <p>
                  Shebin Mathew transitioned into software development after building a strong base in electronics. He holds a Vocational Higher Secondary certificate in <strong>Electronics &amp; Communication Technology</strong> and a Bachelor of Engineering in <strong>Electronics &amp; Communication Engineering</strong>.
                </p>
                <p>
                  Driven by a passion for building applications, he joined the <strong>NxtWave CCBP 4.0 program</strong>, dedicated to learning JavaScript, React, databases, and full stack fundamentals by building practical software instead of copying tutorial code.
                </p>
              </div>

              {/* Real World Work (50%) */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-xs font-extrabold text-white uppercase tracking-widest border-b border-zinc-900 pb-2">
                  02 / Real World Experience
                </h3>
                <p>
                  At <strong>DelegateMe</strong>, he works as an Operations &amp; Personal Assistant, managing daily operational tasks, document workflows, and client coordination.
                </p>
                <p>
                  He actively supports the business by suggesting workflow improvements, assisting in website updates, and contributing to website redesign support to optimize operational productivity.
                </p>
              </div>

            </div>

            <div className="mt-6 border-t border-zinc-900 pt-6">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-zinc-400">
                His goal is to transition into a Full Stack Software Engineer role, building reliable, scalable digital products that solve real-world problems.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
