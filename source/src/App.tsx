import { useRef, type ReactNode } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  FolderOpen,
  GitBranch,
  Link2,
  Mail,
  Rocket,
  Send,
  Sparkles,
} from 'lucide-react'
import { motion, MotionConfig, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  capabilities,
  education,
  experience,
  featuredCaseStudy,
  heroStats,
  navItems,
  profile,
  projects,
  sceneryCards,
  sceneryTools,
  skillGroups,
} from './content'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const storyRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end end'],
  })

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to portfolio content
      </a>
      <Header />
      <main id="main" ref={storyRef} className="story-shell">
        <StoryScenery progress={scrollYProgress} />
        <div className="story-panels">
          <HeroPanel />
          <AboutPanel />
          <ExperiencePanel />
          <SkillsPanel />
          <ProjectsPanel />
          <CaseStudyPanel />
          <ResumePanel />
          <ContactPanel />
        </div>
      </main>
    </MotionConfig>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#hero" aria-label="Jimmy Yoon home">
        <span className="brand-initials">JY</span>
        <span>
          <strong>Jimmy Yoon</strong>
          <small>Analytics IC</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-resume" href={profile.resumeHref} download>
        <Download size={17} aria-hidden="true" />
        <span>Resume</span>
      </a>
    </header>
  )
}

