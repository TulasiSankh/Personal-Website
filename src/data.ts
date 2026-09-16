import {
  Code2,
  Server,
  Building2,
  MapPin,
  Layout,
  Monitor,
  Database,
  Wrench,
  GraduationCap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  FileDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export const profile = {
  name: 'Tulasi Sugandhi',
  role: 'Software Engineer & Frontend Developer',
  headline: 'Building modern web experiences with clean, practical engineering.',
  description:
    "I'm Tulasi Sugandhi, a Software Engineer and Frontend Developer focused on building responsive, user-friendly web applications with React.js, Next.js and JavaScript, with additional experience in Java, Spring Boot and REST APIs.",
  location: 'Bengaluru, Karnataka, India',
  company: 'ClickCrawl Media Pvt. Ltd.',
  linkedin: 'https://www.linkedin.com/in/tulasi-sugandhi/',
  github: 'https://github.com/TulasiSankh',
  email: 'sankhtulasi@gmail.com',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const heroTechBadges = [
  'React.js',
  'Next.js',
  'JavaScript',
  'Java',
  'Spring Boot',
  'REST APIs',
];

export const snapshotCards = [
  {
    icon: Code2,
    title: 'Frontend Development',
    items: ['React.js', 'Next.js', 'JavaScript'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    icon: Building2,
    title: 'Current Role',
    items: ['Software Engineer', 'ClickCrawl Media'],
  },
  {
    icon: MapPin,
    title: 'Location',
    items: ['Bengaluru', 'India'],
  },
];

export const aboutCards = [
  {
    icon: Layout,
    title: 'Strong Frontend Development',
    description:
      'Building responsive, accessible interfaces with React.js and modern JavaScript, focusing on component reusability and clean architecture.',
  },
  {
    icon: Monitor,
    title: 'Product-focused UI',
    description:
      'Translating design requirements into polished, user-friendly interfaces that work seamlessly across devices and screen sizes.',
  },
  {
    icon: Zap,
    title: 'REST API Integration',
    description:
      'Connecting frontend applications to backend services through well-structured REST APIs, handling authentication, data flow and error states.',
  },
  {
    icon: Layers,
    title: 'Full-stack Understanding',
    description:
      'Working knowledge of Java, Spring Boot and databases — enabling effective collaboration across the full application stack.',
  },
];

export type SkillCategory = {
  icon: typeof Code2;
  name: string;
  skills: string[];
  theme: 'brand' | 'accent' | 'navy' | 'emerald' | 'amber';
};

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
    theme: 'brand',
  },
  {
    icon: Server,
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'ASP.NET MVC', 'JWT'],
    theme: 'accent',
  },
  {
    icon: Database,
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    theme: 'navy',
  },
  {
    icon: Wrench,
    name: 'Tools',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'Postman', 'JIRA', 'VS Code', 'Figma'],
    theme: 'emerald',
  },
  {
    icon: Sparkles,
    name: 'AI / Emerging',
    skills: ['AI integrations', 'Embeddings', 'RAG', 'Generative AI', 'AI application development'],
    theme: 'amber',
  },
];

export const skillThemeMap: Record<
  SkillCategory['theme'],
  { iconBg: string; badge: string; border: string; dot: string; iconText: string }
