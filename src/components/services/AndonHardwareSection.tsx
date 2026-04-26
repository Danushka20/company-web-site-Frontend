import React from 'react';
import { Bell, RadioTower, Wrench } from 'lucide-react';

const hardwareComponents = [
  {
    icon: Wrench,
    title: 'LED Displays',
    description:
      'High brightness LED matrix displays with multi color support for clear visibility in any lighting condition.',
  },
  {
    icon: Bell,
    title: 'Tower Lights',
    description:
      'Multi tier signal tower lights with red, yellow, and green indicators plus optional buzzer for audio alerts.',
  },
  {
    icon: RadioTower,
    title: 'Control Panels',
    description:
      'Ruggedized push button control panels with IP65 rating for harsh industrial environments.',
  },
];

const AndonHardwareSection: React.FC = () => {
  return (
    <>
      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#255ddf]">
              ANDROIT HARDWARE SOLUTIONS
            </p>

            <h1 className="m-0 mt-5 text-[clamp(2.2rem,4.5vw,4.4rem)] font-bold leading-[1.07] tracking-[-0.01em] text-[#070a12]">
              ROBUST
              <span className="block text-[#255ddf]">INDUSTRIAL</span>
              <span className="block">HARDWARE</span>
            </h1>

            <p className="m-0 mt-7 max-w-[540px] text-[clamp(0.97rem,1.1vw,1.15rem)] leading-[1.74] text-[#344b64]">
              Purpose-built industrial hardware including LED displays, tower lights, push
              buttons, and control panels designed for 24/7 manufacturing environments.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(20,35,58,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=900"
              alt="Industrial hardware workstation"
              className="block h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-[#f4f5f7] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h2 className="m-0 text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-[#070a12]">
              Hardware Components
            </h2>
            <p className="m-0 mt-3 text-[1rem] text-[#6b7b8f]">
              Industrial-grade components built for reliability and durability
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {hardwareComponents.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white px-7 py-8 shadow-[0_6px_18px_rgba(22,36,61,0.06)]"
                >
                  <div className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#e7edf6] text-[#1f5be5]">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <h3 className="m-0 mt-5 text-[1.15rem] font-semibold text-[#070a12]">{item.title}</h3>

                  <p className="m-0 mt-3 text-[0.97rem] leading-[1.7] text-[#344b64]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?w=800"
                alt="Hardware design plans"
                className="block h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800"
                alt="Technician assembling circuit board"
                className="block h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-14 text-center">
            <a
              href="/#contact"
              id="androit-hardware-cta"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-10 text-[0.95rem] font-semibold uppercase tracking-[0.04em] text-white no-underline shadow-[0_10px_22px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:-translate-y-px"
            >
              FREE CONSULTATION
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AndonHardwareSection;