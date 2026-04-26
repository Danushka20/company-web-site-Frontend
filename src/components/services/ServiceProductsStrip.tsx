import React from "react";
import { Package } from "lucide-react";

interface ServiceProductsStripProps {
  label: string;
  href?: string;
}

const ServiceProductsStrip: React.FC<ServiceProductsStripProps> = ({
  label,
  href = "/#projects",
}) => {
  return (
    <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 bg-[#f1f2f4] px-4 py-7 text-center">
      <a
        href={href}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-blue-500 to-blue-600 px-7 text-[0.9rem] font-semibold text-white no-underline shadow-[0_8px_18px_rgba(37,99,235,0.32)] transition-transform duration-200 hover:-translate-y-px"
      >
        <Package size={14} strokeWidth={2.1} aria-hidden="true" />
        <span>{label}</span>
      </a>
    </div>
  );
};

export default ServiceProductsStrip;
