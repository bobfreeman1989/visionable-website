import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { name: "Paver Installation", slug: "paver-installation" },
  { name: "Artificial Turf", slug: "artificial-turf" },
  { name: "Pergola Installation", slug: "pergola-installation" },
  { name: "Fence & Gate Installation", slug: "fence-and-gate" },
  { name: "Irrigation & Drainage", slug: "irrigation-drainage" },
  { name: "Landscape Design", slug: "landscape-design" },
  { name: "Hardscaping", slug: "hardscaping" },
  { name: "Outdoor Lighting", slug: "outdoor-lighting" },
  { name: "Retaining Walls", slug: "retaining-walls" },
  { name: "Complete Backyard Remodel", slug: "complete-backyard-remodel" },
];

const companyLinks = [
  { label: "Our Process", href: "/#process" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const areaLinks = [
  { name: "Fremont", slug: "fremont" },
  { name: "Newark", slug: "newark" },
  { name: "Milpitas", slug: "milpitas" },
  { name: "Union City", slug: "union-city" },
  { name: "Hayward", slug: "hayward" },
  { name: "San Ramon", slug: "san-ramon" },
  { name: "Dublin", slug: "dublin" },
  { name: "Pleasanton", slug: "pleasanton" },
  { name: "Danville", slug: "danville" },
  { name: "Walnut Creek", slug: "walnut-creek" },
  { name: "Concord", slug: "concord" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Brand masthead */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-10 border-b border-stone-800">
          <div className="max-w-md">
            <img src="/logo-white.png" alt="Visionable Landscaping" className="h-9 w-auto mb-4" loading="lazy" />
            <p className="text-sm leading-relaxed">
              Shaping visions into extraordinary landscapes along the I-680 corridor.
              Premium design-build services for homeowners who demand excellence.
            </p>
          </div>
          <div className="space-y-2 text-sm shrink-0">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <a href="tel:510-755-5616" className="hover:text-white transition-colors">(510) 755-5616</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <a href="mailto:info@visionablelandscaping.com" className="hover:text-white transition-colors">
                info@visionablelandscaping.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span>581 Emerson St, Fremont, CA 94539</span>
            </div>
            <a
              href="/#contact"
              className="mt-3 inline-block bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Services / Areas link matrix */}
        <div className="grid sm:grid-cols-2 gap-10 py-10">
          <div>
            <h4 className="text-white font-semibold mb-4">
              <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">
              <Link href="/areas" className="hover:text-white/80 transition-colors">Areas We Serve</Link>
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {areaLinks.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="hover:text-white transition-colors">{a.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dense colophon */}
        <div className="border-t border-stone-800 pt-8 space-y-4 text-sm">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {companyLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
            <a href="https://www.yelp.com/biz/visionable-landscaping-fremont" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Yelp Reviews
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Visionable Landscaping. All rights reserved. | CSLB #1101860 Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
