const MissionVision = () => {
  const missionImage = "/Images/Landing Page/2 boys smiling grey.png";
  const coaTree = "/Images/Landing Page/CoA tree.png";

  return (
    <section className="relative bg-white px-4 py-24">
      {/* CoA tree logo bottom left */}
      <img
        src={coaTree}
        alt="Children of Adam tree"
        className="pointer-events-none absolute bottom-6 left-6 w-20 md:w-28"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16">
        {/* Mission copy */}
        <div className="w-full max-w-md text-left lg:flex-1" data-aos="fade-right">
          <h2 className="text-5xl font-semibold tracking-tight text-black md:text-6xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-relaxed text-black/80">
            To enlighten minds, engage hearts and empower hands through Knowledge &amp; Research, Holistic Wellness,
            and Humanitarian Service driven by Islamic values.
          </p>
        </div>

        {/* Central image */}
        <div className="relative flex w-full justify-center lg:flex-[1.8]" data-aos="zoom-in" data-aos-delay="200">
          {/* Tree image as background layer */}
          <img
            src={coaTree}
            alt="Children of Adam tree background"
            className="absolute inset-0 z-0 w-full max-w-none object-contain opacity-50 lg:w-[150%]"
            style={{ transform: 'translate(-10%, -18%) translateZ(0)' }}
          />
          {/* Boys image as foreground layer */}
          <img
            src={missionImage}
            alt="Two boys smiling"
            className="relative z-10 w-full max-w-none lg:w-[150%]"
          />
        </div>

        {/* Vision copy */}
        <div className="w-full max-w-md text-left lg:flex-1 lg:pt-40" data-aos="fade-left" data-aos-delay="400">
          <h2 className="text-5xl font-semibold tracking-tight text-black md:text-6xl">
            Our Vision
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/80 lg:mt-6">
            Imagining a better world where everyone is living spiritually well, physically healthy and socially&nbsp;rich.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
