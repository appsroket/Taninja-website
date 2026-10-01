"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { officeLine, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);

    if (res?.ok) {
      setStatus("sent");
      form.reset();
    } else {
      const data = await res?.json().catch(() => null);
      setError(data?.error ?? "Something went wrong. Please call or text instead.");
      setStatus("error");
    }
  }

  const channels = [
    { icon: "phone", label: "Call", value: site.phone, href: site.phoneHref },
    { icon: "chat", label: "Text or WhatsApp", value: site.phone, href: site.whatsappHref },
    { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: "pin", label: "Office", value: officeLine, href: `https://maps.google.com/?q=${encodeURIComponent(officeLine)}` },
  ] as const;

  return (
    <section id="contact" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow !text-[#e7a48f]">Let&apos;s talk</p>
          <h2 className="section-title mt-4">Your next move starts with one conversation.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/65">
            Tell me a little about what you&apos;re looking for. I&apos;ll reach out the same day with next steps — no pressure, no obligation.
          </p>

          <ul className="mt-10 space-y-4">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7a48f]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#e7a48f] transition-colors group-hover:border-[#e7a48f]">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-cream/45">{c.label}</span>
                    <span className="block break-all text-cream">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] bg-cream p-8 text-ink md:p-10">
            {status === "sent" ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-3xl">Thank you — message received!</h3>
                <p className="mt-3 max-w-sm text-muted">I&apos;ll be in touch today. Need me sooner? Call or text {site.phone}.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h3 className="font-display text-3xl">Get your free consultation</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Full name</span>
                    <input name="name" required autoComplete="name" className={field} placeholder="Jane Smith" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Phone</span>
                    <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="(908) 555-0142" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Email</span>
                  <input name="email" type="email" autoComplete="email" className={field} placeholder="jane@email.com" />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">I want to…</span>
                    <select name="intent" className={field} defaultValue="Buy a home">
                      <option>Buy a home</option>
                      <option>Sell my home</option>
                      <option>Rent a home or apartment</option>
                      <option>Know what my home is worth</option>
                      <option>Move from NYC to NJ</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium">Town or area</span>
                    <input name="area" className={field} placeholder="e.g. Cranford, Westfield" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Anything else? (optional)</span>
                  <textarea name="message" rows={3} className={field} placeholder="Budget, timeline, must-haves…" />
                </label>
                {status === "error" && <p className="text-sm text-accent-dark" role="alert">{error}</p>}
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Talk to Taniaja"}
                </button>
                <p className="text-center text-xs text-muted">Free · No obligation · Your info is never shared</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
