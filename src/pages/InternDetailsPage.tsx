import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';
import interns from '../data/internsData';

const InternDetailsPage: React.FC = () => {
  useScrollToTop();
  const { internId } = useParams<{ internId?: string }>();
  const navigate = useNavigate();
  const intern = interns.find((item) => item.id === internId);

  if (!intern) {
    return (
      <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
        <Navbar />
        <div className="mx-auto max-w-[1080px] py-20 text-center">
          <h1 className="text-2xl font-bold">Intern not found</h1>
          <button
            onClick={() => navigate('/interns')}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            ← Back to Our Interns
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] pt-8 pb-8">
          <button
            onClick={() => navigate('/interns')}
            className="inline-flex items-center gap-2 text-[#255ddf] hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={18} />
            Back to Our Interns
          </button>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 pb-12 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px]">
          <div className="rounded-2xl bg-gradient-to-r from-[#1e40ff] to-[#1d4ed8] p-6 text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white/40 bg-white">
                <img
                  src={intern.imageUrl}
                  alt={intern.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h1 className="text-[1.6rem] font-bold sm:text-[2rem]">
                  {intern.name}
                </h1>
                <p className="text-[0.95rem] text-white/90">{intern.role}</p>
                <p className="mt-2 text-[0.85rem] text-white/80">
                  {intern.institute}
                </p>
                <p className="text-[0.85rem] text-white/80">{intern.academy}</p>
                <div className="mt-3 inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-[0.72rem] font-medium text-white">
                  {intern.status}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#2f65e8]">
                  Education
                </h3>
                <p className="text-[0.9rem] font-medium text-[#07102a]">
                  {intern.institute}
                </p>
                <p className="text-[0.85rem] text-[#5b6b80]">{intern.academy}</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#2f65e8]">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {intern.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200/80 bg-[#f5f7fa] px-2 py-1 text-[0.72rem] text-[#475b7a]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#2f65e8]">
                  Department
                </h3>
                <p className="text-[0.9rem] text-[#5b6b80]">{intern.department}</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#2f65e8]">
                  Duration
                </h3>
                <p className="text-[0.9rem] text-[#5b6b80]">{intern.duration}</p>
              </div>
            </aside>

            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h2 className="mb-3 text-lg font-semibold text-[#07102a]">About {intern.name}</h2>
                <p className="text-[0.95rem] leading-relaxed text-[#5b6b80]">
                  {intern.about}
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h2 className="mb-3 text-lg font-semibold text-[#07102a]">Projects Worked On</h2>
                <ul className="space-y-2 text-[0.95rem] text-[#5b6b80]">
                  {intern.projectsWorkedOn.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#255ddf]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h2 className="mb-3 text-lg font-semibold text-[#07102a]">Key Responsibilities</h2>
                <ul className="space-y-2 text-[0.95rem] text-[#5b6b80]">
                  {intern.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#255ddf]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h2 className="mb-3 text-lg font-semibold text-[#07102a]">Achievements & Impact</h2>
                <p className="text-[0.95rem] leading-relaxed text-[#5b6b80]">
                  {intern.achievements}
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h2 className="mb-3 text-lg font-semibold text-[#07102a]">Learning Experience</h2>
                <p className="text-[0.95rem] leading-relaxed text-[#5b6b80]">
                  {intern.learning}
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>

      <div className="-mx-4 about-footer-soft sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default InternDetailsPage;
