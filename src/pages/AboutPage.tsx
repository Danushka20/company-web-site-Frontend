import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AboutHeroSection from "../components/about/AboutHeroSection";
import VisionMissionSection from "../components/about/VisionMissionSection";
import TechnologySection from "../components/about/TechnologySection";
import MilestonesSection from "../components/about/MilestonesSection";
import ImpactSection from "../components/about/ImpactSection";
import ExperienceSection from "../components/about/ExperienceSection";
import TeamSection from "../components/about/TeamSection";
import FeedbackForm from "../components/feedback/FeedbackForm";
import { useScrollToTop } from "../hooks/useScrollToTop";

const AboutPage: React.FC = () => {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />
      <AboutHeroSection />
      <TeamSection />
      <VisionMissionSection />
      <TechnologySection />
      <MilestonesSection />
      <ImpactSection />
      <ExperienceSection />
      <FeedbackForm />

      <div className="about-footer-soft -mx-4 sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default AboutPage;
