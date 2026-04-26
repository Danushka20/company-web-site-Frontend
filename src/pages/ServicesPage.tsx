import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ServiceHeroSection from "../components/services/ServiceHeroSection";
import AndonSection from "../components/services/AndonSection";
import ServiceStatsSection from "../components/services/ServiceStatsSection";
import WhatWeDoSection from "../components/services/WhatWeDoSection";
import SoftwareDevelopmentSection from "../components/services/SoftwareDevelopmentSection";
import IoTSolutionsSection from "../components/services/IoTSolutionsSection";
import AndonSystemSection from "../components/services/AndonSystemSection";
import AndonSoftwareSection from "../components/services/AndonSoftwareSection";
import AndonHardwareSection from "../components/services/AndonHardwareSection";
import { getServiceItemFromSlug } from "../data/servicesData";
import { useScrollToTop } from "../hooks/useScrollToTop";

const ServicesPage: React.FC = () => {
  useScrollToTop();
  const { serviceSlug } = useParams<{ serviceSlug?: string }>();
  const selectedService = getServiceItemFromSlug(serviceSlug).label;

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />

      <ServiceHeroSection />

      {selectedService === "Software Development" ? (
        <SoftwareDevelopmentSection />
      ) : selectedService === "IoT Solutions" ? (
        <IoTSolutionsSection />
      ) : selectedService === "Andon System" ? (
        <AndonSystemSection />
      ) : selectedService === "Andon System - Software" ? (
        <AndonSoftwareSection />
      ) : selectedService === "Andon System - Hardware" ? (
        <AndonHardwareSection />
      ) : (
        <>
          <AndonSection />
          <ServiceStatsSection />
          <WhatWeDoSection />
        </>
      )}

      <div className="-mx-4 about-footer-soft sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default ServicesPage;
