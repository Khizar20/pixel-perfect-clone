import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    image: "/Images/Landing Page/info boxes1.png",
    title: "Bani Adam Neuropsychiatric",
    description: "Pakistan's first comprehensive neuropsychiatric facility, providing mental health care and rehabilitation services to underserved communities.",
    progress: 15,
    goal: "2.4B",
  },
  {
    image: "/Images/Landing Page/info boxes2.png",
    title: "Informal School Education",
    description: "Pakistan's first comprehensive neuropsychiatric facility, providing mental health care and rehabilitation services to underserved communities.",
    progress: 73,
    goal: "1.5M",
  },
  {
    image: "/Images/Landing Page/info boxes3.png",
    title: "Qutrah - Clean Water Initiative",
    description: "Addressing Pakistan's water crisis by providing clean, safe drinking water to rural communities through sustainable well systems.",
    progress: 100,
    goal: "500K",
  },
];

const getProjectLink = (title: string) => {
  if (title.toLowerCase().includes("bani adam")) {
    return "/our-work#bani-adam";
  }
  if (title.toLowerCase().includes("informal school")) {
    return "/our-work#informal-schools";
  }
  if (title.toLowerCase().includes("qutrah")) {
    return "/our-work";
  }
  return "/our-work";
};

const MissionAtWork = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!cardsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCardsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#CBDBE7] px-4 py-20">
      {/* Tree Icon - Bottom Left */}
      <img
        src="/Images/Landing Page/CoA tree.png"
        alt="Children of Adam tree"
        className="pointer-events-none absolute bottom-6 left-6 w-20 md:w-28"
      />

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 ${
            headerVisible ? "animate-fade-in" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Our Mission at Work
          </h2>
          <p className="text-foreground/80 text-base md:text-lg max-w-3xl mx-auto">
            Every project represents lives transformed. See how your support creates lasting
            change in healthcare, water access, and emergency relief across Pakistan.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl bg-[#FFFEEF] shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
                cardsVisible
                  ? "animate-card-pop"
                  : "opacity-0 translate-y-5 scale-[0.98]"
              }`}
              style={cardsVisible ? { animationDelay: `${index * 120}ms` } : {}}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Progress Section */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-foreground/60">Progress</span>
                    <span className="text-xs font-medium text-foreground/60">
                      {project.progress}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs text-foreground/60">
                      Goal: {project.goal}
                    </span>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    className="w-60 rounded-full bg-white/80 px-6 py-2 text-sm font-semibold text-foreground shadow hover:bg-white"
                    onClick={() => {
                      const link = getProjectLink(project.title);
                      // Navigate with hash - OurWork page will handle smooth scrolling
                      navigate(link);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAtWork;
