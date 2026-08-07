import React, { useState } from 'react';
import { 
  Code, 
  Layers, 
  Atom, 
  FileCode, 
  Palette, 
  Layout, 
  Grid, 
  Server, 
  Cpu, 
  Box, 
  Database, 
  HardDrive, 
  Table, 
  Zap, 
  GitBranch, 
  Container, 
  Shield, 
  Terminal, 
  Cloud,
  Search,
  CheckCircle,
  Sparkles,
  ArrowRightLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'comparison'>('grid');

  // Tech comparison state
  const [techA, setTechA] = useState<string>('Angular');
  const [techB, setTechB] = useState<string>('React');

  const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Tools'];

  const comparisonData: Record<string, {
    useCase: string;
    kwamuVerdict: string;
    strengths: string[];
    tradeoffs: string[];
    productionScore: number;
  }> = {
    'Angular': {
      useCase: 'Enterprise SPAs with multi-module isolation and RxJS reactive streams.',
      kwamuVerdict: 'Ideal for large-scale corporate enterprise apps (like Nexaris ERP/Tax) requiring opinionated structure.',
      strengths: ['Strict Dependency Injection', 'Built-in RxJS reactive state', 'Ahead-Of-Time (AOT) compilation'],
      tradeoffs: ['Steeper learning curve', 'Verbose boilerplate'],
      productionScore: 95
    },
    'React': {
      useCase: 'Dynamic consumer web applications, SaaS dashboards, and fast micro-frontends.',
      kwamuVerdict: 'Favorite choice for fast iterations, rich visual interactive components, and Next.js SSR.',
      strengths: ['Massive npm ecosystem', 'Vite HMR speed', 'Unmatched UI flexibility'],
      tradeoffs: ['State fragmentation across packages', 'Requires architect discipline'],
      productionScore: 92
    },
    'TypeScript': {
      useCase: 'Universal standard for both frontend and backend codebases.',
      kwamuVerdict: 'Non-negotiable foundation for every single Nexaris Labs production system.',
      strengths: ['Compile-time safety', 'Self-documenting domain models', 'Enhanced IDE completion'],
      tradeoffs: ['Slight build setup overhead'],
      productionScore: 98
    },
    'NestJS': {
      useCase: 'Scalable Node.js microservices and REST/GraphQL enterprise backends.',
      kwamuVerdict: 'Go-to framework for structured backend engines with OpenAPI specs and Guards.',
      strengths: ['Angular-inspired modularity', 'Built-in WebSocket & RxJS support', 'Strict TypeScript decorators'],
      tradeoffs: ['Overkill for trivial CRUD apps'],
      productionScore: 94
    },
    'Node.js': {
      useCase: 'Event-driven asynchronous microservices and real-time streaming sockets.',
      kwamuVerdict: 'Core runtime engine for lightning-fast concurrent HTTP requests.',
      strengths: ['High non-blocking I/O throughput', 'Shared JS/TS frontend logic', 'Vast ecosystem'],
      tradeoffs: ['Single-threaded CPU bound tasks require workers'],
      productionScore: 90
    },
    'PostgreSQL': {
      useCase: 'ACID-compliant relational storage, complex relational joins, and JSONB queries.',
      kwamuVerdict: 'Primary database choice for financial, ERP, tax computations, and audit logs.',
      strengths: ['Bulletproof transaction guarantees', 'Native JSONB support', 'Rich indexing'],
      tradeoffs: ['Requires schema migration discipline'],
      productionScore: 96
    },
    'MongoDB': {
      useCase: 'Document storage for unstructured events, logs, and dynamic user profiles.',
      kwamuVerdict: 'Great for high-velocity logging, rapid prototyping, and dynamic payload schemas.',
      strengths: ['Flexible schema-less design', 'Easy horizontal sharding', 'JSON native'],
      tradeoffs: ['Lacks complex relational joins'],
      productionScore: 88
    },
    'Docker': {
      useCase: 'Containerizing services for Cloud Run, Kubernetes, and reproducible builds.',
      kwamuVerdict: 'Essential container standard for zero-drift deployment pipelines.',
      strengths: ['Exact environment isolation', 'Multi-stage build optimization', 'Fast container cold starts'],
      tradeoffs: ['Requires image size minimization tricks'],
      productionScore: 95
    }
  };

  // Icon mapping helper
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Atom': return Atom;
      case 'Code': return Code;
      case 'FileCode': return FileCode;
      case 'Palette': return Palette;
      case 'Layout': return Layout;
      case 'Grid': return Grid;
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Box': return Box;
      case 'Database': return Database;
      case 'HardDrive': return HardDrive;
      case 'Table': return Table;
      case 'Zap': return Zap;
      case 'GitBranch': return GitBranch;
      case 'Container': return Container;
      case 'Shield': return Shield;
      case 'Terminal': return Terminal;
      case 'Cloud': return Cloud;
      default: return Code;
    }
  };

  const filteredSkills = SKILLS.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-slate-50/60 overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono text-blue-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>TECHNICAL ARCHITECTURE & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Mastered <span className="blue-gradient-text">Technologies & Tools</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base font-normal">
            Comprehensive full-stack capability across modern frontend frameworks, cloud backends, database engines, and DevOps tooling.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 mt-4 p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Grid Matrix View
            </button>
            <button
              onClick={() => setViewMode('comparison')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                viewMode === 'comparison'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>Tech Comparison Sandbox</span>
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <>
            {/* Search & Category Filter Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white font-semibold blue-glow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search stack or tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-850 placeholder-slate-400 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

            </div>

            {/* Futuristic Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredSkills.map((skill: Skill) => {
                const IconComponent = getIconComponent(skill.icon);
                return (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-250 flex flex-col justify-between relative group overflow-hidden"
                  >
                    {/* Subtle Blue Accent Hover Indicator */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/5 rounded-full blur-md group-hover:bg-blue-500/10 transition-all pointer-events-none" />

                    <div>
                      {/* Top Bar: Icon & Category */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200 uppercase font-semibold">
                          {skill.category}
                        </span>
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed min-h-[36px]">
                        {skill.description}
                      </p>
                    </div>

                    {/* Progress Meter Bar */}
                    <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500">Proficiency</span>
                        <span className="text-blue-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {filteredSkills.length === 0 && (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
                <p className="font-mono text-sm">No skills found matching "{searchQuery}".</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-3 text-xs text-blue-600 underline font-mono font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        ) : (
          /* TECH COMPARISON SANDBOX VIEW */
          <div className="p-6 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-sm space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5 text-blue-600" />
                  Interactive Tech Trade-off Analyzer
                </h3>
                <p className="text-xs text-slate-500">
                  Select two technologies to compare Kwamu's architectural analysis and production suitability.
                </p>
              </div>

              {/* Selectors */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <select
                  value={techA}
                  onChange={(e) => setTechA(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs focus:outline-none focus:border-blue-500"
                >
                  {Object.keys(comparisonData).map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>

                <span className="text-xs font-mono text-blue-600 font-bold">VS</span>

                <select
                  value={techB}
                  onChange={(e) => setTechB(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs focus:outline-none focus:border-blue-500"
                >
                  {Object.keys(comparisonData).map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Comparison Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* TECH A CARD */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-blue-200 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold font-display text-slate-900">{techA}</h4>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                    Suitability Score: {comparisonData[techA]?.productionScore || 90}%
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Best Production Use Case</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">{comparisonData[techA]?.useCase}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase block">Kwamu's Architectural Verdict</span>
                  <p className="text-xs text-blue-800">{comparisonData[techA]?.kwamuVerdict}</p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider block font-bold">Key Architectural Strengths</span>
                  {comparisonData[techA]?.strengths?.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono text-amber-600 uppercase tracking-wider block font-bold">Known Trade-offs</span>
                  {comparisonData[techA]?.tradeoffs?.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECH B CARD */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold font-display text-slate-900">{techB}</h4>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold border border-slate-200">
                    Suitability Score: {comparisonData[techB]?.productionScore || 90}%
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Best Production Use Case</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">{comparisonData[techB]?.useCase}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-mono text-slate-700 font-bold uppercase block">Kwamu's Architectural Verdict</span>
                  <p className="text-xs text-slate-800">{comparisonData[techB]?.kwamuVerdict}</p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider block font-bold">Key Architectural Strengths</span>
                  {comparisonData[techB]?.strengths?.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono text-amber-600 uppercase tracking-wider block font-bold">Known Trade-offs</span>
                  {comparisonData[techB]?.tradeoffs?.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
