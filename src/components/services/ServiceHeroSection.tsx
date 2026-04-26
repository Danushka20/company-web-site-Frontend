import React from "react";
import { House } from "lucide-react";

const ServiceHeroSection: React.FC = () => {
  return (
    <div className="-mx-4 border-b border-slate-300/75 bg-[#eceef1] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto w-full max-w-[1080px] pt-[106px] pb-[30px] sm:pt-[122px] sm:pb-[34px] lg:pt-[130px] lg:pb-[38px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/75 px-5 py-2 text-sm tracking-[0.04em] text-[#4f627b]">
          <House size={14} strokeWidth={2.1} aria-hidden="true" />
          <span>MAIN</span>
          <span>-</span>
          <span className="font-medium text-[#255ddf]">SERVICES</span>
        </div>
      </section>
    </div>
  );
};

export default ServiceHeroSection;
