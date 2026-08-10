import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";
import { R2Image } from "@/components/ui/R2Image";
import { assets } from "@/lib/assets";

export function MissionVision() {
  return (
    <SectionShell tone="grid">
      <div className="relative overflow-hidden rounded-[1.5rem] border-[10px] border-[#3a2a22] bg-[#f3e7d6] shadow-[0_20px_50px_rgba(28,28,28,0.12)]">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-6 -translate-x-1/2">
          <div className="flex h-full flex-col items-center justify-between py-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-full border-2 border-[#3a2a22] bg-[#5a4336]"
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="space-y-4 p-6 sm:p-8 lg:pr-10">
            <div className="rounded-xl border border-[#c9b39a] bg-[#efe0cb] p-5">
              <h3 className="text-lg font-semibold text-[#3a2a22]">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4d3b30]">
                To simplify property projects by uniting design, trades,
                materials, and coordination under one transparent process that
                protects timelines, budgets, and client peace of mind.
              </p>
            </div>
            <div className="rounded-xl border border-[#c9b39a] bg-[#efe0cb] p-5">
              <h3 className="text-lg font-semibold text-[#3a2a22]">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4d3b30]">
                To become the most dependable end-to-end property partner —
                where every home, office, and commercial space is delivered with
                clarity, craftsmanship, and accountable care.
              </p>
            </div>
          </div>

          <div className="relative border-t border-[#c9b39a]/60 p-6 sm:p-8 lg:border-t-0 lg:pl-10">
            <R2Image
              name={assets.constructionCrane}
              alt="Construction coordination illustration"
              width={420}
              height={280}
              className="mx-auto h-auto w-full max-w-sm object-contain"
              fallback={
                <svg viewBox="0 0 320 220" className="mx-auto h-auto w-full max-w-sm text-[#3a2a22]" aria-hidden>
                  <rect x="40" y="90" width="70" height="100" fill="#d9c4a8" stroke="currentColor" />
                  <rect x="120" y="60" width="80" height="130" fill="#cbb28f" stroke="currentColor" />
                  <rect x="210" y="100" width="55" height="90" fill="#d9c4a8" stroke="currentColor" />
                  <path d="M250 40 V190 M250 40 H300 M300 40 V55" stroke="#c0392b" strokeWidth="3" />
                  <path d="M250 70 H285" stroke="#c0392b" strokeWidth="2" />
                  <path d="M20 190 H300" stroke="currentColor" />
                </svg>
              }
            />
            <h3 className="mt-4 text-center text-lg font-semibold text-[#3a2a22]">
              Integrated Excellence
            </h3>
            <p className="mt-1 text-center text-sm text-[#4d3b30]">
              Architects, Engineers & Trade Masters Working as One Team
            </p>

            <div className="mt-6 space-y-3 lg:absolute lg:top-10 lg:-right-2 lg:mt-0 lg:w-44">
              <div className="rounded-md border border-white bg-cream px-3 py-2 shadow-sm">
                <p className="text-xs font-semibold text-ink">Single Contract</p>
                <p className="text-[11px] text-muted">
                  All services under one transparent agreement.
                </p>
              </div>
              <div className="rounded-md border border-white bg-cream px-3 py-2 shadow-sm">
                <p className="text-xs font-semibold text-ink">Daily Reporting</p>
                <p className="text-[11px] text-muted">
                  Real-time site photos and milestone updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="mb-6 flex justify-center">
          <Badge>Our Core Operating Values</Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Transparency",
              text: "Upfront milestone breakdowns and honest material sourcing without hidden surprises.",
            },
            {
              title: "Quality",
              text: "Multi-stage engineering checks and rigorous material verification before handover.",
            },
            {
              title: "Accountability",
              text: "Single-point project coordination where we take full ownership of site quality and schedules.",
            },
            {
              title: "Reliability",
              text: "Predictable communication, regular photo logs, and dependable trade delivery.",
            },
          ].map((value) => (
            <article
              key={value.title}
              className="rounded-xl border border-line bg-white/80 p-5"
            >
              <h3 className="text-base font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
