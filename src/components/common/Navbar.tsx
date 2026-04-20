import React from 'react';
import { useLocation } from 'react-router-dom';
import smartKodersLogo from '../../assets/company-logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Interns', href: '/#interns' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActiveItem = (label: string) => {
    if (label === 'About') {
      return location.pathname === '/about';
    }

    if (label === 'Home') {
      return location.pathname === '/' && (location.hash === '' || location.hash === '#home');
    }

    if (label === 'Services') {
      return location.pathname === '/services';
    }

    if (label === 'Contact') {
      return location.pathname === '/contact';
    }

    return false;
  };

  return (
    <nav
      className="fixed left-1/2 top-5 z-[2200] w-[95%] max-w-[1250px] -translate-x-1/2 rounded-full border border-slate-200/90 bg-[#f2f3f5] px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between gap-4">
        <a className="inline-flex items-center no-underline" href="/" aria-label="Go to top">
          <img
            className="block h-15 w-auto object-contain md:h-14"
            src={smartKodersLogo}
            alt="SmartKoders"
          />
        </a>

        <ul className="m-0 hidden list-none items-center justify-center gap-9 p-0 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-[21px] font-medium leading-none no-underline transition-colors duration-200 hover:text-blue-600 ${
                  isActiveItem(item.label) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
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
