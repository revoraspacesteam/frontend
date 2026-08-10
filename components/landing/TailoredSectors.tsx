import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

const sectors = [
  {
    tag: "Homes",
    title: "Residential Living Spaces",
    points: [
      "Kitchen, bathroom & room renovations",
      "Painting, flooring & fixture upgrades",
      "Full home interior coordination",
      "Ongoing repair & maintenance support",
    ],
  },
  {
    tag: "Offices",
    title: "Workplace Fit-outs",
    points: [
      "Cabin, open-plan & meeting room layouts",
      "Electrical, networking & lighting readiness",
      "Brand-aligned finishes & joinery",
      "Minimal disruption scheduling",
    ],
  },
  {
    tag: "Commercial",
    title: "Retail & Business Spaces",
    points: [
      "Storefront and showroom build-outs",
      "Civil, MEP and finishing coordination",
      "Compliance-conscious execution",
      "Handover ready for operations",
    ],
  },
  {
    tag: "Repairs",
    title: "Urgent Trade Services",
    points: [
      "Plumbing, electrical & carpentry fixes",
      "Leak, lock and fixture emergencies",
      "Certified local technicians",
      "Clear inspection-based quotes",
    ],
  },
];

export function TailoredSectors() {
  return (
    <SectionShell tone="brick" id="sectors">
      <Badge>Tailored Sectors</Badge>
      <h2 className="font-display mt-4 max-w-xl text-3xl text-gold sm:text-4xl">
        Specialized Care for Every Property Type
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Whether managing your personal residence or overseeing corporate real
        estate portfolios, our teams execute with sector-specific expertise.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sectors.map((sector) => (
          <article
            key={sector.tag}
            className="rounded-xl border-2 border-gold/50 bg-cream px-5 py-6"
          >
            <span className="rounded-md bg-peach px-2.5 py-1 text-[11px] font-semibold text-ink">
              {sector.tag}
            </span>
            <h3 className="font-display mt-4 text-xl text-gold">{sector.title}</h3>
            <ul className="mt-4 space-y-2">
              {sector.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
