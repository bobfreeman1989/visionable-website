import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/sections/PageHero";
import ContactCTA from "@/components/ContactCTA";
import Accordion from "@/components/sections/Accordion";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { heroForService } from "@/content/gallery";

const BASE_URL = "https://visionablelandscaping.com";

export const metadata: Metadata = {
  title: "Contact Visionable Landscaping | Fremont, CA | (510) 755-5616",
  description:
    "Book a free landscaping consultation in Fremont and across the Bay Area. Call (510) 755-5616, email info@visionablelandscaping.com, or send us your project details. We reply within 24 hours.",
  openGraph: {
    title: "Contact Visionable Landscaping | Fremont, CA",
    description:
      "Free consultation with 3D renderings. Call (510) 755-5616 or send your project details — we reply within 24 hours.",
    url: `${BASE_URL}/contact`,
    images: [{ url: heroForService("landscape-design").src }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Visionable Landscaping | Fremont, CA",
    description:
      "Free consultation with 3D renderings. Call (510) 755-5616 — we reply within 24 hours.",
    images: [heroForService("landscape-design").src],
  },
  alternates: { canonical: "/contact" },
};

/**
 * ContactPage rather than a second LocalBusiness. The business entity is
 * declared once in the root layout under `#business`; this page points at it so
 * the two do not compete as separate organisations in the knowledge graph.
 */
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#page`,
  url: `${BASE_URL}/contact`,
  name: "Contact Visionable Landscaping",
  description:
    "Contact details, service area, and consultation booking for Visionable Landscaping in Fremont, CA.",
  mainEntity: { "@id": `${BASE_URL}/#business` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
  ],
};

const contactFaqs = [
  {
    q: "How quickly will you get back to me?",
    a: "Within 24 hours on business days. If you call (510) 755-5616 between 7:30 AM and 5:00 PM Monday to Friday, you will usually reach us directly.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. We visit the property, take measurements, talk through how you want to use the space, and follow up with a proposal and 3D renderings. You only pay if you decide to build.",
  },
  {
    q: "What should I have ready before the consultation?",
    a: "Nothing formal. Photos of the space and a rough sense of your budget range help, but most clients start with just a vague idea of wanting to use their yard more. Figuring out the rest is what the consultation is for.",
  },
  {
    q: "Do you charge for travel outside Fremont?",
    a: "No. Consultations anywhere in our service area — the I-680 corridor, Tri-City, Tri-Valley, East Bay and South Bay — are free.",
  },
];

const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const DETAILS = [
  {
    Icon: Phone,
    label: "Phone",
    value: "(510) 755-5616",
    href: "tel:+15107555616",
    sub: "Mon–Fri, 7:30 AM – 5:00 PM",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@visionablelandscaping.com",
    href: "mailto:info@visionablelandscaping.com",
    sub: "We reply within 24 hours",
  },
  {
    Icon: MapPin,
    label: "Office",
    value: "581 Emerson St, Fremont, CA 94539",
    href: "https://www.google.com/maps/search/?api=1&query=581+Emerson+St+Fremont+CA+94539",
    sub: "Alameda County",
  },
  {
    Icon: Clock,
    label: "Consultations",
    value: "Available 7 days",
    sub: "Evening slots available",
  },
];

export default function ContactPage() {
  const heroPhoto = heroForService("landscape-design");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
      />
      <Nav />
      <main id="main-content" className="pt-16">
        <PageHero
          eyebrow="Fremont, CA · serving the I-680 corridor"
          title="Contact Visionable Landscaping"
          lede="Tell us about the yard. We visit, measure, and follow up with 3D renderings before anything is built — at no cost, whether or not you go ahead."
          image={{ src: heroPhoto.src, alt: heroPhoto.alt }}
          ctaHref="#contact"
          above={
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-green-100/80 mb-5"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="text-white font-medium">Contact</span>
            </nav>
          }
          facts={[
            { label: "Phone", value: "(510) 755-5616" },
            { label: "Response time", value: "Within 24 hours" },
            { label: "Consultation", value: "Free, with 3D renderings" },
            { label: "Licensed", value: "CSLB #1101860" },
          ]}
        />

        {/* Contact details */}
        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">How to reach us</h2>
            <p className="text-stone-600 max-w-2xl mb-9">
              One in-house team, based in Fremont. The fastest route is the phone during business
              hours; everything else we answer the same or next day.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DETAILS.map(({ Icon, label, value, href, sub }) => {
                const body = (
                  <>
                    <Icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                    <p className="text-xs uppercase tracking-[0.14em] text-stone-500 mb-1.5">
                      {label}
                    </p>
                    <p className="text-stone-900 font-medium leading-snug break-words">{value}</p>
                    <p className="text-sm text-stone-500 mt-1">{sub}</p>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="rounded-2xl border border-stone-200 bg-white p-6 transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30"
                  >
                    {body}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="rounded-2xl border border-stone-200 bg-white p-6"
                  >
                    {body}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The form itself — same component the rest of the site uses */}
        <ContactCTA
          title="Book your free consultation"
          subtitle="Tell us what you're imagining. We'll show you what's possible — on your property, in 3D, before anything gets built."
        />

        {/* Service area — real internal links, not a paragraph of city names */}
        <section className="py-14 md:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">Where we work</h2>
            <p className="text-stone-600 max-w-2xl mb-8">
              Based at 581 Emerson St in Fremont, building across the Tri-City Area, Tri-Valley,
              East Bay, South Bay, and the I-680 corridor. Not listed? Call anyway — we cover more
              of the greater Bay Area than we have pages for.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  Landscaping in {area.name}
                </Link>
              ))}
            </div>

            <h3 className="text-xl text-stone-900 mb-4">What we can quote</h3>
            <div className="flex flex-wrap gap-2.5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-700 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl text-stone-900 mb-3">
              Before you get in touch
            </h2>
            <p className="text-stone-600 max-w-2xl mb-9">
              The things people usually want to know first.
            </p>
            <Accordion items={contactFaqs.map((f) => ({ q: f.q, a: f.a }))} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
