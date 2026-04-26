import React, { useCallback } from 'react';
import { BriefcaseBusiness, ChevronDown, House } from 'lucide-react';
import { serviceItems } from '../../data/servicesData';
import { useDropdownClose } from '../../hooks/useDropdownClose';

interface ServiceHeroSectionProps {
  selectedService: string;
  onSelectService: (label: string) => void;
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onCloseDropdown: () => void;
}

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  selectedService,
  onSelectService,
  isDropdownOpen,
  onToggleDropdown,
  onCloseDropdown,
}) => {
  const handleClose = useCallback(() => onCloseDropdown(), [onCloseDropdown]);
  const dropdownRef = useDropdownClose<HTMLDivElement>(isDropdownOpen, handleClose);

  return (
    <div className="-mx-4 border-b border-slate-300/75 bg-[#eceef1] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto w-full max-w-[1080px] pt-[106px] pb-[30px] sm:pt-[122px] sm:pb-[34px] lg:pt-[130px] lg:pb-[38px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/75 px-5 py-2 text-sm tracking-[0.04em] text-[#4f627b]">
          <House size={14} strokeWidth={2.1} aria-hidden="true" />
          <span>MAIN</span>
          <span>-</span>
          <span className="font-medium text-[#255ddf]">SERVICES</span>
        </div>

        <div ref={dropdownRef} className="relative mt-14 w-full max-w-[300px]">
          <button
            type="button"
            className="inline-flex w-full items-center gap-3 rounded-[14px] border border-[#2961df] bg-white px-5 py-[0.92rem] text-[1.02rem] font-medium text-[#0f1a2c] shadow-[0_10px_24px_rgba(37,93,223,0.08)] transition-colors hover:bg-[#f8fbff]"
            onClick={onToggleDropdown}
            aria-haspopup="menu"
            aria-expanded={isDropdownOpen}
          >
            <BriefcaseBusiness size={17} strokeWidth={2.2} className="text-[#255ddf]" aria-hidden="true" />
            <span className="flex-1 text-left">{selectedService}</span>
            <ChevronDown
              size={18}
              strokeWidth={2.2}
              className={`text-[#255ddf] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          {isDropdownOpen ? (
            <div className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-[#eef1f5] shadow-[0_16px_28px_rgba(9,30,66,0.18)]">
              <ul className="m-0 list-none p-0" role="menu" aria-label="Service categories">
                {serviceItems.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = item.label === selectedService;
                  const isPrimary = index === 0 && !isSelected;

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        className={`flex w-full items-center gap-3 px-5 py-3 text-left text-[1.02rem] font-medium transition-colors ${
                          isSelected
                            ? 'bg-[#d7dee8] text-[#255ddf]'
                            : isPrimary
                              ? 'bg-[#d7dee8] text-[#255ddf]'
                              : 'text-[#3b4a5e] hover:bg-[#dbe2eb] hover:text-[#213045]'
                        }`}
                        role="menuitem"
                        onClick={() => {
                          onSelectService(item.label);
                        }}
                      >
                        <Icon size={16} strokeWidth={2.1} aria-hidden="true" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ServiceHeroSection;
