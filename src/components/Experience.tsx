import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-white overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-blue-600 font-bold">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>CAREER MILESTONES & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Professional <span className="text-blue-600">Timeline & Journey</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base font-normal">
            Track record of software engineering leadership, enterprise delivery, and founder innovation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 lg:pl-12 space-y-12 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200">
          
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Blue Node Indicator */}
              <div className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-200 ${
                exp.isCurrent 
                  ? 'bg-blue-600 border-blue-400' 
                  : 'bg-white border-slate-300'
              }`}>
                <div className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'bg-white animate-ping' : 'bg-blue-600'}`} />
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 relative overflow-hidden space-y-5 hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-150 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-600 border border-blue-200 uppercase">
                          Present Role
                        </span>
                      )}
                    </div>
                    <p className="text-base font-bold text-blue-600 mt-0.5 font-display">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono text-blue-600 uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-600" /> Key Achievements & Contributions
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Pills */}
                <div className="pt-3 flex flex-wrap items-center gap-1.5">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-lg bg-slate-50 text-[11px] font-mono text-slate-600 border border-slate-200 font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
