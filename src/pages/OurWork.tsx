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
                <p className="font-medium text-base md:text-lg">Gadap, Karachi</p>
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
                393,094 square feet
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
              className={`relative w-full h-full min-h-[380px] md:min-h-[480px] lg:min-h-[580px] flex items-center justify-center p-6 md:p-8 transition-all duration-1000 delay-300 ${
                visibleSections.has('aerial-image') 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative w-full max-w-[98%] h-auto aspect-[4/4.5]">
                <img
                  src="/Images/2nd page/top view city.png"
                  alt="Aerial view of Gadap, Karachi"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
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

      {/* Timeline Section */}
      <section 
        className="relative px-4 py-16 md:py-24"
        style={{
          background: '#EDEEF1'
        }}
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Title */}
          <div 
            data-animate-id="timeline-title"
            className={`text-center mb-4 transition-all duration-1000 ${
              visibleSections.has('timeline-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">Timeline</h2>
          </div>
          
          {/* Subtitle */}
          <div 
            data-animate-id="timeline-subtitle"
            className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
              visibleSections.has('timeline-subtitle') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-black">Bani Adam Neuropsychiatric Hospital</p>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 lg:gap-8 justify-center mb-0 pb-4" id="timeline-cards">
              {/* Step 1 - Red */}
              <div className="w-full md:w-[180px] lg:w-[200px]">
                <div className="relative">
                  {/* Header with triangle tab */}
                  <div className="relative bg-red-500 px-4 py-3 rounded-t-lg h-[60px] flex items-center justify-center">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-red-500"></div>
                  </div>
                  {/* White box */}
                  <div className="bg-white px-4 py-3 rounded-b-lg shadow-sm mt-[15px] min-h-[130px] flex items-center justify-center">
                    <p className="text-black text-sm md:text-base font-medium text-center">Land Secured</p>
                  </div>
                </div>
              </div>

              {/* Step 2 - Light Blue */}
              <div className="w-full md:w-[180px] lg:w-[200px]">
                <div className="relative">
                  {/* Header with triangle tab */}
                  <div className="relative bg-[#79C9DA] px-4 py-3 rounded-t-lg h-[60px] flex items-center justify-center">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#79C9DA]"></div>
                  </div>
                  {/* White box */}
                  <div className="bg-white px-4 py-3 rounded-b-lg shadow-sm mt-[15px] min-h-[130px] flex items-center justify-center">
                    <p className="text-black text-sm md:text-base font-medium text-center">Construction started</p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Purple */}
              <div className="w-full md:w-[180px] lg:w-[200px]">
                <div className="relative">
                  {/* Header with triangle tab */}
                  <div className="relative bg-purple-500 px-4 py-3 rounded-t-lg h-[60px] flex items-center justify-center">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-purple-500"></div>
                  </div>
                  {/* White box */}
                  <div className="bg-white px-4 py-3 rounded-b-lg shadow-sm mt-[15px] min-h-[130px] flex items-center justify-center">
                    <p className="text-black text-sm md:text-base font-medium text-center">Boundary wall completed</p>
                  </div>
                </div>
              </div>

              {/* Step 4 - Orange */}
              <div className="w-full md:w-[180px] lg:w-[200px]">
                <div className="relative">
                  {/* Header with triangle tab and year */}
                  <div className="relative bg-orange-500 px-4 py-3 rounded-t-lg h-[60px] flex items-center justify-center">
                    <p className="text-white font-bold text-base md:text-lg text-center">2024</p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-orange-500"></div>
                  </div>
                  {/* White box */}
                  <div className="bg-white px-4 py-3 rounded-b-lg shadow-sm mt-[15px] min-h-[130px] flex items-center justify-center">
                    <p className="text-black text-sm md:text-base font-medium text-center">OPD construction started</p>
                  </div>
                </div>
              </div>

              {/* Step 5 - Green */}
              <div className="w-full md:w-[180px] lg:w-[200px]">
                <div className="relative">
                  {/* Header with triangle tab and year */}
                  <div className="relative bg-green-500 px-4 py-3 rounded-t-lg h-[60px] flex items-center justify-center">
                    <p className="text-white font-bold text-base md:text-lg text-center">2025</p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-green-500"></div>
                  </div>
                  {/* White box */}
                  <div className="bg-white px-4 py-3 rounded-b-lg shadow-sm mt-[15px] min-h-[130px] flex items-center justify-center">
                    <p className="text-black text-sm md:text-base font-medium text-center">OPD's became operational</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chain Icon Image - spans from first to last card */}
            <div className="hidden md:block -mt-72">
              <div className="flex justify-center">
                <div className="relative w-[calc(5*180px+4*24px+60px)] lg:w-[calc(5*200px+4*32px+80px)]">
                  <img
                    src="/Images/2nd page/icon chain.png"
                    alt="Timeline chain"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Chain Icon Image - Mobile version */}
            <div className="block md:hidden -mt-72">
              <img
                src="/Images/2nd page/icon chain.png"
                alt="Timeline chain"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Tree Logo - Bottom Left */}
        <img
          src="/Images/Landing Page/CoA tree.png"
          alt="Children of Adam tree"
          className="absolute bottom-6 left-6 w-20 md:w-28 pointer-events-none z-10"
        />
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
          className={`relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] transition-all duration-1000 delay-300 ${
            visibleSections.has('checkup-image') 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          {/* Image */}
          <img
            src="/Images/2nd page/checkup image.png"
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
            {/* Large 450+ Number with Left and Right Text on Same Line */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              {/* Left Text with Bar */}
              <div className="flex-1 text-left max-w-md">
                <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed mb-2">
                  450 + Students are currently enrolled in 6 Children of Adam's Informal Schools in Karachi and Islamabad.
                </p>
                {/* Purple Bar - Under left text only */}
                <div className="h-2 max-w-md" style={{ backgroundColor: '#9E71BA' }}></div>
              </div>

              {/* Large 450+ Number - Center */}
              <div 
                data-animate-id="450-number"
                className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
                  visibleSections.has('450-number') 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-90'
                }`}
              >
                <h3 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none" style={{ color: '#9E71BA', opacity: 0.6 }}>
                  450+
                </h3>
              </div>

              {/* Right Text with Bar */}
              <div className="flex-1 text-left max-w-md">
                <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed mb-2">
                  By offering education where it's needed most, we're breaking cycles of poverty and creating opportunities that last a lifetime.
                </p>
                {/* Purple Bar - right text only */}
                <div className="h-2 max-w-md" style={{ backgroundColor: '#9E71BA' }}></div>
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
        className="relative px-4 py-16 md:py-24 min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] pb-32 md:pb-40 lg:pb-48"
        style={{
          background: '#FEFEFE',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="relative mx-auto max-w-7xl z-10">
          {/* Top Section - Education Label and Headline */}
          <div className="mb-8 md:mb-12">
            {/* Education Label - Top Left */}
            <div className="mb-4">
              <p className="text-lg md:text-xl font-medium" style={{ color: '#9E71BA' }}>Education</p>
            </div>
            
            {/* Headline - Centered */}
            <div 
              data-animate-id="dream-headline"
              className={`text-center transition-all duration-1000 ${
                visibleSections.has('dream-headline') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: '#9E71BA' }}>
                Be the reason a child learns to dream
              </h2>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mb-12 md:mb-16">
            <button 
              className="text-white font-medium px-8 py-4 md:px-10 md:py-5 rounded-lg text-lg md:text-xl transition-colors" 
              style={{ backgroundColor: '#FF6B35' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} 
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              onClick={() => navigate('/donate')}
            >
              Give the gift of learning today.
            </button>
          </div>
        </div>

        {/* Kids Image - Bottom */}
        <div 
          data-animate-id="kids-image"
          className={`absolute bottom-0 left-0 right-0 w-full z-0 transition-all duration-1000 delay-500 ${
            visibleSections.has('kids-image') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          <img
            src="/Images/2nd page/kids.png"
            alt="Children with graduation caps and certificates"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tree Logo - Bottom Left */}
        <img
          src="/Images/Landing Page/CoA tree.png"
          alt="Children of Adam tree"
          className="absolute bottom-6 left-6 w-20 md:w-28 pointer-events-none z-20"
        />
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;

