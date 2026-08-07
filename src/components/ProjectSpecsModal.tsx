import React, { useState } from 'react';
import { 
  X, 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  Check, 
  Copy, 
  ExternalLink, 
  Github, 
  Zap,
  CheckCircle2,
  Terminal,
  Activity,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface ProjectSpecsModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveDemo?: () => void;
}

export const ProjectSpecsModal: React.FC<ProjectSpecsModalProps> = ({ project, onClose, onOpenLiveDemo }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code' | 'metrics'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  // Sample production code snippet customized per project
  const getSampleCodeSnippet = () => {
    if (project.id === 'proj-1' || project.title.toLowerCase().includes('workflow')) {
      return {
        language: 'typescript',
        filename: 'src/engine/workflow.dispatcher.ts',
        code: `import { Injectable, Logger } from '@nestjs/common';
import { Subject, filter, mergeMap } from 'rxjs';

@Injectable()
export class WorkflowDispatcherService {
  private readonly logger = new Logger(WorkflowDispatcherService.name);
  private readonly eventBus$ = new Subject<{ eventId: string; payload: any }>();

  constructor() {
    this.eventBus$
      .pipe(
        filter((event) => !!event.payload),
        mergeMap(async (event) => this.executeNodeWorker(event))
      )
      .subscribe({
        next: (result) => this.logger.log(\`Execution Completed: \${result.id}\`),
        error: (err) => this.logger.error(\`Pipeline Error: \${err.message}\`)
      });
  }

  public dispatchPayload(eventId: string, payload: unknown) {
    this.eventBus$.next({ eventId, payload });
  }

  private async executeNodeWorker(event: { eventId: string; payload: any }) {
    // High-concurrency worker thread processing...
    return { id: event.eventId, status: 'SUCCESS', latencyMs: 12 };
  }
}`
      };
    } else if (project.id === 'proj-2' || project.title.toLowerCase().includes('tax')) {
      return {
        language: 'typescript',
        filename: 'src/services/paye-calculator.engine.ts',
        code: `export interface TaxExemptions {
  pensionRatio: number; // default 0.08
  nhfRatio: number;     // default 0.025
}

export function calculateNigerianPAYE(grossIncome: number, exemptions: TaxExemptions) {
  const pension = grossIncome * exemptions.pensionRatio;
  const nhf = grossIncome * exemptions.nhfRatio;
  
  // Consolidated Relief Allowance (CRA) = Higher of ₦200k or 1% Gross + 20% Gross
  const craFixed = Math.max(200000, grossIncome * 0.01);
  const totalRelief = craFixed + (grossIncome * 0.20) + pension + nhf;
  
  const taxableIncome = Math.max(0, grossIncome - totalRelief);

  // Progressive Tax Bands: 7%, 11%, 15%, 19%, 21%, 24%
  let tax = 0;
  let remaining = taxableIncome;
  const bands = [
    { limit: 300000, rate: 0.07 },
    { limit: 300000, rate: 0.11 },
    { limit: 500000, rate: 0.15 },
    { limit: 500000, rate: 0.19 },
    { limit: 1600000, rate: 0.21 },
    { limit: Infinity, rate: 0.24 },
  ];

  for (const band of bands) {
    if (remaining <= 0) break;
    const chunk = Math.min(remaining, band.limit);
    tax += chunk * band.rate;
    remaining -= chunk;
  }

  return { taxableIncome, annualTax: tax, monthlyTax: tax / 12 };
}`
      };
    } else {
      return {
        language: 'typescript',
        filename: 'src/modules/realtime-sync.gateway.ts',
        code: `import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export className AppSyncGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sync_state')
  handleStateUpdate(client: Socket, payload: { roomId: string; delta: any }) {
    client.to(payload.roomId).emit('state_changed', payload.delta);
    return { status: 'acknowledged', timestamp: Date.now() };
  }
}`
      };
    }
  };

  const codeSnippet = getSampleCodeSnippet();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                {project.title}
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono border border-blue-200 font-bold">
                  {project.category}
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Technical Blueprint & Architectural Specification
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 py-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {[
              { id: 'overview', label: 'Overview & Highlights', icon: Layers },
              { id: 'architecture', label: 'System Architecture', icon: Cpu },
              { id: 'code', label: 'Core Code Snippet', icon: Code2 },
              { id: 'metrics', label: 'Performance SLA', icon: Activity }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {onOpenLiveDemo && (
            <button
              onClick={onOpenLiveDemo}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Interactive Demo</span>
            </button>
          )}
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 font-display">System Description</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {project.longDescription || project.description}
                  </p>

                  <div className="pt-2">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">
                      Key Technical Accomplishments
                    </h5>
                    <div className="space-y-2">
                      {project.highlights?.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      )) || (
                        <div className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>Designed for horizontal scaling with zero-downtime containerized deployments.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-4 shadow-sm">
                  <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                    Stack & Ecosystem
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-250 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Project Status</span>
                      <span className="text-emerald-600 font-bold">Production Ready</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Architect & Lead</span>
                      <span className="text-slate-800 font-semibold">Kwamu Israel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-2xl bg-slate-50 border border-blue-200">
                <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider block mb-3">
                  Architectural Component Flow Diagram
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                    <span className="text-blue-600 block font-bold">1. Client Layer</span>
                    <span className="text-slate-600">Angular 19 / React SPA</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                    <span className="text-indigo-600 block font-bold">2. API Gateway</span>
                    <span className="text-slate-600">NestJS REST / JWT</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                    <span className="text-amber-600 block font-bold">3. Cache & Queue</span>
                    <span className="text-slate-600">Redis L2 / Worker</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                    <span className="text-emerald-600 block font-bold">4. Master Database</span>
                    <span className="text-slate-600">PostgreSQL / Prisma</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <p className="font-mono text-slate-950 font-bold mb-1">Architecture Highlights:</p>
                <p>
                  Built following enterprise Microservices and clean onion architecture patterns. Decouples state management using RxJS observables on the frontend and handles async heavy jobs via dedicated Node worker threads.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: CORE CODE SNIPPET */}
          {activeTab === 'code' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-600 font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> {codeSnippet.filename}
                </span>

                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors font-semibold"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs leading-relaxed text-blue-400 overflow-x-auto selection:bg-blue-600 selection:text-white">
                <pre>{codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* TAB 4: PERFORMANCE METRICS */}
          {activeTab === 'metrics' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-mono text-slate-500">Max Throughput</span>
                <span className="text-2xl font-bold font-display text-slate-900 block">10,000 req/min</span>
                <span className="text-[10px] font-mono text-green-600 font-bold">Zero drop rate</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-mono text-slate-500">Average Latency</span>
                <span className="text-2xl font-bold font-display text-blue-600 block">&lt; 18 ms</span>
                <span className="text-[10px] font-mono text-blue-600 font-bold">Redis cache enabled</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-mono text-slate-500">System Availability SLA</span>
                <span className="text-2xl font-bold font-display text-emerald-600 block">99.98%</span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold">Cloud Run autoscaled</span>
              </div>
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-500">Designed by Kwamu Israel — Founder & CEO, Nexaris Labs</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all"
          >
            Close Specs
          </button>
        </div>

      </div>
    </div>
  );
};
