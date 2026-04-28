import React from "react";
import { bossProfile } from "../../data/aboutData";
import heroImage from "../../assets/hero.png";

const TeamSection: React.FC = () => {
  return (
    <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto mt-20 w-full max-w-[1080px] pb-20 sm:mt-24 sm:pb-24">
        <div className="rounded-[28px] border border-[#dbe5f8] bg-gradient-to-br from-[#f8fbff] via-[#f5f8ff] to-[#edf3ff] p-5 shadow-[0_18px_50px_rgba(31,68,132,0.12)] sm:p-7 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
            <div className="relative overflow-hidden rounded-3xl border border-[#d3def7] bg-white shadow-[0_12px_30px_rgba(31,68,132,0.16)]">
              <img
                src={bossProfile.imageSrc}
                alt={bossProfile.imageAlt}
                className="block h-[360px] w-full object-cover sm:h-[420px] lg:h-[500px]"
                loading="lazy"
                onError={(event) => {
                  const target = event.currentTarget;
                  target.onerror = null;
                  target.src = heroImage;
                }}
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071429] via-[#071429d1] to-transparent px-5 pb-5 pt-10 text-white sm:px-6 sm:pb-6">
                <p className="m-0 text-sm uppercase tracking-[0.16em] text-[#a9c8ff]">
                  Leadership
                </p>
                <h3 className="mt-2 text-[clamp(1.25rem,2vw,1.7rem)] font-semibold leading-[1.2]">
                  {bossProfile.name}
                </h3>
                <p className="mt-2 text-sm text-[#d6e6ff] sm:text-[0.95rem]">
                  {bossProfile.role}
                </p>
              </div>
            </div>

            <div>
              <p className="inline-flex items-center rounded-full border border-[#c7d8fb] bg-white/70 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#2a63d5]">
                About Our Leader
              </p>

              <h2 className="mt-5 text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-[#0d1f3d]">
                Vision Behind
                <span className="block text-[#255ddf]">Our Organization</span>
              </h2>

              <p className="mt-6 text-[clamp(1rem,1.1vw,1.14rem)] leading-[1.9] text-[#2f435c]">
                {bossProfile.description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 bg-white sm:mt-20">
          <div className="mx-auto w-full max-w-[1080px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-[clamp(2.2rem,4.2vw,4.2rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-[#070a12]">
                  Our Minds
                  <span className="block">Architecting the</span>
                  <span className="block text-[#255ddf]">Future</span>
                </h2>

                <p className="mt-8 max-w-[620px] text-[clamp(1.03rem,1.1vw,1.2rem)] leading-[1.75] text-[#2f435c]">
                  Our diverse team of engineers and industry specialists is
                  united by a single mission: to render the impossible,
                  inevitable. We combine deep domain expertise with advanced
                  software and intelligent technologies to solve complex
                  industrial challenges.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-[0_10px_26px_rgba(20,35,58,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Engineering team collaborating around a table"
                  className="block h-[240px] w-full object-cover sm:h-[320px] lg:h-[390px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
