import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Briefcase,
  Code2,
  Database,
  Gauge,
  LayoutDashboard,
  MessageSquareText,
  Table2,
  Target,
  Wrench,
} from 'lucide-react'

export const profile = {
  name: 'Jimmy Yoon',
  email: 'jimmy.yoon21@gmail.com',
  role: 'Data Analyst / Marketing Analyst / Growth-minded independent contributor',
  headline: 'Turning messy data into decisions teams can use.',
  summary:
    'Data analyst with a Computer Science background and 7+ years of experience turning marketing, customer, product, and web data into automated reporting, campaign insights, and measurable business outcomes.',
  resumeHref: '/assets/JimmyYoon_Data_Analyst_Resume_2026.pdf',
  github: 'https://github.com/McVisual',
  linkedin: 'https://www.linkedin.com/in/jimmy-yoon-52953692',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '7+ yrs', label: 'analytics and marketing execution' },
  { value: '+15%', label: 'engagement lift through testing' },
  { value: '-10%', label: 'churn reduction from journey optimization' },
  { value: '+30%', label: 'faster campaign reporting workflows' },
]

export const experience = [
  {
    company: 'Nationwide Pet Insurance',
    title: 'Marketing Data Analyst / Email Marketing Manager',
    dates: 'Jun 2019 - Present',
    summary:
      'Owns lifecycle campaign analysis, reporting, and optimization across Salesforce Marketing Cloud journeys.',
    bullets: [
      'Built and executed lifecycle campaign analysis in Salesforce Marketing Cloud, using segmentation, dynamic content, A/B tests, and multivariate tests to raise engagement 15% and reduce churn 10%.',
      'Defined audience, engagement, churn, and journey-performance metrics with Product, Data, and Marketing teams, translating campaign results into optimization recommendations.',
      'Analyzed campaign performance in Google Analytics and Salesforce Marketing Cloud reporting to improve targeting, content, send timing, and retention outcomes.',
      'Developed responsive HTML/CSS and AMPscript email assets with QA, accessibility, deliverability, and personalization controls.',
    ],
  },
  {
    company: 'JVC Kenwood USA Corp.',
    title: 'SaaS Developer / Data Automation Analyst',
    dates: 'Oct 2017 - Jan 2019',
    summary:
      'Built internal analytics-enabled applications and SQL-backed workflows for marketing automation and reporting.',
    bullets: [
      'Developed and maintained internal web applications using ReactJS, ASP.NET, SQL, and Azure to support marketing automation, analytics tools, and stakeholder reporting.',
      'Built REST API integrations and SQL-backed workflows that enabled personalized, data-driven email campaigns and increased targeted reach by 20%.',
      'Partnered with product and marketing stakeholders to deliver analytics-enabled features that improved campaign performance and user engagement by 17%.',
      'Maintained application data flows and reporting logic, improving consistency between customer data, campaign systems, and internal dashboards.',
    ],
  },
  {
    company: 'Virtual Graffiti',
    title: 'Web Developer / Reporting Automation Analyst',
    dates: 'Jun 2016 - Oct 2017',
    summary:
      'Automated marketing workflows and analytics tooling while supporting conversion-focused web experiences.',
    bullets: [
      'Automated marketing workflows and integrated analytics tooling, improving campaign reporting speed by 30%.',
      'Designed and deployed responsive web assets, landing pages, and email templates using .NET Core, JavaScript, and SQL Server.',
      'Partnered with designers, marketers, and business stakeholders to launch conversion-focused pages and support product-led growth initiatives.',
    ],
  },
]

export type SkillGroup = {
  title: string
  icon: LucideIcon
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Analytics',
    icon: BarChart3,
    items: [
      'SQL',
      'Google Analytics',
      'Campaign analytics',
      'Funnel analysis',
      'Lifecycle analysis',
      'A/B testing',
      'Multivariate testing',
      'Retention analysis',
      'Customer segmentation',
      'KPI definition',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: [
      'Salesforce Marketing Cloud',
      'SFMC reporting',
      'Excel',
      'SQL Server',
      'Azure',
      'REST APIs',
      'ReactJS',
      'ASP.NET / .NET Core',
      'Shopify',
      'AMPscript',
    ],
  },
  {
    title: 'Marketing / Growth',
    icon: Target,
    items: [
      'Lifecycle campaigns',
      'Journey optimization',
      'Personalization',
      'Dynamic content',
      'Send timing analysis',
      'Deliverability QA',
      'Product launch support',
      'Repeat-purchase analysis',
    ],
  },
  {
    title: 'Business Communication',
    icon: MessageSquareText,
    items: [
      'Stakeholder requirements',
      'Data storytelling',
      'Metric translation',
      'Dashboard QA',
      'Cross-functional partnership',
      'Clear recommendations',
      'Reporting automation',
    ],
  },
]

