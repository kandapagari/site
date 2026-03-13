import type { Metadata } from 'next';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';


export const metadata: Metadata = {
  title: 'Contact',
};

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: '785pavan@gmail.com',
    href: 'mailto:785pavan@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 157 39467478',
    href: 'tel:+4915739467478',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kandapagari',
    href: socialLinks.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kandapagari',
    href: socialLinks.linkedin,
  },
  {
    icon: GoogleScholarIcon,
    label: 'Google Scholar',
    value: 'Scholar Profile',
    href: socialLinks.scholar,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-4 text-3xl font-bold text-foreground">Contact</h1>
        <p className="mb-12 text-lg text-foreground-secondary">
          Interested in collaborating on ML, robotics, or foundation models? I&apos;d love to hear from you.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <AnimateOnScroll key={contact.label} animation="fade-up" delay={i * 80}>
              <a
                href={contact.href}
                target={contact.href.startsWith('mailto') || contact.href.startsWith('tel') ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto') || contact.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 rounded-lg border border-border bg-card-bg p-5 transition-all hover:bg-card-bg-hover hover:border-accent/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-foreground-secondary">{contact.label}</p>
                  <p className="text-sm font-medium text-foreground">{contact.value}</p>
                </div>
              </a>
            </AnimateOnScroll>
          );
        })}
      </div>

      <AnimateOnScroll animation="blur-in" delay={500}>
        <div className="mt-16 rounded-lg border border-border bg-card-bg p-8 text-center">
          <h2 className="mb-3 text-xl font-bold text-foreground">Based in Munich</h2>
          <p className="mb-1 text-foreground-secondary">
            Agile Robots SE, Munich, Germany
          </p>
          <p className="text-sm text-foreground-secondary">
            Open to speaking opportunities, research collaborations, and consulting.
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
