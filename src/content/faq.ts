export type FaqItem = {
  q: string;
  a: string;
};

// Single source of truth for the homepage FAQ: the accordion renders these and
// the FAQPage schema is generated from them, so the markup can never drift from
// what a visitor actually sees on the page.
export const homepageFaqs: FaqItem[] = [
  {
    q: "How much does an outdoor living project cost?",
    a: "Depends on the vision, a patio and turf setup starts around $5K, while a complete outdoor living space with cooking area, lighting, and seating runs $20K-$60K+. We give you a detailed, transparent estimate after seeing your space. No hidden fees.",
  },
  {
    q: "How long until I can actually use my new yard?",
    a: "Most projects finish in 2-6 weeks. Turf installs can be done in days; a full outdoor transformation typically takes 3-4 weeks. We lock in a timeline upfront and send daily updates.",
  },
  {
    q: "What if I don't have a clear vision yet?",
    a: "Most clients don't, they just know they want to use their backyard more. That's exactly what the design consultation is for. We help you figure out what you want through 3D renderings you can explore and adjust. The vision gets clearer together.",
  },
  {
    q: "Is the consultation really free?",
    a: "100% free. We visit your property, talk about how you want to live outdoors, take measurements, and follow up with a proposal and 3D renderings. You only pay if you decide to build.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Fully licensed with the California Contractors State License Board, with comprehensive liability and workers' comp insurance.",
  },
  {
    q: "What areas do you serve?",
    a: "The I-680 corridor, Fremont, Newark, Milpitas, Union City, Hayward, San Ramon, Dublin, Pleasanton, Danville, Walnut Creek, Concord, and surrounding communities.",
  },
  {
    q: "Do you offer warranties?",
    a: "Yes. Materials and workmanship, clearly documented in your contract. We stand behind every vision we build.",
  },
  {
    q: "Can I see examples of your work?",
    a: "Yes! Check our portfolio or visit our Yelp page with 200+ project photos. We're happy to share examples during your free consultation.",
  },
];

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};
