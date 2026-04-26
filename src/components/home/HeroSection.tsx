import React from 'react';
import Navbar from '../common/Navbar';

const HeroSection: React.FC = () => {
  return (
    <header
      className="relative z-[60] flex min-h-screen flex-col overflow-hidden bg-[#060d1b] px-6 pb-14 pt-7 max-sm:px-4 max-sm:pb-12"
      id="home"
    >
      <div
        className="pointer-events-none absolute inset-0 scale-[1.03] bg-cover bg-center blur-[4px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(2,10,24,0.36)] to-[rgba(2,10,24,0.56)]"
        aria-hidden="true"
      />

      <Navbar />

      <div className="relative z-[2] m-auto w-full max-w-[980px] pt-[132px] text-center max-lg:pt-[62px]">
        <h1 className="m-0 text-[clamp(2.3rem,6.3vw,5.25rem)] leading-[1.03] tracking-[-0.02em] text-[#f8fbff] [text-shadow:0_8px_26px_rgba(8,30,70,0.65)]">
          NextGen Software
          <span className="mt-[14px] block tracking-[0.01em] text-[#4fa3ff]">TECHNOLOGIES</span>
        </h1>
        <p className="mx-auto mt-[34px] w-full max-w-[760px] text-[clamp(1rem,2.1vw,2rem)] leading-[1.55] text-[rgba(232,239,255,0.94)] max-sm:mt-6 max-sm:leading-[1.45]">
          We bridge physical operations and digital intelligence through innovative
          software and electronics-driven IoT technologies.
        </p>
        <a
          className="mt-11 inline-flex h-12 min-w-[190px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#388eff] to-[#2b64e4] px-[26px] text-base font-semibold text-[#f6f9ff] no-underline shadow-[0_8px_22px_rgba(37,106,236,0.34)] transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_12px_26px_rgba(37,106,236,0.42)] max-sm:mt-[30px] max-sm:w-full max-sm:max-w-[215px]"
          href="#contact"
        >
          Get in Touch
          <span className="text-[1.02em]" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
