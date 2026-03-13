import type { Metadata } from "next";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { aboutText } from "@/lib/data";

export const metadata: Metadata = {
  title: "About - Pavan Kumar Kandapagari",
  description: aboutText.intro,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          About Me
        </h1>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl">
          {aboutText.intro}
        </p>

        {/* Bio */}
        <GlassCard className="mb-8 hover:scale-100">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent-blue/10 border border-accent-blue/30">
              <Briefcase className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Professional Summary
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {aboutText.bio}
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Location */}
        <GlassCard className="mb-8 hover:scale-100">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/30">
              <MapPin className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Based In</h2>
              <p className="text-text-secondary">Munich, Germany</p>
            </div>
          </div>
        </GlassCard>

        {/* Education */}
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-accent-cyan" />
          Education
        </h2>

        <div className="space-y-4">
          {aboutText.education.map((edu, i) => (
            <GlassCard key={i} className="hover:scale-100">
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="text-accent-cyan text-sm mt-1">
                {edu.institution}
              </p>
              {edu.focus && (
                <p className="text-text-secondary text-sm mt-2">
                  Focus: {edu.focus}
                </p>
              )}
              <p className="text-text-muted text-sm mt-1">{edu.grade}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