> = {
  brand: {
    iconBg: 'bg-brand-100 text-brand-600',
    badge: 'bg-brand-50 text-brand-700 border-brand-200',
    border: 'group-hover:border-brand-300',
    dot: 'bg-brand-500',
    iconText: 'text-brand-600',
  },
  accent: {
    iconBg: 'bg-accent-100 text-accent-600',
    badge: 'bg-accent-50 text-accent-700 border-accent-200',
    border: 'group-hover:border-accent-300',
    dot: 'bg-accent-500',
    iconText: 'text-accent-600',
  },
  navy: {
    iconBg: 'bg-navy-100 text-navy-600',
    badge: 'bg-navy-50 text-navy-700 border-navy-200',
    border: 'group-hover:border-navy-300',
    dot: 'bg-navy-500',
    iconText: 'text-navy-600',
  },
  emerald: {
    iconBg: 'bg-emerald-100 text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    border: 'group-hover:border-emerald-300',
    dot: 'bg-emerald-500',
    iconText: 'text-emerald-600',
  },
  amber: {
    iconBg: 'bg-amber-100 text-amber-600',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    border: 'group-hover:border-amber-300',
    dot: 'bg-amber-500',
    iconText: 'text-amber-600',
  },
};

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'ClickCrawl Media Pvt. Ltd.',
    period: 'Apr 2024 – Present',
    location: 'Bengaluru, India',
    current: true,
    responsibilities: [
      'Building responsive web applications with React.js and modern JavaScript, focusing on component reusability and clean code architecture.',
      'Integrating REST APIs to connect frontend interfaces with backend services, handling authentication flows and data state management.',
      'Developing and maintaining business applications, translating requirements into functional, user-friendly interfaces.',
      'Creating reusable component libraries to accelerate development and ensure consistency across application workflows.',
      'Debugging and resolving frontend issues, optimising rendering performance and improving application reliability.',
      'Collaborating with backend and database teams to ensure seamless data flow and application workflow integration.',
    ],
  },
];

export const projects = [
  {
    title: 'AI Document Comparison Tool',
    tagline: 'Semantic document comparison powered by AI',
    description:
      'An AI-powered document comparison application that compares documents using semantic similarity rather than relying only on exact text matching.',
    tech: ['Python', 'Streamlit', 'FastAPI', 'Sentence Transformers', 'Pytest', 'GitHub Actions'],
    features: [
      'TXT, PDF and DOCX document ingestion',
      'Document text extraction and processing',
      'Semantic embedding-based comparison',
      'Concurrent embedding generation',
      'Upload validation & extracted-text validation',
      'Automated testing with Pytest',
      'GitHub Actions CI',
      'Modular project structure',
    ],
    github: 'https://github.com/TulasiSankh/ai-document-comparison-tool',
    icon: FileText,
    featured: true,
    gradient: 'from-brand-600 via-brand-500 to-accent-500',
    badgeBg: 'bg-white/10',
    badgeText: 'text-white',
    badgeBorder: 'border-white/20',
    cardClass: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'LifeDocs',
    tagline: 'Secure Document Vault & AI Expiry Tracker',
    description:
      'A secure document vault with AI-assisted information extraction and automated expiry tracking. Users can organise documents, receive reminders before expiry dates, and manage everything through a responsive dashboard.',
    tech: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI-assisted workflows', 'Git/GitHub', 'Vercel'],
    features: [
      'AI-assisted document information extraction',
      'Expiry tracking with automated reminders',
      'Document organisation and categorisation',
      'Responsive dashboard for document management',
    ],
    icon: ShieldCheck,
    featured: false,
    gradient: 'from-accent-500 to-accent-700',
    badgeBg: 'bg-accent-50',
    badgeText: 'text-accent-700',
    badgeBorder: 'border-accent-200',
    cardClass: '',
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'JNTUK Affiliated College',
    period: '2020 – 2024',
    location: 'Andhra Pradesh, India',
  },
  {
    degree: 'Intermediate (10+2)',
    field: 'MPC — Mathematics, Physics, Chemistry',
    institution: 'Board of Intermediate Education',
    period: '2018 – 2020',
    location: 'Andhra Pradesh, India',
  },
  {
    degree: 'SSC (10th Standard)',
    field: 'Secondary Education',
    institution: 'Board of Secondary Education',
    period: '2017 – 2018',
    location: 'Andhra Pradesh, India',
  },
];

export const icons = {
  Code2,
  Server,
  Building2,
  MapPin,
  Layout,
  Monitor,
  Database,
  Wrench,
  GraduationCap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  FileDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileText,
  Layers,
  Zap,
  CheckCircle2,
};
