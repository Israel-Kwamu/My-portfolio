import { Skill, Project, Experience, NexarisProduct, RoadmapItem, BlogPost, Testimonial } from '../types';
import krebersProjectImg from '../assets/images/krebers_project_image_1786140730347.jpg';

export const PERSONAL_INFO = {
  name: "Israel Kwamu",
  title: "Full-Stack Web Developer | Founder & CEO, Nexaris Labs",
  location: "Lagos, Nigeria",
  email: "kwamuisrael@gmail.com",
  phone: "+234 703 035 4276",
  tagline: "Dynamic full-stack web developer building modular Angular & Node.js applications and scalable SaaS solutions.",
  mission: "I build modern web applications and innovative software solutions that help businesses automate processes, improve productivity, and scale globally.",
  aboutText: "Dynamic full-stack web developer with hands-on experience at Morrtech Solutions, specializing in Angular and Node.js. Proficient in building modular applications, designing RESTful APIs, and managing asynchronous data flows. Committed to delivering high-quality results through innovative problem solving and effective collaboration. Skilled in TypeScript and adept at enhancing application performance. As Founder of Nexaris Labs, I build world-class web systems that empower modern organizations.",
  company: {
    name: "Nexaris Labs",
    role: "Founder & CEO",
    description: "Nexaris Labs is a technology company focused on building innovative software solutions, SaaS products, and AI-powered business tools that help organizations operate more efficiently and scale globally.",
    vision: "To lead the next era of digital transformation across emerging markets and enterprise ecosystems by architecting robust, autonomous software systems.",
    mission: "To empower modern enterprises with high-throughput automation engines, intuitive web platforms, and intelligent business tools."
  },
  socials: {
    github: "https://github.com/Israel-Kwamu",
    linkedin: "https://www.linkedin.com/in/israel-kwamu/",
    twitter: "https://x.com/kwamuisrael",
    email: "mailto:kwamuisrael@gmail.com"
  },
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Delivered", value: "18+" },
    { label: "Framework Expertise", value: "Angular & Node" },
    { label: "Nexaris Products", value: "3" }
  ]
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: "Angular framework", category: "Frontend", icon: "Layers", level: 95, description: "Modular components, reactive forms, RxJS, NgRx state management, SPA architecture" },
  { name: "RxJS state management", category: "Frontend", icon: "Zap", level: 94, description: "Observables, reactive state streams, custom operators, async data flow pipeline" },
  { name: "TypeScript language", category: "Frontend", icon: "Code", level: 96, description: "Strict static typing, interfaces, generics, high-throughput web application code" },
  { name: "React", category: "Frontend", icon: "Atom", level: 92, description: "Hooks, Context, JSX components, SPA interfaces, state synchronization" },
  { name: "Bootstrap framework", category: "Frontend", icon: "Grid", level: 90, description: "Rapid responsive grid prototyping, utility components, cross-device layouts" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Palette", level: 95, description: "Utility-first design systems, custom dark mode, glassmorphism UI layouts" },

  // Backend
  { name: "Server-side Node.js", category: "Backend", icon: "Server", level: 95, description: "Event-driven asynchronous backend services, high-concurrency event loops" },
  { name: "Express.js framework", category: "Backend", icon: "Cpu", level: 96, description: "RESTful API route design, custom middleware pipelines, authentication gates" },
  { name: "REST APIs & CRUD", category: "Backend", icon: "Shield", level: 98, description: "JSON REST endpoint architecture, CRUD database mutations, HTTP status handling" },
  { name: "Asynchronous programming", category: "Backend", icon: "Activity", level: 96, description: "Promises, Async/Await concurrency, non-blocking I/O operations" },

  // Databases
  { name: "MongoDB (NoSQL)", category: "Databases", icon: "HardDrive", level: 94, description: "Document schemas, Mongoose ORM models, aggregation pipelines, JSON storage" },
  { name: "PostgreSQL & MySQL", category: "Databases", icon: "Database", level: 88, description: "Relational database design, SQL queries, index optimization" },
  { name: "Firebase", category: "Databases", icon: "Zap", level: 92, description: "Firestore real-time sync, Authentication, Cloud Security Rules" },

  // Tools
  { name: "Git & GitHub", category: "Tools", icon: "GitBranch", level: 96, description: "Version control, branching strategies, PR code reviews, remote repositories" },
  { name: "NPM package management", category: "Tools", icon: "Box", level: 95, description: "Package dependency resolution, scripts automation, module publishing" },
  { name: "Docker & Deployment", category: "Tools", icon: "Container", level: 88, description: "Containerization, Vercel, Cloud Run hosting, Nginx reverse proxy" }
];

