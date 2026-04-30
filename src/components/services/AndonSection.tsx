import React from 'react';

const AndonSection: React.FC = () => {
  return (
    <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <div>
          <p className="m-0 text-sm uppercase tracking-[0.08em] text-[#255ddf]">ANDROIT SYSTEM [EST-2024]</p>

          <h1 className="mt-6 m-0 text-[clamp(2.45rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-[#070a12]">
            THE FUTURE OF
            <span className="block text-[#255ddf]">SMART ANDROIT</span>
            <span className="block">SYSTEMS</span>
          </h1>

          <p className="mt-9 max-w-[620px] text-[clamp(1rem,1.14vw,1.3rem)] leading-[1.72] text-[#304960]">
            With smart Androit systems, visual indicators, alerts, and operational controls adapt
            in real time - providing instant visibility and effortless monitoring anytime,
            anywhere.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-[0_10px_26px_rgba(20,35,58,0.14)]">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800"
            alt="Developer building smart Androit monitoring software"
            className="block h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default AndonSection;
