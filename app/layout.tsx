import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Pavan Kumar Kandapagari — Foundation Models & Robotics',
    template: '%s | Pavan Kumar Kandapagari',
  },
  description:
    'Team Lead for Foundation Models at Agile Robots SE. Specializing in Vision-Language-Action models, imitation learning, and distributed training for intelligent robotic agents.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Pavan Kumar Kandapagari',
    description:
      'Team Lead for Foundation Models at Agile Robots SE, Munich. Building intelligent robots that see and act.',
    url: 'https://kandapagari.vercel.app',
    siteName: 'Pavan Kumar Kandapagari',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="google8cd2dfcf0b7e156c.html" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var applied = theme === 'dark' || (!theme && dark);
                  document.documentElement.setAttribute('data-theme', applied ? 'dark' : 'light');
                  document.body.style.backgroundColor = applied ? '#020617' : '#ffffff';
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* SEO Meta Tags */}
        <meta property="og:title" content="Pavan Kumar Kandapagari — Foundation Models & Robotics" />
        <meta property="og:description" content="Team Lead for Foundation Models at Agile Robots SE. Specializing in Vision-Language-Action models, imitation learning, and distributed training for intelligent robotic agents." />
        <meta property="og:image" content="/icon.svg" />
        <meta property="og:url" content="https://kandapagari.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pavan Kumar Kandapagari — Foundation Models & Robotics" />
        <meta name="twitter:description" content="Team Lead for Foundation Models at Agile Robots SE. Specializing in Vision-Language-Action models, imitation learning, and distributed training for intelligent robotic agents." />
        <meta name="twitter:image" content="/icon.svg" />
        <meta name="twitter:site" content="@kandapagari" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
