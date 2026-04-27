import React from "react";
import { Briefcase, Users, Trophy, Zap } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "50+ Projects",
      description:
        "Successfully delivered across software, electronics, and IoT domains.",
    },
    {
      icon: Users,
      title: "100+ Team Members",
      description:
        "Talented engineers and specialists committed to excellence.",
    },
    {
      icon: Trophy,
      title: "10+ Awards",
      description: "Recognition for innovation and industry leadership.",
    },
    {
      icon: Zap,
      title: "5+ Countries",
      description: "Global presence with local expertise in key markets.",
    },
  ];

  return (
    <section className="mx-auto mt-20 w-full max-w-[1080px] pb-20 sm:mt-24 sm:pb-24">
      <div className="text-center">
        <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
          OUR EXPERIENCE
        </h2>
        <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
          Proven Track Record of Success
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 md:gap-7">
        {experiences.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-100 bg-gradient-to-br from-[#f7f8fb] via-[#f5f8ff] to-[#f0f4ff] px-7 py-8 text-center shadow-[0_1px_4px_rgba(20,35,58,0.08)] transition-all duration-300 hover:border-[#2a5edf]/40 hover:shadow-[0_8px_20px_rgba(42,94,223,0.15)] sm:px-8 sm:py-9"
            >
              <div className="flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-[#2a5edf] to-[#1f4ab8] p-4 text-white shadow-[0_4px_12px_rgba(42,94,223,0.3)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
              </div>
              <h3 className="mt-5 text-[clamp(1.5rem,2vw,2.1rem)] font-semibold text-[#0a1323]">
                {item.title}
              </h3>
              <p className="mt-3 text-[clamp(0.95rem,1vw,1.1rem)] leading-relaxed text-[#2f435c]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
