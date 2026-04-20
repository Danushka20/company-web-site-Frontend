import React, { useEffect, useRef, useState } from 'react';
import { House } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const AboutPage: React.FC = () => {
  const coreDnaSectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimatedCoreDna, setHasAnimatedCoreDna] = useState(false);
  const coreDnaStats = [
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
  const [coreDnaAnimatedValues, setCoreDnaAnimatedValues] = useState<number[]>(() =>
    coreDnaStats.map(() => 0),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const section = coreDnaSectionRef.current;

    if (!section || hasAnimatedCoreDna) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimatedCoreDna(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimatedCoreDna]);

  useEffect(() => {
    if (!hasAnimatedCoreDna) {
      return;
    }

    const targets = coreDnaStats.map((item) => Number.parseInt(item.value, 10));
    const durationMs = 1800;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCoreDnaAnimatedValues(targets.map((target) => Math.round(target * easedProgress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimatedCoreDna]);

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto w-full max-w-[1080px] pt-[106px] sm:pt-[122px] lg:pt-[130px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/75 px-5 py-2 text-sm tracking-[0.04em] text-[#4f627b]">
          <House size={14} strokeWidth={2.1} aria-hidden="true" />
          <span>MAIN</span>
          <span>-</span>
          <span className="font-medium text-[#255ddf]">ABOUT</span>
        </div>

        <div className="mx-auto mt-[112px] max-w-[900px] text-center sm:mt-[126px]">
          <h1 className="m-0 text-[clamp(2.4rem,5.5vw,5.05rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-[#070a12]">
            Bridging the
            <span className="mt-2 block text-[#255ddf]">Physical &amp; Digital</span>
          </h1>

          <p className="mx-auto mt-10 max-w-[980px] text-[clamp(1.04rem,1.35vw,2rem)] leading-[1.62] text-[#314962]">
            Founded in 2006, Sky Smart Technology has emerged as a powerhouse in industrial
            automation and IoT research. We don't just build sensors; we build the nervous system
            of modern industry. Our mission is to transform raw factory floor data into actionable
            intelligence, scaling across South Asia and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-16 md:grid-cols-2 md:gap-6">
          <article className="rounded-2xl border border-blue-100 bg-blue-100/60 px-6 py-7 text-center text-[#1f5be5]">
            <p className="m-0 text-[clamp(2.1rem,3.7vw,3.15rem)] leading-none">2006</p>
            <p className="mt-3 text-[clamp(0.94rem,1vw,1.1rem)] text-[#2f435c]">Core Initialization</p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-blue-100/60 px-6 py-7 text-center text-[#1f5be5]">
            <p className="m-0 text-[clamp(2.1rem,3.7vw,3.15rem)] leading-none">0K+</p>
            <p className="mt-3 text-[clamp(0.94rem,1vw,1.1rem)] text-[#2f435c]">Active Nodes</p>
          </article>
        </div>

        <p className="mt-14 text-center text-[clamp(1.1rem,1.5vw,2rem)] italic text-[#2f4968]">
          "Innovating the fabric of industrial connectivity"
        </p>
      </section>
        </div>

      <section className="mx-auto mt-20 w-full max-w-[1080px] pb-6 sm:mt-24">
        <h2 className="text-center text-[clamp(2rem,3.6vw,3.2rem)] font-semibold leading-tight text-[#255ddf]">
          Vision &amp; Mission
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 md:gap-8">
          <article className="rounded-2xl border border-slate-100 bg-[#f7f8fb] px-7 py-8 shadow-[0_1px_4px_rgba(20,35,58,0.08)] sm:px-8 sm:py-9">
            <h3 className="text-[clamp(1.6rem,2.2vw,2.1rem)] font-semibold text-[#0a1323]">Our Vision</h3>
            <p className="mt-4 text-[clamp(1.2rem,1.5vw,1.7rem)] italic leading-relaxed text-[#1f5be5]">
              "Fulfill customer needs beyond expectations"
            </p>
            <p className="mt-5 text-[clamp(1rem,1.02vw,1.15rem)] leading-[1.8] text-[#2f435c]">
              We strive to anticipate and exceed customer requirements by delivering solutions that
              go above and beyond expectations. Through continuous innovation and close
              collaboration, we ensure every interaction creates value and builds lasting trust.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-[#f7f8fb] px-7 py-8 shadow-[0_1px_4px_rgba(20,35,58,0.08)] sm:px-8 sm:py-9">
            <h3 className="text-[clamp(1.6rem,2.2vw,2.1rem)] font-semibold text-[#0a1323]">Our Mission</h3>
            <p className="mt-4 text-[clamp(1.2rem,1.5vw,1.7rem)] italic leading-relaxed text-[#1f5be5]">
              "To be the leading Electronics Research and Design Center in South Asia"
            </p>
            <p className="mt-5 text-[clamp(1rem,1.02vw,1.15rem)] leading-[1.8] text-[#2f435c]">
              We aim to lead South Asia in electronics research and design by delivering
              innovative, reliable, and high-quality solutions. Through cutting-edge technology and
              a passion for excellence, we strive to set new industry standards and drive regional
              progress.
            </p>
          </article>
        </div>
      </section>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto mt-20 w-full max-w-[1080px] pb-10 sm:mt-24">
        <div className="mx-auto w-full max-w-[760px]">
          <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
            Our Technology
          </h2>
          <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
            Core Technologies &amp; Approach
          </p>
          <p className="mt-6 text-[clamp(0.98rem,1.02vw,1.12rem)] leading-[1.8] text-[#2f435c]">
            We design and deploy industrial-focused IoT ecosystems built for reliability and
            real-time performance: hardened edge devices, secure cloud connectivity, and
            production-oriented analytics. Our approach pairs efficient, low-latency telemetry with
            disciplined data governance so customers gain actionable insights, maintain operational
            security, and realize predictable returns on investment.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl shadow-[0_10px_26px_rgba(20,35,58,0.14)]">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
            alt="Engineering team working on industrial technology systems"
            className="block h-[230px] w-full object-cover sm:h-[300px] lg:h-[360px]"
            loading="lazy"
          />
        </div>
      </section>
      </div>

      <section className="mx-auto mt-20 w-full max-w-[1080px] pb-14 sm:mt-24 sm:pb-16">
        <div className="mx-auto w-full max-w-[760px]">
          <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
            Milestones
          </h2>
          <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
            Our Journey
          </p>
          <p className="mt-6 text-[clamp(0.98rem,1.02vw,1.12rem)] leading-[1.8] text-[#2f435c]">
            Since 2015 we&apos;ve evolved from early electronics and prototype IoT solutions into a
            trusted partner for industrial automation and real-time monitoring. From initial field
            pilots and first commercial deployments through regional expansions, each milestone
            reflects measurable improvements in operational efficiency for our partners and frames
            how we scale practical automation and software projects.
          </p>
        </div>
      </section>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto mt-20 w-full max-w-[1080px] pb-16 sm:mt-24 sm:pb-20">
        <div className="mx-auto w-full max-w-[760px]">
          <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
            Impact
          </h2>
          <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
            Awards &amp; Sustainability
          </p>
          <p className="mt-6 text-[clamp(0.98rem,1.02vw,1.12rem)] leading-[1.8] text-[#2f435c]">
            At Sky Smart Technology, our engineering choices emphasize efficiency and longevity
            deploying energy-smart sensors, modular designs that extend device life, and secure
            software practices. These decisions help reduce operational waste and total cost of
            ownership for customers while enabling industrial operators to pursue stronger
            sustainability outcomes through better data visibility and optimized processes.
          </p>
        </div>
      </section>
      </div>

      <section ref={coreDnaSectionRef} className="mx-auto mt-20 w-full max-w-[1080px] pb-20 sm:mt-24 sm:pb-24">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-tight text-[#255ddf]">
            Core DNA [SYS-02]
          </h2>
          <p className="mt-3 text-[clamp(1.2rem,1.55vw,1.7rem)] leading-tight text-[#24364d]">
            What Drives Us
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {coreDnaStats.map((item, index) => {
            const suffix = item.value.replace(/\d+/g, '');

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-[#f7f8fb] px-7 py-8 text-center shadow-[0_1px_4px_rgba(20,35,58,0.08)] sm:px-8 sm:py-9"
              >
                <p className="text-[clamp(3rem,5.2vw,5.1rem)] font-bold leading-none text-[#2a5edf]">
                  {coreDnaAnimatedValues[index]}
                  {suffix}
                </p>
                <h3 className="mt-4 text-[clamp(1.5rem,2vw,2.1rem)] font-semibold text-[#0a1323]">{item.title}</h3>
                <p className="mt-3 text-[clamp(0.95rem,1vw,1.1rem)] leading-relaxed text-[#2f435c]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <section className="mx-auto mt-20 grid w-full max-w-[1080px] grid-cols-1 items-center gap-8 pb-20 sm:mt-24 sm:gap-10 sm:pb-24 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="text-[clamp(2.4rem,4.5vw,4.9rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-[#070a12]">
            Our Minds
            <span className="block">Architecting the</span>
            <span className="block text-[#255ddf]">Future</span>
          </h2>

          <p className="mt-8 max-w-[620px] text-[clamp(1.06rem,1.14vw,1.28rem)] leading-[1.7] text-[#2f435c]">
            Our diverse team of engineers and industry specialists is united by a single mission:
            to render the impossible, inevitable. We combine deep domain expertise with advanced
            software and intelligent technologies to solve complex industrial challenges.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-[0_10px_26px_rgba(20,35,58,0.14)]">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="Engineering team collaborating around a table"
            className="block h-[240px] w-full object-cover sm:h-[320px] lg:h-[390px]"
            loading="lazy"
          />
        </div>
      </section>
      </div>

      <div className="about-footer-soft -mx-4 sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default AboutPage;
