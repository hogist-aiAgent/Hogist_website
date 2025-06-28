import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import Carousel from '../../components/Carousel';

export default function FeaturesSection() {
    const theme = useTheme();
  return (
<Box
sx={{
        backgroundColor: 'black',
        padding: 4,
       }}
>
<Box sx={{
    paddingBottom: 4,
}}>
    <Typography variant="h6" fontWeight="bold" sx={{ color: 'white' }}>
              -Our <Box component="span" sx={{
                color:theme.palette.primary.secondary
              }}>Feature</Box>
            </Typography>
          
              <Typography variant="h5" fontWeight="bold" sx={{ color: 'white', mt: 2 }}>
                          Effortlessly oversee and enhance your daily catering.
                        </Typography>
</Box>
            <Carousel/>

</Box>
  )
}