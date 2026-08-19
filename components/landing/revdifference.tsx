"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HighlightLabel } from "../ui/HighlightLabel";

const VB_W = 1199;
const VB_H = 1050;

const diamonds = [
  {
    n: 1,
    tag: "Zero vendor juggling",
    title: "One Point of Contact",
    text: "A dedicated Project Coordinator manages all trade workers, architects, and suppliers so you never have to chase multiple vendors.",
    cx: 221.5,
    cy: 457.1,
    nx: 219.3,
    ny: 333.4,
  },
  {
    n: 2,
    tag: "Transparent breakdown",
    title: "Clear Pricing",
    text: "Itemized cost estimates and defined payment milestones are agreed before any work starts. No surprise invoices.",
    cx: 586.6,
    cy: 449.2,
    nx: 584.4,
    ny: 325.5,
  },
  {
    n: 3,
    tag: "On-schedule delivery",
    title: "Committed Timelines",
    text: "Every project operates on a structured timeline with defined milestone target dates and site accountability.",
    cx: 952.7,
    cy: 445.3,
    nx: 950.5,
    ny: 321.6,
  },
  {
    n: 4,
    tag: "See it before building",
    title: "3D Clarity Before Execution",
    text: "Visualize layout, colors, textures, and lighting in photorealistic 3D models so you can make confident design tweaks early.",
    cx: 407.5,
    cy: 637.2,
    nx: 405.3,
    ny: 513.5,
  },
  {
    n: 5,
    tag: "End-to-end execution",
    title: "Complete Coordination",
    text: "We orchestrate technicians, heavy machinery, material delivery, and cleanup seamlessly from start to handover.",
    cx: 772.6,
    cy: 628.3,
    nx: 770.4,
    ny: 504.6,
  },
  {
    n: 6,
    tag: "Daily site transparency",
    title: "Regular Progress Updates",
    text: "Receive consistent updates, photo documentation, and task logs right on your phone without visiting the site daily.",
    cx: 593.2,
    cy: 812.5,
    nx: 591.0,
    ny: 688.8,
  },
] as const;

function pct(n: number, total: number) {
  return `${(n / total) * 100}%`;
}

const COLS = 18;
const ROWS = 52;

