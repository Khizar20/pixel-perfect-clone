import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Donation = () => {
  const heroImage = "/Images/Donation Page/1..png";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateId = entry.target.getAttribute('data-animate');
            if (animateId) {
              setVisibleSections((prev) => new Set(prev).add(animateId));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#FEFEFE",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <main className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${heroImage}")` }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="flex w-full flex-col items-start px-6 md:px-10 lg:px-16 py-32 md:py-40 lg:py-48">
            {/* Heading */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <span className="block mb-4 md:mb-5 whitespace-nowrap animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>You are the miracle</span>
                <span className="block mb-4 md:mb-5 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>they're looking</span>
                <span className="block animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>for.</span>
              </h1>
            </div>

            {/* Button */}
            <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <button
                className="rounded-lg bg-[#ed1c24] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#ff2a34] hover:scale-105 transform"
                onClick={() => {
                  const element = document.getElementById('how-can-i-donate');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* How can I donate section */}
      <section id="how-can-i-donate" data-animate="pills" className="relative px-4 pt-10 md:pt-14 pb-16 md:pb-24 -mt-12 md:-mt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 md:gap-12">
          {/* Top pills row */}
          <div className={`flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 mt-4 md:mt-6 transition-all duration-1000 ${visibleSections.has('pills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Through the website */}
            <div className="flex flex-col items-center transform transition-all duration-700 hover:scale-105">
              <div
                className="flex h-44 w-40 flex-col items-center justify-between rounded-b-full pt-7 pb-7 md:h-52 md:w-48 md:pt-9 md:pb-9 transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: "#79C9DA" }}
              >
                <span className="px-4 text-center text-base font-semibold text-white md:text-lg leading-snug">
                  Through the
                  <br />
                  website
                </span>
                <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white/10">
                  <span className="text-sm text-white">⌄</span>
                </div>
              </div>
            </div>

            {/* In-person */}
            <div className="flex flex-col items-center transform transition-all duration-700 hover:scale-105" style={{ transitionDelay: '0.1s' }}>
              <div
                className="flex h-44 w-40 flex-col items-center justify-between rounded-b-full pt-7 pb-7 md:h-52 md:w-48 md:pt-9 md:pb-9 transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: "#8EC046" }}
              >
                <span className="px-4 text-center text-base font-semibold text-white md:text-lg leading-snug">
                  In-person
                </span>
                <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white/10">
                  <span className="text-sm text-white">⌄</span>
                </div>
              </div>
            </div>

            {/* Online Transfer */}
            <div className="flex flex-col items-center transform transition-all duration-700 hover:scale-105" style={{ transitionDelay: '0.2s' }}>
              <div
                className="flex h-44 w-40 flex-col items-center justify-between rounded-b-full pt-7 pb-7 md:h-52 md:w-48 md:pt-9 md:pb-9 transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: "#9E71BA" }}
              >
                <span className="px-4 text-center text-base font-semibold text-white md:text-lg leading-snug">
                  Online
                  <br />
                  Transfer
                </span>
                <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white/10">
                  <span className="text-sm text-white">⌄</span>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 data-animate="heading" className={`mt-6 md:mt-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#f7931e] text-center transition-all duration-1000 ${visibleSections.has('heading') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            How can I donate?
          </h2>

          {/* Stacked option images */}
          <div data-animate="cards" className={`flex w-full max-w-xl flex-col gap-4 md:gap-5 transition-all duration-1000 ${visibleSections.has('cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* International Transfer - Scrolls to Your Gift Starts Here */}
            <div
              className="w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105 transform"
              onClick={() => {
                const element = document.getElementById('your-gift-starts-here');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <img
                src="/Images/Donation Page/1.png"
                alt="International Transfer"
                className="mx-auto ml-5 block h-auto w-full max-w-[520px] object-contain"
              />
            </div>

            {/* Direct Bank Transfer - Scrolls to Thank You Section */}
            <div
              className="w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105 transform"
              onClick={() => {
                const element = document.getElementById('thank-you-section');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <img
                src="/Images/Donation Page/5.png"
                alt="Direct Bank Transfer"
                className="mx-auto block h-auto w-full max-w-[520px] object-contain"
              />
            </div>

            {/* Cheque - Scrolls to Thank You Section */}
            <div
              className="w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105 transform"
              onClick={() => {
                const element = document.getElementById('thank-you-section');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <img
                src="/Images/Donation Page/3.png"
                alt="Cheque"
                className="mx-auto block h-auto w-full max-w-[520px] object-contain"
              />
            </div>

            {/* In-kind Donations - Scrolls to Thank You Section */}
            <div
              className="w-full cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105 transform"
              onClick={() => {
                const element = document.getElementById('thank-you-section');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              >
                <img
                src="/Images/Donation Page/4.png"
                alt="In-kind Donations"
                  className="mx-auto block h-auto w-full max-w-[520px] object-contain"
                />
              </div>
          </div>

          {/* Tax Exempt Text */}
          <div className="text-center mt-8 md:mt-10">
            <p className="text-base md:text-lg text-black">
              Children of Adam is a US-based Tax Exempt 501(c)(3) non-profit organization (Federal Tax ID # 45-4397298).
            </p>
          </div>

          {/* View Certificate Button */}
          <Dialog open={isCertificateOpen} onOpenChange={setIsCertificateOpen}>
            <DialogTrigger asChild>
              <button
                className="px-8 py-4 md:px-10 md:py-5 rounded-lg text-white font-semibold text-lg md:text-xl transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: '#DA8326' }}
              >
                View our Zakat Collection Certificate
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] p-4 bg-white border-0 overflow-auto">
              <div className="relative flex items-center justify-center">
                <img
                  src="/Images/Landing Page/certificate.png"
                  alt="Zakat Collection Certificate"
                  className="w-full max-w-2xl h-auto rounded-lg object-contain"
                  style={{ maxHeight: '85vh' }}
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="text-center">
              <div className="mb-6">
                <svg
                  className="mx-auto h-16 w-16 text-[#79C9DA]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Payment Integration Coming Soon
              </h3>
              <p className="text-gray-600">
                We're working on integrating secure payment options. Please check back soon or contact us for alternative donation methods.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Your Gift Starts Here Section */}
      <section id="your-gift-starts-here" data-animate="gift-section" className="relative px-4 py-8 md:py-12 w-full overflow-hidden" style={{ backgroundColor: '#466833' }}>
        <div className="mx-auto max-w-7xl w-full">
          {/* Content: Image on Left, QR Codes on Right */}
          <div className={`flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 lg:gap-10 w-full transition-all duration-1000 ${visibleSections.has('gift-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-full lg:w-1/2 xl:w-2/5 transform transition-all duration-700 hover:scale-105">
              <img
                src="/Images/Impact/impact guys1.png"
                alt="Impact"
                className="w-full max-w-sm lg:max-w-md h-auto object-contain mx-auto lg:-ml-8 xl:-ml-12"
              />
            </div>

            {/* Right Side - QR Codes */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 flex-1 w-full lg:w-1/2 xl:w-3/5 mt-16 md:mt-20 lg:mt-24">
              {/* Zelle QR Code */}
              <div className="flex flex-col items-center flex-shrink-0 w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] transform transition-all duration-500 hover:scale-110">
                <p className="text-white text-lg md:text-xl font-semibold mb-4">Zelle</p>
                <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center gap-3 w-full min-h-[240px] md:min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:shadow-2xl">
                  <img
                    src="/Images/Donation Page/zelle.png"
                    alt="Zelle"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* PayPal QR Code */}
              <div className="flex flex-col items-center flex-shrink-0 w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] relative transform transition-all duration-500 hover:scale-110">
                {/* Title - Positioned above PayPal */}
                <h2 className="absolute -top-12 md:-top-16 lg:-top-20 left-1/2 -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center whitespace-nowrap">
                  Your Gift Starts Here
                </h2>
                <p className="text-white text-lg md:text-xl font-semibold mb-4">Paypal</p>
                <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center gap-3 w-full min-h-[240px] md:min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:shadow-2xl">
                  <img
                    src="/Images/Donation Page/paypal.png"
                    alt="PayPal"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Venmo QR Code */}
              <div className="flex flex-col items-center flex-shrink-0 w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] transform transition-all duration-500 hover:scale-110">
                <p className="text-white text-lg md:text-xl font-semibold mb-4">Venmo</p>
                <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center gap-3 w-full min-h-[240px] md:min-h-[280px] lg:min-h-[320px] transition-all duration-300 hover:shadow-2xl">
                  <img
                    src="/Images/Donation Page/venmo.png"
                    alt="Venmo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section id="thank-you-section" data-animate="thank-you" className="relative px-4 pt-4 md:pt-6 pb-0 w-full" style={{ backgroundColor: '#FEFEFE' }}>
        <div className="mx-auto max-w-7xl">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start transition-all duration-1000 ${visibleSections.has('thank-you') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left - Image */}
            <div className="order-2 lg:order-1 transform transition-all duration-700 hover:scale-105">
              <img
                src="/Images/Donation Page/4..png"
                alt="Thank you illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 pt-8 md:pt-12">
          {/* Heading */}
              <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 transform transition-all duration-500 hover:scale-105">
            <span className="block">Thank You for</span>
            <span className="block">Choosing to Give</span>
          </h2>

          {/* Bank Details Card */}
              <div className="mx-auto lg:mx-0 max-w-2xl rounded-2xl px-6 py-8 md:px-10 md:py-12 text-center transition-all duration-300 hover:shadow-2xl transform hover:scale-105" style={{ backgroundColor: '#242424' }}>
            <div className="space-y-6 md:space-y-8">
              {/* Samba Bank */}
              <div>
                <p className="text-white text-lg md:text-xl font-semibold mb-2">
                  Samba Bank Limited (Zakat Account)
                </p>
                <p className="text-white text-base md:text-lg">
                  <span className="font-bold">IBAN:</span> PK95 <span className="font-bold">SAMB</span> 0000 0020 0127 7491
                </p>
              </div>

              {/* Faysal Bank */}
              <div>
                <p className="text-white text-lg md:text-xl font-semibold mb-2">
                  Faysal Bank Limited (Zakat Account)
                </p>
                <p className="text-white text-base md:text-lg">
                  <span className="font-bold">IBAN:</span> PK69 <span className="font-bold">FAYS</span> 3464 3900 0000 2691
                </p>
              </div>

              {/* Bank Alfalah */}
              <div>
                <p className="text-white text-lg md:text-xl font-semibold mb-2">
                  Bank Alfalah (Zakat Account)
                </p>
                <p className="text-white text-base md:text-lg">
                  <span className="font-bold">IBAN:</span> PK74 <span className="font-bold">ALFH</span> 0263 0010 0938 8983
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Donation;


