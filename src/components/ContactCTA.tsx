"use client";
import FadeUp from "@/components/motion/FadeUp";
import { Phone, Mail, MapPin, Calendar, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

const contactInfo = [
  { Icon: Phone, title: "Call Us", main: "(510) 755-5616", sub: "Mon-Fri, 7:30 AM - 5:00 PM" },
  { Icon: Mail, title: "Email", main: "info@visionable\nlandscaping.com", sub: "We reply within 24 hours" },
  { Icon: MapPin, title: "Service Area", main: "Bay Area", sub: "East Bay, South Bay, Peninsula" },
  { Icon: Calendar, title: "Consultations", main: "Available 7 Days", sub: "Evening slots available" },
];

const whyChoose = [
  "Licensed & Insured (CSLB)",
  "15+ Years in the Bay Area",
  "5.0 Stars on Google & Yelp",
  "200+ Projects Completed",
  "100% Satisfaction Guarantee",
  "Free Consultation & 3D Design",
];

const serviceAreas: Record<string, string[]> = {
  "East Bay": ["Fremont", "Union City", "Newark", "Hayward", "San Leandro", "Castro Valley", "Dublin", "Pleasanton", "Livermore", "Danville", "San Ramon", "Walnut Creek", "Concord"],
  "South Bay": ["San Jose", "Milpitas", "Santa Clara", "Sunnyvale", "Cupertino", "Mountain View", "Los Altos", "Saratoga", "Los Gatos", "Campbell", "Morgan Hill", "Gilroy"],
  "Peninsula": ["Palo Alto", "Menlo Park", "Redwood City", "San Mateo", "Foster City", "Belmont", "San Carlos", "Burlingame", "Hillsborough", "Atherton", "Woodside"],
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactCTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("contact-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("contact-email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("contact-phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("contact-address") as HTMLInputElement).value,
      service: (form.elements.namedItem("contact-service") as HTMLSelectElement).value,
      budget: (form.elements.namedItem("contact-budget") as HTMLSelectElement).value,
      details: (form.elements.namedItem("contact-message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Share Your Vision With Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            You dream it, we build it. Tell us your vision and we&apos;ll make it Visionable.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Book Your Free Consultation
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill this out and we&apos;ll reach out within 24 hours to set up your
                complimentary on-site design consultation.
              </p>

              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">We Got Your Vision!</h4>
                  <p className="text-gray-500">We&apos;ll reach out within 24 hours to schedule your free consultation.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 text-primary font-medium hover:underline">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input id="contact-name" name="contact-name" type="text" required placeholder="Your name" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input id="contact-phone" name="contact-phone" type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input id="contact-email" name="contact-email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
                  </div>
                  <div>
                    <label htmlFor="contact-address" className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                    <input id="contact-address" name="contact-address" type="text" placeholder="Street, City, State" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1">What do you need? *</label>
                      <select id="contact-service" name="contact-service" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-500">
                        <option value="">Select a service</option>
                        <option>Complete Backyard Redesign</option>
                        <option>Hardscaping / Pavers</option>
                        <option>Artificial Turf</option>
                        <option>Fencing & Gates</option>
                        <option>Outdoor Lighting</option>
                        <option>Irrigation</option>
                        <option>Landscape Design Only</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                      <select id="contact-budget" name="contact-budget" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-500">
                        <option value="">Optional</option>
                        <option>Under $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about your project</label>
                    <textarea
                      id="contact-message"
                      name="contact-message"
                      rows={4}
                      placeholder="What's your vision? What problems are you trying to solve?"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-white"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-accent hover:bg-accent-dark disabled:opacity-70 text-white py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2 shadow-md"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Share Your Vision
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    No spam. No pressure. We&apos;ll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((c) => (
                <div key={c.title} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <c.Icon className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
                  <h4 className="font-semibold text-gray-900 text-sm">{c.title}</h4>
                  <p className="text-sm text-gray-700 mt-1 break-words whitespace-pre-line">{c.main}</p>
                  <p className="text-xs text-gray-500">{c.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Why Visionable?</h4>
              <ul className="space-y-2.5">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Service Areas</h4>
              {Object.entries(serviceAreas).map(([region, cities]) => (
                <div key={region} className="mb-3 last:mb-0">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">{region}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cities.map((city) => (
                      <span key={city} className="text-xs text-gray-600 bg-white px-2 py-0.5 rounded border border-gray-100">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
