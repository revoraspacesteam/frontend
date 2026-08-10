import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

export function CorePhilosophy() {
  return (
    <SectionShell tone="brick" contentClassName="!py-14 sm:!py-16">
      <div className="mx-auto max-w-3xl text-center">
        <Badge>Our Core Philosophy</Badge>
        <blockquote className="font-display mt-6 text-3xl leading-snug text-gold sm:text-4xl">
          “Every project helps create meaningful employment.”
        </blockquote>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          When you hire REVORA SPACES, you are directly investing in respected
          local trades, safer job conditions, and fair wages for master
          craftspeople.
        </p>
      </div>
    </SectionShell>
  );
}
