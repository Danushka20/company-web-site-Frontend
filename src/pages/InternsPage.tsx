import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { House, Search, SlidersHorizontal, X } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import interns from "../data/internsData";

interface FiltersState {
  position: string;
  university: string;
  location: string;
  year: string;
  duration: string;
  skills: string[];
}

const defaultFilters: FiltersState = {
  position: "All Positions",
  university: "All Universities",
  location: "All Locations",
  year: "All Years",
  duration: "All Durations",
  skills: [],
};

const inferLocation = (academy: string): string => {
  const normalizedAcademy = academy.toLowerCase();

  if (
    normalizedAcademy.includes("colombo") ||
    normalizedAcademy.includes("apiit")
  ) {
    return "Colombo";
  }

  if (normalizedAcademy.includes("sliit")) {
    return "Malabe";
  }

  if (normalizedAcademy.includes("esoft")) {
    return "Colombo";
  }

  if (normalizedAcademy.includes("sliate")) {
    return "Kegalle";
  }

  if (normalizedAcademy.includes("nbm")) {
    return "Colombo";
  }

  return "Not Specified";
};

const inferYear = (institute: string): string => {
  const normalizedInstitute = institute.toLowerCase();

  if (
    normalizedInstitute.includes("bsc") ||
    normalizedInstitute.includes("ba")
  ) {
    return "Undergraduate";
  }

  if (
    normalizedInstitute.includes("hnd") ||
    normalizedInstitute.includes("higher diploma")
  ) {
    return "Diploma";
  }

  return "Not Specified";
};

