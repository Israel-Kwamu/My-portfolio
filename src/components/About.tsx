import React from 'react';
import { 
  Building2, 
  Target, 
  Zap, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Lightbulb, 
  Workflow, 
  Compass 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Business-Centric Engineering",
      description: "Code is a tool to drive growth, automate manual friction, and unlock measurable enterprise ROI."
    },
    {
      icon: Zap,
      title: "High Throughput & Speed",
      description: "Architecting sub-second APIs and fluid micro-frontends built to sustain enterprise loads."
    },
    {
      icon: Workflow,
      title: "End-to-End Execution",
      description: "Taking products seamlessly from technical wireframes and database design to cloud deployment."
    },
    {
      icon: Lightbulb,
      title: "Pioneering Innovation",
      description: "Leading Nexaris Labs to build next-generation SaaS platforms and intelligent enterprise tools."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-50/60 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono text-blue-600 font-semibold">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>ABOUT KWAMU ISRAEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Architecting <span className="blue-gradient-text">Impactful Software</span> & Systems
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base font-normal">
            Blending full-stack engineering expertise with visionary startup leadership.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
                  Biographical Profile
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> {PERSONAL_INFO.location}
                </span>
              </div>

              <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                "{PERSONAL_INFO.aboutText}"
              </p>

              {/* Mission Statement Box */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider font-bold">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Mission Statement</span>
                </div>
                <p className="text-sm text-slate-700 italic font-medium leading-relaxed">
                  "{PERSONAL_INFO.mission}"
                </p>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-200">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-mono text-slate-500">Primary Stack</p>
                <p className="text-sm font-bold text-slate-900 mt-1">Angular & React</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-mono text-slate-500">Backend Engine</p>
                <p className="text-sm font-bold text-slate-900 mt-1">Node / NestJS</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                <p className="text-xs font-mono text-slate-500">Founder Role</p>
                <p className="text-sm font-bold text-blue-600 mt-1">Nexaris Labs</p>
              </div>
            </div>

          </div>

          {/* Core Values Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 group hover:border-slate-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
