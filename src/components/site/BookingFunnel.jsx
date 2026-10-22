import React, { useState } from "react";
import { Check, ArrowLeft, ArrowRight, Loader2, Car, Wrench, CalendarClock, Truck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
import { site, waLink, waMessages, disclaimers } from "@/data/site";
import { Eyebrow, Disclaimer } from "./primitives";

const steps = [
  { n: 1, label: "Vehicle", icon: Car },
  { n: 2, label: "Service", icon: Wrench },
  { n: 3, label: "Date & Time", icon: CalendarClock },
  { n: 4, label: "Logistics", icon: Truck },
];

const timeSlots = ["8:00 – 10:00 AM", "10:00 – 12:00 PM", "12:00 – 2:00 PM", "2:00 – 4:00 PM", "4:00 – 7:00 PM"];

const inputCls =
  "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-[16px] text-white placeholder-white/35 outline-none transition-colors focus:border-gear";

export default function BookingFunnel({ defaultService = "", defaultBrand = "" }) {
  const [step, setStep] = useState(1);
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    countryCode: "+971",
    phone: "",
    brand: defaultBrand,
    model: "",
    year: "",
    mileage: "",
    service: defaultService,
    issue: "",
    date: "",
    slot: timeSlots[0],
    mode: "pickup",
    address: "",
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    if (step === 1) {
      if (!form.name.trim() || !form.phone.trim() || !form.brand || !form.model.trim() || !form.year.trim())
        return "Please complete your name, phone, vehicle make, model and year.";
    }
    if (step === 2 && !form.service) return "Please select the service or issue you need.";
    if (step === 3 && !form.date) return "Please choose your preferred date.";
    if (step === 4 && form.mode === "pickup" && !form.address.trim())
      return "Please enter the pickup address, or switch to workshop drop-off.";
    return "";
  };

  const next = () => {
    const msg = validate();
    if (msg) return setError(msg);
    setError("");
    setStep((s) => Math.min(4, s + 1));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = async () => {
    const msg = validate();
    if (msg) return setError(msg);
    setError("");
    setState("submitting");

    const bookingLead = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      country_code: form.countryCode,
      service: form.service,
      brand: form.brand,
      message: [
        `Vehicle: ${form.brand} ${form.model} ${form.year}`,
        `Mileage: ${form.mileage || "not provided"}`,
        `Reported issue: ${form.issue || "not provided"}`,
        `Preferred date: ${form.date} · ${form.slot}`,
        `Logistics: ${form.mode === "pickup" ? `Free pickup & delivery upon approved estimate to ${form.address}` : "Workshop drop-off"}`,
      ].join(" | "),
      source: "appointment-funnel",
      status: "new",
      created_at: new Date().toISOString(),
    };

    try {
      const stored = JSON.parse(localStorage.getItem("demo_leads") || "[]");
      stored.unshift(bookingLead);
      localStorage.setItem("demo_leads", JSON.stringify(stored));
    } catch (_) {}

    setState("done");
  };

  if (state === "done") {
    return (
      <div className="double-bezel rivets">
        <div className="double-bezel-inner">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gear">
            <Check className="h-6 w-6 text-ink" strokeWidth={3} />
          </span>
          <h3 className="mt-6 text-2xl text-white">Appointment request received</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">
            Thank you {form.name.split(" ")[0]} — we have your booking request for your {form.brand} {form.model}{" "}
            on {form.date} ({form.slot}). A service advisor will confirm the slot within 60 minutes during
            workshop hours.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-mono text-[12px] leading-relaxed text-white/65">
            <p>VEHICLE · {form.brand} {form.model} {form.year}</p>
            <p className="mt-2">SERVICE · {form.service}</p>
            <p className="mt-2">
              LOGISTICS · {form.mode === "pickup" ? "Free pickup & delivery upon approved estimate" : "Workshop drop-off"}
            </p>
            {form.mode === "pickup" ? <p className="mt-2">ADDRESS · {form.address}</p> : null}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(
                `${waMessages.booking}\n${form.brand} ${form.model} ${form.year}\nService: ${form.service}\nPreferred: ${form.date} ${form.slot}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center gap-2 rounded-full bg-wa px-5 font-extrabold uppercase tracking-wide text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" /> Confirm on WhatsApp
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
    <div className="double-bezel rivets">
      <div className="double-bezel-inner">
        <div className="flex items-center justify-between gap-4">
          <Eyebrow>Step {step} of 4</Eyebrow>
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
            Free pickup upon approved estimate
          </span>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-2">
              <div className={`h-1 rounded-full ${step >= s.n ? "bg-gear" : "bg-white/12"}`} />
              <span
                className={`flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wider ${
                  step >= s.n ? "text-gear" : "text-white/35"
                }`}
              >
                <s.icon className="h-3 w-3" />
                <span className="hidden sm:inline">{s.label}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {step === 1 ? (
            <>
              <h3 className="text-xl text-white">Your vehicle</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="bk-name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Your name
                  </label>
                  <input id="bk-name" value={form.name} onChange={set("name")} placeholder="Full name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="bk-phone" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <select
                      aria-label="Country code"
                      value={form.countryCode}
                      onChange={set("countryCode")}
                      className="w-[42%] rounded-xl border border-white/12 bg-white/[0.04] px-3 py-3.5 text-[16px] text-white outline-none focus:border-gear"
                    >
                      {["+971", "+966", "+974", "+965", "+973", "+968", "+20", "+91", "+92", "+44", "+1"].map((c) => (
                        <option key={c} value={c} className="bg-ink text-white">{c}</option>
                      ))}
                    </select>
                    <input
                      id="bk-phone"
                      value={form.phone}
                      onChange={set("phone")}
                      inputMode="tel"
                      placeholder="50 123 4567"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="bk-brand" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Vehicle make
                  </label>
                  <select id="bk-brand" value={form.brand} onChange={set("brand")} className={inputCls}>
                    <option value="" className="bg-ink text-white">Select make</option>
                    {brands.map((b) => (
                      <option key={b.slug} value={b.name} className="bg-ink text-white">{b.name}</option>
                    ))}
                    <option value="Other" className="bg-ink text-white">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bk-model" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Model
                  </label>
                  <input id="bk-model" value={form.model} onChange={set("model")} placeholder="e.g. GLE 450" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="bk-year" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Year
                  </label>
                  <input id="bk-year" value={form.year} onChange={set("year")} inputMode="numeric" placeholder="e.g. 2021" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="bk-mileage" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Current mileage (KM)
                  </label>
                  <input id="bk-mileage" value={form.mileage} onChange={set("mileage")} inputMode="numeric" placeholder="e.g. 86,000" className={inputCls} />
                </div>
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <h3 className="text-xl text-white">What do you need?</h3>
              <div>
                <label htmlFor="bk-service" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                  Service or issue
                </label>
                <select id="bk-service" value={form.service} onChange={set("service")} className={inputCls}>
                  <option value="" className="bg-ink text-white">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name} className="bg-ink text-white">{s.name}</option>
                  ))}
                  <option value="Diagnosis / not sure" className="bg-ink text-white">Diagnosis / not sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="bk-issue" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                  Describe the issue
                </label>
                <textarea
                  id="bk-issue"
                  value={form.issue}
                  onChange={set("issue")}
                  rows={5}
                  placeholder="Warning lights, noises, when it happens, how long it has been doing it…"
                  className={`${inputCls} resize-none`}
                />
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <h3 className="text-xl text-white">Preferred date &amp; time</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="bk-date" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Preferred date
                  </label>
                  <input id="bk-date" type="date" value={form.date} onChange={set("date")} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="bk-slot" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Time slot
                  </label>
                  <select id="bk-slot" value={form.slot} onChange={set("slot")} className={inputCls}>
                    {timeSlots.map((t) => (
                      <option key={t} value={t} className="bg-ink text-white">{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-white/55">
                We are open {site.hours.toLowerCase()}. If these slots do not suit, tell us your preferred time
                in step 4 and we will arrange it.
              </p>
            </>
          ) : null}

          {step === 4 ? (
            <>
              <h3 className="text-xl text-white">Drop-off or free pickup?</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { key: "pickup", title: "Free Pickup & Delivery", text: "Upon approved estimate — we collect and return your car anywhere in Dubai." },
                  { key: "dropoff", title: "Workshop Drop-off", text: `Bring it to ${site.street}, Dubai. Open ${site.hoursShort}.` },
                ].map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, mode: o.key }))}
                    aria-pressed={form.mode === o.key}
                    className={`rounded-2xl border p-5 text-left transition-colors ${
                      form.mode === o.key ? "border-gear bg-gear/[0.08]" : "border-white/12 hover:border-white/25"
                    }`}
                  >
                    <p className="font-heading text-[15px] font-bold text-white">{o.title}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">{o.text}</p>
                  </button>
                ))}
              </div>
              {form.mode === "pickup" ? (
                <div>
                  <label htmlFor="bk-address" className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Pickup address in Dubai
                  </label>
                  <input
                    id="bk-address"
                    value={form.address}
                    onChange={set("address")}
                    placeholder="Building, area, emirate"
                    className={inputCls}
                  />
                </div>
              ) : null}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-mono text-[11.5px] leading-relaxed text-white/65">
                <p>VEHICLE · {form.brand || "—"} {form.model || ""} {form.year || ""}</p>
                <p className="mt-2">SERVICE · {form.service || "—"}</p>
                <p className="mt-2">PREFERRED · {form.date || "—"} · {form.slot}</p>
                <p className="mt-2">LOGISTICS · {form.mode === "pickup" ? "Free pickup & delivery upon approved estimate" : "Workshop drop-off"}</p>
              </div>
            </>
          ) : null}

          {error ? <p className="text-[13px] text-red-300">{error}</p> : null}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {step > 1 ? (
              <button
                type="button"
                onClick={back}
                className="flex min-h-[48px] items-center gap-2 rounded-full border border-white/20 px-5 font-extrabold uppercase tracking-wide text-white transition-colors hover:border-gear hover:text-gear"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            ) : null}

            {step < 4 ? (
              <button
                type="button"
                onClick={next}
                className="btn-nested bg-gear font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-gear-hover"
              >
                <span>Continue</span>
                <span className="btn-nested-icon">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={state === "submitting"}
                className="btn-nested bg-gear font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-gear-hover disabled:opacity-70"
              >
                {state === "submitting" ? (
                  <>
                    <span>Booking…</span>
                    <span className="btn-nested-icon">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </span>
                  </>
                ) : (
                  <>
                    <span>Confirm Booking</span>
                    <span className="btn-nested-icon">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
            <Disclaimer>{disclaimers.pickup}</Disclaimer>
            <Disclaimer>{disclaimers.diagnostic}</Disclaimer>
            <Disclaimer>{disclaimers.inspection}</Disclaimer>
          </div>
        </div>
      </div>
    </div>
  );
}
