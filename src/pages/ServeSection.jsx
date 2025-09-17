import { Typography, Box, Container, useTheme, Grid, Stack,Button } from '@mui/material';
import React, { forwardRef } from 'react';
import Order_food from '../assets/ServePage/Order_food.png';
import scooty from '../assets/ServePage/scooty.png';
import Waiters from '../assets/ServePage/Waiters.png';
import HeroSection from './HeroSection';
const ServeSection = forwardRef((props, ref) => {
  const theme = useTheme();

   const handleRequestPricingClick = () => {
    // Scroll to the hero section
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box ref={ref} sx={{ bgcolor: 'white', minHeight: '100vh', py: { xs: 2, md: 4 },  fontFamily: theme.fontFamily.default, }}component="section" 
    >
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Meal Box",
                "description": "Customizable bulk meal boxes for events and teams."
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Delivery Box",
                "description": "Party-ready bulk food delivery boxes for gatherings."
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Catering",
                "description": "Large-scale bulk food orders for weddings & celebrations."
              }
            ]
          }
        `}
      </script>
      <Container>
        <Typography variant="h2" fontWeight="bold" sx={{ 
          textAlign: 'center', 
          mb: { xs: 1, md: 2 }, 
          color: theme.palette.primary.secondary, 
          paddingTop: { xs: '15px', md: '30px' },
          fontSize: { xs: '1.5rem',sm:'28px', md:theme.font.title },
          marginBottom:'50px',
           
        }}>
          WHAT WE SERVE
        </Typography>
        <Typography variant="h3" fontWeight="bold" sx={{ 
          textAlign: 'center', 
          mb: { xs: 2, md: 4 }, 
          color: 'black',
          fontSize: { xs: '1.5rem', sm: '28px', md: theme.font.title } 
        }}>
          Your Trusted Bulk Food Order & Delivery Partner
        </Typography>
        
        <Grid container justifyContent="center" sx={{ 
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: { xs: 2, md: '140px' },
          alignItems: 'center'
        }}>
          <Grid item xs={12} md="auto">
            <Box sx={{ textAlign: 'center', p: { xs: 1, md: 3 } }}>
              <Box component="img" src={Order_food} alt="Bulk meal boxes for events and corporate teams" sx={{ 
                height: { xs: 120, md: 200 },
                mb: { xs: 2, md: 4 },
                objectFit: 'contain'
              }} />
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: theme.palette.primary.secondary }}>
                  Meal Box
              </Typography>
              <Typography variant="body1" color="black">
               Customizable bulk meal boxes for events and teams.
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
               Party-ready bulk food delivery boxes for gatherings.
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
                Large-scale bulk food orders for weddings & celebrations.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Stack  
          direction="row" 
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{ 
            justifyContent: 'center',
            alignItems: 'center',
            mt: '40px',
            width: '100%'
          }}
        >
          <Button
            variant="contained"
            onClick={handleRequestPricingClick}
            sx={{ 
              minWidth: { xs: '130px', sm: '140px', md: '130px' },
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.9rem' },
              padding: { xs: '8px 10px', sm: '9px 18px', md: '10px 20px' },
              fontWeight: 'bold',
              borderRadius: '24px',
              backgroundColor: theme.palette.primary.secondary,
              '&:hover': {
                backgroundColor: theme.palette.primary.secondary,
              }
            }}
          >
            Order now
          </Button>
        </Stack>
      </Container>
    </Box>
  );
});

export default ServeSection;