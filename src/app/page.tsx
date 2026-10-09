import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { TrustRow } from "@/components/TrustRow";
import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Judgment } from "@/components/Judgment";
import { Testimonials } from "@/components/Testimonials";
import { AIWorkflow } from "@/components/AIWorkflow";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsStrip />
        <TrustRow />
        <About />
        <CaseStudies />
        <AIWorkflow />
        <Timeline />
        <Skills />
        <Judgment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
