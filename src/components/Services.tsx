import { featuredServices, secondaryServices } from "@/content/services";
import { photos } from "@/content/gallery";
import ServiceShowcase from "@/components/services/ServiceShowcase";

const alts = [...featuredServices, ...secondaryServices].map(
  (s) => photos.find((p) => p.src === s.photo)?.alt ?? ""
);

export default function Services() {
  return (
    <section id="services" className="relative py-14 bg-background noise-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="text-3xl md:text-4xl text-stone-900">
            Every Vision Needs a Plan
          </h2>
          <p className="text-stone-500 max-w-2xl lg:ml-auto lg:text-right">
            You imagine how you want to live outdoors. We figure out how to build it, and make sure it lasts.
          </p>
        </div>
        <ServiceShowcase alts={alts} />
      </div>
    </section>
  );
}
