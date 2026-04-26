import React from "react";
import { Cpu, Zap, Code2 } from "lucide-react";
import ServiceProductsStrip from "./ServiceProductsStrip";

/* ─── Software Features Cards ─── */
const softwareFeatures = [
  {
    icon: Cpu,
    title: "Real-Time Dashboard",
    description:
      "Live production line status with customizable widgets, KPI tracking, and instant alert notifications.",
  },
  {
    icon: Zap,
    title: "Alert Management",
    description:
      "Intelligent alert routing with SMS, email, and mobile push notifications for immediate response.",
  },
  {
    icon: Code2,
    title: "API Integration",
    description:
      "RESTful APIs for seamless integration with existing ERP, MES, and SCADA systems.",
  },
];

const AndonSoftwareSection: React.FC = () => {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left – Text */}
          <div>
            <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#255ddf]">
              ANDROIT SOFTWARE PLATFORM
            </p>

            <h1 className="m-0 mt-5 text-[clamp(2.2rem,4.5vw,4.4rem)] font-bold leading-[1.07] tracking-[-0.01em] text-[#070a12]">
              INTELLIGENT
              <span className="block text-[#255ddf]">MONITORING</span>
              <span className="block">SOFTWARE</span>
            </h1>

            <p className="m-0 mt-7 max-w-[520px] text-[clamp(0.97rem,1.1vw,1.18rem)] leading-[1.74] text-[#344b64]">
              Our Androit software platform provides real-time monitoring,
              analytics, and alert management for seamless production line
              oversight and rapid issue resolution.
            </p>
          </div>

          {/* Right – Hero Image */}
          <div className="overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(20,35,58,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
              alt="Analytics dashboard on a screen"
              className="block h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      {/* ── Software Features ── */}
      <div className="-mx-4 bg-[#f4f5f7] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="m-0 text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[#070a12]">
              Software Features
            </h2>
            <p className="m-0 mt-3 text-[1.02rem] text-[#6b7b8f]">
              Powerful tools for complete production visibility and control
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {softwareFeatures.map((item) => {
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                alt="Business dashboard"
                className="block h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
                alt="Marketing reporting dashboard"
                className="block h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600"
                alt="Financial analytics dashboard"
                className="block h-[220px] w-full object-cover sm:h-[260px] lg:h-[300px]"
                loading="lazy"
              />
            </div>
          </div>

          <ServiceProductsStrip label="View Our Andon Software" />

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="/#contact"
              id="androit-software-cta"
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

export default AndonSoftwareSection;
