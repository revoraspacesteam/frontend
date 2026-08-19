"use client";

import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useState, type FormEvent } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
        "http://localhost:5001";
      const response = await fetch(`${apiUrl}/api/enquiries`, {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || t.contact.error);
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative h-full overflow-x-clip bg-transparent"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-hidden lg:block"
        aria-hidden
      >
        <svg
          className="block h-full w-full"
          width="1304"
          height="859"
          viewBox="0 0 1304 859"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
        >
          <path d="M0 858.5H1302" stroke="url(#paint0_linear_559_61)" />
          <path
            d="M1196.97 101.154V857.968H626.032V101.151L907.236 30.0479L1196.97 101.154Z"
            fill="white"
            stroke="#BD8A3B"
            strokeWidth="1.06401"
          />
          <path
            d="M904.5 854V37.5L875.5 47V854H904.5Z"
            stroke="url(#paint1_linear_559_61)"
          />
          <path
            d="M912.5 853V36.5L941.5 46V853H912.5Z"
            stroke="url(#paint2_linear_559_61)"
          />
          <path
            d="M624 107.5L16 0.5H1302L1198.5 107.5"
            stroke="url(#paint3_linear_559_61)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_559_61"
              x1="72.5433"
              y1="858.543"
              x2="72.5448"
              y2="860.328"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_559_61"
              x1="877.116"
              y1="72.6676"
              x2="921.828"
              y2="74.0406"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_559_61"
              x1="939.884"
              y1="71.6676"
              x2="895.172"
              y2="73.0406"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_559_61"
              x1="87.6518"
              y1="5.10862"
              x2="105.864"
              y2="194.349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F1EC" />
              <stop offset="0.533379" stopColor="#BD8A3B" />
              <stop offset="1" stopColor="#F6F1EA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-30">
        <div className="min-w-0 py-0 lg:py-20">
          <Badge className="max-w-full">{t.contact.badge}</Badge>
          <h2 className="font-display mt-4 text-3xl text-gold">
            {t.contact.heading}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            {t.contact.body}
          </p>

          <div className="mt-8 space-y-3">
            {t.contact.items.map((item) => (
              <div
                key={item.title}
                className="w-full max-w-full border border-[#BD8A3B] bg-[#EFE7DA] px-4 py-3 sm:max-w-80"
              >
                <p className="text-sm font-semibold break-words text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          className="relative mt-0 min-w-0 overflow-hidden border border-[#BD8A3B] bg-white lg:mt-20 lg:border-0 lg:bg-transparent"
          onSubmit={handleSubmit}
        >
          <div className="px-4 pt-8 text-center sm:px-8 sm:pt-10">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              {t.contact.formTitle}
            </h3>
            <p className="mt-1 text-sm text-muted">{t.contact.formSubtitle}</p>
          </div>

          <div className="z-10 grid grid-cols-1 gap-3 px-4 py-6 sm:grid-cols-2 sm:px-8">
            {(
              [
                ["fullName", t.contact.fields.fullName],
                ["phone", t.contact.fields.phone],
                ["email", t.contact.fields.email],
                ["location", t.contact.fields.location],
                ["propertyType", t.contact.fields.propertyType],
                ["service", t.contact.fields.service],
                ["budget", t.contact.fields.budget],
                ["startDate", t.contact.fields.startDate],
              ] as const
            ).map(([name, label]) => (
              <label key={name} className="block min-w-0 text-xs text-muted">
                <input
                  name={name}
                  placeholder={label}
                  type={
                    name === "email"
                      ? "email"
                      : name === "startDate"
                        ? "date"
                        : name === "phone"
                          ? "tel"
                          : "text"
                  }
                  required={name === "phone" || name === "location"}
                  className="mt-1 h-11 w-full min-w-0 bg-[#F5F2EE] px-3 text-sm text-ink outline-none focus:border-gold-soft"
                />
              </label>
            ))}

            <label className="block min-w-0 text-xs text-muted sm:col-span-2">
              <textarea
                name="details"
                rows={4}
                placeholder={t.contact.fields.details}
                className="mt-1 w-full min-w-0 bg-[#F5F2EE] px-3 py-2 text-sm text-ink outline-none focus:border-gold-soft"
              />
            </label>

            <label className="block min-w-0 text-xs text-muted sm:col-span-2">
              {t.contact.upload}
              <input
                type="file"
                name="files"
                accept="image/jpeg,image/png,image/webp,application/pdf"
                multiple
                className="mt-1 block w-full min-w-0 border border-dashed border-line bg-[#F5F2EE] px-3 py-3 text-sm"
              />
            </label>

            <label className="block min-w-0 text-xs text-muted sm:col-span-2">
              {t.contact.contactMethod}
              <select
                name="contactMethod"
                className="mt-1 h-11 w-full min-w-0 bg-[#F5F2EE] px-3 text-sm text-ink outline-none focus:border-gold-soft"
                defaultValue="Phone"
              >
                <option value="Phone">{t.contact.methods.Phone}</option>
                <option value="WhatsApp">{t.contact.methods.WhatsApp}</option>
                <option value="Email">{t.contact.methods.Email}</option>
              </select>
            </label>
          </div>

          <div className="w-full px-4 pb-8 sm:px-8">
            <label className="flex w-full items-start gap-3 text-left text-xs leading-relaxed text-ink sm:text-sm">
              <input
                type="checkbox"
                name="agree"
                required
                className="mt-0.5 h-4 w-4 shrink-0 appearance-none border border-gold bg-transparent checked:border-gold checked:bg-gold"
              />
              <span>{t.contact.agree}</span>
            </label>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-5 flex h-11 w-full items-center justify-center bg-charcoal text-center text-sm font-semibold text-white transition hover:bg-charcoal-soft disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? t.contact.submitting : t.contact.submit}
            </button>
            {status === "success" || status === "error" ? (
              <p
                role="status"
                className={`mt-3 text-center text-sm ${
                  status === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {status === "success" ? t.contact.success : t.contact.error}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
