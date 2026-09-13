import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionBand from "@/components/MissionBand";
import ValueProps from "@/components/ValueProps";
import CloudPartners from "@/components/CloudPartners";
import Services from "@/components/Services";
import FlagshipSpotlight from "@/components/FlagshipSpotlight";
import WhyQuantumedge from "@/components/WhyQuantumedge";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MissionBand />
        <CloudPartners />
        <ValueProps />
        <Services />
        <FlagshipSpotlight />
        <WhyQuantumedge />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
