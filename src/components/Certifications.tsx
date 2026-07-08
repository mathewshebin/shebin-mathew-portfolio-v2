import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
  category: 'Artificial Intelligence' | 'Software Development' | 'Electronics' | 'Design';
}

export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    // Artificial Intelligence
    {
      name: 'AI for Techies(PYTHON)',
      issuer: 'NxtWave',
      date: 'Oct 2024',
      link: 'https://certx.in/certificate/24529ebe-94a8-4d06-9c76-2b3957e1c588738860',
      category: 'Artificial Intelligence'
    },
    {
      name: 'MCP Mega Workshop',
      issuer: 'NxtWave',
      date: 'Nov 2024',
      link: 'https://cdn1.ccbp.in/misc/workshop-acad-mcp-mega-workshop-participation/JK5FRD1LFN.png',
      category: 'Artificial Intelligence'
    },
    {
      name: 'SQL with AI',
      issuer: 'NxtWave',
      date: 'Sep 2024',
      link: 'https://certx.in/certificate/a3ae0c0d-1f62-4e3f-bede-17ff37c364a7559311',
      category: 'Artificial Intelligence'
    },
    // Software Development
    {
      name: 'Build Your Own Static Website',
      issuer: 'NxtWave',
      date: 'Jan 2024',
      link: 'https://certificates.ccbp.in/academy/static-website?id=UVOATHISIH',
      category: 'Software Development'
    },
    {
      name: 'Build Your Own Responsive Website',
      issuer: 'NxtWave',
      date: 'Mar 2024',
      link: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=VOSRACVSYV',
      category: 'Software Development'
    },
    // Electronics
    {
      name: 'ADAS ECU Simulation and Testing',
      issuer: 'University / Training',
      date: 'Jun 2023',
      link: 'https://www.linkedin.com/in/shebinmathew/overlay/Certifications/1761152439/treasury/?profileId=ACoAAEmanDEBBXf3JKTXtRmvihILoDsYJhjVWF0',
      category: 'Electronics'
    },
    {
      name: '4G/5G Communication Networks',
      issuer: 'University / Training',
      date: 'Apr 2023',
      link: 'https://www.linkedin.com/in/shebinmathew/overlay/Certifications/1761483696/treasury/?profileId=ACoAAEmanDEBBXf3JKTXtRmvihILoDsYJhjVWF0',
      category: 'Electronics'
    },
    // Design
    {
      name: 'UX Kickstarter Workshop',
      issuer: 'GrowthSchool / Training',
      date: 'Aug 2023',
      link: 'https://learners.growthschool.io/certificate/139cc9b6-ce00-4de6-995e-97f7522bf17e',
      category: 'Design'
    }
  ];

  const categories: Certification['category'][] = [
    'Artificial Intelligence',
    'Software Development',
    'Electronics',
    'Design'
  ];

  return (
    <section
      id="certifications"
      className="relative py-24 bg-matte-black overflow-hidden border-t border-zinc-900"
    >
      <div className="absolute inset-0 editorial-grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-20">
          <span className="font-display text-xs font-black uppercase tracking-[0.3em] text-accent-red">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="mt-4 font-display font-black leading-none tracking-tighter text-white text-4xl sm:text-5xl uppercase">
            Certifications
          </h2>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {categories.map((category, catIndex) => {
            const list = certifications.filter(c => c.category === category);
            return (
              <motion.div
                key={category}
                className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm flex flex-col gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="font-display text-sm font-black text-white uppercase tracking-widest border-b border-zinc-900 pb-3">
                  {category}
                </h3>

                <div className="flex flex-col gap-4">
                  {list.map((cert, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-xl border border-zinc-900 bg-zinc-950 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-300 flex justify-between items-start gap-4"
                    >
                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-accent-red transition-colors duration-300">
                          <ShieldCheck size={16} />
                        </div>
                        <div>
                          <h4 className="font-display text-sm font-bold text-white tracking-tight leading-snug">
                            {cert.name}
                          </h4>
                          <p className="mt-1 font-sans text-[11px] text-zinc-500 font-semibold uppercase tracking-wider">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <div className="flex items-center gap-1 text-[10px] font-sans text-zinc-400 font-semibold uppercase tracking-wider">
                          <Calendar size={12} className="text-zinc-600 shrink-0" />
                          <span>{cert.date}</span>
                        </div>

                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-sans text-[10px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors duration-300 mt-1.5"
                            aria-label={`View credential for ${cert.name}`}
                          >
                            <span>View Credential</span>
                            <ArrowUpRight size={10} className="text-accent-red shrink-0" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
