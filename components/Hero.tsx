import Icon from "@/components/Icon";
import Portrait from "@/components/Portrait";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="glow pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(181,82,59,0.22),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(28,25,23,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow hero-in">New Jersey Real Estate · {site.brokerage}</p>
          <h1 className="hero-in mt-6 font-display text-5xl leading-[1.05] tracking-tight [animation-delay:100ms] md:text-7xl">
            Find your next home in New Jersey with someone <em className="text-accent">truly</em> in your corner.
          </h1>
          <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-muted [animation-delay:200ms]">
            Buying, selling, or renting — I&apos;m {site.firstName}, your neighbor and licensed agent out of Cranford. You get straight answers,
            fast replies, and a guide from the first question to the day you get your keys.
          </p>

          <div className="hero-in mt-10 flex flex-col gap-3 [animation-delay:300ms] sm:flex-row">
            <a href="#contact" className="btn-primary">
              Talk to Taniaja <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a href={site.phoneHref} className="btn-ghost">
              <Icon name="phone" className="h-5 w-5" /> {site.phone}
            </a>
          </div>
          <p className="hero-in mt-4 text-sm text-muted [animation-delay:350ms]">
            Free consultation · No pressure · Replies the same day
          </p>

          <ul className="hero-in mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8 [animation-delay:450ms]">
            {[
              ["Buy", "first home or next"],
              ["Sell", "top-dollar strategy"],
              ["Rent", "homes & apartments"],
            ].map(([k, v]) => (
              <li key={k}>
                <p className="font-display text-3xl text-ink">{k}</p>
                <p className="mt-1 text-sm text-muted">{v}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-in relative mx-auto w-full max-w-sm [animation-delay:250ms] lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(28,25,23,0.45)]">
            <Portrait />
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-ink/10 bg-white px-5 py-4 shadow-xl sm:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Icon name="pin" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Serving all of New Jersey</p>
              <p className="text-xs text-muted">Office in Cranford, Union County</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
