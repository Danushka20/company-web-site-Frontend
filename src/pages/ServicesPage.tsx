import React, { useEffect, useRef, useState } from 'react';
import {
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Code2,
  Cpu,
  Headset,
  Heart,
  House,
  Radio,
  Settings,
  Smartphone,
  Users,
  Wrench,
} from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const ServicesPage: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const [selectedService, setSelectedService] = useState('All Services Overview');

  const serviceItems = [
    { label: 'All Services Overview', icon: BriefcaseBusiness },
    { label: 'Software Development', icon: Code2 },
    { label: 'IoT Solutions', icon: Radio },
    { label: 'Andon System', icon: Settings },
    { label: 'Andon System - Software', icon: Cpu },
    { label: 'Andon System - Hardware', icon: Wrench },
  ];

  const serviceStats = [
    {
      icon: Users,
      value: '50+',
      title: 'MEMBERS OF STAFF',
      description:
        'Expert professionals dedicated to delivering innovative IoT and automation solutions.',
    },
    {
      icon: BriefcaseBusiness,
      value: '600+',
      title: 'COMPLETED PROJECTS',
      description:
        'Diverse projects across various industries showcasing our expertise and commitment.',
    },
    {
      icon: Heart,
      value: '506+',
      title: 'HAPPY CUSTOMERS',
      description:
        'Building lasting relationships through exceptional service and support.',
    },
    {
      icon: Clock3,
      value: '20+',
      title: 'YEARS EXPERIENCE',
      description:
        'Two decades of industry experience driving innovation and excellence.',
    },
  ];
  const whatWeDoItems = [
    {
      icon: Radio,
      title: 'IoT Development',
      description:
        'End-to-end IoT ecosystems connecting physical assets to the digital cloud for real-time monitoring and automation.',
    },
    {
      icon: Cpu,
      title: 'Software Development',
      description:
        'Custom software architectures designed for scalability, security, and seamless integration with existing workflows.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        "Intuitive, high-performance mobile applications that extend your business reach to every user's fingertips.",
    },
    {
      icon: Headset,
      title: 'Support & Maintenance',
      description:
        'Provide 24/7 global support and technical maintenance services to ensure your systems run smoothly and efficiently.',
    },
  ];
  const [animatedStats, setAnimatedStats] = useState<number[]>(() => serviceStats.map(() => 0));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const section = statsSectionRef.current;

    if (!section || hasAnimatedStats) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimatedStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimatedStats]);

  useEffect(() => {
    if (!hasAnimatedStats) {
      return;
    }

    const targets = serviceStats.map((item) => Number.parseInt(item.value, 10));
    const durationMs = 1800;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats(targets.map((target) => Math.round(target * easedProgress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimatedStats]);

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />

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
              onClick={() => setIsDropdownOpen((prev) => !prev)}
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
                    const isPrimary = index === 0;

                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          className={`flex w-full items-center gap-3 px-5 py-3 text-left text-[1.02rem] font-medium transition-colors ${
                            isPrimary
                              ? 'bg-[#d7dee8] text-[#255ddf]'
                              : 'text-[#3b4a5e] hover:bg-[#dbe2eb] hover:text-[#213045]'
                          }`}
                          role="menuitem"
                          onClick={() => {
                            setSelectedService(item.label);
                            setIsDropdownOpen(false);
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

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <div>
            <p className="m-0 text-sm uppercase tracking-[0.08em] text-[#255ddf]">ANDON SYSTEM [EST-2024]</p>

            <h1 className="mt-6 m-0 text-[clamp(2.45rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-[#070a12]">
              THE FUTURE OF
              <span className="block text-[#255ddf]">SMART ANDON</span>
              <span className="block">SYSTEMS</span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[clamp(1rem,1.14vw,1.3rem)] leading-[1.72] text-[#304960]">
              With smart Andon systems, visual indicators, alerts, and operational controls adapt
              in real time - providing instant visibility and effortless monitoring anytime,
              anywhere.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-[0_10px_26px_rgba(20,35,58,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800"
              alt="Developer building smart Andon monitoring software"
              className="block h-[300px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      <section ref={statsSectionRef} className="mx-auto w-full max-w-[1080px] py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {serviceStats.map((item, index) => {
            const Icon = item.icon;
            const suffix = item.value.replace(/\d+/g, '');

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-[#f7f8fa] px-7 py-8 text-center shadow-[0_8px_20px_rgba(22,36,61,0.06)]"
              >
                <div className="mx-auto inline-flex h-[54px] w-[54px] items-center justify-center rounded-[12px] bg-[#e7edf6] text-[#1f5be5]">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </div>

                <p className="m-0 mt-5 text-[clamp(2.1rem,3.2vw,3.2rem)] font-semibold leading-none tracking-[-0.01em] text-[#2a5edf]">
                  {animatedStats[index]}
                  {suffix}
                </p>

                <h3 className="m-0 mt-4 text-[1.8rem] font-medium tracking-[0.01em] text-[#070a12]">
                  {item.title}
                </h3>

                <span className="mx-auto mt-4 block h-[2px] w-12 rounded-full bg-[#2a5edf]" aria-hidden="true" />

                <p className="mx-auto mt-4 max-w-[260px] text-[1.08rem] leading-[1.68] text-[#344b64]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

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

      <div className="about-footer-soft -mx-4 sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default ServicesPage;
