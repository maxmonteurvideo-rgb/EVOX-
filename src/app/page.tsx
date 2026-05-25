import Advantages from "@/components/Advantages";
import CTAFinal from "@/components/CTAFinal";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Showreel from "@/components/Showreel";
import Testimonials from "@/components/Testimonials";
import TrustBanner from "@/components/TrustBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <Showreel />
      <Advantages />
      <Method />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
}
