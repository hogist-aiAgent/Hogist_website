import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Container,Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bday from '../assets/EventCaterImage/bday.webp';
import corporate from '../assets/EventCaterImage/corporate.webp';
import industry from '../assets/EventCaterImage/industry.webp';
import Celebration from '../assets/EventCaterImage/celebration.webp';
import { Link, useNavigate } from 'react-router-dom';
import { link } from 'framer-motion/client';

function EventsCater() {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const serviceLinks = {
    industrial: 'https://www.hogist.com/industrial-catering-services-near-me/',
    corporate: 'https://www.hogist.com/corporate-catering-services-in-chennai/',
    birthday: 'https://www.hogist.com/catering-services-in-chennai/',
    celebration: 'https://www.hogist.com/catering-services-in-chennai/'
  };
  
  const handleExploreMoreClick = (serviceType) => {
    window.open(serviceLinks[serviceType.toLowerCase()], '_blank');
  };

  const handleRequestPricingClick = () => {
    // Scroll to the hero section
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Corporate',
      description: ' Find easy bulk and corporate catering solutions that will impress your team and clients.',
      image: corporate,
      link:"https://www.hogist.com/industrial-catering-services-near-me/",
    },
    {
      title: 'Birthday',
      description: 'Make every birthday a memorable one with delicious bulk food and the timely delivery you deserve.',
      image: bday,
      link:"https://www.hogist.com/catering-services-in-chennai/"
    },
    {
      title: 'Industrial',
      description: 'You can rely on timely bulk food delivery service for your industrial and workforce needs.',
      image: industry,
      link:"https://www.hogist.com/industrial-catering-services-near-me/"
    },
    {
      title: 'Celebration',
      description: 'Celebrate your moment with perfectly catered bulk food orders that bring joy and memories.',
      image: Celebration,
      link:"https://www.hogist.com/corporate-catering-services-in-chennai/"
    },
  ];

  return (
    <Box sx={{ py: 6, background: '#000', fontFamily: theme.fontFamily.default, mb:'-10px' }}  component="section">

      <Container maxWidth="lg">
        <Typography variant="h2" align="center" fontWeight="bold" sx={{fontSize:{ xs: '1.5rem',sm:'28px', md: theme.font.title}}} color={theme.palette.primary.secondary}>
          Events we Cater
        </Typography>
        <Typography variant="h3" align="center"  fontWeight="bold" sx={{fontSize:{xs: '1.5rem', sm: '28px', md: theme.font.title }, mb: 4, maxWidth: 800, mx: 'auto' }} color={theme.palette.primary}>
          Bulk Food Order Solutions for Every Occasion
        </Typography>

        {/* Container with specific adjustments for tablet and laptop (1024px) only */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: { xs: 'wrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' }, // Changed for tablet view
          justifyContent: 'center', 
          gap: 3,
          px: { xs: 2, sm: 0 }
        }}>
          {services.map((service, index) => (
            <Card key={index} sx={{
              width: { 
                xs: '100%', 
                sm: '45%', // Tablet: 2 cards per row (approx 45% width)45PX-H132-HEADINGOTHERS-1REM
                md: 280,   // Desktop: fixed width
                lg: 280,   // Laptop: fixed width
                xl: 280    // Large desktop: fixed width
              },
              maxWidth: { xs: 300, sm: 'none', md: 280, lg: 280, xl: 280 },
              // height: { xs: 320, sm: 350, md: 350, lg: 350, xl: 350 },
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 15px rgba(255,255,255,0.1)',
              },
              overflow: 'hidden',
              mx: { xs: 'auto', sm: 0, md: 0, lg: 0, xl: 0 }
            }}>
              {/* Image container with adjustment for laptop (1024px) only */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                // height: { 
                //   xs: 130, 
                //   sm: 150, 
                //   md: 140, // Regular desktop
                //   lg: 140, // Laptop (1024px): slightly smaller height
                //   xl: 150  // Large desktop (1440px+): back to original height
                // },
                // height:'900px',
                width: { 
                  xs: '90%', 
                  sm: 270, 
                  md: 200,
                  lg: 220,  // Laptop (1024px): slightly smaller width
                  xl: 225.75 // Large desktop (1440px+): back to original width
                },
                margin: { xs: '12px auto 8px', sm: '16px auto 8px', md: '16px auto 8px', lg: '16px auto 8px', xl: '16px auto 8px' },
                overflow: 'hidden',
                borderRadius: '8px',
              }}>
                <CardMedia
                  component="img"
                  loading="lazy" // Added lazy loading here
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image={service.image}
                 alt={`${service.title} catering service in Chennai`}
                />
              </Box>
              
              {/* Content below image - unchanged for all views */}
              <CardContent sx={{ 
                flexGrow: 1, 
                p: { xs: 1.5, sm: 2, md: 2, lg: 2, xl: 2 },
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant="body2"  gutterBottom color={theme.palette.primary.secondary}
                    sx={{ fontSize: { xs: '14px', sm: '16px', md: theme.font.paragraph } }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="black" sx={{ mb: 2, fontSize: { xs: '14px', sm: '16px', md: theme.font.paragraph } }}>
                    {service.description}
                  </Typography>
                </Box>
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleExploreMoreClick(service.title)}
                    sx={{
                      backgroundColor: theme.palette.primary.secondary ,
                      fontWeight: 'bold',
                      fontSize: { xs: '14px', sm: '16px', md:theme.font.paragraph  },
                      '&:hover': {
                        backgroundColor: '#c60000', 
                      textDecoration:'none'  
                      }
                    }}
                  >
                    
                      Explore More
                    
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
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
                       fontSize: { xs: '14px', sm: '16px', md:theme.font.paragraph  },
                       padding: { xs: '8px 10px', sm: '9px 18px', md: '10px 20px' },
                       fontWeight: 'bold',
                       borderRadius: '24px',
                       backgroundColor: theme.palette.primary.secondary,
                       '&:hover': {
                         backgroundColor: theme.palette.primary.secondary,
                       }
                     }}
                   >
                    Get pricing
                   </Button>
                 </Stack>
      </Container>
    </Box>
  );
}

export default React.memo(EventsCater);