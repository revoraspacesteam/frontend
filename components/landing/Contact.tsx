"use client";

import { Badge } from "@/components/ui/Badge";

const contacts = [
  {
    title: "Direct call: +91 73102 7959",
    note: "Available Mon–Sat, 8 am to 9 pm",
  },
  {
    title: "WhatsApp Instant Support: +91 73102 7959",
    note: "Fast photo & site location sharing",
  },
  {
    title: "Email: revoraspacesteam@gmail.com",
    note: "Officials & proposal blueprints",
  },
  {
    title: "Primary Coverage Areas",
    note: "Metropolitan Area, Suburban Districts & Surrounding Business Parks",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-transparent">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
        <div>
          <Badge>Direct Contact & Support</Badge>
          <h2 className="font-display mt-4 text-3xl text-gold sm:text-4xl">
            Discuss Your Property Needs
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Fill out the enquiry form or contact our team directly for instant
            trade repair dispatch or project consultation.
          </p>

          <div className="mt-8 space-y-3">
            {contacts.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gold/35 bg-cream px-4 py-4"
              >
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-xs text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          className="relative overflow-hidden rounded-b-2xl border border-line bg-white shadow-[0_16px_40px_rgba(28,28,28,0.06)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="bg-cream-deep px-6 pt-10 pb-6 text-center sm:px-8">
            <div className="mx-auto mb-4 h-0 w-0 border-x-[28px] border-b-[22px] border-x-transparent border-b-gold/70" />
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              Project Consultation & Repair Request
            </h3>
            <p className="mt-1 text-sm text-muted">
              Complete the details below for a customized proposal and callback.
            </p>
          </div>

          <div className="grid gap-3 px-6 py-6 sm:grid-cols-2 sm:px-8">
            {[
              ["fullName", "Full Name"],
              ["phone", "Phone Number *"],
              ["email", "Email Address"],
              ["location", "Property Location *"],
              ["propertyType", "Property Type"],
              ["service", "Service Required"],
              ["budget", "Estimated Budget Range"],
              ["startDate", "Preferred Start Date"],
            ].map(([name, label]) => (
              <label key={name} className="block text-xs text-muted">
                {label}
                <input
                  name={name}
                  className="mt-1 h-11 w-full rounded-lg border border-line bg-cream/50 px-3 text-sm text-ink outline-none focus:border-gold-soft"
                />
              </label>
            ))}

            <label className="block text-xs text-muted sm:col-span-2">
              Project Details or Repair Description
              <textarea
                name="details"
                rows={4}
                className="mt-1 w-full rounded-lg border border-line bg-cream/50 px-3 py-2 text-sm text-ink outline-none focus:border-gold-soft"
              />
            </label>

            <label className="block text-xs text-muted sm:col-span-2">
              Upload Site Photos or Blueprints (Optional)
              <input
                type="file"
                name="files"
                className="mt-1 block w-full rounded-lg border border-dashed border-line bg-cream/40 px-3 py-3 text-sm"
              />
            </label>

            <label className="block text-xs text-muted sm:col-span-2">
              Preferred Contact Method
              <select
                name="contactMethod"
                className="mt-1 h-11 w-full rounded-lg border border-line bg-cream/50 px-3 text-sm text-ink outline-none focus:border-gold-soft"
                defaultValue="Phone"
              >
                <option>Phone</option>
                <option>WhatsApp</option>
                <option>Email</option>
              </select>
            </label>
          </div>

          <div className="px-6 pb-8 sm:px-8">
            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-charcoal text-sm font-semibold text-white transition hover:bg-charcoal-soft"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
