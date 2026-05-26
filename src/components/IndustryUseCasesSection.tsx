import { motion } from 'motion/react';
import { IndustryUseCaseCard, type IndustryUseCaseItem } from './IndustryUseCaseCard';

export type IndustryUseCasesSectionProps = {
  badge: string;
  cases: IndustryUseCaseItem[];
  sectionClassName?: string;
};

const DEFAULT_SECTION = 'py-[40px] px-6 bg-white dark:bg-brand-950 text-left';

/** Use Cases section for industry analytics pages (badge + 3-column grid). */
export function IndustryUseCasesSection({
  badge,
  cases,
  sectionClassName = DEFAULT_SECTION,
}: IndustryUseCasesSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.3em] text-accent"
          >
            {badge}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading uppercase"
          >
            USE CASES
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-3">
          {cases.map((useCase) => (
            <IndustryUseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
