import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

const plans = [
  {
    title: "Essential Repairs",
    description:
      "Best for plumbing, electrical work, fixture installation, maintenance, painting, carpentry, and small everyday repairs.",
    model: "Inspection-Based Quote",
    modelNote: "Diagnosis + clear trade labor estimate",
    features: [
      "Urgent plumbing & leak fixes",
      "Electrical panel & light fittings",
      "Door, lock & carpentry repairs",
      "Wall touch-up & minor painting",
      "Certified local technician",
    ],
  },
  {
    title: "Renovation & Fit-out",
    description:
      "Ideal for room makeovers, office interiors, kitchen/bath upgrades, and multi-trade renovation packages.",
    model: "Milestone Quotation",
    modelNote: "Scope + materials + staged payments",
    features: [
      "Space planning support",
      "Material shortlisting",
      "Coordinated multi-trade execution",
      "Progress photo reporting",
      "Quality snag closure",
    ],
  },
  {
    title: "Full Construction",
    description:
      "End-to-end architecture, civil works, finishing, and handover for new builds or major structural projects.",
    model: "Project Proposal",
    modelNote: "Design + BOQ + delivery roadmap",
    features: [
      "Architecture & drawings",
      "3D visualization package",
      "Procurement coordination",
      "Site supervision & quality checks",
      "Documented handover",
    ],
  },
];

export function Pricing() {
  return (
    <SectionShell tone="brick" id="pricing">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>Transparent Pricing Structure</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-4xl">
          Flexible Pricing for Every Property Requirement
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Every property project is unique. We provide transparent,
          quotation-based pricing tailored to your exact scope, materials, and
          timeline.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className="pricing-wave flex h-full flex-col border border-line bg-white px-6 pt-10 pb-8 shadow-[0_12px_30px_rgba(28,28,28,0.05)]"
          >
            <h3 className="text-xl font-semibold text-ink">{plan.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {plan.description}
            </p>

            <div className="mt-5 rounded-lg border border-gold/40 bg-cream-deep/70 px-4 py-3">
              <p className="text-[11px] tracking-wide text-muted uppercase">
                Pricing Model
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">{plan.model}</p>
              <p className="mt-0.5 text-xs text-muted">{plan.modelNote}</p>
            </div>

            <ul className="mt-5 flex-1 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-soft" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-charcoal text-sm font-semibold text-white transition hover:bg-charcoal-soft"
            >
              Request Quote
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
