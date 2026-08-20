export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Design',
    description: 'Visual systems, user interface craft & high-converting brand aesthetics',
    iconName: 'Palette',
    skills: [
      { name: 'Figma', highlight: true },
      { name: 'Canva' },
      { name: 'UI/UX Design', highlight: true },
      { name: 'Wireframing' },
      { name: 'Visual Design', highlight: true },
      { name: 'Branding' },
      { name: 'Design Systems' },
      { name: 'Prototyping' },
    ]
  },
  {
    category: 'Development',
    description: 'Clean, modern, responsive frontend code engineered for 60fps performance',
    iconName: 'Code2',
    skills: [
      { name: 'React', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Vite' },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'HTML5 Semantic' },
      { name: 'CSS3 / Modern Layouts' },
      { name: 'Framer Motion' },
      { name: 'Responsive Architecture' },
    ]
  },
  {
    category: 'AI / Creative Technology',
    description: 'Next-gen interfaces, autonomous workflows & interactive digital concepts',
    iconName: 'Cpu',
    skills: [
      { name: 'AI Product Design', highlight: true },
      { name: 'Generative AI' },
      { name: 'AI Interfaces', highlight: true },
      { name: 'Automation Workflows' },
      { name: 'AI-Powered Web Experiences', highlight: true },
      { name: 'Prompt Engineering' },
      { name: 'Creative Tech Prototypes' },
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Strategy & Vision',
    description: 'Understand the business, target audience, core values and conversion goals before writing a single line of code.',
    deliverables: ['Goal alignment', 'Competitor audit', 'Brand positioning', 'User journey mapping'],
    accent: '#c8ff00'
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'Aesthetic & Structure',
    description: 'Create the visual direction, wireframes, typographic hierarchy and interactive prototypes that elevate the brand.',
    deliverables: ['UI/UX Wireframes', 'Visual style system', 'Interactive prototype', 'Component design'],
    accent: '#38bdf8'
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Engineering & Craft',
    description: 'Turn the design into a responsive, lightning-fast, high-performance website using modern frontend frameworks.',
    deliverables: ['Clean React code', 'Tailwind styling', 'Smooth animations', 'Cross-browser testing'],
    accent: '#a855f7'
  },
  {
    step: '04',
    title: 'Refine',
    tagline: 'Polish & Deployment',
    description: 'Polish interactions, optimize loading speeds, verify mobile responsiveness, and ensure bulletproof deployment.',
    deliverables: ['Lighthouse 95+ score', 'SEO optimization', 'Responsive QA', 'Live launch'],
    accent: '#10b981'
  }
];

export const STATS_DATA = [
  {
    value: '15+',
    label: 'Websites & digital projects',
    sublabel: 'Shipped & live on the web',
    accent: '#c8ff00'
  },
  {
    value: '5+',
    label: 'Creative categories',
    sublabel: 'From AI SaaS to luxury salons & food',
    accent: '#38bdf8'
  },
  {
    value: '3',
    label: 'Core disciplines',
    sublabel: 'Design • Frontend • Creative Tech',
    accent: '#a855f7'
  },
  {
    value: '∞',
    label: 'Ideas to build',
    sublabel: 'Constantly exploring new horizons',
    accent: '#10b981'
  }
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Websites',
    tagline: 'Modern & Conversion-Driven',
    description: 'High-impact business websites, landing pages and company websites crafted with bespoke typography, smooth interactions, and lightning-fast load times.',
    features: ['Custom Brand Aesthetic', 'Conversion Optimization', '100% Responsive Architecture', 'SEO & Speed Optimized'],
    icon: 'Globe'
  },
  {
    number: '02',
    title: 'UI/UX Design',
    tagline: 'Intuitive & Memorable',
    description: 'Thoughtfully designed interfaces, design systems, wireframes, and interactive prototypes that solve real business problems and delight users.',
    features: ['User Journey & Wireframes', 'Design Systems & Tokens', 'Figma Prototyping', 'Interaction Design'],
    icon: 'Layers'
  },
  {
    number: '03',
    title: 'AI Websites',
    tagline: 'Intelligent & Futuristic',
    description: 'Next-gen AI SaaS interfaces, prompt-driven applications, intelligent dashboards, and conversational products built with futuristic dark luxury aesthetics.',
    features: ['AI SaaS Dashboards', 'Workflow Automation UI', 'Real-Time Streaming Displays', 'Futuristic Visuals'],
    icon: 'Sparkles'
  },
  {
    number: '04',
    title: 'Creative Development',
    tagline: 'Experimental & Dynamic',
    description: 'Interactive web experiments, micro-animations, 3D/canvas effects, and fluid transitions that make digital experiences truly unforgettable.',
    features: ['Framer Motion Animations', 'Interactive Canvas / WebGL', 'Micro-interactions', 'Awwwards-Tier Polish'],
    icon: 'Flame'
  }
];

export const ABOUT_DOMAINS = [
  'Business websites',
  'Restaurant & café websites',
  'Beauty & salon websites',
  'Fitness websites',
  'AI products',
  'SaaS interfaces',
  'Creative experiments',
  'Landing pages'
];
