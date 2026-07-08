import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, X } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { GitHub } from './components/GitHub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsEmailModalOpen(true);
      setCopied(false);
    };
    window.addEventListener('open-email-modal', handleOpenModal);
    return () => window.removeEventListener('open-email-modal', handleOpenModal);
  }, []);

  const handleCopyEmail = () => {
    const email = 'shebinmathew02@gmail.com';
    const executeCopy = () => {
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setTimeout(() => {
        setIsEmailModalOpen(false);
        setCopied(false);
      }, 600);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(executeCopy)
        .catch(() => fallbackCopy(email, executeCopy));
    } else {
      fallbackCopy(email, executeCopy);
    }
  };

  const fallbackCopy = (text: string, callback: () => void) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      callback();
    } catch (err) {
      console.error('Failed to copy email address: ', err);
    }
    document.body.removeChild(textArea);
  };

  const mailtoUrl = `mailto:shebinmathew02@gmail.com?subject=Portfolio%20Enquiry&body=Hello%20Shebin%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.%0A%0ARegards%2C`;

  return (
    <div className="relative bg-matte-black text-white selection:bg-accent-red selection:text-white font-sans min-h-screen">
      {/* Dynamic Header */}
      <Header />

      {/* Main Layout Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Journey Timeline */}
        <Journey />

        {/* Section 4: Experience */}
        <Experience />

        {/* Section 5: Featured Products */}
        <Projects />

        {/* Section 6: Skills */}
        <Skills />

        {/* Section 7: Education */}
        <Education />

        {/* Section 8: Certifications */}
        <Certifications />

        {/* Section 9: GitHub Integration */}
        <GitHub />

        {/* Section 10: Contact Form */}
        <Contact />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Email Connect Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEmailModalOpen(false)}
            />

            {/* Modal Box */}
            <motion.div
              className="relative bg-zinc-950 border border-zinc-800/80 p-6 sm:p-8 rounded-2xl max-w-sm w-full shadow-2xl z-10 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsEmailModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-900 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col items-center text-center">
                {/* Header Icon */}
                <div className="w-12 h-12 rounded-full bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red mb-4">
                  <Mail size={22} />
                </div>

                {/* Typography */}
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-white">
                  Get In Touch
                </h3>
                <p className="mt-2 font-sans text-xs text-zinc-400 max-w-[260px] leading-relaxed">
                  Choose how you would like to connect with Shebin. Copy the email address or launch your mail app.
                </p>

                {/* Email Address Display Box */}
                <div className="mt-6 w-full p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-between gap-3 select-all">
                  <span className="font-mono text-[11px] sm:text-xs text-zinc-300 font-medium">
                    shebinmathew02@gmail.com
                  </span>
                  <div className="text-zinc-500 hover:text-white shrink-0">
                    <Mail size={14} />
                  </div>
                </div>

                {/* Actions Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3.5 w-full">
                  {/* Copy Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white px-4 py-3 rounded-xl font-sans text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_12px_rgba(229,57,53,0.2)]"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  {/* Open App Button */}
                  <a
                    href={mailtoUrl}
                    onClick={() => setIsEmailModalOpen(false)}
                    className="flex items-center justify-center gap-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900/80 text-zinc-300 hover:text-white px-4 py-3 rounded-xl font-sans text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02]"
                  >
                    <ExternalLink size={12} className="text-accent-red" />
                    <span>Open App</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Copy Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-zinc-950 border border-zinc-800 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Check size={12} />
            </div>
            <span className="font-sans text-[10px] font-black uppercase tracking-widest text-zinc-200">
              Email copied successfully.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
