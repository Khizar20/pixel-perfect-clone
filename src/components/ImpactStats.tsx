import { Droplet, GraduationCap, Home, Users } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useEffect, useRef } from "react";

const StatItem = ({
  icon: Icon,
  endValue,
  suffix,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  endValue: number;
  suffix: string;
  label: string;
}) => {
  const { displayValue, elementRef } = useCountUp(endValue, suffix, {
    duration: 2000,
    startOnView: true,
  });

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 md:h-20 md:w-20">
        <Icon className="h-7 w-7 text-[#4f5d2f] md:h-8 md:w-8" />
      </div>
      <div>
        <p className="text-3xl font-semibold md:text-4xl">{displayValue}</p>
        <p className="text-base text-black/80 md:text-lg">{label}</p>
      </div>
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f3] px-4 py-24">
      {/* Swirl image */}
      <img
        src="/Images/Landing Page/bg swirl.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* CoA tree */}
      <img
        src="/Images/Landing Page/CoA tree.png"
        alt="Children of Adam tree"
        className="pointer-events-none absolute bottom-6 left-6 z-10 w-20 md:w-28"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 md:gap-20">
        <div className="space-y-6 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-black md:text-5xl">Creating Lasting Impact</h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-black/80 md:text-lg">
            Every donation creates a ripple effect of positive change. Here's how your generosity transforms lives
            across Pakistan.
          </p>
        </div>

        <div className="grid w-full gap-6 rounded-3xl bg-[#a5cf6f] p-8 text-black lg:w-1/2 lg:grid-cols-2 lg:self-start lg:mr-auto">
          <StatItem icon={Users} endValue={50000} suffix="+" label="Lives Impacted" />
          <StatItem icon={Droplet} endValue={11} suffix="" label="Water Filtration Plants" />
          <StatItem icon={Home} endValue={2500} suffix="+" label="Families Supported" />
          <StatItem icon={GraduationCap} endValue={450} suffix="+" label="Students Enrolled" />
        </div>
      </div>

      {/* People overlay image */}
      <img
        src="/Images/Landing Page/people cut out1.png"
        alt="Beneficiaries"
        className="pointer-events-none absolute bottom-24 right-[-15%] z-10 hidden w-[92%] max-w-6xl lg:block"
      />
    </section>
  );
};

export default ImpactStats;

