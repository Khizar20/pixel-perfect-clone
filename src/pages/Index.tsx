import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import ExploreSection from "@/components/ExploreSection";
import MissionAtWork from "@/components/MissionAtWork";
import ZakatModel from "@/components/ZakatModel";
import ZakatCertificate from "@/components/ZakatCertificate";
import ZakatTransparency from "@/components/ZakatTransparency";
import ImpactStats from "@/components/ImpactStats";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionVision />
      <ExploreSection />
      <MissionAtWork />
      <ZakatModel />
      <ZakatCertificate />
      <ZakatTransparency />
      <ImpactStats />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
