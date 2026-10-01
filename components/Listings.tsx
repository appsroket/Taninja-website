import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { listings } from "@/lib/listings";

export default function Listings() {
  return (
    <section id="listings" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured listings</p>
            <h2 className="section-title mt-4">Homes I&apos;m showing right now.</h2>
          </div>
          <a href="#contact" className="btn-ghost self-start md:self-auto">
            Get listings before they go public
          </a>
        </Reveal>

        {listings.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((l, i) => (
              <Reveal key={l.address} delay={i * 100}>
                <a href={l.link ?? "#contact"} className="card group block h-full overflow-hidden !p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.image} alt={l.address} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">{l.status}</span>
                  </div>
                  <div className="p-6">
                    <p className="font-display text-3xl">{l.price}</p>
                    <p className="mt-1 font-medium">{l.address}</p>
                    <p className="text-sm text-muted">{l.town}, NJ</p>
                    <p className="mt-4 text-sm text-muted">
                      {l.beds} bd · {l.baths} ba{l.sqft ? ` · ${l.sqft.toLocaleString()} sqft` : ""}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white/70 md:grid-cols-2">
              <div className="relative min-h-64 bg-[linear-gradient(135deg,#efe3d4,#d9b49a)]">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(28,25,23,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/80 text-accent shadow-lg">
                    <Icon name="home" className="h-10 w-10" />
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="font-display text-3xl leading-tight">New listings are on the way — be the first to see them.</h3>
                <p className="mt-4 leading-relaxed text-muted">
                  Tell me what you&apos;re looking for and I&apos;ll send you matching homes and rentals from across New Jersey, including new
                  listings the moment they hit the market.
                </p>
                <a href="#contact" className="btn-primary mt-8">
                  Send me matching homes <Icon name="arrow" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
