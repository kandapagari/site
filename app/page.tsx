import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { about, experiences, projects, skills, publications, stats, socialLinks } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Counter from '@/components/ui/Counter';
import SectionPreview from '@/components/ui/SectionPreview';
import ProjectCard from '@/components/ui/ProjectCard';
import SkillTag from '@/components/ui/SkillTag';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';
import FeaturedBook from '@/components/sections/FeaturedBook';
import BootSequence from '@/components/ui/BootSequence';
import Typewriter from '@/components/ui/Typewriter';
import TerminalWindow from '@/components/ui/TerminalWindow';
import ASCIIDivider from '@/components/ui/ASCIIDivider';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const recentExperiences = experiences.slice(0, 3);
  const skillCategories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="mx-auto max-w-6xl px-4 font-mono sm:px-6 lg:px-8">
      {/* Hero — boot sequence */}
      <section className="pb-16 pt-20 md:pt-24">
        <BootSequence
          className="space-y-4"
          lines={[
            <p key="cmd" className="text-sm text-foreground-secondary">
              <span className="text-accent">pavan@robotics</span>
              <span className="text-foreground-secondary">:</span>
              <span className="text-accent-2">~</span>
              <span className="text-foreground-secondary">$ </span>
              whoami
            </p>,
            <p key="role" className="text-sm uppercase tracking-wider text-accent">
              <span className="text-foreground-secondary">// </span>
              {about.role} @ {about.company}
            </p>,
            <h1
              key="headline"
              className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              <Typewriter text={about.headline} />
            </h1>,
            <p
              key="intro"
              className="max-w-2xl text-base leading-relaxed text-foreground-secondary"
            >
              <span className="text-accent-2">{'>'}</span> {about.intro}
            </p>,
            <div key="cta" className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
              >
                ./view-projects
                <ArrowRight size={16} />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                wget resume.pdf
                <Download size={16} />
              </a>
            </div>,
            <div key="socials" className="flex gap-2 pt-2">
              {[
                { icon: Github, href: socialLinks.github, label: 'GitHub' },
                { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: socialLinks.email, label: 'Email' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="border border-border p-2 text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
                    aria-label={s.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <a
                href={socialLinks.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border p-2 text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
                aria-label="Google Scholar"
              >
                <GoogleScholarIcon size={18} />
              </a>
            </div>,
          ]}
        />
      </section>

      {/* Stats — readout */}
      <section className="py-6">
        <TerminalWindow title="~/stats.log">
          <div className="space-y-2 text-sm">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 100}>
                <div className="flex items-baseline gap-3">
                  <span className="text-foreground-secondary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground">{stat.label}</span>
                  <span className="min-w-4 flex-1 self-center border-b border-dashed border-border" />
                  <span className="text-xl font-bold text-accent md:text-2xl">
                    <Counter target={stat.value} suffix="+" />
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </TerminalWindow>
      </section>

      {/* Featured Book */}
      <FeaturedBook />

      {/* Experience Preview */}
      <SectionPreview title="Experience" href="/experience" command="cat experience.log">
        <div className="space-y-3">
          {recentExperiences.map((exp, i) => (
            <AnimateOnScroll
              key={exp.id}
              animation={i % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={i * 100}
            >
              <div className="border border-border bg-card-bg p-5 transition-colors hover:border-accent/50">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-accent-2">●</span>
                  <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm font-medium text-accent">@ {exp.company}</span>
                </div>
                <p className="mt-1 pl-6 text-xs text-foreground-secondary">
                  {exp.startDate} → {exp.endDate}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionPreview>

      {/* Featured Projects */}
      <SectionPreview title="Projects" href="/projects" command="ls -la projects/ --featured">
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <AnimateOnScroll
              key={project.slug}
              animation={i % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={i * 100}
            >
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </SectionPreview>

      {/* Skills Snapshot */}
      <SectionPreview title="Skills" href="/about" command="man skills">
        <div className="space-y-6">
          {skillCategories.map((category, ci) => (
            <AnimateOnScroll key={category} animation="fade-up" delay={ci * 100}>
              <div>
                <h3 className="mb-3 text-sm uppercase tracking-wider text-foreground-secondary">
                  <span className="text-accent-2">#</span> {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <SkillTag key={skill.name} skill={skill} />
                    ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionPreview>

      {/* Publications */}
      <section className="py-12 font-mono">
        <ASCIIDivider label="PUBLICATIONS" className="mb-6" />
        <AnimateOnScroll animation="blur-in">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            <span className="text-accent">$</span> cat refs.bib
          </h2>
        </AnimateOnScroll>
        <div className="space-y-3">
          {publications.map((pub, i) => (
            <AnimateOnScroll key={pub.id} animation="blur-in" delay={i * 150}>
              <div className="border border-border bg-card-bg p-5 transition-colors hover:border-accent/50">
                <div className="mb-1 flex items-center gap-2 text-xs">
                  <span className="border border-accent/40 px-2 py-0.5 uppercase text-accent">
                    @{pub.type}
                  </span>
                  <span className="text-foreground-secondary">{pub.year}</span>
                </div>
                <h3 className="text-base font-bold text-foreground">{pub.title}</h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  {pub.authors.join(', ')}
                </p>
                <p className="mt-1 text-xs text-foreground-secondary">{pub.venue}</p>
                {pub.citations && (
                  <p className="mt-2 text-xs text-foreground-secondary">
                    <span className="text-accent-2">//</span> {pub.citations} citations
                  </p>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            [view all publications]
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border py-16 font-mono">
        <AnimateOnScroll animation="blur-in">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              <span className="text-accent">$</span> ./connect.sh
            </h2>
            <p className="mb-6 text-foreground-secondary">
              <span className="text-accent-2">{'>'}</span> Interested in collaborating on ML, robotics, or foundation models? Reach out.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
              >
                ./get-in-touch
                <Mail size={16} />
              </Link>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                open linkedin
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
