import { motion } from 'motion/react';
import { UseCaseCard, type UseCaseItem } from './UseCaseCard';

export type UseCasesSectionProps = {
  cases: UseCaseItem[];
  description: string;
  title?: string;
  sectionClassName?: string;
  /** Apply staggered entrance delay (idx × 0.1s) per card. */
  staggerDelays?: boolean;
};

/** Shared "Use Cases" section for Enterprise AI, Platforms, and Industries pages. */
export function UseCasesSection({
  cases,
  description,
  title = 'Use Cases',
  sectionClassName = 'py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left',
  staggerDelays = false,
}: UseCasesSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto text-left">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 font-medium"
          >
            {description}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-2">
          {cases.map((useCase, idx) => (
            <UseCaseCard
              key={useCase.title}
              {...useCase}
              delay={staggerDelays ? idx * 0.1 : 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
