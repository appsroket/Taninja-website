import { site } from "@/lib/site";

export default function Portrait({ className = "" }: { className?: string }) {
  if (site.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={site.photo} alt={`${site.name}, ${site.title}`} className={`h-full w-full object-cover ${className}`} />
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-[#e9d6c4] via-[#d9b49a] to-[#b5523b] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
      <span className="absolute inset-0 flex items-center justify-center font-display text-[9rem] leading-none text-white/85">TT</span>
    </div>
  );
}
