import type { Metadata } from 'next';
import { about, education, skills } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SkillTag from '@/components/ui/SkillTag';
import { FaPython } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  const skillCategories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* About Me */}
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-8 text-3xl font-bold text-foreground">About Me</h1>
      </AnimateOnScroll>

      {about.aboutParagraphs.map((paragraph, i) => (
        <AnimateOnScroll key={i} animation="fade-up" delay={(i + 1) * 100}>
          <p className="mb-6 text-lg leading-relaxed text-foreground-secondary">
            {paragraph}
          </p>
        </AnimateOnScroll>
      ))}

      {/* Focus Areas */}
      <AnimateOnScroll animation="fade-up" delay={500}>
        <div className="mb-12 mt-8 rounded-lg border border-border bg-card-bg p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground-secondary">
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {about.focusAreas.map((area, i) => (
              <div key={area} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-base font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Background */}
      <AnimateOnScroll animation="fade-up" delay={600}>
        <h2 className="mb-4 text-2xl font-bold text-foreground">Background</h2>
        <p className="mb-12 leading-relaxed text-foreground-secondary">
          {about.bio}
        </p>
      </AnimateOnScroll>

      {/* Education */}
      <AnimateOnScroll animation="fade-up">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Education</h2>
      </AnimateOnScroll>
      <div className="mb-12 space-y-4">
        {education.map((edu, i) => (
          <AnimateOnScroll key={edu.degree} animation="slide-right" delay={i * 100}>
            <div className="rounded-lg border border-border bg-card-bg p-5">
              <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
              <p className="mt-1 text-xs text-foreground-secondary">
                {edu.dates} &middot; {edu.location}
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
        <h2 className="mb-6 text-2xl font-bold text-foreground">Skills</h2>
      </AnimateOnScroll>
      <div className="mb-12 space-y-6">
        {skillCategories.map((category, ci) => (
          <AnimateOnScroll key={category} animation="fade-up" delay={ci * 100}>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-secondary">
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

      {/* Certifications */}
      <AnimateOnScroll animation="fade-up">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Certifications</h2>
      </AnimateOnScroll>
      <div className="mb-12 space-y-2">
        {about.certifications.map((cert, i) => (
          <AnimateOnScroll key={cert} animation="fade-up" delay={i * 50}>
            <div className="rounded-lg border border-border bg-card-bg px-4 py-3">
              <p className="text-sm text-foreground">{cert}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Languages */}
      <AnimateOnScroll animation="fade-up">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Languages</h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {about.languages.map((lang, i) => (
          <AnimateOnScroll key={lang.name} animation="fade-up" delay={i * 50}>
            <div className="rounded-lg border border-border bg-card-bg p-4 text-center">
              <p className="text-sm font-semibold text-foreground">
                {lang.name === "Parseltongue" ? (
                  <span className="inline-flex items-center gap-1">
                    <FaPython style={{ width: 20, height: 20, display: 'inline-block', verticalAlign: 'middle', color: 'currentColor', filter: 'grayscale(100%)' }} />
                    Parseltongue
                  </span>
                ) : lang.name}
              </p>
              <p className="mt-1 text-xs text-foreground-secondary">{lang.level}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
