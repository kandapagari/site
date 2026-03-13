import { forwardRef, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`glass-effect rounded-xl p-6 transition-all duration-300 hover:scale-105 ${className}`}
      {...props}
    />
  )
);

GlassCard.displayName = "GlassCard";

export default GlassCard;