function BrickWall() {
  return (
    <div className="flex h-full items-center justify-center">
      {Array.from({ length: COLS }, (_, col) => (
        <div key={col} className={col === 0 ? undefined : "-ml-[0.5px]"}>
          {Array.from({ length: ROWS }, (_, row) => (
            <div
              key={row}
              className={`h-[40px] w-[90px] shrink-0 border border-[#f6e0be97] ${
                row > 0 ? "-mt-[0.5px]" : ""
              } ${row % 2 === 1 ? "-ml-[35px]" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function Revdifference() {
  const { t } = useLanguage();
  const cardW = 168;
  const cardH = 168;
  const cards = diamonds.map((d, index) => ({
    ...d,
    ...t.difference.items[index],
  }));

  return (
    <div className="relative w-full overflow-x-clip">
      <div className="pointer-events-none absolute top-0 left-0" aria-hidden>
        <BrickWall />
      </div>

      <div className="relative px-4 py-10 sm:px-6 lg:hidden">
        <HighlightLabel className="max-w-full">
          {t.difference.badge}
        </HighlightLabel>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map((d) => (
            <article
              key={d.n}
              className="min-w-0 border border-[#f6e0be97] bg-white p-5"
            >
              <div className="mb-3 flex min-w-0 items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 rotate-45 items-center justify-center bg-black">
                  <span className="-rotate-45 text-xs font-semibold text-white">
                    {d.n}
                  </span>
                </span>
                <span className="min-w-0 bg-[#FBD497] px-2 py-1 text-[10px] font-semibold leading-tight text-ink">
                  {d.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-ink">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                {d.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative hidden w-full lg:block">
        <svg
          className="block h-auto w-full"
          width="1199"
          height="1050"
          viewBox="0 0 1199 1050"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect
            x="583.506"
            y="269.997"
            width="253.466"
            height="253.466"
            transform="rotate(44 583.506 269.997)"
            fill="white"
          />
          <rect
            x="583.527"
            y="272.72"
            width="74.651"
            height="74.6253"
            transform="rotate(44 583.527 272.72)"
            fill="black"
          />
          <rect
            x="218.342"
            y="277.87"
            width="253.466"
            height="253.466"
            transform="rotate(44 218.342 277.87)"
            fill="white"
          />
          <rect
            x="218.363"
            y="280.593"
            width="74.651"
            height="74.6253"
            rx="1.96828"
            transform="rotate(44 218.363 280.593)"
            fill="black"
          />
          <rect
            x="949.605"
            y="266.06"
            width="253.466"
            height="253.466"
            transform="rotate(44 949.605 266.06)"
            fill="white"
          />
          <rect
            x="949.627"
            y="268.784"
            width="74.651"
            height="74.6253"
            transform="rotate(44 949.627 268.784)"
            fill="black"
          />
          <rect
            x="404.392"
            y="457.967"
            width="253.466"
            height="253.466"
            transform="rotate(44 404.392 457.967)"
            fill="white"
          />
          <rect
            x="404.415"
            y="460.691"
            width="74.651"
            height="74.6253"
            transform="rotate(44 404.415 460.691)"
            fill="black"
          />
          <rect
            x="590.073"
            y="633.343"
            width="253.466"
            height="253.466"
            transform="rotate(44 590.073 633.343)"
            fill="white"
          />
          <rect
            x="590.094"
            y="636.066"
            width="74.651"
            height="74.6253"
            transform="rotate(44 590.094 636.066)"
            fill="black"
          />
          <path
            d="M189.436 245.485L1022.53 1049.34"
            stroke="url(#paint0_linear_622_141)"
            strokeWidth="0.984139"
          />
          <path
            d="M350.687 44.6289L1187.28 844.848"
            stroke="url(#paint1_linear_622_141)"
            strokeWidth="0.984139"
          />
          <path
            d="M991.555 218.402L184.984 1048.87"
            stroke="url(#paint2_linear_622_141)"
            strokeWidth="0.984139"
          />
          <path
            d="M846.734 0.342773L40.1636 830.811"
            stroke="url(#paint3_linear_622_141)"
            strokeWidth="0.984139"
          />
          <rect
            x="769.508"
            y="449.11"
            width="253.466"
            height="253.466"
            transform="rotate(44 769.508 449.11)"
            fill="white"
          />
          <rect
            x="769.528"
            y="451.833"
            width="74.651"
            height="74.6253"
            transform="rotate(44 769.528 451.833)"
            fill="black"
          />
          <defs>
            <linearGradient
              id="paint0_linear_622_141"
              x1="236.038"
              y1="280.307"
              x2="925.528"
              y2="945.671"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_622_141"
              x1="397.441"
              y1="79.2471"
              x2="1089.82"
              y2="741.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_622_141"
              x1="946.107"
              y1="254.717"
              x2="278.572"
              y2="942.105"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_622_141"
              x1="801.287"
              y1="36.6583"
              x2="133.751"
              y2="724.046"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
          </defs>
        </svg>

        {/* Section badge */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: pct(24, VB_W),
            top: pct(28, VB_H),
          }}
        >
          <HighlightLabel>{t.difference.badge}</HighlightLabel>
        </div>

        {/* Numbers on black diamonds */}
        {diamonds.map((d) => (
          <div
            key={`n-${d.n}`}
            className="pointer-events-none absolute flex items-center justify-center"
            style={{
              left: pct(d.nx - 18, VB_W),
              top: pct(d.ny - 18, VB_H),
              width: pct(36, VB_W),
              height: pct(36, VB_H),
            }}
          >
            <span className="text-[11px] font-semibold text-white sm:text-sm lg:text-base">
              {d.n}
            </span>
          </div>
        ))}

        {/* Card copy inside white diamonds */}
        {cards.map((d) => (
          <div
            key={d.n}
            className="pointer-events-none  absolute flex flex-col items-center justify-center px-2 text-center"
            style={{
              left: pct(d.cx - cardW / 2, VB_W),
              top: pct(d.cy - cardH / 2 + 12, VB_H),
              width: pct(cardW, VB_W),
              height: pct(cardH, VB_H),
            }}
          >
            <span className="font-body bg-[#FBD497] px-2 py-1 text-[7px] font-semibold leading-tight text-ink sm:text-[10px] lg:text-[12px]">
              {d.tag}
            </span>
            <h3 className="mt-1.5 text-[9px] font-semibold leading-tight text-ink sm:mt-2 sm:text-[11px] lg:text-sm">
              {d.title}
            </h3>
            <p className="mt-1 text-[6.5px] leading-snug text-ink/75 sm:text-[10px] tracking-wider lg:text-[12px]">
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Revdifference;
