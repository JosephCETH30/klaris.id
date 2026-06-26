export const projects = [
  {
    id: '01',
    slug: 'halal-hero',
    title: 'HALAL HERO',
    description: 'Thousands of UMKM now get halal certified without the paperwork nightmare.',
    image: '/Halalhero_Projects_3.png',
    category: 'Web Platform',
    year: '2024',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    outcome: 'Halal certification workflow digitized end-to-end for UMKM across Indonesia.',
    challenge:
      'UMKM owners across Indonesia were drowning in fragmented halal certification paperwork — forms scattered across agencies, no clear progress tracking, and weeks lost to manual follow-ups.',
    solution:
      'We designed and built a full web platform that guides businesses through every certification step — document upload, status tracking, and agency coordination in one place.',
    role: 'Product strategy, UI/UX design, and full-stack web development.',
    deliverables: ['Web Platform', 'Admin Dashboard', 'Document Workflow'],
    testimonialId: '01',
  },
  {
    id: '02',
    slug: 'dot-projects',
    title: 'DOT PROJECTS',
    description: 'A Singapore consultancy finally has a digital presence that matches their 10 years of expertise.',
    image: '/DotProjects_Projects_2.png',
    category: 'Corporate Website',
    year: '2024',
    stack: ['Next.js', 'Framer Motion', 'CMS'],
    outcome: 'Brand positioning elevated with a site that converts visitors into consultation leads.',
    challenge:
      'After a decade of consultancy work, Dot Projects had no digital presence that reflected the quality of their expertise — prospects had nothing to evaluate before booking a call.',
    solution:
      'A polished corporate website with motion-driven storytelling, case study sections, and a CMS-backed content layer so the team can update projects without touching code.',
    role: 'Brand-aligned web design, frontend development, and CMS integration.',
    deliverables: ['Corporate Website', 'CMS Setup', 'Motion Design'],
    testimonialId: '02',
  },
  {
    id: '03',
    slug: 'quesera-skripsi',
    title: 'QUESERA SKRIPSI',
    description: 'Students stop procrastinating and actually finish their thesis, one chapter at a time.',
    image: '/Quesera_Projects_1.png',
    category: 'EdTech SaaS',
    year: '2023',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    outcome: 'Thesis completion rate improved through guided chapter-by-chapter workflows.',
    challenge:
      'University students kept stalling on their thesis — overwhelmed by structure, unsure where to start, and lacking a system to track progress chapter by chapter.',
    solution:
      'An EdTech SaaS that breaks the thesis into guided chapters with deadlines, writing prompts, and progress dashboards — turning a mountain into manageable steps.',
    role: 'End-to-end product design and full-stack SaaS development.',
    deliverables: ['SaaS Platform', 'Chapter Workflow', 'Progress Dashboard'],
    testimonialId: '03',
  },
] as const;

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export const services = [
  {
    id: '01',
    title: 'UI/UX DESIGN & RESEARCH',
    description:
      'We study how your users think, then design interfaces that feel intuitive from the first tap. From wireframes to interactive prototypes – tested, validated, and ready for development.',
  },
  {
    id: '02',
    title: 'WEB DEVELOPMENT',
    description:
      "High-performance web apps built with Next.js, React, and Tailwind CSS. Whether it's a company profile, a complex dashboard, or a full SaaS platform – we build it fast and build it right.",
  },
  {
    id: '03',
    title: 'MOBILE APP DEVELOPMENT',
    description:
      'Native-feeling apps for iOS and Android. Smooth navigation, stable performance, and the same quality experience your users expect from the web – now in their pocket.',
  },
  {
    id: '04',
    title: 'AI INTEGRATION',
    description:
      'Smart chatbots, recommendation engines, predictive analytics, and natural language processing – plugged directly into your existing product to automate what used to take hours.',
  },
  {
    id: '05',
    title: 'QUALITY ASSURANCE & TESTING',
    description:
      'Cross-platform testing, AI logic validation, and user acceptance testing before anything goes live. We catch the bugs so your users never have to.',
  },
];

export const testimonials = [
  {
    id: '01',
    name: 'Gorbiyan Khurmaini',
    role: 'CEO, HalalHero.id',
    quote:
      "Yosef finds solutions and ideas incredibly fast. We first met during a 2023 internship – and out of everyone, he was the one who actually built the website. Two years of working together, and it's been one of the most impactful partnerships we've had. Worth every bit of it.",
  },
  {
    id: '02',
    name: 'Michela Vieri',
    role: 'Product Designer NUS',
    quote:
      "He's fast – especially for someone at his level. I gave him a one-week deadline, and he finished ahead of schedule. Open to feedback, takes revisions well. So far, really helpful to work with.",
  },
  {
    id: '03',
    name: 'Yosef Rafael',
    role: 'CEO, Quesera.id',
    quote:
      "I can't exactly review myself, can I? I built both Quesera.id and Klaris.id from scratch – solo. So instead of a testimonial, just go check the product. That's my review.",
  },
];

export const brandItems = [
  { label: 'Halal Hero', src: '/halalheroidlogo-upscale 1.png' },
  { label: 'DotProjects', src: '/Gemini_Generated_Image_8dxcfa8dxcfa8dxc 1.png' },
  { label: 'QQ', src: '/Gemini_Generated_Image_smwenysmwenysmwe 1.png' },
];

export const processSteps = [
  {
    id: '01',
    title: 'Discover',
    description: 'We map your goals, users, and constraints before a single pixel is placed.',
  },
  {
    id: '02',
    title: 'Design',
    description: 'Wireframes, prototypes, and validated flows — nothing moves forward without clarity.',
  },
  {
    id: '03',
    title: 'Build',
    description: 'Clean code, fast iterations, and weekly check-ins so nothing surprises you at launch.',
  },
  {
    id: '04',
    title: 'Ship',
    description: 'Tested, deployed, and handed over with documentation. We stay until it works in production.',
  },
];

export const values = [
  {
    id: '01',
    title: 'Function Over Aesthetics',
    description: "Pretty decks don't ship products. We build things that work in the real world.",
  },
  {
    id: '02',
    title: 'Speed Without Shortcuts',
    description: "Fast delivery doesn't mean cutting corners. It means knowing exactly what to build.",
  },
  {
    id: '03',
    title: 'Radical Transparency',
    description: 'No hidden scope, no surprise invoices. You always know where the project stands.',
  },
  {
    id: '04',
    title: 'Ship, Then Iterate',
    description: 'Perfect is the enemy of live. We get you to production, then improve based on real data.',
  },
];
