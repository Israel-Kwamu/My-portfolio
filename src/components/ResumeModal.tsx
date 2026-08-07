import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Github 
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create a plain text formatted resume file download for immediate utility
    const textContent = `
KWAMU ISRAEL
Full-Stack Web Developer | Founder & CEO, Nexaris Labs
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}

SUMMARY
${PERSONAL_INFO.aboutText}

MISSION
${PERSONAL_INFO.mission}

EXPERIENCE
${EXPERIENCES.map(e => `
- ${e.role} | ${e.company} (${e.period})
  Location: ${e.location}
  Description: ${e.description}
  Achievements:
${e.achievements.map(a => `    * ${a}`).join('\n')}
`).join('\n')}

TECHNICAL SKILLS
${SKILLS.map(s => `- ${s.name} (${s.category}): ${s.description}`).join('\n')}

EDUCATION
- B.Sc. Computer Science & Software Engineering
- AWS & Full-Stack Cloud Architecture Certification
    `;

    const blob = new Blob([textContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kwamu_Israel_Resume_FullStack.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl glass-panel bg-[#0B1329] border border-white/20 p-6 sm:p-10 space-y-6 max-h-[92vh] overflow-y-auto">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#3B82F6]" />
            <h2 className="text-lg font-bold text-white font-display">
              Curriculum Vitae — Kwamu Israel
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl glass-panel text-[#94A3B8] hover:text-white"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-mono bg-blue-600 text-white rounded-xl flex items-center gap-1.5 blue-glow-sm hover:bg-blue-500"
            >
              <Download className="w-4 h-4" />
              <span>{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RESUME PAPER VIEW */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel bg-[#050816] border border-white/10 space-y-8 font-sans text-slate-200">
          
          {/* Header Identity */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white font-display">
              ISRAEL KWAMU
            </h1>
            <p className="text-sm font-semibold text-[#3B82F6] font-display uppercase tracking-widest">
              Full-Stack Web Developer
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#94A3B8] pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-blue-400" /> {PERSONAL_INFO.location}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-blue-400" /> {PERSONAL_INFO.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-blue-400" /> {PERSONAL_INFO.phone}</span>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white"><Globe className="w-3.5 h-3.5 text-blue-400" /> linkedin.com/in/israel-kwamu</a>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white"><Github className="w-3.5 h-3.5 text-blue-400" /> github.com/Israel-Kwamu</a>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider font-bold">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              {PERSONAL_INFO.aboutText}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider font-bold">
              Work Experience & Certification
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-bold text-white font-display">
                      {exp.role} <span className="text-[#3B82F6]">| {exp.company}</span>
                    </h4>
                    <span className="text-xs font-mono text-[#94A3B8]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1 pl-4 list-disc text-xs text-[#94A3B8]">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider font-bold">
              Technical Skills & Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white font-mono">Frontend Frameworks & Styling:</span>
                <p className="text-[#94A3B8]">Angular framework, TypeScript language, Bootstrap framework, Tailwind CSS, HTML5 & CSS3</p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white font-mono">Server-Side & APIs:</span>
                <p className="text-[#94A3B8]">Server-side development (Node.js & Express.js), REST APIs, CRUD operations, Asynchronous programming</p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white font-mono">Databases & State:</span>
                <p className="text-[#94A3B8]">NoSQL database (MongoDB), RxJS state management, Firestore real-time DB</p>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white font-mono">Tools & Management:</span>
                <p className="text-[#94A3B8]">Git and GitHub, NPM package management, Web development lifecycle</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider font-bold">
              Languages
            </h3>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
              <span className="font-bold text-white">English</span>
              <span className="font-mono text-[#3B82F6]">Intermediate / Professional</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
