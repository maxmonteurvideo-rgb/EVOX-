import CaseStudies from "@/components/CaseStudies";
import CTAFinal from "@/components/CTAFinal";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import OfferBlock from "@/components/OfferBlock";
import Showreel from "@/components/Showreel";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferBlock />
      <Showreel />
      <CaseStudies />
      <Method />
      {/* Bandeau logos retiré : à réactiver avec 3-4 grosses marques (ligne fixe, pas de carrousel) */}
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
}
