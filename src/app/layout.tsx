import type { Metadata } from "next";
import { Source_Sans_3, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-heading" });

const BASE_URL = "https://visionablelandscaping.com";

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
      name: "How much does an outdoor living project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on the vision — a patio and turf setup starts around $5K, while a complete outdoor living space with cooking area, lighting, and seating runs $20K-$60K+. We give you a detailed, transparent estimate after seeing your space. No hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "How long until I can actually use my new yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects finish in 2-6 weeks. Turf installs can be done in days; a full outdoor transformation typically takes 3-4 weeks. We lock in a timeline upfront and send daily updates.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't have a clear vision yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients don't — they just know they want to use their backyard more. That's exactly what the design consultation is for. We help you figure out what you want through 3D renderings you can explore and adjust.",
      },
    },
    {
      "@type": "Question",
      name: "Is the consultation really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% free. We visit your property, talk about how you want to live outdoors, take measurements, and follow up with a proposal and 3D renderings. You only pay if you decide to build.",
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
        text: "Yes. Materials and workmanship, clearly documented in your contract. We stand behind every vision we build.",
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
  title: "Bay Area Outdoor Living Design & Build | Visionable",
  description:
    "Transform your backyard into an outdoor living space your family actually uses. Hardscaping, pavers, artificial turf, outdoor lighting & more. 5.0★ rated, 200+ projects. Free 3D design consultation — Visionable Landscaping.",
  openGraph: {
    title: "Bay Area Outdoor Living Design & Build | Visionable",
    description:
      "Transform your backyard into an outdoor living space. Hardscaping, pavers, artificial turf, lighting & landscape design. 5.0★ rated. Free 3D consultation.",
    url: BASE_URL,
    siteName: "Visionable Landscaping",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionable Landscaping | Bay Area Outdoor Living",
    description:
      "Bay Area outdoor living design & build. 5.0★ rated, 200+ visions built. Free 3D design consultation.",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <script
          dangerouslySetInnerHTML={{ __html: `
            window.addEventListener('load', function() {
              var s = document.createElement('script');
              s.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q3XCGS8C4X';
              s.async = true;
              document.head.appendChild(s);
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q3XCGS8C4X');
            });
          `}}
        />
        <link rel="preload" href="/hero-mobile.webp" as="image" type="image/webp" media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" href="/hero.webp" as="image" type="image/webp" media="(min-width: 769px)" fetchPriority="high" />
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
      <body className={`${sourceSans.variable} ${dmSerif.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
