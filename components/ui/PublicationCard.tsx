import type { Publication } from "@/lib/data";
import { FileText, ExternalLink } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const typeColors: Record<string, string> = {
    Patent: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    Paper: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    Conference: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    Presentation: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  };

  return (
    <div className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full border ${typeColors[publication.type] ?? "text-gray-400 bg-gray-400/10 border-gray-400/30"}`}
        >
          {publication.type}
        </span>
        <span className="text-text-secondary text-sm">{publication.year}</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">
        {publication.title}
      </h3>

      <p className="text-text-secondary text-sm mb-2">
        {publication.authors}
      </p>

      <p className="text-text-muted text-xs mb-3 italic">
        {publication.venue}
      </p>

      <p className="text-text-secondary text-sm mb-4">
        {publication.abstract}
      </p>

      <div className="flex gap-3">
        {publication.pdfUrl && (
          <a
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-text-secondary hover:text-white transition-colors"
          >
            <FileText size={14} /> PDF
          </a>
        )}
        {publication.arXivUrl && (
          <a
            href={publication.arXivUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-text-secondary hover:text-white transition-colors"
          >
            <ExternalLink size={14} /> arXiv
          </a>
        )}
      </div>
    </div>
  );
}
