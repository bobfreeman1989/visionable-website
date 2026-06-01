import FadeUp from "@/components/motion/FadeUp";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            What&apos;s Your Vision?
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Tell us what you&apos;re imagining. We&apos;ll show you what&apos;s possible.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}
