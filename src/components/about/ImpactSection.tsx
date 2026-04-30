import React from 'react';

const ImpactSection: React.FC = () => {
  return (
    <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto mt-20 w-full max-w-[1080px] pb-16 sm:mt-24 sm:pb-20">
        <div className="mx-auto w-full max-w-[760px]">
          <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
            Impact
          </h2>
          <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
            {`Awards & Sustainability`}
          </p>
          <p className="mt-6 text-[clamp(0.98rem,1.02vw,1.12rem)] leading-[1.8] text-[#2f435c]">
            At Sky Smart Technology, our engineering choices emphasize efficiency and longevity
            deploying energy-smart sensors, modular designs that extend device life, and secure
            software practices. These decisions help reduce operational waste and total cost of
            ownership for customers while enabling industrial operators to pursue stronger
            sustainability outcomes through better data visibility and optimized processes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ImpactSection;
