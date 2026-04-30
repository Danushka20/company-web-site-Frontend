import React from 'react';

const EcosystemSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[74px] pt-[56px] max-md:px-5 max-md:pb-[60px] max-md:pt-[42px] max-sm:px-4 max-sm:pb-[46px] max-sm:pt-[34px]" aria-label="Powering the world's smartest ecosystems">
      <div className="mx-auto grid w-full max-w-[1080px] grid-cols-2 items-center gap-[34px] max-md:grid-cols-1 max-md:gap-6">
        <div>
          <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.9rem)] leading-[1.12] text-[#0c1a2e]">
            Powering the world's
            <span className="block text-[#2b63e8]">smartest ecosystems</span>
          </h2>

          <p className="mt-5 max-w-[600px] text-[clamp(1rem,1.06vw,1.18rem)] leading-[1.52] text-[#3a516d] max-sm:mt-4">
            From industrial automation to smart city infrastructure, our integrated solutions
            connect devices, systems, and people in a seamless digital ecosystem. We deliver the
            technology backbone that powers intelligent operations worldwide.
          </p>
        </div>

        <div aria-hidden="true">
          <img
            className="block min-h-[300px] w-full rounded-[14px] object-cover shadow-[0_10px_28px_rgba(17,35,58,0.2)] max-sm:min-h-[220px]"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
