import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function Home() {
  const heroSkills = [
    "VLA Models",
    "Imitation Learning",
    "Foundation Models",
    "Distributed Training",
    "Computer Vision",
    "MLOps & Edge AI",
  ];

  const contactSocials = [
    { icon: Github, href: "https://github.com/kandapagari", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kandapagari/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:785pavan@gmail.com", label: "Email" },
  ];

  return (
    <>
      <div className="min-h-screen gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-accent-cyan text-lg">
                Hello there, I&apos;m
              </p>

              <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                Pavan Kumar
              </h1>

              <h2 className="text-2xl md:text-3xl text-text-secondary">
                Kandapagari
              </h2>

              <p className="text-accent-cyan text-sm font-medium tracking-wider uppercase">
                Tech Lead | Foundation Models &amp; Embodied AI
              </p>

              <p className="text-xl text-text-secondary max-w-xl">
                R&amp;D Tech Lead specializing in Vision-Language-Action (VLA) models and
                Imitation Learning for autonomous agents. Bridging research innovation and
                production at scale.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 glass-effect rounded-lg text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative">
              <GlassCard className="p-8">
                <div className="relative aspect-square bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl overflow-hidden border border-accent-blue/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text">PK</div>
                    <p className="text-text-secondary text-sm mt-2">
                      Tech Lead &amp; AI Researcher
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="mt-20">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                What I Work On
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {heroSkills.map((skill, index) => (
                  <MotionCard
                    key={skill}
                    index={index}
                    skill={skill}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-8">
              Let&apos;s connect and build something amazing together
            </p>
            <div className="flex justify-center gap-6">
              {contactSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="glass-effect p-4 rounded-lg hover:bg-white/10 transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-text-secondary group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MotionCard({ skill, index }: { skill: string; index: number }) {
  const colorSchemes = [
    "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
  ];

  return (
    <div
      className={`bg-gradient-to-br ${colorSchemes[index % 3]} rounded-xl p-6 border ${colorSchemes[index % 3].split(" ")[2]} hover:scale-105 transition-transform`}
    >
      <h4 className="text-lg font-semibold text-white">{skill}</h4>
      <p className="text-text-secondary mt-2">
        {skill === "VLA Models" && "Vision-Language-Action architectures for zero-shot robotic generalization"}
        {skill === "Imitation Learning" && "Transformer policies enabling few-shot task generalization"}
        {skill === "Foundation Models" && "Pre-training large-scale models on 75TB+ multimodal datasets"}
        {skill === "Distributed Training" && "AWS HyperPod clusters with >85% GPU utilization"}
        {skill === "Computer Vision" && "Real-time detection and tracking at 45 FPS on edge hardware"}
        {skill === "MLOps & Edge AI" && "TensorRT/ONNX optimization with 3-5x inference speedups"}
      </p>
    </div>
  );
}