import React, { useEffect, useRef } from 'react';
import { journeyMilestones } from '../../data/homeData';

/* ── Inline keyframe styles injected once ── */
const STYLE_ID = 'journey-animation-styles';

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    /* ── Title drop-in ── */
    @keyframes journeyTitleReveal {
      from { opacity: 0; letter-spacing: 0.4em; transform: translateY(-24px); }
      to   { opacity: 1; letter-spacing: 0.05em; transform: translateY(0); }
    }

    /* ── Year label – slide in from left ── */
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-48px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    /* ── Card – slide in from right ── */
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(48px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    /* ── Vertical line grow downward ── */
    @keyframes lineGrow {
      from { transform: scaleY(0); opacity: 0; }
      to   { transform: scaleY(1); opacity: 1; }
    }

    /* ── Dot pulse ring ── */
    @keyframes dotPulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(45,103,234,0.5); }
      60%      { box-shadow: 0 0 0 9px rgba(45,103,234,0); }
    }

    /* ── Base hidden states ── */
    .journey-title { opacity: 0; }
    .journey-year  { opacity: 0; }
    .journey-card  { opacity: 0; }
    .journey-line  {
      transform-origin: top center;
      transform: scaleY(0);
      opacity: 0;
    }

    /* ── Visible state (added by IntersectionObserver) ── */
    .journey-title.visible {
      animation: journeyTitleReveal 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    .journey-year.visible {
      animation: slideInLeft 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    .journey-card.visible {
      animation: slideInRight 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    .journey-line.visible {
      animation: lineGrow 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
    }

    /* ── Dot persistent pulse ── */
    .journey-dot {
      animation: dotPulse 2.6s ease-in-out infinite;
    }

    /* ── Card hover lift ── */
    .journey-card-inner {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                  box-shadow 0.3s ease;
      cursor: default;
    }
    .journey-card-inner:hover {
      transform: translateY(-5px) scale(1.012);
      box-shadow: 0 10px 32px rgba(21,37,60,0.13);
    }
  `;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────── */

const YEAR_COL   = 150;   /* px – year column width (desktop) */
const DOT_SIZE   = 12;    /* px – connector dot diameter      */
const LINE_LEFT  = YEAR_COL + 24; /* gap between year column and card */

const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    injectStyles();

    const targets = sectionRef.current?.querySelectorAll<HTMLElement>(
      '.journey-title, .journey-year, .journey-card, .journey-line',
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
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] bg-[#e6e9ee] px-6 pb-[72px] pt-[58px] max-md:px-5 max-md:pb-[60px] max-md:pt-11 max-sm:px-4 max-sm:pb-[46px] max-sm:pt-9"
      aria-label="Our Journey"
    >
      <div className="mx-auto w-full max-w-[1080px]">

        {/* ── Section Title ── */}
        <h2 className="journey-title m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[0.05em] text-[#2d67ea]">
          OUR JOURNEY
        </h2>

        {/* ── Timeline container ── */}
        <div
          className="relative mt-[38px] max-sm:mt-[26px]"
          role="list"
          aria-label="Company milestones"
        >
          {/* Vertical spine line — positioned at right edge of year col + half gap */}
          <div
            className="journey-line pointer-events-none absolute top-0 hidden h-full w-[2px] md:block"
            style={{ left: `${LINE_LEFT - 2}px` }}
            aria-hidden="true"
          >
            <div
              className="h-full w-full rounded-full"
              style={{
                background:
                  'linear-gradient(to bottom, #2d67ea 0%, rgba(45,103,234,0.35) 80%, transparent 100%)',
              }}
            />
          </div>

          {/* ── Milestone rows ── */}
          <div className="grid gap-5 max-sm:gap-4">
            {journeyMilestones.map((item, index) => {
              const delay = index * 0.14;
              return (
                <article
                  key={`${item.year}-${item.title}`}
                  role="listitem"
                  className="flex items-center gap-0 max-sm:flex-col max-sm:items-start"
                >
                  {/* ── Year column ── */}
                  <div
                    className="journey-year relative shrink-0 text-right max-sm:text-left max-sm:pb-1"
                    style={{
                      width: `${YEAR_COL}px`,
                      animationDelay: `${delay}s`,
                      paddingRight: '14px',
                    }}
                  >
                    <p className="m-0 text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.1] text-[#2e66e9]">
                      {item.year}
                    </p>
                    {item.note && (
                      <p className="mt-1.5 mb-0">
                        {item.note.split('\n').map((line) => (
                          <span
                            className="block text-[0.6rem] leading-[1.3] tracking-[0.04em] text-[#2c7f4f]"
                            key={line}
                          >
                            {line}
                          </span>
                        ))}
                      </p>
                    )}

                    {/* Connector dot sitting exactly on the spine */}
                    <span
                      className="journey-dot absolute top-1/2 -translate-y-1/2 hidden rounded-full bg-[#2d67ea] md:block"
                      style={{
                        width: `${DOT_SIZE}px`,
                        height: `${DOT_SIZE}px`,
                        right: `${-DOT_SIZE / 2 - 15}px`,   /* centre on the spine */
                        border: '2.5px solid #e6e9ee',
                        zIndex: 2,
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Gap spacer (desktop) to align card after the spine */}
                  <div
                    className="shrink-0 hidden md:block"
                    style={{ width: `${LINE_LEFT - YEAR_COL + 6}px` }}
                  />

                  {/* ── Milestone card ── */}
                  <div
                    className="journey-card flex-1 w-full"
                    style={{ animationDelay: `${delay + 0.09}s` }}
                  >
                    <div className="journey-card-inner rounded-2xl border border-[#d6dae1] bg-[#f1f3f6] px-[20px] pb-4 pt-[18px] shadow-[0_2px_10px_rgba(21,37,60,0.06)] max-sm:px-[14px] max-sm:pb-[14px] max-sm:pt-4">
                      <h3 className="m-0 text-[clamp(1.15rem,1.5vw,1.6rem)] font-semibold leading-[1.24] text-[#0f1d32]">
                        {item.title}
                      </h3>
                      <p className="mt-2 mb-0 text-[clamp(0.9rem,1vw,1rem)] leading-[1.5] text-[#3d5470]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
