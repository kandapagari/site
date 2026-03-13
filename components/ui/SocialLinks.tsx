import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

export default function SocialLinks() {
  const socials = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="glass-effect p-3 rounded-lg hover:bg-white/10 transition-colors group"
            aria-label={social.label}
          >
            <Icon className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" />
          </a>
        );
      })}
    </div>
  );
}
