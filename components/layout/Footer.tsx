import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-dark/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold gradient-text">
              Pavan Kumar Kandapagari
            </Link>
            <p className="text-text-secondary text-sm mt-2">
              Tech Lead | Foundation Models &amp; Embodied AI
            </p>
            <p className="text-text-muted text-sm mt-1">Munich, Germany</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Experience", "Projects", "Publications", "Skills", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="text-text-secondary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-text-muted text-xs mt-4">
              785pavan@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Pavan Kumar Kandapagari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
