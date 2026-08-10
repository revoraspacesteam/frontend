import { SectionShell } from "@/components/ui/SectionShell";

const promises = [
  "Clear scope of work documented upfront",
  "Transparent line-itemized cost estimates",
  "Defined payment milestones linked to progress",
  "Explicit client approval required before any additional work",
  "Clear material brand discussions with wholesale options",
  "Zero intentional hidden charges or surprise invoices",
];

export function PricingPromise() {
  return (
    <SectionShell tone="plain" contentClassName="!py-12 sm:!py-14">
      <div className="rounded-2xl border border-line bg-white px-6 py-10 shadow-[0_12px_32px_rgba(28,28,28,0.04)] sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            The REVORA Pricing Promise
          </h2>
          <p className="mt-2 text-sm text-muted">
            Our commitment to transparent estimates and financial trust
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gold/35 px-4 py-5 text-center text-sm text-ink"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
