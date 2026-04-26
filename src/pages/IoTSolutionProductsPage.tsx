import React, { useMemo, useState } from "react";
import { Filter, House, Search } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

interface IoTProduct {
  title: string;
  description: string;
  category:
    | "Industrial IoT"
    | "Smart Sensors"
    | "Smart Building"
    | "Logistics"
    | "Smart City";
  year: string;
  imageUrl: string;
  imageAlt: string;
}

const iotProducts: IoTProduct[] = [
  {
    title: "Smart Factory IoT Hub",
    description:
      "Central IoT gateway connecting all factory sensors and devices to the cloud.",
    category: "Industrial IoT",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
    imageAlt: "Industrial IoT circuit board components",
  },
  {
    title: "Environmental Monitoring System",
    description:
      "IoT sensors for temperature, humidity, and air quality monitoring.",
    category: "Smart Sensors",
    year: "2023",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
    imageAlt: "Connected sensor wires and monitoring board",
  },
  {
    title: "Energy Management Platform",
    description:
      "Real-time energy consumption tracking and optimization system.",
    category: "Smart Building",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900",
    imageAlt: "Power transmission towers at sunset",
  },
  {
    title: "Predictive Maintenance System",
    description:
      "AI-powered predictive maintenance using vibration and temperature sensors.",
    category: "Industrial IoT",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900",
    imageAlt: "Engineering plans and IoT maintenance workflow",
  },
  {
    title: "Asset Tracking Solution",
    description:
      "GPS and RFID-based asset tracking for warehouse and transportation.",
    category: "Logistics",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900",
    imageAlt: "Digital asset tracking interface",
  },
  {
    title: "Smart Parking System",
    description:
      "IoT-based parking management with real-time occupancy detection.",
    category: "Smart City",
    year: "2023",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e8e8f4f58a3?w=900",
    imageAlt: "Tablet interface for smart city parking app",
  },
];

const iotProductFilters = [
  "All",
  ...Array.from(new Set(iotProducts.map((item) => item.category))),
];

const IoTSolutionProductsPage: React.FC = () => {
  useScrollToTop();

  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchValue.trim().toLowerCase();

    return iotProducts.filter((item) => {
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
              IOT SOLUTION PRODUCTS
            </span>
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] py-16 sm:py-20">
          <header className="text-center">
            <h1 className="m-0 text-[clamp(2.1rem,4vw,3.2rem)] font-bold text-[#070a12]">
              IoT Solution Products
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
                {iotProductFilters.map((filterItem) => (
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

export default IoTSolutionProductsPage;
