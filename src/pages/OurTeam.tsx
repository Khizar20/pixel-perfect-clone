import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    name: "Khadim H. Mughal",
    role: "Trustee",
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
    name: "Shahzad Sadan",
    role: "CEO",
    image: "/Images/Our Team/6.png",
  },
  {
    id: 7,
    name: "Air Marshal Mirza Zafar Hussain (Retd.)",
    role: "Consultant",
    image: "/Images/Our Team/8.png",
  },
  {
    id: 8,
    name: "Me. Shariq Ahmed",
    role: "GM Operations South",
    image: "/Images/Our Team/7.png",
  },
  {
    id: 9,
    name: "Dr. M. Toufique",
    role: "Director of Projects/Medical Services",
    image: "/Images/Our Team/9.png",
  },
  {
    id: 10,
    name: "Shahid Ahmad Vakil",
    role: "GM Operations North",
    image: "/Images/Our Team/10.png",
  },
  {
    id: 12,
    name: "Akhtiar Ali",
    role: "Finance Manager",
    image: "/Images/Our Team/12.png",
  },
  {
    id: 13,
    name: "Shah Taha Sohail",
    role: "Manager Administration and Logistics",
    image: "/Images/Our Team/13.png",
  },
  {
    id: 14,
    name: "Shazia Raza",
    role: "Project Manager (AALTP)",
    image: "/Images/Our Team/14.png",
  },
  {
    id: 15,
    name: "M. Mashhood Saleem",
    role: "Administration Coordinator",
    image: "/Images/Our Team/15.png",
  }

];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  // Member details data
  const memberDetails: Record<number, { name: string; role: string; image: string; description: string; email?: string }> = {
    2: {
      name: "Khadim Hussain Mughal",
      role: "Trustee",
      image: "/Images/Our Team/2.png",
      description: "Khadim Hussain Mughal is a pioneering telecommunications engineer with over 25 years of management experience at Carrier Telecom Company (CTI), a joint venture between Siemens, Germany, and Pakistan Telecommunication Company (PTCL). After retiring, he transitioned to working as a telecommunications consultant and has since dedicated his efforts to honorary roles with various NGOs and trusts. His extensive industry knowledge and commitment to community service reflect his dedication to making a meaningful contribution in his post-retirement phase."
    },
    3: {
      name: "Syed Tariq Ibrahim",
      role: "Trustee & President",
      image: "/Images/Our Team/3.png",
      description: "Dr. Syed Tariq Ibrahim earned his M.B.B.S. from Dow Medical College in Pakistan and holds prestigious certifications as a Diplomat of the American Board of Psychiatry and Neurology, and the American Board of Internal Medicine. He currently serves as the Chief Medical Officer at CoA Neuro Psychiatric Hospital. With extensive experience as a Medical Director and Attending Psychiatrist across various hospitals in the eastern United States, Dr. Ibrahim is deeply committed to mental health and psychiatry. At Children of Adam, he leads health and wellness initiatives and oversees youth counseling and mentorship programs, bringing his expertise and passion to the forefront of the organization's efforts.",
      email: "s.tariq.ibrahim.md@gmail.com"
    },
    4: {
      name: "Syed Wasim Quadri",
      role: "Trustee & Global Chief",
      image: "/Images/Our Team/4.png",
      description: "Br. Quadri attended Wagner and later, Baruch College, both in New York City, earning his Bachelor's degree in Accounting. He has over 3 decades of experience in consulting in finance. As the Treasurer at Children of Adam, Br. Quadri’s expertise allows CoA to maintain excellent financial management with exceptional allocation of donor funds and resource allocation, ensuring the greatest beneficiary impact and long-term success of the organization.",
      email: "syed.quadri@childrenofadam.us"
    },
    5: {
      name: "Seemi Shahzad",
      role: "Trustee",
      image: "/Images/Our Team/5.png",
      description: "Seemi Shahzad holds a degree in Arts and has been actively involved in charitable work since 1986. Despite not having formal employment experience, she has made significant contributions in an honorary capacity to various charitable institutions. Her involvement includes organizing fundraisers and participating in community support activities, showcasing her commitment to philanthropy and community service.",
      email: "seemi.shahzad@childrenofadam.pk"
    },
    6: {
      name: "Shahzad Sadan",
      role: "CEO and Trustee",
      image: "/Images/Our Team/6.png",
      description: "Shahzad Sadan is the CEO and Trustee with over 35 years of diverse experience across multinational corporations, public sector, and private sector companies in Pakistan and the GCC region. He has held senior positions such as President &amp; CEO, MD, Executive Director, and VP/GM, and has been on the board of various organizations. Known for his strategic leadership, he has been pivotal in establishing new companies, restructuring complex organizations, and driving strategic business planning and turnaround methodologies. Among his many accolades, he has received the Government of Pakistan’s Excellence Award, presented by the President of Pakistan, and the Indira Gandhi Global Achievers Award from the Government of India.",
      email: "shahzad.sadan@childrenofadam.pk"
    },
    7: {
      name: "Air Marshal Mirza Zafar Hussain (Retd.), HI(M), SBt",
      role: "Consultant",
      image: "/Images/Our Team/8.png",
      description: "Air Marshal Mirza Zafar Hussain (Retd.), 64, is a highly distinguished Pakistan Air Force officer known for his leadership, operational excellence, and strategic vision. With Master’s degrees in Strategic and War Studies, he served as Directing Staff at the Air War College, represented Pakistan internationally as an Instructor Pilot and at the Royal Saudi Air Force Headquarters, and held key positions including Deputy Chief of Air Staff Administration and Director General Logistics at Joint Staff Headquarters. After the 2005 earthquake, he established and led the Relief Coordination Centre at Islamabad Airport, managing one of the region’s largest and most commended aid operations. Post retirement, he has remained active as a lecturer and guest speaker on leadership, decision making, and Pakistan’s future, and as Chancellor of KIET he strengthened academic standards, student development, research culture, and industry collaboration while advocating for national education reform.",
      email: "mirza.zafar.hussain@childrenofadam.pk"
    },
    8: {
      name: "Mr. Shariq Ahmed",
      role: "GM Operations South",
      image: "/Images/Our Team/7.png",
      description: "Mr. Shariq Ahmed is a seasoned public service professional with over thirty years of leadership experience in key Government of Sindh departments, including roles as Secretary Law, Social Welfare, Labour and HR, and Works and Services. He brings strong expertise in public administration, labour rights, judicial affairs, HR development, and large scale social initiatives, along with a deep understanding of government systems. He has advanced reforms for marginalised communities, strengthened provincial and national coordination, and led major Karachi mass transit and infrastructure projects such as the Red Line and Yellow Line. His work with UNICEF, UNESCAP, World Bank, IMF, and ADB reflects his ability to align global resources with local development needs. With academic qualifications in Business Administration, English, and Law, and currently pursuing a PhD, he is recognised for his patience, solutions oriented leadership, and commitment to improved governance and sustainable socio economic progress."
    },
    9: {
      name: "Dr. M. Toufique",
      role: "Director of Projects/Medical Services",
      image: "/Images/Our Team/9.png",
      description: "Dr. Mohammad Toufique is a distinguished Consultant Orthopedic Surgeon with over 40 years of extensive experience in healthcare and hospital administration. He began his career at Services Hospital, where he advanced to the roles of Medical Superintendent and Civil Surgeon. Dr. Toufique has also served as Director General of Health Services, showcasing his leadership in the public health sector. In his role at Children of Adam, Dr. Toufique leads the organization’s medical services and project initiatives, driving the development of innovative healthcare programs and ensuring the delivery of high-quality services to underserved populations.",
      email: "toufique@childrenofadam.pk"
    },
    10: {
      name: "Shahid Ahmad Vakil",
      role: "GM Operations North",
      image: "/Images/Our Team/10.png",
      description: "With over 35 years of distinguished service in the Government of Pakistan, Mr. Shahid Ahmed Vakil retired as Deputy Secretary from the Economic Affairs Division. He played a pivotal role in overseeing ADB policy matters, particularly in areas such as energy, water, infrastructure, and social protection. Mr. Shahid Ahmed Vakil is responsible for coordinating with key government sectors to secure necessary approvals and managing significant projects related to social and economic development. He plays a vital role in overseeing various initiatives aimed at improving infrastructure and public welfare, as well as ensuring the smooth operation of organizational affairs. Additionally, he supports leadership in strategic decision-making and represents the organization in important meetings and negotiations.  At Children of Adam, he oversees the different projects we carry out.",
      email: "shahid.vakli@childrenofadam.pk"
    },
    12: {
      name: "Akhtiar Ali",
      role: "Finance Manager",
      image: "/Images/Our Team/12.png",
      description: "Akhtiar Ali is a dedicated finance and audit professional with over ten years of experience across healthcare, government, international non profits, and manufacturing. He brings strong expertise in financial management, audit compliance, budgeting, procurement oversight, financial analysis, and taxation, supported by a solid command of ERP financial systems and Microsoft Office that helps streamline reporting and strengthen internal controls. He has led finance departments in major healthcare institutions, ensuring accurate financial statements, effective cash flow management, and full regulatory and donor compliance, while also managing assets, developing SOPs, mentoring teams, and conducting internal audits to improve governance. With an MBA in Finance and a results driven approach, he combines analytical thinking with adaptability and collaboration, consistently supporting transparent financial practices and long term organizational growth."    
    },
    13: {
      name: "Shah Taha Sohail",
      role: "Manager Administration and Logistics",
      image: "/Images/Our Team/13.png",
      description: "Shah Taha Sohail is a Geophysicist by qualification and a Project Management Professional with expertise in Projects and Administration he has experience in various sectors including consultancies, energy, construction and development sector. Taha looks over office administration as well as the logistics at Children of Adam.",
      email: "shah.taha.sohail@childrenofadam.pk"
    },
    14: {
      name: "Shazia Raza",
      role: "Project Manager (AALTP)",
      image: "/Images/Our Team/14.png",
      description: "Having over 12 years of work experience , she began her career in the health sector, working for various labs,like Hussaini Blood Bank, Dr. Essa Laboratory & Diagnostics Centre and Roche Diagnostics Pakistan in Capacity of senior roles in Medical Department. At Children of Adam she is responsible for AALTP Project Management , coordination with Sindh Education Foundation Management for seamless execution of the project throughout the period.",
      email: "shazia.raza@childrenofadam.pk"
    },
    15: {
      name: "M. Mashhood Saleem",
      role: "Administration Coordinator",
      image: "/Images/Our Team/15.png",
      description: "With 10 years of experience in administration and procurement, including 7 years in the development sector, Muhammad Mashhood Saleem brings a wealth of expertise to our team. He has led the administration department at Charter for Compassion Pakistan and served as the procurement head in other esteemed organizations. His portfolio also includes managing the administration of AALTP and EMO Schools, as well as overseeing vocational training projects for GIZ and the British Asian Trust. During his tenure, he developed procurement, travel, and other operational policies and mechanisms that were successfully implemented and followed. His strong leadership skills and in-depth knowledge of administrative processes make him a valuable asset to the organization. At Children of Adam, His focus is on inventory management, developing policies and mechanisms, and overseeing key administrative and HR tasks to ensure smooth organizational operations.",
      email: "mashhood.saleem@childrenofadam.pk"
    }
  };

  return (
    <div className="min-h-screen relative" style={{ background: "#9EC961" }}>
      <Navbar />

      <section
        className="relative px-4 pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20"
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-10 md:mb-14 text-center">
            Our Team
          </h1>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 items-stretch">
            {teamMembers.map((member, index) => {
              const hasDetails = memberDetails[member.id];
              
              const cardContent = (
                <div className="flex flex-col items-center h-full rounded-2xl bg-white px-6 py-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  {/* Avatar */}
                  <div className="mb-4 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-32 w-32 rounded-full object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <div className="text-center space-y-1 mb-4 flex-1">
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
                    className="mt-auto inline-flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src="/Images/Our Team/linkedin.png"
                      alt="LinkedIn"
                      className="h-7 w-7 md:h-8 md:w-8 object-contain"
                    />
                  </a>
                </div>
              );

              if (hasDetails) {
                return (
                  <Dialog key={member.id} open={selectedMember === member.id} onOpenChange={(open) => setSelectedMember(open ? member.id : null)}>
                    <DialogTrigger asChild>
                      {cardContent}
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] p-6 md:p-8 bg-white overflow-auto">
                      <div className="flex flex-col gap-8 md:flex-row md:items-center">
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <div className="w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden">
                            <img
                              src={memberDetails[member.id].image}
                              alt={memberDetails[member.id].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 space-y-3 md:space-y-4">
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                              {memberDetails[member.id].name}
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg mt-1">
                              {memberDetails[member.id].role}
                            </p>
                          </div>
                          <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                            {memberDetails[member.id].description}
                          </p>
                          {memberDetails[member.id].email && (
                            <p className="text-gray-800 font-semibold text-sm md:text-base">
                              Email: {memberDetails[member.id].email}
                            </p>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              }

              return <div key={member.id}>{cardContent}</div>;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;
