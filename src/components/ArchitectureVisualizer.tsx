import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Activity, 
  Zap, 
  Shield, 
  Play, 
  Pause, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight,
  HardDrive,
  Radio,
  Lock
} from 'lucide-react';

interface ArchitecturePattern {
  id: string;
  name: string;
  category: string;
  description: string;
  nodes: {
    id: string;
    label: string;
    tech: string;
    role: string;
    status: 'healthy' | 'active' | 'synced';
    details: string;
    latency: string;
  }[];
}

const ARCHITECTURE_PATTERNS: ArchitecturePattern[] = [
  {
    id: 'pattern-1',
    name: 'Enterprise Microservices & Event Bus',
    category: 'SaaS & Enterprise',
    description: 'High-concurrency distributed architecture using Angular 19 frontend, NestJS API Gateway, Redis caching layer, and PostgreSQL database.',
    nodes: [
      { id: 'client', label: 'Angular 19 Frontend', tech: 'Angular / TypeScript / RxJS', role: 'SPA Client Layer', status: 'healthy', details: 'Delivers <1.2s First Contentful Paint with RxJS state management & optimized bundle sizes.', latency: '12ms' },
      { id: 'gateway', label: 'NestJS API Gateway', tech: 'Node.js / Express / JWT', role: 'Auth & Rate Limiter', status: 'active', details: 'Handles authentication, OAuth2 validation, CORS, and request throttling at 10k req/min.', latency: '18ms' },
      { id: 'cache', label: 'Redis L2 Cache', tech: 'Redis Cluster v7', role: 'In-Memory Caching', status: 'healthy', details: 'Stores user session keys and frequent database queries with 98.4% hit rate.', latency: '2ms' },
      { id: 'db', label: 'PostgreSQL Relational DB', tech: 'PostgreSQL 16 / Prisma', role: 'Persistent Master DB', status: 'synced', details: 'ACID-compliant relational database with automated read replicas and indexed queries.', latency: '24ms' }
    ]
  },
  {
    id: 'pattern-2',
    name: 'Real-time Tax & Fintech Engine',
    category: 'Fintech & Compliance',
    description: 'Scalable engine processing automated tax computations (VAT, CIT, PIT) under strict audit requirements.',
    nodes: [
      { id: 'mobile', label: 'Web & Mobile Client', tech: 'React / Tailwind / PWA', role: 'Cross-Platform App', status: 'healthy', details: 'Offline-first Progressive Web App with local caching for instant responsiveness.', latency: '14ms' },
      { id: 'lb', label: 'Cloud Load Balancer', tech: 'NGINX / Cloudflare Edge', role: 'DDoS Protection & SSL', status: 'active', details: 'Distributes incoming traffic across redundant compute instances with SSL termination.', latency: '8ms' },
      { id: 'engine', label: 'Tax Computation Engine', tech: 'TypeScript / Worker Threads', role: 'Core Logic Worker', status: 'healthy', details: 'Calculates complex multi-tier tax breakdown rules deterministically.', latency: '35ms' },
      { id: 'audit', label: 'Audit Trail & Storage', tech: 'PostgreSQL / AWS S3', role: 'Immutable Ledger', status: 'synced', details: 'Secures tamper-proof financial transaction logs and downloadable tax statement PDFs.', latency: '28ms' }
    ]
  },
  {
    id: 'pattern-3',
    name: 'Cloud-Native Event-Driven Architecture',
    category: 'Cloud & AI',
    description: 'Serverless event pipelines integrating AI background jobs, webhooks, and asynchronous message queues.',
    nodes: [
      { id: 'webhooks', label: 'External Webhooks', tech: 'HTTP / Webhooks / REST', role: 'Trigger Ingestion', status: 'healthy', details: 'Receives asynchronous payload callbacks from Stripe, Paystack, and GitHub.', latency: '15ms' },
      { id: 'mq', label: 'Message Queue & Event Bus', tech: 'RabbitMQ / Kafka', role: 'Async Job Dispatcher', status: 'active', details: 'Buffers high-volume incoming tasks to eliminate API endpoint bottlenecks.', latency: '5ms' },
      { id: 'worker', label: 'Asynchronous Worker', tech: 'Node.js / Docker Container', role: 'Background Processor', status: 'healthy', details: 'Processes document parsing, image processing, and AI model query prompts.', latency: '120ms' },
      { id: 'analytics', label: 'Analytics & Logs', tech: 'Elasticsearch / Grafana', role: 'System Telemetry', status: 'synced', details: 'Provides real-time tracing, error monitoring, and operational dashboards.', latency: '10ms' }
    ]
  }
];

