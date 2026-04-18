import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SoftwareShowcase from "@/components/software-showcase";
import VenturesShowcase from "@/components/ventures-showcase";
import Subsidiaries from "@/components/subsidiaries";
import MetaverseTechnology from "@/components/metaverse-technology";
import MetaverseSection from "@/components/metaverse-section";
import WhyAmez from "@/components/why-amez";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <SoftwareShowcase />
      <VenturesShowcase />
      <Subsidiaries />
      <MetaverseTechnology />
      <MetaverseSection />
      <WhyAmez />
      <ContactSection />
      <Footer />
    </main>
  );
}
