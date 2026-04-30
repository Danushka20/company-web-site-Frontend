import React from 'react';
import { responseFeatures } from '../../data/homeData';

const ResponseNetworkSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[70px] pt-[52px] max-md:px-5 max-md:pb-[56px] max-md:pt-10 max-sm:px-4 max-sm:pb-11 max-sm:pt-[34px]" aria-label="Intelligent Response Network">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="text-center">
          <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.06] tracking-[0.01em] text-[#0f1d31]">
            INTELLIGENT RESPONSE
            <span className="block text-[#2f66ea]">NETWORK</span>
          </h2>
          <p className="mx-auto mt-[26px] w-full max-w-[860px] text-[clamp(1rem,1.9vw,2rem)] leading-[1.52] text-[#374d68] max-sm:mt-[18px] max-sm:leading-[1.46]">
            Transform standalone systems into a connected digital workflow. We design solutions
            that improve system visibility, simplify communication, and help teams respond faster
            to operational events.
          </p>
        </div>

        <div
          className="mt-14 grid grid-cols-4 gap-[22px] max-md:mt-[42px] max-md:grid-cols-2 max-md:gap-x-[18px] max-md:gap-y-7 max-sm:mt-[30px] max-sm:grid-cols-1 max-sm:gap-[22px]"
          role="list"
          aria-label="Response network features"
        >
          {responseFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="text-center text-[#12233a]" key={feature.title} role="listitem">
                <div
                  className="mx-auto inline-flex h-[54px] w-[54px] items-center justify-center rounded-xl bg-[#e2e9f4] text-[#2762ed]"
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={2.1} />
                </div>
                <h3 className="mt-4 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.05rem,1.35vw,1.65rem)] leading-[1.3]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[clamp(0.98rem,1.04vw,1.15rem)] leading-[1.5] text-[#405672]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResponseNetworkSection;
