import React from 'react';
import { 
  User, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Mail, 
  ArrowRight,
  Compass
} from 'lucide-react';

interface HomeHighlightsGridProps {
  onPageChange: (pageId: string) => void;
}

export const HomeHighlightsGrid: React.FC<HomeHighlightsGridProps> = ({ onPageChange }) => {
  const pageCards = [
    {
      id: 'about',
      title: 'About Israel Kwamu',
      tagline: 'Founder & Full-Stack Engineer',
      description: 'Discover my background, mission statement, core engineering values, and executive leadership approach.',
      icon: User,
      badge: 'Profile & Philosophy'
    },
    {
      id: 'skills',
      title: 'Technical Skills & Stack',
      tagline: 'Angular, React, Node.js & DBs',
      description: 'Explore my core competencies in frontend frameworks, backend microservices, RxJS state, and databases.',
      icon: Code2,
      badge: 'Core Competencies'
    },
    {
      id: 'projects',
      title: 'Featured Projects & Systems',
      tagline: 'SaaS Platforms & Web Applications',
      description: 'View real-world enterprise applications, client solutions, and live software architectures.',
      icon: Briefcase,
      badge: 'Portfolio Showcase'
    },
    {
      id: 'experience',
      title: 'Experience & Certifications',
      tagline: 'Nexaris Labs & Morrtech Solutions',
      description: 'Review my leadership history, enterprise deliverables, and professional Morrtech Software Certification.',
      icon: GraduationCap,
      badge: 'Career History'
    },
    {
      id: 'nexaris-labs',
      title: 'Nexaris Labs Ecosystem',
      tagline: 'Enterprise Software Studio',
      description: 'Interactive Workflow Builder Simulator, Tax Calculator Suite, system architecture visualizer, and roadmap.',
      icon: Sparkles,
      badge: 'Venture Spotlight'
    },
    {
      id: 'blog',
      title: 'Insights & Testimonials',
      tagline: 'Articles & Client Endorsements',
      description: 'Read technical writing on modern software engineering, web performance, and feedback from leaders.',
      icon: BookOpen,
      badge: 'Thought Leadership'
    },
    {
      id: 'contact',
      title: 'Contact & 15-Min Discovery Call',
      tagline: 'Direct Connect & Scheduling',
      description: 'Get in touch for custom software builds, executive advisory, or schedule a 15-minute discovery call.',
      icon: Mail,
      badge: 'Get in Touch'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-blue-600 font-bold">
          <Compass className="w-3.5 h-3.5 text-blue-600" />
          <span>PORTFOLIO SECTIONS MAP</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Explore Portfolio <span className="text-blue-600">By Dedicated Page</span>
        </h2>
        <p className="text-slate-600 max-w-2xl text-xs sm:text-sm font-normal">
          Click any page card below to navigate directly to its dedicated section page view.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageCards.map((card) => {
          const IconComp = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onPageChange(card.id)}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 cursor-pointer group hover:border-slate-300 hover:bg-slate-100/50 transition-all duration-200 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-500 font-bold shadow-sm">
                    {card.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 mt-0.5 font-bold">
                    {card.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-blue-600 font-bold group-hover:text-blue-750">
                <span>Open Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
