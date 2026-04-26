import React, { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import smartKodersLogo from "../../assets/company-logo.png";
import { serviceItems } from "../../data/servicesData";
import { useDropdownClose } from "../../hooks/useDropdownClose";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const isServicesPage = location.pathname.startsWith("/services");
  const selectedServicePath = isServicesPage ? location.pathname : "";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Interns", href: "/#interns" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
  ];

  const handleCloseDropdown = useCallback(() => {
    setIsServicesDropdownOpen(false);
  }, []);
  const servicesDropdownRef = useDropdownClose<HTMLLIElement>(
    isServicesDropdownOpen,
    handleCloseDropdown,
  );

  const isActiveItem = (label: string) => {
    if (label === "About") {
      return location.pathname === "/about";
    }

    if (label === "Home") {
      return (
        location.pathname === "/" &&
        (location.hash === "" || location.hash === "#home")
      );
    }

    if (label === "Services") {
      return location.pathname.startsWith("/services");
    }

    if (label === "Contact") {
      return location.pathname === "/contact";
    }

    return false;
  };

  const handleServicesTextClick = () => {
    if (!isServicesPage) {
      setIsServicesDropdownOpen(true);
    }
  };

  const handleServicesIconClick = () => {
    setIsServicesDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className="fixed left-1/2 top-5 z-[2200] w-[95%] max-w-[1250px] -translate-x-1/2 rounded-full border border-slate-200/90 bg-[#f2f3f5] px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between gap-4">
        <Link className="inline-flex items-center no-underline" to="/" aria-label="Go to top">
          <img
            className="block h-15 w-auto object-contain md:h-14"
            src={smartKodersLogo}
            alt="SmartKoders"
          />
        </Link>

        <ul className="m-0 hidden list-none items-center justify-center gap-9 p-0 md:flex">
          {navItems.map((item) => {
            if (item.label === "Services") {
              return (
                <li key={item.label} ref={servicesDropdownRef} className="relative">
                  <div
                    className={`inline-flex items-center gap-1 text-[21px] font-medium leading-none ${
                      isActiveItem(item.label) ? "text-blue-600" : "text-slate-600"
                    }`}
                  >
                    <button
                      type="button"
                      className="cursor-pointer border-none bg-transparent p-0 text-[21px] font-medium leading-none text-inherit"
                      onClick={handleServicesTextClick}
                    >
                      {item.label}
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center border-none bg-transparent p-0 text-inherit"
                      aria-label="Toggle services menu"
                      aria-haspopup="menu"
                      aria-expanded={isServicesDropdownOpen}
                      onClick={handleServicesIconClick}
                    >
                      <ChevronDown
                        size={17}
                        strokeWidth={2.4}
                        className={`transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {isServicesDropdownOpen ? (
                    <div className="absolute right-0 top-full z-30 mt-6 w-[286px] overflow-hidden rounded-[18px] border border-slate-200 bg-[#f6f7f9] shadow-[0_18px_30px_rgba(9,30,66,0.2)]">
                      <ul className="m-0 list-none p-0" role="menu" aria-label="Services menu">
                        {serviceItems.map((service) => {
                          const isSelected = service.path === selectedServicePath;

                          return (
                            <li key={service.label}>
                              <button
                                type="button"
                                className={`w-full px-6 py-4 text-left text-[1.02rem] font-medium transition-colors ${
                                  isSelected
                                    ? "bg-[#dfe5ef] text-[#2563eb]"
                                    : "text-[#3b4a5e] hover:bg-[#e7ecf4]"
                                }`}
                                role="menuitem"
                                aria-current={isSelected ? "page" : undefined}
                                onClick={() => {
                                  setIsServicesDropdownOpen(false);
                                  navigate(service.path);
                                }}
                              >
                                {service.label}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            }

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`text-[21px] font-medium leading-none no-underline transition-colors duration-200 hover:text-blue-600 ${
                    isActiveItem(item.label) ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-7 text-[28px] font-medium leading-none text-white no-underline shadow-[0_8px_20px_rgba(37,99,235,0.38)] transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_12px_24px_rgba(37,99,235,0.45)]"
          href="/contact"
        >
          Get in Touch
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[18px]"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
