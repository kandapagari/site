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
