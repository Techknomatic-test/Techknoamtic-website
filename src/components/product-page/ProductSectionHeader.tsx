import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export type ProductSectionHeaderProps = {
  title: string;
  tagline?: ReactNode;
  description?: ReactNode;
  titleClassName?: string;
  taglineClassName?: string;
  descriptionClassName?: string;
  descriptionDelay?: number;
};

/** Animated heading block used across product pages (capabilities, process, etc.). */
export function ProductSectionHeader({
  title,
  tagline,
  description,
  titleClassName = 'section-heading mb-6',
  taglineClassName = 'text-[16px] font-bold text-brand-950 dark:text-white mb-6 leading-tight tracking-tight',
  descriptionClassName = 'text-lg text-slate-500 dark:text-slate-400 font-medium',
  descriptionDelay = 0.1,
}: ProductSectionHeaderProps) {
  return (
    <div className="text-left mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={titleClassName}
      >
        {title}
      </motion.h2>
      {tagline && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={taglineClassName}
        >
          {tagline}
        </motion.h3>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: descriptionDelay }}
          className={descriptionClassName}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
