import type { Metadata } from "next";
import PublicationCard from "@/components/ui/PublicationCard";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications - Pavan Kumar Kandapagari",
  description: "Patents and research publications in AI, computer vision, and image processing.",
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Patents &amp; Publications
        </h1>
        <p className="text-text-secondary text-lg mb-12">
          Research contributions in AI, computer vision, and medical image analysis.
        </p>

        <div className="space-y-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </div>
    </div>
  );
}
