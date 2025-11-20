import missionVisionPeople from "@/assets/mission-vision-people.jpg";
import treeIcon from "@/assets/tree-icon.png";

const MissionVision = () => {
  return (
    <section className="relative py-20 px-4 bg-muted/30">
      {/* Colorful dots decoration */}
      <div className="absolute top-10 left-1/4 w-8 h-8 rounded-full bg-[hsl(25,85%,60%)] opacity-80" />
      <div className="absolute top-16 left-[30%] w-10 h-10 rounded-full bg-[hsl(280,70%,60%)] opacity-80" />
      <div className="absolute top-8 left-[35%] w-6 h-6 rounded-full bg-[hsl(0,0%,0%)] opacity-80" />
      <div className="absolute top-4 left-[40%] w-12 h-12 rounded-full bg-[hsl(190,70%,65%)] opacity-80" />
      <div className="absolute top-2 left-[45%] w-10 h-10 rounded-full bg-[hsl(0,85%,60%)] opacity-80" />
      <div className="absolute top-12 left-[50%] w-8 h-8 rounded-full bg-[hsl(280,70%,55%)] opacity-80" />
      <div className="absolute top-20 right-[28%] w-10 h-10 rounded-full bg-[hsl(25,85%,55%)] opacity-80" />
      <div className="absolute top-6 right-[23%] w-12 h-12 rounded-full bg-[hsl(280,65%,60%)] opacity-80" />
      <div className="absolute top-16 right-[18%] w-8 h-8 rounded-full bg-[hsl(190,75%,60%)] opacity-80" />
      <div className="absolute top-3 right-[15%] w-10 h-10 rounded-full bg-[hsl(25,80%,60%)] opacity-80" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Our Mission */}
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-foreground/90 text-lg leading-relaxed">
              To enlighten minds, engage hearts and empower hands through Knowledge & Research, Holistic Wellness, and Humanitarian Service driven by Islamic values.
            </p>
          </div>

          {/* Center Image with Tree Icon */}
          <div className="relative flex justify-center">
            <img
              src={treeIcon}
              alt="Tree icon"
              className="absolute -left-4 bottom-8 w-16 h-16 lg:w-20 lg:h-20 z-10"
            />
            <img
              src={missionVisionPeople}
              alt="Two people representing our mission"
              className="w-full max-w-md rounded-lg grayscale"
            />
          </div>

          {/* Our Vision */}
          <div className="text-left lg:text-right">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-foreground/90 text-lg leading-relaxed">
              Imagining a better world where everyone is living spiritually well, physically healthy and socially rich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
