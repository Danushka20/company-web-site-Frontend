import React from 'react';
import { serviceStats } from '../../data/servicesData';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

interface ServiceStatsSectionProps {
  title?: string;
  subtitle?: string;
}

const ServiceStatsSection: React.FC<ServiceStatsSectionProps> = ({ title, subtitle }) => {
  const { sectionRef, animatedValues, getSuffix } = useCounterAnimation(serviceStats, {
    durationMs: 1800,
  });

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
      {(title || subtitle) && (
        <div className="mb-10 text-center sm:mb-12">
          {title && (
            <h2 className="m-0 text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#070a12]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="m-0 mt-3 text-[1.02rem] text-[#6b7b8f]">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {serviceStats.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-[#f7f8fa] px-7 py-8 text-center shadow-[0_8px_20px_rgba(22,36,61,0.06)]"
            >
              <div className="mx-auto inline-flex h-[54px] w-[54px] items-center justify-center rounded-[12px] bg-[#e7edf6] text-[#1f5be5]">
                <Icon size={24} strokeWidth={2} aria-hidden="true" />
              </div>

              <p className="m-0 mt-5 text-[clamp(2.1rem,3.2vw,3.2rem)] font-semibold leading-none tracking-[-0.01em] text-[#2a5edf]">
                {animatedValues[index]}
                {getSuffix(index)}
              </p>

              <h3 className="m-0 mt-4 text-[1.8rem] font-medium tracking-[0.01em] text-[#070a12]">
                {item.title}
              </h3>

              <span className="mx-auto mt-4 block h-[2px] w-12 rounded-full bg-[#2a5edf]" aria-hidden="true" />

              <p className="mx-auto mt-4 max-w-[260px] text-[1.08rem] leading-[1.68] text-[#344b64]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceStatsSection;
