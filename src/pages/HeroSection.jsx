import React, { useState, useEffect, forwardRef, useMemo } from 'react';
import { Box, Typography, Button, Stack, IconButton, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import CTAButton from '../components/common/CTAButton';
import EnquiryForm from '../layout/EnqueryForm';
import headerImage from '../assets/mobile-banner/bulk-food-order-online.webp';

const MotionBox = motion(Box);

const HeroSection = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const openWhatsApp = useMemo(() => () => {
    const url = `https://wa.me/${'9962374733'}`;
    window.open(url, '_blank');
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Preload the image when component is in viewport
          const img = new Image();
          img.src = headerImage;
          img.alt="bulk-food-order-online"
          img.onload = () => setImageLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);


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
        backgroundImage: imageLoaded ? `url(${headerImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: imageLoaded ? 'transparent' : '#f5f5f5',
        color: '#fff',
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 2, sm: 3, md: 4 }, 
        minHeight: {
          xs: 'auto',
          sm: '80vh',
          md: '90vh',
        },
        fontFamily: theme.fontFamily.default,
        transition: 'background-image 0.3s ease',
      }}
       itemScope
      itemType="https://schema.org/FoodService"
    >

       {/* Preload image with lazy loading - only when in viewport */}
      
        <img 
          src={headerImage} 
          alt=""
          loading="lazy" 
          style={{ display: 'none' }} 
          onLoad={() => setImageLoaded(true)}
        />
      

       {/* Content Section */}
      <MotionBox
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
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
          itemProp="description"
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
            onClick={openWhatsApp}
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
            GET INSTANT QUOTE ON WHATSAPP
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
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
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

export default React.memo(HeroSection);