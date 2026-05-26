import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export type PageHeroOverlay = 'default' | 'about' | 'none';
export type PageHeroSize = 'default' | 'compact';
export type PageHeroVariant = 'image' | 'solid';

export type PageHeroProps = {
  title: ReactNode;
  /** Secondary heading below the title (e.g. product tagline). */
  tagline?: ReactNode;
  /** Body copy below title or tagline. */
  description?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  variant?: PageHeroVariant;
  size?: PageHeroSize;
  overlay?: PageHeroOverlay;
  /** Base section background for image heroes. */
  sectionBg?: string;
  /** Solid hero base color (variant="solid"). */
  solidColor?: string;
  /** Tailwind gradient stops for solid hero overlay. */
  solidGradient?: string;
  sectionClassName?: string;
  borderBottom?: boolean;
  contentMaxWidth?: '4xl' | '6xl';
  titleAnimationDelay?: number;
  taglineAnimationDelay?: number;
  descriptionAnimationDelay?: number;
  imageClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
};

const overlayClass: Record<PageHeroOverlay, string> = {
  default: 'bg-gradient-to-b from-black/25 via-black/15 to-black/45',
  about: 'bg-gradient-to-r from-[#020617]/90 via-[#020617]/50 to-[#020617]/30',
  none: '',
};

const maxWidthClass = {
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
} as const;

export function PageHero({
  title,
  tagline,
  description,
  imageSrc,
  imageAlt = '',
  variant = 'image',
  size = 'default',
  overlay = 'default',
  sectionBg = 'bg-[#020617]',
  solidColor = '#1D79B4',
  solidGradient = 'from-[#1D79B4] via-[#1a6fa8] to-[#165f94]',
  sectionClassName = '',
  borderBottom = false,
  contentMaxWidth = '6xl',
  titleAnimationDelay = 0.1,
  taglineAnimationDelay = 0.2,
  descriptionAnimationDelay = 0.3,
  imageClassName = 'absolute inset-0 z-0 h-full w-full object-cover object-center',
  descriptionClassName = '',
  children,
}: PageHeroProps) {
  const isCompact = size === 'compact';
  const titleClass = isCompact
    ? 'text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight leading-[1.15]'
    : 'text-4xl sm:text-5xl md:text-6xl lg:text-[52px] font-bold text-white mb-6 tracking-tight leading-[1.1]';

  return (
    <section
      className={[
        'relative flex items-center px-6 overflow-hidden text-left',
        isCompact ? 'py-8 md:py-10' : 'min-h-[min(50vh,480px)] py-12 md:py-14',
        variant === 'solid' ? '' : sectionBg,
        borderBottom ? 'border-b border-slate-100 dark:border-white/5' : '',
        sectionClassName,
      ]
        .filter(Boolean)
        .join(' ')}
      style={variant === 'solid' ? { backgroundColor: solidColor } : undefined}
    >
      {variant === 'image' && imageSrc && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className={imageClassName}
            referrerPolicy="no-referrer"
            aria-hidden={!imageAlt}
          />
          {overlay !== 'none' && (
            <div className={`absolute inset-0 z-[1] ${overlayClass[overlay]}`} aria-hidden />
          )}
        </div>
      )}

      {variant === 'solid' && (
        <>
          <div
            className={`absolute inset-0 z-0 bg-gradient-to-r ${solidGradient}`}
            aria-hidden
          />
          <div
            className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"
            aria-hidden
          />
        </>
      )}

      <div
        className={`${maxWidthClass[contentMaxWidth]} mx-auto relative z-10 w-full text-left drop-shadow-md`}
      >
        <motion.h1
          initial={{ opacity: 0, y: isCompact ? 12 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: titleAnimationDelay }}
          className={titleClass}
        >
          {title}
        </motion.h1>

        {(tagline || description || children) && (
          <div
            className={
              isCompact ? '' : 'max-w-[50ch] sm:max-w-[55ch] lg:max-w-[60ch]'
            }
          >
            {tagline && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: taglineAnimationDelay }}
                className="text-2xl md:text-3xl font-semibold text-white/90 mb-4 tracking-tight text-balance"
              >
                {tagline}
              </motion.h2>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: isCompact ? 12 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: descriptionAnimationDelay }}
                className={
                  isCompact
                    ? `text-white/90 text-sm md:text-[15px] font-medium ${descriptionClassName}`.trim()
                    : `text-sm text-slate-200/90 font-normal leading-relaxed text-pretty ${descriptionClassName}`.trim()
                }
              >
                {description}
              </motion.p>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
