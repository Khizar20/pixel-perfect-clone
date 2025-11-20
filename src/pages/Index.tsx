import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import ExploreSection from "@/components/ExploreSection";
import MissionAtWork from "@/components/MissionAtWork";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionVision />
      <ExploreSection />
      <MissionAtWork />
    </div>
  );
};

export default Index;
