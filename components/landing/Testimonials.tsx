import { SectionShell } from "@/components/ui/SectionShell";

const reviews = [
  {
    name: "Aarav Mehta",
    role: "Homeowner",
    text: "We contacted the team for a full apartment renovation. Clear milestones, daily photo updates, and one coordinator made the whole process calm and predictable.",
  },
  {
    name: "Sana Kapoor",
    role: "Office Manager",
    text: "Our office fit-out finished on the committed date. Pricing was transparent and we never had to chase multiple vendors ourselves.",
  },
  {
    name: "Rohan Desai",
    role: "Retail Owner",
    text: "From design visualization to handover, REVORA owned every detail. The single point of contact alone saved us weeks of coordination stress.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
          <path d="M10 1.5 12.7 7l6 .9-4.3 4.2 1 5.9L10 15.2 4.6 18l1-5.9L1.3 7.9 7.3 7 10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <SectionShell tone="plain">
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_28px_rgba(28,28,28,0.04)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-peach font-display text-sm text-gold">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-display text-base text-ink">{review.name}</p>
                <p className="text-xs text-muted">{review.role}</p>
              </div>
            </div>
            <Stars />
            <p className="mt-3 text-sm leading-relaxed text-muted">{review.text}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
