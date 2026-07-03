"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-100 shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Visionable Landscaping" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="/" className="relative text-sm font-medium text-stone-600 hover:text-primary transition-colors">
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button aria-haspopup="true" className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-primary transition-colors">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-background border border-stone-200 rounded-xl shadow-lg py-2">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2 text-sm text-stone-600 hover:text-primary hover:bg-surface transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div className="relative group" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button aria-haspopup="true" className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-primary transition-colors">
                Areas <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-background border border-stone-200 rounded-xl shadow-lg py-2">
                    {areaLinks.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/areas/${a.slug}`}
                        className="block px-4 py-2 text-sm text-stone-600 hover:text-primary hover:bg-stone-50 transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {links.slice(1).map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className="relative text-sm font-medium text-stone-600 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:510-755-5616"
              className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (510) 755-5616
            </a>
            <a
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="tel:510-755-5616" className="p-2 text-primary" aria-label="Call us">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="block text-sm font-medium text-stone-600 hover:text-primary py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="py-2">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Services</p>
            {serviceLinks.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block text-sm text-stone-600 hover:text-primary py-1.5 pl-2"
                onClick={() => setOpen(false)}
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="py-2">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Areas We Serve</p>
            {areaLinks.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="block text-sm text-stone-600 hover:text-primary py-1.5 pl-2"
                onClick={() => setOpen(false)}
              >
                {a.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-100 space-y-3">
            <a href="tel:510-755-5616" className="block text-sm font-medium text-stone-700">
              (510) 755-5616
            </a>
            <a
              href="/#contact"
              className="block bg-primary text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
