"use client";

import { type FormEvent, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HighlightLabel } from "@/components/ui/HighlightLabel";
import { LuSend } from "react-icons/lu";

const CORE_COLS = 11;
const CORE_ROWS = 10;
const SIDE_COLS = 10;
const EXTRA_ROWS = 10;
const COLS = CORE_COLS + SIDE_COLS * 2;
const ROWS = CORE_ROWS + EXTRA_ROWS * 2;
const HIGHLIGHT_COL = SIDE_COLS + 9;
const HIGHLIGHT_START_ROW = EXTRA_ROWS + 2;

const fieldClass =
  "h-12 w-full min-w-0 border border-[#F6E0BE] bg-[#FBF8F4] px-4 text-sm text-ink outline-none transition placeholder:text-[#8A8A8A] focus:border-[#D5B27F] focus:bg-white";

function BrickWall({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <section  id="book" className="flex h-full items-center justify-center">
      {Array.from({ length: COLS }, (_, col) => (
        <div key={col} className={col === 0 ? undefined : "-ml-[0.5px]"}>
          {Array.from({ length: ROWS }, (_, row) => {
            const highlightIndex =
              col === HIGHLIGHT_COL &&
              row >= HIGHLIGHT_START_ROW &&
              row < HIGHLIGHT_START_ROW + items.length
                ? row - HIGHLIGHT_START_ROW
                : -1;
            const item = highlightIndex >= 0 ? items[highlightIndex] : null;

            return (
              <div
                key={row}
                className={`h-[80px] w-[160px] shrink-0 border border-[#F6E0BE] ${
                  row > 0 ? "-mt-[0.5px]" : ""
                } ${row % 2 === 1 ? "-ml-[70px]" : ""} ${
                  item ? "border-l-[2px] border-b-[6px] p-2" : ""
                }`}
              >
                {item ? (
                  <div className="hidden xl:block">
                    <div className="text-[14px] font-bold">{item.title}</div>
                    <div className="text-[12px]">{item.text}</div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<"repair" | "project">("project");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("source", "hero-booking");
    formData.set("agree", "true");
    formData.set(
      "propertyType",
      mode === "repair" ? "Repairing & Maintenance" : "Start Your Project",
    );
    formData.set("details", String(formData.get("message") || ""));
    formData.delete("message");

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
        "http://localhost:5001";
      const response = await fetch(`${apiUrl}/api/enquiries`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit your booking.");
      }

      form.reset();
      setSubmitStatus("success");
      setSubmitMessage(
        result?.message || "Your booking request has been submitted.",
      );
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your booking.",
      );
    }
  }

  return (
    <div className="relative isolate min-h-dvh overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <BrickWall items={t.hero.highlights} />
      </div>

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-8 sm:px-5 sm:py-12 lg:py-16">
        <div className="w-full max-w-3xl text-center">
          <HighlightLabel className="max-w-full">
            {t.hero.badge}
          </HighlightLabel>
          <div className="font-display mt-5 text-[18px] leading-tight text-[#D1973F] sm:text-[30px] lg:text-[35px]">
            {t.hero.heading1}
            <br /> {t.hero.heading2}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink sm:text-base">
            {t.hero.body}
          </p>
          <form
            className="animate-fade-up delay-3 mx-auto mt-2 w-full max-w-[640px] p-5 shadow-[0_18px_50px_rgba(40,30,20,0.08)] sm:p-7"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-2.5 bg-white p-2 px-4 font-body sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMode("repair")}
                className={`h-12 px-2 text-sm font-medium transition ${
                  mode === "repair"
                    ? "bg-[#1C1C1C] text-white"
                    : " text-[#1C1C1C]"
                }`}
              >
                {t.hero.repair}
              </button>
              <button
                type="button"
                onClick={() => setMode("project")}
                className={`h-12 px-2 text-sm font-medium transition ${
                  mode === "project"
                    ? "bg-[#1C1C1C] text-white"
                    : " text-[#1C1C1C]"
                }`}
              >
                {t.hero.project}
              </button>
            </div>

            <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2">
              <input
                name="fullName"
                placeholder={t.hero.fullName}
                className={fieldClass}
                autoComplete="name"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder={t.hero.phone}
                className={fieldClass}
                autoComplete="tel"
                required
              />
              <input
                name="location"
                placeholder={t.hero.location}
                className={fieldClass}
                required
              />
              <input
                name="service"
                placeholder={t.hero.service}
                className={fieldClass}
                required
              />
            </div>

            <div className="mt-3 flex min-w-0 items-stretch gap-2.5">
              <input
                name="message"
                placeholder={t.hero.message}
                className={`${fieldClass} min-w-0 flex-1`}
              />
              <button
                type="submit"
                aria-label={t.hero.submit}
                disabled={submitStatus === "submitting"}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-[#1C1C1C] text-white transition hover:bg-[#2A2A2A]"
              >
                <LuSend size={20} />
              </button>
            </div>
            {submitMessage ? (
              <p
                className={`mt-3 text-sm ${
                  submitStatus === "error" ? "text-red-600" : "text-green-700"
                }`}
                role="status"
              >
                {submitMessage}
              </p>
            ) : null}
          </form>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:hidden">
            {t.hero.highlights.map((item) => (
              <div
                key={item.title}
                className="border border-[#F6E0BE] bg-white px-4 py-3"
              >
                <p className="text-xs font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-[11px] text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
