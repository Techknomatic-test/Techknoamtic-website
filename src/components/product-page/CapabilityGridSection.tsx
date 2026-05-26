import type { ReactNode } from 'react';
import { ProductSectionHeader } from './ProductSectionHeader';

export type CapabilityGridSectionProps = {
  title: string;
  tagline?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  sectionClassName?: string;
  gridClassName?: string;
  headerClassName?: string;
};

const DEFAULT_SECTION =
  'py-[60px] px-6 bg-slate-50/50 dark:bg-brand-900/20 text-left border-b border-slate-100 dark:border-white/5';

const DEFAULT_GRID = 'grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3';

/** "What [Product] Solves" capability card grid. */
export function CapabilityGridSection({
  title,
  tagline,
  description,
  children,
  sectionClassName = DEFAULT_SECTION,
  gridClassName = DEFAULT_GRID,
  headerClassName,
}: CapabilityGridSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        <ProductSectionHeader
          title={title}
          tagline={tagline}
          description={description}
          titleClassName={headerClassName ?? 'section-heading mb-6'}
        />
        <div className={gridClassName}>{children}</div>
      </div>
    </section>
  );
}
