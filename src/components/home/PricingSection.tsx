import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { pricingPlans } from '../../data/homeData';

const PricingSection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-[#e7eaef] px-6 pb-[72px] pt-[54px] max-md:px-5 max-md:pb-[60px] max-md:pt-[42px] max-sm:px-4 max-sm:pb-[46px] max-sm:pt-[34px]" aria-label="Pricing plans">
      <div className="mx-auto w-full max-w-[1080px]">
        <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,3.7vw,3.55rem)] leading-[1.08] text-[#0b192d]">
          Ready to scale your factory?
        </h2>

        <div
          className="mt-9 grid grid-cols-4 gap-[18px] max-md:grid-cols-2 max-md:gap-4 max-sm:mt-[26px] max-sm:grid-cols-1 max-sm:gap-3"
          role="list"
          aria-label="Subscription plans"
        >
          {pricingPlans.map((plan) => (
            <article
              className={`relative rounded-[14px] border bg-[#f2f4f7] px-[18px] pb-5 pt-5 text-[#0f2138] max-sm:px-[14px] max-sm:pb-4 max-sm:pt-[18px] ${
                plan.highlighted ? 'border-[#2c64e9]' : 'border-[#d7dbe2]'
              }`}
              key={plan.name}
              role="listitem"
            >
              {plan.highlighted && (
                <span className="absolute -top-[9px] left-1/2 -translate-x-1/2 rounded-full bg-[#2e65e9] px-2.5 py-[3px] text-[0.67rem] leading-none text-white">
                  Recommended
                </span>
              )}

              <p className="m-0 text-[1.75rem] leading-[1.2] text-[#0d1b2f]">{plan.name}</p>
              <p className="mt-2 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.85rem,2.7vw,3.1rem)] leading-[1.05] text-[#2b64e9]">
                {plan.price}
              </p>
              <p className="mt-0.5 text-[0.9rem] text-[#425973]">{plan.cadence}</p>
              <p className="mt-[14px] text-base text-[#0d1b2f]">{plan.summary}</p>

              <ul className="mt-[14px] grid list-none gap-2 p-0" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-1.5 text-[0.88rem] leading-[1.35] text-[#2f4966]" key={feature}>
                    <CheckCircle2 size={14} strokeWidth={2.3} aria-hidden="true" className="shrink-0 text-[#13b85f]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                className="mt-5 inline-flex min-h-[42px] w-full items-center justify-center rounded-full bg-[#2e64e8] text-[0.92rem] font-semibold text-white no-underline"
                href="#contact"
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
