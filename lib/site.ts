// Real domain once she has one; otherwise the Vercel production URL, then localhost.
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Taniaja Turner",
  firstName: "Taniaja",
  title: "Licensed Real Estate Agent",
  brokerage: "RE/MAX Real Estate Group",
  phone: "917-259-8358",
  phoneHref: "tel:+19172598358",
  smsHref: "sms:+19172598358",
  whatsappHref: "https://wa.me/19172598358",
  email: "taniajaturner@gmail.com",
  office: {
    street: "409 North Ave E",
    city: "Cranford",
    state: "NJ",
    zip: "07016",
  },
  linkedin: "https://www.linkedin.com/in/ACoAAGuSIz4BZ5wDiiYjQumS8NpPBsxoDugETHU",
  url: siteUrl(),
  // Drop her headshot in /public (e.g. /taniaja.jpg) and set the path here.
  photo: "",
};

export const officeLine = `${site.office.street}, ${site.office.city}, ${site.office.state} ${site.office.zip}`;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas" },
  { href: "#listings", label: "Listings" },
  { href: "#faq", label: "FAQ" },
];
