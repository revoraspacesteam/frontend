"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";

const propertyTypes = ["Home", "Offices", "Commercial", "Repairs only"] as const;
const scopes = ["Minor repairs", "Renovation & fitout", "Full Construction"] as const;

export function ProjectEstimator() {
  const [property, setProperty] = useState<(typeof propertyTypes)[number]>("Home");
  const [scope, setScope] = useState<(typeof scopes)[number]>("Renovation & fitout");
  const [area, setArea] = useState(800);
  const [segment, setSegment] = useState<"Residential" | "Commercial">("Residential");

  const estimate = useMemo(() => {
    const base =
      scope === "Minor repairs" ? 180 : scope === "Renovation & fitout" ? 950 : 1800;
    const propertyFactor =
      property === "Commercial" ? 1.25 : property === "Offices" ? 1.15 : 1;
    const segmentFactor = segment === "Commercial" ? 1.1 : 1;
    const low = Math.round(area * base * propertyFactor * segmentFactor * 0.9);
    const high = Math.round(area * base * propertyFactor * segmentFactor * 1.15);
    const weeks =
      scope === "Minor repairs" ? "3–10 days" : scope === "Renovation & fitout" ? "3–8 weeks" : "3–9 months";
    return { low, high, weeks };
  }, [area, property, scope, segment]);

  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <Badge className="!bg-charcoal-soft !text-white/80 normal-case tracking-normal">
            Interactive Project Estimator
          </Badge>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl">
            Plan Your Scope & Get Instant Guidance
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Select your property type and scope to review an estimated timeline,
            key deliverables, and single contact coordination model.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Zero hidden markup on materials",
              "Milestone-locked transparent quotes",
              "100% single point of coordination",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-charcoal-soft px-4 py-3 text-sm"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-soft/20 text-gold-soft">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-charcoal-soft p-5 sm:p-6">
          <div>
            <p className="text-xs tracking-wide text-white/55 uppercase">
              1. Select Property Type
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProperty(type)}
                  className={`rounded-lg border px-2 py-3 text-xs transition ${
                    property === type
                      ? "border-gold-soft text-gold-soft"
                      : "border-white/15 text-white/70 hover:border-white/30"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs tracking-wide text-white/55 uppercase">
              2. Select Requirement Scope
            </p>
            <div className="mt-3 grid gap-2">
              {scopes.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setScope(item)}
                  className={`rounded-lg border px-3 py-3 text-left text-sm transition ${
                    scope === item
                      ? "border-gold-soft text-gold-soft"
                      : "border-white/15 text-white/70 hover:border-white/30"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="text-xs tracking-wide text-white/55 uppercase">
                3. Estimated Area (sq. ft)
              </p>
              <span className="text-sm text-gold-soft">{area} sq.ft</span>
            </div>
            <input
              type="range"
              min={100}
              max={10000}
              step={50}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full accent-gold-soft"
            />
          </div>

          <div className="mt-6">
            <p className="text-xs tracking-wide text-white/55 uppercase">
              4. Project Estimator
            </p>
            <p className="mt-1 text-xs text-white/55">
              Instant guidance using premium material assumptions and transparent ranges.
            </p>
            <div className="mt-3 inline-flex rounded-full bg-charcoal p-1">
              {(["Residential", "Commercial"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSegment(item)}
                  className={`rounded-full px-4 py-1.5 text-xs transition ${
                    segment === item ? "bg-gold-soft text-charcoal" : "text-white/70"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-charcoal px-4 py-5">
              <p className="text-xs text-white/55">Indicative investment range</p>
              <p className="mt-1 font-display text-2xl text-white">
                ₹{estimate.low.toLocaleString("en-IN")} – ₹
                {estimate.high.toLocaleString("en-IN")}
              </p>
              <p className="mt-2 text-sm text-white/70">
                Typical timeline: <span className="text-gold-soft">{estimate.weeks}</span>
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-white/45">
                Final quotation follows site assessment, material selection, and
                approved scope. This estimator is guidance only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
