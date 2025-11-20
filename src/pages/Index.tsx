import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import ExploreSection from "@/components/ExploreSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MissionVision />
      <ExploreSection />
    </div>
  );
};

export default Index;
