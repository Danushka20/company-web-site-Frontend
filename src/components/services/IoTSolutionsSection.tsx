import React from 'react';
import { Radio, Zap, Settings } from 'lucide-react';

/* ─── IoT Expertise Cards ─── */
const iotExpertiseItems = [
  {
    icon: Radio,
    title: 'Smart Sensors',
    description:
      'Advanced sensor integration for temperature, humidity, motion, and environmental monitoring.',
  },
  {
    icon: Zap,
    title: 'Real-Time Analytics',
    description:
      'Live data processing and visualization dashboards for instant insights and decision making.',
  },
  {
    icon: Settings,
    title: 'Device Management',
    description:
      'Centralised control and monitoring of all connected devices with remote configuration capabilities.',
  },
];

const IoTSolutionsSection: React.FC = () => {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left – Text */}
          <div>
            <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#255ddf]">
              INTERNET OF THINGS
            </p>

            <h1 className="m-0 mt-5 text-[clamp(2.2rem,4.5vw,4.4rem)] font-bold leading-[1.07] tracking-[-0.01em] text-[#070a12]">
              CONNECT YOUR
              <span className="block text-[#255ddf]">DEVICES</span>
              <span className="block">TO THE CLOUD</span>
            </h1>

            <p className="m-0 mt-7 max-w-[520px] text-[clamp(0.97rem,1.1vw,1.18rem)] leading-[1.74] text-[#344b64]">
              Transform your business with intelligent IoT solutions that connect devices, collect
              data, and drive actionable insights for smarter decision-making.
            </p>
          </div>

          {/* Right – Hero Image */}
          <div className="overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(20,35,58,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
              alt="IoT circuit board with connected components"
              className="block h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      {/* ── IoT Solutions We Provide ── */}
      <div className="-mx-4 bg-[#f4f5f7] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="m-0 text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#070a12]">
              IoT Solutions We Provide
            </h2>
            <p className="m-0 mt-3 text-[1.02rem] text-[#255ddf]">
              End-to-end IoT development from sensors to cloud platforms
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {iotExpertiseItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white px-7 py-8 shadow-[0_6px_18px_rgba(22,36,61,0.06)] transition-shadow duration-200 hover:shadow-[0_10px_28px_rgba(37,93,223,0.12)]"
                >
                  <div className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#e7edf6] text-[#1f5be5]">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <h3 className="m-0 mt-5 text-[1.15rem] font-semibold text-[#070a12]">
                    {item.title}
                  </h3>

                  <p className="m-0 mt-3 text-[0.97rem] leading-[1.7] text-[#344b64]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── Gallery ── */}
      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-3 gap-5">
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600"
                alt="IoT hardware wiring and sensors"
                className="block h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"
                alt="Person monitoring IoT dashboard on a tablet"
                className="block h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
                alt="Close-up of IoT circuit board with cyan lighting"
                className="block h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="/#contact"
              id="iot-solutions-cta"
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

export default IoTSolutionsSection;
