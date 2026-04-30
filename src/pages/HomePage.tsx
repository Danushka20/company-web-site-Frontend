import React from 'react';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import ServiceCardsSection from '../components/home/ServiceCardsSection';
import IntelligenceSection from '../components/home/IntelligenceSection';
import CoreServicesSection from '../components/home/CoreServicesSection';
import ResponseNetworkSection from '../components/home/ResponseNetworkSection';
import MultiDeviceSection from '../components/home/MultiDeviceSection';
import GlobalImpactSection from '../components/home/GlobalImpactSection';
import JourneySection from '../components/home/JourneySection';
import TrustedPartnersSection from '../components/home/TrustedPartnersSection';
import PricingSection from '../components/home/PricingSection';
import EcosystemSection from '../components/home/EcosystemSection';
import OutcomesSection from '../components/home/OutcomesSection';

const HomePage: React.FC = () => {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-white"
      style={{
        background:
          'radial-gradient(circle at 8% 15%, rgba(106, 131, 255, 0.28), transparent 32%), radial-gradient(circle at 82% 18%, rgba(76, 205, 255, 0.2), transparent 34%), linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.7)), #020711',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 15% 22%, rgba(255, 255, 255, 0.8), transparent), radial-gradient(1.6px 1.6px at 80% 16%, rgba(255, 255, 255, 0.6), transparent), radial-gradient(1.3px 1.3px at 72% 38%, rgba(255, 255, 255, 0.7), transparent), radial-gradient(1.8px 1.8px at 30% 68%, rgba(255, 255, 255, 0.4), transparent), radial-gradient(1.5px 1.5px at 92% 72%, rgba(255, 255, 255, 0.45), transparent)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(150% 90% at 50% 104%, rgba(66, 126, 255, 0.28), transparent 62%), linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 72%, rgba(0, 0, 0, 0.58))',
        }}
        aria-hidden="true"
      />

      <HeroSection />
      <ServiceCardsSection />
      <IntelligenceSection />
      <CoreServicesSection />
      <ResponseNetworkSection />
      <MultiDeviceSection />
      <GlobalImpactSection />
      <JourneySection />
      <TrustedPartnersSection />
      <PricingSection />
      <EcosystemSection />
      <OutcomesSection />

      <Footer />

      <section id="about" aria-hidden="true" className="home-anchor" />
      <section id="projects" aria-hidden="true" className="home-anchor" />
      <section id="interns" aria-hidden="true" className="home-anchor" />
      <section id="contact" aria-hidden="true" className="home-anchor" />
    </div>
  );
};

export default HomePage;
