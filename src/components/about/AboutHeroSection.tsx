import React from "react";
import { House } from "lucide-react";

const AboutHeroSection: React.FC = () => {
  return (
    <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto w-full max-w-[1080px] pt-[106px] sm:pt-[122px] lg:pt-[130px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/75 px-5 py-2 text-sm tracking-[0.04em] text-[#4f627b]">
          <House size={14} strokeWidth={2.1} aria-hidden="true" />
          <span>MAIN</span>
          <span>-</span>
          <span className="font-medium text-[#255ddf]">ABOUT</span>
        </div>

        <div className="mx-auto mt-[112px] max-w-[900px] text-center sm:mt-[126px]">
          <h1 className="m-0 text-[clamp(2.4rem,5.5vw,5.05rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-[#070a12]">
            Bridging the
            <span className="mt-2 block text-[#255ddf]">{`Physical & Digital`}</span>
          </h1>

          <p className="mx-auto mt-10 max-w-[980px] text-[clamp(1.04rem,1.35vw,2rem)] leading-[1.62] text-[#314962]">
            Founded in 2006, Sky Smart Technology has emerged as a powerhouse in
            industrial automation and IoT research. We don't just build sensors;
            we build the nervous system of modern industry. Our mission is to
            transform raw factory floor data into actionable intelligence,
            scaling across South Asia and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-16 md:grid-cols-2 md:gap-6">
          <article className="rounded-2xl border border-blue-100 bg-blue-100/60 px-6 py-7 text-center text-[#1f5be5]">
            <p className="m-0 text-[clamp(2.1rem,3.7vw,3.15rem)] leading-none">
              2006
            </p>
            <p className="mt-3 text-[clamp(0.94rem,1vw,1.1rem)] text-[#2f435c]">
              Core Initialization
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-blue-100/60 px-6 py-7 text-center text-[#1f5be5]">
            <p className="m-0 text-[clamp(2.1rem,3.7vw,3.15rem)] leading-none">
              0K+
            </p>
            <p className="mt-3 text-[clamp(0.94rem,1vw,1.1rem)] text-[#2f435c]">
              Active Nodes
            </p>
          </article>
        </div>

        <p className="mt-14 text-center text-[clamp(1.1rem,1.5vw,2rem)] italic text-[#2f4968]">
          "Innovating the fabric of industrial connectivity"
        </p>
      </section>
    </div>
  );
};

export default AboutHeroSection;
