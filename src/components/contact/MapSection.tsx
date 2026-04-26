import React from 'react';
import { socialLinks } from '../../data/contactData';

const MapSection: React.FC = () => {
  return (
    <div className="-mx-4 bg-[#f0f1f4] px-4 pt-8 sm:-mx-6 sm:px-6 sm:pt-10 lg:-mx-10 lg:px-10">
      <section className="mx-auto w-full max-w-[1180px] pb-12 sm:pb-14">
        <p className="m-0 text-center text-[0.8rem] uppercase tracking-[0.08em] text-[#255ddf]">
          GEOSPATIAL_NODE [SRI-01]
        </p>

        <div className="mx-auto mt-4 max-w-[800px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(20,35,58,0.14)]">
          <iframe
            title="Sky Smart Technology location map"
            src="https://maps.google.com/maps?q=Sky%20Smart%20Technology%20Kegalle%20Sri%20Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="block h-[240px] w-full sm:h-[270px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1180px] justify-center border-t border-slate-200/80 py-8 sm:py-9">
        <div className="flex items-center gap-3 sm:gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-[#f7f8fa] text-[#5e6f86] transition-colors hover:border-[#255ddf] hover:text-[#255ddf]"
              >
                <Icon size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MapSection;
