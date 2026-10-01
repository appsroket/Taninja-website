import Reveal from "@/components/Reveal";

const steps = [
  { n: "01", title: "We talk", body: "A free, no-pressure call about what you want, your timeline, and your budget." },
  { n: "02", title: "You get a plan", body: "A clear game plan: the homes, the price strategy, and every step between now and closing." },
  { n: "03", title: "You get the keys", body: "I handle the showings, negotiation, and paperwork — you focus on your next chapter." },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title mx-auto mt-4 max-w-3xl">Three steps from &ldquo;just looking&rdquo; to &ldquo;welcome home.&rdquo;</h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <li className="card h-full">
                <span className="font-display text-6xl text-accent/30">{s.n}</span>
                <h3 className="mt-4 font-display text-3xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
