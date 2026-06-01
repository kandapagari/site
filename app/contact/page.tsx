import type { Metadata } from 'next';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';
import TerminalWindow from '@/components/ui/TerminalWindow';


export const metadata: Metadata = {
  title: 'Contact',
};

const contacts = [
  {
    icon: Mail,
    label: 'email',
    value: '785pavan@gmail.com',
    href: 'mailto:785pavan@gmail.com',
  },
  {
    icon: Mail,
    label: 'email',
    value: 'pavan.kandapagari@gmail.com',
    href: 'mailto:pavan.kandapagari@gmail.com',
  },
  {
    icon: Phone,
    label: 'phone',
    value: '+49 157 39467478',
    href: 'tel:+4915739467478',
  },
  {
    icon: Phone,
    label: 'phone',
    value: '+91 8885724125',
    href: 'tel:+918885724125',
  },
  {
    icon: Github,
    label: 'github',
    value: 'github.com/kandapagari',
    href: socialLinks.github,
  },
  {
    icon: Linkedin,
    label: 'linkedin',
    value: 'linkedin.com/in/kandapagari',
    href: socialLinks.linkedin,
  },
  {
    icon: GoogleScholarIcon,
    label: 'scholar',
    value: 'Scholar Profile',
    href: socialLinks.scholar,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 font-mono sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fade-up">
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          <span className="text-accent">$</span> mail -s &quot;hello&quot;
        </h1>
        <p className="mb-12 text-foreground-secondary">
          <span className="text-accent-2">//</span> Interested in collaborating on ML, robotics, or foundation models? I&apos;d love to hear from you.
        </p>
      </AnimateOnScroll>

      <div className="grid gap-3 sm:grid-cols-2">
        {contacts.map((contact, i) => {
          const Icon = contact.icon;
          const isExternal = !contact.href.startsWith('mailto') && !contact.href.startsWith('tel');
          return (
            <AnimateOnScroll key={contact.label + contact.value} animation="fade-up" delay={i * 80}>
              <a
                href={contact.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 border border-border bg-card-bg p-5 transition-colors hover:border-accent"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-border text-accent group-hover:border-accent">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-foreground-secondary">
                    <span className="text-accent-2">--</span>{contact.label}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground group-hover:text-accent">
                    {contact.value}
                  </p>
                </div>
              </a>
            </AnimateOnScroll>
          );
        })}
      </div>

      <AnimateOnScroll animation="blur-in" delay={500}>
        <div className="mt-16">
          <TerminalWindow title="~/location.txt">
            <div className="text-center">
              <h2 className="mb-3 text-xl font-bold text-foreground">
                <span className="text-accent">{'>'}</span> Based in Munich
              </h2>
              <p className="mb-1 text-foreground-secondary">
                Agile Robots SE, Munich, Germany
              </p>
              <p className="text-sm text-foreground-secondary">
                Open to speaking opportunities, research collaborations, and consulting.
              </p>
            </div>
          </TerminalWindow>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
