import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Donation = () => {
  const heroImage = "/Images/Donation Page/2 brothers.png";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
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
                <span className="block mb-4 md:mb-5 whitespace-nowrap">You are the miracle</span>
                <span className="block mb-4 md:mb-5">they're looking</span>
                <span className="block">for.</span>
              </h1>
            </div>

            {/* Button */}
            <div className="mt-10">
              <button
                className="rounded-lg bg-[#ed1c24] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#ff2a34]"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* How can I donate section */}
      <section className="relative px-4 pt-10 md:pt-14 pb-16 md:pb-24 -mt-12 md:-mt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 md:gap-12">
          {/* Top pills row */}
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 -mt-4 md:-mt-6">
            {/* Through the website */}
            <div className="flex flex-col items-center">
              <div
                className="flex h-44 w-40 flex-col items-center justify-between rounded-b-full pt-7 pb-7 md:h-52 md:w-48 md:pt-9 md:pb-9"
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
            <div className="flex flex-col items-center">
              <div
                className="flex h-44 w-40 flex-col items-center justify-between rounded-b-full pt-7 pb-7 md:h-52 md:w-48 md:pt-9 md:pb-9"
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
            <div className="flex flex-col items-center">
              <div
                className="flex h-44 w-40 flex-col items-center justify-between rounded-b-full pt-7 pb-7 md:h-52 md:w-48 md:pt-9 md:pb-9"
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
          <h2 className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-4xl font-bold text-[#f7931e] text-center">
            How can I donate?
          </h2>

          {/* Stacked option images */}
          <div className="flex w-full max-w-xl flex-col gap-4 md:gap-5">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full cursor-pointer transition-opacity hover:opacity-90"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={`/Images/Donation Page/${num}.png`}
                  alt={`Donation option ${num}`}
                  className="mx-auto block h-auto w-full max-w-[520px] object-contain"
                />
              </div>
            ))}
          </div>
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

      <Footer />
    </div>
  );
};

export default Donation;


