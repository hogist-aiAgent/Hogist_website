import React, { forwardRef } from 'react';
import { Box, Typography, Container, useTheme, CardContent, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ClientCarousel from '../components/common/ClientCarousel';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import about_us from '../assets/gallery/about_us.png';

const AboutUs = forwardRef((props, ref) => {
  const theme = useTheme();
  return (
    <Box ref={ref} sx={{ overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ 
        px: { xs: 2, sm: 3, md: 4, lg: 6 }, 
        pt: { xs: 3, md: 5 },
        pb: { xs: 4, md: 8 },
        fontFamily: theme.fontFamily.default,
        overflow: 'hidden'
      }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ xs: 3, md: 4 }}
          sx={{ overflow: 'hidden' }}
          component="section"
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              width: '100%',
              maxWidth: { xs: '100%', sm: '450px', md: '400px', lg: '550px' }, // Reduced for tablet
              overflow:'hidden',
              mt: 3
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%' }}
            >
              <Paper
                elevation={3}
                sx={{
                  height: { 
                    xs: 'auto', 
                    sm: '220px', // Reduced for tablet
                    md: '250px',
                    lg: '300px'
                  },
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  p: { xs: 1, sm: 0 }
                }}
              >
                <img 
                  src={about_us} 
                 alt="Corporate catering service in Chennai by Hogist"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </Paper>
            </motion.div>
          </Box>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, width: '100%' }}
          >
            <Typography variant="h2" fontWeight="bold" sx={{ 
              color: theme.palette.primary.secondary, 
              textAlign: { xs: 'center', md: 'left' },
              fontSize:{xs:'28px',md:theme.font.title},
              mb: 2
            }}>
              About Us :
            </Typography>
            <Typography variant="body1" sx={{ 
              color: 'black', 
              textAlign: { xs: 'center', md: 'left' },
              lineHeight: '26px',
              fontSize: { xs: '14px', sm: '15px', md:theme.font.paragraph }
            }}>
              Hogist, a leading online bulk food order and delivery partner in Chennai and Coimbatore. Offering comprehensive special events catering, corporate and Industrial catering, house parties, and wedding services. We ensure fresh meals come from certified kitchens, and create menus to fit your needs. Whether you need 500 lunch boxes, meals for different shifts, or a grand buffet to feed 5,000 guests, Hogist has you covered.
            </Typography>
          </motion.div>
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            mt: { xs: 4, md: 4 },
            mb: { xs: -1, md: -5 },
            //gap: { xs: 2, sm: 3, md: 0 }
          }}
        >
          {[
            { title: 'Corporate Catering', value: '10,000+', icon: <BusinessIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} /> },
            { title: 'Daily Delights', value: '50+', icon: <RestaurantMenuIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} /> },
            { title: 'Award Winning', value: '02', icon: <EmojiEventsIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} /> },
            { title: 'ISO Certified', value: '02', icon: <WorkspacePremiumIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} /> },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: '1 1 calc(50% - 16px)', sm: '1 1 calc(25% - 24px)', md: '1' },
                maxWidth: { xs: 'calc(50% - 16px)', sm: 'calc(25% - 24px)', md: '220px' },
                minWidth: { xs: '140px', md: '180px' },
                height: { xs: '140px', md: '180px' },
                mx: 'auto'
              }}
            >
              <CardContent sx={{ 
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: { xs: 1, sm: 2 }
              }}>
                <Typography variant="h3" component="div" sx={{ 
                  mb: 1, 
                  color: theme.palette.primary.secondary 
                }}> 
                  {item.icon}
                </Typography>
                <Typography variant="subtitle1" sx={{ 
                  mb: 1, 
                  fontSize: { xs: '14px', sm: '15px', md: theme.font.paragraph },
                  color: theme.palette.primary.secondary 
                }}> 
                  {item.title}
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 'bold',
                  color: theme.palette.primary.secondary,
                  fontSize: { xs: '16px', md: '18px' }
                }}>
                  {item.value}
                </Typography>
              </CardContent>
            </Box>
          ))}
        </Box>
      </Container>
      <ClientCarousel/>
    </Box>
  );
});

export default AboutUs;