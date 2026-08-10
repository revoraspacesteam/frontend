import Image from "next/image";
import Link from "next/link";
import { assets, r2Asset } from "@/lib/assets";

const links = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="footer-slant relative overflow-hidden bg-charcoal pt-20 text-white sm:pt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-10 lg:pb-16">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src={r2Asset(assets.logo)}
              alt="Revora"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div className="font-display leading-tight">
              <div className="text-2xl tracking-[0.08em]">REVORA</div>
              <div className="text-xs tracking-[0.28em] text-white/70">SPACES</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            End-to-end architecture, construction, renovation, repairs, and
            property maintenance for homes, offices, and commercial spaces
            through one clear and dependable partner.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium tracking-wide text-white/80">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {links.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-28 self-end">
          {/* Swap to r2Asset(assets.footerSkyline) once uploaded to R2 */}
          <svg
            viewBox="0 0 420 160"
            className="ml-auto h-auto w-full max-w-sm text-gold-soft/75"
            aria-hidden
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M20 140 V70 h40 v70" />
              <path d="M70 140 V40 h55 v100" />
              <path d="M135 140 V55 h35 v85" />
              <path d="M180 140 V25 h70 v115" />
              <path d="M260 140 V60 h45 v80" />
              <path d="M315 140 V35 h50 v105" />
              <path d="M375 140 V80 h30 v60" />
              <path d="M10 140 H410" />
              <path d="M95 55 h10 M95 70 h10 M200 45 h12 M200 60 h12 M330 50 h10" />
            </g>
          </svg>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/45 sm:px-8">
        © {new Date().getFullYear()} REVORA SPACES. All rights reserved.
      </div>
    </footer>
  );
}
