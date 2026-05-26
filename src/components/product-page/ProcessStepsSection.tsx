import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';
import { SectionIcon } from '../SectionIcon';
import { ProductSectionHeader } from './ProductSectionHeader';

type IconComponent = LucideIcon | ComponentType<{ className?: string }>;

export type ProcessStepItem = {
  title: string;
  content: string;
  icon: IconComponent;
};

export type ProcessStepsSectionProps = {
  title: string;
  tagline?: string;
  description?: string;
  steps: ProcessStepItem[];
  sectionClassName?: string;
  gridClassName?: string;
  stepDelayMultiplier?: number;
};

const DEFAULT_SECTION =
  'py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-b border-slate-100 dark:border-white/5';

const DEFAULT_GRID = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';

/** "How [Product] Works" numbered process step grid. */
export function ProcessStepsSection({
  title,
  tagline,
  description,
  steps,
  sectionClassName = DEFAULT_SECTION,
  gridClassName = DEFAULT_GRID,
  stepDelayMultiplier = 0.1,
}: ProcessStepsSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        <ProductSectionHeader title={title} tagline={tagline} description={description} />
        <div className={gridClassName}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * stepDelayMultiplier }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-4xl font-black text-accent/10 dark:text-white/5">
                    0{idx + 1}
                  </span>
                </div>
                <SectionIcon icon={Icon} size="lg" className="mb-8" />
                <h3 className="mb-4 text-left text-2xl font-bold tracking-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
                  {step.title}
                </h3>
                <p className="text-[15px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                  {step.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
