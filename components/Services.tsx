import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";

const services: { icon: IconName; title: string; label: string; body: string; points: string[] }[] = [
  {
    icon: "key",
    title: "Get the keys to a home you love",
    label: "Buyers",
    body: "From pre-approval to closing day, you'll know what's happening and what comes next.",
    points: ["Search set up around your must-haves", "Private showings on your schedule", "Offer strategy that wins without overpaying"],
  },
  {
    icon: "sign",
    title: "Sell for the strongest price",
    label: "Sellers",
    body: "Your home gets priced on real local data and put in front of serious buyers.",
    points: ["Free home value review", "Prep & staging guidance", "RE/MAX marketing reach"],
  },
  {
    icon: "door",
    title: "Move into the right rental, faster",
    label: "Renters",
    body: "Homes and apartments that fit your budget, commute, and lifestyle — without the runaround.",
    points: ["Shortlist matched to your budget", "Application help", "Lease terms explained clearly"],
  },
  {
    icon: "home",
    title: "Buy your first home with confidence",
    label: "First-time buyers",
    body: "Never done this before? Every step gets explained in plain English — no question is too small.",
    points: ["What you can really afford", "NJ first-time buyer programs", "Inspection & closing walkthrough"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow !text-[#e7a48f]">How I help</p>
          <h2 className="section-title mt-4">Whatever your next move is, you won&apos;t make it alone.</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7a48f]/15 text-[#e7a48f]">
                    <Icon name={s.icon} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">{s.label}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/65">{s.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-cream/85">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#e7a48f]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
