import { motion } from 'motion/react';

export type SolveCardItem = {
  title: string;
  description: string;
  image: string;
};

export type SolveCardProps = SolveCardItem & {
  delay?: number;
};

/** Image + title + description card (Industries "What we solve"). */
export function SolveCard({ title, description, image, delay = 0 }: SolveCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-grow flex-col p-10 text-left">
        <h4 className="mb-6 text-2xl font-bold tracking-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
          {title}
        </h4>
        <p className="text-[17px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
