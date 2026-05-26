import { motion } from 'motion/react';
import { Target } from 'lucide-react';
import { SectionIcon } from './SectionIcon';

export type UseCaseItem = {
  title: string;
  subtitle: string;
  crux: string;
  focusAreas: string;
  outcome: string;
};

export type UseCaseCardProps = UseCaseItem & {
  delay?: number;
  className?: string;
};

/** Shared use-case card for Enterprise AI, Platforms, and Industries pages. */
export function UseCaseCard({
  title,
  subtitle,
  crux,
  focusAreas,
  outcome,
  delay = 0,
  className = '',
}: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`group flex h-full flex-col rounded-[3rem] border border-slate-100 bg-white p-10 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 ${className}`.trim()}
    >
      <h3 className="mb-2 min-h-[2.5rem] text-2xl font-bold leading-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
        {title}
      </h3>
      <p className="mb-5 min-h-[3rem] text-[15px] font-bold leading-snug text-brand-950/70 dark:text-white/70">
        {subtitle}
      </p>

      <div className="mb-6 flex flex-1 flex-col space-y-4">
        <p className="min-h-[4.5rem] text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
          {crux}
        </p>
        <div>
          <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-accent">
            Focus Areas
          </h4>
          <p className="min-h-[2.5rem] text-[14px] font-bold text-brand-950 dark:text-white">
            {focusAreas}
          </p>
        </div>
      </div>

      <div className="mt-auto border-t border-slate-100 pt-4 dark:border-white/5">
        <div className="flex items-center gap-3">
          <SectionIcon icon={Target} size="sm" hover="none" />
          <p className="text-[13px] font-bold text-brand-950 dark:text-white">
            <span className="mr-2 uppercase tracking-wider text-accent">Outcome:</span>
            {outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
