import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mufti Mohammad Farhan, PhD.",
    role: "Trustee & Chairperson",
    image: "/Images/Our Team/1.png",
  },
  {
    id: 2,
    name: "Shahzad Sadan",
    role: "CEO and Trustee",
    image: "/Images/Our Team/2.png",
  },
  {
    id: 3,
    name: "Syed Tariq Ibrahim",
    role: "Trustee and President",
    image: "/Images/Our Team/3.png",
  },
  {
    id: 4,
    name: "Syed Wasim Quadri",
    role: "Trustee and Global Chief",
    image: "/Images/Our Team/4.png",
  },
  {
    id: 5,
    name: "Seemi Shahzad",
    role: "Trustee",
    image: "/Images/Our Team/5.png",
  },
  {
    id: 6,
    name: "Khadim H. Mughal",
    role: "Trustee",
    image: "/Images/Our Team/6.png",
  },
  {
    id: 7,
    name: "Dr. M. Toufique",
    role: "Director of Projects/Medical Services",
    image: "/Images/Our Team/7.png",
  },
  {
    id: 8,
    name: "Rashid Umer Siddiqui",
    role: "CFO",
    image: "/Images/Our Team/8.png",
  },
  {
    id: 9,
    name: "Dr. M. Akram Sultan",
    role: "Project Manager",
    image: "/Images/Our Team/9.png",
  },
  {
    id: 10,
    name: "Shahid Ahmad Vakil",
    role: "GM Operations",
    image: "/Images/Our Team/10.png",
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Spacer to show background color above section */}
      <div
        className="h-32 md:h-40 lg:h-48"
        style={{
          background: "#8EC046",
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px),
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 55%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 55%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
        }}
      ></div>

      {/* Our Team Section */}
      <section
        className="relative px-4 py-12 md:py-16 lg:py-20"
        style={{
          background: "#8EC046",
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px),
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 55%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 55%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
        }}
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-10 md:mb-14 text-center">
            Our Team
          </h1>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Avatar */}
                <div className="mb-4 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-32 w-32 rounded-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="text-center space-y-1 mb-4">
                  <p className="text-sm font-semibold text-black md:text-base">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-600 md:text-sm leading-snug">
                    {member.role}
                  </p>
                </div>

                {/* LinkedIn button */}
                <a
                  href="#"
                  className="mt-auto inline-flex items-center justify-center mt-3 md:mt-4"
                >
                  <img
                    src="/Images/Our Team/linkedin.png"
                    alt="LinkedIn"
                    className="h-7 w-7 md:h-8 md:w-8 object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;


