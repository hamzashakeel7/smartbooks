import CTA from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSection from "@/components/Trust";
import WhyChoose from "@/components/Why";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <div>
        <Header />
        <Hero />
        <WhyChoose />
        <Services />
        <TrustSection />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