export const capabilities = [
  {
    icon: Database,
    title: 'Find the useful signal',
    text: 'Turns ambiguous business questions into measurable KPIs, segments, and repeatable analysis paths.',
  },
  {
    icon: LayoutDashboard,
    title: 'Build reporting that lasts',
    text: 'Automates reporting workflows and QA checks so teams can trust the numbers before acting on them.',
  },
  {
    icon: Gauge,
    title: 'Connect analysis to action',
    text: 'Translates campaign, journey, and funnel patterns into recommendations for targeting, timing, content, and retention.',
  },
]

export const projects = [
  {
    name: 'Smart PetBrush E-commerce Analytics',
    eyebrow: 'Resume-backed project',
    problem:
      'Understand how segmentation, messaging, and merchandising decisions affected customer engagement and repeat purchases.',
    approach:
      'Launched and optimized Shopify storefronts, integrated analytics and reporting, and used campaign results to guide lifecycle strategy.',
    tools: ['Shopify', 'Segmentation', 'Campaign reporting', 'Lifecycle analysis'],
    result: '35% customer engagement increase and 12% repeat-purchase lift.',
    href: '#case-study',
    linkLabel: 'See related case study',
  },
  {
    name: 'Ravenous',
    eyebrow: 'React / API',
    problem:
      'Create a usable local search experience from structured restaurant/business data returned by an external API.',
    approach:
      'Built a React search interface with controlled inputs, API request flow, result mapping, and sorting controls.',
    tools: ['React', 'REST API', 'Data mapping', 'Search UI'],
    result: 'Public API-backed search interface. TODO: add live demo link or usage outcome.',
    href: 'https://github.com/McVisual/Ravenous',
    linkLabel: 'View repo',
  },
  {
    name: 'Weather Card',
    eyebrow: 'JavaScript / API',
    problem:
      'Make location-based weather API data readable in a compact, responsive interface.',
    approach:
      'Used browser geolocation, API request handling, condition rendering, and Fahrenheit/Celsius switching.',
    tools: ['JavaScript', 'Geolocation', 'API UI', 'Responsive layout'],
    result: 'Working weather interface. TODO: add source API details and live demo link.',
    href: 'https://github.com/McVisual/weather-card',
    linkLabel: 'View repo',
  },
  {
    name: 'Image Gallery',
    eyebrow: 'JavaScript / UI',
    problem:
      'Create a simple interactive browsing pattern with thumbnail state and main-image display.',
    approach:
      'Built a static JavaScript gallery with DOM event handling, active image state, and a responsive thumbnail grid.',
    tools: ['HTML/CSS', 'JavaScript', 'Interaction state', 'Responsive UI'],
    result: 'Interactive gallery pattern. TODO: add visual QA notes or deployed demo link.',
    href: 'https://github.com/McVisual/image-gallery',
    linkLabel: 'View repo',
  },
]

export const featuredCaseStudy = {
  title: 'Lifecycle Campaign Analytics',
  subtitle: 'Turning journey data into retention decisions',
  steps: [
    {
      label: 'Business question',
      text: 'How can lifecycle journeys improve engagement and reduce churn without adding noise for customers?',
    },
    {
      label: 'Data used',
      text: 'Salesforce Marketing Cloud engagement and journey-performance reporting, audience segments, A/B and multivariate test results, and Google Analytics behavior signals.',
    },
    {
      label: 'Analysis approach',
      text: 'Defined journey KPIs, segmented audiences, analyzed test performance, diagnosed content and timing patterns, and translated findings into campaign recommendations.',
    },
    {
      label: 'Key insight',
      text: 'Personalized journeys and tested content/timing changes created measurable engagement and retention gains when paired with disciplined QA.',
    },
    {
      label: 'Recommendation',
      text: 'Keep lifecycle optimization tied to a clear metric set: engagement, churn, journey step performance, audience fit, and deliverability quality.',
    },
    {
      label: 'Result / value',
      text: 'Raised engagement 15% and reduced churn 10%. TODO: add business-unit context and time period if approved for public use.',
    },
  ],
}

export const education = [
  'California State University, Fullerton - B.S. Computer Science, Class of 2017',
  'Product School - Product Management Certification, 2019',
]

export const sceneryCards = [
  { label: 'KPI map', className: 'prop-card prop-card-a' },
  { label: 'SQL', className: 'prop-card prop-card-b' },
  { label: 'Funnel notes', className: 'prop-card prop-card-c' },
  { label: 'Case study', className: 'prop-card prop-card-d' },
  { label: 'Contact', className: 'prop-card prop-card-e' },
]

export const sceneryTools = [
  Table2,
  BarChart3,
  Code2,
  LayoutDashboard,
  Database,
  Gauge,
  Briefcase,
]
