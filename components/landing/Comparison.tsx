import { SectionShell } from "@/components/ui/SectionShell";

const traditional = [
  "Different vendors for every task",
  "Unclear responsibilities",
  "Frequent delays",
  "Hidden expenses",
  "Constant follow-ups",
  "Fragmented communication",
  "No single owner of quality",
  "Unpredictable site behaviour",
  "High emotional stress",
];

const revora = [
  "One trusted project partner",
  "Clearly defined responsibilities",
  "Planned milestones",
  "Transparent itemized estimates",
  "Regular progress reports",
  "Single coordination channel",
  "Owned quality checkpoints",
  "Accountable site supervision",
  "Less stress, more clarity",
];

export function Comparison() {
  return (
    <SectionShell tone="plain" contentClassName="!pt-8 sm:!pt-10">
      <div className="relative mx-auto max-w-4xl">
        <div className="pointer-events-none absolute top-0 left-1/2 h-8 w-px -translate-x-1/2 bg-charcoal/40" />
        <div className="pointer-events-none absolute top-8 left-[15%] right-[15%] h-px bg-charcoal/30" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-line bg-cream-deep/50 p-6 sm:p-8">
            <span className="mx-auto mb-4 block w-fit rounded-md bg-peach px-3 py-1 text-[11px] font-semibold text-ink">
              Traditional Property Services
            </span>
            <h3 className="font-display flex items-center gap-2 text-2xl text-maroon">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-maroon text-sm">
                !
              </span>
              Fragmented & High Anxiety
            </h3>
            <ul className="mt-5 space-y-2.5">
              {traditional.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-maroon/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-maroon/70" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-charcoal p-6 text-white sm:p-8">
            <span className="mx-auto mb-4 block w-fit rounded-md bg-peach px-3 py-1 text-[11px] font-semibold text-ink">
              REVORA SPACES Model
            </span>
            <h3 className="font-display text-2xl text-white">
              Single Partner, Total Control
            </h3>
            <ul className="mt-5 space-y-2.5">
              {revora.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-white/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-soft" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
