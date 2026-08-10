"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { assets, r2Asset } from "@/lib/assets";
import { borderClasses } from "@/lib/colors";

const nav = [
  { label: "Contact Us", href: "#contact" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-cream px-3 pt-3 transition-shadow duration-300 sm:px-5 sm:pt-4 ${
        scrolled ? "shadow-[0_4px_20px_rgba(28,28,28,0.04)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex h-14 w-full max-w-7xl items-center justify-between border px-4 sm:h-18 sm:px-6 ${borderClasses.light}`}
      >
        <Link href="/" className="flex items-center" aria-label="Revora Spaces home">
          <img
            src={r2Asset(assets.logo)}
            alt="Revora"
       
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
        </Link>

        <nav className="hidden items-center  gap-8 md:flex lg:gap-10" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`inline-flex h-9 w-9 items-center justify-center border text-ink md:hidden ${borderClasses.light}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-4 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 bg-ink transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          className={`mx-auto mt-0 max-w-6xl border border-t-0 bg-brick px-4 py-3 md:hidden ${borderClasses.light}`}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
