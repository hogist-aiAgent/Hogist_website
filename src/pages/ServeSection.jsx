import { Typography, Box, Container, useTheme, Grid } from '@mui/material';
import React from 'react';
import Order_food from '../assets/ServePage/Order_food.png';
import scooty from '../assets/ServePage/scooty.png';
import Waiters from '../assets/ServePage/Waiters.png';

export default function ServeSection() {
  const theme = useTheme();
  return (
    <Box  id="serve-section" sx={{ bgcolor: 'white', minHeight: '100vh', py: { xs: 2, md: 4 } }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" sx={{ 
          textAlign: 'center', 
          mb: { xs: 1, md: 2 }, 
          color: theme.palette.primary.secondary, 
          paddingTop: { xs: '15px', md: '30px' },
          fontSize: { xs: '1.5rem', md: '2.125rem' } 
        }}>
          WHAT WE SERVE
        </Typography>
        <Typography variant="h3" fontWeight="bold" sx={{ 
          textAlign: 'center', 
          mb: { xs: 2, md: 4 }, 
          color: 'black',
          fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } 
        }}>
          Your Favorite Food Delivery Partner
        </Typography>
        
        <Grid container justifyContent="center" sx={{ 
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: { xs: 2, md: '140px' },
          alignItems: 'center'
        }}>
          <Grid item xs={12} md="auto">
            <Box sx={{ textAlign: 'center', p: { xs: 1, md: 3 } }}>
              <Box component="img" src={Order_food} alt="Easy To Order" sx={{ 
                height: { xs: 120, md: 200 },
                mb: { xs: 2, md: 4 },
                objectFit: 'contain'
              }} />
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: theme.palette.primary.secondary }}>
                  Meal Box
              </Typography>
              <Typography variant="body1" color="black">
                Customizable Meal Boxes for All Events
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md="auto">
            <Box sx={{ textAlign: 'center', p: { xs: 1, md: 3 } }}>
              <Box component="img" src={scooty} alt="Fastest Delivery" sx={{ 
                height: { xs: 130, md: 210 },
                mb: { xs: 1, md: 2 },
                objectFit: 'contain'
              }} />
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: theme.palette.primary.secondary }}>
                Delivery Box
              </Typography>
              <Typography variant="body1" color="black">
                Party-Ready Meal Delivery for Gatherings
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md="auto">
            <Box sx={{ textAlign: 'center', p: { xs: 1, md: 3 } }}>
              <Box component="img" src={Waiters} alt="Best Quality" sx={{ 
                height: { xs: 120, md: 200 },
                mb: { xs: 2, md: '-7px' },
                objectFit: 'contain'
              }} />
              <Typography variant="h5" fontWeight="bold" sx={{ 
                mb: 1, 
                color: theme.palette.primary.secondary, 
                marginTop: { xs: 0, md: '30px' } 
              }}>
                Catering
              </Typography>
              <Typography variant="body1" color="black">
                Wedding & Event Catering, Custom Menus
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}