export const ArchitectureVisualizer: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<ArchitecturePattern>(ARCHITECTURE_PATTERNS[0]);
  const [selectedNode, setSelectedNode] = useState(ARCHITECTURE_PATTERNS[0].nodes[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simMetrics, setSimMetrics] = useState({ rps: 1240, cpu: 28, memory: 42, latency: 18 });

  // Update selected node when pattern changes
  useEffect(() => {
    setSelectedNode(selectedPattern.nodes[0]);
  }, [selectedPattern]);

  // Handle simulation ticker
  useEffect(() => {
    let interval: any = null;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimMetrics({
          rps: Math.floor(2500 + Math.random() * 800),
          cpu: Math.floor(45 + Math.random() * 25),
          memory: Math.floor(60 + Math.random() * 15),
          latency: Math.floor(12 + Math.random() * 10)
        });
      }, 1000);
    } else {
      setSimMetrics({ rps: 1240, cpu: 28, memory: 42, latency: 18 });
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Visualizer Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-bold border border-blue-200 mb-2">
            <Zap className="w-3.5 h-3.5" /> Interactive Blueprint Explorer
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
            System Architecture & Live Flow Visualizer
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Explore Kwamu Israel's real-world software architecture patterns designed for speed, resilience, and horizontal scaling.
          </p>
        </div>

        {/* Pattern Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {ARCHITECTURE_PATTERNS.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => setSelectedPattern(pattern)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                selectedPattern.id === pattern.id
                  ? 'bg-blue-600 text-white shadow-sm font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {pattern.name}
            </button>
          ))}
        </div>
      </div>

      {/* Live Controls & Simulation Metric Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
        <div className="col-span-2 sm:col-span-1 flex items-center justify-between sm:justify-start gap-2 border-r border-slate-200 pr-4">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className={`w-full py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              isSimulating 
                ? 'bg-amber-500 text-black shadow-sm animate-pulse' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isSimulating ? (
              <>
                <Pause className="w-4 h-4" /> Stop Traffic
              </>
            ) : (
              <>
                <Play className="w-4 h-4" /> Test Live Traffic
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col">
          <span className="text-slate-500 font-medium">Throughput</span>
          <span className="text-slate-900 font-bold text-sm">{simMetrics.rps.toLocaleString()} req/s</span>
        </div>

        <div className="flex flex-col">
          <span className="text-slate-500 font-medium">Avg Latency</span>
          <span className="text-blue-600 font-bold text-sm">{simMetrics.latency} ms</span>
        </div>

        <div className="flex flex-col">
          <span className="text-slate-500 font-medium">CPU Workload</span>
          <span className="text-green-600 font-bold text-sm">{simMetrics.cpu}%</span>
        </div>

        <div className="flex flex-col">
          <span className="text-slate-500 font-medium">RAM Memory</span>
          <span className="text-purple-600 font-bold text-sm">{simMetrics.memory}%</span>
        </div>
      </div>

      {/* Architecture Node Flow Diagram Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Diagram Nodes */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider flex items-center gap-2 font-bold">
            <Layers className="w-3.5 h-3.5 text-blue-600" /> Click any node to inspect operational specs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
            {selectedPattern.nodes.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-blue-50 border-blue-500 text-blue-950 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-50'
                  }`}
                >
                  {/* Traffic Pulse Line Indicator */}
                  {isSimulating && (
                    <div className="absolute top-2 right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                      Step 0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-250 text-slate-800 font-bold">
                      {node.latency}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                    {node.id === 'client' || node.id === 'mobile' ? <Globe className="w-4 h-4 text-blue-600" /> : null}
                    {node.id === 'gateway' || node.id === 'lb' ? <Shield className="w-4 h-4 text-indigo-600" /> : null}
                    {node.id === 'cache' || node.id === 'engine' || node.id === 'worker' ? <Cpu className="w-4 h-4 text-emerald-600" /> : null}
                    {node.id === 'db' || node.id === 'audit' || node.id === 'analytics' ? <Database className="w-4 h-4 text-purple-600" /> : null}
                    {node.label}
                  </h4>

                  <p className="text-xs text-slate-600 font-mono mt-1 font-normal">{node.tech}</p>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">{node.role}</span>
                    <span className="text-green-600 flex items-center gap-1 font-mono font-bold">
                      <CheckCircle2 className="w-3 h-3" /> {node.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Selected Node Inspection Details Card */}
        <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between space-y-4 shadow-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <HardDrive className="w-4 h-4" /> Node Inspection
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-bold">
                Active Node
              </span>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 font-display">{selectedNode.label}</h4>
              <p className="text-xs text-blue-600 font-mono mt-0.5 font-bold">{selectedNode.tech}</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <span className="text-[11px] font-mono text-slate-500 block font-bold">Role & Capability:</span>
              <p className="text-xs text-slate-700 leading-relaxed font-sans font-normal">
                {selectedNode.details}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-500 block text-[10px]">Security Layer</span>
                <span className="text-slate-800 font-bold flex items-center gap-1 mt-0.5">
                  <Lock className="w-3 h-3 text-green-600" /> TLS 1.3 + AES-256
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <span className="text-slate-500 block text-[10px]">Response SLA</span>
                <span className="text-blue-600 font-bold flex items-center gap-1 mt-0.5">
                  <Activity className="w-3 h-3" /> &lt; {selectedNode.latency} Target
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
            <span>Designed by Kwamu Israel</span>
            <span className="text-blue-600 hover:underline cursor-pointer flex items-center gap-1 font-bold">
              Learn More <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
