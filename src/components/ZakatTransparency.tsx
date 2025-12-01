const ZakatTransparency = () => {
  return (
    <section className="relative">
      {/* Operating expenses section */}
      <div className="bg-[#555556] px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">How do we cover our expenses?</h2>
          <p className="text-base leading-relaxed md:text-lg">
            We fund our day-to-day operations separately, through space rentals, sales of donated clothes, shoes, and
            vehicles, and independent donations. This ensures your Zakat is always used exactly where it’s meant to be.
          </p>
        </div>
      </div>

      {/* Why it matters section */}
      <div className="relative bg-[#E8E5E2] px-4 py-20 text-center text-black">
        <img
          src="/Images/Landing Page/CoA tree.png"
          alt="Children of Adam tree"
          className="pointer-events-none absolute bottom-6 left-6 w-20 md:w-28"
        />

        <div className="mx-auto max-w-4xl space-y-4">
          <h3 className="text-3xl font-semibold md:text-4xl">Why it matters</h3>
          <p className="text-base leading-relaxed text-black/80 md:text-lg">
            When you give Zakat through Children of Adam, you know with certainty that your contribution is making the
            maximum impact, without a single rupee lost to admin costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZakatTransparency;

