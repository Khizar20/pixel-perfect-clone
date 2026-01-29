import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Bed, Shield, ClipboardCheck, Building, MapPin, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OurWork = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countValue, setCountValue] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Handle smooth scrolling to hash on page load or navigation
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  // Count-up animation for 20,000+
  useEffect(() => {
    if (!countRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && countValue === 0) {
            const target = 20000;
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCountValue(target);
                clearInterval(timer);
              } else {
                setCountValue(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [countValue]);

  // Intersection Observer for fade-in and slide-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id) {
              setVisibleSections((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div 
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, #A173BD 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, #9B6EB6 0%, transparent 50%),
          radial-gradient(circle at 40% 20%, #9E71BA 0%, transparent 50%),
          linear-gradient(135deg, #A173BD 0%, #9E71BA 25%, #9B6EB6 50%, #9E71BA 75%, #A173BD 100%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%'
      }}
    >
      <Navbar />
      
      {/* Spacer to show background color above Our Work section */}
      <div 
        className="h-32 md:h-40 lg:h-48"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, #A173BD 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #9B6EB6 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, #9E71BA 0%, transparent 50%),
            linear-gradient(135deg, #A173BD 0%, #9E71BA 25%, #9B6EB6 50%, #9E71BA 75%, #A173BD 100%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%'
        }}
      ></div>
      
      {/* Our Work Introduction Section - Light Grey Band */}
      <section className="bg-gray-200 px-4 py-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Title on Left */}
          <h1 
            data-animate-id="intro-title"
            className={`text-5xl font-bold text-black md:text-6xl lg:text-7xl transition-all duration-1000 ${
              visibleSections.has('intro-title') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            Our Work
          </h1>
          
          {/* Description on Right */}
          <p 
            data-animate-id="intro-desc"
            className={`max-w-2xl text-base leading-relaxed text-black md:text-lg transition-all duration-1000 delay-300 ${
              visibleSections.has('intro-desc') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            At Children of Adam, everything we do is built around our Three E's: Empower, Engage, Enlighten. These guide our projects and ensure every effort creates lasting impact.
          </p>
        </div>
      </section>

      {/* Three E's Section */}
      <section className="relative px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="relative mx-auto max-w-7xl">
          {/* Central Tree Graphic - Overlapping */}
          <div 
            data-animate-id="tree-graphic"
            className={`absolute left-[52%] md:left-[53%] top-[70%] md:top-[75%] z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-1000 delay-500 ${
              visibleSections.has('tree-graphic') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <img
              src="/Images/Landing Page/CoA tree1.png"
              alt="Children of Adam tree"
              className="w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[22rem]"
            />
          </div>

          {/* Three Columns Layout */}
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Engage - Left Column */}
            <div 
              data-animate-id="engage-section"
              className={`relative z-20 space-y-6 text-white ml-4 md:ml-8 lg:ml-12 mt-16 md:mt-20 lg:mt-24 self-end transition-all duration-1000 ${
                visibleSections.has('engage-section') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Engage</h2>
              <div className="space-y-5 text-lg md:text-xl">
                <div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-xl">&gt;</span>
                    <div>
                      <p className="font-medium">Mental Health Infrastructure</p>
                      <p className="mt-1 text-base opacity-90">Bani Adam Neuropsychiatric Hospital</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-xl">&gt;</span>
                    <div>
                      <p className="font-medium">Community Relief</p>
                      <p className="mt-1 text-base opacity-90">Flood Relief</p>
                      <p className="mt-1 text-base opacity-90">Ration Relief</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Container - Enlighten and Empower stacked */}
            <div className="relative z-20 space-y-16 md:space-y-20">
              {/* Enlighten - Right Column Top */}
              <div 
                data-animate-id="enlighten-section"
                className={`space-y-6 text-white -mt-16 md:-mt-20 lg:-mt-24 -ml-24 md:-ml-28 lg:-ml-32 transition-all duration-1000 delay-200 ${
                  visibleSections.has('enlighten-section') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Enlighten</h2>
                <div className="space-y-5 text-lg md:text-xl">
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-xl">&gt;</span>
                      <div>
                        <p className="font-medium">Education</p>
                        <p className="mt-1 text-base opacity-90">Informal School</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-xl">&gt;</span>
                      <p className="font-medium">Lay Counselor Training</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-xl">&gt;</span>
                      <p className="font-medium">Student Ambassador</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empower - Right Column Bottom */}
              <div 
                data-animate-id="empower-section"
                className={`space-y-6 text-white ml-20 md:ml-40 lg:ml-60 xl:ml-80 transition-all duration-1000 delay-400 ${
                  visibleSections.has('empower-section') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Empower</h2>
                <div className="space-y-5 text-lg md:text-xl">
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-xl">&gt;</span>
                      <div>
                        <p className="font-medium">Public Health Infrastructure</p>
                        <p className="mt-1 text-base opacity-90">Safe Drinking Water</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-xl">&gt;</span>
                      <div>
                        <p className="font-medium">Impact Stories</p>
                        <p className="mt-1 text-base opacity-90">Real stories from real people</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bani Adam Neuropsychiatric Hospital Section */}
      <section 
        id="bani-adam"
        className="relative px-4 py-16 md:py-24"
        style={{
          background: '#FEFEFE',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left Side - Content */}
            <div 
              data-animate-id="bani-adam-content"
              className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
                visibleSections.has('bani-adam-content') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              {/* Mental Health Infrastructure Box */}
              <div className="inline-block px-4 py-2 rounded-md" style={{ backgroundColor: '#79C9DA' }}>
                <p className="text-white font-medium text-sm md:text-base">Mental Health Infrastructure</p>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#79C9DA' }}>
                Bani Adam Neuropsychiatric Hospital
              </h2>

              {/* Subtitle Bar */}
              <div className="px-6 py-3 rounded-md" style={{ backgroundColor: '#79C9DA' }}>
                <p className="text-white font-medium text-base md:text-lg lg:text-xl">
                  Building Pakistan's First Free Neuropsychiatric Hospital
                </p>
              </div>

              {/* Hospital Units Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Outpatient Unit */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <User className="h-5 w-5 md:h-6 md:w-6 text-black" />
                    </div>
                    <p className="text-black font-medium text-sm md:text-base">Outpatient Unit</p>
                  </div>
                </div>

                {/* Inpatient Unit */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Bed className="h-5 w-5 md:h-6 md:w-6 text-black" />
                    </div>
                    <p className="text-black font-medium text-sm md:text-base">Inpatient Unit</p>
                  </div>
                </div>

                {/* Urgent Care Unit */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Shield className="h-5 w-5 md:h-6 md:w-6 text-black" />
                    </div>
                    <p className="text-black font-medium text-sm md:text-base leading-snug">
                      Urgent Care Unit, Day Care & Telepsychiatry
                    </p>
                  </div>
                </div>

                {/* Diagnostics Unit */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <ClipboardCheck className="h-5 w-5 md:h-6 md:w-6 text-black" />
                    </div>
                    <p className="text-black font-medium text-sm md:text-base leading-snug">
                      Diagnostics & Intensive Out-Patient Therapy Unit
                    </p>
                  </div>
                </div>

                {/* Schooling Centre */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 md:col-span-2 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Building className="h-5 w-5 md:h-6 md:w-6 text-black" />
                    </div>
                    <p className="text-black font-medium text-sm md:text-base leading-snug">
                      Schooling and Skills Enhancement Centre for Autism and Learning Disabilities
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow below Schooling Centre */}
              <div className="flex justify-center mt-6 md:mt-8">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black">
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-black" />
                </div>
              </div>
            </div>

            {/* Right Side - Hospital Image with Location */}
            <div 
              data-animate-id="hospital-image"
              className={`relative mt-24 md:mt-32 lg:mt-40 xl:mt-48 ml-auto mr-0 md:mr-4 lg:mr-8 transition-all duration-1000 delay-300 ${
                visibleSections.has('hospital-image') 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-10 scale-95'
              }`}
            >
              {/* Location above image */}
              <div className="flex items-center justify-center gap-2 text-[#14b8a6] mb-4">
                <MapPin className="h-5 w-5" />
                <p className="font-medium text-base md:text-lg">Korangi, Karachi</p>
              </div>
              
              <img
                src="/Images/Landing Page/hospital.png"
                alt="Bani Adam Neuropsychiatric Hospital"
                className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Build Hope Brick by Brick Section */}
      <section 
        className="relative px-0 py-0"
        style={{
          background: '#FEFEFE',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px]">
          {/* Left Panel - Text Content */}
          <div className="relative flex flex-col justify-between p-8 md:p-12 lg:p-16">
            {/* Main Content */}
            <div 
              data-animate-id="brick-content"
              className={`space-y-4 md:space-y-6 z-10 transition-all duration-1000 ${
                visibleSections.has('brick-content') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-base md:text-lg text-black leading-relaxed">
                Nestled in the dynamic area of Gadap, Karachi, measuring approximately
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              24,228 square yards
              </h2>
              
              <p className="text-base md:text-lg text-black leading-relaxed">
                The Bani Adam Neuropsychiatric Hospital will offer free-of-cost, holistic mental health services.
              </p>
            </div>

            {/* Bottom Section with Slogan and Button */}
            <div className="space-y-6 md:space-y-8 z-10 -mt-2 md:-mt-1 lg:mt-0 mb-12 md:mb-16 lg:mb-20">
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                Build hope,<br />brick by brick.
              </h3>
              
              <button 
                className="text-white font-medium px-8 py-4 md:px-10 md:py-5 rounded-lg text-lg md:text-xl transition-colors" 
                style={{ backgroundColor: '#79C9DA' }} 
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} 
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                onClick={() => navigate('/donate')}
              >
                Lay a brick
              </button>
            </div>

            {/* Tree Logo - Bottom Left */}
            <img
              src="/Images/Landing Page/CoA tree.png"
              alt="Children of Adam tree"
              className="absolute bottom-6 left-6 w-20 md:w-28 pointer-events-none z-10"
            />
          </div>

          {/* Right Panel - Aerial Image */}
          <div className="relative overflow-visible">
            {/* Navigation Arrow - Left */}
            <button 
              className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-black hover:opacity-80 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </button>
            
            {/* Navigation Arrow - Right */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-black hover:opacity-80 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 md:h-7 md:w-7 text-white" />
            </button>

            {/* Aerial Image Container */}
            <div 
              data-animate-id="aerial-image"
              className={`relative w-full h-full min-h-[300px] md:min-h-[380px] lg:min-h-[450px] flex flex-col items-center justify-center p-6 md:p-8 transition-all duration-1000 delay-300 ${
                visibleSections.has('aerial-image') 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative w-full max-w-[75%] h-auto aspect-[4/4.5]">
                <img
                  src="/Images/2nd page/new.png"
                  alt="Aerial view of Gadap, Karachi"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-base md:text-lg text-black mt-4 font-medium">
                Korangi, Kaarachi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section 
        className="relative px-4 py-16 md:py-24"
        style={{
          background: '#FEFEFE',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        {/* Explore Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">Explore</h2>
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Blueprint Image */}
          <div 
            data-animate-id="blueprint-image"
            className={`relative flex items-center justify-center transition-all duration-1000 ${
              visibleSections.has('blueprint-image') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src="/Images/2nd page/blueprint.png"
              alt="Architectural blueprint"
              className="w-full h-auto max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* OPD Block Section */}
      <section 
        className="relative px-4 py-8 md:py-12"
        style={{
          background: '#FFFEEF'
        }}
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Image Container with Navigation Arrows */}
          <div className="relative flex items-center justify-center">
            {/* Navigation Arrow - Left */}
            <button 
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black hover:opacity-80 transition-opacity"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" style={{ color: '#FFFEEF' }} />
            </button>

            {/* Image */}
            <div 
              data-animate-id="opd-image"
              className={`relative w-auto inline-block transition-all duration-1000 ${
                visibleSections.has('opd-image') 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
            >
              <img
                src="/Images/2nd page/inside area.png"
                alt="OPD Block consultant rooms"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Navigation Arrow - Right */}
            <button 
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-black hover:opacity-80 transition-opacity"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 md:h-7 md:w-7" style={{ color: '#FFFEEF' }} />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center -mt-16 md:-mt-20">
            <p className="text-base md:text-lg text-black">OPD Block , consultant rooms</p>
          </div>
        </div>
      </section>

      {/* 100% Donations Section */}
      <section 
        className="relative px-0 py-0"
        style={{
          background: '#FEFEFE',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px]">
          {/* Left Panel - Text Content */}
          <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
            {/* Main Content */}
            <div 
              data-animate-id="donations-content"
              className={`space-y-6 md:space-y-8 z-10 transition-all duration-1000 ${
                visibleSections.has('donations-content') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              {/* Large 100% Text */}
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight" style={{ color: '#79C9DA' }}>
                100%
              </h2>
              
              {/* Subtitle Text */}
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed" style={{ color: '#79C9DA' }}>
                of donations go to<br />
                construction and<br />
                medical facilities.
              </p>
            </div>

            {/* Tree Logo - Bottom Left */}
            <img
              src="/Images/Landing Page/CoA tree.png"
              alt="Children of Adam tree"
              className="absolute bottom-6 left-6 w-20 md:w-28 pointer-events-none z-10"
            />
          </div>

          {/* Right Panel - Building Model Image */}
          <div 
            data-animate-id="building-model"
            className={`relative flex items-center justify-center lg:justify-end p-6 md:p-8 transition-all duration-1000 delay-300 ${
              visibleSections.has('building-model') 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <img
              src="/Images/2nd page/building model.png"
              alt="Building model"
              className="w-full h-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
            />
          </div>
        </div>
      </section>

      {/* Patient Impact Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        {/* Left Column - Purple Background with Content */}
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16" style={{ backgroundColor: '#9E71BA' }}>
          {/* Large Number */}
          <div 
            ref={countRef}
            data-animate-id="count-section"
            className={`space-y-2 md:space-y-4 mb-6 md:mb-8 z-10 transition-all duration-1000 ${
              visibleSections.has('count-section') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight">
              {countValue.toLocaleString()}+
            </h2>
          </div>

          {/* Descriptive Text */}
          <div 
            data-animate-id="count-description"
            className={`space-y-1 md:space-y-2 mb-8 md:mb-10 z-10 transition-all duration-1000 delay-300 ${
              visibleSections.has('count-description') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
              General and
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
              Neuropsychiatric
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
              OPD consultations
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
              in 2025.
            </p>
          </div>

          {/* Headline */}
          <div 
            data-animate-id="count-headline"
            className={`space-y-2 md:space-y-4 mb-8 md:mb-10 z-10 transition-all duration-1000 delay-500 ${
              visibleSections.has('count-headline') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              See How Lives
            </h3>
            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Are Changing.
            </h3>
          </div>

          {/* Call-to-Action Button */}
          <div className="mb-12 md:mb-16 lg:mb-20 z-10">
            <button 
              className="text-white font-medium px-8 py-4 md:px-10 md:py-5 rounded-lg text-lg md:text-xl transition-colors" 
              style={{ backgroundColor: '#79C9DA' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} 
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Hear From Our Patients
            </button>
          </div>

          {/* Tree Logo - Bottom Left */}
          <img
            src="/Images/Landing Page/CoA tree.png"
            alt="Children of Adam tree"
            className="absolute bottom-6 left-6 w-20 md:w-28 pointer-events-none z-10"
          />

          {/* Navigation Arrow - Left */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-black hover:opacity-80 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-white" />
          </button>
        </div>

        {/* Right Column - Image */}
        <div 
          data-animate-id="checkup-image"
          className={`relative w-full h-full min-h-[320px] md:min-h-[420px] lg:min-h-[520px] transition-all duration-1000 delay-300 ${
            visibleSections.has('checkup-image') 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          {/* Image */}
          <img
            src="/Images/2nd page/6..png"
            alt="Medical consultation"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />

          {/* Navigation Arrow - Right */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white bg-black hover:opacity-80 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7 text-white" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-8 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Informal Schools Section */}
      <section 
        id="informal-schools"
        className="relative px-4 py-16 md:py-24 min-h-[800px] md:min-h-[900px]"
        style={{
          background: '#FEFEFE',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        {/* Crowd Image - Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-0">
          <img
            src="/Images/2nd page/crowd.png"
            alt="Children and adults at informal school"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl z-10">
          {/* Top Section - Education Label and Title */}
          <div className="mb-8 md:mb-12 relative">
            {/* Education Label */}
            <div className="mb-2 md:mb-1">
              <p className="text-lg md:text-xl font-medium" style={{ color: '#9E71BA' }}>Education</p>
            </div>
            
            {/* Informal Schools Title - Centered with right offset */}
            <div 
              data-animate-id="informal-schools-title"
              className={`text-center -ml-4 md:-ml-8 lg:-ml-12 -mt-2 md:-mt-4 transition-all duration-1000 ${
                visibleSections.has('informal-schools-title') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: '#9E71BA' }}>
                Informal Schools
              </h2>
            </div>
          </div>

          {/* Middle Section - Large Number with Left and Right Text */}
          <div className="relative mb-12 md:mb-16">
            {/* Large 570+ Number with Left and Right Text on Same Line */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              {/* Left Text with Bar - removed text, keeping bar for balance */}
              <div className="flex-1 text-left max-w-md">
                <div className="h-2 max-w-md mb-2" style={{ backgroundColor: '#9E71BA' }}></div>
              </div>

              {/* Large 570+ Number - Center */}
              <div 
                data-animate-id="570-number"
                className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
                  visibleSections.has('570-number') 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-90'
                }`}
              >
                <h3 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none" style={{ color: '#9E71BA', opacity: 0.6 }}>
                  570+
                </h3>
              </div>

              {/* Right Text with Bar - removed text, keeping bar for balance */}
              <div className="flex-1 text-left max-w-md">
                <div className="h-2 max-w-md mb-2" style={{ backgroundColor: '#9E71BA' }}></div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center absolute bottom-20 md:bottom-24 left-0 right-0 z-20 px-4">
          <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-4xl mx-auto">
            In underserved communities, many children miss out on basic schooling. Through our informal schools, we provide a safe space to learn, grow, and dream.
          </p>
        </div>

        {/* Tree Logo - Bottom Left */}
        <img
          src="/Images/Landing Page/CoA tree.png"
          alt="Children of Adam tree"
          className="absolute bottom-6 left-6 w-20 md:w-28 pointer-events-none z-20"
        />
      </section>

      {/* Be the Reason Section */}
      <section 
        className="relative px-4 py-16 md:py-24 lg:py-28"
        style={{
          background: '#FEFEFE',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="relative mx-auto max-w-7xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Education Text & CTA */}
            <div className="space-y-6 md:space-y-8">
              {/* Education Label */}
              <p className="text-lg md:text-xl font-medium" style={{ color: '#9E71BA' }}>
                Education
              </p>

              {/* 570+ Number */}
              <div>
                <h3 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-black mb-4 md:mb-6">
                  570+
                </h3>
              </div>

              {/* Students Paragraph */}
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-2xl">
                Students are currently enrolled in 6 Children of Adam's Informal Schools in Karachi and Islamabad.<br />
                By offering education where it's needed most, we're breaking cycles of poverty and creating opportunities that last a lifetime.
              </p>
            
              {/* Headline */}
            <div 
              data-animate-id="dream-headline"
                className={`transition-all duration-1000 ${
                visibleSections.has('dream-headline') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#9E71BA' }}>
                  Be the reason a child<br className="hidden md:block" /> learns to dream.
              </h2>
          </div>

              {/* Supporting line and CTA Button */}
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg lg:text-xl text-black max-w-xl">
                  Give the gift of learning today and help a child unlock their potential.
                </p>
            <button 
                  className="inline-flex items-center justify-center text-white font-medium px-8 py-4 md:px-10 md:py-5 rounded-lg text-lg md:text-xl shadow-lg transition-transform transition-colors"
              style={{ backgroundColor: '#FF6B35' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} 
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  onClick={() => {
                    navigate('/donate');
                    setTimeout(() => {
                      const element = document.getElementById('your-gift-starts-here');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
            >
              Give the gift of learning today.
            </button>
          </div>
        </div>

            {/* Right Column - Image collage */}
        <div 
          data-animate-id="kids-image"
              className={`relative w-full max-w-xl lg:max-w-none ml-auto lg:ml-8 xl:ml-16 transition-all duration-1000 delay-300 ${
            visibleSections.has('kids-image') 
              ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
          }`}
        >
          <img
                src="/Images/2nd page/8..png"
                alt="Children learning and celebrating"
            className="w-full h-auto object-cover"
          />
        </div>
          </div>
        </div>
      </section>

      {/* Safe Drinking Water Section */}
      <section 
        className="relative bg-[#FEFEFE] px-4 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Title - Above Image and Stats */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight">
              Safe Drinking<br />Water
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative flex justify-start lg:-ml-8">
              <div className="relative z-10">
                <img
                  src="/Images/Impact/1..png"
                  alt="Community member holding water container"
                  className="w-full max-w-lg lg:max-w-xl h-auto object-contain"
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="space-y-5 md:space-y-6 text-[#5CC6DF]">
              <div className="flex items-start gap-4">
                <span className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
                  11
                </span>
                <span className="text-2xl md:text-3xl font-semibold leading-tight">
                  water<br />filtration<br />plants
                </span>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-semibold leading-tight">
                  serving
                </p>
              </div>

              <div className="space-y-3">
                <span className="block text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                  1000+
                </span>
                <span className="block text-xl md:text-2xl font-semibold leading-tight">
                  residents in<br />
                  Islamabad and<br />
                  adjoining areas<br />
                  every single day.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Drinking Water Details Section */}
      <section 
        className="relative bg-[#FEFEFE] px-4 pt-4 pb-12 md:pt-6 md:pb-16 lg:pt-8 lg:pb-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="mx-auto max-w-7xl space-y-8 md:space-y-10">
          {/* Intro Text */}
          <p className="text-base md:text-lg lg:text-xl text-black max-w-3xl leading-relaxed">
            Across many communities, families still walk miles every day just to collect water that isn't even safe to drink.
            Our water filtration centers change that reality.
          </p>

          {/* What This Project Provides */}
          <div className="space-y-4 md:space-y-5">
            <p className="text-lg md:text-xl font-semibold text-black">
              What This Project Provides
            </p>

            {/* Benefit 1 */}
            <div
              className="flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4"
              style={{ backgroundColor: '#5CC6DF' }}
            >
              <img
                src="/Images/Impact/tickicon1.png"
                alt="Shield icon"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="text-base md:text-lg lg:text-xl font-medium text-black">
                Free, safe drinking water for entire neighbourhood&apos;s.
              </p>
            </div>

            {/* Benefit 2 */}
            <div
              className="flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 md:py-4"
              style={{ backgroundColor: '#5CC6DF' }}
            >
              <img
                src="/Images/Impact/tickicon2.png"
                alt="Sustainable systems icon"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <p className="text-base md:text-lg lg:text-xl font-medium text-black">
                Sustainable systems, maintained and monitored regularly.
              </p>
            </div>
          </div>

          {/* Be Part of the Change + CTA */}
          <div className="space-y-4 md:space-y-5">
            <div>
              <p className="text-lg md:text-xl font-semibold text-black">
                Be Part of the Change
              </p>
              <p className="text-base md:text-lg text-black max-w-3xl leading-relaxed mt-2">
                Your support helps us expand these centers and bring clean water to more families across Pakistan.
              </p>
            </div>

            <div className="space-y-2">
              <button
                className="px-6 py-3 md:px-8 md:py-4 rounded-md text-white font-semibold text-base md:text-lg shadow-md"
                style={{ backgroundColor: '#5CC6DF' }}
                onClick={() => {
                  navigate('/donate');
                  setTimeout(() => {
                    const element = document.getElementById('your-gift-starts-here');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
              >
                Support Clean Water
              </button>
              <p className="text-xs md:text-sm text-gray-600">
                *This project isn&apos;t taking contributions at the moment. Thank you for your interest and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Drinking Water Gallery Section */}
      <section 
        className="relative bg-[#FEFEFE] px-4 pt-4 pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="/Images/Impact/4.3.png"
                alt="Water filtration plant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="/Images/Impact/11.png"
                alt="Man carrying clean water container"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations of Water Filtration Plants Section */}
      <section 
        className="relative bg-white px-4 py-16 md:py-20 lg:py-24 min-h-[600px] md:min-h-[700px]"
      >
        {/* Background Mosque Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-70">
            <img
              src="/Images/Impact/3..png"
              alt="Faisal Mosque outline"
              className="w-full h-full object-contain object-right"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl z-10">
          {/* Heading */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight" style={{ color: '#00BCD4' }}>
              Locations of our Water filtration<br />Plants in Islamabad.
            </h2>
          </div>

          {/* Location Labels - Row Layout */}
          <div className="space-y-6 md:space-y-8">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                G-10
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                G-7/2
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                Rawal Town
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                I-10
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                G-10
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                G-7/3
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                Margalla Town
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                F-7 Marvi Road
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                G-7/1
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                G-7/3 St. 2
              </div>
              <div className="px-4 py-2 md:px-5 md:py-3 rounded-full text-white font-medium text-sm md:text-base w-fit" style={{ backgroundColor: '#8A5BB8' }}>
                Shahzad Town
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;

