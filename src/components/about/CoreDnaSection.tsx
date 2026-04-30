import React from 'react';
import { coreDnaStats } from '../../data/aboutData';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

const CoreDnaSection: React.FC = () => {
  const { sectionRef, animatedValues, getSuffix } = useCounterAnimation(coreDnaStats, {
    durationMs: 1800,
  });

  return (
    <section ref={sectionRef} className="mx-auto mt-20 w-full max-w-[1080px] pb-20 sm:mt-24 sm:pb-24">
      <div className="text-center">
        <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
          Core DNA [SYS-02]
        </h2>
        <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
          What Drives Us
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
        {coreDnaStats.map((item, index) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-100 bg-[#f7f8fb] px-7 py-8 text-center shadow-[0_1px_4px_rgba(20,35,58,0.08)] sm:px-8 sm:py-9"
          >
            <p className="text-[clamp(3rem,5.2vw,5.1rem)] font-bold leading-none text-[#2a5edf]">
              {animatedValues[index]}
              {getSuffix(index)}
            </p>
            <h3 className="mt-4 text-[clamp(1.5rem,2vw,2.1rem)] font-semibold text-[#0a1323]">{item.title}</h3>
            <p className="mt-3 text-[clamp(0.95rem,1vw,1.1rem)] leading-relaxed text-[#2f435c]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CoreDnaSection;
