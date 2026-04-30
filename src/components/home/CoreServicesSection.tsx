import React from 'react';
import { coreServices } from '../../data/homeData';

const CoreServicesSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-[#e9ebef] px-6 pb-[74px] pt-[26px] max-md:px-5 max-md:pb-[60px] max-md:pt-6 max-sm:px-4 max-sm:pb-11 max-sm:pt-[18px]" aria-label="Our Core Services">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="text-center text-[#132033]">
          <p className="m-0 text-[0.95rem] font-medium text-[#3269ef]">Our Core Services</p>
          <h2 className="mt-3 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02] tracking-[0.01em]">
            OUR CORE
            <span className="block text-[#2f66ea]">SERVICES</span>
          </h2>
          <p className="mx-auto mt-6 w-full max-w-[860px] text-[clamp(1rem,1.9vw,2rem)] leading-[1.5] text-[#465d78] max-sm:mt-[18px] max-sm:leading-[1.45]">
            Powering businesses with practical, future-ready technology by delivering reliable
            software, electronics, and IoT solutions tailored to real-world needs.
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-2 gap-[26px] max-md:grid-cols-1 max-md:gap-5 max-sm:mt-[30px]"
          role="list"
          aria-label="Core service cards"
        >
          {coreServices.map((service) => (
            <article
              className="rounded-2xl border border-[#d4dae2] bg-[#f5f7fa] px-7 pb-6 pt-[30px] text-[#1b2a3f] shadow-[0_2px_10px_rgba(15,33,57,0.06)] max-sm:px-5 max-sm:pb-5 max-sm:pt-6"
              key={service.title}
              role="listitem"
            >
              <h3 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.25rem,1.6vw,2rem)] leading-[1.25]">
                {service.title}
              </h3>
              <p className="mt-2 text-[clamp(0.96rem,1.1vw,1.26rem)] font-medium text-[#3870f1]">
                {service.subtitle}
              </p>
              <p className="mt-4 text-[clamp(1rem,1.15vw,1.3rem)] leading-[1.5] text-[#4a617c]">
                {service.description}
              </p>

              {service.tags && (
                <div className="mt-4 flex flex-wrap gap-2.5" aria-label={`${service.title} service features`}>
                  {service.tags.map((tag) => (
                    <span
                      className="inline-flex items-center justify-center rounded-full bg-[#e7eefb] px-[14px] py-2 text-[0.96rem] leading-none text-[#2e67e9]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
