import { motion } from 'motion/react';
import { SolveCard, type SolveCardItem } from './SolveCard';

export type SolveCardsSectionProps = {
  title: string;
  description?: string;
  items: SolveCardItem[];
  sectionClassName?: string;
  gridClassName?: string;
  cardDelayStep?: number;
};

const DEFAULT_SECTION = 'py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left';
const DEFAULT_GRID = 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2';

/** Grid of SolveCards for Industries pages. */
export function SolveCardsSection({
  title,
  description,
  items,
  sectionClassName = DEFAULT_SECTION,
  gridClassName = DEFAULT_GRID,
  cardDelayStep = 0.1,
}: SolveCardsSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-4"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl text-lg font-medium text-slate-500 dark:text-slate-400"
            >
              {description}
            </motion.p>
          )}
        </div>
        <div className={gridClassName}>
          {items.map((item, idx) => (
            <SolveCard key={item.title} {...item} delay={idx * cardDelayStep} />
          ))}
        </div>
      </div>
    </section>
  );
}
