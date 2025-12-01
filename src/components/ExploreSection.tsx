import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";

type Slide = {
  image: string;
  title: string;
  buttonText: string;
  imageClass?: string;
  imageStyle?: React.CSSProperties;
};

const slides: Slide[] = [
  {
    image: "/Images/Landing Page/Holding CoA boxes.png",
    title: "Building a healthier, more hopeful future for Pakistan",
    buttonText: "LEARN ABOUT LIVES CHANGED",
    imageClass: "scale-[1.7] md:scale-[1.9]",
    imageStyle: { objectPosition: "center top" },
  },
  {
    image: slide2,
    title: "Empowering communities through humanitarian service",
    buttonText: "LEARN ABOUT LIVES CHANGED",
  },
  {
    image: slide3,
    title: "Enlightening minds through education and knowledge",
    buttonText: "LEARN ABOUT LIVES CHANGED",
  },
  {
    image: slide4,
    title: "Engaging hearts through wellness programs",
    buttonText: "LEARN ABOUT LIVES CHANGED",
  },
];

const ExploreSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-background px-4 py-20">
      {/* Tree icon bottom-left */}
      <img
        src="/Images/Landing Page/CoA tree.png"
        alt="Children of Adam tree"
        className="pointer-events-none absolute bottom-6 left-6 w-20 md:w-28"
      />
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-base font-light uppercase tracking-[0.2em] text-foreground/80 md:text-lg">
            Explore How We
          </p>
          <h3 className="text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Enlighten, Engage, and Empower.
          </h3>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-14 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-black/60 bg-white text-black transition hover:bg-black hover:text-white md:flex lg:-left-16"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-14 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-black/60 bg-white text-black transition hover:bg-black hover:text-white md:flex lg:-right-16"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Main carousel container */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/40 bg-muted shadow-xl">
            {/* Slides */}
            <div className="relative h-full w-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    style={slide.imageStyle}
                    className={`h-full w-full object-cover object-center transition-transform duration-500 ${slide.imageClass ?? ""}`}
                  />
                </div>
              ))}
            </div>

            {/* Card Overlay - Bottom Right */}
            <div className="absolute bottom-4 right-4 z-20 max-w-xs rounded-2xl bg-white/95 p-4 text-left shadow-lg backdrop-blur">
              <p className="mb-3 text-base font-medium text-foreground md:text-lg">
                {slides[currentSlide].title}
              </p>
              <button
                className="text-xs font-semibold uppercase tracking-wide text-primary underline underline-offset-2 transition hover:text-primary/80 md:text-sm"
                onClick={() => {
                  window.location.href = "/our-work";
                }}
              >
                {slides[currentSlide].buttonText}
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/60 md:hidden"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/60 md:hidden"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
