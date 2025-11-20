import treeIcon from "@/assets/tree-icon.png";
import hospitalProject from "@/assets/hospital-project.jpg";
import educationProject from "@/assets/education-project.jpg";
import waterProject from "@/assets/water-project.jpg";

const projects = [
  {
    image: hospitalProject,
    title: "Bani Adam Neuropsychiatric Hospital",
    description: "Pakistan's first comprehensive neuropsychiatric facility, providing mental health care and rehabilitation services to underserved communities.",
    progress: 30,
    goal: "2.4B",
  },
  {
    image: educationProject,
    title: "Informal School Education",
    description: "Pakistan's first comprehensive neuropsychiatric facility, providing mental health care and rehabilitation services to underserved communities.",
    progress: 73,
    goal: "1.5M",
  },
  {
    image: waterProject,
    title: "Qutrah - Clean Water Initiative",
    description: "Addressing Pakistan's water crisis by providing clean, safe drinking water to rural communities through sustainable well systems.",
    progress: 65,
    goal: "500K",
  },
];

const MissionAtWork = () => {
  return (
    <section className="relative py-20 px-4 bg-[hsl(210,40%,92%)]">
      {/* Tree Icon - Bottom Left */}
      <div className="absolute bottom-8 left-8">
        <img src={treeIcon} alt="Tree icon" className="w-16 h-16 md:w-20 md:h-20" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            Our Mission at Work
          </h2>
          <p className="text-foreground/80 text-base md:text-lg max-w-3xl mx-auto">
            Every project represents lives transformed. See how your support creates lasting
            change in healthcare, water access, and emergency relief across Pakistan.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
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
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors underline">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAtWork;
