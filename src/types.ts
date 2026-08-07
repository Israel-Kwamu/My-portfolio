export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools';
  icon: string;
  level: number; // 0 - 100
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'SaaS' | 'Enterprise' | 'E-Commerce & SaaS';
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
  highlights: string[];
  architecture?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface NexarisProduct {
  id: string;
  name: string;
  tagline: string;
  status: 'Live' | 'Beta' | 'In Development';
  description: string;
  features: string[];
  category: string;
  impact: string;
  icon: string;
}

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}
