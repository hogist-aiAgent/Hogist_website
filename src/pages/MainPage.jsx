import React from 'react'
import HeroSection from './HeroSection'
import ClientSection from './ClientSection'
import SaladCarousel from '../components/SaladCarousel'
import { Box } from '@mui/material'
import MonitoringSection from './MonitoringAndTracking'
import ServeSection from './ServeSection'
import MobileappSection from './MobileappSection'
import FaqSection from './FaqSection'
import HogistSection from './HogistSection'
import VendorSection from './VendorSection'
import Footer from '../layout/Footer'

export default function MainPage() {
  return (
    <div>

        <HeroSection/>
        <ClientSection/>
       <Box sx={{
        backgroundColor: 'black',
        padding: 4,
       }}>
        
 <SaladCarousel/>
<MonitoringSection/>
<ServeSection/>
<MobileappSection/>
<FaqSection/>
<HogistSection/>
<VendorSection/>
<Footer/>
       </Box>
    </div>
  )
}
