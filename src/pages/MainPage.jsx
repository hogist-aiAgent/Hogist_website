import React from 'react'
import HeroSection from './HeroSection'
import ClientSection from './ClientSection'
import SaladCarousel from '../components/SaladCarousel'
import { Box } from '@mui/material'

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

       </Box>
    </div>
  )
}
