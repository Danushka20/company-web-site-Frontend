import React from 'react';

const TechnologySection: React.FC = () => {
  return (
    <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto mt-20 w-full max-w-[1080px] pb-10 sm:mt-24">
        <div className="mx-auto w-full max-w-[760px]">
          <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
            Our Technology
          </h2>
          <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
            {`Core Technologies & Approach`}
          </p>
          <p className="mt-6 text-[clamp(0.98rem,1.02vw,1.12rem)] leading-[1.8] text-[#2f435c]">
            We design and deploy industrial-focused IoT ecosystems built for reliability and
            real-time performance: hardened edge devices, secure cloud connectivity, and
            production-oriented analytics. Our approach pairs efficient, low-latency telemetry with
            disciplined data governance so customers gain actionable insights, maintain operational
            security, and realize predictable returns on investment.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl shadow-[0_10px_26px_rgba(20,35,58,0.14)]">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
            alt="Engineering team working on industrial technology systems"
            className="block h-[230px] w-full object-cover sm:h-[300px] lg:h-[360px]"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default TechnologySection;
