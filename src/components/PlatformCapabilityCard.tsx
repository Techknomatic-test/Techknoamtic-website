import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { SectionIcon } from "./SectionIcon";

type IconComponent = LucideIcon | ComponentType<{ className?: string }>;

type PlatformCapabilityCardProps = {
  title: string;
  items: string[];
  icon: IconComponent;
  outcome?: string;
  /** When false and no outcome, bullets follow the title (e.g. ParseIQ). */
  reserveOutcomeSpace?: boolean;
  /** Prefix outcome with "Outcome:" (enterprise AI pages). */
  prependOutcomeLabel?: boolean;
  delay?: number;
  titleClassName?: string;
};

/** Shared "What [Platform] Solves" card — fixed header heights keep bullet lists aligned across grid rows. */
export function PlatformCapabilityCard({
  title,
  items,
  icon,
  outcome,
  reserveOutcomeSpace = true,
  prependOutcomeLabel = false,
  delay = 0,
  titleClassName = "",
}: PlatformCapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group flex h-full flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 text-left shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5"
    >
      <SectionIcon icon={icon} size="md" className="mb-6 shrink-0" />
      <h3
        className={`mb-3 min-h-[3rem] text-xl font-bold leading-snug tracking-tight text-brand-950 line-clamp-2 transition-colors group-hover:text-accent dark:text-white ${titleClassName}`}
      >
        {title}
      </h3>
      {outcome !== undefined ? (
        <p className="mb-4 min-h-[3.25rem] text-[13px] font-bold leading-snug text-brand-950/70 line-clamp-3 dark:text-white/60">
          {prependOutcomeLabel ? `Outcome: ${outcome}` : outcome}
        </p>
      ) : reserveOutcomeSpace ? (
        <div className="mb-4 min-h-[3.25rem]" aria-hidden />
      ) : null}
      <ul className="list-none space-y-3 border-t border-slate-100 pt-4 dark:border-white/5">
        {items.map((item, i) => (
          <li key={i} className="grid grid-cols-[6px_1fr] items-start gap-x-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/40" aria-hidden />
            <span className="text-[13px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
