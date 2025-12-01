const ZakatModel = () => {
  return (
    <section className="relative bg-[#FCFCFC] px-4 py-24">
      {/* CoA Tree Logo */}
      <img
        src="/Images/Landing Page/CoA tree.png"
        alt="Children of Adam tree"
        className="pointer-events-none absolute bottom-6 left-6 w-20 md:w-28"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-10">
        <div>
          <h2 className="text-4xl font-semibold text-black md:text-5xl">Our 100% Zakat Model</h2>
          <p className="mt-6 text-base leading-relaxed text-black/80 md:text-lg">
            Every rupee of your Zakat goes directly to those who need it most. We don’t use Zakat for salaries,
            office costs, or operations. 100% of it is spent on food, clothing, education, healthcare, and sustainable
            relief projects that change lives.
          </p>
        </div>

        <img
          src="/Images/Landing Page/Donation - cause.png"
          alt="100% donations go towards the cause"
          className="w-full max-w-md"
        />

        <p className="text-sm text-black/70">
          Children of Adam is a US-based Tax Exempt 501(c)(3) non-profit organization (Federal Tax ID # 45-4397298).
        </p>
      </div>
    </section>
  );
};

export default ZakatModel;

