import React from 'react';
import { globalImpactStats } from '../../data/homeData';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

const GlobalImpactSection: React.FC = () => {
  const { sectionRef, animatedValues, getSuffix } = useCounterAnimation(globalImpactStats);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[70px] pt-[54px] max-md:px-5 max-md:pb-[60px] max-md:pt-[42px] max-sm:px-4 max-sm:pb-[46px] max-sm:pt-[34px]"
      aria-label="Global impact statistics"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-[#0f1d31]">
          GLOBAL
          <span className="block text-[#2e65e9]">IMPACT</span>
        </h2>

        <div
          className="mt-11 grid grid-cols-4 gap-[22px] max-md:mt-[34px] max-md:grid-cols-2 max-md:gap-[18px] max-sm:mt-7 max-sm:grid-cols-1 max-sm:gap-[14px]"
          role="list"
          aria-label="Global impact stats"
        >
          {globalImpactStats.map((item, index) => (
            <article
              className="rounded-2xl border border-[#d9dde4] bg-[#f2f4f7] px-[18px] pb-6 pt-[30px] text-center text-[#172740] shadow-[0_2px_10px_rgba(19,36,60,0.05)] max-sm:px-4 max-sm:pb-5 max-sm:pt-6"
              key={item.title}
              role="listitem"
            >
              <p className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2.4rem,4.2vw,4.4rem)] font-extrabold leading-none text-[#1f5de8]">
                {`${animatedValues[index]}${getSuffix(index)}`}
              </p>
              <h3 className="mt-[14px] text-[clamp(1.2rem,1.45vw,1.7rem)] leading-[1.25] text-[#0d1b2e]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[clamp(0.95rem,1vw,1.06rem)] leading-[1.45] text-[#3f5673]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;
