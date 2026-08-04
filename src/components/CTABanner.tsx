import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryText: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
  bgImage?: string;
}

export default function CTABanner({
  title,
  subtitle,
  primaryText,
  secondaryText,
  primaryHref = "/#contact",
  secondaryHref = "#portfolio",
  bgImage,
}: CTABannerProps) {
  return (
    <section
      className="relative py-14 bg-primary overflow-hidden"
    >
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-green-900/60" />
        </>
      )}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl text-white mb-3">
            {title}
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryHref}
              className="bg-white text-primary hover:bg-stone-100 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 px-8 py-3.5 rounded-lg font-semibold transition-[background-color,transform,box-shadow] inline-flex items-center justify-center gap-2"
            >
              {primaryText}
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            {secondaryText && (
              <a
                href={secondaryHref}
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 px-8 py-3.5 rounded-lg font-semibold transition-[background-color,transform] text-center"
              >
                {secondaryText}
              </a>
            )}
          </div>
      </div>
    </section>
  );
}
