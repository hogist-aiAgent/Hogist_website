import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Container,Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bday from '../assets/EventCaterImage/bday.jpg';
import corporate from '../assets/EventCaterImage/corporate.jpg';
import industry from '../assets/EventCaterImage/industry.jpg';
import Celebration from '../assets/EventCaterImage/Celebration.jpg';

function EventsCater() {
  const theme = useTheme();

  const services = [
      {
      title: 'Corporate',
      description: 'Corporate bulk food order solutions',
      image: corporate,
    },
    {
      title: 'Birthday',
      description: 'Bulk food orders for birthday parties',
      image: bday,
    },
    {
      title: 'Industrial',
      description: 'Industrial bulk food delivery',
      image: industry,
    },
    {
      title: 'Celebration',
      description: 'Large-scale bulk food orders for celebrations',
      image: Celebration,
    },
  
  ];

  return (
    <Box sx={{ py: 6, background: '#000', fontFamily: theme.fontFamily.default, mb:'-10px' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" fontWeight="bold" sx={{fontSize:{ xs: '1.5rem',sm:'1.8rem', md: '2.29rem'}}} color={theme.palette.primary.secondary}>
          Events we Cater
        </Typography>
        <Typography variant="h6" align="center" sx={{fontSize:{xs: '1.75rem', sm: '2rem', md: '2rem'}, mb: 4, maxWidth: 800, mx: 'auto' }} color={theme.palette.primary}>
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
                sm: '45%', // Tablet: 2 cards per row (approx 45% width)
                md: 280,   // Desktop: fixed width
                lg: 280,   // Laptop: fixed width
                xl: 280    // Large desktop: fixed width
              },
              maxWidth: { xs: 300, sm: 'none', md: 280, lg: 280, xl: 280 },
              height: { xs: 320, sm: 350, md: 350, lg: 350, xl: 350 },
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
                height: { 
                  xs: 130, 
                  sm: 150, 
                  md: 150, // Regular desktop
                  lg: 140, // Laptop (1024px): slightly smaller height
                  xl: 150  // Large desktop (1440px+): back to original height
                },
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
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image={service.image}
                  alt={service.title}
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
                  <Typography variant="h6" component="h2" gutterBottom color={theme.palette.primary.secondary}
                    sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.1rem', lg: '1.1rem', xl: '1.1rem' } }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="black" sx={{ mb: 2, fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.9rem', lg: '0.9rem', xl: '0.9rem' } }}>
                    {service.description}
                  </Typography>
                </Box>
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      background: theme.palette.primary.secondary,
                      fontWeight: 'bold',
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.8rem', lg: '0.8rem', xl: '0.8rem' }
                    }}
                  >
                    Learn More
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
                     ORDER NOW
                   </Button>
                 </Stack>
      </Container>
    </Box>
  );
}

export default EventsCater;