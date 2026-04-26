import React from 'react';
import AndonSection from './AndonSection';
import ServiceStatsSection from './ServiceStatsSection';

const AndonSystemSection: React.FC = () => {
  return (
    <>
      <AndonSection />

      <div className="-mx-4 bg-[#f4f5f7] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <ServiceStatsSection
          title="Complete Androit Solution"
          subtitle="Integrated hardware and software for comprehensive production line monitoring"
        />
      </div>

      {/* ── Gallery ── */}
      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800"
                alt="Cars parked in factory"
                className="block h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_22px_rgba(20,35,58,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
                alt="Developers working"
                className="block h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="/#contact"
              id="androit-system-cta"
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

export default AndonSystemSection;
