"use client";
import { FormEvent, useState } from "react";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import {
  contactBudgetOptions,
  contactServiceOptions,
} from "@/content/contact";
import type { ContactRequest } from "@/lib/contact";
import { ContactSuccessState } from "@/components/contact/ContactSuccessState";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serviceChosen, setServiceChosen] = useState(false);
  const [budgetChosen, setBudgetChosen] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactRequest = {
      name: String(formData.get("contact-name") ?? "").trim(),
      email: String(formData.get("contact-email") ?? "").trim(),
      phone: String(formData.get("contact-phone") ?? "").trim(),
      address: String(formData.get("contact-address") ?? "").trim(),
      service: String(formData.get("contact-service") ?? "").trim(),
      budget: String(formData.get("contact-budget") ?? "").trim(),
      details: String(formData.get("contact-message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send contact request");
      }

      setStatus("success");
      form.reset();
      setServiceChosen(false);
      setBudgetChosen(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-surface rounded-2xl p-8 border border-stone-200">
      <h3 className="text-xl text-stone-900 mb-2">
        Book Your Free Consultation
      </h3>
      <p className="text-sm text-stone-500 mb-6">
        We&apos;ll reach out within 24 hours to schedule your design visit.
      </p>

      {status === "success" ? (
        <ContactSuccessState onReset={() => setStatus("idle")} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" aria-busy={status === "sending"}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700 mb-1">Full Name *</label>
              <input id="contact-name" name="contact-name" type="text" required maxLength={80} placeholder="Your name" className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-stone-700 mb-1">Phone <span className="text-stone-400 font-normal">(optional)</span></label>
              <input id="contact-phone" name="contact-phone" type="tel" maxLength={32} placeholder="(510) 555-1234" className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
            </div>
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
            <input id="contact-email" name="contact-email" type="email" required maxLength={120} placeholder="you@email.com" className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
          </div>
          <div>
            <label htmlFor="contact-address" className="block text-sm font-medium text-stone-700 mb-1">Property Address <span className="text-stone-400 font-normal">(optional)</span></label>
            <input id="contact-address" name="contact-address" type="text" maxLength={160} placeholder="Street, City, State" className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-service" className="block text-sm font-medium text-stone-700 mb-1">What do you need? <span className="text-stone-400 font-normal">(optional)</span></label>
              <select id="contact-service" name="contact-service" defaultValue="" onChange={(e) => setServiceChosen(e.currentTarget.value !== "")} className={`w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${serviceChosen ? "text-stone-900" : "text-stone-500"}`}>
                <option value="">Select a service</option>
                {contactServiceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-budget" className="block text-sm font-medium text-stone-700 mb-1">Budget Range</label>
              <select id="contact-budget" name="contact-budget" defaultValue="" onChange={(e) => setBudgetChosen(e.currentTarget.value !== "")} className={`w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${budgetChosen ? "text-stone-900" : "text-stone-500"}`}>
                <option value="">Optional</option>
                {contactBudgetOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700 mb-1">Tell us about your project</label>
            <textarea
              id="contact-message"
              name="contact-message"
              rows={4}
              maxLength={1200}
              placeholder="What&rsquo;s your vision? What problems are you trying to solve?"
              className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-accent disabled:opacity-70 disabled:cursor-not-allowed text-foreground py-4 rounded-lg font-semibold text-lg transition-[transform,box-shadow] inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending&hellip;
              </>
            ) : (
              <>
                Share Your Vision
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </>
            )}
          </button>

          {status === "error" && (
            <div role="alert" aria-live="polite" className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              Something went wrong. Please try again or call us directly.
            </div>
          )}
          <p className="text-xs text-stone-500 text-center">
            No spam. No pressure. We&apos;ll respond within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
}
