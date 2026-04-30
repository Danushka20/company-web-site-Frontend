import React from 'react';
import { House, Mail, MapPin, Phone } from 'lucide-react';

const ContactHeroSection: React.FC = () => {
  return (
    <>
      <section className="mx-auto w-full max-w-[1180px] pt-[106px] pb-[110px] sm:pt-[122px] sm:pb-[126px] lg:pt-[130px] lg:pb-[150px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/75 px-5 py-2 text-sm tracking-[0.04em] text-[#4f627b]">
          <House size={14} strokeWidth={2.1} aria-hidden="true" />
          <span>MAIN</span>
          <span>-</span>
          <span className="font-medium text-[#255ddf]">CONTACT</span>
        </div>

        <div className="mx-auto mt-[132px] max-w-[920px] text-center sm:mt-[150px] lg:mt-[165px]">
          <p className="m-0 text-[0.96rem] uppercase tracking-[0.09em] text-[#255ddf]">
            COMMUNICATION TERMINAL [COM-01]
          </p>

          <h1 className="m-0 mt-7 text-[clamp(3rem,6.6vw,6rem)] font-semibold leading-[1.03] tracking-[-0.01em] text-[#070a12]">
            ESTABLISH
            <span className="mt-2 block text-[#255ddf]">CONNECTION</span>
          </h1>

          <p className="mx-auto mt-10 max-w-[980px] text-[clamp(1.12rem,1.48vw,2rem)] leading-[1.62] text-[#314962]">
            Our engineering support team is ready to analyze your industrial challenges. Deploy a
            message directly to our core system for rapid response.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] pb-20 sm:pb-24 lg:pb-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.98fr] lg:gap-8">
          <div className="space-y-4">
            <article className="rounded-2xl border border-slate-200 bg-[#f7f8fa] px-6 py-6 shadow-[0_6px_16px_rgba(20,35,58,0.06)] sm:px-7">
              <div className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#e7edf6] text-[#1f5be5]">
                <Mail size={17} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="m-0 mt-3 text-[1.25rem] font-medium text-[#070a12]">Email</h3>
              <a href="mailto:info@skysmart.lk" className="mt-3 inline-block text-[1rem] text-[#255ddf] no-underline">
                info@skysmart.lk
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#f7f8fa] px-6 py-6 shadow-[0_6px_16px_rgba(20,35,58,0.06)] sm:px-7">
              <div className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#e7edf6] text-[#1f5be5]">
                <Phone size={17} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="m-0 mt-3 text-[1.25rem] font-medium text-[#070a12]">Phone</h3>
              <a href="tel:+94352278457" className="mt-3 inline-block text-[1rem] text-[#255ddf] no-underline">
                035 227 8457
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#f7f8fa] px-6 py-6 shadow-[0_6px_16px_rgba(20,35,58,0.06)] sm:px-7">
              <div className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#e7edf6] text-[#1f5be5]">
                <MapPin size={17} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="m-0 mt-3 text-[1.25rem] font-medium text-[#070a12]">Address</h3>
              <p className="m-0 mt-3 text-[1rem] leading-[1.7] text-[#255ddf]">
                No. A/59, Hungampola, Moronthota, Kegalle, Sri Lanka
              </p>
            </article>
          </div>

          <div className="rounded-2xl bg-[#172338] px-6 py-6 text-[#d6e4ff] shadow-[0_14px_30px_rgba(7,12,22,0.3)] sm:px-8 sm:py-7">
            <h2 className="m-0 text-[1.55rem] font-medium tracking-[0.03em] text-white">DIRECT_MESSAGE</h2>

            <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-[0.88rem] font-medium text-[#e5efff]">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  className="h-11 w-full rounded-lg border border-[#4a5873] bg-[#22304a] px-3.5 text-[0.95rem] text-[#e9f1ff] outline-none transition-colors placeholder:text-[#95a4be] focus:border-[#5e8dff]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-[0.88rem] font-medium text-[#e5efff]">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-11 w-full rounded-lg border border-[#4a5873] bg-[#22304a] px-3.5 text-[0.95rem] text-[#e9f1ff] outline-none transition-colors placeholder:text-[#95a4be] focus:border-[#5e8dff]"
                />
              </div>

              <div>
                <label htmlFor="contact-number" className="mb-1.5 block text-[0.88rem] font-medium text-[#e5efff]">
                  Contact Number
                </label>
                <input
                  id="contact-number"
                  type="tel"
                  placeholder="Your Phone Number"
                  className="h-11 w-full rounded-lg border border-[#4a5873] bg-[#22304a] px-3.5 text-[0.95rem] text-[#e9f1ff] outline-none transition-colors placeholder:text-[#95a4be] focus:border-[#5e8dff]"
                />
              </div>

              <div>
                <label htmlFor="contact-category" className="mb-1.5 block text-[0.88rem] font-medium text-[#e5efff]">
                  Category
                </label>
                <select
                  id="contact-category"
                  className="h-11 w-full rounded-lg border border-[#4a5873] bg-[#22304a] px-3.5 text-[0.95rem] text-[#e9f1ff] outline-none transition-colors focus:border-[#5e8dff]"
                  defaultValue="General Inquiry"
                >
                  <option>General Inquiry</option>
                  <option>Project Consultation</option>
                  <option>Support Request</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-[0.88rem] font-medium text-[#e5efff]">
                  Message Body
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your message..."
                  rows={6}
                  className="w-full resize-none rounded-lg border border-[#4a5873] bg-[#22304a] px-3.5 py-3 text-[0.95rem] text-[#e9f1ff] outline-none transition-colors placeholder:text-[#95a4be] focus:border-[#5e8dff]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#255ddf] text-[0.98rem] font-medium text-white transition-colors hover:bg-[#1f52c8]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHeroSection;
