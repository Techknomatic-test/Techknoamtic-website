import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

type IconComponent = LucideIcon | ComponentType<{ className?: string }>;

const SIZE_STYLES = {
  xs: { box: "w-10 h-10 rounded-xl", icon: "w-5 h-5" },
  sm: { box: "w-8 h-8 rounded-xl", icon: "w-4 h-4" },
  md: { box: "w-12 h-12 rounded-2xl", icon: "w-6 h-6" },
  lg: { box: "w-14 h-14 rounded-2xl", icon: "w-7 h-7" },
  xl: { box: "w-16 h-16 rounded-2xl", icon: "w-8 h-8" },
} as const;

const HOVER_STYLES = {
  none: "",
  scale: "group-hover:scale-110",
  rotate: "group-hover:rotate-6",
} as const;

export type SectionIconSize = keyof typeof SIZE_STYLES;
export type SectionIconHover = keyof typeof HOVER_STYLES;

type SectionIconProps = {
  icon: IconComponent;
  size?: SectionIconSize;
  hover?: SectionIconHover;
  className?: string;
};

/** Orange accent tile with white Lucide icon — use across offerings, approach, and feature cards. */
export function SectionIcon({
  icon: Icon,
  size = "md",
  hover = "scale",
  className = "",
}: SectionIconProps) {
  const { box, icon: iconSize } = SIZE_STYLES[size];

  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-accent text-white shadow-lg shadow-accent/20 ${box} ${HOVER_STYLES[hover]} transition-transform ${className}`.trim()}
    >
      <Icon className={iconSize} strokeWidth={2} />
    </div>
  );
}
