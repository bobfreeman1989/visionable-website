import type { Metadata } from "next";
import { Source_Sans_3, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-heading" });

const BASE_URL = "https://visionablelandscaping.com";

// LocalBusiness + FAQPage structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  additionalType: "https://schema.org/HomeAndConstructionBusiness",
  name: "Visionable Landscaping",
  description:
    "Premium landscape design-build services in the Bay Area. Hardscaping, artificial turf, outdoor lighting, pergolas, fencing, irrigation, drainage, and complete yard transformations.",
  keywords: [
    "landscaping Fremont CA",
    "paver installation Fremont CA",
    "artificial turf installation Fremont CA",
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
  sameAs: [
    "https://www.yelp.com/biz/visionable-landscaping-fremont",
    "https://www.facebook.com/p/Visionable-Landscaping-100089900322769",
    "https://www.techo-bloc.com/landscape-contractor/usa/california/fremont/visionable-landscaping",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Bay Area Outdoor Living Design & Build | Visionable",
  description:
    "Transform your backyard into an outdoor living space your family actually uses. Hardscaping, pavers, artificial turf, outdoor lighting & more. 5.0★ rated, 200+ projects. Free 3D design consultation, Visionable Landscaping.",
  openGraph: {
    title: "Bay Area Outdoor Living Design & Build | Visionable",
    description:
      "Transform your backyard into an outdoor living space. Hardscaping, pavers, artificial turf, lighting & landscape design. 5.0★ rated. Free 3D consultation.",
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
      "Bay Area outdoor living design & build. 5.0★ rated, 200+ visions built. Free 3D design consultation.",
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
        {/* Page-specific markup (FAQPage, Service, BreadcrumbList) lives on the
            page that renders the matching content, not in the root layout. */}
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
