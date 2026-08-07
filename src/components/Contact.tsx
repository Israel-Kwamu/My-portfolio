import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Twitter, 
  Calendar,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'message' | 'meeting'>('message');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });

  // Meeting scheduler state
  const [meetingData, setMeetingData] = useState({
    name: '',
    email: '',
    topic: 'SaaS MVP Development',
    date: 'Tomorrow (10:00 AM WAT)',
    timeSlot: '10:00 AM - 10:30 AM'
  });

  const [submitted, setSubmitted] = useState(false);
  const [meetingBooked, setMeetingBooked] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  const handleBookMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetingData.name || !meetingData.email) return;

    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 }
    });

    setMeetingBooked(true);
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-blue-600 font-bold">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Start a <span className="text-blue-600">Project Conversation</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base font-normal">
            Have a project, enterprise software inquiry, or partnership opportunity? Drop me a line or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl border border-slate-200 bg-white space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Direct Contact Points
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 font-bold">EMAIL ADDRESS</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-xl bg-white border border-slate-250 text-slate-600 hover:text-slate-900 shadow-sm"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-600 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 font-bold">PHONE / WHATSAPP</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-xl bg-white border border-slate-250 text-slate-600 hover:text-slate-900 shadow-sm"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-green-600 font-bold" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 font-bold">HEADQUARTERS LOCATION</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links Box */}
            <div className="p-6 rounded-3xl border border-slate-200 bg-white space-y-4 shadow-sm">
              <p className="text-xs font-mono text-slate-500 font-bold uppercase">
                Connect Across Digital Platforms
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2 text-xs font-mono transition-all font-semibold shadow-sm"
                >
                  <Github className="w-4 h-4 text-blue-600" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2 text-xs font-mono transition-all font-semibold shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn Page</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2 text-xs font-mono transition-all font-semibold shadow-sm"
                >
                  <Twitter className="w-4 h-4 text-blue-600" />
                  <span>X (Twitter)</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2 text-xs font-mono transition-all font-semibold shadow-sm"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>Email Directly</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Form / Calendar Scheduler */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white relative shadow-sm">
            
            {/* Mode Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mb-6 shadow-inner">
              <button
                onClick={() => setActiveTab('message')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'message'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Direct Message</span>
              </button>

              <button
                onClick={() => setActiveTab('meeting')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'meeting'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book 15-Min Discovery Call</span>
              </button>
            </div>

            {/* TAB 1: SEND MESSAGE */}
            {activeTab === 'message' && (
              <>
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-sm">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for reaching out to Kwamu Israel. I will review your message and reply within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
                      }}
                      className="mt-4 px-6 py-2.5 text-xs font-mono bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-sm transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        Send a Direct Message
                      </h3>
                      <span className="text-xs font-mono text-blue-600 flex items-center gap-1 font-bold">
                        Fast Response Guaranteed
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600 font-bold">YOUR FULL NAME *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alexander Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-250 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono shadow-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600 font-bold">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          required
                          placeholder="alexander@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-250 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-bold">SUBJECT / INQUIRY TYPE</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-250 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono shadow-sm"
                      >
                        <option className="bg-white text-slate-900" value="Project Inquiry">Project Inquiry / Custom SaaS Build</option>
                        <option className="bg-white text-slate-900" value="Nexaris Labs Enterprise">Nexaris Labs Enterprise Solution</option>
                        <option className="bg-white text-slate-900" value="Executive Advisory">Technical Advisory & Architecture</option>
                        <option className="bg-white text-slate-900" value="Speaking & Media">Speaking & Media Invitation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-bold">YOUR MESSAGE *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your project, timeline, or inquiry details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-250 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-sans shadow-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-sm font-bold font-mono text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to Kwamu Israel</span>
                    </button>
                  </form>
                )}
              </>
            )}

            {/* TAB 2: MEETING SCHEDULER */}
            {activeTab === 'meeting' && (
              <>
                {meetingBooked ? (
                  <div className="py-8 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 mx-auto flex items-center justify-center shadow-sm">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      Call Scheduled with Kwamu Israel!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      A calendar invitation has been generated for <strong className="text-slate-900">{meetingData.email}</strong> regarding <span className="text-blue-600 font-bold">{meetingData.topic}</span> on <strong className="text-slate-900">{meetingData.date}</strong>.
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 font-mono text-xs shadow-sm">
                      <div className="flex justify-between text-slate-600">
                        <span>Host:</span>
                        <span className="text-slate-900 font-bold">Kwamu Israel (CEO, Nexaris Labs)</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Video Room:</span>
                        <span className="text-blue-600 underline font-bold">https://meet.nexaris.io/kwamu-israel</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Time Slot:</span>
                        <span className="text-emerald-700 font-bold">{meetingData.timeSlot}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setMeetingBooked(false)}
                      className="mt-4 px-6 py-2.5 text-xs font-mono bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-sm transition-all"
                    >
                      Schedule Another Slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookMeeting} className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        15-Min Technical Discovery Call
                      </h3>
                      <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-bold">
                        ● Slots Available Today
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 font-bold">CALL TOPIC / GOAL *</label>
                      <select
                        value={meetingData.topic}
                        onChange={(e) => setMeetingData({ ...meetingData, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-250 text-slate-900 text-xs font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                      >
                        <option className="bg-white text-slate-900" value="SaaS MVP Development">SaaS Architecture & Custom MVP Build</option>
                        <option className="bg-white text-slate-900" value="Enterprise Advisory">Nexaris Labs Enterprise Partnership</option>
                        <option className="bg-white text-slate-900" value="Technical Recruitment">Technical Lead Interview</option>
                        <option className="bg-white text-slate-900" value="Executive Advisory">CTO Advisory / Codebase Audit</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600 font-bold">SELECT DAY *</label>
                        <select
                          value={meetingData.date}
                          onChange={(e) => setMeetingData({ ...meetingData, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-250 text-slate-900 text-xs font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                        >
                          <option className="bg-white text-slate-900" value="Tomorrow (10:00 AM WAT)">Tomorrow (10:00 AM WAT)</option>
                          <option className="bg-white text-slate-900" value="In 2 Days (02:00 PM WAT)">In 2 Days (02:00 PM WAT)</option>
                          <option className="bg-white text-slate-900" value="In 3 Days (04:30 PM WAT)">In 3 Days (04:30 PM WAT)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600 font-bold">PREFERRED SLOT *</label>
                        <select
                          value={meetingData.timeSlot}
                          onChange={(e) => setMeetingData({ ...meetingData, timeSlot: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-250 text-slate-900 text-xs font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                        >
                          <option className="bg-white text-slate-900" value="10:00 AM - 10:30 AM">10:00 AM - 10:30 AM WAT</option>
                          <option className="bg-white text-slate-900" value="02:00 PM - 02:30 PM">02:00 PM - 02:30 PM WAT</option>
                          <option className="bg-white text-slate-900" value="04:30 PM - 05:00 PM">04:30 PM - 05:00 PM WAT</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600 font-bold">YOUR NAME *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Smith"
                          value={meetingData.name}
                          onChange={(e) => setMeetingData({ ...meetingData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-250 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-600 font-bold">WORK EMAIL *</label>
                        <input
                          type="email"
                          required
                          placeholder="david@company.com"
                          value={meetingData.email}
                          onChange={(e) => setMeetingData({ ...meetingData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-250 text-slate-900 placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm & Generate Google Meet Invite</span>
                    </button>
                  </form>
                )}
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
