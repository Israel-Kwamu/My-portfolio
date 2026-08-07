import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { NexarisLabs } from './components/NexarisLabs';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { NexarisTerminalModal } from './components/NexarisTerminalModal';
import { TaxCalculatorModal } from './components/TaxCalculatorModal';
import { WorkflowBuilderModal } from './components/WorkflowBuilderModal';
import { PageHeaderBanner, PageFooterPagination } from './components/PageNavigation';
import { HomeHighlightsGrid } from './components/HomeHighlightsGrid';

const VALID_PAGES = ['home', 'about', 'skills', 'projects', 'experience', 'nexaris-labs', 'blog', 'contact'];

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isTaxModalOpen, setIsTaxModalOpen] = useState(false);
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState(false);
  
  // Page Navigation State
  const [activeSection, setActiveSection] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    return VALID_PAGES.includes(hash) ? hash : 'home';
  });

  // View Mode: 'pages' (Split sections onto distinct pages) vs 'all' (Single continuous page)
  const [viewMode, setViewMode] = useState<'pages' | 'all'>('pages');

  // Cmd + K or Ctrl + K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Synchronize hash changes (Browser Back/Forward or direct link URL)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (VALID_PAGES.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track active section on scroll when in 'all' view mode
  useEffect(() => {
    if (viewMode !== 'all') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of VALID_PAGES) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  // Handle Page Change Function
  const handlePageChange = (pageId: string) => {
    if (!VALID_PAGES.includes(pageId)) return;
    
    setActiveSection(pageId);
    window.location.hash = pageId;

    if (viewMode === 'pages') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(pageId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Top Floating Glass Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeSection={activeSection}
        onPageChange={handlePageChange}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
      />

      {/* RENDER MODE 1: SPLIT PAGE-BY-PAGE VIEW */}
      {viewMode === 'pages' ? (
        <main className="min-h-[80vh]">
          {/* Top Page Header Banner & Breadcrumb */}
          <PageHeaderBanner 
            activePage={activeSection}
            onPageChange={handlePageChange}
            viewMode={viewMode}
            onToggleViewMode={setViewMode}
          />

          {/* Active Page Component Content */}
          <div className="transition-all duration-300 animate-fade-in">
            {activeSection === 'home' && (
              <>
                <Hero 
                  onOpenResume={() => setIsResumeOpen(true)} 
                  onOpenTerminal={() => setIsTerminalOpen(true)}
                  onPageChange={handlePageChange}
                />
                <HomeHighlightsGrid onPageChange={handlePageChange} />
              </>
            )}

            {activeSection === 'about' && (
              <About />
            )}

            {activeSection === 'skills' && (
              <Skills />
            )}

            {activeSection === 'projects' && (
              <Projects 
                onOpenTaxModal={() => setIsTaxModalOpen(true)}
                onOpenWorkflowModal={() => setIsWorkflowModalOpen(true)}
              />
            )}

            {activeSection === 'experience' && (
              <Experience />
            )}

            {activeSection === 'nexaris-labs' && (
              <NexarisLabs 
                onOpenTaxModal={() => setIsTaxModalOpen(true)}
                onOpenWorkflowModal={() => setIsWorkflowModalOpen(true)}
              />
            )}

            {activeSection === 'blog' && (
              <Blog />
            )}

            {activeSection === 'contact' && (
              <Contact />
            )}
          </div>

          {/* Bottom Page Pagination Controls */}
          <PageFooterPagination 
            activePage={activeSection}
            onPageChange={handlePageChange}
          />
        </main>
      ) : (
        /* RENDER MODE 2: CONTINUOUS ALL SECTIONS SCROLL */
        <main>
          <Hero 
            onOpenResume={() => setIsResumeOpen(true)} 
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onPageChange={handlePageChange}
          />
          <About />
          <Skills />
          <Projects 
            onOpenTaxModal={() => setIsTaxModalOpen(true)}
            onOpenWorkflowModal={() => setIsWorkflowModalOpen(true)}
          />
          <Experience />
          <NexarisLabs 
            onOpenTaxModal={() => setIsTaxModalOpen(true)}
            onOpenWorkflowModal={() => setIsWorkflowModalOpen(true)}
          />
          <Blog />
          <Contact />
        </main>
      )}

      {/* Minimalist Tech Luxury Footer */}
      <Footer onPageChange={handlePageChange} />

      {/* Interactive Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Interactive CLI Command Palette Modal (Cmd + K) */}
      <NexarisTerminalModal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
        onNavigatePage={(pageId) => {
          setIsTerminalOpen(false);
          handlePageChange(pageId);
        }}
      />

      {/* Interactive Tax Calculator Modal */}
      <TaxCalculatorModal 
        isOpen={isTaxModalOpen}
        onClose={() => setIsTaxModalOpen(false)}
      />

      {/* Interactive Workflow Builder Modal */}
      <WorkflowBuilderModal 
        isOpen={isWorkflowModalOpen}
        onClose={() => setIsWorkflowModalOpen(false)}
      />

    </div>
  );
}
