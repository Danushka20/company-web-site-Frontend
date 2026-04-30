import React from 'react';
import { deviceAccessFeatures } from '../../data/homeData';

const MultiDeviceSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-gradient-to-b from-[#e6eaf0] to-[#e2e7ee] px-6 pb-[78px] pt-[46px] max-md:px-5 max-md:pb-[62px] max-md:pt-[38px] max-sm:px-4 max-sm:pb-11 max-sm:pt-7" aria-label="Multi-device access features">
      <div className="mx-auto grid w-full max-w-[1080px] grid-cols-[1.05fr_0.95fr] items-center gap-[46px] max-md:grid-cols-1 max-md:gap-7">
        <div className="text-[#182840]">
          <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.7rem,2.8vw,3rem)] leading-[1.15] text-[#0d1a2d]">
            Multi-Device Access
            <span className="block">Mobile & Tablet Interfaces</span>
          </h2>

          <h3 className="mt-4 text-[clamp(1.4rem,2.25vw,2.35rem)] font-semibold leading-[1.28] text-[#235de8]">
            Your Intelligence Node
            <span className="block">Anywhere in the World</span>
          </h3>

          <p className="mt-5 max-w-[640px] text-[clamp(1rem,1.08vw,1.2rem)] leading-[1.55] text-[#3f5673] max-md:max-w-none">
            Sky Smart solutions go beyond a single device. Our web and mobile applications adapt
            seamlessly to phones and tablets, giving users secure access to system data and
            controls wherever they are.
          </p>

          <div
            className="mt-[26px] grid grid-cols-2 gap-x-[22px] gap-y-[18px] max-sm:grid-cols-1 max-sm:gap-3.5"
            role="list"
            aria-label="Device access benefits"
          >
            {deviceAccessFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="grid grid-cols-[auto_1fr] items-start gap-3" key={feature.title} role="listitem">
                  <div
                    className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dfe7f4] text-[#2462f0]"
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="m-0 text-[clamp(1rem,1.15vw,1.3rem)] leading-[1.3] text-[#0e1b2e]">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-[clamp(0.94rem,0.97vw,1.04rem)] leading-[1.4] text-[#3f5673]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <a
            className="mt-[26px] inline-block text-[1.04rem] text-[#5a708f] no-underline transition-colors duration-200 hover:text-[#2a63e7] max-sm:mt-5"
            href="#projects"
          >
            Preview Mobile Dashboard
          </a>
        </div>

        <div className="flex items-center justify-center gap-[14px] max-md:justify-start max-sm:justify-center max-sm:gap-2.5" aria-hidden="true">
          <div className="h-[min(366px,70vw)] w-[min(165px,32vw)] rounded-[22px] border-[6px] border-solid border-[#263247] bg-[#f8f9fb] p-[10px] shadow-[0_10px_26px_rgba(19,34,55,0.16)] max-sm:rounded-[18px] max-sm:border-[5px] max-sm:p-2">
            <img
              className="block h-full w-full rounded-[14px] object-cover max-sm:rounded-[10px]"
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=720&q=80"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="h-[min(366px,70vw)] w-[min(220px,41vw)] rounded-[22px] border-[6px] border-solid border-[#263247] bg-[#f8f9fb] p-[10px] shadow-[0_10px_26px_rgba(19,34,55,0.16)] max-sm:rounded-[18px] max-sm:border-[5px] max-sm:p-2">
            <img
              className="block h-full w-full rounded-[14px] object-cover max-sm:rounded-[10px]"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiDeviceSection;
