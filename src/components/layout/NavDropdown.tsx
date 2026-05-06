import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { NavItem } from '../../types/navigation';

type NavDropdownProps = {
  title: string;
  items: NavItem[];
};

export const NavDropdown = ({ title, items }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-accent transition-colors">
        {title}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
          >
            <div className="bg-white dark:bg-brand-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 p-3 overflow-hidden">
              <div className="grid grid-cols-1 gap-1">
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group/item"
                  >
                    {item.icon && (
                      <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover/item:text-accent group-hover/item:bg-blue-50 dark:group-hover/item:bg-accent/20 transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                    )}
                    <span className="text-[14px] font-medium text-slate-600 dark:text-slate-400 group-hover/item:text-brand-950 dark:group-hover/item:text-white transition-colors">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
