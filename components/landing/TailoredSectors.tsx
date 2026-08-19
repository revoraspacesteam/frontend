import { Badge } from "@/components/ui/Badge";

const frameText = {
  title: "Architecture and Space Planning",
  description:
    "Practical, functional, and aesthetic planning for homes, offices, and commercial properties.",
  points: [
    "Structural and spatial feasibility analysis",
    "Regulatory & zoning compliance blueprints",
    "Lighting, ventilation & airflow layout",
  ],
};

const frameSlots = [
  { x: 268, y: 250, w: 112, h: 155 },
  { x: 434, y: 250, w: 112, h: 155 },
  { x: 733, y: 249, w: 112, h: 155 },
  { x: 899, y: 250, w: 112, h: 155 },
  { x: 268, y: 632, w: 112, h: 155 },
  { x: 439, y: 633, w: 112, h: 155 },
  { x: 733, y: 631, w: 112, h: 155 },
  { x: 904, y: 632, w: 112, h: 155 },
] as const;

const impacts = [
  {
    title: "Regular Work Opportunities",
    text: "We connect skilled local plumbers, electricians, masons, painters, and carpenters with steady, organized work pipelines.",
  },
  {
    title: "Skill Support & Professional Growth",
    text: "We provide ongoing safety protocols, tool equipment access, and technical guidance to help workers excel in their trade.",
  },
  {
    title: "Fair & Respectful Earnings",
    text: "All trade workers receive transparent, timely payments well above market minimums, respecting their craftsmanship.",
  },
  {
    title: "A Stronger Service Network",
    text: "Building a reliable ecosystem of respected professionals raises industry standards and creates safer job sites.",
  },
] as const;

/** Title bands = 2nd strip in each SVG cell; body = box below the curve */
const impactTitleSlots = [
  { x: 176.792, y: 1082.79, w: 461.415, h: 49.4153 },
  { x: 637.792, y: 1082.79, w: 460.415, h: 49.4153 },
  { x: 176.792, y: 1301.79, w: 461.415, h: 49.4153 },
  { x: 637.792, y: 1301.79, w: 460.415, h: 49.4153 },
] as const;

const impactBodySlots = [
  { x: 176.792, y: 1142.79, w: 461.415, h: 117.415 },
  { x: 637.792, y: 1142.79, w: 460.415, h: 117.415 },
  { x: 176.792, y: 1361.79, w: 461.415, h: 124.415 },
  { x: 637.792, y: 1361.79, w: 460.415, h: 124.415 },
] as const;

const VB_W = 1281;
const VB_H = 2508;

function pct(n: number, total: number) {
  return `${(n / total) * 100}%`;
}

