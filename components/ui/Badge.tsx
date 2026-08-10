import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md bg-[#FFDBA2] px-6 py-3 text-[11px] font-semibold tracking-[0.06em] text-ink uppercase sm:text-xs ${className}`}
    >
      {children}
    </span>
  );
}
