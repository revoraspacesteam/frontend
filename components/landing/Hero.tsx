"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { LuSend } from "react-icons/lu";

const highlights = [
  { title: "Transparent pricing", text: "Upfront milestone estimates" },
  { title: "Clear Deadlines", text: "Committed completion schedules" },
  { title: "Regular Updates", text: "Daily photo & milestone reports" },
  { title: "Verified Professionals", text: "Vetted skilled trades people" },
];

const fieldClass =
  "h-12 w-full  border border-[#F6E0BE] bg-[#FBF8F4] px-4 text-sm text-ink outline-none transition placeholder:text-[#8A8A8A] focus:border-[#D5B27F] focus:bg-white";

export function Hero() {
  const [mode, setMode] = useState<"repair" | "project">("project");

  return (
    <section className="relative mt-10 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="animate-fade-up mb-6 flex justify-center">
            <Badge>One Trusted Partner for Homes, Offices & Commercial Spaces</Badge>
          </div>

          <h1 className="animate-fade-up delay-1 font-display text-2xl leading-[1.5] text-gold sm:text-5xl lg:text-4xl">
            From Small Repairs to Complete
            <br className="hidden sm:block" /> Spaces. We Handle It All
          </h1>

          <p className="animate-fade-up delay-2  mx-auto mt-10 max-w-2xl text-sm text-[#6D6D6D] leading-relaxed  sm:text-base">
            REVORA SPACES provides architecture, construction, renovation,
            maintenance, skilled professionals, materials, and complete project
            coordination through one clear and dependable process.
          </p>
        </div>

        {/* Floating feature chips — desktop */}
        <div className="pointer-events-none absolute top-28 right-6 hidden w-56 flex-col gap-3 xl:flex">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`animate-float border border-[#F6E0BE] bg-white/95 px-4 py-3 shadow-[0_8px_24px_rgba(28,28,28,0.05)] ${
                i % 2 === 0 ? "translate-x-2" : "-translate-x-1"
              }`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <p className="text-xs font-semibold text-ink">{item.title}</p>
              <p className="mt-0.5 text-[11px] text-muted">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Enquiry form */}
        <form
          className="animate-fade-up delay-3 mx-auto mt-12 w-full max-w-[640px] p-5 shadow-[0_18px_50px_rgba(40,30,20,0.08)] sm:p-7"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 bg-white p-2 px-4 font-body gap-2.5 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setMode("repair")}
              className={`h-12 text-sm font-medium  transition ${
                mode === "repair"
                  ? "bg-[#1C1C1C] text-white"
                  : " text-[#1C1C1C]"
              }`}
            >
              Repairing & Maintenance
            </button>
            <button
              type="button"
              onClick={() => setMode("project")}
              className={`h-12  text-sm font-medium transition ${
                mode === "project"
                  ? "bg-[#1C1C1C] text-white"
                  : " text-[#1C1C1C]"
              }`}
            >
              Start Your Project
            </button>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input
              name="fullName"
              placeholder="Full Name"
              className={fieldClass}
              autoComplete="name"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              className={fieldClass}
              autoComplete="tel"
            />
            <input
              name="location"
              placeholder="Property Location"
              className={fieldClass}
            />
            <input
              name="service"
              placeholder="Service Required"
              className={fieldClass}
            />
          </div>

          <div className="mt-3 flex items-stretch gap-2.5">
            <input
              name="message"
              placeholder="Write a short message for free Consultation"
              className={`${fieldClass} flex-1`}
            />
            <button
              type="submit"
              aria-label="Submit enquiry"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-[#1C1C1C] text-white transition hover:bg-[#2A2A2A]"
            >
             <LuSend size={20}/>
                {/* <path d="M3.4 20.6 21 12 3.4 3.4l-.1 6.7L14.5 12 3.3 13.9l.1 6.7z" />
              </svg> */}
            </button>
          </div>
        </form>

        {/* Mobile highlight strip */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:hidden">
          {highlights.map((item) => (
            <div
              key={item.title}
              className=" border border-[#F6E0BE] bg-white px-4 py-3"
            >
              <p className="text-xs font-semibold text-ink">{item.title}</p>
              <p className="mt-0.5 text-[11px] text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
