import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="bg-transparent px-5 py-16 sm:px-8 sm:py-20">
      <div className="cta-lens mx-auto flex max-w-5xl flex-col items-center bg-charcoal px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <span className="rounded-md border border-gold-soft/50 px-3 py-1 text-[11px] tracking-wide text-gold-soft">
          Zero Vendor Hassle. Total Property Care.
        </span>
        <h2 className="font-display mt-5 max-w-2xl text-3xl sm:text-4xl">
          Your Space Should Not Become Your Headache
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Whether you need an urgent repair, a complete renovation, or a new
          property designed and constructed, REVORA SPACES can manage the
          professionals, planning, materials, coordination, and updates for you.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center bg-gold-soft px-6 text-sm font-semibold text-charcoal transition hover:brightness-105"
          >
            Get A Free Consultation
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center bg-gold-soft px-6 text-sm font-semibold text-charcoal transition hover:brightness-105"
          >
            Book A Repair Service
          </Link>
        </div>
      </div>
    </section>
  );
}
