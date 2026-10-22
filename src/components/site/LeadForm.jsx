import React, { useState } from "react";
import { Loader2, Check, Send } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { site, waLink, waMessages } from "@/data/site";
import { Eyebrow, Disclaimer } from "./primitives";

const countryCodes = [
  { code: "+971", label: "UAE +971" },
  { code: "+966", label: "KSA +966" },
  { code: "+974", label: "Qatar +974" },
  { code: "+965", label: "Kuwait +965" },
  { code: "+973", label: "Bahrain +973" },
  { code: "+968", label: "Oman +968" },
  { code: "+20", label: "Egypt +20" },
  { code: "+962", label: "Jordan +962" },
  { code: "+961", label: "Lebanon +961" },
  { code: "+91", label: "India +91" },
  { code: "+92", label: "Pakistan +92" },
  { code: "+44", label: "UK +44" },
  { code: "+1", label: "USA +1" },
];

const inputBase =
  "w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-[16px] text-white placeholder-white/35 outline-none transition-colors focus:border-gear";

export default function LeadForm({
  source = "website",
  defaultService = "",
  defaultBrand = "",
  heading = "Request a Callback",
  eyebrow = "Free Quote",
  reassurance,
}) {
  const [form, setForm] = useState({
    name: "",
    countryCode: "+971",
    phone: "",
    service: defaultService,
    brand: defaultBrand,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 6) next.phone = "Please enter a valid phone number";
    if (!form.service) next.service = "Please select the service required";
    setErrors(next);
    if (Object.keys(next).length) return;

    setState("submitting");
    const leadData = {
      name: form.name.trim(),
      country_code: form.countryCode,
      phone: form.phone.trim(),
      service: form.service,
      brand: form.brand || "Not specified",
      message: form.message.trim(),
      source,
      status: "new",
      created_at: new Date().toISOString(),
    };

    // Store lead locally in browser storage
    try {
      const stored = JSON.parse(localStorage.getItem("leads") || "[]");
      stored.unshift(leadData);
      localStorage.setItem("leads", JSON.stringify(stored));
    } catch (_) {}

    setState("done");
  };

  if (state === "done") {
    const waQuoteText = `Hello, my name is ${form.name.trim()}.\nI requested a quote for: ${form.service} (${form.brand || "Vehicle"}).\nPhone: ${form.countryCode} ${form.phone.trim()}${form.message ? `\nDetails: ${form.message.trim()}` : ""}`;

    return (
      <div className="double-bezel rivets">
        <div className="double-bezel-inner">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gear">
            <Check className="h-6 w-6 text-ink" strokeWidth={3} />
          </div>
          <h3 className="mt-6 text-2xl text-white">Request received</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Thank you, {form.name.split(" ")[0]}. A technician will call you back within 60 minutes during
            workshop hours. For an immediate response, message us directly on WhatsApp with your vehicle details.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(waQuoteText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center gap-2 rounded-full bg-wa px-5 font-extrabold uppercase tracking-wide text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp now
            </a>
            <a
              href={site.telHref}
              className="flex min-h-[48px] items-center gap-2 rounded-full border border-white/20 px-5 font-extrabold uppercase tracking-wide text-white"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="double-bezel rivets">
      <div className="double-bezel-inner">
        <div className="flex items-center justify-between gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
            60-min response
          </span>
        </div>
        <h3 className="mt-4 text-2xl text-white">{heading}</h3>
        {reassurance ? (
          <p className="mt-2 text-sm leading-relaxed text-white/60">{reassurance}</p>
        ) : null}

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="lead-name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
              Your name
            </label>
            <input
              id="lead-name"
              value={form.name}
              onChange={set("name")}
              placeholder="Full name"
              className={`${inputBase} ${errors.name ? "border-red-400/70" : "border-white/12"}`}
            />
            {errors.name ? <p className="mt-1.5 text-[12px] text-red-300">{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="lead-phone" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
              Phone number
            </label>
            <div className="flex gap-2">
              <select
                aria-label="Country code"
                value={form.countryCode}
                onChange={set("countryCode")}
                className="w-[38%] rounded-xl border border-white/12 bg-white/[0.04] px-3 py-3.5 text-[16px] text-white outline-none transition-colors focus:border-gear"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code} className="bg-ink text-white">
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                id="lead-phone"
                value={form.phone}
                onChange={set("phone")}
                inputMode="tel"
                placeholder="50 123 4567"
                className={`${inputBase} flex-1 ${errors.phone ? "border-red-400/70" : "border-white/12"}`}
              />
            </div>
            {errors.phone ? <p className="mt-1.5 text-[12px] text-red-300">{errors.phone}</p> : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-service" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                Service needed
              </label>
              <select
                id="lead-service"
                value={form.service}
                onChange={set("service")}
                className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-[16px] text-white outline-none transition-colors focus:border-gear ${
                  errors.service ? "border-red-400/70" : "border-white/12"
                }`}
              >
                <option value="" className="bg-ink text-white">
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name} className="bg-ink text-white">
                    {s.name}
                  </option>
                ))}
                <option value="Other / Not sure yet" className="bg-ink text-white">
                  Other / Not sure yet
                </option>
              </select>
              {errors.service ? <p className="mt-1.5 text-[12px] text-red-300">{errors.service}</p> : null}
            </div>
            <div>
              <label htmlFor="lead-brand" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                Vehicle brand
              </label>
              <select
                id="lead-brand"
                value={form.brand}
                onChange={set("brand")}
                className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-[16px] text-white outline-none transition-colors focus:border-gear"
              >
                <option value="" className="bg-ink text-white">
                  Select a brand
                </option>
                {brands.map((b) => (
                  <option key={b.slug} value={b.name} className="bg-ink text-white">
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="lead-message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
              Describe the issue
            </label>
            <textarea
              id="lead-message"
              value={form.message}
              onChange={set("message")}
              rows={4}
              placeholder="Symptoms, noises, warning lights, model and year…"
              className={`${inputBase} resize-none border-white/12`}
            />
          </div>

          {errors.form ? <p className="text-[13px] text-red-300">{errors.form}</p> : null}

          <button
            type="submit"
            disabled={state === "submitting"}
            className="btn-nested w-full justify-center bg-gear font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-gear-hover disabled:opacity-70"
          >
            {state === "submitting" ? (
              <>
                <span>Sending…</span>
                <span className="btn-nested-icon">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </span>
              </>
            ) : (
              <>
                <span>Request A Callback</span>
                <span className="btn-nested-icon">
                  <Send className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </>
            )}
          </button>
        </div>

        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
          <Disclaimer>AED 300 minimum diagnostic / inspection fee, disclosed before any work begins.</Disclaimer>
          <Disclaimer>Free pickup and delivery upon approved estimate.</Disclaimer>
        </div>
      </div>
    </form>
  );
}
