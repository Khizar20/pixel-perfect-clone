const CallToAction = () => {
  return (
    <section className="relative bg-[#f7f5f3] px-4 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-black md:text-5xl">
          How Will You Be Part of the Impact?
        </h2>

        {/* Paragraph */}
        <p className="max-w-2xl text-base leading-relaxed text-black/80 md:text-lg">
          Together, we can reach more communities, touch more lives, and build a hopeful future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button className="rounded-lg border border-black px-8 py-3 text-base font-medium text-[#8c52ff] transition hover:bg-black/5">
            Become a Volunteer
          </button>
          <button
            className="rounded-lg border border-black px-8 py-3 text-base font-medium text-[#8c52ff] transition hover:bg-black/5"
            onClick={() => {
              window.location.href = "/donate";
            }}
          >
            Donate Today
          </button>
        </div>
      </div>

      {/* CoA tree logo - bottom center */}
      <div className="mt-16 flex justify-center">
        <img
          src="/Images/Landing Page/CoA tree.png"
          alt="Children of Adam tree"
          className="w-64 md:w-80 lg:w-96"
        />
      </div>
    </section>
  );
};

export default CallToAction;

