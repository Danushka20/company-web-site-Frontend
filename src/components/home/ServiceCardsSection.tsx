import React from 'react';
import { services } from '../../data/homeData';

const ServiceCardsSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-[#e9ebef] px-6 pb-[72px] pt-16 max-md:px-5 max-md:pb-[56px] max-md:pt-12 max-sm:px-4 max-sm:pb-12 max-sm:pt-9" id="services">
      <div
        className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-5 xl:grid-cols-4"
        role="list"
        aria-label="Service offerings"
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              className="rounded-[18px] border border-[#d8dce3] bg-[#f8f9fb] p-8 text-[#1e2a3c] shadow-[0_3px_12px_rgba(18,30,52,0.08)] max-md:p-6"
              key={service.title}
              role="listitem"
            >
              <div
                className="inline-flex h-[66px] w-[66px] items-center justify-center rounded-[14px] bg-[#e4eaf3] text-[#1d63f0]"
                aria-hidden="true"
              >
                <Icon size={30} strokeWidth={2.1} />
              </div>
              <h3 className="mb-[14px] mt-[18px] font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.45rem,1.8vw,2.05rem)] leading-[1.25] text-[#0a1526]">
                {service.title}
              </h3>
              <p className="m-0 text-[clamp(1.03rem,1.2vw,1.48rem)] leading-[1.55] text-[#354761]">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceCardsSection;