const InternsPage: React.FC = () => {
  useScrollToTop();
  const [query, setQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] =
    useState<FiltersState>(defaultFilters);
  const [draftFilters, setDraftFilters] =
    useState<FiltersState>(defaultFilters);

  const filterOptions = useMemo(() => {
    const positions = Array.from(
      new Set(interns.map((intern) => intern.role)),
    ).sort();
    const universities = Array.from(
      new Set(interns.map((intern) => intern.academy)),
    ).sort();
    const locations = Array.from(
      new Set(interns.map((intern) => inferLocation(intern.academy))),
    ).sort();
    const years = Array.from(
      new Set(interns.map((intern) => inferYear(intern.institute))),
    ).sort();
    const durations = Array.from(
      new Set(interns.map((intern) => intern.duration)),
    ).sort();
    const skills = Array.from(
      new Set(interns.flatMap((intern) => intern.skills)),
    ).sort((a, b) => a.localeCompare(b));

    return { positions, universities, locations, years, durations, skills };
  }, []);

  const filteredInterns = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return interns.filter((intern) => {
      if (
        appliedFilters.position !== defaultFilters.position &&
        intern.role !== appliedFilters.position
      ) {
        return false;
      }

      if (
        appliedFilters.university !== defaultFilters.university &&
        intern.academy !== appliedFilters.university
      ) {
        return false;
      }

      if (
        appliedFilters.location !== defaultFilters.location &&
        inferLocation(intern.academy) !== appliedFilters.location
      ) {
        return false;
      }

      if (
        appliedFilters.year !== defaultFilters.year &&
        inferYear(intern.institute) !== appliedFilters.year
      ) {
        return false;
      }

      if (
        appliedFilters.duration !== defaultFilters.duration &&
        intern.duration !== appliedFilters.duration
      ) {
        return false;
      }

      if (
        appliedFilters.skills.length > 0 &&
        !appliedFilters.skills.every((skill) => intern.skills.includes(skill))
      ) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        intern.name,
        intern.role,
        intern.institute,
        intern.academy,
        intern.track,
        intern.skills.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [appliedFilters, query]);

  const updateDraftFilter = <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K],
  ) => {
    setDraftFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    setAppliedFilters(draftFilters);
  };

  const handleResetFilters = () => {
    setDraftFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
  };

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />

      <div className="-mx-4 border-b border-slate-300/75 bg-[#eceef1] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] pt-[106px] pb-[40px] sm:pt-[122px] sm:pb-[44px] lg:pt-[130px] lg:pb-[48px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/75 px-5 py-2 text-sm tracking-[0.04em] text-[#4f627b]">
            <House size={14} strokeWidth={2.1} aria-hidden="true" />
            <span>MAIN</span>
            <span>-</span>
            <span className="font-medium text-[#255ddf]">INTERNS</span>
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20">
          <header className="text-center">
            <h1 className="m-0 text-[clamp(2.1rem,4vw,3.2rem)] font-bold text-[#070a12]">
              Our Interns
            </h1>
            <p className="m-0 mt-4 text-[1.02rem] text-[#4f627b]">
              Meet the talented individuals who are learning and growing with us
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_auto]">
            <label className="relative block">
              <Search
                size={16}
                strokeWidth={2}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8192a8]"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search interns (name, skills, technologies...)"
                className="h-12 w-full rounded-[999px] border border-slate-300/80 bg-white pl-11 pr-4 text-[0.95rem] text-[#24364d] outline-none transition-colors focus:border-blue-500"
                type="text"
              />
            </label>

            <button
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 text-[0.95rem] font-medium text-white shadow-[0_10px_20px_rgba(37,99,235,0.2)]"
              type="button"
            >
              <Search size={16} />
              Search
            </button>

            <button
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white px-6 text-[0.95rem] font-medium text-[#255ddf]"
              type="button"
              onClick={() => setIsFiltersOpen((prev) => !prev)}
            >
              <SlidersHorizontal size={16} />
              Advanced Filters
            </button>
          </div>

          {isFiltersOpen ? (
            <div className="mt-5 rounded-[20px] border border-slate-300/80 bg-[#f3f4f6] px-6 py-6 shadow-[0_10px_22px_rgba(15,23,42,0.14)] sm:px-7 sm:py-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="m-0 text-[2rem] font-semibold text-[#07102a]">
                  Advanced Filters
                </h3>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-none bg-transparent text-[#64748b]"
                  aria-label="Close advanced filters"
                  onClick={() => setIsFiltersOpen(false)}
                >
                  <X size={22} strokeWidth={2.2} />
                </button>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-6 lg:grid-cols-3">
                <label className="block">
                  <span className="block text-[1.02rem] font-semibold text-[#2e3f58]">
                    Position
                  </span>
                  <select
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-300/85 bg-white px-4 text-[1.05rem] text-[#07102a] outline-none focus:border-blue-500"
                    value={draftFilters.position}
                    onChange={(event) =>
                      updateDraftFilter("position", event.target.value)
                    }
                  >
                    <option>{defaultFilters.position}</option>
                    {filterOptions.positions.map((position) => (
                      <option key={position}>{position}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="block text-[1.02rem] font-semibold text-[#2e3f58]">
                    University
                  </span>
                  <select
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-300/85 bg-white px-4 text-[1.05rem] text-[#07102a] outline-none focus:border-blue-500"
                    value={draftFilters.university}
                    onChange={(event) =>
                      updateDraftFilter("university", event.target.value)
                    }
                  >
                    <option>{defaultFilters.university}</option>
                    {filterOptions.universities.map((university) => (
                      <option key={university}>{university}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="block text-[1.02rem] font-semibold text-[#2e3f58]">
                    Town / Location
                  </span>
                  <select
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-300/85 bg-white px-4 text-[1.05rem] text-[#07102a] outline-none focus:border-blue-500"
                    value={draftFilters.location}
                    onChange={(event) =>
                      updateDraftFilter("location", event.target.value)
                    }
                  >
                    <option>{defaultFilters.location}</option>
                    {filterOptions.locations.map((location) => (
                      <option key={location}>{location}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="block text-[1.02rem] font-semibold text-[#2e3f58]">
                    Year
                  </span>
                  <select
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-300/85 bg-white px-4 text-[1.05rem] text-[#07102a] outline-none focus:border-blue-500"
                    value={draftFilters.year}
                    onChange={(event) =>
                      updateDraftFilter("year", event.target.value)
                    }
                  >
                    <option>{defaultFilters.year}</option>
                    {filterOptions.years.map((year) => (
                      <option key={year}>{year}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="block text-[1.02rem] font-semibold text-[#2e3f58]">
                    Skills
                  </span>
                  <select
                    multiple
                    size={4}
                    className="mt-2 w-full rounded-2xl border border-slate-300/85 bg-white px-4 py-3 text-[1.05rem] text-[#07102a] outline-none focus:border-blue-500"
                    value={draftFilters.skills}
                    onChange={(event) => {
                      const selectedSkills = Array.from(
                        event.target.selectedOptions,
                      ).map((option) => option.value);
                      updateDraftFilter("skills", selectedSkills);
                    }}
                  >
                    {filterOptions.skills.map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                  <span className="mt-2 block text-[0.85rem] text-[#64748b]">
                    Hold Ctrl/Cmd to select multiple
                  </span>
                </label>

                <label className="block">
                  <span className="block text-[1.02rem] font-semibold text-[#2e3f58]">
                    Internship Duration
                  </span>
                  <select
                    className="mt-2 h-12 w-full rounded-2xl border border-slate-300/85 bg-white px-4 text-[1.05rem] text-[#07102a] outline-none focus:border-blue-500"
                    value={draftFilters.duration}
                    onChange={(event) =>
                      updateDraftFilter("duration", event.target.value)
                    }
                  >
                    <option>{defaultFilters.duration}</option>
                    {filterOptions.durations.map((duration) => (
                      <option key={duration}>{duration}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleApplyFilters}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f76f0] px-8 text-[1.05rem] font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)]"
                >
                  Apply Filters
                </button>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300/90 bg-white px-8 text-[1.05rem] font-semibold text-[#07102a]"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          ) : null}

          <div className="mt-4 text-[0.85rem] text-[#6b7a8f]">
            Showing {filteredInterns.length} of {interns.length} interns
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInterns.map((intern) => {
              const visibleSkills = intern.skills.slice(0, 3);
              const extraSkillCount =
                intern.skills.length - visibleSkills.length;

              return (
                <article
                  key={intern.id}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_22px_rgba(20,35,58,0.08)]"
                >
                  <div className="relative">
                    <img
                      src={intern.imageUrl}
                      alt={intern.name}
                      className="block h-[200px] w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-[0.72rem] font-medium text-white">
                      {intern.status}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="mb-1 text-[1.05rem] font-semibold text-[#07102a]">
                      {intern.name}
                    </h3>
                    <p className="mb-3 text-[0.85rem] font-medium text-[#2f65e8]">
                      {intern.role}
                    </p>
                    <p className="text-[0.85rem] text-[#5b6b80]">
                      {intern.institute}
                    </p>
                    <p className="mb-3 text-[0.85rem] text-[#5b6b80]">
                      {intern.academy}
                    </p>

                    <div className="mb-4 text-[0.8rem] text-[#6b7a8f]">
                      {intern.duration} • {intern.track}
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {visibleSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-200/80 bg-[#f5f7fa] px-2 py-1 text-[0.72rem] text-[#475b7a]"
                        >
                          {skill}
                        </span>
                      ))}
                      {extraSkillCount > 0 && (
                        <span className="rounded-full border border-slate-200/80 bg-[#f5f7fa] px-2 py-1 text-[0.72rem] text-[#475b7a]">
                          +{extraSkillCount} more
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/interns/${intern.id}`}
                      className="text-[0.85rem] font-medium text-[#255ddf] hover:text-blue-700"
                    >
                      View Profile →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <div className="-mx-4 about-footer-soft sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default InternsPage;
