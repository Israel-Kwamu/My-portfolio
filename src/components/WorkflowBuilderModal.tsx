import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Plus, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Zap, 
  Database, 
  Bot, 
  Mail, 
  Globe, 
  Layers, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface WorkflowBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WorkflowNode {
  id: string;
  name: string;
  type: 'trigger' | 'ai' | 'database' | 'notification';
  status: 'idle' | 'running' | 'success';
  output: string;
}

export const WorkflowBuilderModal: React.FC<WorkflowBuilderModalProps> = ({ isOpen, onClose }) => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: 'n1', name: 'HTTP Webhook Trigger', type: 'trigger', status: 'idle', output: 'Listening for POST payload on /api/v1/webhook...' },
    { id: 'n2', name: 'Gemini AI Sentiment Analysis', type: 'ai', status: 'idle', output: 'Analyzes user feedback sentiment score & key intent tags.' },
    { id: 'n3', name: 'PostgreSQL Order Log', type: 'database', status: 'idle', output: 'Persists structured JSON record in DB table.' },
    { id: 'n4', name: 'Slack Alert & Customer Email', type: 'notification', status: 'idle', output: 'Dispatches automated dispatch notification to admin team.' }
  ]);

  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);

  if (!isOpen) return null;

  const runSimulation = () => {
    setIsRunning(true);
    setLogs(['[System] Initializing Nexaris Workflow Execution Engine...']);
    setActiveStep(0);

    nodes.forEach((_, idx) => {
      setTimeout(() => {
        setActiveStep(idx);
        setNodes(prev => prev.map((n, i) => i === idx ? { ...n, status: 'running' } : n));
        
        setLogs(prev => [
          ...prev, 
          `[Step 0${idx + 1}] Running node: ${nodes[idx].name}...`
        ]);

        setTimeout(() => {
          setNodes(prev => prev.map((n, i) => i === idx ? { ...n, status: 'success' } : n));
          setLogs(prev => [
            ...prev, 
            `[Step 0${idx + 1}] Output: ${nodes[idx].output}`
          ]);

          if (idx === nodes.length - 1) {
            setIsRunning(false);
            setLogs(prev => [...prev, '✅ [Success] Workflow completed in 420ms with 0 errors!']);
          }
        }, 600);

      }, idx * 1200);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setActiveStep(-1);
    setLogs([]);
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));
  };

  const addCustomNode = () => {
    const newNode: WorkflowNode = {
      id: `n${nodes.length + 1}`,
      name: `Custom Filter ${nodes.length + 1}`,
      type: 'ai',
      status: 'idle',
      output: 'Transforms and validates output payload schema.'
    };
    setNodes(prev => [...prev, newNode]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#030712] border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] blue-glow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1329] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                Nexaris Visual Workflow Engine
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono">
                  Interactive Node Canvas
                </span>
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Visual automation builder designed by Kwamu Israel for building event pipelines.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-3 bg-black/40 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all blue-glow-sm"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isRunning ? 'Executing Workflow...' : 'Run Simulation'}</span>
            </button>

            <button
              onClick={resetSimulation}
              className="px-3 py-2 rounded-xl glass-panel text-[#94A3B8] hover:text-white font-mono text-xs flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <button
            onClick={addCustomNode}
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-3.5 h-3.5 text-blue-400" />
            <span>Add Node</span>
          </button>
        </div>

        {/* Canvas & Log Stream */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Visual Node Diagram */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-mono text-[#64748B] block uppercase tracking-wider">
              Visual Execution Canvas ({nodes.length} Nodes)
            </span>

            <div className="space-y-3 relative">
              {nodes.map((node, idx) => (
                <div
                  key={node.id}
                  className={`p-4 rounded-2xl border transition-all duration-300 relative ${
                    node.status === 'running'
                      ? 'bg-blue-600/20 border-blue-500 shadow-lg blue-glow-sm scale-[1.01]'
                      : node.status === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/40'
                      : 'glass-panel bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white/10 text-blue-400">
                        {node.type === 'trigger' && <Globe className="w-4 h-4" />}
                        {node.type === 'ai' && <Bot className="w-4 h-4 text-purple-400" />}
                        {node.type === 'database' && <Database className="w-4 h-4 text-emerald-400" />}
                        {node.type === 'notification' && <Mail className="w-4 h-4 text-amber-400" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">{node.name}</h4>
                        <span className="text-[10px] font-mono text-[#64748B]">Node ID: {node.id}</span>
                      </div>
                    </div>

                    <span className="text-xs font-mono">
                      {node.status === 'running' && (
                        <span className="text-blue-400 flex items-center gap-1 animate-pulse">
                          Running...
                        </span>
                      )}
                      {node.status === 'success' && (
                        <span className="text-green-400 flex items-center gap-1 font-bold">
                          <CheckCircle2 className="w-4 h-4" /> Passed
                        </span>
                      )}
                      {node.status === 'idle' && (
                        <span className="text-[#64748B]">Idle</span>
                      )}
                    </span>
                  </div>

                  {idx < nodes.length - 1 && (
                    <div className="flex justify-center my-1">
                      <ArrowRight className="w-4 h-4 text-blue-500/40 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Live Terminal Execution Logs */}
          <div className="md:col-span-5 rounded-2xl glass-panel bg-[#0B1329] border border-white/10 p-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono font-bold text-white">Execution Console Logs</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] leading-relaxed text-[#94A3B8] space-y-1.5 h-64 overflow-y-auto">
                {logs.length === 0 ? (
                  <p className="text-[#64748B]">Click "Run Simulation" above to test visual workflow execution...</p>
                ) : (
                  logs.map((log, i) => (
                    <p key={i} className={log.includes('Success') ? 'text-green-400 font-bold' : 'text-blue-300'}>
                      {log}
                    </p>
                  ))
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>Nexaris Workflow Core</span>
              <button
                onClick={onClose}
                className="text-blue-400 hover:underline"
              >
                Close
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
