import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ArrowRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ASSETS } from '../constants/assets';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        source: 'Portfolio Website'
      };

      console.log('--- Google Apps Script Integration Debug ---');
      console.log('1. Target URL:', 'https://script.google.com/macros/s/AKfycbzsHOOVm_irjjLSg2434R6hmX5wsr8EyfwsiS__qH6BMHLla3bR1NshS0kGHw7skI-_/exec');
      console.log('2. Request Method: POST');
      console.log('3. Request Header Content-Type: text/plain;charset=UTF-8');
      console.log('4. Request Body (JSON-stringified):', JSON.stringify(payload));

      const response = await fetch('https://script.google.com/macros/s/AKfycbzsHOOVm_irjjLSg2434R6hmX5wsr8EyfwsiS__qH6BMHLla3bR1NshS0kGHw7skI-_/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8'
        },
        body: JSON.stringify(payload)
      });
      
      console.log('5. Response Object:', response);
      console.log('6. Response Status:', response.status); // Will be 0 due to no-cors
      console.log('7. Response Type:', response.type); // Will be "opaque"
      console.log('---------------------------------------------');
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('--- Google Apps Script Integration Fetch Error ---');
      console.error('Error Details:', err);
      console.error('Error Message:', err?.message || err);
      console.error('--------------------------------------------------');
      setError('Failed to send message. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-36 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      {/* Ambient glowing orb in bottom right */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(229,57,53,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            CONNECT
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl uppercase">
            Let's Collaborate
          </h2>
        </div>

        {/* Contact Layout: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (5 columns) - Text & Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <p className="font-display text-2xl font-black text-white uppercase tracking-tight leading-snug">
                Have an opportunity? Let's build something exceptional.
              </p>
              
              <p className="mt-6 font-sans text-sm sm:text-base leading-relaxed text-zinc-400 max-w-sm">
                I am actively seeking software engineering positions. Reach out directly or complete the contact form to share project scopes, role details, or interview bookings.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="mt-12 flex flex-col gap-6 border-t border-zinc-900 pt-8">
              
              {/* Mail */}
              <a 
                href="mailto:shebinmathew02@gmail.com" 
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-email-modal'));
                }}
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300"
                aria-label="Send Email"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-accent-red group-hover:border-accent-red/20 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest leading-none">Email Address</p>
                  <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-tight">shebinmathew02@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/shebinmathew/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-accent-red group-hover:border-accent-red/20 transition-all duration-300">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest leading-none">LinkedIn Network</p>
                  <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-tight">linkedin.com/in/shebinmathew</p>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/mathewshebin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-accent-red group-hover:border-accent-red/20 transition-all duration-300">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest leading-none">GitHub Repositories</p>
                  <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-tight">github.com/mathewshebin</p>
                </div>
              </a>

              {/* Resume Download */}
              <a 
                href={ASSETS.resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300"
                aria-label="View Resume"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-accent-red group-hover:border-accent-red/20 transition-all duration-300">
                  <FileText className="text-accent-red group-hover:text-white" size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-widest leading-none">Curriculum Vitae</p>
                  <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-tight text-accent-red group-hover:text-white transition-colors">View Resume ↗</p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column (7 columns) - Form Showcase */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 md:p-10 rounded-2xl border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm relative overflow-hidden">
              
              {submitted ? (
                <div className="text-center py-16 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-black text-white tracking-tight uppercase">
                    Message Sent Successfully
                  </h3>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm text-zinc-400 max-w-xs mx-auto leading-relaxed">
                    Thank you. Shebin Mathew has received your message and will respond as quickly as possible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 group inline-flex items-center gap-1.5 text-xs font-bold font-sans uppercase tracking-widest text-accent-red hover:text-white transition-colors duration-300"
                  >
                    <span>Send Another Inquiry</span>
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" aria-label="Contact Form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-display text-[10px] font-black uppercase tracking-widest text-zinc-500">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="John Doe"
                        className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 text-white placeholder-zinc-600 focus:border-accent-red/50 focus:ring-2 focus:ring-accent-red/20 focus:outline-none transition-all duration-300 text-sm"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-display text-[10px] font-black uppercase tracking-widest text-zinc-500">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="john@example.com"
                        className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 text-white placeholder-zinc-600 focus:border-accent-red/50 focus:ring-2 focus:ring-accent-red/20 focus:outline-none transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-display text-[10px] font-black uppercase tracking-widest text-zinc-500">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder="Inquiry regarding Software Engineering roles"
                      className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 text-white placeholder-zinc-600 focus:border-accent-red/50 focus:ring-2 focus:ring-accent-red/20 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-display text-[10px] font-black uppercase tracking-widest text-zinc-500">
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder="Share details about your project or organizational role requirements..."
                      className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 text-white placeholder-zinc-600 focus:border-accent-red/50 focus:ring-2 focus:ring-accent-red/20 focus:outline-none transition-all duration-300 text-sm resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl border border-accent-red/20 bg-accent-red/5 text-accent-red text-xs font-sans font-bold">
                      {error}
                    </div>
                  )}

                  {/* Submit button */}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="mt-4 w-full group inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-white hover:bg-accent-red text-black hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Inquiries...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
