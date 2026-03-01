import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
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
        <CTABanner
          title="200+ Bay Area Families Had a Vision. We Built It."
          subtitle="Free on-site consultation. No pressure. Just a plan you'll love."
          primaryText="Share Your Vision"
          secondaryText="See Our Process"
          secondaryHref="#process"
          bgImage="/cta-bg.jpg"
        />
        <Stats />
        <Process />
        <CTABanner
          title="Your Dream Yard Is One Conversation Away."
          subtitle="Got a vision? Let's make it Visionable. Free consultation, zero pressure."
          primaryText="Share Your Vision"
        />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
