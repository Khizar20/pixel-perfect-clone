import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impact = () => {
  return (
    <div className="min-h-screen relative" style={{ background: "#82C9D8" }}>
      <Navbar />
      
      <section 
        className="relative px-4 pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20"
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 md:mb-16 text-center">
            Real People, Real Impact
          </h1>

          {/* Ali Akbar Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-start mt-12 md:mt-16 lg:mt-20">
            {/* Left - Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img
                  src="/Images/Impact/impact guys1.png"
                  alt="Ali Akbar"
                  className="w-full max-w-sm md:max-w-md h-auto"
                />
              </div>
            </div>

            {/* Right - Name and Text */}
            <div className="flex flex-col justify-center space-y-4 md:pl-4 mt-6 md:mt-10 lg:mt-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Ali Akbar
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
                Ali Akbar came to Bani Adam Neuropsychiatric OPD. He was struggling with his mental health. He received the required treatment and medicines free of cost and is feeling better now.
              </p>
            </div>
          </div>

          {/* Sher Khan and Shahnawaz Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-start mt-8 md:mt-12 lg:mt-16">
            {/* Left - Names and Text */}
            <div className="flex flex-col justify-center space-y-4 order-2 md:order-1 md:pr-4 mt-6 md:mt-10 lg:mt-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Sher Khan and Shahnawaz
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
                Shahnawaz brought his brother Sher Khan to Bani Adam neuropsychiatric OPD. He has epilepsy and schizophrenia. They have had 3 consultation with the doctor and there has been a lot of improvement.
              </p>
            </div>

            {/* Right - Photo */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative">
                <img
                  src="/Images/Impact/impact guys2.png"
                  alt="Sher Khan and Shahnawaz"
                  className="w-full max-w-sm md:max-w-md h-auto"
                />
              </div>
            </div>
          </div>

          {/* Icons Section - Below Sher Khan and Shahnawaz */}
          <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="flex flex-wrap gap-6 md:gap-8 justify-start md:justify-start">
              {/* Free Medicine Icon */}
              <div className="flex items-center gap-6 md:gap-8">
                <div className="flex items-center justify-center shrink-0">
                  <img
                    src="/Images/Impact/icons1.png"
                    alt="Free medicine icon"
                    className="object-contain"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                </div>
                <p className="text-xl md:text-2xl font-semibold text-black">Free medicine</p>
              </div>

              {/* Free Checkup Icon */}
              <div className="flex items-center gap-6 md:gap-8">
                <div className="flex items-center justify-center shrink-0">
                  <img
                    src="/Images/Impact/icons2.png"
                    alt="Free checkup icon"
                    className="object-contain"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                </div>
                <p className="text-xl md:text-2xl font-semibold text-black">Free checkup</p>
              </div>
            </div>

            {/* Help us write more Button - just below icons */}
            <div className="flex justify-start md:justify-start">
              <button 
                className="px-8 py-4 md:px-12 md:py-5 rounded-lg text-white font-medium text-lg md:text-xl transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: '#ed1c24' }}
              >
                Help us write more
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;

