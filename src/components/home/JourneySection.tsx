import React from 'react';
import { journeyMilestones } from '../../data/homeData';

const JourneySection: React.FC = () => {
  return (
    <section className="relative z-[1] bg-[#e6e9ee] px-6 pb-[72px] pt-[58px] max-md:px-5 max-md:pb-[60px] max-md:pt-11 max-sm:px-4 max-sm:pb-[46px] max-sm:pt-9" aria-label="Our Journey">
      <div className="mx-auto w-full max-w-[1080px]">
        <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-[#2d67ea]">
          OUR JOURNEY
        </h2>

        <div className="mt-[34px] grid gap-6 max-sm:mt-[26px] max-sm:gap-4" role="list" aria-label="Company milestones">
          {journeyMilestones.map((item) => (
            <article
              className="grid grid-cols-[132px_1fr] items-start gap-[14px] max-md:grid-cols-[104px_1fr] max-md:gap-2.5 max-sm:grid-cols-1 max-sm:gap-1.5"
              key={`${item.year}-${item.title}`}
              role="listitem"
            >
              <div className="pt-1 text-right max-sm:pt-0 max-sm:text-left">
                <p className="m-0 text-[clamp(1.55rem,2vw,2rem)] font-medium leading-[1.1] text-[#2e66e9]">
                  {item.year}
                </p>
                {item.note && (
                  <p className="mt-2 mb-0 max-sm:mt-1">
                    {item.note.split('\n').map((line) => (
                      <span
                        className="block text-[0.62rem] leading-[1.25] tracking-[0.02em] text-[#2c7f4f]"
                        key={line}
                      >
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              <div className="rounded-[14px] border border-[#d6dae1] bg-[#f1f3f6] px-[18px] pb-4 pt-[18px] shadow-[0_2px_8px_rgba(21,37,60,0.05)] max-sm:px-[14px] max-sm:pb-[14px] max-sm:pt-4">
                <h3 className="m-0 text-[clamp(1.25rem,1.5vw,1.72rem)] leading-[1.24] text-[#0f1d32]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[clamp(0.95rem,1vw,1.03rem)] leading-[1.45] text-[#3d5470]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
