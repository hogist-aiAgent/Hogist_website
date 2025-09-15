import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import { Box } from '@mui/material';
import MonitoringSection from './MonitoringAndTracking';
import ServeSection from './ServeSection';
import MobileappSection from './MobileappSection';
import FaqSection from './FaqSection';
import VendorSection from './VendorSection';
import Footer from '../layout/Footer';
import EventsCater from './EventsCater';
import TestimonialSection from './TestimonialSection';
import AboutUs from './AboutUs';

import GallerySection from './GallerySection';
import ChooseUsSection from './Features/ChooseUsSection';

export default function MainPage() {
  const heroRef = useRef(null);
  const clientRef = useRef(null);
  const serveRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <HeroSection ref={heroRef} />
      <AboutUs ref={clientRef} />
      <ServeSection ref={serveRef} />
      <EventsCater/>
    
      <ChooseUsSection /> 
      <MobileappSection /> 
       <TestimonialSection/>
     <GallerySection />
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
