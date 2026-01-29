const ZakatModel = () => {
  return (
    <section className="relative bg-[#FCFCFC] px-4 py-24">

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-10">
        <div>
          <h2 className="text-4xl font-semibold text-black md:text-5xl">
            Our <span style={{ color: '#8BC33C' }}>100%</span> Zakat Model
          </h2>
          <div className="mt-6 px-6 py-4 rounded-lg" style={{ backgroundColor: '#B8DA89' }}>
            <p className="text-base leading-relaxed text-black md:text-lg">
              We don't use Zakat for salaries,
              office costs, or operations. 100% of it is spent on food, clothing, education, healthcare, and sustainable
              relief projects that change lives.
            </p>
          </div>
        </div>

        <img
          src="/Images/Landing Page/Donation - cause.png"
          alt="100% donations go towards the cause"
          className="w-full max-w-md"
        />

      </div>
    </section>
  );
};

export default ZakatModel;

