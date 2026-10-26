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
    a: "Cost depends on scope, materials, site access and site conditions. We talk through your budget at the free design consultation, design to that number, and confirm a fixed construction price after the design phase.",
  },
  {
    q: "How long until I can actually use my new yard?",
    a: "Most projects finish in 2–6 weeks. Turf installs can be done in days; a full outdoor transformation typically takes 3–4 weeks. We set a timeline upfront and send daily updates.",
  },
  {
    q: "What if I don't have a clear vision yet?",
    a: "Most clients don't — they just know they want to use their backyard more. That's what the free design consultation is for. We help you figure out what you want, and in the paid design phase 3D renderings let you explore and adjust it before anything is built.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes. The site visit is free: we visit your property, talk about how you want to live outdoors, and take measurements. 3D renderings are part of the paid design phase, so you see the yard before anything is built.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Fully licensed with the California Contractors State License Board, and insured, with workers' comp coverage.",
  },
  {
    q: "What areas do you serve?",
    a: "The Bay Area: San Jose, Santa Clara, Sunnyvale, Cupertino, Mountain View, Los Altos, Palo Alto, Saratoga, Los Gatos, San Carlos, San Mateo, Atherton, and our home base of Fremont.",
  },
  {
    q: "Do you offer warranties?",
    a: "Yes. Every project comes with a written workmanship warranty, documented in your contract.",
  },
  {
    q: "Can I see examples of your work?",
    a: "Yes. Check our portfolio or our Yelp page for project photos. We're happy to share examples during your free design consultation.",
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
