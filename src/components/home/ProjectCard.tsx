import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="block h-[220px] w-full object-cover rounded-t-2xl"
          loading="lazy"
        />
        {project.status && (
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[0.75rem] font-medium text-white ${
              project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
            }`}
          >
            {project.status}
          </span>
        )}
      </div>

      <div className="px-5 py-5">
        <div className="mb-3 text-[0.78rem] font-medium">
          <Link to="#" className="text-[#2f65e8]">
            {project.category}
          </Link>
        </div>

        <h3 className="mb-2 text-[1.05rem] font-semibold text-[#07102a]">
          {project.title}
        </h3>

        <p className="mb-4 text-[0.95rem] text-[#5b6b80]">{project.description}</p>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-2 text-[0.85rem] text-[#6b7a8f]">
            <Calendar size={16} />
            <span>{project.date}</span>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((t, idx) => (
            <span
              key={`${t}-${idx}`}
              className="rounded-full border border-slate-200/80 bg-[#f5f7fa] px-2 py-1 text-[0.72rem] text-[#475b7a]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-2 border-t border-slate-100 pt-4">
          <Link to={`/projects/${project.id}`} className="text-[#255ddf] font-medium">
            View Details <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
