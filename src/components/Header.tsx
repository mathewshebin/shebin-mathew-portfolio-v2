import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'journey' },
    { label: 'Experience', id: 'experience' },
    { label: 'Products', id: 'products' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracking
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 glassmorphism border-b border-white/5 shadow-2xl' 
          : 'py-8 bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center" aria-label="Main Navigation">
        {/* Logo */}
        <a 
          href="#home" 
          className="group flex items-center font-display font-black text-xl tracking-tight text-white"
          aria-label="Shebin Mathew Portfolio Home"
        >
          <span className="w-8 h-8 flex items-center justify-center bg-accent-red text-white font-extrabold text-sm rounded-lg mr-2.5 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105 shadow-[0_4px_12px_rgba(229,57,53,0.3)]">
            SM
          </span>
          <span className="hidden sm:inline-block font-semibold">Shebin Mathew</span>
        </a>

        {/* Menu Items */}
        <ul className="hidden md:flex items-center gap-8" role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <a 
                href={`#${item.id}`} 
                className={`relative font-sans text-xs font-semibold uppercase tracking-widest py-1 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-accent-red' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                role="menuitem"
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-accent-red transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Header Actions */}
        <div className="flex items-center gap-4">

          {/* Connect Button */}
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-accent-red text-black hover:text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-500 hover:-translate-y-0.5 shadow-lg"
            aria-label="Contact Shebin Mathew"
          >
            <span>Connect</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>
    </header>
  );
};
