import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const values = [
  { icon: "heart", title: "Neighbor first", body: "You're not a transaction. You're someone in my community making one of the biggest decisions of your life." },
  { icon: "clock", title: "Easy to reach", body: "Call, text, or WhatsApp. You won't wait days to hear back — questions get answered the same day." },
  { icon: "shield", title: "Straight answers", body: "If a home, a price, or a timeline isn't right for you, you'll hear it from me before you hear it from anyone else." },
] as const;

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Meet {site.firstName}</p>
          <h2 className="section-title mt-4">
            Your trusted agent <span className="text-accent">and</span> neighbor.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Hi, I&apos;m {site.name} — a licensed real estate agent with {site.brokerage}, working out of our Cranford office and
              helping people buy, sell, and rent homes all across New Jersey.
            </p>
            <p>
              My goal is simple: make the process easier. I&apos;ll answer your questions, help you understand your options, and be there
              for you every step of the way — whether you&apos;re a first-time buyer, looking for your next place, or ready to sell.
            </p>
            <p className="text-ink">
              You bring the goal. I&apos;ll bring the plan, the legwork, and the backing of one of the most recognized names in real estate.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="card flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon name={v.icon} />
                </span>
                <div>
                  <h3 className="font-display text-2xl">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
