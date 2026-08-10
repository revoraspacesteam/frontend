import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

const impacts = [
  {
    title: "Regular Work Opportunities",
    text: "We connect skilled local plumbers, electricians, masons, painters, and carpenters with steady, organized work pipelines.",
  },
  {
    title: "Skill Support & Professional Growth",
    text: "We provide ongoing safety protocols, tool access, and technical guidance to help workers excel in their trade.",
  },
  {
    title: "Fair & Respectful Earnings",
    text: "All trade workers receive transparent, timely payments that respect their craftsmanship and time.",
  },
  {
    title: "A Stronger Service Network",
    text: "Building a reliable ecosystem of respected professionals raises industry standards and creates safer job sites.",
  },
];

export function CommunityImpact() {
  return (
    <SectionShell tone="plain">
      <div className="mx-auto max-w-3xl text-center">
        <Badge>Community & Craftsmanship Impact</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-4xl">
          Better Spaces. Better Work Opportunities.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          REVORA SPACES supports local skilled workers by creating regular,
          fairly paid job opportunities for labourers, plumbers, electricians,
          carpenters, painters, technicians, and other trade professionals.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-0 border-t border-l border-gold/40 sm:grid-cols-2">
        {impacts.map((item) => (
          <div
            key={item.title}
            className="border-r border-b border-gold/40 px-6 py-8 text-left"
          >
            <h3 className="font-display text-xl text-gold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
