"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { assets, r2Asset } from "@/lib/assets";
import { borderClasses } from "@/lib/colors";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { label: t.header.calculator, href: "/calculator" },
    {
      label: t.header.vision,
      href: "https://vision.revoraspaces.com/",
      external: true,
    },
    { label: t.header.book, href: "/#book" },
    { label: t.header.contact, href: "/#contact" },

  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50  px-3 pt-3 transition-shadow duration-300 sm:px-5 sm:pt-4 ${
        scrolled ? "shadow-[0_4px_20px_rgba(28,28,28,0.04)]" : ""
      }`}
    >
      <div
        className={`mx-auto grid h-14 w-full max-w-7xl grid-cols-2 items-center border bg-cream px-4 sm:h-18 sm:px-6 md:grid-cols-[auto_minmax(0,1fr)_auto] ${borderClasses.light}`}
      >
        <Link href="/" className="flex items-center" aria-label="Revora Spaces home">
          <img
            src={r2Asset(assets.logo)}
            alt="Revora"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-center gap-3 md:flex lg:gap-8"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-ink transition-colors hover:text-gold"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            className={`inline-flex h-9 w-9 items-center justify-center border text-ink md:hidden ${borderClasses.light}`}
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
          <span className="sr-only">{t.header.menu}</span>
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
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-2">
              <LanguageSwitcher compact />
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
