import React from 'react';
import { measurableOutcomes } from '../../data/homeData';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

const OutcomesSection: React.FC = () => {
  const { sectionRef, animatedValues, getSuffix } = useCounterAnimation(measurableOutcomes, {
    durationMs: 2200,
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] bg-gradient-to-b from-[#6fa7ee] to-[#5f99e7] px-6 pb-[68px] pt-[58px] max-md:px-5 max-md:pb-14 max-md:pt-11 max-sm:px-4 max-sm:pb-11 max-sm:pt-[34px]"
      aria-label="Numbers that speak louder than words"
    >
      <div className="mx-auto w-full max-w-[980px] text-center text-[#f7fbff]">
        <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.7rem)] leading-[1.08]">
          Numbers that speak
          <span className="block">louder than words.</span>
        </h2>

        <p className="mx-auto mt-4 w-full max-w-[760px] text-[clamp(1rem,1.06vw,1.18rem)] leading-[1.48] text-[rgba(245,250,255,0.95)] max-sm:mt-[14px]">
          We focus on measurable outcomes, ensuring our solutions deliver real value through
          efficiency, reliability, and thoughtful system design.
        </p>

        <a
          className="mt-[22px] inline-flex min-h-11 items-center justify-center rounded-full bg-[#f3f6fb] px-6 text-[0.94rem] font-semibold text-[#275ddf] no-underline max-sm:mt-[18px]"
          href="#projects"
        >
          View Case Studies
        </a>

        <div
          className="mt-[52px] grid grid-cols-4 gap-4 max-md:mt-9 max-md:grid-cols-2 max-md:gap-[18px] max-sm:mt-7 max-sm:grid-cols-1 max-sm:gap-4"
          role="list"
          aria-label="Measurable outcomes"
        >
          {measurableOutcomes.map((item, index) => (
            <article className="text-center" key={item.label} role="listitem">
              <p className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,3.3vw,3.5rem)] font-bold leading-none text-white">
                {`${animatedValues[index]}${getSuffix(index)}`}
              </p>
              <p className="mt-2.5 text-[clamp(0.9rem,0.98vw,1.03rem)] text-[rgba(244,249,255,0.95)]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
