import type { ReactNode } from 'react';

type PageShellProps = {
  children: ReactNode;
  className?: string;
  /** Only navbar offset — no page background (for pages that set their own section backgrounds). */
  bare?: boolean;
};

/** Offset page content below the fixed navbar. */
export function PageShell({ children, className = '', bare = false }: PageShellProps) {
  const base = bare
    ? 'pt-[110px] pb-0 overflow-hidden'
    : 'pt-[110px] pb-0 overflow-hidden bg-white dark:bg-brand-950 transition-colors duration-500';

  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}
