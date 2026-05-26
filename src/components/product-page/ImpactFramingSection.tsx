import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export type ImpactFramingSectionProps = {
  children: ReactNode;
  label?: string;
  sectionClassName?: string;
};

const DEFAULT_SECTION = 'pb-8 px-6 bg-white dark:bg-brand-950 text-left';

/** Orange callout block after pain points (Enterprise AI pages). */
export function ImpactFramingSection({
  children,
  label = 'Impact Framing',
  sectionClassName = DEFAULT_SECTION,
}: ImpactFramingSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20"
        >
          <h3 className="text-[12px] font-black tracking-[0.1em] text-orange-600 dark:text-orange-400 uppercase mb-4">
            {label}
          </h3>
          <p className="text-[15px] font-medium text-brand-950 dark:text-white leading-relaxed">
            {children}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
