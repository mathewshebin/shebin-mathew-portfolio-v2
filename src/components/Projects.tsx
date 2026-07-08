import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X, AlertCircle, CheckCircle2, Award, Lightbulb, ShieldAlert } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  github: string;
  live: string;
  challenges: string;
  whatILearned: string;
  futureImprovements: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'delegateme',
      title: 'DelegateMe Website',
      tagline: 'Static informational portal and workflow integration for an operational services firm.',
      overview: 'A clean, B2B services landing page designed to display operations support and client coordination pathways. Assisted the DelegateMe team in maintaining the site, updating details, and organizing assets for a brand redesign.',
      problem: 'The business required a fast, highly accessible web presence to explain its services, requiring simple forms, clean layouts, and cross-device consistency without adding unnecessary operational tech debt.',
      solution: 'Assisted in layout adjustments, HTML validation, copy refinement, and custom CSS debugging using a mobile-first grid structure.',
      features: [
        'Responsive operational services display grid',
        'Validated contact inquiry form',
        'Accessible navigation and anchor scroll triggers',
        'Cross-device layout testing (mobile, tablet, desktop)'
      ],
      techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/mathewshebin',
      live: 'https://www.delegateme.in/',
      challenges: 'Resolving layout responsiveness conflicts on older mobile browsers and aligning legacy CSS files without breaking existing structures.',
      whatILearned: 'Gained hands-on experience supporting a live business website, collaborating with stakeholders, and debugging web layouts in a production environment.',
      futureImprovements: 'Convert the informational layout into a React SPA to support dynamic user navigation and transitions.'
    },
    {
      id: 'foodmuch',
      title: 'FoodMuch Website',
      tagline: 'Lightweight mobile-first restaurant catalog layout built during developer training.',
      overview: 'A clean, responsive single-page web template showcasing an online food catalog. Built as an early developer project during the NxtWave CCBP 4.0 program.',
      problem: 'Catalog pages often load slowly on mobile connections due to heavy image packages, leading to poor user retention and high bounce rates.',
      solution: 'Developed a lightweight frontpage menu template, utilizing optimized CSS columns and vector icons to improve initial page load speeds.',
      features: [
        'Fluid image galleries with custom hover states',
        'Direct WhatsApp order link integrations',
        'Bootstrap column scaling across breakpoints',
        'Structured services showcase sections'
      ],
      techStack: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/mathewshebin',
      live: 'https://github.com/mathewshebin',
      challenges: 'Configuring custom overlays on menu items and ensuring text overlays remained fully readable on small screens.',
      whatILearned: 'Mastered the grid system, custom style sheets, utility classes, and mobile-first design priorities.',
      futureImprovements: 'Integrate dynamic item selections, a local storage shopping cart, and order checkout forms.'
    },
    {
      id: 'routine',
      title: 'Routine Planner',
      tagline: 'Minimalist daily task organizer focused on workspace clarity.',
      overview: 'A clean daily routine task manager designed to help developers track their schedule without dashboard distractions.',
      problem: 'Standard productivity planners are cluttered with complex charts and settings, which can overwhelm users trying to track simple lists.',
      solution: 'Created a simple routine board focusing on status checkboxes, category tags, task counters, and generous spacing.',
      features: [
        'Simple checkbox task completions',
        'Priority category filters (Low, Medium, High)',
        'Dynamic active task counter badge',
        'State persistence via client-side storage'
      ],
      techStack: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/mathewshebin/Study-tracker',
      live: 'https://github.com/mathewshebin/Study-tracker',
      challenges: 'Managing task state synchronization across filters, ensuring tasks remained editable without losing references.',
      whatILearned: 'Deepened understanding of React state (useState), component prop structures, array methods, and local storage integration.',
      futureImprovements: 'Add drag-and-drop category sorting and support custom color-coded schedule tags.'
    },
    {
      id: 'books',
      title: 'Books Catalog App',
      tagline: 'Client-side book indexing database with fast search query matching.',
      overview: 'A lightweight search catalog interface designed to log and query collections of books instantly.',
      problem: 'Traditional database search forms experience input delay when parsing large datasets, leading to a lagging user interface.',
      solution: 'Programmed a client-side catalog manager that handles dynamic queries and filters locally, guaranteeing responses under 10ms.',
      features: [
        'Instant client-side title and author searching',
        'Read later collection lists builder',
        'Category filters and sorting metrics',
        'Responsive grid and list toggling'
      ],
      techStack: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      github: 'https://github.com/mathewshebin',
      live: 'https://github.com/mathewshebin',
      challenges: 'Implementing concurrent search filters for multiple object fields (title, author, genre) without freezing input elements.',
      whatILearned: 'Gained solid practice in vanilla JavaScript DOM manipulation, search algorithms, array filtering, and key-value client storage.',
      futureImprovements: 'Integrate the Google Books API for dynamic book cover lookups and description cards.'
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      tagline: 'Premium, editorial-style developer portfolio built from scratch.',
      overview: 'A premium developer portfolio designed as an editorial magazine spread. Rebuilt using React + TypeScript to demonstrate layout skills, accessibility, and dynamic API integrations.',
      problem: 'Most developer portfolios use generic templates, failing to show layout customization, semantic accessibility, and clean branding.',
      solution: 'Designed and built a clean portfolio utilizing a matte black theme, minimal line grids, and smooth Framer Motion transitions.',
      features: [
        'CSS-first custom variables in Tailwind CSS v4',
        'Dynamic client-side GitHub API integration',
        'Fully accessible keyboard focus states and outlines',
        'Semantic HTML tags configured for maximum SEO indices'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/mathewshebin',
      live: 'https://github.com/mathewshebin',
      challenges: 'Handling client-side fetch rates and loading states for GitHub repositories and events gracefully during network failures.',
      whatILearned: 'Learned responsive layout structures in React, Framer Motion viewport triggers, and type safety configuration in TypeScript.',
      futureImprovements: 'Add a blog module powered by markdown files to document software studies.'
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section
      id="products"
      className="relative py-24 md:py-36 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-20">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            PRACTICAL WORK
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl uppercase">
            Featured Projects
          </h2>
        </div>

        {/* Project Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-950/20 hover:border-zinc-700 hover:bg-zinc-900/40 p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Radial red glow overlay on card hover */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-red/5 blur-3xl group-hover:bg-accent-red/10 transition-all duration-300 pointer-events-none" />

              <div>
                <span className="font-display text-[10px] font-black uppercase tracking-widest text-accent-red">
                  {project.techStack.join(' // ')}
                </span>

                <h3 className="mt-6 font-display text-2xl font-black text-white tracking-tight leading-tight group-hover:text-accent-red transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-3 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-300">
                <span>View Case Study</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-[750px] h-full bg-zinc-950 border-l border-zinc-900 p-8 md:p-12 overflow-y-auto relative rounded-2xl md:rounded-r-none md:rounded-l-2xl shadow-2xl flex flex-col justify-between"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="Close case study details"
              >
                <X size={18} />
              </button>

              <div className="flex-1 pr-2">
                <span className="font-display text-[10px] font-black uppercase tracking-widest text-accent-red">
                  PRODUCT CASE STUDY
                </span>

                <h3 className="mt-4 font-display text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase leading-none">
                  {selectedProject.title}
                </h3>

                {/* Overview Box */}
                <p className="mt-4 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900/30 border border-zinc-900 p-4 rounded-xl">
                  {selectedProject.overview}
                </p>

                {/* Tech Stack Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Problem & Solution Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-zinc-900 pt-6">
                  <div>
                    <div className="flex items-center gap-2 text-zinc-300 mb-2">
                      <AlertCircle size={15} className="text-accent-red shrink-0" />
                      <span className="font-display text-[11px] font-black uppercase tracking-wider">The Problem</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-zinc-300 mb-2">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span className="font-display text-[11px] font-black uppercase tracking-wider">The Solution</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-6 border-t border-zinc-900 pt-6">
                  <h4 className="font-display text-xs font-black uppercase tracking-widest text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges */}
                <div className="mt-6 border-t border-zinc-900 pt-6">
                  <div className="flex items-center gap-2 text-zinc-300 mb-2">
                    <ShieldAlert size={15} className="text-accent-red shrink-0" />
                    <h4 className="font-display text-xs font-black uppercase tracking-widest text-white">
                      Technical Challenges
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* What I Learned */}
                <div className="mt-6 border-t border-zinc-900 pt-6">
                  <div className="flex items-center gap-2 text-zinc-300 mb-2">
                    <Award size={15} className="text-accent-red shrink-0" />
                    <h4 className="font-display text-xs font-black uppercase tracking-widest text-white">
                      What I Learned
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {selectedProject.whatILearned}
                  </p>
                </div>

                {/* Future Improvements */}
                <div className="mt-6 border-t border-zinc-900 pt-6">
                  <div className="flex items-center gap-2 text-zinc-300 mb-2">
                    <Lightbulb size={15} className="text-accent-red shrink-0" />
                    <h4 className="font-display text-xs font-black uppercase tracking-widest text-white">
                      Future Roadmap
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {selectedProject.futureImprovements}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 pt-6 border-t border-zinc-900 flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-accent-red text-black hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
