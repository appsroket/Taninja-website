# Taniaja Turner — Real Estate Portfolio Site

Personal brand site for **Taniaja Turner**, licensed real estate agent with RE/MAX Real Estate Group (Cranford, NJ).
Built with Next.js 14 (App Router) + Tailwind CSS, ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Where to edit content

| What | File |
| --- | --- |
| Name, phone, email, office, brokerage, headshot path | `lib/site.ts` |
| Listings (empty state shows a "get new listings first" capture block) | `lib/listings.ts` |
| Bio | `components/About.tsx` |
| Service areas | `components/Areas.tsx`, `components/AreaStrip.tsx` |
| FAQ | `components/Faq.tsx` |

**Headshot:** add the photo to `public/` (e.g. `public/taniaja.jpg`) and set `photo: "/taniaja.jpg"` in `lib/site.ts`.
Until then, a branded "TT" monogram is shown.

## Lead capture

The contact form posts to `app/api/lead/route.ts`, which forwards the lead as JSON to `WEBHOOK_URL`
(GoHighLevel inbound webhook, Make, Zapier…). Copy `.env.example` to `.env.local` and set it in Vercel → Settings → Environment Variables.

## Before launch — confirm with Taniaja / her broker

- NJ advertising rules: brokerage name must appear (it does). Confirm whether the broker also wants the office phone number and/or her license number shown.
- Domain (placeholder `taniajaturner.com` in `lib/site.ts`).
- Professional headshot, and any listings she wants featured.
