import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

const steps = [
  {
    n: "1",
    title: "Idea & Requirement",
    text: "Share your property need or repair issues.",
    icon: (
      <path d="M9 21h6M12 3a6 6 0 0 1 3.5 10.8c-.9.7-1.5 1.7-1.5 2.7V18h-4v-1.5c0-1-.6-2-1.5-2.7A6 6 0 0 1 12 3z" />
    ),
  },
  {
    n: "2",
    title: "Design & Space Plan",
    text: "Architectural planning tailored to your budget.",
    icon: <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />,
  },
  {
    n: "3",
    title: "3D Visualization",
    text: "Realistic models before a single tool touches site.",
    icon: <path d="M12 2 2 7l10 5 10-5-10-5zm0 10v10l10-5V7M12 12 2 7v10l10 5" />,
  },
  {
    n: "4",
    title: "Material Sourcing",
    text: "Transparent procurement & trade discounts.",
    icon: <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />,
  },
  {
    n: "5",
    title: "Coordinated Execution",
    text: "Single-point supervision of all skilled trades.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M4.9 19.1l2.1-2.1M16.9 7.1l2.1-2.1" />
      </>
    ),
  },
  {
    n: "6",
    title: "Quality Check & Handover",
    text: "Final inspection, snag list closure, and keys handover.",
    icon: <path d="M15 7a4 4 0 1 0-3.9 5H3v3h2v3h3v-3h3.1A4 4 0 0 0 15 7z" />,
  },
];

export function TrustedPartner() {
  return (
    <SectionShell tone="brick" contentClassName="!pt-8 sm:!pt-10">
      <div className="max-w-2xl">
        <Badge>Integrated Property Management</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold ">
          One Trusted Partner For Property Need
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Forget the stress of coordinating separately with architects,
          independent contractors, plumbers, electricians, labourers, and
          material suppliers. REVORA SPACES manages planning, people,
          materials, execution, timelines, and communication from start to
          finish.
        </p>
      </div>

      <div className="mt-14">
        <h3 className="text-center text-lg font-semibold tracking-wide text-ink sm:text-xl">
          REVORA: The END-TO-END Journey
        </h3>

        <ol className="mt-8 space-y-3">
          {steps.map((step, index) => (
            <li
              key={step.n}
              className="flex items-center gap-4 rounded-xl border border-line bg-white px-4 py-3 shadow-[0_6px_18px_rgba(28,28,28,0.04)] sm:px-5"
              style={{ marginLeft: `${Math.min(index * 6, 30)}%` }}
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-charcoal text-xs font-semibold text-white">
                {step.n}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">
                  {step.title}
                  <span className="font-normal text-muted"> — {step.text}</span>
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 shrink-0 stroke-gold stroke-[1.6] sm:block"
                fill="none"
                aria-hidden
              >
                {step.icon}
              </svg>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
