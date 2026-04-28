import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';
import projects from '../data/projectsData';

const ProjectDetailsPage: React.FC = () => {
  useScrollToTop();
  const { projectId } = useParams<{ projectId?: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
        <Navbar />
        <div className="mx-auto max-w-[1080px] py-20 text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            ← Back to Projects
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
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-[#255ddf] hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px]">
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-[0.75rem] font-medium text-white ${
                project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
              }`}
            >
              {project.status}
            </span>
            <span className="rounded-full border border-slate-300 bg-[#eef2ff] px-3 py-1 text-[0.75rem] font-medium text-[#255ddf]">
              {project.category}
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-[#070a12]">{project.title}</h1>

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-[#070a12]">Project Overview</h2>
                <p className="text-[1rem] leading-relaxed text-[#5b6b80]">
                  {project.overview}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-[#070a12]">Challenges</h2>
                <p className="text-[1rem] leading-relaxed text-[#5b6b80]">
                  {project.challenges}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-[#070a12]">Our Solution</h2>
                <p className="text-[1rem] leading-relaxed text-[#5b6b80]">
                  {project.solution}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold text-[#070a12]">Results & Impact</h2>
                <p className="text-[1rem] leading-relaxed text-[#5b6b80]">
                  {project.results}
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-6 text-lg font-semibold text-[#070a12]">Project Details</h3>

                <div className="mb-6 border-b border-slate-200/80 pb-6">
                  <div className="mb-2 text-[0.85rem] font-medium text-[#6b7a8f]">Date</div>
                  <div className="flex items-center gap-2 text-[0.95rem] font-medium text-[#070a12]">
                    <Calendar size={16} />
                    {project.date}
                  </div>
                </div>

                <div className="mb-6 border-b border-slate-200/80 pb-6">
                  <div className="mb-2 text-[0.85rem] font-medium text-[#6b7a8f]">Client</div>
                  <div className="text-[0.95rem] font-medium text-[#070a12]">{project.client}</div>
                </div>

                <div className="mb-6 border-b border-slate-200/80 pb-6">
                  <div className="mb-2 text-[0.85rem] font-medium text-[#6b7a8f]">Team Size</div>
                  <div className="text-[0.95rem] font-medium text-[#070a12]">{project.teamSize}</div>
                </div>

                <div className="mb-6">
                  <div className="mb-2 text-[0.85rem] font-medium text-[#6b7a8f]">Duration</div>
                  <div className="text-[0.95rem] font-medium text-[#070a12]">{project.duration}</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-4 text-lg font-semibold text-[#070a12]">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={`${tag}-${idx}`}
                      className="rounded-full border border-slate-200/80 bg-[#f5f7fa] px-3 py-2 text-[0.8rem] text-[#475b7a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 py-20 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px]">
          <h2 className="mb-12 text-3xl font-bold text-[#070a12]">Project Gallery</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.galleryImages?.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={`Project gallery ${idx + 1}`}
                  className="h-[240px] w-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-[#f4f5f7] px-4 py-20 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px]">
          <h2 className="mb-12 text-3xl font-bold text-[#070a12]">More Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.id !== projectId)
              .slice(0, 3)
              .map((p) => (
                <article
                  key={p.id}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_22px_rgba(20,35,58,0.08)]"
                >
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="block h-[200px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <div className="mb-2 text-[0.78rem] font-medium text-[#2f65e8]">
                      {p.category}
                    </div>
                    <h3 className="mb-2 text-[1rem] font-semibold text-[#07102a]">
                      {p.title}
                    </h3>
                    <p className="mb-4 text-[0.9rem] text-[#5b6b80]">{p.description}</p>
                    <button
                      onClick={() => {
                        navigate(`/projects/${p.id}`);
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                      }}
                      className="text-[#255ddf] font-medium hover:text-blue-700"
                    >
                      View Details →
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </div>

      <div className="-mx-4 about-footer-soft sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default ProjectDetailsPage;
