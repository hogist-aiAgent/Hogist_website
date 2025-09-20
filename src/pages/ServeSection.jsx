import { Typography, Box, Container, useTheme, Grid, Stack, Button } from '@mui/material';
import React, { forwardRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Order_food from '../assets/ServePage/bulk-food-order-near-me.webp';
import scooty from '../assets/ServePage/order-bulk-food-online.webp';
import Waiters from '../assets/ServePage/bulk-food-delivery.webp';
import HeroSection from './HeroSection';

const ServeSection = forwardRef((props, ref) => {
  const theme = useTheme();
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  // Use react-intersection-observer hook for the section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Handle image loading when section comes into view
  useEffect(() => {
    if (sectionInView) {
      // Preload all images when section is in view
      const imageUrls = [Order_food, scooty, Waiters];
      imageUrls.forEach((image, index) => {
        const img = new Image();
        img.src = image;
        img.alt = index === 0 ? "bulk food order near me" : 
                  index === 1 ? "order bulk food online" : "bulk food delivery";
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [image]: true }));
        };
      });
    }
  }, [sectionInView]);

  const handleRequestPricingClick = () => {
    // Scroll to the hero section
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      ref={(node) => {
        // Set the external ref if provided
        if (ref) {
          if (typeof ref === 'function') {
            ref(node);
          } else {
            ref.current = node;
          }
        }
        // Set the intersection observer ref
        sectionRef(node);
      }}
      sx={{ bgcolor: 'white', minHeight: '100vh', py: { xs: 2, md: 4 }, fontFamily: theme.fontFamily.default }} 
      component="section"
    >
      <Container>
        <Typography variant="h2" fontWeight="bold" sx={{ 
          textAlign: 'center', 
          mb: { xs: 1, md: 2 }, 
          color: theme.palette.primary.secondary, 
          paddingTop: { xs: '15px', md: '30px' },
          fontSize: { xs: '1.5rem', sm: '28px', md: theme.font.title },
          marginBottom: '50px',
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
              <Box 
                component="img" 
                src={imagesLoaded[Order_food] ? Order_food : scooty} 
                alt="bulk food order near me" 
                loading="lazy" 
                sx={{ 
                  height: { xs: 120, md: 200 },
                  mb: { xs: 2, md: 4 },
                  display: 'block',
                  margin: '0 auto',
                  opacity: imagesLoaded[Order_food] ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }} 
              />
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
              <Box 
                component="img" 
                src={imagesLoaded[scooty] ? scooty : scooty} 
                alt="order bulk food online" 
                loading="lazy" 
                sx={{ 
                  height: { xs: 130, md: 210 },
                  mb: { xs: 1, md: 2 },
                  display: 'block',
                  margin: '0 auto',
                  opacity: imagesLoaded[scooty] ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }} 
              />
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
              <Box 
                component="img" 
                src={imagesLoaded[Waiters] ? Waiters : Waiters} 
                alt="bulk food delivery" 
                loading="lazy" 
                sx={{ 
                  height: { xs: 120, md: 200 },
                  mb: { xs: 2, md: '-7px' },
                  display: 'block',
                  margin: '0 auto',
                  opacity: imagesLoaded[Waiters] ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }} 
              />
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

export default React.memo(ServeSection);