import About from "@/components/About";
import AreaStrip from "@/components/AreaStrip";
import Areas from "@/components/Areas";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Promise from "@/components/Promise";
import Services from "@/components/Services";
import { officeLine, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  telephone: site.phone,
  email: site.email,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.office.street,
    addressLocality: site.office.city,
    addressRegion: site.office.state,
    postalCode: site.office.zip,
    addressCountry: "US",
  },
  areaServed: "New Jersey",
  parentOrganization: { "@type": "Organization", name: site.brokerage },
  description: `Licensed real estate agent with ${site.brokerage} at ${officeLine}.`,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <AreaStrip />
        <About />
        <Services />
        <Process />
        <Areas />
        <Listings />
        <Promise />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
