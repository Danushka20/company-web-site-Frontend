import React from 'react';

const IntelligenceSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[82px] pt-9 max-md:px-5 max-md:pb-[62px] max-md:pt-[18px] max-sm:px-4 max-sm:pb-12 max-sm:pt-2" aria-label="Sky Smart Intelligence">
      <div className="mx-auto w-full max-w-[920px] text-center text-[#151e2d]">
        <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4.8vw,4.1rem)] font-bold leading-[1.05] tracking-[0.01em]">
          Sky Smart
          <span className="block text-[#2e62e7]">Intelligence</span>
        </h2>
        <p className="mx-auto mt-[30px] w-full max-w-[860px] text-[clamp(1rem,2.1vw,2rem)] leading-[1.55] text-[#32465f] max-sm:mt-5 max-sm:leading-[1.45]">
          Building smarter digital and electronic solutions through
          <br />
          Integrated software, IoT, and embedded system innovation.
        </p>
      </div>
    </section>
  );
};

export default IntelligenceSection;
