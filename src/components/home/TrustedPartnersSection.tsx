import React, { useEffect, useRef } from 'react';
import { trustedPartners } from '../../data/homeData';

const STYLE_ID = 'trusted-animation-styles';

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    /* ── Title lines fade + slide ── */
    @keyframes trustedTitleUp {
      from { opacity: 0; transform: translateY(26px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Subtitle fade ── */
    @keyframes trustedSubFade {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Partner card pop-in ── */
    @keyframes cardPopIn {
      from { opacity: 0; transform: translateY(22px) scale(0.93); }
      to   { opacity: 1; transform: translateY(0)   scale(1); }
    }

    /* ── Shimmer sweep across partner cards ── */
    @keyframes shimmerSweep {
      0%   { left: -150%; }
      100% { left: 150%; }
    }

    /* Base hidden states */
    .trusted-title  { opacity: 0; }
    .trusted-sub    { opacity: 0; }
    .trusted-card   { opacity: 0; }

    /* Revealed states */
    .trusted-title.visible {
      animation: trustedTitleUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    .trusted-sub.visible {
      animation: trustedSubFade 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s forwards;
    }
    .trusted-card.visible {
      animation: cardPopIn 0.55s cubic-bezier(0.34,1.46,0.64,1) forwards;
    }

    /* Card hover – shimmer + lift */
    .trusted-card-inner {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      position: relative;
      overflow: hidden;
    }
    .trusted-card-inner::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.6) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-25deg);
      z-index: 1;
    }
    .trusted-card-inner:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px -10px rgba(46, 102, 233, 0.15), 0 0 20px rgba(46, 102, 233, 0.05);
      border-color: rgba(46, 102, 233, 0.3) !important;
    }
    .trusted-card-inner:hover::before {
      animation: shimmerSweep 1.2s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
}

const TrustedPartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    injectStyles();

    const targets = sectionRef.current?.querySelectorAll<HTMLElement>(
      '.trusted-title, .trusted-sub, .trusted-card',
    );
    if (!targets) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[74px] pt-[58px] max-md:px-5 max-md:pb-[62px] max-md:pt-11 max-sm:px-4 max-sm:pb-[46px] max-sm:pt-9"
      aria-label="Trusted by industry leaders"
    >
      <div className="mx-auto w-full max-w-[920px]">

        {/* ── Title ── */}
        <h2 className="trusted-title m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] text-[#0d1b2f]">
          TRUSTED BY
          <span className="block text-[#2e66e9]">INDUSTRY LEADERS</span>
        </h2>

        {/* ── Subtitle ── */}
        <p className="trusted-sub mx-auto mt-[22px] w-full max-w-[700px] text-center text-[clamp(1rem,1.08vw,1.18rem)] leading-[1.5] text-[#3b526e] max-sm:mt-4">
          Real-time operational feedback from global partners utilizing our proprietary neural
          optimization engine.
        </p>

        {/* ── Partner grid ── */}
        <div
          className="mt-[34px] grid grid-cols-4 gap-x-[18px] gap-y-[14px] max-md:grid-cols-2 max-sm:mt-6 max-sm:grid-cols-1 max-sm:gap-[10px]"
          role="list"
          aria-label="Partner organizations"
        >
          {trustedPartners.map((partner, index) => (
            <div
              key={partner}
              className="trusted-card group"
              role="listitem"
              style={{ animationDelay: `${0.06 + index * 0.07}s` }}
            >
              <article className="trusted-card-inner flex min-h-[85px] w-full items-center justify-center rounded-2xl border border-white/60 bg-white/80 p-5 text-[0.9rem] font-bold uppercase tracking-[0.12em] text-slate-400 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-500 hover:text-[#2e66e9] max-sm:min-h-[70px]">
                <span className="relative z-10 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors duration-500 group-hover:bg-[#2e66e9]"></span>
                  {partner}
                </span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
