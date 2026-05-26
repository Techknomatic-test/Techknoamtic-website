import { motion } from 'motion/react';

export type PainPointsSectionProps = {
  intro?: string;
  imageSrc: string;
  imageAlt: string;
  items: string[];
  title?: string;
  sectionClassName?: string;
  /** Semantic list + slightly larger bullets (e.g. DataGuard). */
  asList?: boolean;
  bulletClassName?: string;
  imageWrapperClassName?: string;
};

const DEFAULT_SECTION =
  'py-[60px] bg-white dark:bg-brand-950 px-6 border-b border-slate-100 dark:border-white/5 text-left overflow-hidden';

/** Challenge / pain-points block with intro, image, and bullet list. */
export function PainPointsSection({
  intro,
  imageSrc,
  imageAlt,
  items,
  title = 'Common Operational Pain Points',
  sectionClassName = DEFAULT_SECTION,
  asList = false,
  bulletClassName,
  imageWrapperClassName = 'relative aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl',
}: PainPointsSectionProps) {
  const defaultBullet = asList
    ? 'text-[17px] leading-tight text-brand-950 dark:text-white'
    : 'text-[16px] leading-tight text-brand-950 dark:text-white';
  const bulletText = bulletClassName ?? defaultBullet;

  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        {intro && (
          <div className="w-full text-left mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-[17px] md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              {intro}
            </motion.p>
          </div>
        )}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
              className={imageWrapperClassName}
          >
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="space-y-6 self-start lg:pt-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-950 dark:text-white mb-2 leading-tight">
                {title}
              </h3>
              <div className="h-1 w-12 rounded-full bg-accent" />
            </div>

            {asList ? (
              <ul className="list-none space-y-5">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <p className={bulletText}>{item}</p>
                  </motion.li>
                ))}
              </ul>
            ) : (
              items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex items-start gap-4"
                >
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <p className={bulletText}>{item}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
