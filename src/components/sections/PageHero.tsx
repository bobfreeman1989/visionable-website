import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export type HeroFact = { label: string; value: string };

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  /** Project photograph behind the scrim. Sub-pages always lead with real work. */
  image: { src: string; alt: string };
  facts?: HeroFact[];
  /** Rendered above the eyebrow, e.g. a breadcrumb trail. */
  above?: React.ReactNode;
  priority?: boolean;
}

/**
 * Photo-backed hero for every sub-page. The homepage hero is its own component;
 * this one is shorter, carries a fact strip instead of a badge row, and drops
 * the scrim to a lighter mix so the project photograph stays legible — these
 * pages are where a visitor has come to look at the work.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  facts,
  above,
  priority = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Two-part scrim. A flat base handles the worst case — bright sky or pale
          pavers directly behind a headline, which a gradient alone leaves at
          about 1:1 — and the left-weighted gradient on top carries the text
          column. The right side keeps the lighter base so the photograph still
          reads as a photograph rather than a colour field. */}
      <div className="absolute inset-0 bg-green-950/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/75 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
        {above}
        <p className="text-accent-light text-sm font-semibold uppercase tracking-[0.18em] mb-4">
          {eyebrow}
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-5 max-w-3xl leading-[1.08]">
          {title}
        </h1>
        <p className="text-green-100 text-lg leading-relaxed max-w-2xl mb-8">{lede}</p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="bg-accent text-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg transition-[transform,box-shadow] hover:shadow-xl hover:-translate-y-0.5"
          >
            Share Your Vision <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
          <a
            href="tel:+15107555616"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            (510) 755-5616
          </a>
        </div>

        {facts && facts.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/15 pt-7 sm:grid-cols-4 max-w-3xl">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-white/60 text-xs uppercase tracking-[0.14em] mb-1.5">
                  {f.label}
                </dt>
                <dd className="text-white text-lg font-medium leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
