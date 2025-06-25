import React from 'react'
import HeroSection from './HeroSection'
import ClientSection from './ClientSection'
import { Box } from '@mui/material'
import MonitoringSection from './MonitoringAndTracking'
import ServeSection from './ServeSection'
import MobileappSection from './MobileappSection'
import FaqSection from './FaqSection'
import HogistSection from './HogistSection'
import VendorSection from './VendorSection'
import Footer from '../layout/Footer'
import FeaturesSection from './Features/FeaturesSection'
import CateringSection from './Catering/CateringSection'

export default function MainPage() {
  return (
    <div>

        <HeroSection/>
        <ClientSection/>
      
<MonitoringSection/>
<ServeSection/>
<MobileappSection/>
       <CateringSection/>
       <FeaturesSection/>
<FaqSection/>
<HogistSection/>
<VendorSection/>
<Footer/>
      
    </div>
  )
}
