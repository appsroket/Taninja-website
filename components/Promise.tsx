import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const promises = [
  "You'll always know what's happening next — no chasing me for updates.",
  "You'll get honest advice, even when it's not what's easiest to hear.",
  "You'll never be rushed into a home, an offer, or a price you're not sure about.",
  "You'll have me on call, text, and WhatsApp — not stuck behind an office line.",
  "You'll get every number explained: price, taxes, closing costs, monthly payment.",
  "You'll be treated like a neighbor long after closing day.",
];

export default function Promise() {
  return (
    <section className="relative overflow-hidden bg-accent py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">My promise to you</p>
          <h2 className="section-title mt-4">What working with me actually feels like.</h2>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {promises.map((p, i) => (
            <Reveal key={p} delay={i * 80}>
              <li className="flex h-full gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 leading-relaxed">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
                {p}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
