"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HighlightLabel } from "../ui/HighlightLabel";

/** Desktop card positions form a sideways chevron (>).
 * Milestones 1–4 retain their existing positions.
 */
const CARD_POSITIONS = [
  { left: 0, top: 0 },
  { left: 34, top: 150 },
  { left: 68, top: 300 },
  { left: 100, top: 450 },
  { left: 104, top: 680 },
  { left: 70, top: 920 },
  { left: 38, top: 1160 },
  { left: 6, top: 1400 },
] as const;

function WorkflowArt() {
  return (
    <svg
      className="h-auto w-full max-w-[min(100%,17.5rem)]"
      viewBox="0 0 409 399"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="156.6" y="136" width="169" height="42" rx="21" fill="#2D1212" />
      <rect x="146.6" y="201" width="180" height="42" rx="21" fill="#2D1212" />
      <rect
        x="125.6"
        y="14"
        width="175"
        height="328"
        rx="84.5"
        fill="#222222"
      />
      <rect x="123.6" width="169" height="355" rx="84.5" fill="#547781" />
      <rect x="131.6" y="109" width="136" height="137" rx="68" fill="#F0E0C7" />
      <g opacity="0.85">
        <g filter="url(#wf_filter0)">
          <ellipse
            cx="134.1"
            cy="171.079"
            rx="133.5"
            ry="95.2409"
            fill="#FFEED3"
          />
        </g>
        <path
          d="M134.1 76.3384C170.873 76.3384 204.144 86.973 228.208 104.141C252.274 121.31 267.1 144.983 267.1 171.08C267.1 197.176 252.274 220.849 228.208 238.018C204.144 255.186 170.873 265.82 134.1 265.82C97.3271 265.82 64.0562 255.186 39.9916 238.018C15.926 220.849 1.10011 197.176 1.09998 171.08C1.09998 144.983 15.926 121.31 39.9916 104.141C64.0563 86.973 97.327 76.3384 134.1 76.3384Z"
          stroke="#191919"
        />
      </g>
      <g opacity="0.85" filter="url(#wf_filter1)">
        <ellipse
          cx="119.041"
          cy="167.823"
          rx="118.441"
          ry="105.823"
          fill="#FFBA51"
        />
        <path
          d="M119.04 63.2207C183.912 63.2207 236.26 110.179 236.26 167.823C236.26 225.468 183.912 272.426 119.04 272.426C54.169 272.426 1.82072 225.468 1.82068 167.823C1.82068 110.179 54.1689 63.2208 119.04 63.2207Z"
          stroke="#BD8A3B"
          strokeWidth="2.44207"
        />
      </g>
      <ellipse
        opacity="0.85"
        cx="106.423"
        cy="167.416"
        rx="104.195"
        ry="98.904"
        fill="#D1973F"
      />
      <path
        opacity="0.85"
        d="M110.086 129.25C140.28 129.25 167.593 133.482 187.341 140.31C197.217 143.724 205.174 147.778 210.652 152.256C216.133 156.736 219.073 161.587 219.073 166.603C219.072 171.618 216.133 176.469 210.652 180.949C205.174 185.426 197.217 189.481 187.341 192.896C167.593 199.723 140.28 203.954 110.086 203.954C79.893 203.954 52.5793 199.723 32.8314 192.896C22.9551 189.481 14.9976 185.427 9.5199 180.949C4.03861 176.469 1.10013 171.618 1.09998 166.603C1.09998 161.587 4.03872 156.736 9.5199 152.256C14.9976 147.778 22.9551 143.724 32.8314 140.31C52.5793 133.482 79.8929 129.25 110.086 129.25Z"
        fill="#FFBA52"
        stroke="#BD8A3B"
      />
      <path
        d="M398.828 305.401L399.217 305.89L382.735 321.987L378.3 316.411L390.132 304.855C392.7 302.347 396.594 302.591 398.828 305.401Z"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <rect
        x="-0.196168"
        y="0.70207"
        width="7.25586"
        height="22.8146"
        transform="matrix(0.463134 0.886288 -0.855471 0.517851 379.366 315.61)"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <path
        d="M404.71 320.786L405.099 321.327L387.95 336.535L383.77 330.715L396.055 319.819C398.741 317.437 402.616 317.87 404.71 320.786Z"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <rect
        x="-0.22979"
        y="0.690624"
        width="7.29431"
        height="22.6995"
        transform="matrix(0.420875 0.907118 -0.880455 0.47413 385.073 330.132)"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <path
        d="M388.377 291.134L388.747 291.474L374.586 310.09L369.43 305.352L379.656 291.91C381.829 289.052 385.734 288.705 388.377 291.134Z"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <rect
        x="-0.0878766"
        y="0.725021"
        width="7.13033"
        height="23.1886"
        transform="matrix(0.590258 0.807215 -0.766011 0.642828 370.878 304.022)"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <path
        d="M327.087 310.367L333.763 311.382L335.516 299.578L335.561 299.207C335.915 295.553 333.473 292.202 329.902 291.407L327.087 310.367Z"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <rect
        x="-0.469476"
        y="0.530053"
        width="6.75262"
        height="14.3703"
        transform="matrix(-0.998085 0.0618551 0.0591327 0.99825 333.557 310.568)"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <path
        d="M407.314 335.747L407.695 336.356L389.744 350.358L385.909 344.242L398.735 334.238C401.566 332.03 405.406 332.705 407.314 335.747Z"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <rect
        x="-0.272292"
        y="0.672939"
        width="7.34195"
        height="22.5567"
        transform="matrix(0.365251 0.930909 -0.909835 0.414969 387.09 343.659)"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <path
        d="M367.617 338.373C374.951 347.649 369.212 362.54 357.862 363.684L331.903 366.298C325.369 366.957 319.476 362.479 317.799 355.582L315.894 347.741C314.323 341.279 316.856 334.301 322.109 330.618L337.376 319.913C343.176 315.847 350.653 316.918 355.02 322.442L367.617 338.373Z"
        fill="#FEEFD7"
        stroke="#989898"
      />
      <defs>
        <filter
          id="wf_filter0"
          x="0.599976"
          y="75.8384"
          width="267"
          height="190.482"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="42.2062" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.741346 0 0 0 0 0.54044 0 0 0 0 0.232383 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_632_163"
          />
        </filter>
        <filter
          id="wf_filter1"
          x="-2.43187e-05"
          y="59.4"
          width="242.081"
          height="216.846"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" />
          <feGaussianBlur stdDeviation="1.3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_632_163"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_632_163"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const COLS = 8;
const ROWS = 10;

function BrickWall() {
  return (
    <div className="flex h-full items-center justify-center">
      {Array.from({ length: COLS }, (_, col) => (
        <div key={col} className={col === 0 ? undefined : "-ml-[0.5px]"}>
          {Array.from({ length: ROWS }, (_, row) => (
            <div
              key={row}
              className={`h-[220px] w-[220px] shrink-0 border border-[#f6e0be97] ${
                row > 0 ? "-mt-[0.5px]" : ""
              } ${row % 2 === 1 ? "-ml-[35px]" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function StructuredWorkflow() {
  const { t } = useLanguage();
  return (
    <div className="relative mt-12 w-full overflow-x-clip px-4 sm:mt-16 sm:px-6 lg:mt-20 lg:px-10">
      <div className="pointer-events-none absolute top-0 left-0" aria-hidden>
        <BrickWall />
      </div>
      <div className="relative max-w-4xl">
        <HighlightLabel>{t.workflow.badge}</HighlightLabel>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-3xl">
          {t.workflow.heading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {t.workflow.body}
        </p>
      </div>

      <div className="relative mt-8 sm:mt-12 lg:mt-16">
        <div className="pointer-events-none absolute top-1/2 left-0 z-0 hidden w-[min(32%,280px)] -translate-y-1/2 lg:block">
          <WorkflowArt />
        </div>

        <div className="relative z-10 flex flex-col items-stretch gap-5 sm:items-start lg:block lg:h-425 lg:space-y-0">
          {t.workflow.stages.map((item, index) => {
            const cardPosition = CARD_POSITIONS[index] ?? CARD_POSITIONS[0];
            const position = {
              "--card-left": `${cardPosition.left}%`,
              "--card-top": `${cardPosition.top}px`,
              "--card-shift": `-${cardPosition.left}%`,
            } as CSSProperties;

            return (
              <article
                key={item.stage}
                className="relative w-full min-w-0 max-w-full border border-[#f6e0be97] bg-white p-5 sm:max-w-90 sm:p-6 lg:absolute lg:left-(--card-left) lg:top-(--card-top) lg:min-h-75 lg:translate-x-(--card-shift)"
                style={position}
              >
                <p className="text-xs font-semibold tracking-wide text-ink">
                  {item.stage}
                </p>
                <h3 className="mt-1 text-base font-semibold text-gold sm:text-lg">
                  {item.title} :
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <p className="mt-3 text-xs font-semibold text-ink">
                  {t.workflow.deliverables}
                </p>
                <ul className="mt-1.5 space-y-1">
                  {item.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center px-6 -rotate-90 sm:mt-10 lg:hidden">
          <WorkflowArt />
        </div>
      </div>
    </div>
  );
}