function FrameCopy() {
  return (
    <div className="flex h-full w-full flex-col items-center px-1.5 pt-2 font-sans text-ink">
      <div className="w-full bg-[#F6E0BE] px-1 py-1.5 text-center text-[6.5px] font-semibold leading-tight">
        {frameText.title}
      </div>
      <p className="mt-2 text-center text-[5.5px] leading-[1.35] text-ink/85">
        {frameText.description}
      </p>
      <ul className="mt-2 w-full space-y-1 text-left text-[5.5px] leading-[1.35] text-ink/80">
        {frameText.points.map((point) => (
          <li key={point} className="flex gap-1">
            <span className="mt-[2px] h-[2px] w-[2px] shrink-0 rounded-full bg-gold" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stars() {
  return (
    <div
      className="flex justify-center gap-1 text-gold"
      aria-label="5 star rating"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4"
        >
          <path d="M10 1.5 12.7 7l6 .9-4.3 4.2 1 5.9L10 15.2 4.6 18l1-5.9L1.3 7.9 7.3 7 10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function TailoredSectors() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F6F1EB]">
      <div className="px-4 sm:px-10 lg:px-20">
        <Badge className="max-w-full">Tailored Sectors</Badge>
        <h2 className="font-display mt-4 max-w-xl text-3xl text-gold sm:text-2xl">
          Specialized Care for Every Property Type
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          Whether managing your personal residence or overseeing corporate real
          estate portfolios, our teams execute with sector-specific expertise.
        </p>
      </div>

      <div className="mt-8 space-y-8 px-4 sm:px-10 lg:hidden">
        <article className="min-w-0 border-[3px] border-[#BD8A3B] bg-white p-5">
          <div className="bg-[#F6E0BE] px-3 py-2 text-center text-sm font-semibold text-ink">
            {frameText.title}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/85">
            {frameText.description}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
            {frameText.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="text-center">
          <span className="inline-block bg-[#FFDBA2] px-3 py-1 text-[10px] font-medium text-ink sm:text-xs">
            Community & Craftsmanship Impact
          </span>
          <h3 className="font-display mt-3 text-2xl text-gold">
            Better Spaces. Better Work Opportunities.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            REVORA SPACES supports local skilled workers by creating regular,
            fairly paid job opportunities for labourers, plumbers, electricians,
            carpenters, painters, technicians, and other trade professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {impacts.map((item) => (
            <article
              key={item.title}
              className="min-w-0 border border-[#F6E0BE] bg-white p-5 text-center"
            >
              <h4 className="font-display text-lg leading-tight text-gold">
                {item.title}
              </h4>
              <p className="font-body mt-3 text-sm leading-relaxed text-ink/80">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <span className="inline-block bg-[#FFDBA2] px-3 py-1 text-[10px] font-medium text-ink sm:text-xs">
            Our Core Philosophy
          </span>
          <p className="font-display mt-3 text-xl leading-snug text-[#D1973F]">
            “Every project helps create meaningful employment.”
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            When you hire REVORA SPACES, you are directly investing in respected
            local trades, safe job conditions, and fair wages for master
            craftspeople.
          </p>
        </div>

        <div className="mx-auto max-w-md border border-[#FAE0B9] bg-[#F9F8F5] px-5 py-6">
          <Stars />
          <p className="mt-4 text-center text-sm leading-relaxed text-ink/85">
            “We contacted the team for plumbing and electrical problems. The
            professionals arrived as scheduled, explained the work clearly, and
            completed everything properly.”
          </p>
        </div>
      </div>

      <div className="relative mt-5 hidden h-full w-full px-5 lg:block">
        <svg
          className="block h-auto w-full"
          width="1281"
          height="2508"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            opacity="0.4"
            d="M915.257 2012.08L939.997 2036.47L855.887 2121.2L823.67 2089.44L900.382 2012.16C904.467 2008.04 911.127 2008.01 915.257 2012.08Z"
            fill="#FEEFD7"
            stroke="#989898"
          />
          <rect
            opacity="0.4"
            x="-0.143596"
            y="0.693357"
            width="45.2363"
            height="90.6679"
            transform="matrix(0.547873 0.836562 -0.835064 0.550152 829.012 2083.43)"
            fill="#FEEFD7"
            stroke="#989898"
          />
          <rect
            x="138"
            y="28.5"
            width="1003"
            height="1764"
            stroke="#F6E0BE"
            strokeWidth="2"
          />
          <rect
            x="177"
            y="72.5"
            width="921"
            height="1682"
            stroke="#F6E0BE"
            strokeWidth="2"
          />
          <path
            d="M638.158 74L586.202 169.5H240.273L178.916 74H638.158Z"
            stroke="#F6E0BE"
          />
          <path
            d="M635.157 456.5L583.375 361.5H240.07L178.917 456.5H635.157Z"
            stroke="#F6E0BE"
          />
          <path
            d="M177.5 75.2217L238 170.645L238 360.354L177.5 454.301L177.5 75.2217Z"
            stroke="#F6E0BE"
          />
          <path
            d="M587.5 170.628L586.501 359.877L637.503 455.015L637.998 77.4766L587.5 170.628Z"
            stroke="#F6E0BE"
          />
          <path
            d="M1099.16 74.5L1047.2 170H701.273L639.916 74.5H1099.16Z"
            stroke="#F6E0BE"
          />
          <path
            d="M1097.66 456L1045.7 360.5H701.273L639.916 456H1097.66Z"
            stroke="#F6E0BE"
          />
          <path
            d="M639.5 75.7217L700 171.145V360.854L639.5 454.801L639.5 75.7217Z"
            stroke="#F6E0BE"
          />
          <path
            d="M1047.5 171.128L1046.5 360.377L1097.5 455.515L1098 77.9766L1047.5 171.128Z"
            stroke="#F6E0BE"
          />
          <path
            d="M1280 1823.72L1150 1791.17V31.3359L1280 1.25781V1823.72Z"
            stroke="#F6E0BE"
            strokeWidth="2"
          />
          <path
            d="M1 1821.22L131 1788.72V31.2949L1 1.25684V1821.22Z"
            stroke="#F6E0BE"
            strokeWidth="2"
          />
          <path
            d="M1257 1802.66L1150 1770.99V52.585L1257 23.3105V1802.66Z"
            stroke="#F6E0BE"
            strokeWidth="2"
          />
          <path
            d="M20 1802.67L131 1770.87V44.2852L20 17.2725V1802.67Z"
            stroke="#F6E0BE"
            strokeWidth="2"
          />

          <path
            d="M388.142 235L397.164 421.605H249.185L260.327 235H388.142Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />
          <path
            d="M554.142 235.5L563.164 422.105H415.185L426.327 235.5H554.142Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />
          <path
            d="M638.158 456.5L586.202 552H240.273L178.916 456.5H638.158Z"
            stroke="#F6E0BE"
          />
          <path
            d="M635.157 839L583.375 744H240.07L178.917 839H635.157Z"
            stroke="#F6E0BE"
          />
          <path
            d="M177.5 457.722L238 553.145L238 742.854L177.5 836.801L177.5 457.722Z"
            stroke="#F6E0BE"
          />
          <path
            d="M587.5 553.128L586.501 742.377L637.503 837.515L637.998 459.977L587.5 553.128Z"
            stroke="#F6E0BE"
          />
          <path
            d="M1099.16 457L1047.2 552.5H701.273L639.916 457H1099.16Z"
            stroke="#F6E0BE"
          />
          <path
            d="M1097.66 838.5L1045.7 743H701.273L639.916 838.5H1097.66Z"
            stroke="#F6E0BE"
          />
          <path
            d="M639.5 458.222L700 553.645V743.354L639.5 837.301L639.5 458.222Z"
            stroke="#F6E0BE"
          />
          <path
            d="M1047.5 553.628L1046.5 742.877L1097.5 838.015L1098 460.477L1047.5 553.628Z"
            stroke="#F6E0BE"
          />
          <path
            d="M388.142 617.5L397.164 804.105H249.185L260.327 617.5H388.142Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />
          <path
            d="M559.142 618L568.164 804.605H420.185L431.327 618H559.142Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />
          <path
            d="M853.142 234L862.164 420.605H714.185L725.327 234H853.142Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />
          <path
            d="M1019.14 234.5L1028.16 421.105H880.185L891.327 234.5H1019.14Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />
          <path
            d="M853.142 616.5L862.164 803.105H714.185L725.327 616.5H853.142Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />
          <path
            d="M1024.14 617L1033.16 803.605H885.185L896.327 617H1024.14Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="6"
          />

          {frameSlots.map((slot) => (
            <foreignObject
              key={`${slot.x}-${slot.y}`}
              x={slot.x}
              y={slot.y}
              width={slot.w}
              height={slot.h}
            >
              <div className="h-full w-full">
                <FrameCopy />
              </div>
            </foreignObject>
          ))}

          <rect
            x="177.792"
            y="839.792"
            width="920.415"
            height="220.415"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="176.792"
            y="1060.79"
            width="461.415"
            height="22.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="176.792"
            y="1082.79"
            width="461.415"
            height="49.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="176.792"
            y="1142.79"
            width="461.415"
            height="117.415"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="176.792"
            y="1281.79"
            width="461.415"
            height="20.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="176.792"
            y="1301.79"
            width="461.415"
            height="49.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="176.792"
            y="1361.79"
            width="461.415"
            height="124.415"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="637.792"
            y="1060.79"
            width="460.415"
            height="22.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="637.792"
            y="1082.79"
            width="460.415"
            height="49.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="637.792"
            y="1142.79"
            width="460.415"
            height="117.415"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="637.792"
            y="1281.79"
            width="460.415"
            height="19.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="637.792"
            y="1301.79"
            width="460.415"
            height="49.4153"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <rect
            x="637.792"
            y="1361.79"
            width="460.415"
            height="124.415"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <path
            d="M778.627 1142.97C831.532 1166.45 861.207 1169.71 914.115 1142.97"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <path
            d="M778.627 1361.02C831.842 1388.65 861.689 1392.49 914.908 1361.02"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <path
            opacity="0.86"
            d="M315.627 1142.4C368.532 1165.88 398.207 1169.15 451.115 1142.4"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <path
            d="M315.627 1362.3C368.842 1389.93 398.689 1393.77 451.908 1362.3"
            stroke="#F6E0BE"
            strokeWidth="1.58466"
          />
          <path
            opacity="0.4"
            d="M401.179 1886.23L364.111 1901.25L402.607 2033.91L445.699 2016.45L409.015 1890.03C408.014 1886.58 404.506 1884.88 401.179 1886.23Z"
            fill="#FEEFD7"
            stroke="#989898"
          />
          <path
            opacity="0.4"
            d="M340.95 1949.85L304.619 1967.31L351.098 2096.43L393.287 2076.16L349.01 1953.16C347.832 1949.88 344.409 1948.39 341.254 1949.72L340.95 1949.85Z"
            fill="#FEEFD7"
            stroke="#989898"
          />
          <rect
            opacity="0.4"
            x="-0.128807"
            y="0.714422"
            width="47.5195"
            height="136.014"
            transform="matrix(-0.805651 0.59239 0.548037 0.836454 389.847 2066.78)"
            fill="#FEEFD7"
            stroke="#989898"
          />
          <rect
            x="382.484"
            y="1690.53"
            width="453.931"
            height="816.931"
            fill="#F9F7F3"
          />
          <rect
            x="382.484"
            y="1690.53"
            width="453.931"
            height="816.931"
            stroke="#FAE0B9"
            strokeWidth="1.06918"
          />
          <rect
            x="402.484"
            y="1709.53"
            width="413.931"
            height="779.931"
            fill="#F9F8F5"
          />
          <rect
            x="402.484"
            y="1709.53"
            width="413.931"
            height="779.931"
            stroke="#FAE0B9"
            strokeWidth="1.06918"
          />
          <rect
            x="402.484"
            y="1709.53"
            width="413.931"
            height="108.931"
            fill="#F9F8F5"
          />
          <rect
            x="402.484"
            y="1709.53"
            width="413.931"
            height="108.931"
            stroke="#FAE0B9"
            strokeWidth="1.06918"
          />
          <rect x="415.5" y="1769.5" width="39" height="39" stroke="#FADFB5" />
          <rect
            x="527.484"
            y="1709.53"
            width="164.931"
            height="40.9308"
            stroke="#FAE0B9"
            strokeWidth="1.06918"
          />
        </svg>

        {/* Community intro — sits in the wide panel above the 2x2 grid */}
        <div
          className="pointer-events-none absolute flex flex-col items-center justify-center px-4 text-center"
          style={{
            left: pct(200, VB_W),
            top: pct(850, VB_H),
            width: pct(880, VB_W),
            height: pct(200, VB_H),
          }}
        >
          <span className="bg-[#FFDBA2] px-3 py-1 text-[10px] font-medium text-ink sm:text-xs">
            Community & Craftsmanship Impact
          </span>
          <h3 className="font-display mt-2 text-lg text-gold sm:text-2xl lg:text-3xl">
            Better Spaces. Better Work Opportunities.
          </h3>
          <p className="mt-2 max-w-2xl text-[9px] leading-relaxed text-muted sm:text-xs lg:text-sm">
            REVORA SPACES supports local skilled workers by creating regular,
            fairly paid job opportunities for labourers, plumbers, electricians,
            carpenters, painters, technicians, and other trade professionals.
          </p>
        </div>

        {/* 2×2 impact titles — SVG title bands */}
        {impacts.map((item, i) => {
          const slot = impactTitleSlots[i];
          return (
            <div
              key={`${item.title}-title`}
              className="pointer-events-none absolute flex items-center justify-center px-3 text-center sm:px-5"
              style={{
                left: pct(slot.x, VB_W),
                top: pct(slot.y, VB_H),
                width: pct(slot.w, VB_W),
                height: pct(slot.h, VB_H),
              }}
            >
              <h4 className="font-display text-[11px] leading-tight text-gold sm:text-sm lg:text-lg">
                {item.title}
              </h4>
            </div>
          );
        })}

        {/* 2×2 impact body copy — boxes below the curved divider */}
        {impacts.map((item, i) => {
          const slot = impactBodySlots[i];
          return (
            <div
              key={`${item.title}-body`}
              className="pointer-events-none absolute flex items-center justify-center px-4 text-center sm:px-6"
              style={{
                left: pct(slot.x, VB_W),
                top: pct(slot.y, VB_H),
                width: pct(slot.w, VB_W),
                height: pct(slot.h, VB_H),
              }}
            >
              <p className="font-body text-[10px] leading-snug text-ink/80 sm:text-[13px] lg:text-[15px]">
                {item.text}
              </p>
            </div>
          );
        })}

        {/* Core Philosophy — between grid and fan panel */}
        <div
          className="pointer-events-none absolute flex flex-col items-center justify-center px-4 text-center"
          style={{
            left: pct(220, VB_W),
            top: pct(1495, VB_H),
            width: pct(840, VB_W),
            height: pct(175, VB_H),
          }}
        >
          <span className=" bg-[#FFDBA2] px-3 py-1 text-[10px] font-medium text-ink sm:text-md">
            Our Core Philosophy
          </span>
          <p className="font-display mt-3 max-w-3xl text-base leading-snug text-[#D1973F] sm:text-xl lg:text-2xl">
            “Every project helps create meaningful employment.”
          </p>
          <p className="mt-2 max-w-lg text-[9px] leading-relaxed text-muted sm:text-xs lg:text-sm">
            When you hire REVORA SPACES, you are directly investing in respected
            local trades, safe job conditions, and fair wages for master
            craftspeople.
          </p>
        </div>

        {/* Testimonial card inside center fan panel */}
        <div
          className="pointer-events-none absolute flex flex-col items-center px-4 pt-8 sm:pt-12"
          style={{
            left: pct(420, VB_W),
            top: pct(1760, VB_H),
            width: pct(380, VB_W),
            height: pct(420, VB_H),
          }}
        >
          <div className="w-full border border-[#FAE0B9] bg-[#F9F8F5]/90 px-3 py-5 sm:px-5 sm:py-6">
            <Stars />
            <p className="mt-4 text-center text-[9px] leading-relaxed text-ink/85 sm:text-[11px] lg:text-sm">
              “We contacted the team for plumbing and electrical problems. The
              professionals arrived as scheduled, explained the work clearly,
              and completed everything properly.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
