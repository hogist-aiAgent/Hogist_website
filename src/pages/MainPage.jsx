import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import ClientSection from './ClientSection';
import { Box } from '@mui/material';
import MonitoringSection from './MonitoringAndTracking';
import ServeSection from './ServeSection';
import MobileappSection from './MobileappSection';
import FaqSection from './FaqSection';
import HogistSection from './HogistSection';
import VendorSection from './VendorSection';
import Footer from '../layout/Footer';
import FeaturesSection from './Features/FeaturesSection';
import CateringSection from './Catering/CateringSection';

export default function MainPage() {
  const heroRef = useRef(null);
  const clientRef = useRef(null);
  const serveRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <HeroSection ref={heroRef} />
      <ClientSection ref={clientRef} />
      <MonitoringSection />
      <ServeSection ref={serveRef} />
      <MobileappSection />
      <CateringSection />
      <FeaturesSection />
      <FaqSection ref={faqRef} />
      <HogistSection />
      <VendorSection />
      <Footer 
        refs={{
          heroRef,
          clientRef,
          serveRef,
          faqRef,
          contactRef
        }} 
      />
    </div>
  );
}