export const PROJECTS: Project[] = [
  {
    id: "kwamu-co",
    title: "Kwamu & Co Firm Workspace",
    category: "SaaS",
    description: "An institutional compliance, tax filing, audit engagement, and document workflow management platform for professional service and accounting firms.",
    longDescription: "Kwamu & Co Firm Workspace is an institutional compliance, tax filing, audit engagement, and document workflow management platform specifically designed for professional service and accounting firms. It features a Provided-By-Client (PBC) document tracker, role-based workspaces, a centralized DMS with file previewing, Google Workspace integrations (Drive & Gmail v1), and automated client onboarding audit trails.",
    tags: ["React 19", "TypeScript", "Node.js", "Express.js", "Firebase", "Google Workspace API", "Tailwind CSS"],
    metrics: "Live Production Deployment on Render",
    liveUrl: "https://kwamuandco.onrender.com/",
    githubUrl: "https://github.com/Israel-Kwamu/Kwamu-Co",
    featured: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Provided-By-Client (PBC) Document Tracker for audit and tax document workflows with automated status logs",
      "Role-Based Workspaces tailored for Admins, Partners, Audit Managers, Compliance Officers, and Client Portals",
      "Centralized Document Management System (DMS) with file previewing, access controls, and status management",
      "Google Workspace REST API integrations for direct Google Drive file imports and automated Gmail follow-ups",
      "Client Onboarding & Compliance Tracker managing step-by-step milestones with immutable audit trails"
    ],
    architecture: ["React 19 SPA", "Express API Server (esbuild)", "Firebase Firestore, Storage & Auth", "Google Workspace APIs"]
  },
  {
    id: "lovely-bride",
    title: "LOVELY BRIDE Destination Platform",
    category: "E-Commerce & SaaS",
    description: "Nigeria’s premier luxury bridal destination web application, featuring gown showcases, consultation bookings, and store operations analytics.",
    longDescription: "LOVELY BRIDE is Nigeria’s premier luxury bridal destination web application. It offers brides a bespoke experience to browse exclusive gown collections, book personalized bridal consultations, read verified client testimonials, and manage store operations through an integrated administrative dashboard.",
    tags: ["React 19", "TypeScript", "React Router v7", "Tailwind CSS v4", "Firebase", "Node.js", "Express.js", "Recharts", "Google GenAI"],
    metrics: "Live Production Deployment on Render",
    liveUrl: "https://lovelybride.onrender.com/",
    githubUrl: "https://github.com/Israel-Kwamu/lovelybride",
    featured: true,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Bridal Gown Showcase & Collection Catalog featuring high-resolution imagery, silhouettes, fabric details, and availability filters",
      "Consultation Booking System for personalized fitting appointments linked with real-time Firebase Firestore persistence",
      "Admin Management Dashboard for shop managers to track bookings, approve customer testimonials, and edit gown catalog items",
      "Public Client Testimonials & Ratings gallery with star reviews and admin approval workflows",
      "Real-time Analytics Dashboard visualizing booking trends, gown popularities, and performance stats with Recharts",
      "Adaptive Luxury Theme Engine supporting seamless light and dark mode switching with instant persistence"
    ],
    architecture: ["React 19 SPA", "Express Backend API", "Firebase Firestore & Auth", "Recharts Visualizer Engine"]
  },
  {
    id: "ince-ledger",
    title: "INCE Consulting Ledger",
    category: "Enterprise",
    description: "An enterprise-grade correspondence tracking, audit logging, and registry management platform for consulting firms, legal agencies, and compliance units.",
    longDescription: "INCE Consulting Ledger is an enterprise-grade correspondence tracking, audit logging, and registry management platform built for consulting firms, legal agencies, and compliance units. It streamlines client intake, tracks regulatory review statuses, and maintains an immutable audit trail of all corporate records with real-time Firebase authentication, Firestore security rules, multi-format data exports (PDF/Excel/JSON), and interactive Recharts analytics.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Express.js", "Recharts", "jsPDF", "XLSX"],
    metrics: "Live Production Deployment on Render",
    liveUrl: "https://ince-ledger.onrender.com/",
    githubUrl: "https://github.com/Israel-Kwamu/INCE-Ledger",
    featured: true,
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Dual-mode role-based authentication (Email/Password & Google OAuth) with hardcoded email whitelisting & Firebase Auth",
      "Real-Time Executive Analytics: Interactive Recharts dashboards for registry volume velocity and active compliance metrics",
      "Comprehensive Records Registry with multi-filter search (agency, compliance status, date range) and inline editing",
      "Multi-Format Data Export: One-click automated report generation supporting PDF (formatted tables via jsPDF), Excel (.xlsx), and JSON",
      "Immutable Security Audit Log tracking timestamps, user identity, action types, and detailed before/after diffs",
      "Public Correspondence Intake Portal for client intake and secure file attachment submissions"
    ],
    architecture: ["React 18 SPA", "Express Server (Node.js)", "Firebase Firestore & Auth", "Recharts & jsPDF Export Engine"]
  },
  {
    id: "molly-luxury-empire",
    title: "MOLLY LUXURY EMPIRE",
    category: "E-Commerce & SaaS",
    description: "A luxury e-commerce application and bespoke salon portal for a high-end wholesale & retail hair vendor in Lagos, Nigeria.",
    longDescription: "MOLLY LUXURY EMPIRE is a luxury-grade e-commerce application and bespoke salon portal for a high-end wholesale & retail hair vendor based in Festac Town, Lagos. It showcases 100% human raw Indonesian & Vietnamese hair extensions, custom glueless HD lace wigs, and double-drawn bundles, alongside consultation slot scheduling, admin management dashboard, real-time Firebase Firestore integration, and direct WhatsApp commerce order routing.",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4", "React Router v7", "Firebase", "Express.js", "Motion", "WhatsApp API"],
    metrics: "Live Production Deployment on Render",
    liveUrl: "https://mollyluxuryempire.onrender.com",
    githubUrl: "https://github.com/Israel-Kwamu/MLE",
    featured: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Dynamic Product Collections & Filtering: Interactive catalog with category and silhouette filtering for raw hair, bespoke wigs, and bundle extensions",
      "Consultation & Slot Booking Engine: Interactive appointment scheduling system for showroom fittings and remote consultations",
      "Real-Time Firebase Firestore Integration: Persistent management for customer appointments, product inventories, and client testimonials",
      "Admin Management Dashboard: Portal for managing bookings, reviewing product listings, and approving client reviews",
      "Interactive Experience & Scroll Effects: Smooth Framer Motion parallax transitions, top progress indicators, and back-to-top navigation",
      "Direct WhatsApp Commerce Integration: One-touch direct order routing for instant customer service and inquiries via WhatsApp"
    ],
    architecture: ["React 19 SPA", "Express Node Server", "Firebase Cloud Firestore", "WhatsApp Commerce Gateway"]
  },
  {
    id: "nexaris-form",
    title: "Nexaris Form (Project Intake & CRM)",
    category: "SaaS",
    description: "Multi-step client project intake and lead acquisition portal integrated directly with an executive CRM admin dashboard.",
    longDescription: "Nexaris Form is a multi-step client project intake and lead acquisition portal integrated directly with an executive CRM admin dashboard for managing inquiries, scoping projects, and tracking conversion pipelines. Features KanBan & table views for tracking leads, internal notes & activity timelines, role-based admin auth, and interactive Recharts conversion analytics.",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4", "React Router v7", "Firebase", "Node.js", "Express.js", "Recharts", "Motion"],
    metrics: "Live Production Deployment on Render",
    liveUrl: "https://nexaris-form.onrender.com/",
    githubUrl: "https://github.com/Israel-Kwamu/Nexaris-form",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Client Intake Portal: Multi-step project inquiry form with scope selection, budget range pickers, timeline estimators, and submission confirmation",
      "Lead Pipeline CRM: KanBan & table views for tracking lead status (New, Contacted, In Review, Proposal Sent, Closed Won, Closed Lost)",
      "Internal Notes & Activity Timelines: Log interactions, attach internal notes, apply custom tags, and mark high-priority leads with star flags",
      "Admin Authentication & Access Control: Role-based dashboard protection powered by Firebase Authentication and Firestore security rules",
      "Analytics & Visualizations: Interactive charts powered by Recharts showing lead submission trends, conversion rates, and budget distributions"
    ],
    architecture: ["React 19 SPA", "Express API Server", "Firebase Firestore & Auth", "Recharts Analytics Engine"]
  },
  {
    id: "krebers",
    title: "Krebers",
    category: "E-Commerce & SaaS",
    description: "A modern, high-performance e-commerce platform designed for online shopping with an advanced passcode-protected administrative dashboard.",
    longDescription: "Krebers is a modern, high-performance e-commerce platform designed for online shopping. It provides users with a fluid, secure shopping experience from product discovery to payment, backed by an advanced, passcode-protected administrative dashboard for store managers. It features real-time FX currency conversions, dynamic local state cart & wishlist management, Paystack checkout flow, and custom Owl Carousel displays.",
    tags: ["Angular 16", "TypeScript", "RxJS", "Bootstrap CSS", "Owl Carousel", "jQuery", "Paystack API", "LocalStorage"],
    metrics: "Production E-Commerce & Admin Live",
    liveUrl: "https://krebers.vercel.app/admin",
    githubUrl: "https://github.com/Israel-Kwamu/Krebers",
    featured: true,
    image: krebersProjectImg,
    highlights: [
      "Dynamic FX Currency Switching: Active currency service converting prices in real-time across USD, EUR, GBP, NGN, and other global currencies.",
      "Aesthetic Cart & Wishlist System: Dynamic local state manager supporting custom color swatch selections, item quantities, and immediate wishlist sync.",
      "Secure Admin Control Suite: Passcode-protected administrator portal offering real-time shop performance analytics, order tracking, and inventory control.",
      "Secure Checkout & Payments: Integrated with @paystack/inline-js to process online debit card and transfer transactions securely.",
      "Modern Interactive Showcase: Touch-responsive media carousels and immersive product displays powered by Owl Carousel and polished layouts."
    ],
    architecture: ["Angular 16 SPA", "RxJS State Streaming", "Local Storage Database", "Paystack Inline Gateway"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-nexaris",
    role: "Founder & CEO",
    company: "Nexaris Labs",
    period: "2024 — Present",
    location: "Lagos, Nigeria",
    description: "Leading the strategic product vision, software architecture, and engineering execution at Nexaris Labs. Spearheading the development of SaaS web applications that automate business operations.",
    achievements: [
      "Built and launched 3 flagship software products (Workflow Engine, Tax Management SaaS, Pulse Analytics)",
      "Architected high-scale Angular frontend SPAs and Express/Node.js backend RESTful APIs",
      "Integrated secure authentication gates, RxJS state management, and real-time dashboard analytics",
      "Maintained 99.9% availability for enterprise web clients across West Africa"
    ],
    skills: ["Strategic Leadership", "Angular", "Node.js", "Express.js", "MongoDB", "TypeScript", "RxJS"],
    isCurrent: true
  },
  {
    id: "exp-morrtech",
    role: "Full-Stack Web Development Certification & Experience",
    company: "Morrtech Solutions",
    period: "January 2024 — January 2026",
    location: "Lagos, Nigeria",
    description: "Completed intensive training and production project delivery in the Angular ecosystem alongside full-stack integration using Node.js, Express.js, and MongoDB.",
    achievements: [
      "Mastered the creation of modular, reusable Angular components and implemented reactive state management with RxJS to improve application responsiveness.",
      "Designed RESTful APIs and managed asynchronous data flows using Express.js and Node.js, ensuring seamless client-server communication.",
      "Acquired new full-stack skills and applied them diligently to enhance task efficiency and code modularity.",
      "Executed daily operational software tasks with precision, completing assigned deliverables punctually despite challenging time constraints."
    ],
    skills: ["Angular Framework", "TypeScript", "Node.js", "Express.js", "MongoDB", "RxJS", "REST APIs", "Bootstrap", "Git & GitHub"]
  }
];

