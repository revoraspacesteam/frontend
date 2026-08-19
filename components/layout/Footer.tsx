"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { assets, r2Asset } from "@/lib/assets";

export function Footer() {
  const { t } = useLanguage();
  const links = [
    { label: t.footer.home, href: "/" },
    { label: t.footer.contact, href: "/#contact" },
    { label: t.footer.calculator, href: "/calculator" },
    {
      label: t.footer.vision,
      href: "https://vision.revoraspaces.com/",
      external: true,
    },
    { label: t.footer.book, href: "/#book" },
    // { label: t.footer.pricing, href: "/#pricing" },
  ];
  return (
    <footer className="relative overflow-hidden  bg-[#1E252B] text-white [clip-path:polygon(0_0,100%_12%,100%_100%,0_100%)]">
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-36 pt-16 sm:px-8 sm:pb-40 sm:pt-20 lg:px-10 lg:pb-44">
        <div className="grid w-full max-w-3xl gap-10 sm:gap-14 lg:grid-cols-[1.45fr_0.85fr] lg:gap-16">
          <div>
            <div className="mb-5  flex flex-col items-start gap-3">
              <img
                src={r2Asset(assets.logo)}
                alt="Revora"
                className="h-11 w-11 object-contain sm:h-18 sm:w-18"
              />
              <div className="font-display leading-none">
                <div className="text-2xl  tracking-[0.08em] sm:text-[1.75rem]">
                  REVORA
                  <span className="text-[0.85rem] pl-2 font-sans tracking-[0.28em] text-white/75">
                    SPACES
                  </span>
                </div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/80 sm:text-[0.9375rem]">
              {t.footer.tagline}
            </p>
          </div>

          <div className="lg:pt-1 ">
            <h3 className="mb-4 text-sm font-medium tracking-wide text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-gold-soft"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Full-bleed skyline: flush left, short, no side gaps */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] w-full sm:h-[140px] lg:h-[160px]"
        viewBox="0 430 1319 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path
          d="M749 685H848.5V537.5L921 443L988 537.5M988 537.5V685M988 537.5V220L1104 309V497M1104 685V497M1104 497H1319V685"
          stroke="url(#footer_sky_0)"
        />
        <path
          d="M748 686.5V555M748 555H677M513.5 555V508.5L586.5 555V686.5H677V555L748 508.5V555M586.5 555H513.5M513.5 555V686.5M513.5 555L446 508.5V555M513.5 555H446M446 555V686.5H334"
          stroke="url(#footer_sky_1)"
        />
        <path
          d="M0 685.5H10M113 685.5V621.5L104.5 613.876M113 685.5H76M113 685.5H123M104.5 613.876L88.75 599.75L64.5 578L10 621.5V685.5M88.75 599.75V582.5H104.5V613.876M10 685.5H51.5M51.5 685.5V662H76V685.5M51.5 685.5H76M226 685.5V621.5L217.5 613.876M226 685.5H189M226 685.5H236M217.5 613.876L201.75 599.75L177.5 578L123 621.5V685.5M201.75 599.75V582.5H217.5V613.876M123 685.5H164.5M164.5 685.5V662H189V685.5M164.5 685.5H189M330.5 613.876L314.75 599.75L290.5 578L236 621.5V685.5M314.75 599.75V582.5H330.5V613.876M330.5 613.876L339 621.5V685.5H302M236 685.5H277.5M277.5 685.5V662H302V685.5M277.5 685.5H302"
          stroke="url(#footer_sky_2)"
        />
        <defs>
          <linearGradient
            id="footer_sky_0"
            x1="821.543"
            y1="184.048"
            x2="1178.83"
            y2="952.326"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5F1EC" />
            <stop offset="0.533379" stopColor="#BD8A3B" />
            <stop offset="1" stopColor="#F6F1EA" />
          </linearGradient>
          <linearGradient
            id="footer_sky_1"
            x1="357.067"
            y1="497.507"
            x2="506.187"
            y2="767.759"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5F1EC" />
            <stop offset="0.533379" stopColor="#BD8A3B" />
            <stop offset="1" stopColor="#F6F1EA" />
          </linearGradient>
          <linearGradient
            id="footer_sky_2"
            x1="0"
            y1="184.548"
            x2="400"
            y2="952.826"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F5F1EC" />
            <stop offset="0.533379" stopColor="#BD8A3B" />
            <stop offset="1" stopColor="#F6F1EA" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
}
