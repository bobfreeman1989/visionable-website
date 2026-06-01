import FadeUp from "@/components/motion/FadeUp";
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
        <FadeUp className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            Every Vision Needs a Plan
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            You imagine how you want to live outdoors. We figure out how to build it, and make sure it lasts.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredServices.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.1}>
              <FeaturedServiceCard service={service} />
            </FadeUp>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryServices.map((service, index) => (
            <FadeUp key={service.title} delay={0.2 + index * 0.05}>
              <SecondaryServiceCard service={service} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
