import React from 'react';

const MilestonesSection: React.FC = () => {
  return (
    <section className="mx-auto mt-20 w-full max-w-[1080px] pb-14 sm:mt-24 sm:pb-16">
      <div className="mx-auto w-full max-w-[760px]">
        <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
          Milestones
        </h2>
        <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
          Our Journey
        </p>
        <p className="mt-6 text-[clamp(0.98rem,1.02vw,1.12rem)] leading-[1.8] text-[#2f435c]">
          Since 2015 we&apos;ve evolved from early electronics and prototype IoT solutions into a
          trusted partner for industrial automation and real-time monitoring. From initial field
          pilots and first commercial deployments through regional expansions, each milestone
          reflects measurable improvements in operational efficiency for our partners and frames
          how we scale practical automation and software projects.
        </p>
      </div>
    </section>
  );
};

export default MilestonesSection;
