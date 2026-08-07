import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  X, 
  CheckCircle, 
  BarChart3, 
  Code2, 
  Cpu, 
  ArrowRight,
  Play
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectSpecsModal } from './ProjectSpecsModal';

interface ProjectsProps {
  onOpenTaxModal?: () => void;
  onOpenWorkflowModal?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenTaxModal, onOpenWorkflowModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'SaaS', 'E-Commerce & SaaS', 'Enterprise'];

  const filteredProjects = PROJECTS.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-white overflow-hidden">
      
      {/* Background Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono text-blue-600 font-semibold">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Featured <span className="blue-gradient-text">Software Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base font-normal">
            High-performance web applications, enterprise SaaS architectures, and automated business tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between group relative hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              
              {/* Project Image Box */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102 filter brightness-100"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[10px] font-mono text-blue-600 border border-slate-200 uppercase font-bold shadow-sm">
                  {project.category}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-mono flex items-center gap-1 font-bold shadow-sm">
                    <Sparkles className="w-3 h-3" /> Featured
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="mt-3 py-1.5 px-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-mono text-blue-700 flex items-center gap-1.5 font-semibold">
                      <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-[10px] font-mono text-slate-500 border border-slate-200">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors group/btn font-bold"
                    >
                      <span>Explore Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.id === 'proj-2' && onOpenTaxModal && (
                        <button
                          onClick={onOpenTaxModal}
                          className="px-2.5 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-mono flex items-center gap-1 transition-all shadow-sm"
                        >
                          <Play className="w-3 h-3" /> Live Demo
                        </button>
                      )}

                      {project.id === 'proj-1' && onOpenWorkflowModal && (
                        <button
                          onClick={onOpenWorkflowModal}
                          className="px-2.5 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-mono flex items-center gap-1 transition-all shadow-sm"
                        >
                          <Play className="w-3 h-3" /> Live Demo
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-350 transition-all shadow-sm"
                          title="View Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 hover:text-blue-700 hover:bg-blue-100 transition-all shadow-sm"
                          title="Open Live App"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* DETAILED PROJECT SPECS MODAL */}
      <ProjectSpecsModal 
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenLiveDemo={
          activeModalProject?.id === 'proj-2' ? onOpenTaxModal :
          activeModalProject?.id === 'proj-1' ? onOpenWorkflowModal :
          undefined
        }
      />

    </section>
  );
};
