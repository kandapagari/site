import type { Metadata } from "next";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact - Pavan Kumar Kandapagari",
  description: "Get in touch for collaborations and opportunities in AI/ML and robotics.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "785pavan@gmail.com",
      href: socialLinks.email,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "kandapagari",
      href: socialLinks.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/kandapagari",
      href: socialLinks.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Munich, Germany",
      href: undefined,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Get in Touch
        </h1>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl">
          Open to collaborations, research partnerships, and opportunities in
          foundation models, embodied AI, and autonomous systems.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const Wrapper = method.href ? "a" : "div";
            const linkProps = method.href
              ? {
                  href: method.href,
                  target: method.href.startsWith("mailto:") ? undefined : "_blank" as const,
                  rel: method.href.startsWith("mailto:") ? undefined : "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper key={method.label} {...linkProps}>
                <GlassCard className={method.href ? "cursor-pointer" : ""}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent-blue/10 border border-accent-blue/30">
                      <Icon className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider">
                        {method.label}
                      </p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </div>
                </GlassCard>
              </Wrapper>
            );
          })}
        </div>

        {/* CTA */}
        <GlassCard className="text-center hover:scale-100">
          <h2 className="text-2xl font-bold text-white mb-3">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Whether it&apos;s advancing VLA research, scaling foundation model training,
            or deploying AI for real-world robotics &mdash; I&apos;d love to discuss.
          </p>
          <a
            href={socialLinks.email}
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Send me an email
          </a>
        </GlassCard>
      </div>
    </div>
  );
}
