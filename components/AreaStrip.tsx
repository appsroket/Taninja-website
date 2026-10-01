const towns = [
  "Cranford", "Westfield", "Elizabeth", "Union", "Linden", "Rahway", "Plainfield", "Summit", "Kenilworth",
  "Garwood", "Clark", "Scotch Plains", "Newark", "Jersey City", "Edison", "Woodbridge", "New Brunswick", "Montclair",
];

export default function AreaStrip() {
  return (
    <div className="border-y border-ink/10 bg-sand/60 py-5" aria-label="Towns served">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee flex shrink-0 gap-10 pr-10">
          {[...towns, ...towns].map((t, i) => (
            <li key={i} aria-hidden={i >= towns.length} className="whitespace-nowrap font-display text-xl text-ink/50">
              {t} <span className="ml-10 text-accent/60">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
