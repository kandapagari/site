import Link from 'next/link';
import { Github, Linkedin, Mail, Youtube, Instagram, Twitter } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import GoogleScholarIcon from '@/components/ui/GoogleScholarIcon';


const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Publications', href: '/publications' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-foreground"
            >
              Pavan Kumar Kandapagari
            </Link>
            <p className="mt-2 text-sm text-foreground-secondary">
              Team Lead — Foundation Models for Robotics
            </p>
            <p className="mt-1 text-sm text-foreground-secondary">
              Munich, Germany
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-foreground-secondary transition-colors hover:text-accent hover:bg-card-bg" aria-label="GitHub"><Github size={18} /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-foreground-secondary transition-colors hover:text-accent hover:bg-card-bg" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-foreground-secondary transition-colors hover:text-accent hover:bg-card-bg" aria-label="X"><Twitter size={18} /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-foreground-secondary transition-colors hover:text-accent hover:bg-card-bg" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-foreground-secondary transition-colors hover:text-accent hover:bg-card-bg" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
            <p className="mt-3 text-xs text-foreground-secondary">
              <a href="mailto:pavan.kandapagari@gmail.com" className="hover:text-accent transition-colors">pavan.kandapagari@gmail.com</a><br />
              <a href="mailto:785pavan@gmail.com" className="hover:text-accent transition-colors">785pavan@gmail.com</a><br />
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-foreground-secondary">
            &copy; {new Date().getFullYear()} Pavan Kumar Kandapagari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
