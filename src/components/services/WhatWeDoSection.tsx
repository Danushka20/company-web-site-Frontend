import React from 'react';
import { whatWeDoItems } from '../../data/servicesData';

const WhatWeDoSection: React.FC = () => {
  return (
    <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto w-full max-w-[1080px] pb-20 pt-2 sm:pb-24 lg:pb-28">
        <div className="text-center">
          <p className="m-0 text-[0.78rem] uppercase tracking-[0.08em] text-[#255ddf]">SERVICES</p>
          <h2 className="m-0 mt-3 text-[clamp(2rem,3.3vw,3.3rem)] font-semibold leading-[1.2] text-[#070a12]">
            What We Do Exactly?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {whatWeDoItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white px-6 py-6 shadow-[0_6px_18px_rgba(22,36,61,0.05)] sm:px-7"
              >
                <div className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#e7edf6] text-[#1f5be5]">
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </div>

                <h3 className="m-0 mt-4 text-[2rem] font-semibold leading-tight text-[#070a12]">{item.title}</h3>

                <span className="mt-3 block h-[2px] w-10 rounded-full bg-[#2a5edf]" aria-hidden="true" />

                <p className="m-0 mt-4 max-w-[620px] text-[1.02rem] leading-[1.68] text-[#344b64]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-white no-underline shadow-[0_10px_22px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:-translate-y-px"
          >
            Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
