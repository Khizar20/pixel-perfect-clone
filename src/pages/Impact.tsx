import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Impact = () => {
  const [isBankDetailsOpen, setIsBankDetailsOpen] = useState(false);
  const navigate = useNavigate();
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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    <div className="min-h-screen">
      <Navbar />
      
      <section data-animate="hero" className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        {/* Left Section - Graphic/Text */}
        <div 
          className={`relative flex flex-col justify-center p-8 md:p-12 lg:p-16 transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          style={{
            backgroundColor: '#A4D7E1',
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 md:mb-8 leading-tight transform transition-all duration-500 hover:scale-105">
            Real People,<br />Real Impact.
          </h1>

          {/* Sub-heading */}
          <p className="text-base md:text-lg lg:text-xl text-black mb-8 md:mb-10 leading-relaxed">
            Stories of healing from Children of Adam's Gadap OPD's
          </p>

          {/* Feature Icons and Text */}
          <div className="flex flex-wrap gap-6 md:gap-8 mb-8 md:mb-10">
            {/* Free Medicine */}
            <div className="flex items-center gap-4 md:gap-6 transform transition-all duration-500 hover:scale-110">
              <img
                src="/Images/Impact/icons1.png"
                alt="Free medicine icon"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain flex-shrink-0 transition-all duration-300 hover:rotate-12"
              />
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-black">Free medicine</p>
            </div>

            {/* Free Checkup */}
            <div className="flex items-center gap-4 md:gap-6 transform transition-all duration-500 hover:scale-110">
              <img
                src="/Images/Impact/icons2.png"
                alt="Free checkup icon"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain flex-shrink-0 transition-all duration-300 hover:rotate-12"
              />
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-black">Free checkup</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button 
            className="px-8 py-4 md:px-10 md:py-5 rounded-lg text-white font-bold text-lg md:text-xl transition-all hover:opacity-90 shadow-lg w-fit transform hover:scale-105"
            style={{ backgroundColor: '#ed1c24' }}
            onClick={() => {
              navigate('/donate');
              setTimeout(() => {
                const element = document.getElementById('how-can-i-donate');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          >
            Help us do more
          </button>
        </div>

        {/* Right Section - Photograph */}
        <div className={`relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-full transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <img
            src="/Images/Impact/main.png"
            alt="Medical clinic scene"
            className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110"
          />
        </div>
      </section>

      {/* Sponsor a Patient Section */}
      <section data-animate="sponsor" className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Images/Impact/2..png"
            alt="Patients receiving medical care"
            className="w-full h-full object-cover transform transition-all duration-1000 hover:scale-110"
          />
          
         
        </div>

        {/* Overlay Container - Black and Green Panels (Smaller, Centered Vertically on Left) */}
        <div className={`absolute z-10 top-1/2 -translate-y-1/2 left-6 md:left-8 lg:left-12 flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg h-auto transition-all duration-1000 ${visibleSections.has('sponsor') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          {/* Top Section - Black Background (approximately 2/3 height) */}
          <div className="flex-1 bg-black p-5 md:p-6 lg:p-8 flex flex-col justify-center relative transition-all duration-300 hover:shadow-2xl" style={{ minHeight: '66.67%' }}>
            {/* Main Heading with Tree Logo */}
            <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight transform transition-all duration-500 hover:scale-105">
                Sponsor<br />a Patient
              </h2>
              <img
                src="/Images/Landing Page/CoA tree.png"
                alt="Children of Adam tree"
                className="w-24 md:w-32 lg:w-40 xl:w-48 flex-shrink-0 mt-1 transform transition-all duration-500 hover:rotate-12"
              />
            </div>
            
            {/* PKR 2500 Box */}
            <Dialog open={isBankDetailsOpen} onOpenChange={setIsBankDetailsOpen}>
              <DialogTrigger asChild>
                <div className="border-2 border-white rounded-lg px-4 py-2 md:px-5 md:py-3 w-fit cursor-pointer hover:bg-white/10 transition-all transform hover:scale-110 mb-3 md:mb-4">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">PKR 2500</p>
                </div>
              </DialogTrigger>
            </Dialog>

            {/* Sub-text */}
            <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed">
              Covers their checkup, tests, and medicines.
            </p>
          </div>

          {/* Bottom Section - Green Background (approximately 1/3 height) */}
          <div className="bg-[#8BC33C] p-5 md:p-6 lg:p-8 flex items-center justify-center transition-all duration-300 hover:shadow-2xl transform hover:scale-105" style={{ minHeight: '33.33%' }}>
            <Dialog open={isBankDetailsOpen} onOpenChange={setIsBankDetailsOpen}>
              <DialogTrigger asChild>
                <button 
                  className="text-white text-sm md:text-base lg:text-lg font-semibold hover:opacity-90 transition-all cursor-pointer text-center transform hover:scale-110"
                >
                  Your support can change a life today.
                </button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>

        {/* Overlay Text - Bottom Right */}
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 max-w-xs md:max-w-sm z-20">
          <p className="text-white text-sm md:text-base lg:text-lg italic leading-relaxed drop-shadow-lg">
            *Every rupee directly supports patient care. No admin fees. No deductions. Only impact.
          </p>
        </div>
      </section>

      {/* Bank Details Dialog */}
      <Dialog open={isBankDetailsOpen} onOpenChange={setIsBankDetailsOpen}>
        <DialogContent className="max-w-2xl w-[90vw] max-h-[90vh] p-6 md:p-8 bg-white overflow-auto">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">Bank Details for Zakat</h3>
            
            <div className="space-y-6">
              {/* Samba Bank */}
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg md:text-xl font-semibold text-black mb-2">Samba Bank Limited (Zakat Account)</h4>
                <p className="text-base md:text-lg text-gray-700">IBAN: PK95 SAMB 0000 0020 0127 7491</p>
              </div>

              {/* Faysal Bank */}
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg md:text-xl font-semibold text-black mb-2">Faysal Bank Limited (Zakat Account)</h4>
                <p className="text-base md:text-lg text-gray-700">IBAN: PK69 FAYS 3464 3900 0000 2691</p>
              </div>

              {/* Bank Alfalah */}
              <div className="pb-4">
                <h4 className="text-lg md:text-xl font-semibold text-black mb-2">Bank Alfalah (Zakat Account)</h4>
                <p className="text-base md:text-lg text-gray-700">IBAN: PK74 ALFH 0263 0010 0938 8983</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
    </>
  );
};

export default Impact;
