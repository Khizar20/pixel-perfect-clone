const ImpactMap = () => {
  return (
    <section className="relative bg-black px-4 py-24">
      {/* CoA Tree Logo */}
      <img
        src="/Images/Landing Page/CoA tree.png"
        alt="Children of Adam tree"
        className="pointer-events-none absolute bottom-6 left-6 w-20 md:w-28"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center text-white">
        <p className="text-base font-light tracking-wide text-white/90 md:text-lg">
          Where We Empower, Engage and Enlighten.
        </p>

        <div className="relative mt-12 w-full">
          <div className="relative w-full overflow-hidden rounded-3xl bg-black shadow-2xl">
            <img
              src="/Images/Landing Page/map.png"
              alt="Global impact map"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMap;

