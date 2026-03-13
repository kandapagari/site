import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { about, experiences, projects, skills, publications, stats, socialLinks } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Counter from '@/components/ui/Counter';
import SectionPreview from '@/components/ui/SectionPreview';
import ProjectCard from '@/components/ui/ProjectCard';
import SkillTag from '@/components/ui/SkillTag';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const recentExperiences = experiences.slice(0, 3);
  const skillCategories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="pb-16 pt-20 md:pt-28">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-4 text-sm font-medium tracking-wider text-accent uppercase">
            {about.role} @ {about.company}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {about.headline}
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground-secondary">
            {about.intro}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-bg"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="flex gap-3">
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
                  className="rounded-md p-2 text-foreground-secondary transition-colors hover:text-accent hover:bg-card-bg"
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
              className="rounded-md p-2 text-foreground-secondary transition-colors hover:text-accent hover:bg-card-bg"
              aria-label="Google Scholar"
            >
              <GoogleScholarIcon size={18} />
            </a>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Stats */}
      <section className="border-y border-border py-10">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} animation="slide-left" delay={i * 150}>
              <div>
                <div className="text-3xl font-bold text-foreground md:text-4xl">
                  <Counter target={stat.value} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-foreground-secondary">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Experience Preview */}
      <SectionPreview title="Experience" href="/experience">
        <div className="space-y-4">
          {recentExperiences.map((exp, i) => (
            <AnimateOnScroll
              key={exp.id}
              animation={i % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={i * 100}
            >
              <div className="rounded-lg border border-border bg-card-bg p-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-sm font-medium text-accent">{exp.company}</span>
                </div>
                <p className="mt-1 text-xs text-foreground-secondary">
                  {exp.startDate} — {exp.endDate}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionPreview>

      {/* Featured Projects */}
      <SectionPreview title="Projects" href="/projects">
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
      <SectionPreview title="Skills" href="/about">
        <div className="space-y-6">
          {skillCategories.map((category, ci) => (
            <AnimateOnScroll key={category} animation="fade-up" delay={ci * 100}>
              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground-secondary uppercase tracking-wider">
                  {category}
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
      <section className="py-16">
        <AnimateOnScroll animation="blur-in">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Publications & Patents</h2>
        </AnimateOnScroll>
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <AnimateOnScroll key={pub.id} animation="blur-in" delay={i * 150}>
              <div className="rounded-lg border border-border bg-card-bg p-5">
                <div className="mb-1 flex items-center gap-2">
                  <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent uppercase">
                    {pub.type}
                  </span>
                  <span className="text-xs text-foreground-secondary">{pub.year}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{pub.title}</h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  {pub.authors.join(', ')}
                </p>
                <p className="mt-1 text-xs text-foreground-secondary">{pub.venue}</p>
                {pub.citations && (
                  <p className="mt-2 text-xs text-foreground-secondary">
                    {pub.citations} citations
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
            View all publications
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border py-16">
        <AnimateOnScroll animation="blur-in">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Let&apos;s connect</h2>
            <p className="mb-6 text-foreground-secondary">
              Interested in collaborating on ML, robotics, or foundation models? Reach out.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Get in Touch
                <Mail size={16} />
              </Link>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-bg"
              >
                LinkedIn
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
