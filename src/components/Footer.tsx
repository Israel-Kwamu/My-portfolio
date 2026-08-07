import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NexarisLogo } from './NexarisLogo';

interface FooterProps {
  onPageChange?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Nexaris Labs', href: '#nexaris-labs', id: 'nexaris-labs' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <NexarisLogo size="lg" />
            <p className="text-xs text-slate-550 leading-relaxed max-w-sm">
              Building scalable software solutions and transforming ideas into impactful digital products. Founder & CEO at Nexaris Labs.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <p className="text-xs font-mono text-slate-900 font-bold uppercase tracking-wider mb-4">
              Navigation Map
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (onPageChange) {
                      e.preventDefault();
                      onPageChange(link.id);
                    }
                  }}
                  className="text-slate-600 hover:text-blue-600 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back To Top Button */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-350 transition-all flex items-center gap-2 text-xs font-mono group shadow-sm"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-4 h-4 text-blue-600 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 Kwamu Israel. Founder & CEO, Nexaris Labs. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with Clean Minimalism & Precision</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
