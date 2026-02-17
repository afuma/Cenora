import React from 'react';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import ServicesSection from './ServicesSection';
import AudienceSection from './AudienceSection';
import PricingSection from './PricingSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <AudienceSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;
