import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal as TerminalIcon, 
  X, 
  CornerDownLeft, 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw, 
  Download, 
  Send,
  Code2,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES } from '../data/portfolioData';

interface NexarisTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
  onNavigatePage?: (pageId: string) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
  type?: 'info' | 'error' | 'success' | 'system';
}

export const NexarisTerminalModal: React.FC<NexarisTerminalModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome logs on first mount
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          id: 'welcome-1',
          command: 'nexaris init --interactive',
          output: (
            <div className="space-y-2 py-1 text-xs font-mono">
              <p className="text-blue-400 font-bold">
                🚀 Nexaris OS Terminal v2.4.0 [Author: Kwamu Israel]
              </p>
              <p className="text-[#94A3B8]">
                Type <span className="text-[#60A5FA] font-bold">'help'</span> to see available commands or <span className="text-[#60A5FA] font-bold">'gui'</span> to inspect system stats.
              </p>
            </div>
          ),
          timestamp: new Date().toLocaleTimeString(),
          type: 'system'
        }
      ]);
    }
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const args = lower.split(' ');
    const mainCmd = args[0];

    // Store in history array for arrow-key navigation
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;
    let type: 'info' | 'error' | 'success' | 'system' = 'info';

    switch (mainCmd) {
      case 'help':
        output = (
          <div className="space-y-2 py-1 text-xs font-mono">
            <p className="text-blue-400 font-bold mb-1">Available Nexaris CLI Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#94A3B8]">
              <div><span className="text-white font-semibold">about</span> — Bio & Founder info</div>
              <div><span className="text-white font-semibold">skills</span> — Tech stack breakdown</div>
              <div><span className="text-white font-semibold">projects</span> — Featured SaaS & Web apps</div>
              <div><span className="text-white font-semibold">experience</span> — Work & leadership history</div>
              <div><span className="text-white font-semibold">nexaris</span> — Overview of Nexaris Labs</div>
              <div><span className="text-white font-semibold">contact</span> — Email & social channels</div>
              <div><span className="text-white font-semibold">resume</span> — Open interactive resume modal</div>
              <div><span className="text-white font-semibold">status</span> — Check current availability</div>
              <div><span className="text-white font-semibold">hire</span> — Send direct collaboration query</div>
              <div><span className="text-white font-semibold">clear</span> — Purge terminal output</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 py-1 text-xs font-mono text-[#94A3B8]">
            <p><strong className="text-white">{PERSONAL_INFO.name}</strong> — {PERSONAL_INFO.title}</p>
            <p>{PERSONAL_INFO.aboutText}</p>
            <p className="text-blue-400">📍 Location: {PERSONAL_INFO.location} | ✉️ {PERSONAL_INFO.email}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-3 py-1 text-xs font-mono">
            <span className="text-blue-400 font-bold">Key Engineering Skills ({SKILLS.length} Tech Items):</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              {SKILLS.map((s, i) => (
                <div key={i} className="p-1.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center justify-between">
                  <span>{s.name} ({s.category})</span>
                  <span className="text-white font-bold">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 py-1 text-xs font-mono">
            <p className="text-blue-400 font-bold">Featured Production Projects ({PROJECTS.length}):</p>
            <div className="space-y-2">
              {PROJECTS.map((p, idx) => (
                <div key={idx} className="p-2 rounded bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-white font-bold">
                    <span>{idx + 1}. {p.title}</span>
                    <span className="text-blue-400 text-[10px]">{p.category}</span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px] mt-0.5">{p.description}</p>
                  <div className="flex flex-wrap gap-1 mt-1 text-[10px] text-blue-300">
                    {p.tags.map((t, i) => <span key={i}>#{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 py-1 text-xs font-mono">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-blue-500 pl-3 py-1">
                <p className="text-white font-bold">{exp.role} @ {exp.company}</p>
                <p className="text-blue-400 text-[10px]">{exp.period} | {exp.location}</p>
                <p className="text-[#94A3B8] text-[11px] mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'nexaris':
        output = (
          <div className="space-y-2 py-1 text-xs font-mono text-[#94A3B8]">
            <p className="text-blue-400 font-bold">⚡ Nexaris Labs — Software & AI Development Studio</p>
            <p>Founded by Kwamu Israel. We design, architect, and deploy high-concurrency web applications, AI automation tools, and customized enterprise SaaS solutions.</p>
            <div className="p-2.5 rounded bg-blue-600/10 border border-blue-500/20 text-blue-300">
              Core Stack: Angular 19, React 19, TypeScript, Node.js (NestJS / Express), PostgreSQL, Docker, AWS & GCP.
            </div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1.5 py-1 text-xs font-mono text-[#94A3B8]">
            <p className="text-white font-bold">Direct Connect Channels:</p>
            <p>✉️ Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{PERSONAL_INFO.socials.linkedin}</a></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-blue-400 underline">{PERSONAL_INFO.socials.github}</a></p>
            <p>🐦 Twitter: <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noreferrer" className="text-blue-400 underline">{PERSONAL_INFO.socials.twitter}</a></p>
          </div>
        );
        break;

      case 'resume':
        if (onOpenResume) {
          onOpenResume();
          output = <p className="text-green-400 font-mono text-xs">Opening interactive PDF resume view...</p>;
        } else {
          output = <p className="text-blue-400 font-mono text-xs">Resume email: {PERSONAL_INFO.email}</p>;
        }
        type = 'success';
        break;

      case 'status':
        output = (
          <div className="py-1 text-xs font-mono text-green-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
            <span>SYSTEM STATUS: 100% OPERATIONAL. Kwamu is currently open for full-time executive roles, lead developer contracts, and tech advisory.</span>
          </div>
        );
        type = 'success';
        break;

      case 'hire':
        output = (
          <div className="p-3 rounded bg-blue-600/20 border border-blue-500/40 text-xs font-mono text-white space-y-2">
            <p className="font-bold text-blue-300">🤝 Initiate Partnership with Kwamu Israel</p>
            <p className="text-[#94A3B8]">Please send an email directly to <span className="text-blue-400 font-bold">{PERSONAL_INFO.email}</span> with subject line <span className="text-white font-bold">"Project Inquiry: Nexaris Labs"</span>.</p>
          </div>
        );
        type = 'success';
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-red-400 text-xs font-mono">
            zsh: command not found: '{trimmed}'. Type <span className="text-white font-bold">'help'</span> for valid commands.
          </p>
        );
        type = 'error';
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        command: trimmed,
        output,
        timestamp: new Date().toLocaleTimeString(),
        type
      }
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const copyAllLogs = () => {
    const textToCopy = history.map(h => `> ${h.command}\n${h.timestamp}`).join('\n\n');
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#030712] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px] max-h-[85vh] blue-glow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="px-4 py-3 bg-[#0B1329] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-white/20 mx-1" />
            <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-blue-400" />
              kwamu@nexaris-labs: ~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyAllLogs}
              title="Copy Terminal Logs"
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors text-xs flex items-center gap-1 font-mono"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Logs'}</span>
            </button>
            <button
              onClick={() => setHistory([])}
              title="Clear Terminal"
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors text-xs font-mono"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-red-500/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Suggestions Pill Bar */}
        <div className="px-4 py-2 bg-black/60 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span className="text-[#64748B] shrink-0">Quick Try:</span>
          {['help', 'about', 'skills', 'projects', 'nexaris', 'contact', 'status', 'hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md glass-panel bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/40 text-blue-300 transition-all shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs leading-relaxed selection:bg-blue-600 selection:text-white">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center justify-between text-[#64748B] text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-green-400 font-bold">kwamu@nexaris</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <span>{item.timestamp}</span>
              </div>
              <div className="pl-3 border-l-2 border-blue-500/30 text-[#E2E8F0]">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Prompt Input Bar */}
        <div className="p-3 bg-[#0B1329] border-t border-white/10 flex items-center gap-2">
          <span className="text-green-400 font-mono text-xs font-bold pl-1">kwamu@nexaris:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-xs font-mono text-white placeholder-[#64748B] outline-none"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
