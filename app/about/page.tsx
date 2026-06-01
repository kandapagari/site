import type { Metadata } from 'next';
import { about, education, skills } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SkillTag from '@/components/ui/SkillTag';
import TerminalWindow from '@/components/ui/TerminalWindow';
import ASCIIDivider from '@/components/ui/ASCIIDivider';
import { FaPython } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  const skillCategories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 font-mono sm:px-6 lg:px-8">
      {/* About Me */}
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-8 text-3xl font-bold text-foreground">
          <span className="text-accent">$</span> cat about.md
        </h1>
      </AnimateOnScroll>

      {about.aboutParagraphs.map((paragraph, i) => (
        <AnimateOnScroll key={i} animation="fade-up" delay={(i + 1) * 100}>
          <p className="mb-6 leading-relaxed text-foreground-secondary">
            {paragraph}
          </p>
        </AnimateOnScroll>
      ))}

      {/* Focus Areas */}
      <AnimateOnScroll animation="fade-up" delay={500}>
        <div className="mb-12 mt-8">
          <TerminalWindow title="~/focus_areas">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <span className="text-accent" aria-hidden="true">▸</span>
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </AnimateOnScroll>

      {/* Background */}
      <AnimateOnScroll animation="fade-up" delay={600}>
        <ASCIIDivider label="BACKGROUND" className="mb-6" />
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          <span className="text-accent">$</span> history
        </h2>
        <p className="mb-12 leading-relaxed text-foreground-secondary">
          {about.bio}
        </p>
      </AnimateOnScroll>

      {/* Education */}
      <AnimateOnScroll animation="fade-up">
        <ASCIIDivider label="EDUCATION" className="mb-6" />
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          <span className="text-accent">$</span> cat education.log
        </h2>
      </AnimateOnScroll>
      <div className="mb-12 space-y-4">
        {education.map((edu, i) => (
          <AnimateOnScroll key={edu.degree} animation="slide-right" delay={i * 100}>
            <div className="border border-border bg-card-bg p-5 transition-colors hover:border-accent/50">
              <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
              <p className="mt-1 text-sm font-medium text-accent">@ {edu.institution}</p>
              <p className="mt-1 text-xs text-foreground-secondary">
                {edu.dates} <span className="text-border">//</span> {edu.location}
              </p>
              {edu.details && (
                <p className="mt-2 text-sm text-foreground-secondary">{edu.details}</p>
              )}
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Skills */}
      <AnimateOnScroll animation="fade-up">
        <ASCIIDivider label="SKILLS" className="mb-6" />
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          <span className="text-accent">$</span> man skills
        </h2>
      </AnimateOnScroll>
      <div className="mb-12 space-y-6">
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

      {/* Certifications */}
      <AnimateOnScroll animation="fade-up">
        <ASCIIDivider label="CERTIFICATIONS" className="mb-6" />
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          <span className="text-accent">$</span> ls certs/
        </h2>
      </AnimateOnScroll>
      <div className="mb-12 space-y-2">
        {about.certifications.map((cert, i) => (
          <AnimateOnScroll key={cert} animation="fade-up" delay={i * 50}>
            <div className="border border-border bg-card-bg px-4 py-3">
              <p className="text-sm text-foreground">
                <span className="mr-2 text-accent">✓</span>
                {cert}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Languages */}
      <AnimateOnScroll animation="fade-up">
        <ASCIIDivider label="LANGUAGES" className="mb-6" />
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          <span className="text-accent">$</span> locale -a
        </h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {about.languages.map((lang, i) => (
          <AnimateOnScroll key={lang.name} animation="fade-up" delay={i * 50}>
            <div className="border border-border bg-card-bg p-4 transition-colors hover:border-accent/50">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                {lang.name === 'Parseltongue' ? (
                  <>
                    <FaPython
                      style={{
                        width: 16,
                        height: 16,
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        color: 'currentColor',
                        filter: 'grayscale(100%)',
                      }}
                    />
                    Parseltongue
                  </>
                ) : (
                  lang.name
                )}
              </p>
              <p className="mt-1 text-xs text-foreground-secondary">
                <span className="text-accent-2">{'>'}</span> {lang.level}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
