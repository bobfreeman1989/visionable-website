import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  /** Passed through to preselect the service dropdown on service pages. */
  defaultService?: string;
  detailsPlaceholder?: string;
}

export default function ContactCTA({
  title = "What's Your Vision?",
  subtitle = "Tell us what you're imagining. We'll show you what's possible.",
  defaultService,
  detailsPlaceholder,
}: ContactCTAProps = {}) {
  return (
    <section id="contact" className="py-14 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            {title}
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm
              defaultService={defaultService}
              detailsPlaceholder={detailsPlaceholder}
            />
          </div>

          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}
