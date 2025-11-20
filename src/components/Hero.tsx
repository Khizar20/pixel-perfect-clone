import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building a World<br />
            Where Everyone Is<br />
            <span className="block mt-2">
              Spiritually Well, Physically<br />
              Healthy, Socially Rich.
            </span>
          </h2>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
