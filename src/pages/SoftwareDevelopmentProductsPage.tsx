import React, { useMemo, useState } from "react";
import { Filter, House, Search } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

interface SoftwareProduct {
  title: string;
  description: string;
  category:
    | "Enterprise Software"
    | "Logistics"
    | "Manufacturing"
    | "CRM"
    | "Quality Assurance";
  year: string;
  imageUrl: string;
  imageAlt: string;
}

const softwareProducts: SoftwareProduct[] = [
  {
    title: "Enterprise Resource Planning System",
    description:
      "Comprehensive ERP solution for manufacturing industries with real-time inventory tracking.",
    category: "Enterprise Software",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900",
    imageAlt: "ERP dashboard on laptop screen",
  },
  {
    title: "Smart Warehouse Management",
    description:
      "Cloud-based warehouse management system with AI-powered optimization.",
    category: "Logistics",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
    imageAlt: "Warehouse analytics dashboard",
  },
  {
    title: "Production Tracking Dashboard",
    description:
      "Real-time production monitoring with KPI analytics and reporting tools.",
    category: "Manufacturing",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=900",
    imageAlt: "Production tracking software on laptop",
  },
  {
    title: "Quality Control Platform",
    description:
      "Automated quality inspection system with defect detection and reporting.",
    category: "Quality Assurance",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
    imageAlt: "Quality control analytics charts",
  },
  {
    title: "Customer Portal System",
    description:
      "Self-service customer portal with order tracking and support ticketing.",
    category: "CRM",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900",
    imageAlt: "Customer portal dashboard on desktop",
  },
  {
    title: "Mobile Fleet Manager",
    description:
      "Mobile application for fleet management and delivery tracking.",
    category: "Logistics",
    year: "2023",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",
    imageAlt: "Smartphone with business mobile app icons",
  },
];

const softwareProductFilters = [
  "All",
  ...Array.from(new Set(softwareProducts.map((item) => item.category))),
];

const SoftwareDevelopmentProductsPage: React.FC = () => {
  useScrollToTop();

  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchValue.trim().toLowerCase();

    return softwareProducts.filter((item) => {
      const filterMatch =
        selectedFilter === "All" || item.category === selectedFilter;
      const searchMatch =
        normalizedQuery.length === 0 ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery);

      return filterMatch && searchMatch;
    });
  }, [searchValue, selectedFilter]);

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />

      <div className="-mx-4 border-b border-slate-300/75 bg-[#eceef1] px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] pt-[106px] pb-[40px] sm:pt-[122px] sm:pb-[44px] lg:pt-[130px] lg:pb-[48px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-200/75 px-5 py-2 text-sm tracking-[0.04em] text-[#4f627b]">
            <House size={14} strokeWidth={2.1} aria-hidden="true" />
            <span>MAIN</span>
            <span>-</span>
            <span className="font-medium text-[#255ddf]">
              SOFTWARE DEVELOPMENT PRODUCTS
            </span>
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20">
          <header className="text-center">
            <h1 className="m-0 text-[clamp(2.1rem,4vw,3.2rem)] font-bold text-[#070a12]">
              Software Development Products
            </h1>
            <p className="m-0 mt-4 text-[1.02rem] text-[#4f627b]">
              Explore our portfolio of successful projects and innovative
              solutions
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_190px]">
            <label className="relative block">
              <Search
                size={16}
                strokeWidth={2}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8192a8]"
                aria-hidden="true"
              />
              <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search products..."
                className="h-12 w-full rounded-[12px] border border-slate-300/80 bg-white pl-11 pr-4 text-[0.95rem] text-[#24364d] outline-none transition-colors focus:border-blue-500"
                type="text"
              />
            </label>

            <div className="relative">
              <Filter
                size={16}
                strokeWidth={2}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8192a8]"
                aria-hidden="true"
              />
              <select
                value={selectedFilter}
                onChange={(event) => setSelectedFilter(event.target.value)}
                className="h-12 w-full appearance-none rounded-[12px] border border-slate-300/80 bg-white pl-11 pr-10 text-[0.95rem] text-[#24364d] outline-none transition-colors focus:border-blue-500"
              >
                {softwareProductFilters.map((filterItem) => (
                  <option key={filterItem} value={filterItem}>
                    {filterItem}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => (
              <article
                key={`${item.title}-${item.year}`}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_22px_rgba(20,35,58,0.08)]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="block h-[210px] w-full object-cover"
                  loading="lazy"
                />

                <div className="px-4 py-4">
                  <div className="flex items-center gap-2 text-[0.72rem] font-medium">
                    <span className="rounded-full bg-[#e6edff] px-2 py-1 text-[#2f65e8]">
                      {item.category}
                    </span>
                    <span className="text-[#8192a8]">{item.year}</span>
                  </div>

                  <h2 className="m-0 mt-4 text-[1.1rem] font-semibold text-[#0f1726]">
                    {item.title}
                  </h2>
                  <p className="m-0 mt-2 text-[0.92rem] leading-[1.65] text-[#4f627b]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <p className="m-0 mt-8 text-center text-[0.96rem] text-[#6c7d95]">
              No products found for your search/filter.
            </p>
          ) : null}
        </section>
      </div>

      <div className="-mx-4 about-footer-soft sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default SoftwareDevelopmentProductsPage;
