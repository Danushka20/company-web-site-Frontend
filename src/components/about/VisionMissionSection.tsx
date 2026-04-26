import React from 'react';

const VisionMissionSection: React.FC = () => {
  return (
    <section className="mx-auto mt-20 w-full max-w-[1080px] pb-6 sm:mt-24">
      <h2 className="text-center text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-tight text-[#255ddf]">
        {`Vision & Mission`}
      </h2>

      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 md:gap-8">
        <article className="rounded-2xl border border-slate-100 bg-[#f7f8fb] px-7 py-8 shadow-[0_1px_4px_rgba(20,35,58,0.08)] sm:px-8 sm:py-9">
          <h3 className="text-[clamp(1.6rem,2.2vw,2.1rem)] font-semibold text-[#0a1323]">Our Vision</h3>
          <p className="mt-4 text-[clamp(1.2rem,1.5vw,1.7rem)] italic leading-relaxed text-[#1f5be5]">
            "Fulfill customer needs beyond expectations"
          </p>
          <p className="mt-5 text-[clamp(1rem,1.02vw,1.15rem)] leading-[1.8] text-[#2f435c]">
            We strive to anticipate and exceed customer requirements by delivering solutions that
            go above and beyond expectations. Through continuous innovation and close
            collaboration, we ensure every interaction creates value and builds lasting trust.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-100 bg-[#f7f8fb] px-7 py-8 shadow-[0_1px_4px_rgba(20,35,58,0.08)] sm:px-8 sm:py-9">
          <h3 className="text-[clamp(1.6rem,2.2vw,2.1rem)] font-semibold text-[#0a1323]">Our Mission</h3>
          <p className="mt-4 text-[clamp(1.2rem,1.5vw,1.7rem)] italic leading-relaxed text-[#1f5be5]">
            "To be the leading Electronics Research and Design Center in South Asia"
          </p>
          <p className="mt-5 text-[clamp(1rem,1.02vw,1.15rem)] leading-[1.8] text-[#2f435c]">
            We aim to lead South Asia in electronics research and design by delivering
            innovative, reliable, and high-quality solutions. Through cutting-edge technology and
            a passion for excellence, we strive to set new industry standards and drive regional
            progress.
          </p>
        </article>
      </div>
    </section>
  );
};

export default VisionMissionSection;
