import { motion } from 'motion/react';

export type ServiceImageCapabilityCardProps = {
  title: string;
  description: string;
  image: string;
  delay?: number;
  imageHeightClassName?: string;
  imageHoverClassName?: string;
  descriptionClassName?: string;
};

/** Capability card with top image (Geospatial, Data Engineering). */
export function ServiceImageCapabilityCard({
  title,
  description,
  image,
  delay = 0,
  imageHeightClassName = 'h-52',
  imageHoverClassName = 'group-hover:scale-105',
  descriptionClassName = 'flex-1 text-left text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400',
}: ServiceImageCapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5"
    >
      <div
        className={`relative -mx-8 -mt-8 mb-8 overflow-hidden ${imageHeightClassName}`}
      >
        <img
          loading="lazy"
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-700 ${imageHoverClassName}`}
          referrerPolicy="no-referrer"
        />
      </div>
      <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
        {title}
      </h3>
      <p className={descriptionClassName}>{description}</p>
    </motion.div>
  );
}
