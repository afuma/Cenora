import React from 'react';
import HeroSection from '@/components/cenora/HeroSection';
import ServicesOverview from '@/components/cenora/ServicesOverview';
import WhySection from '@/components/cenora/WhySection';
import ProcessSection from '@/components/cenora/ProcessSection';
import TestimonialsSection from '@/components/cenora/TestimonialsSection';
import CTASection from '@/components/cenora/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <WhySection />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
}