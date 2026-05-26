import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type ExpandableAccordionItemProps = {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

/** Expandable accordion row for platform/analytics module sections. */
export function ExpandableAccordionItem({
  title,
  isOpen,
  onClick,
  children,
}: ExpandableAccordionItemProps) {
  return (
    <div className="overflow-hidden border-b border-slate-100 last:border-0 dark:border-white/5">
      <button
        type="button"
        onClick={onClick}
        className="group flex w-full items-center justify-between py-6 text-left transition-all"
      >
        <span className="text-[17px] font-bold text-brand-950 transition-colors group-hover:text-accent dark:text-white">
          {title}
        </span>
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
            <div className="pb-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
