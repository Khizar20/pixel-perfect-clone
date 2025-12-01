import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/TypewriterText";
import { useEffect, useState } from "react";

const Hero = () => {
  const heroImage = "/Images/Landing%20Page/Girl%20in%20the%20corner.png";
  const [showLine2, setShowLine2] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Accelerated reveal timings to match faster typewriter speed
    const line2Timer = setTimeout(() => setShowLine2(true), 500);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1400);
    const descTimer = setTimeout(() => setShowDescription(true), 2500);
    const buttonTimer = setTimeout(() => setShowButton(true), 3300);

    return () => {
      clearTimeout(line2Timer);
      clearTimeout(subtitleTimer);
      clearTimeout(descTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-40">
        <div className="max-w-3xl space-y-10 text-white">
          <h2 className="text-4xl font-bold leading-tight tracking-tight drop-shadow md:text-6xl lg:text-7xl">
            <div className="flex flex-col gap-2 leading-tight">
              <TypewriterText
                text="Building a World"
                speed={25}
                className="block"
              />
              {showLine2 && (
                <TypewriterText
                  text="Where Everyone Is"
                  speed={25}
                  className="block"
                />
              )}
            </div>
            {showSubtitle && (
              <div className="mt-4 flex flex-col gap-1 text-3xl font-semibold leading-tight md:text-4xl">
                <TypewriterText
                  text="Spiritually Well, Physically"
                  speed={30}
                />
                <TypewriterText
                  text="Healthy, Socially Rich."
                  speed={30}
                />
              </div>
            )}
          </h2>
          {showDescription && (
            <p className="text-lg text-white/85 md:text-xl animate-fade-in faster-fade">
              Enlighten. Engage. Empower. Together we uplift communities with compassion, health, and opportunity.
            </p>
          )}
          {showButton && (
            <Button
              size="lg"
              className="w-fit rounded-xl bg-sky-200 px-10 py-6 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-sky-100 hover:text-slate-900 animate-fade-in faster-fade"
              onClick={() => {
                window.location.href = "/our-work";
              }}
            >
              Learn more
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
