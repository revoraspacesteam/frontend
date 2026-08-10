import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";
import { R2Image } from "@/components/ui/R2Image";
import { assets } from "@/lib/assets";

const stages = [
  {
    stage: "01. Milestone Stage",
    title: "Share Your Requirement",
    body: "Tell us about your minor repair, renovation idea, or full construction requirement via phone or online form. Our team logs your property details, key goals, preferred timeline, and urgency to assign the right domain expert.",
    deliverables: ["Initial consultation call", "Requirement intake checklist"],
  },
  {
    stage: "02. Milestone Stage",
    title: "Site Assessment & Scope",
    body: "A coordinator visits or reviews site documentation to confirm constraints, access, utilities, and existing conditions. We convert your brief into a structured scope with measurable outcomes.",
    deliverables: ["Site notes & photos", "Draft scope document"],
  },
  {
    stage: "03. Milestone Stage",
    title: "Design & Visualization",
    body: "Architecture and space planning are tailored to budget and function. Where needed, photorealistic 3D visuals help you approve layouts before execution begins.",
    deliverables: ["Space plan", "3D visualization pack"],
  },
  {
    stage: "04. Milestone Stage",
    title: "Transparent Quotation",
    body: "You receive itemized estimates with materials, labour, and milestone-linked payments — no vague lumpsum surprises.",
    deliverables: ["Line-item estimate", "Payment milestone plan"],
  },
  {
    stage: "05. Milestone Stage",
    title: "Coordinated Execution",
    body: "A single project lead supervises trades, materials, and site sequence so work progresses without vendor juggling.",
    deliverables: ["Daily site supervision", "Trade coordination log"],
  },
  {
    stage: "06. Milestone Stage",
    title: "Progress Reporting",
    body: "Photo updates, milestone status, and next-step clarity keep you informed without needing daily site visits.",
    deliverables: ["Photo reports", "Milestone status notes"],
  },
  {
    stage: "07. Milestone Stage",
    title: "Quality Check & Handover",
    body: "Final snagging, quality verification, and documented handover complete the journey with clear closure.",
    deliverables: ["Snag closure list", "Handover checklist"],
  },
];

export function StructuredWorkflow() {
  return (
    <SectionShell tone="grid" id="process">
      <div className="relative max-w-xl">
        <Badge>Structured Workflow</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-4xl">
          A Clear Process from First Conversation to Final Handover
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Every project follows a quality checklist so you always know what was
          completed, what is next, and when your space will be ready.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute top-8 left-0 z-10 hidden w-40 lg:block">
          <R2Image
            name={assets.workerTopdown}
            alt=""
            width={180}
            height={220}
            className="h-auto w-full object-contain"
            fallback={
              <div className="flex h-44 w-36 items-end justify-center rounded-full bg-peach/50">
                <div className="mb-2 h-28 w-20 rounded-t-full bg-[#2bb5a0]" />
                <div className="absolute top-6 h-10 w-14 rounded-t-xl bg-orange-500" />
              </div>
            }
          />
        </div>

        <div className="space-y-4">
          {stages.map((item, index) => (
            <article
              key={item.stage}
              className="rounded-xl border border-line bg-white p-5 shadow-[0_8px_22px_rgba(28,28,28,0.04)] sm:p-6"
              style={{
                marginLeft: `${Math.min(index * 5, 28)}%`,
                maxWidth: "42rem",
              }}
            >
              <p className="text-xs font-semibold tracking-wide text-ink">
                {item.stage}
              </p>
              <h3 className="mt-1 text-base font-semibold text-gold sm:text-lg">
                {item.title} :
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              <p className="mt-3 text-xs font-semibold text-ink">
                Key Deliverables in this stage:
              </p>
              <ul className="mt-1.5 space-y-1">
                {item.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
