import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

const diamonds = [
  {
    n: 1,
    tag: "Zero vendor juggling",
    title: "One Point of Contact",
    text: "A dedicated Project Coordinator manages all trade workers, architects, and suppliers so you never chase multiple vendors.",
  },
  {
    n: 2,
    tag: "Transparent breakdown",
    title: "Clear Pricing",
    text: "Itemized cost estimates and defined payment milestones are agreed before any work starts. No surprise invoices.",
  },
  {
    n: 3,
    tag: "On-schedule delivery",
    title: "Committed Timelines",
    text: "Every project operates on a structured timeline with defined milestone target dates and site accountability.",
  },
  {
    n: 4,
    tag: "See it before building",
    title: "3D Clarity Before Execution",
    text: "Visualize layout, colors, textures, and lighting in photorealistic 3D models so you can make confident design tweaks early.",
  },
  {
    n: 5,
    tag: "End-to-end execution",
    title: "Complete Coordination",
    text: "We orchestrate technicians, machinery, material delivery, and cleanup seamlessly from start to handover.",
  },
  {
    n: 6,
    tag: "Daily site transparency",
    title: "Regular Progress Updates",
    text: "Receive consistent updates, photo documentation, and task logs without visiting the site daily.",
  },
];

function DiamondCard({
  n,
  tag,
  title,
  text,
}: {
  n: number;
  tag: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative mx-auto aspect-square w-[min(100%,16.5rem)]">
      <div className="absolute inset-[12%] rotate-45 rounded-2xl border border-line bg-white shadow-[0_10px_28px_rgba(28,28,28,0.06)]" />
      <div className="absolute top-[8%] left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 rotate-45 items-center justify-center rounded-md bg-charcoal">
        <span className="-rotate-45 text-xs font-semibold text-white">{n}</span>
      </div>
      <div className="absolute inset-[18%] z-10 flex flex-col items-center justify-center px-3 text-center">
        <span className="rounded-full bg-peach px-2 py-0.5 text-[9px] font-semibold text-ink">
          {tag}
        </span>
        <h3 className="mt-2 text-sm font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-[10px] leading-snug text-muted sm:text-[11px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export function RevoraDifference() {
  return (
    <SectionShell tone="brick">
      <Badge>The Revora Difference</Badge>

      {/* Desktop diamond V layout */}
      <div className="relative mt-10 hidden lg:block">
        <div className="pointer-events-none absolute inset-8 border border-line/60" style={{ transform: "rotate(45deg)" }} />
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          {diamonds.slice(0, 3).map((d) => (
            <DiamondCard key={d.n} {...d} />
          ))}
        </div>
        <div className="mx-auto mt-[-1.5rem] grid max-w-3xl grid-cols-2 gap-x-4">
          {diamonds.slice(3, 5).map((d) => (
            <DiamondCard key={d.n} {...d} />
          ))}
        </div>
        <div className="mx-auto mt-[-1rem] max-w-xs">
          <DiamondCard {...diamonds[5]} />
        </div>
      </div>

      {/* Mobile/tablet stack */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
        {diamonds.map((d) => (
          <article
            key={d.n}
            className="rounded-xl border border-line bg-white p-5"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-charcoal text-xs text-white">
                {d.n}
              </span>
              <span className="rounded-full bg-peach px-2 py-0.5 text-[10px] font-semibold">
                {d.tag}
              </span>
            </div>
            <h3 className="text-base font-semibold text-ink">{d.title}</h3>
            <p className="mt-2 text-sm text-muted">{d.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <p className="font-display text-xl text-ink sm:text-2xl">
          The Traditional Way
        </p>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-xs font-semibold text-white">
          vs
        </span>
        <p className="font-display text-xl text-ink sm:text-2xl">
          The <span className="tracking-wide">REVORA</span> Way
        </p>
      </div>
    </SectionShell>
  );
}