export const NEXARIS_PRODUCTS: NexarisProduct[] = [
  {
    id: "prod-kwamu-co",
    name: "Kwamu & Co Firm Workspace",
    tagline: "Institutional Operations & Compliance Platform",
    status: "Live",
    category: "Legal & Accounting Compliance",
    description: "An institutional compliance, tax filing, audit engagement, and document workflow management platform designed for professional service and accounting firms.",
    features: [
      "Provided-By-Client (PBC) Document Tracker with automated status logs",
      "Role-Based Workspaces for Admins, Partners, Audit Managers, and Client Portals",
      "Centralized DMS with role permissions & instant file previewing",
      "Google Workspace integrations (Google Drive import & Gmail notifications)"
    ],
    impact: "Streamlines institutional audit engagements and client document collection by 70%.",
    icon: "ShieldCheck"
  },
  {
    id: "prod-lovely-bride",
    name: "LOVELY BRIDE",
    tagline: "Luxury Bridal Destination & Booking SaaS",
    status: "Live",
    category: "Luxury E-Commerce & Store Operations",
    description: "Nigeria’s premier luxury bridal destination web application, offering brides a bespoke experience to browse exclusive gown collections and book consultations.",
    features: [
      "Exclusive Bridal Gown Showcase with silhouette and fabric filters",
      "Direct Fitting Consultation Booking backed by Firebase Firestore",
      "Store Operations Admin Portal with approval workflows & Recharts analytics",
      "Client Testimonials & Ratings with verified review badges"
    ],
    impact: "Digitizes luxury bridal consultations, gown collection management, and store metrics.",
    icon: "Sparkles"
  },
  {
    id: "prod-nexaris-form",
    name: "Nexaris Form",
    tagline: "Client Intake Portal & Lead Acquisition CRM",
    status: "Live",
    category: "CRM & Lead Pipeline",
    description: "A multi-step client project intake portal integrated with an executive CRM admin dashboard for managing inquiries, scoping projects, and tracking lead pipelines.",
    features: [
      "Multi-step client project intake portal with scope & budget selection",
      "Executive Lead Pipeline CRM with KanBan & table status views",
      "Activity timelines, internal interaction logs, and priority flags",
      "Role-based Firebase Auth & Firestore rules with Recharts analytics"
    ],
    impact: "Automates lead intake, project scoping, and client conversion pipelines.",
    icon: "FileText"
  },
  {
    id: "prod-ince-ledger",
    name: "INCE Consulting Ledger",
    tagline: "Enterprise Audit & Compliance Portal",
    status: "Live",
    category: "Enterprise Compliance & Audit",
    description: "An enterprise-grade correspondence tracking, audit logging, and registry management platform built for consulting firms, legal agencies, and compliance units.",
    features: [
      "Dual-mode Firebase Auth (Email/Pass & Google OAuth) with whitelisting",
      "Records registry with multi-filter search, inline editing & attachment tracking",
      "One-click automated report export to PDF (jsPDF), Excel (.xlsx) & JSON",
      "Immutable security audit log tracking user identity and before/after diffs"
    ],
    impact: "Centralizes corporate registry correspondence and maintains immutable audit security trails.",
    icon: "FileCheck"
  },
  {
    id: "prod-molly-luxury-empire",
    name: "MOLLY LUXURY EMPIRE",
    tagline: "Luxury E-Commerce & Salon Booking Portal",
    status: "Live",
    category: "Luxury Retail & Booking SaaS",
    description: "A luxury-grade e-commerce application and bespoke salon portal for a high-end wholesale & retail hair vendor in Lagos, Nigeria.",
    features: [
      "Interactive catalog filtering 100% raw human hair & custom glueless HD lace wigs",
      "Showroom fitting appointment scheduling backed by real-time Firestore",
      "Admin portal for managing bookings, inventory, and client reviews",
      "Direct WhatsApp commerce integration for instant order routing"
    ],
    impact: "Digitizes luxury hair sales, salon bookings, and direct WhatsApp customer inquiries.",
    icon: "ShoppingBag"
  }
];

