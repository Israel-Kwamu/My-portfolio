import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { NexarisLogo } from './NexarisLogo';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal?: () => void;
  activeSection: string;
  onPageChange: (pageId: string) => void;
  viewMode?: 'pages' | 'all';
  onToggleViewMode?: (mode: 'pages' | 'all') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResume, 
  onOpenTerminal, 
  activeSection,
  onPageChange,
  viewMode,
  onToggleViewMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Nexaris Labs', href: '#nexaris-labs', id: 'nexaris-labs', highlight: true },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onPageChange(id);
    if (viewMode === 'all') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="group flex items-center gap-2 focus:outline-none"
        >
          <NexarisLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-slate-900 font-bold' 
                    : link.highlight 
                    ? 'text-blue-600 hover:text-slate-900 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.highlight && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5 animate-pulse"></span>
                )}
                {link.name}

                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-600 rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-all duration-200 group"
              title="Open Interactive CLI Console (Cmd + K)"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600 group-hover:rotate-12 transition-transform" />
              <span className="hidden xl:inline">CLI Palette</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-200 rounded font-mono text-slate-600">⌘K</kbd>
            </button>
          )}

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 rounded-lg hover:bg-slate-200 transition-all duration-200 group"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="relative group overflow-hidden px-4 py-1.5 text-xs font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-100" />
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl bg-white backdrop-blur-2xl border border-slate-200 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium text-slate-800 bg-slate-100 border border-slate-200 rounded-xl"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white bg-blue-600 rounded-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
