import {
  featuredServices,
  secondaryServices,
} from "@/content/services";
import { FeaturedServiceCard } from "@/components/services/FeaturedServiceCard";
import { SecondaryServiceCard } from "@/components/services/SecondaryServiceCard";

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

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredServices.map((service) => (
            <FeaturedServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryServices.map((service) => (
            <SecondaryServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