export const NEXARIS_ROADMAP: RoadmapItem[] = [
  {
    quarter: "Q1 2026",
    title: "Nexaris AI Agent Assistant",
    description: "Integrating Gemini LLM agents into Nexaris Workflow for autonomous natural-language process creation.",
    status: "In Progress"
  },
  {
    quarter: "Q2 2026",
    title: "Mobile App Companion (iOS & Android)",
    description: "Cross-platform mobile workspace enabling real-time approval pushes and instant business monitoring.",
    status: "Upcoming"
  },
  {
    quarter: "Q3 2026",
    title: "Enterprise API Marketplace",
    description: "Open developer API hub allowing 3rd-party software creators to publish custom Nexaris integrations.",
    status: "Upcoming"
  },
  {
    quarter: "Q4 2026",
    title: "Global Multi-Currency Billing Hub",
    description: "Expanding financial integration gateways for seamless international billing across Europe and North America.",
    status: "Upcoming"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Architecting Scalable Angular Applications with Enterprise RxJS Patterns",
    category: "Angular Development",
    date: "July 18, 2026",
    readTime: "6 min read",
    summary: "How to manage state cleanly in enterprise Angular applications using reactive streams, custom RxJS operators, and immutable state buffers.",
    tags: ["Angular", "RxJS", "TypeScript", "Software Architecture"],
    content: `Building large-scale Angular applications requires strict state boundaries and declarative programming paradigms. In this guide, we explore how RxJS streams reduce state mutation bugs and streamline data hydration across micro-frontends.

### Key Takeaways
1. **Unidirectional Data Streams**: Always prefer BehaviorSubjects or Signals to enforce single sources of truth.
2. **Custom RxJS Operators**: Encapsulate repetitive error handling and retry logic into clean, reusable custom operators.
3. **Memory Leak Prevention**: Utilize \`takeUntilDestroyed()\` or the async pipe to clean up subscriptions automatically.

By adhering to these patterns at Nexaris Labs, our Angular platforms achieve fluid 60fps UI performance even under continuous real-time data sync.`
  },
  {
    id: "post-2",
    title: "React 19 Server Components & High-Throughput Web Performance",
    category: "React Development",
    date: "June 24, 2026",
    readTime: "8 min read",
    summary: "Deep dive into React 19's server actions, compiler optimizations, and strategies for achieving sub-100ms Core Web Vitals.",
    tags: ["React", "Next.js", "Performance", "Web Development"],
    content: `React 19 revolutionizes how we think about client-side JavaScript execution. By offloading data fetching and initial rendering to server components, we eliminate massive client bundle sizes.

### Optimization Strategies
- **Zero-Bundle Dependencies**: Moving heavy computation libraries to the server tier.
- **Optimistic UI Updates**: Using \`useOptimistic\` for instantaneous user feedback prior to network acknowledgement.
- **Server Actions with CSRF Protection**: Streamlining secure form mutations without writing boilerplate API endpoints.

This paradigm shift allowed us to decrease First Contentful Paint (FCP) on Nexaris SaaS products by over 50%.`
  },
  {
    id: "post-3",
    title: "From Code to Company: Lessons Building Nexaris Labs as a Founder",
    category: "Entrepreneurship",
    date: "May 12, 2026",
    readTime: "10 min read",
    summary: "Practical insights on transitioning from a senior full-stack engineer to founding a software company, validating SaaS ideas, and building for scale.",
    tags: ["Entrepreneurship", "SaaS", "Leadership", "Startups"],
    content: `Transitioning from writing code to running a software company requires shifting focus from technical perfection to user value creation.

### Essential Lessons
1. **Solve Real Operational Pain**: Never build a solution looking for a problem. Talk to business owners, find where they waste hours, and build software that fixes it.
2. **Ship Fast & Iterate**: Perfection is the enemy of progress. Launch an MVP, gather feedback, and continuously refine.
3. **Architecture Matters Early**: While shipping fast is vital, cutting corners on database security or authentication will cost 10x later.

At Nexaris Labs, our vision is built on these foundational principles.`
  },
  {
    id: "post-4",
    title: "Designing Event-Driven Microservices with Node.js & NestJS",
    category: "Software Architecture",
    date: "April 02, 2026",
    readTime: "7 min read",
    summary: "A practical guide to building fault-tolerant microservices using NestJS, Redis pub/sub queues, and PostgreSQL for enterprise reliability.",
    tags: ["Node.js", "NestJS", "Microservices", "Backend"],
    content: `When scaling backend services beyond single monoliths, event-driven architecture ensures decoupled systems that fail gracefully without cascading outages.

### Core Principles
- **Message Queues**: Offload heavy computation (like PDF generation or email dispatching) to asynchronous worker pools.
- **Idempotent Handlers**: Ensure every event handler can process duplicate payloads safely without duplicating database records.
- **Comprehensive Tracing**: Implement correlation IDs across HTTP and message queue headers for end-to-end logging.`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Babajide Adeleke",
    role: "Chief Operating Officer",
    company: "Vanguard Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    content: "Kwamu and the Nexaris Labs team transformed our entire operations workflow. The custom platform reduced our manual processing time by over 45% within the first month. Incredible technical expertise and attention to detail.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Dr. Amina Yusuf",
    role: "Head of Finance",
    company: "Crestview Capital",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    content: "The Tax Management SaaS built by Kwamu Israel is world-class. It handles complex tax calculations effortlessly and seamlessly reconciles our financial records. He is one of the sharpest full-stack engineers I have worked with.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Tunde Ojo",
    role: "Co-Founder & CTO",
    company: "FinScale Tech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    content: "Kwamu brings a rare combination of deep architectural mastery and visionary product leadership. His work on high-concurrency Node.js microservices set a new benchmark for performance in our tech stack.",
    rating: 5
  }
];