function StoryScenery({ progress }: { progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const shouldReduceMotion = useReducedMotion()
  const trackX = useTransform(progress, [0, 1], ['0vw', '-560vw'])
  const cloudX = useTransform(progress, [0, 1], ['0vw', '-210vw'])
  const foregroundX = useTransform(progress, [0, 1], ['0vw', '-650vw'])

  return (
    <div className="scenery" aria-hidden="true">
      <motion.div className="cloud-strip" style={{ x: shouldReduceMotion ? 0 : cloudX }}>
        <span className="paper-cloud cloud-one" />
        <span className="paper-cloud cloud-two" />
        <span className="paper-cloud cloud-three" />
        <span className="paper-cloud cloud-four" />
      </motion.div>

      <motion.div className="world-track" style={{ x: shouldReduceMotion ? 0 : trackX }}>
        <div className="ground ground-green" />
        <div className="ground ground-blue" />
        <div className="ground ground-coral" />
        <div className="ground ground-slate" />
        <PaperDashboard className="dashboard-one" />
        <PaperDashboard className="dashboard-two" />
        <PaperNotebook />
        <PaperLighthouse />
        <PaperTent />
        <PaperMailbox />
        {sceneryCards.map((card) => (
          <span key={card.className} className={card.className}>
            {card.label}
          </span>
        ))}
      </motion.div>

      <motion.div className="foreground-strip" style={{ x: shouldReduceMotion ? 0 : foregroundX }}>
        <PaperCart />
        {sceneryTools.map((Icon, index) => (
          <span key={`tool-token-${index}`} className={`tool-token token-${index + 1}`}>
            <Icon size={24} strokeWidth={2.2} aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function HeroPanel() {
  return (
    <section id="hero" className="story-panel hero-panel" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="eyebrow">{profile.role}</p>
        <h1 id="hero-title">
          <span>{profile.name}</span>
          {profile.headline}
        </h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="button-row" aria-label="Primary actions">
          <a className="paper-button button-dark" href={profile.resumeHref} download>
            <Download size={18} aria-hidden="true" />
            Resume
          </a>
          <a className="paper-button" href="#projects">
            <FolderOpen size={18} aria-hidden="true" />
            Projects
          </a>
          <a className="paper-button" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            Contact
          </a>
        </div>
        <dl className="hero-stats">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.figure
        className="hero-art"
        initial={{ opacity: 0, y: 28, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
      >
        <img
          src="/assets/papercraft-analytics-hero.webp"
          alt="Papercraft analytics notebook with charts, dashboard cards, laptop, pencils, and spreadsheet notes"
        />
        <figcaption>analytics notebook</figcaption>
      </motion.figure>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>scroll / drag to explore</span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </section>
  )
}

function AboutPanel() {
  return (
    <ChapterSection
      id="about"
      eyebrow="About"
      title="An analyst who stays close to both the question and the workflow."
      className="about-panel"
    >
      <div className="about-layout">
        <div className="paper-note large-note">
          <p>
            I work where analysis meets execution: SQL-backed workflows, web and email development,
            Google Analytics, Salesforce Marketing Cloud reporting, customer segmentation, and
            campaign testing.
          </p>
          <p>
            My strongest work starts with an unclear business question and ends with something a
            team can use: a KPI definition, a dashboard, an automated report, a QA path, or a clear
            recommendation for what to change next.
          </p>
        </div>
        <div className="capability-grid" aria-label="Analytics strengths">
          {capabilities.map((capability) => (
            <motion.article
              className="capability-card"
              key={capability.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              <capability.icon size={28} aria-hidden="true" />
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </ChapterSection>
  )
}

function ExperiencePanel() {
  return (
    <ChapterSection
      id="experience"
      eyebrow="Experience"
      title="Resume experience reframed around analyst IC impact."
      className="experience-panel"
    >
      <div className="timeline">
        {experience.map((role, index) => (
          <motion.article
            className="timeline-card"
            key={`${role.company}-${role.dates}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="timeline-pin" />
            <div className="timeline-topline">
              <span>{role.dates}</span>
              <strong>{role.company}</strong>
            </div>
            <h3>{role.title}</h3>
            <p>{role.summary}</p>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </ChapterSection>
  )
}

function SkillsPanel() {
  return (
    <ChapterSection
      id="skills"
      eyebrow="Skills"
      title="Analytics, tools, growth context, and business communication."
      className="skills-panel"
    >
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skill-card"
            key={group.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="card-heading">
              <group.icon size={24} aria-hidden="true" />
              <h3>{group.title}</h3>
            </div>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </ChapterSection>
  )
}

function ProjectsPanel() {
  return (
    <ChapterSection
      id="projects"
      eyebrow="Projects"
      title="Mini data case studies and technical builds."
      className="projects-panel"
    >
      <div className="project-grid">
        {projects.map((project, index) => {
          const isExternal = project.href.startsWith('http')
          return (
            <motion.article
              className="project-card"
              key={project.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="project-topline">
                <span>{project.eyebrow}</span>
                <a
                  href={project.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  aria-label={`${project.linkLabel} for ${project.name}`}
                >
                  {project.linkLabel}
                  {isExternal ? (
                    <ExternalLink size={15} aria-hidden="true" />
                  ) : (
                    <ArrowRight size={15} aria-hidden="true" />
                  )}
                </a>
              </div>
              <h3>{project.name}</h3>
              <dl className="case-mini">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{project.approach}</dd>
                </div>
                <div>
                  <dt>Result</dt>
                  <dd>{project.result}</dd>
                </div>
              </dl>
              <ul className="tag-list compact">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </ChapterSection>
  )
}

function CaseStudyPanel() {
  return (
    <ChapterSection
      id="case-study"
      eyebrow="Featured case study"
      title={featuredCaseStudy.title}
      subtitle={featuredCaseStudy.subtitle}
      className="case-study-panel"
    >
      <div className="case-study-grid">
        {featuredCaseStudy.steps.map((step, index) => (
          <motion.article
            className="case-step"
            key={step.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.label}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </ChapterSection>
  )
}

function ResumePanel() {
  return (
    <ChapterSection
      id="resume"
      eyebrow="Resume"
      title="A clean PDF for recruiter review."
      className="resume-panel"
    >
      <div className="resume-layout">
        <article className="resume-sheet">
          <FileText size={42} aria-hidden="true" />
          <h3>JimmyYoon_Data_Analyst_Resume_2026.pdf</h3>
          <p>
            The resume in this repo is already a PDF and is linked from every resume CTA on the
            site.
          </p>
          <div className="button-row">
            <a className="paper-button button-dark" href={profile.resumeHref} download>
              <Download size={18} aria-hidden="true" />
              Download PDF
            </a>
            <a className="paper-button" href={profile.resumeHref} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              Open resume
            </a>
          </div>
        </article>
        <div className="education-list">
          <h3>Education</h3>
          <ul>
            {education.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChapterSection>
  )
}

function ContactPanel() {
  return (
    <section id="contact" className="story-panel contact-panel" aria-labelledby="contact-title">
      <motion.div
        className="contact-copy"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Looking for analyst IC roles where data turns into action.</h2>
        <p>
          Best fit: data analyst, marketing analyst, growth analyst, business analyst, lifecycle
          analytics, or analytics-focused roles that need someone who can define the metric, build
          the report, QA the workflow, and explain the recommendation.
        </p>
        <div className="contact-actions" aria-label="Contact links">
          <a className="paper-button button-dark" href={`mailto:${profile.email}`}>
            <Send size={18} aria-hidden="true" />
            {profile.email}
          </a>
          <a className="paper-button" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Link2 size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a className="paper-button" href={profile.github} target="_blank" rel="noreferrer">
            <GitBranch size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </motion.div>
      <footer>
        <span>Built from scratch for Jimmy Yoon.</span>
        <a href="#hero">Back to top</a>
      </footer>
    </section>
  )
}

function ChapterSection({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`story-panel chapter-panel ${className ?? ''}`} aria-labelledby={`${id}-title`}>
      <motion.div
        className="chapter-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={`${id}-title`}>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </motion.div>
      {children}
    </section>
  )
}

function PaperDashboard({ className }: { className: string }) {
  return (
    <div className={`paper-dashboard ${className}`}>
      <span className="dash-chart" />
      <span className="dash-line dash-line-a" />
      <span className="dash-line dash-line-b" />
      <span className="dash-line dash-line-c" />
    </div>
  )
}

function PaperNotebook() {
  return (
    <div className="paper-notebook">
      <span />
      <span />
      <span />
    </div>
  )
}

function PaperCart() {
  return (
    <div className="paper-cart">
      <span className="cart-body">
        <Rocket size={33} aria-hidden="true" />
      </span>
      <span className="cart-wheel wheel-left" />
      <span className="cart-wheel wheel-right" />
      <span className="cart-handle" />
    </div>
  )
}

function PaperLighthouse() {
  return (
    <div className="paper-lighthouse">
      <span className="beam" />
      <span className="tower" />
      <span className="roof" />
      <span className="window" />
    </div>
  )
}

function PaperTent() {
  return (
    <div className="paper-tent">
      <span className="tent-back" />
      <span className="tent-front" />
      <span className="tent-door" />
    </div>
  )
}

function PaperMailbox() {
  return (
    <div className="paper-mailbox">
      <Mail size={34} aria-hidden="true" />
      <Sparkles size={20} aria-hidden="true" />
    </div>
  )
}

export default App
