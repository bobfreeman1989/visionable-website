import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <CTABanner
          title="200+ Bay Area Families Had a Vision. We Built It."
          subtitle="No pressure, just a conversation about what your yard could become."
          primaryText="Share Your Vision"
          secondaryText="See Our Process"
          secondaryHref="#process"
          bgImage="/photos/cta-bg.webp"
        />
        <Process />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
