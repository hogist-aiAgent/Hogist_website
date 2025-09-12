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
import EventsCater from './EventsCater';
import TestimonialSection from './TestimonialSection';

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
      <ServeSection ref={serveRef} />
      <EventsCater/>
    
      <FeaturesSection /> 
      <MobileappSection /> 
       <TestimonialSection/>
     <HogistSection />
      <FaqSection ref={faqRef} />
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
