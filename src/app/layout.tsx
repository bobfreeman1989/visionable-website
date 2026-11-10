import type { Metadata } from "next";
import { Source_Sans_3, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import FirstTouch from "@/components/FirstTouch";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-heading" });

const BASE_URL = "https://visionablelandscaping.com";

// The one business entity on the site. City, service and blog schema point at
// it by @id instead of describing the business again, so Google sees a single
// company rather than a dozen near-duplicates.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": `${BASE_URL}/#business`,
  name: "Visionable Landscaping",
  description:
    "Premium landscape design-build services across the Bay Area. Hardscaping, artificial turf, outdoor lighting, pergolas, fencing, irrigation, drainage, and complete yard transformations.",
  keywords: [
    "landscaping San Jose CA",
    "landscaping Saratoga CA",
    "landscaping Los Gatos CA",
    "landscaping Cupertino CA",
    "landscaping Palo Alto CA",
    "landscaping Los Altos CA",
    "paver installation Bay Area",
    "artificial turf installation Bay Area",
    "pergola installation Bay Area",
    "fence and gate installation Bay Area",
    "irrigation and drainage Bay Area",
    "outdoor living design build Bay Area",
  ],
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
  areaServed: areas.map((city) => ({
    "@type": "City",
    name: `${city.name}, CA`,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Visionable Landscaping Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.shortDesc,
        url: `${BASE_URL}/services/${service.slug}`,
      },
    })),
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "California C-27 Landscaping Contractor License #1101860",
      credentialCategory: "license",
      recognizedBy: {
        "@type": "Organization",
        name: "Contractors State License Board",
        url: "https://www.cslb.ca.gov",
      },
      url: "https://www.cslb.ca.gov/1101860",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Techo-Pro Certified Contractor",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "Techo-Bloc", url: "https://www.techo-bloc.com" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "NDS Certified Professional Drainage Contractor",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "NDS", url: "https://www.ndspro.com" },
    },
  ],
  // No aggregateRating/Review markup here: Google disallows self-serving review
  // snippets for a LocalBusiness describing itself. Ratings stay as page copy,
  // sourced from the Google and Yelp profiles linked in sameAs.
  priceRange: "$$-$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "17:00",
  },
  image: `${BASE_URL}/og-image.jpg`,
  // Blog posts name this entity as publisher, and Article markup expects a logo.
  logo: `${BASE_URL}/logo.png`,
  sameAs: [
    "https://www.yelp.com/biz/visionable-landscaping-fremont",
    "https://www.facebook.com/p/Visionable-Landscaping-100089900322769",
    "https://www.instagram.com/visionablelandscaping/",
    "https://www.techo-bloc.com/landscape-contractor/usa/california/fremont/visionable-landscaping",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Visionable Landscaping",
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#business` },
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Bay Area Outdoor Living Design & Build | Visionable",
  description:
    "Transform your backyard into an outdoor living space your family uses. Pavers, turf, lighting & more. 5.0★ rated, 100+ projects. Free design consultation.",
  openGraph: {
    title: "Bay Area Outdoor Living Design & Build | Visionable",
    description:
      "Transform your backyard into an outdoor living space. Hardscaping, pavers, artificial turf, lighting & landscape design. 5.0★ rated. Free design consultation.",
    url: BASE_URL,
    siteName: "Visionable Landscaping",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visionable Landscaping Bay Area backyard design and build",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionable Landscaping | Bay Area Outdoor Living",
    description:
      "Bay Area outdoor living design & build. 5.0★ rated, 100+ projects. Free design consultation.",
    images: ["/og-image.jpg"],
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
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){dataLayer.push(arguments);};
            gtag('js', new Date());
            gtag('config', 'G-Q3XCGS8C4X');
            window.addEventListener('load', function() {
              var s = document.createElement('script');
              s.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q3XCGS8C4X';
              s.async = true;
              document.head.appendChild(s);
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Page-specific markup (FAQPage, Service, BreadcrumbList) lives on the
            page that renders the matching content, not in the root layout. */}
      </head>
      <body className={`${sourceSans.variable} ${dmSerif.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
        <FirstTouch />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
