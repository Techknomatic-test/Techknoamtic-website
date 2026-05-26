import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { SectionIcon } from '../SectionIcon';

export type ServiceCapabilityCardProps = {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  delay?: number;
};

/** Icon + description + bullet list card (Services pages). */
export function ServiceCapabilityCard({
  title,
  description,
  items,
  icon: Icon,
  delay = 0,
}: ServiceCapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group flex h-full flex-col rounded-[3rem] border border-slate-100 bg-white p-10 text-left shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5"
    >
      <SectionIcon icon={Icon} size="lg" hover="rotate" className="mb-8" />
      <div className="mb-4 min-h-[4.5rem] sm:min-h-[5rem]">
        <h3 className="line-clamp-3 text-2xl font-bold leading-tight tracking-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
          {title.trim()}
        </h3>
      </div>
      <div className="min-h-[6rem] sm:min-h-[6.5rem]">
        <p className="border-l-4 border-accent/20 py-1 pl-4 text-left text-[15px] font-medium leading-relaxed text-brand-950/70 dark:text-white/60">
          {description}
        </p>
      </div>
      <ul className="m-0 list-none space-y-3 border-t border-slate-100 pt-4 dark:border-white/5">
        {items.map((item) => (
          <li key={item} className="group/item flex items-start gap-3">
            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
            <span className="text-left text-[14px] font-medium text-slate-500 transition-colors group-hover/item:text-brand-950 dark:text-slate-400 dark:group-hover/item:text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
