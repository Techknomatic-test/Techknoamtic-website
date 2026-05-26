import { motion } from 'motion/react';

export type ServiceUseCaseItem = {
  title: string;
  subtitle: string;
  crux: string;
  industries: string;
  impact: string;
  techStack?: string;
  /** AI Services: optional tech stack + footer meta row */
  metaLayout?: 'inline' | 'footer';
};

export type ServiceUseCaseCardProps = ServiceUseCaseItem;

/** Use-case card with Industries / Impact columns (Services pages). */
export function ServiceUseCaseCard({
  title,
  subtitle,
  crux,
  industries,
  impact,
  techStack,
  metaLayout = 'inline',
}: ServiceUseCaseCardProps) {
  const subtitleClass =
    metaLayout === 'footer'
      ? 'mb-8 text-[15px] font-bold leading-snug text-brand-950/70 dark:text-white/70'
      : 'mb-8 text-[15px] font-bold leading-snug text-brand-950/80 dark:text-white/80';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex h-full flex-col rounded-[3rem] border border-slate-100 bg-white p-10 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5"
    >
      <h3 className="mb-2 text-2xl font-bold leading-tight text-brand-950 transition-colors group-hover:text-accent dark:text-white">
        {title}
      </h3>
      <p className={subtitleClass}>{subtitle}</p>

      <div className="flex-1 space-y-6">
        <p className="text-[14px] font-medium leading-relaxed text-slate-500 dark:text-slate-400">
          {crux}
        </p>

        {techStack && (
          <div>
            <h4 className="mb-3 text-[11px] font-black uppercase tracking-widest text-accent">
              Tech Stack
            </h4>
            <p className="text-[13px] font-bold text-brand-950 dark:text-white">{techStack}</p>
          </div>
        )}

        {metaLayout === 'inline' && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 text-[11px] font-black uppercase tracking-widest text-accent">
                Industries
              </h4>
              <p className="text-[14px] font-bold text-brand-950 dark:text-white">{industries}</p>
            </div>
            <div>
              <h4 className="mb-3 text-[11px] font-black uppercase tracking-widest text-green-600">
                Impact
              </h4>
              <p className="text-[14px] font-bold text-brand-950 dark:text-white">{impact}</p>
            </div>
          </div>
        )}
      </div>

      {metaLayout === 'footer' && (
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 dark:border-white/5">
          <div>
            <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-accent">
              Industries
            </h4>
            <p className="text-[13px] font-bold text-brand-950 dark:text-white">{industries}</p>
          </div>
          {impact && (
            <div>
              <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-green-600">
                Impact
              </h4>
              <p className="text-[13px] font-bold text-brand-950 dark:text-white">{impact}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
