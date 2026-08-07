import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Download, 
  Mail, 
  ExternalLink, 
  Code2, 
  Globe, 
  ShieldCheck, 
  Copy, 
  Check, 
  Play,
  Layers,
  Atom,
  Server,
  FileCode
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Import the generated portrait image path
import portraitImage from '../assets/images/kwamu_israel_portrait_1785432042024.jpg';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal?: () => void;
  onPageChange?: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal, onPageChange }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'nexaris'>('architecture');

  const codeSnippet = `// Kwamu Israel — Full-Stack Developer & Founder @ Nexaris Labs
import { NexarisLabs } from '@nexaris/core';

export const founder = {
  name: 'Kwamu Israel',
  role: 'Founder & CEO',
  focus: ['SaaS Development', 'Cloud Architecture', 'Process Automation'],
  location: 'Lagos, Nigeria',
  mission: () => "Transforming ideas into high-impact digital products."
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-slate-50/60 bg-grid-pattern">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono text-slate-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Available for High-Impact Projects & Executive Advisory</span>
            </div>

            {/* Name & Titles */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-slate-900">
                KWAMU <span className="blue-gradient-text">ISRAEL</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl font-medium text-slate-700">
                <span className="text-slate-900 font-semibold flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600" /> Full-Stack Web Developer
                </span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="text-blue-600 font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" /> Founder & CEO, Nexaris Labs
                </span>
              </div>
            </div>

            {/* Subtext Tagline */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              I design and build high-performance web applications, SaaS products, and business solutions using modern technologies. My passion lies in creating software that solves real-world problems and drives digital transformation.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  if (onPageChange) {
                    e.preventDefault();
                    onPageChange('projects');
                  }
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 group shadow-sm"
                >
                  <Terminal className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform" />
                  <span>Interactive CLI</span>
                  <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-100 rounded text-slate-600 border border-slate-200">⌘K</kbd>
                </button>
              )}

              <a
                href="#nexaris-labs"
                onClick={(e) => {
                  if (onPageChange) {
                    e.preventDefault();
                    onPageChange('nexaris-labs');
                  }
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium text-sm hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 group shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform" />
                <span>Explore Nexaris Labs</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-mono text-xs transition-all duration-200 hover:border-slate-300 shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  if (onPageChange) {
                    e.preventDefault();
                    onPageChange('contact');
                  }
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium text-xs transition-all duration-200 hover:border-slate-300 shadow-sm"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl font-bold font-display text-slate-900">{stat.value}</span>
                  <span className="text-xs text-slate-500 font-mono">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Main Portrait Frame with Tech Stack Badges */}
            <div className="relative w-full max-w-md mx-auto group">
              
              {/* Hairline Outer Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 shadow-sm">
                <img
                  src={portraitImage}
                  alt="Kwamu Israel - Full-Stack Developer & CEO Nexaris Labs"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl filter brightness-100 contrast-100 transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 rounded-xl" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-md">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">Kwamu Israel</h4>
                    <p className="text-xs text-blue-600 font-mono font-semibold">Founder & CEO, Nexaris Labs</p>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* FLOATING TECH STACK BADGES */}
              
              {/* Angular Badge - Top Left */}
              <div className="absolute -top-4 -left-4 p-2.5 rounded-xl bg-white border border-slate-200 shadow-md animate-float flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 font-mono">Angular</p>
                  <p className="text-[10px] text-slate-500">Enterprise</p>
                </div>
              </div>

              {/* React Badge - Top Right */}
              <div className="absolute -top-2 -right-4 p-2.5 rounded-xl bg-white border border-slate-200 shadow-md animate-float-delayed flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-200">
                  <Atom className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 font-mono">React 19</p>
                  <p className="text-[10px] text-slate-500">Next.js & SSR</p>
                </div>
              </div>

              {/* Node.js Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 p-2.5 rounded-xl bg-white border border-slate-200 shadow-md animate-float-delayed flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <Server className="w-4 h-4" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 font-mono">Node.js</p>
                  <p className="text-[10px] text-slate-500">Express & NestJS</p>
                </div>
              </div>

              {/* TypeScript Badge - Bottom Right */}
              <div className="absolute -bottom-2 -right-4 p-2.5 rounded-xl bg-white border border-slate-200 shadow-md animate-float flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                  <FileCode className="w-4 h-4" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 font-mono">TypeScript</p>
                  <p className="text-[10px] text-slate-500">Strict Type Safe</p>
                </div>
              </div>

            </div>

            {/* CODE SNIPPET PREVIEW BOX BELOW PORTRAIT */}
            <div className="w-full max-w-md mt-8 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-md">
              <div className="px-4 py-2.5 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" /> founder.ts
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-[11px] font-mono text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 font-mono text-xs leading-relaxed text-slate-200 overflow-x-auto">
                <pre className="text-blue-300">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
