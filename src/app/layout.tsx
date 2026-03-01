import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-heading" });

const BASE_URL = "https://visionable-website.vercel.app";

// LocalBusiness + FAQPage structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Visionable Landscaping",
  description:
    "Premium landscape design-build services in the Bay Area. Hardscaping, artificial turf, outdoor lighting, and complete yard transformations.",
  url: BASE_URL,
  telephone: "+1-510-755-5616",
  email: "info@visionablelandscaping.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "581 Emerson St",
    addressLocality: "Fremont",
    addressRegion: "CA",
    postalCode: "94539",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5485,
    longitude: -121.9886,
  },
  areaServed: [
    "Fremont", "Newark", "Milpitas", "Union City", "Hayward",
    "San Ramon", "Dublin", "Pleasanton", "Danville", "Walnut Creek", "Concord",
    
  ].map((city) => ({
    "@type": "City",
    name: `${city}, CA`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "24",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$-$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "17:00",
  },
  image: `${BASE_URL}/og-image.jpg`,
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a landscaping project typically cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope — smaller projects like turf installation start around $5K, while complete backyard transformations range from $20K-$60K+. We give you a detailed, transparent estimate after our free on-site consultation. No hidden fees, ever.",
      },
    },
    {
      "@type": "Question",
      name: "How long will my project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects finish in 2-6 weeks depending on complexity. Artificial turf can be done in days; a full backyard redesign with hardscaping typically takes 3-4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Is the consultation really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% free, no strings attached. We come to your property, discuss your goals, take measurements, and follow up with a detailed proposal and 3D renderings.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We're fully licensed with the California Contractors State License Board and carry comprehensive liability and workers' comp insurance.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve the I-680 corridor and surrounding communities including Fremont, Newark, Milpitas, Union City, Hayward, San Ramon, Dublin, Pleasanton, Danville, Walnut Creek, and Concord.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer warranties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We warranty both materials and workmanship. Specific terms vary by project and are clearly documented in your contract.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see examples of your work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Check our portfolio or visit our Yelp page with 160+ project photos. We're happy to share examples during your free consultation.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Bay Area Landscape Design & Build | Visionable",
  description:
    "Bay Area's top-rated landscape design-build team. 5.0★ rated, 200+ yards transformed. See what your yard could look like — free 3D design consultation.",
  openGraph: {
    title: "Bay Area Landscape Design & Build | Visionable",
    description:
      "Bay Area's top-rated landscape design-build team. 5.0★ rated, 200+ yards transformed. Free 3D design consultation.",
    url: BASE_URL,
    siteName: "Visionable Landscaping",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionable Landscaping | Bay Area Design-Build",
    description:
      "Bay Area's top-rated landscape team. 5.0★ rated, 200+ projects. Free design consultation.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How Visionable Landscaping Transforms Your Yard",
            description: "Our 4-step process from consultation to final walkthrough.",
            step: [
              { "@type": "HowToStep", name: "Discovery Call", text: "We visit your property, listen to your vision, and give you a clear, honest estimate." },
              { "@type": "HowToStep", name: "Design & Plan", text: "Detailed plans with 3D renderings — see exactly what your yard will look like." },
              { "@type": "HowToStep", name: "Build It Right", text: "Our crew brings the design to life — on time, on budget, with daily updates." },
              { "@type": "HowToStep", name: "Walk & Wow", text: "Final walkthrough, care guide, warranty info, and our commitment to stand behind it." },
            ],
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: { "@type": "LocalBusiness", name: "Visionable Landscaping" },
            author: { "@type": "Person", name: "Chang C." },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "We are very satisfied with Visionable Landscaping. From artificial grass to pavers, everything was done very well!",
          }) }}
        />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
