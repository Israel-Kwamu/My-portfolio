import React from 'react';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Compass,
  List
} from 'lucide-react';

export interface PageInfo {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const PAGES: PageInfo[] = [
  {
    id: 'home',
    name: 'Home',
    title: 'Kwamu Israel — Full-Stack Developer & Founder',
    subtitle: 'High-performance web applications, SaaS products, and enterprise solutions',
    icon: Home
  },
  {
    id: 'about',
    name: 'About',
    title: 'About Israel Kwamu',
    subtitle: 'Biographical profile, core engineering philosophy, and mission statement',
    icon: User
  },
  {
    id: 'skills',
    name: 'Skills',
    title: 'Technical Skills & Core Competencies',
    subtitle: 'Angular, React, Node.js, Express, MongoDB, RxJS, and Cloud Architecture',
    icon: Code2
  },
  {
    id: 'projects',
    name: 'Projects',
    title: 'Featured Projects & Systems Architecture',
    subtitle: 'Full-stack web applications, SaaS platforms, and enterprise software',
    icon: Briefcase
  },
  {
    id: 'experience',
    name: 'Experience',
    title: 'Career Experience & Certification',
    subtitle: 'Engineering achievements at Nexaris Labs & Morrtech Solutions',
    icon: GraduationCap
  },
  {
    id: 'nexaris-labs',
    name: 'Nexaris Labs',
    title: 'Nexaris Labs Enterprise Ecosystem',
    subtitle: 'Flagship SaaS products, workflow builder engine, and future roadmap',
    icon: Sparkles
  },
  {
    id: 'blog',
    name: 'Blog',
    title: 'Technical Insights & Testimonials',
    subtitle: 'Software architecture articles, developer blogs, and client reviews',
    icon: BookOpen
  },
  {
    id: 'contact',
    name: 'Contact',
    title: 'Get In Touch & Book Call',
    subtitle: 'Direct contact form and 15-minute technical discovery call scheduler',
    icon: Mail
  }
];

interface PageHeaderBannerProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
  viewMode: 'pages' | 'all';
  onToggleViewMode: (mode: 'pages' | 'all') => void;
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  activePage,
  onPageChange,
  viewMode,
  onToggleViewMode
}) => {
  const currentPageInfo = PAGES.find(p => p.id === activePage) || PAGES[0];
  const IconComponent = currentPageInfo.icon;

  return (
    <div className="pt-24 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white backdrop-blur-md relative overflow-hidden shadow-sm">
        
        {/* Top Breadcrumb & Controls Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-4">
          
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
            <button 
              onClick={() => onPageChange('home')} 
              className="hover:text-slate-900 flex items-center gap-1 font-semibold transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-blue-600" />
              <span>Portfolio</span>
            </button>
            <span>/</span>
            <span className="text-blue-600 font-bold uppercase tracking-wider">{currentPageInfo.name}</span>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => onToggleViewMode('pages')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'pages'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Page View</span>
            </button>
            <button
              onClick={() => onToggleViewMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'all'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Full Scroll Mode</span>
            </button>
          </div>

        </div>

        {/* Page Title & Subtitle Banner */}
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              {currentPageInfo.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              {currentPageInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Page Navigation Switcher Tabs */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {PAGES.map((p) => {
            const PIcon = p.icon;
            const isActive = p.id === activePage;
            return (
              <button
                key={p.id}
                onClick={() => onPageChange(p.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium shrink-0 flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <PIcon className="w-3.5 h-3.5" />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

interface PageFooterPaginationProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
}

export const PageFooterPagination: React.FC<PageFooterPaginationProps> = ({
  activePage,
  onPageChange
}) => {
  const currentIndex = PAGES.findIndex(p => p.id === activePage);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 mt-12">
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Previous Page Link */}
        {prevPage ? (
          <button
            onClick={() => onPageChange(prevPage.id)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 hover:border-slate-300 flex items-center gap-2 transition-all group"
          >
            <ChevronLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] text-slate-500 uppercase font-semibold">PREVIOUS PAGE</span>
              <span className="font-bold text-slate-900">{prevPage.name}</span>
            </div>
          </button>
        ) : (
          <div className="w-full sm:w-auto" />
        )}

        {/* Center Page Indicators */}
        <div className="flex items-center gap-1.5 py-2">
          {PAGES.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => onPageChange(p.id)}
              className={`h-1.5 rounded-full transition-all ${
                p.id === activePage ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Go to page: ${p.name}`}
            />
          ))}
          <span className="text-xs font-mono text-slate-500 ml-2">
            Page {currentIndex + 1} of {PAGES.length}
          </span>
        </div>

        {/* Next Page Link */}
        {nextPage ? (
          <button
            onClick={() => onPageChange(nextPage.id)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 hover:text-blue-900 hover:bg-blue-100 flex items-center gap-2 transition-all group"
          >
            <div className="text-right">
              <span className="block text-[10px] text-blue-600 uppercase font-semibold">NEXT PAGE</span>
              <span className="font-bold text-slate-900">{nextPage.name}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button
            onClick={() => onPageChange('home')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 text-xs font-mono text-white font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <span>Back to Home</span>
            <Home className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
};
