import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: "brick" | "grid" | "plain" | "dark";
};

export function SectionShell({
  id,
  children,
  className = "",
  contentClassName = "",
  tone = "plain",
}: SectionShellProps) {
  const toneClass =
    tone === "brick" || tone === "grid" || tone === "plain"
      ? "bg-transparent"
      : tone === "dark"
        ? "bg-charcoal text-white"
        : "bg-transparent";

  return (
    <section id={id} className={`relative w-full ${toneClass} ${className}`}>
      <div
        className={`mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
