import React, { useEffect, useRef, useState } from 'react';
import {
  Cpu,
  Smartphone,
  Radio,
  Image as ImageIcon,
  Zap,
  LineChart,
  Clock3,
  Activity,
  MonitorSmartphone,
  Wifi,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Web & Software Development',
      description: 'Scalable, secure, and user-focused digital solutions.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'High-performance Android and cross-platform apps.',
    },
    {
      icon: Radio,
      title: 'IoT & Embedded Systems',
      description: 'Smart device integration using microcontroller-based systems.',
    },
    {
      icon: ImageIcon,
      title: 'Electronic & PCB Design',
      description: 'Custom circuit design, PCB layout, and fabrication solutions.',
    },
  ];
  const coreServices = [
    {
      title: 'IoT Development',
      subtitle: 'Connected Intelligence',
      description:
        'End-to-end IoT ecosystems connecting physical assets to the digital cloud for real-time monitoring and automation.',
      tags: ['Smart Sensors', 'Remote Control'],
    },
    {
      title: 'Software Development',
      subtitle: 'Enterprise Solutions',
      description:
        'Custom software architectures designed for scalability, security, and seamless integration.',
    },
    {
      title: 'Mobile App Development',
      subtitle: 'iOS & Android',
      description:
        'Intuitive, high-performance mobile applications that extend your business reach.',
    },
    {
      title: 'All Technology Solution',
      subtitle: 'Digital Transformation',
      description:
        'Comprehensive technology solutions that drive business innovation and growth.',
    },
  ];
  const responseFeatures = [
    {
      icon: Zap,
      title: 'Smart Routing',
      description: 'Efficient notification flows designed for faster response.',
    },
    {
      icon: LineChart,
      title: 'Downtime Analytics',
      description: 'Clear insights into system performance and issue trends.',
    },
    {
      icon: Clock3,
      title: 'Slash MTTR',
      description: 'Designed to help reduce resolution time and system delays.',
    },
    {
      icon: Activity,
      title: 'Digital Audit',
      description: 'Track system activities with clear logs and timestamps.',
    },
  ];
  const deviceAccessFeatures = [
    {
      icon: MonitorSmartphone,
      title: 'Adaptive UI',
      description: 'Responsive layouts across all devices',
    },
    {
      icon: Wifi,
      title: 'Live Sync',
      description: 'Consistent data across platforms',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Access',
      description: 'Protected user authentication',
    },
    {
      icon: CheckCircle2,
      title: 'Offline Support',
      description: 'Access critical data when needed',
    },
  ];
  const globalImpactStats = [
    {
      value: '50+',
      title: 'Completed Projects',
      description: 'Software, electronics, and IoT solutions delivered.',
    },
    {
      value: '10+',
      title: 'Active Clients',
      description: 'Businesses supported across multiple industries.',
    },
    {
      value: '5+',
      title: 'Core Technologies',
      description: 'Web, mobile, embedded systems, IoT, and PCB design.',
    },
    {
      value: '100%',
      title: 'Project Commitment',
      description: 'Focused on quality, reliability, and client satisfaction.',
    },
  ];
  const journeyMilestones = [
    {
      year: '2015',
      title: 'Foundation',
      description:
        'Sky Smart Technology was established with a focus on software and electronics solutions.',
    },
    {
      year: '2020',
      title: 'First Projects',
      description: 'Delivered initial web and electronic system projects for local clients.',
    },
    {
      year: '2020',
      note: 'SYS LOG 2020\nSTABLE REL.',
      title: 'IoT Expansion',
      description: 'Expanded into IoT and embedded system development.',
    },
    {
      year: '2023',
      title: 'Product Growth',
      description: 'Developed custom platforms, dashboards, and mobile applications.',
    },
    {
      year: 'Future',
      title: 'Looking Ahead',
      description: 'Continuously innovating in software, electronics, and smart systems.',
    },
  ];
  const trustedPartners = [
    'Partner 1',
    'Partner 2',
    'Partner 3',
    'Partner 4',
    'Partner 5',
    'Partner 6',
    'Partner 7',
    'Partner 8',
  ];
  const measurableOutcomes = [
    { value: '100%', label: 'Project Transparency' },
    { value: '40+', label: 'Systems Delivered' },
    { value: '5+', label: 'Technology Domains' },
    { value: '24/7', label: 'Support Availability' },
  ];
  const pricingPlans = [
    {
      name: 'Basic',
      price: 'FREE',
      cadence: 'Life Time',
      summary: 'Industrial IoT Lite',
      features: ['1 Machine Connected', 'Standard Dashboards', 'Email Alerts', 'Community Support'],
      highlighted: false,
    },
    {
      name: 'Standard',
      price: '$99',
      cadence: 'Monthly',
      summary: 'Full IoT Access',
      features: ['5 Machines Connected', 'Custom Reports', 'SMS & Email Alerts', '24/7 Technical Support'],
      highlighted: false,
    },
    {
      name: 'Enterprise',
      price: '$249',
      cadence: 'Monthly',
      summary: 'Unlimited Machine Sync',
      features: [
        'AI Predictive Analytics',
        'On-Premise Deployment',
        'Dedicated Success Manager',
        'Custom API Integration',
      ],
      highlighted: true,
    },
    {
      name: 'Custom',
      price: 'Quote',
      cadence: 'Yearly',
      summary: 'Full Factory Network',
      features: [
        'Custom Protocol Support',
        'White-label Option',
        'Staff Training Included',
        'Service Level Agreement',
      ],
      highlighted: false,
    },
  ];

  const parseCounterValue = (rawValue: string) => {
    const match = rawValue.match(/^(\d+)(.*)$/);
    if (!match) {
      return { target: 0, suffix: '' };
    }

    return {
      target: Number.parseInt(match[1], 10),
      suffix: match[2],
    };
  };

  const globalImpactSectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimatedGlobalImpact, setHasAnimatedGlobalImpact] = useState(false);
  const [globalImpactAnimatedValues, setGlobalImpactAnimatedValues] = useState<number[]>(() =>
    globalImpactStats.map(() => 0),
  );
  const outcomesSectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimatedOutcomes, setHasAnimatedOutcomes] = useState(false);
  const [outcomesAnimatedValues, setOutcomesAnimatedValues] = useState<number[]>(() =>
    measurableOutcomes.map(() => 0),
  );

  useEffect(() => {
    const section = globalImpactSectionRef.current;

    if (!section || hasAnimatedGlobalImpact) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimatedGlobalImpact(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimatedGlobalImpact]);

  useEffect(() => {
    if (!hasAnimatedGlobalImpact) {
      return;
    }

    const targets = globalImpactStats.map((item) => parseCounterValue(item.value).target);

    const durationMs = 2200;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setGlobalImpactAnimatedValues(targets.map((target) => Math.round(target * easedProgress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimatedGlobalImpact]);

  useEffect(() => {
    const section = outcomesSectionRef.current;

    if (!section || hasAnimatedOutcomes) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimatedOutcomes(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimatedOutcomes]);

  useEffect(() => {
    if (!hasAnimatedOutcomes) {
      return;
    }

    const targets = measurableOutcomes.map((item) => parseCounterValue(item.value).target);

    const durationMs = 2200;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setOutcomesAnimatedValues(targets.map((target) => Math.round(target * easedProgress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimatedOutcomes]);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white"
      style={{
        background:
          'radial-gradient(circle at 8% 15%, rgba(106, 131, 255, 0.28), transparent 32%), radial-gradient(circle at 82% 18%, rgba(76, 205, 255, 0.2), transparent 34%), linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.7)), #020711',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 15% 22%, rgba(255, 255, 255, 0.8), transparent), radial-gradient(1.6px 1.6px at 80% 16%, rgba(255, 255, 255, 0.6), transparent), radial-gradient(1.3px 1.3px at 72% 38%, rgba(255, 255, 255, 0.7), transparent), radial-gradient(1.8px 1.8px at 30% 68%, rgba(255, 255, 255, 0.4), transparent), radial-gradient(1.5px 1.5px at 92% 72%, rgba(255, 255, 255, 0.45), transparent)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(150% 90% at 50% 104%, rgba(66, 126, 255, 0.28), transparent 62%), linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 72%, rgba(0, 0, 0, 0.58))',
        }}
        aria-hidden="true"
      />

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

      <section className="relative z-[1] bg-[#e9ebef] px-6 pb-[72px] pt-16 max-md:px-5 max-md:pb-[56px] max-md:pt-12 max-sm:px-4 max-sm:pb-12 max-sm:pt-9" id="services">
        <div
          className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-5 xl:grid-cols-4"
          role="list"
          aria-label="Service offerings"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="rounded-[18px] border border-[#d8dce3] bg-[#f8f9fb] p-8 text-[#1e2a3c] shadow-[0_3px_12px_rgba(18,30,52,0.08)] max-md:p-6"
                key={service.title}
                role="listitem"
              >
                <div
                  className="inline-flex h-[66px] w-[66px] items-center justify-center rounded-[14px] bg-[#e4eaf3] text-[#1d63f0]"
                  aria-hidden="true"
                >
                  <Icon size={30} strokeWidth={2.1} />
                </div>
                <h3 className="mb-[14px] mt-[18px] font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.45rem,1.8vw,2.05rem)] leading-[1.25] text-[#0a1526]">
                  {service.title}
                </h3>
                <p className="m-0 text-[clamp(1.03rem,1.2vw,1.48rem)] leading-[1.55] text-[#354761]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[82px] pt-9 max-md:px-5 max-md:pb-[62px] max-md:pt-[18px] max-sm:px-4 max-sm:pb-12 max-sm:pt-2" aria-label="Sky Smart Intelligence">
        <div className="mx-auto w-full max-w-[920px] text-center text-[#151e2d]">
          <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4.8vw,4.1rem)] font-bold leading-[1.05] tracking-[0.01em]">
            Sky Smart
            <span className="block text-[#2e62e7]">Intelligence</span>
          </h2>
          <p className="mx-auto mt-[30px] w-full max-w-[860px] text-[clamp(1rem,2.1vw,2rem)] leading-[1.55] text-[#32465f] max-sm:mt-5 max-sm:leading-[1.45]">
            Building smarter digital and electronic solutions through
            <br />
            Integrated software, IoT, and embedded system innovation.
          </p>
        </div>
      </section>

      <section className="relative z-[1] bg-[#e9ebef] px-6 pb-[74px] pt-[26px] max-md:px-5 max-md:pb-[60px] max-md:pt-6 max-sm:px-4 max-sm:pb-11 max-sm:pt-[18px]" aria-label="Our Core Services">
        <div className="mx-auto w-full max-w-[1080px]">
          <div className="text-center text-[#132033]">
            <p className="m-0 text-[0.95rem] font-medium text-[#3269ef]">Our Core Services</p>
            <h2 className="mt-3 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02] tracking-[0.01em]">
              OUR CORE
              <span className="block text-[#2f66ea]">SERVICES</span>
            </h2>
            <p className="mx-auto mt-6 w-full max-w-[860px] text-[clamp(1rem,1.9vw,2rem)] leading-[1.5] text-[#465d78] max-sm:mt-[18px] max-sm:leading-[1.45]">
              Powering businesses with practical, future-ready technology by delivering reliable
              software, electronics, and IoT solutions tailored to real-world needs.
            </p>
          </div>

          <div
            className="mt-12 grid grid-cols-2 gap-[26px] max-md:grid-cols-1 max-md:gap-5 max-sm:mt-[30px]"
            role="list"
            aria-label="Core service cards"
          >
            {coreServices.map((service) => (
              <article
                className="rounded-2xl border border-[#d4dae2] bg-[#f5f7fa] px-7 pb-6 pt-[30px] text-[#1b2a3f] shadow-[0_2px_10px_rgba(15,33,57,0.06)] max-sm:px-5 max-sm:pb-5 max-sm:pt-6"
                key={service.title}
                role="listitem"
              >
                <h3 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.25rem,1.6vw,2rem)] leading-[1.25]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[clamp(0.96rem,1.1vw,1.26rem)] font-medium text-[#3870f1]">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-[clamp(1rem,1.15vw,1.3rem)] leading-[1.5] text-[#4a617c]">
                  {service.description}
                </p>

                {service.tags && (
                  <div className="mt-4 flex flex-wrap gap-2.5" aria-label={`${service.title} service features`}>
                    {service.tags.map((tag) => (
                      <span
                        className="inline-flex items-center justify-center rounded-full bg-[#e7eefb] px-[14px] py-2 text-[0.96rem] leading-none text-[#2e67e9]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[70px] pt-[52px] max-md:px-5 max-md:pb-[56px] max-md:pt-10 max-sm:px-4 max-sm:pb-11 max-sm:pt-[34px]" aria-label="Intelligent Response Network">
        <div className="mx-auto w-full max-w-[1080px]">
          <div className="text-center">
            <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.06] tracking-[0.01em] text-[#0f1d31]">
              INTELLIGENT RESPONSE
              <span className="block text-[#2f66ea]">NETWORK</span>
            </h2>
            <p className="mx-auto mt-[26px] w-full max-w-[860px] text-[clamp(1rem,1.9vw,2rem)] leading-[1.52] text-[#374d68] max-sm:mt-[18px] max-sm:leading-[1.46]">
              Transform standalone systems into a connected digital workflow. We design solutions
              that improve system visibility, simplify communication, and help teams respond faster
              to operational events.
            </p>
          </div>

          <div
            className="mt-14 grid grid-cols-4 gap-[22px] max-md:mt-[42px] max-md:grid-cols-2 max-md:gap-x-[18px] max-md:gap-y-7 max-sm:mt-[30px] max-sm:grid-cols-1 max-sm:gap-[22px]"
            role="list"
            aria-label="Response network features"
          >
            {responseFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="text-center text-[#12233a]" key={feature.title} role="listitem">
                  <div
                    className="mx-auto inline-flex h-[54px] w-[54px] items-center justify-center rounded-xl bg-[#e2e9f4] text-[#2762ed]"
                    aria-hidden="true"
                  >
                    <Icon size={22} strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-4 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.05rem,1.35vw,1.65rem)] leading-[1.3]">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-[clamp(0.98rem,1.04vw,1.15rem)] leading-[1.5] text-[#405672]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-[1] bg-gradient-to-b from-[#e6eaf0] to-[#e2e7ee] px-6 pb-[78px] pt-[46px] max-md:px-5 max-md:pb-[62px] max-md:pt-[38px] max-sm:px-4 max-sm:pb-11 max-sm:pt-7" aria-label="Multi-device access features">
        <div className="mx-auto grid w-full max-w-[1080px] grid-cols-[1.05fr_0.95fr] items-center gap-[46px] max-md:grid-cols-1 max-md:gap-7">
          <div className="text-[#182840]">
            <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.7rem,2.8vw,3rem)] leading-[1.15] text-[#0d1a2d]">
              Multi-Device Access
              <span className="block">Mobile & Tablet Interfaces</span>
            </h2>

            <h3 className="mt-4 text-[clamp(1.4rem,2.25vw,2.35rem)] font-semibold leading-[1.28] text-[#235de8]">
              Your Intelligence Node
              <span className="block">Anywhere in the World</span>
            </h3>

            <p className="mt-5 max-w-[640px] text-[clamp(1rem,1.08vw,1.2rem)] leading-[1.55] text-[#3f5673] max-md:max-w-none">
              Sky Smart solutions go beyond a single device. Our web and mobile applications adapt
              seamlessly to phones and tablets, giving users secure access to system data and
              controls wherever they are.
            </p>

            <div
              className="mt-[26px] grid grid-cols-2 gap-x-[22px] gap-y-[18px] max-sm:grid-cols-1 max-sm:gap-3.5"
              role="list"
              aria-label="Device access benefits"
            >
              {deviceAccessFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article className="grid grid-cols-[auto_1fr] items-start gap-3" key={feature.title} role="listitem">
                    <div
                      className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dfe7f4] text-[#2462f0]"
                      aria-hidden="true"
                    >
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="m-0 text-[clamp(1rem,1.15vw,1.3rem)] leading-[1.3] text-[#0e1b2e]">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-[clamp(0.94rem,0.97vw,1.04rem)] leading-[1.4] text-[#3f5673]">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <a
              className="mt-[26px] inline-block text-[1.04rem] text-[#5a708f] no-underline transition-colors duration-200 hover:text-[#2a63e7] max-sm:mt-5"
              href="#projects"
            >
              Preview Mobile Dashboard
            </a>
          </div>

          <div className="flex items-center justify-center gap-[14px] max-md:justify-start max-sm:justify-center max-sm:gap-2.5" aria-hidden="true">
            <div className="h-[min(366px,70vw)] w-[min(165px,32vw)] rounded-[22px] border-[6px] border-solid border-[#263247] bg-[#f8f9fb] p-[10px] shadow-[0_10px_26px_rgba(19,34,55,0.16)] max-sm:rounded-[18px] max-sm:border-[5px] max-sm:p-2">
              <img
                className="block h-full w-full rounded-[14px] object-cover max-sm:rounded-[10px]"
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=720&q=80"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="h-[min(366px,70vw)] w-[min(220px,41vw)] rounded-[22px] border-[6px] border-solid border-[#263247] bg-[#f8f9fb] p-[10px] shadow-[0_10px_26px_rgba(19,34,55,0.16)] max-sm:rounded-[18px] max-sm:border-[5px] max-sm:p-2">
              <img
                className="block h-full w-full rounded-[14px] object-cover max-sm:rounded-[10px]"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={globalImpactSectionRef}
        className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[70px] pt-[54px] max-md:px-5 max-md:pb-[60px] max-md:pt-[42px] max-sm:px-4 max-sm:pb-[46px] max-sm:pt-[34px]"
        aria-label="Global impact statistics"
      >
        <div className="mx-auto w-full max-w-[1080px]">
          <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-[#0f1d31]">
            GLOBAL
            <span className="block text-[#2e65e9]">IMPACT</span>
          </h2>

          <div
            className="mt-11 grid grid-cols-4 gap-[22px] max-md:mt-[34px] max-md:grid-cols-2 max-md:gap-[18px] max-sm:mt-7 max-sm:grid-cols-1 max-sm:gap-[14px]"
            role="list"
            aria-label="Global impact stats"
          >
            {globalImpactStats.map((item, index) => {
              const { suffix } = parseCounterValue(item.value);

              return (
                <article
                  className="rounded-2xl border border-[#d9dde4] bg-[#f2f4f7] px-[18px] pb-6 pt-[30px] text-center text-[#172740] shadow-[0_2px_10px_rgba(19,36,60,0.05)] max-sm:px-4 max-sm:pb-5 max-sm:pt-6"
                  key={item.title}
                  role="listitem"
                >
                  <p className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2.4rem,4.2vw,4.4rem)] font-extrabold leading-none text-[#1f5de8]">
                    {`${globalImpactAnimatedValues[index]}${suffix}`}
                  </p>
                  <h3 className="mt-[14px] text-[clamp(1.2rem,1.45vw,1.7rem)] leading-[1.25] text-[#0d1b2e]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[clamp(0.95rem,1vw,1.06rem)] leading-[1.45] text-[#3f5673]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-[1] bg-[#e6e9ee] px-6 pb-[72px] pt-[58px] max-md:px-5 max-md:pb-[60px] max-md:pt-11 max-sm:px-4 max-sm:pb-[46px] max-sm:pt-9" aria-label="Our Journey">
        <div className="mx-auto w-full max-w-[1080px]">
          <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-[#2d67ea]">
            OUR JOURNEY
          </h2>

          <div className="mt-[34px] grid gap-6 max-sm:mt-[26px] max-sm:gap-4" role="list" aria-label="Company milestones">
            {journeyMilestones.map((item) => (
              <article
                className="grid grid-cols-[132px_1fr] items-start gap-[14px] max-md:grid-cols-[104px_1fr] max-md:gap-2.5 max-sm:grid-cols-1 max-sm:gap-1.5"
                key={`${item.year}-${item.title}`}
                role="listitem"
              >
                <div className="pt-1 text-right max-sm:pt-0 max-sm:text-left">
                  <p className="m-0 text-[clamp(1.55rem,2vw,2rem)] font-medium leading-[1.1] text-[#2e66e9]">
                    {item.year}
                  </p>
                  {item.note && (
                    <p className="mt-2 mb-0 max-sm:mt-1">
                      {item.note.split('\n').map((line) => (
                        <span
                          className="block text-[0.62rem] leading-[1.25] tracking-[0.02em] text-[#2c7f4f]"
                          key={line}
                        >
                          {line}
                        </span>
                      ))}
                    </p>
                  )}
                </div>

                <div className="rounded-[14px] border border-[#d6dae1] bg-[#f1f3f6] px-[18px] pb-4 pt-[18px] shadow-[0_2px_8px_rgba(21,37,60,0.05)] max-sm:px-[14px] max-sm:pb-[14px] max-sm:pt-4">
                  <h3 className="m-0 text-[clamp(1.25rem,1.5vw,1.72rem)] leading-[1.24] text-[#0f1d32]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[clamp(0.95rem,1vw,1.03rem)] leading-[1.45] text-[#3d5470]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[74px] pt-[58px] max-md:px-5 max-md:pb-[62px] max-md:pt-11 max-sm:px-4 max-sm:pb-[46px] max-sm:pt-9" aria-label="Trusted by industry leaders">
        <div className="mx-auto w-full max-w-[920px]">
          <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] text-[#0d1b2f]">
            TRUSTED BY
            <span className="block text-[#2e66e9]">INDUSTRY LEADERS</span>
          </h2>

          <p className="mx-auto mt-[22px] w-full max-w-[700px] text-center text-[clamp(1rem,1.08vw,1.18rem)] leading-[1.5] text-[#3b526e] max-sm:mt-4">
            Real-time operational feedback from global partners utilizing our proprietary neural
            optimization engine.
          </p>

          <div
            className="mt-[34px] grid grid-cols-4 gap-x-[18px] gap-y-[14px] max-md:grid-cols-2 max-sm:mt-6 max-sm:grid-cols-1 max-sm:gap-[10px]"
            role="list"
            aria-label="Partner organizations"
          >
            {trustedPartners.map((partner) => (
              <article
                className="flex min-h-[70px] items-center justify-center rounded-xl border border-[#d8dce3] bg-[#e3e5ea] text-[0.92rem] text-[#8193ad] max-sm:min-h-[62px]"
                key={partner}
                role="listitem"
              >
                {partner}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] bg-[#e7eaef] px-6 pb-[72px] pt-[54px] max-md:px-5 max-md:pb-[60px] max-md:pt-[42px] max-sm:px-4 max-sm:pb-[46px] max-sm:pt-[34px]" aria-label="Pricing plans">
        <div className="mx-auto w-full max-w-[1080px]">
          <h2 className="m-0 text-center font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,3.7vw,3.55rem)] leading-[1.08] text-[#0b192d]">
            Ready to scale your factory?
          </h2>

          <div
            className="mt-9 grid grid-cols-4 gap-[18px] max-md:grid-cols-2 max-md:gap-4 max-sm:mt-[26px] max-sm:grid-cols-1 max-sm:gap-3"
            role="list"
            aria-label="Subscription plans"
          >
            {pricingPlans.map((plan) => (
              <article
                className={`relative rounded-[14px] border bg-[#f2f4f7] px-[18px] pb-5 pt-5 text-[#0f2138] max-sm:px-[14px] max-sm:pb-4 max-sm:pt-[18px] ${
                  plan.highlighted ? 'border-[#2c64e9]' : 'border-[#d7dbe2]'
                }`}
                key={plan.name}
                role="listitem"
              >
                {plan.highlighted && (
                  <span className="absolute -top-[9px] left-1/2 -translate-x-1/2 rounded-full bg-[#2e65e9] px-2.5 py-[3px] text-[0.67rem] leading-none text-white">
                    Recommended
                  </span>
                )}

                <p className="m-0 text-[1.75rem] leading-[1.2] text-[#0d1b2f]">{plan.name}</p>
                <p className="mt-2 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(1.85rem,2.7vw,3.1rem)] leading-[1.05] text-[#2b64e9]">
                  {plan.price}
                </p>
                <p className="mt-0.5 text-[0.9rem] text-[#425973]">{plan.cadence}</p>
                <p className="mt-[14px] text-base text-[#0d1b2f]">{plan.summary}</p>

                <ul className="mt-[14px] grid list-none gap-2 p-0" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((feature) => (
                    <li className="flex items-center gap-1.5 text-[0.88rem] leading-[1.35] text-[#2f4966]" key={feature}>
                      <CheckCircle2 size={14} strokeWidth={2.3} aria-hidden="true" className="shrink-0 text-[#13b85f]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="mt-5 inline-flex min-h-[42px] w-full items-center justify-center rounded-full bg-[#2e64e8] text-[0.92rem] font-semibold text-white no-underline"
                  href="#contact"
                >
                  Get Started
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] bg-gradient-to-b from-[#f2f4f7] to-[#f6f8fb] px-6 pb-[74px] pt-[56px] max-md:px-5 max-md:pb-[60px] max-md:pt-[42px] max-sm:px-4 max-sm:pb-[46px] max-sm:pt-[34px]" aria-label="Powering the world's smartest ecosystems">
        <div className="mx-auto grid w-full max-w-[1080px] grid-cols-2 items-center gap-[34px] max-md:grid-cols-1 max-md:gap-6">
          <div>
            <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.9rem)] leading-[1.12] text-[#0c1a2e]">
              Powering the world's
              <span className="block text-[#2b63e8]">smartest ecosystems</span>
            </h2>

            <p className="mt-5 max-w-[600px] text-[clamp(1rem,1.06vw,1.18rem)] leading-[1.52] text-[#3a516d] max-sm:mt-4">
              From industrial automation to smart city infrastructure, our integrated solutions
              connect devices, systems, and people in a seamless digital ecosystem. We deliver the
              technology backbone that powers intelligent operations worldwide.
            </p>
          </div>

          <div aria-hidden="true">
            <img
              className="block min-h-[300px] w-full rounded-[14px] object-cover shadow-[0_10px_28px_rgba(17,35,58,0.2)] max-sm:min-h-[220px]"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        ref={outcomesSectionRef}
        className="relative z-[1] bg-gradient-to-b from-[#6fa7ee] to-[#5f99e7] px-6 pb-[68px] pt-[58px] max-md:px-5 max-md:pb-14 max-md:pt-11 max-sm:px-4 max-sm:pb-11 max-sm:pt-[34px]"
        aria-label="Numbers that speak louder than words"
      >
        <div className="mx-auto w-full max-w-[980px] text-center text-[#f7fbff]">
          <h2 className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,4vw,3.7rem)] leading-[1.08]">
            Numbers that speak
            <span className="block">louder than words.</span>
          </h2>

          <p className="mx-auto mt-4 w-full max-w-[760px] text-[clamp(1rem,1.06vw,1.18rem)] leading-[1.48] text-[rgba(245,250,255,0.95)] max-sm:mt-[14px]">
            We focus on measurable outcomes, ensuring our solutions deliver real value through
            efficiency, reliability, and thoughtful system design.
          </p>

          <a
            className="mt-[22px] inline-flex min-h-11 items-center justify-center rounded-full bg-[#f3f6fb] px-6 text-[0.94rem] font-semibold text-[#275ddf] no-underline max-sm:mt-[18px]"
            href="#projects"
          >
            View Case Studies
          </a>

          <div
            className="mt-[52px] grid grid-cols-4 gap-4 max-md:mt-9 max-md:grid-cols-2 max-md:gap-[18px] max-sm:mt-7 max-sm:grid-cols-1 max-sm:gap-4"
            role="list"
            aria-label="Measurable outcomes"
          >
            {measurableOutcomes.map((item, index) => {
              const { suffix } = parseCounterValue(item.value);

              return (
                <article className="text-center" key={item.label} role="listitem">
                  <p className="m-0 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-[clamp(2rem,3.3vw,3.5rem)] font-bold leading-none text-white">
                    {`${outcomesAnimatedValues[index]}${suffix}`}
                  </p>
                  <p className="mt-2.5 text-[clamp(0.9rem,0.98vw,1.03rem)] text-[rgba(244,249,255,0.95)]">
                    {item.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      <section id="about" aria-hidden="true" className="home-anchor" />
      <section id="projects" aria-hidden="true" className="home-anchor" />
      <section id="interns" aria-hidden="true" className="home-anchor" />
      <section id="contact" aria-hidden="true" className="home-anchor" />
    </div>
  );
};

export default HomePage;
