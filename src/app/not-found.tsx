import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  // No robots directive here: Next already emits `noindex` for this route, and a
  // second meta robots tag would just be a duplicate.
  title: "Page Not Found | Visionable Landscaping",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-16">
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              404
            </p>
            <h1 className="font-heading text-3xl md:text-5xl text-stone-900 max-w-3xl leading-[1.1]">
              That page has moved or never existed
            </h1>
            <p className="mt-5 text-lg text-stone-600 max-w-2xl leading-relaxed">
              The link you followed is broken, but the work is all still here. Pick a
              service or your city below, or tell us about your yard and we will come
              take a look.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                Get a free consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 text-stone-900 font-semibold hover:border-stone-400 transition-colors"
              >
                Back to home
              </Link>
            </div>

            {/* Every service and city, not a hand-picked subset: a 404 is the one
                page where the visitor's destination is genuinely unknown. */}
            <div className="mt-14 grid md:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="font-heading text-xl text-stone-900 mb-4">
                  What we build
                </h2>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-stone-600 hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-xl text-stone-900 mb-4">
                  Where we work
                </h2>
                <ul className="space-y-2">
                  {areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas/${area.slug}`}
                        className="text-stone-600 hover:text-primary transition-colors"
                      >
                        Landscaping in {area.name}, CA
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-12 text-stone-600">
              Looking for ideas instead?{" "}
              <Link href="/blog" className="text-primary font-semibold hover:underline">
                Read the project journal
              </Link>
              .
            </p>
          </div>
        </section>

        <CTABanner
          title="Still looking for something?"
          subtitle="Tell us what you had in mind for your yard and we will point you at the right page — or just come out and look at it."
          primaryText="Share Your Vision"
          secondaryText="Browse Services"
          secondaryHref="/services"
          bgImage="/photos/cta-bg.webp"
        />
      </main>
      <Footer />
    </>
  );
}
