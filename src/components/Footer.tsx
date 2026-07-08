import React from 'react';
import { ArrowUp, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-matte-black border-t border-zinc-900 pt-24 pb-12 overflow-hidden">
      {/* Editorial Grid Backdrop overlay */}
      <div className="absolute inset-0 editorial-grid-bg opacity-5 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand/Description Column (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-accent-red text-white font-extrabold text-xs rounded-lg mr-3 shadow-[0_4px_12px_rgba(229,57,53,0.3)]">
                SM
              </span>
              <span className="font-display font-black text-lg tracking-tight text-white uppercase">
                Shebin Mathew
              </span>
            </div>
            <p className="mt-2.5 font-display text-[10px] font-black uppercase tracking-[0.2em] text-accent-red">
              Aspiring Software Engineer
            </p>
            <p className="mt-4 font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-sm">
              Building practical software solutions while continuously learning modern technologies through hands-on projects and real-world experience.
            </p>
          </div>

          {/* Quick Links Column (2 columns) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="font-display text-[10px] font-black uppercase tracking-[0.2em] text-white mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-xs font-semibold text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors duration-300">Journey</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors duration-300">Certifications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect Column (2 columns) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="font-display text-[10px] font-black uppercase tracking-[0.2em] text-white mb-5">
              Connect
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-xs font-semibold text-zinc-400">
              <li>
                <a 
                  href="https://github.com/mathewshebin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  GitHub <ExternalLink size={10} className="text-zinc-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/shebinmathew/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  LinkedIn <ExternalLink size={10} className="text-zinc-600" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:shebinmathew02@gmail.com" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-email-modal'));
                  }}
                  className="hover:text-white transition-colors duration-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href={ASSETS.resume} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors duration-300 flex items-center gap-1"
                >
                  Resume <ExternalLink size={10} className="text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Availability Column (3 columns) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h3 className="font-display text-[10px] font-black uppercase tracking-[0.2em] text-white mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-xs text-zinc-400 mb-6 w-full">
              <li className="flex items-center gap-2">
                <MapPin size={12} className="text-accent-red shrink-0" />
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-accent-red shrink-0" />
                <a 
                  href="mailto:shebinmathew02@gmail.com" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-email-modal'));
                  }}
                  className="hover:text-white transition-colors duration-300 select-all"
                >
                  shebinmathew02@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-accent-red shrink-0" />
                <a href="tel:+917559849946" className="hover:text-white transition-colors duration-300">
                  +91 7559849946
                </a>
              </li>
            </ul>

            <h3 className="font-display text-[10px] font-black uppercase tracking-[0.2em] text-white mb-3">
              Availability
            </h3>
            <div className="flex flex-col gap-2 font-sans text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-semibold text-zinc-200">Open to Roles:</span>
              </div>
              <ul className="flex flex-col gap-1 text-[11px] text-zinc-500 list-disc pl-4 font-medium leading-tight">
                <li>Software Engineer</li>
                <li>Frontend Developer</li>
                <li>Full Stack Developer Internship</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-zinc-900" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 text-center sm:text-left">
            <span>&copy; {currentYear} Shebin Mathew.</span>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <span>Designed & Developed by Shebin Mathew.</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Scroll Back to Top Button */}
            <button 
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all duration-300"
              aria-label="Scroll to top of the page"
            >
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest leading-none">Scroll to Top</span>
              <ArrowUp size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Tech Stack Indicators */}
        <div className="mt-6 flex justify-center md:justify-start">
          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            Built using React // TypeScript // Tailwind CSS // Vite
          </p>
        </div>

      </div>
    </footer>
  );
};
