import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

export function OurStory() {
  return (
    <SectionShell tone="brick" id="about">
      <div className="mx-auto max-w-3xl">
        <Badge>Our Story & Values</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-4xl">
          We Make Property Projects Easier to Manage
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          REVORA SPACES was built for property owners who are tired of fragmented
          vendors, unclear pricing, and endless follow-ups. We bring architecture,
          construction, renovation, repairs, materials, and skilled trades into
          one coordinated operating system.
        </p>

        <div className="mt-8">
          <Badge>Replacing Friction with Organization</Badge>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Traditional property work forces clients to become project managers —
            sourcing people, comparing quotes, chasing updates, and absorbing
            delays. That friction costs time, money, and peace of mind.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Our model replaces that chaos with a single accountable partner,
            milestone planning, transparent estimates, and daily visibility —
            so your space moves forward without becoming your full-time job.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
