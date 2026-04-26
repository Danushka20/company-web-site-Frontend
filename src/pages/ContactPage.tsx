import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import MapSection from '../components/contact/MapSection';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ContactPage: React.FC = () => {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />
      <ContactHeroSection />
      <MapSection />

      <div className="about-footer-soft -mx-4 sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default ContactPage;
