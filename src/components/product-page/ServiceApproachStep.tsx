import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { SectionIcon } from '../SectionIcon';

export type ServiceApproachStepProps = {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  /** Slate background variant used on Geospatial approach section. */
  variant?: 'default' | 'slate';
};

/** Numbered approach step card (Services delivery framework). */
export function ServiceApproachStep({
  num,
  title,
  description,
  icon: Icon,
  delay = 0,
  variant = 'default',
}: ServiceApproachStepProps) {
  const cardClass =
    variant === 'slate'
      ? 'group relative w-full min-w-0 rounded-[2.5rem] border border-transparent bg-slate-50 p-6 transition-all duration-500 hover:border-accent/20 dark:bg-white/5 lg:p-7'
      : 'group relative w-full min-w-0 rounded-[2.5rem] border border-slate-100 bg-white p-6 text-left transition-all duration-500 hover:border-accent/20 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 lg:p-7';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cardClass}
    >
      <div className="absolute right-6 top-6 text-3xl font-black text-accent/10 transition-colors lg:right-7 lg:top-7 lg:text-4xl">
        {num}
      </div>
      <SectionIcon icon={Icon} size="md" className="mb-8" />
      <h3 className="mb-3 text-lg font-bold tracking-tight text-brand-950 dark:text-white">
        {title}
      </h3>
      <p className="text-left text-[13px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}
