import Link from 'next/link';
import StatusBar from '@/components/ui/StatusBar';
import ASCIIDivider from '@/components/ui/ASCIIDivider';

const footerLinks = [
  { name: 'about', href: '/about' },
  { name: 'experience', href: '/experience' },
  { name: 'projects', href: '/projects' },
  { name: 'publications', href: '/publications' },
  { name: 'contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border font-mono">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ASCIIDivider label="EOF" className="mb-8" />
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-sm font-bold text-foreground">
              <span className="text-accent">$</span> whoami
            </Link>
            <p className="mt-3 text-sm text-foreground">
              Pavan Kumar Kandapagari
            </p>
            <p className="mt-1 text-sm text-foreground-secondary">
              <span className="text-accent-2">#</span> Team Lead — Foundation Models for Robotics
            </p>
            <p className="mt-1 text-sm text-foreground-secondary">
              <span className="text-accent-2">#</span> Munich, Germany
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-xs tracking-wider text-foreground-secondary">
              <span className="text-accent">$</span> ls ~/
            </h4>
            <div className="space-y-1.5">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-foreground-secondary transition-colors hover:text-accent"
                >
                  <span className="mr-1.5 text-border">&gt;</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-3 text-xs tracking-wider text-foreground-secondary">
              <span className="text-accent">$</span> cat mail.txt
            </h4>
            <p className="space-y-1.5 text-sm text-foreground-secondary">
              <a
                href="mailto:pavan.kandapagari@gmail.com"
                className="block transition-colors hover:text-accent"
              >
                pavan.kandapagari@gmail.com
              </a>
              <a
                href="mailto:785pavan@gmail.com"
                className="block transition-colors hover:text-accent"
              >
                785pavan@gmail.com
              </a>
            </p>
            <p className="mt-4 text-xs text-foreground-secondary">
              &copy; {new Date().getFullYear()} Pavan Kumar Kandapagari
            </p>
          </div>
        </div>
      </div>

      <StatusBar />
    </footer>
  );
}
