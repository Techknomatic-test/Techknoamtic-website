import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type ChipAccordionItemProps = {
  title: string;
  /** Chip labels separated by middle dot (·) */
  content: string;
  isOpen: boolean;
  onClick: () => void;
  /** BI-style preview of first chips when collapsed */
  variant?: 'default' | 'preview';
};

/** Tools & technology accordion row with chip tags (Services pages). */
export function ChipAccordionItem({
  title,
  content,
  isOpen,
  onClick,
  variant = 'default',
}: ChipAccordionItemProps) {
  const chips = content.split('·').map((s) => s.trim());

  return (
    <div className="overflow-hidden border-b border-slate-100 last:border-0 dark:border-white/5">
      <button
        type="button"
        onClick={onClick}
        className="group flex w-full items-center justify-between py-6 text-left transition-all"
      >
        {variant === 'preview' ? (
          <div className="flex flex-col text-left">
            <span className="text-[17px] font-bold text-brand-950 transition-colors group-hover:text-accent dark:text-white">
              {title}
            </span>
            {!isOpen && (
              <span className="mt-1 line-clamp-1 text-[12px] text-slate-400">
                {chips.slice(0, 3).join(' · ')}...
              </span>
            )}
          </div>
        ) : (
          <span className="text-[15px] font-bold text-brand-950 transition-colors group-hover:text-accent dark:text-white">
            {title}
          </span>
        )}
        <div
          className={`rounded-full p-2 transition-all duration-300 ${
            isOpen
              ? 'bg-accent text-white'
              : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 dark:bg-white/5 dark:group-hover:bg-white/10'
          }`}
        >
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={variant === 'preview' ? 'pb-8' : 'pb-6'}>
              <div className="flex flex-wrap gap-2">
                {chips.map((chip, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 text-[12px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
