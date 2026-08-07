import React, { useState } from 'react';
import { 
  Workflow, 
  Calculator, 
  BarChart3, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Eye, 
  Target, 
  ArrowRight,
  Shield,
  Bot,
  Zap,
  Globe,
  Play,
  FileText,
  FileCheck,
  ShoppingBag
} from 'lucide-react';
import { PERSONAL_INFO, NEXARIS_PRODUCTS, NEXARIS_ROADMAP } from '../data/portfolioData';
import { NexarisLogo } from './NexarisLogo';
import { ArchitectureVisualizer } from './ArchitectureVisualizer';

interface NexarisLabsProps {
  onOpenTaxModal?: () => void;
  onOpenWorkflowModal?: () => void;
}

export const NexarisLabs: React.FC<NexarisLabsProps> = ({ onOpenTaxModal, onOpenWorkflowModal }) => {
  const [activeTab, setActiveTab] = useState<'products' | 'roadmap' | 'architecture'>('products');

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return Shield;
      case 'Sparkles': return Sparkles;
      case 'FileText': return FileText;
      case 'FileCheck': return FileCheck;
      case 'ShoppingBag': return ShoppingBag;
      case 'Workflow': return Workflow;
      case 'Calculator': return Calculator;
      case 'BarChart3': return BarChart3;
      default: return Zap;
    }
  };

  return (
    <section id="nexaris-labs" className="py-24 relative bg-white overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Hero Header */}
        <div className="p-8 sm:p-12 rounded-2xl border border-slate-200 bg-white relative overflow-hidden mb-16 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-blue-600 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>VENTURE SPOTLIGHT</span>
              </div>

              {/* Logo */}
              <div>
                <NexarisLogo size="xl" />
              </div>

              {/* About Nexaris Labs */}
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                "{PERSONAL_INFO.company.description}"
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase">
                    <Eye className="w-4 h-4" />
                    <span>Company Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {PERSONAL_INFO.company.vision}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase">
                    <Target className="w-4 h-4" />
                    <span>Company Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {PERSONAL_INFO.company.mission}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side CEO Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-center flex flex-col items-center justify-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 p-0.5 flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-slate-100 rounded-[14px] flex items-center justify-center text-blue-600 font-bold font-display text-xl">
                  KI
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 font-display">Kwamu Israel</h4>
                <p className="text-xs font-mono text-blue-600 font-bold">Founder & CEO, Nexaris Labs</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Driving engineering strategy, SaaS product design, and automated workflow architecture.
              </p>
              <a
                href="#contact"
                className="w-full py-2.5 text-xs font-mono text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all font-bold block text-center"
              >
                Partner with Nexaris Labs
              </a>
            </div>

          </div>

        </div>

        {/* Navigation Tabs (Flagship SaaS Products vs System Architecture vs Future Roadmap) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-medium font-mono transition-all flex items-center gap-2 ${
              activeTab === 'products'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
            }`}
          >
            <Rocket className="w-4 h-4" />
            <span>Flagship SaaS Products</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-medium font-mono transition-all flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Interactive Architecture Visualizer</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-medium font-mono transition-all flex items-center gap-2 ${
              activeTab === 'roadmap'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Future Product Roadmap</span>
          </button>
        </div>

        {/* ARCHITECTURE VIEW */}
        {activeTab === 'architecture' && (
          <div className="animate-fade-in">
            <ArchitectureVisualizer />
          </div>
        )}

        {/* PRODUCTS VIEW */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEXARIS_PRODUCTS.map((prod) => {
              const IconComp = getProductIcon(prod.icon);
              return (
                <div
                  key={prod.id}
                  className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                        prod.status === 'Live' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {prod.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        {prod.name}
                      </h3>
                      <p className="text-xs font-mono text-blue-600 mt-0.5 font-bold">
                        {prod.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                      {prod.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-[11px] font-mono text-slate-800 uppercase font-bold">
                        Core Capabilities
                      </p>
                      <ul className="space-y-1.5">
                        {prod.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-sans font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono">
                      <span className="text-slate-500 block text-[10px] font-bold">BUSINESS IMPACT</span>
                      {prod.impact}
                    </div>

                    {prod.id === 'workflow-engine' && onOpenWorkflowModal && (
                      <button
                        onClick={onOpenWorkflowModal}
                        className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-mono text-white flex items-center justify-center gap-2 transition-all font-bold shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Try Workflow Builder Simulator</span>
                      </button>
                    )}

                    {prod.id === 'tax-suite' && onOpenTaxModal && (
                      <button
                        onClick={onOpenTaxModal}
                        className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-mono text-white flex items-center justify-center gap-2 transition-all font-bold shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Launch Live Tax Calculator</span>
                      </button>
                    )}

                    <a
                      href="#contact"
                      className="w-full py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 hover:border-slate-300 flex items-center justify-center gap-1.5 transition-all font-semibold"
                    >
                      <span>Request Enterprise Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* ROADMAP VIEW */}
        {activeTab === 'roadmap' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {NEXARIS_ROADMAP.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold border border-blue-200">
                      {item.quarter}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      item.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-display pt-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-blue-600 shrink-0 shadow-sm animate-fade-in">
                  {item.status === 'In Progress' ? <Zap className="w-6 h-6 animate-pulse" /> : <Bot className="w-6 h-6 text-slate-400" />}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
