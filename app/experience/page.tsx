import type { Metadata } from 'next';
import { experiences } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ExperienceCard from '@/components/ui/ExperienceCard';

export const metadata: Metadata = {
  title: 'Experience',
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-4 text-3xl font-bold text-foreground">Experience</h1>
        <p className="mb-12 text-foreground-secondary">
          My professional journey from mechanical engineering to leading foundation models for robotics.
        </p>
      </AnimateOnScroll>

      <div>
        {experiences.map((exp, i) => (
          <AnimateOnScroll
            key={exp.id}
            animation={i % 2 === 0 ? 'slide-left' : 'slide-right'}
            delay={i * 80}
          >
            <ExperienceCard
              experience={exp}
              isLast={i === experiences.length - 1}
            />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
