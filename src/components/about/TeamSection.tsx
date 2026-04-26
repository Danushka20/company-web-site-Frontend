import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto mt-20 grid w-full max-w-[1080px] grid-cols-1 items-center gap-8 pb-20 sm:mt-24 sm:gap-10 sm:pb-24 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="text-[clamp(2.4rem,4.5vw,4.9rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-[#070a12]">
            Our Minds
            <span className="block">Architecting the</span>
            <span className="block text-[#255ddf]">Future</span>
          </h2>

          <p className="mt-8 max-w-[620px] text-[clamp(1.06rem,1.14vw,1.28rem)] leading-[1.7] text-[#2f435c]">
            Our diverse team of engineers and industry specialists is united by a single mission:
            to render the impossible, inevitable. We combine deep domain expertise with advanced
            software and intelligent technologies to solve complex industrial challenges.
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
      </section>
    </div>
  );
};

export default TeamSection;
