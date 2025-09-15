import React, { useState, useEffect, forwardRef } from 'react';
import { Box, Typography, Button, Stack, IconButton, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import HeroSectionImg from '../assets/HeroSectionImgslider2.png';
import SlidImg2 from '../assets/HeroSectionImgslider3.png';
import SlideImg from '../assets/HeroSectionImg4.png';
import CTAButton from '../components/common/CTAButton';
import EnquiryForm from '../layout/EnqueryForm';
import headerImage from '../assets/mobile-banner/headerImage.png'
const MotionBox = motion(Box);

const images = [HeroSectionImg, SlideImg, SlidImg2];

const HeroSection = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      ref={ref}
      id="hero-section"
      sx={{
        display: 'flex',
        overflow: 'hidden',
        marginTop: {xs:"4rem", sm: "4.5rem", md:"4.5rem"}, 
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' }, 
        backgroundImage: `url(${ headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 2, sm: 3, md: 4 }, 
        minHeight: {
          xs: 'auto',
          sm: '80vh',
          md: '90vh',
        },
        fontFamily: theme.fontFamily.default,
      }}
    >
      {/* Content Section */}
      <MotionBox
        initial={{ opacity: 0, scale: 1.2 }} // Changed from x:40 to scale:1.2 for zoom in effect
        animate={{ opacity: 1, scale: 1 }} // Changed from x:5 to scale:1 for zoom in effect
        transition={{ duration: 0.8 }}
        sx={{ 
          width: { xs: '100%', sm: '90%', md: '50%', lg: '45%' }, 
          pr: { md: 4, lg: 6 },
          pl: { xs: 0, md: '20px' },
          order: { xs: 1, md: 1 },
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        <Typography
          variant="h1"
          fontWeight="900"
          sx={{ 
            fontSize: { xs: '36px', md:theme.font.title }, 
            mt: { xs: 0, md: 0 }, 
            mb: { xs: 1.5, sm: 2, md: 2 },
            lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
            textAlign:"center"
          }}
        >
           <Box component="span" sx={{ color: theme.palette.primary.secondary }}>HOGIST</Box> - Online Bulk Food Order & Delivery Platform
        </Typography>

        <Typography 
          variant="h6" 
          sx={{ 
            mb: { xs: 2, sm: 2.5, md: 3 },
            fontSize: { xs: '14px', sm: '16px', md: theme.font.paragraph },
            lineHeight: { xs: 1.4, sm: 1.5 },
            textAlign:"center"
          }}
        >
         Place your bulk food order in Chennai online with Hogist — weddings, parties, corporate events & industrial needs. Fresh meals, customized menus & on-time delivery. Order Now!
        </Typography>

        <Typography   
          sx={{ 
            mb: { xs: 1.5, sm: 2 },
            fontSize: { xs: '14px', sm: '16px',md:theme.font.paragraph },
            textAlign:"center"
          }}
        >
          Start Booking Your Event Caterer Now
        </Typography>

        <Stack  
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{ 
            mb: { xs: 2, sm: 3 }, 
            justifyContent: { xs: 'center', md: 'center' },
            alignItems: 'center'
          }}
        >
          <Button
            variant="contained"
            sx={{ 
              width: { xs: '50%', sm: 'auto' },
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: theme.font.paragraph },
              padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' },
              fontWeight: 'bold',
              borderRadius:'20px',
              backgroundColor: theme.palette.primary.secondary,
              '&:hover': {
                backgroundColor: theme.palette.primary.secondary,
              }
            }}
          >
            GET A QUOTE
          </Button>
          
          <Button
            variant="contained"
            sx={{ 
              width: { xs: '50%', sm: 'auto' },
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: theme.font.paragraph },
              padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' },
              fontWeight: 'bold',
              borderRadius:'20px',
              backgroundColor: theme.palette.primary.secondary,
              '&:hover': {
                backgroundColor: theme.palette.primary.secondary,
              }
            }}
          >
            ORDER NOW
          </Button>
        </Stack>
      </MotionBox>

      {/* Enquiry Form Section */}
      <Box 
        sx={{ 
          padding: { xs: 0, sm: '0px' },
          position: 'relative', 
          width: { xs: '100%', sm: '90%', md: '45%', lg: '40%' }, 
          height: { xs: 'auto', md: 'auto' },
          mb: { xs: 2, sm: 3 },
          marginRight: { xs: '0', md: '20px', lg: '40px', xl: '55px' },
          order: { xs: 2, md: 2 },
          mt: { xs: 1, sm: 2, md: 0 } 
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }} // Changed from x:100 to scale:1.2 for zoom in effect
          animate={{ opacity: 1, scale: 1 }} // Changed from x:0 to scale:1 for zoom in effect
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box sx={{ 
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}>
            <EnquiryForm />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
});

export default HeroSection;