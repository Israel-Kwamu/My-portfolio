import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Tag, 
  Share2, 
  ThumbsUp, 
  Check,
  Star,
  Quote
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BLOG_POSTS, TESTIMONIALS } from '../data/portfolioData';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [postClaps, setPostClaps] = useState<Record<string, number>>({});

  const topics = ['All', 'Angular Development', 'React Development', 'SaaS', 'Entrepreneurship', 'Software Architecture'];

  const filteredPosts = BLOG_POSTS.filter(post => 
    selectedTopic === 'All' || post.category === selectedTopic
  );

  const handleClap = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPostClaps(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }));

    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blog" className="py-24 relative bg-white overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-blue-600 font-bold">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>TECHNICAL INSIGHTS & THOUGHT LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            Engineering <span className="text-blue-600">Blog & Articles</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base font-normal">
            In-depth guides on Angular, React, SaaS architecture, scalable systems, and tech founder lessons.
          </p>
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {topics.map((top) => (
            <button
              key={top}
              onClick={() => setSelectedTopic(top)}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg transition-all duration-200 shadow-sm ${
                selectedTopic === top
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-350'
              }`}
            >
              {top}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-6 group cursor-pointer hover:border-slate-300 hover:bg-slate-100/50 transition-all duration-200 shadow-sm"
              onClick={() => setActivePost(post)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={(e) => handleClap(post.id, e)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-250 text-xs font-mono text-slate-600 hover:text-slate-900 hover:border-blue-400 flex items-center gap-1.5 transition-all shadow-sm"
                  title="Applaud Article"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-bold">{postClaps[post.id] || 12 + Math.floor(Math.random() * 5)}</span>
                </button>

                <span className="text-xs font-mono text-blue-600 font-bold group-hover:text-blue-750 flex items-center gap-1 transition-colors">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </article>
          ))}
        </div>


        {/* TESTIMONIALS SECTION */}
        <div className="pt-12 border-t border-slate-200">
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-blue-600 font-bold">
              <Quote className="w-3.5 h-3.5 text-blue-600" />
              <span>CLIENT & PARTNER TESTIMONIALS</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900">
              Endorsements & <span className="text-blue-600">Feedback</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-3xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-4 shadow-sm hover:border-slate-300 transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed font-normal">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-250 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">{t.name}</h4>
                    <p className="text-[11px] font-mono font-bold text-blue-600">{t.role}, {t.company}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* READ POST MODAL */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-750 font-mono text-xs font-bold border border-blue-200 inline-block">
                {activePost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display leading-tight">
                {activePost.title}
              </h2>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-500 font-bold">
                <span>By Kwamu Israel</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-line border border-slate-200 shadow-inner">
              {activePost.content}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleClap(activePost.id, e)}
                  className="px-4 py-2 text-xs font-mono font-bold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <ThumbsUp className="w-4 h-4 text-blue-600" />
                  <span>Clap ({postClaps[activePost.id] || 18})</span>
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-2 text-xs font-mono font-bold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-xl flex items-center gap-1.5 shadow-sm animate-all"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-green-600 font-bold" /> : <Share2 className="w-4 h-4" />}
                  {copiedLink ? 'Link Copied!' : 'Share Article'}
                </button>
              </div>

              <button
                onClick={() => setActivePost(null)}
                className="px-5 py-2 text-xs font-mono font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
