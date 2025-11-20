import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import treeIcon from "@/assets/tree-icon.png";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";

const slides = [
  {
    image: slide1,
    title: "Building a healthier, more hopeful future for Pakistan",
    buttonText: "LEARN ABOUT LIVES CHANGED",
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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-2">
            Explore How We
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Enlighten, Engage, and Empower.
          </h3>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel container */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] bg-muted">
            {/* Slides */}
            <div className="relative w-full h-full">
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
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Tree Icon - Bottom Left */}
            <div className="absolute bottom-8 left-8 z-20">
              <img src={treeIcon} alt="Tree icon" className="w-16 h-16 md:w-20 md:h-20" />
            </div>

            {/* Card Overlay - Bottom Right */}
            <div className="absolute bottom-8 right-8 z-20 bg-white rounded-2xl p-6 max-w-md shadow-xl">
              <p className="text-foreground text-lg font-medium mb-4">
                {slides[currentSlide].title}
              </p>
              <button className="text-sm font-semibold underline text-foreground hover:text-primary transition-colors">
                {slides[currentSlide].buttonText}
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 hover:bg-gray-100 transition-colors shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
