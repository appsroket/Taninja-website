import { navLinks, officeLine, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl">
            Taniaja <span className="text-accent">Turner</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            {site.title} · {site.brokerage}
            <br />
            {officeLine}
          </p>
          <p className="mt-2 text-sm">
            <a href={site.phoneHref} className="hover:text-accent">{site.phone}</a> ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex flex-wrap gap-6 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink">{l.label}</a>
              </li>
            ))}
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
            </li>
          </ul>
          <p className="max-w-md text-xs leading-relaxed text-muted md:text-right">
            Each RE/MAX office is independently owned and operated. Equal Housing Opportunity. Information deemed reliable but not
            guaranteed. © {new Date().getFullYear()} {site.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
