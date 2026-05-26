import { motion } from 'motion/react';
import { ServiceUseCaseCard, type ServiceUseCaseItem } from './ServiceUseCaseCard';

export type ServiceUseCasesSectionProps = {
  cases: ServiceUseCaseItem[];
  description: string;
  title?: string;
  sectionClassName?: string;
  titleClassName?: string;
};

const DEFAULT_SECTION = 'py-[60px] px-6 bg-white dark:bg-brand-950 text-left';

/** Use Cases section for Services pages (Industries / Impact layout). */
export function ServiceUseCasesSection({
  cases,
  description,
  title = 'Use Cases',
  sectionClassName = DEFAULT_SECTION,
  titleClassName = 'section-heading mb-8',
}: ServiceUseCasesSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto text-left">
        <motion.div className="mb-10 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={titleClassName}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-left text-lg font-medium text-slate-500 dark:text-slate-400"
          >
            {description}
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cases.map((useCase) => (
            <ServiceUseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
