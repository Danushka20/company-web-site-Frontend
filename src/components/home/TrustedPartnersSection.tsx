import React from 'react';
import { trustedPartners } from '../../data/homeData';

const TrustedPartnersSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[74px] pt-[58px] max-md:px-5 max-md:pb-[62px] max-md:pt-11 max-sm:px-4 max-sm:pb-[46px] max-sm:pt-9" aria-label="Trusted by industry leaders">
      <div className="mx-auto w-full max-w-[920px]">
        <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] text-[#0d1b2f]">
          TRUSTED BY
          <span className="block text-[#2e66e9]">INDUSTRY LEADERS</span>
        </h2>

        <p className="mx-auto mt-[22px] w-full max-w-[700px] text-center text-[clamp(1rem,1.08vw,1.18rem)] leading-[1.5] text-[#3b526e] max-sm:mt-4">
          Real-time operational feedback from global partners utilizing our proprietary neural
          optimization engine.
        </p>

        <div
          className="mt-[34px] grid grid-cols-4 gap-x-[18px] gap-y-[14px] max-md:grid-cols-2 max-sm:mt-6 max-sm:grid-cols-1 max-sm:gap-[10px]"
          role="list"
          aria-label="Partner organizations"
        >
          {trustedPartners.map((partner) => (
            <article
              className="flex min-h-[70px] items-center justify-center rounded-xl border border-[#d8dce3] bg-[#e3e5ea] text-[0.92rem] text-[#8193ad] max-sm:min-h-[62px]"
              key={partner}
              role="listitem"
            >
              {partner}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
