import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const counties = [
  { name: "Union County", towns: "Cranford · Westfield · Elizabeth · Union · Linden · Summit" },
  { name: "Essex County", towns: "Newark · Montclair · Maplewood · West Orange" },
  { name: "Middlesex County", towns: "Edison · Woodbridge · New Brunswick · Piscataway" },
  { name: "Hudson County", towns: "Jersey City · Hoboken · Bayonne · Union City" },
  { name: "Somerset & Morris", towns: "Bridgewater · Somerville · Morristown · Parsippany" },
  { name: "Monmouth & beyond", towns: "Red Bank · Freehold · anywhere in the Garden State" },
];

export default function Areas() {
  return (
    <section id="areas" className="bg-sand/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Where I work</p>
            <h2 className="section-title mt-4">All over New Jersey. Rooted in Cranford.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              From walkable downtowns on the Raritan Valley Line to quiet suburban streets and the Gold Coast, you get someone
              who knows the commute, the taxes, and the feel of each neighborhood.
            </p>
            <div className="mt-8 rounded-2xl border border-accent/25 bg-white/70 p-6">
              <p className="flex items-center gap-2 font-semibold">
                <Icon name="arrow" className="h-5 w-5 text-accent" /> Moving from New York City?
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                More space, a backyard, and an easy train back into Manhattan. I help NYC renters and buyers find the New Jersey town
                that fits their life and their commute.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {counties.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="card h-full !p-6">
                  <p className="flex items-center gap-2 font-display text-2xl">
                    <Icon name="pin" className="h-5 w-5 text-accent" /> {c.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.towns}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
