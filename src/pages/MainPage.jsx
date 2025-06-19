import React from 'react'
import HeroSection from './HeroSection'
import ClientSection from './ClientSection'
import { Box } from '@mui/material'
import FeaturesSection from './Features/FeaturesSection'
import CateringSection from './Catering/CateringSection'

export default function MainPage() {
  return (
    <div>

        <HeroSection/>
        <ClientSection/>
       {/* <Box sx={{
        backgroundColor: 'black',
        padding: 4,
       }}>

 <SaladCarousel/>

       </Box> */}
       <FeaturesSection/>
       <CateringSection/>
    </div>
  )
}
