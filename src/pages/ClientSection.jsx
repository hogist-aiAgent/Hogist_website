import React, { forwardRef } from 'react';
import { Box, Typography, Paper, Container, useTheme, Card , CardContent} from '@mui/material';
import { motion } from 'framer-motion';
import clientVideo from '../assets/video/client_section_video.mp4';
import ClientCarousel from '../components/common/ClientCarousel';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';


const ClientSection = forwardRef((props, ref) => {
  const theme = useTheme();
  return (
    <Box ref={ref}>
      <Container maxWidth={'auto'} sx={{ 
        alignItems: "center", 
        px: { xs: 2, md: 6 }, 
        pt: 5,
        pb: 8,
        m: 0,
        width: "100%" ,
        paddingLeft:{xs:'33px',md:'60px',lg:'60px'},
        paddingRight:{xs:'33px',md:'60px',lg:'60px'},
        fontFamily: theme.fontFamily.default,
      }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 ,}}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.primary.secondary }}>
              About Us : 
            </Typography>
            <Typography variant="h6" fontWeight="normal" sx={{ fontSize:'16px',color: 'black', mt: 2, textAlign:'justify',lineHeight:'25px' }}>
             Hogist, a leading online bulk food order and delivery partner in Chennai and Coimbatore.Offering comprehensive special events catering, corporate and Industrial catering, house parties, and wedding services. We ensure fresh meals come from certified kitchens, and create menus to fit your needs. Whether you need 500 lunch boxes, meals for different shifts, or a grand buffet to feed 5,000 guests, Hogist has you covered.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Paper
              elevation={3}
              sx={{
                height: { xs: 200, sm: 250 },
                width: { xs: '100%', md: '100%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <video
                src={clientVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{ height: '100%', width: '100%', objectFit: 'fill' }}
              />
            </Paper>
          </motion.div>
        </Box>
         <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop:'50px',
              
              gap: { xs: 2, md: 3, lg:"1px" },
              width: {
                xs:'100%',
                lg:'100%',
                md:'100%'
              },
              marginLeft:{
                xs:'0px',
                md:'0px',
                lg:"-1px"
              }
            }}
          >
            {[
              { title: 'Corporate Catering' , value: '10,000+', icon:<BusinessIcon sx={{fontSize: { xs: '30px', md: '40px' } }} /> },
              { title: 'Daily Delights', value: '50+', icon: <RestaurantMenuIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} /> },
              { title: 'Award Winning', value: '02', icon: <EmojiEventsIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} /> },
              { title: 'ISO Certified', value: '02', icon: <WorkspacePremiumIcon sx={{ fontSize: { xs: '30px', md: '40px' } }} /> },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: '1 1 calc(50% - 16px)', md: '1 1 calc(25% - 24px)', lg: '1 1 100px' },
                  height:'180px',
                  paddingLeft:{md:'5px',lg:'20px'}
                }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    py: { xs: 2, md: 4 },
                    borderRadius: 1,
                    bgcolor:  theme.palette.primary.secondary,
                    color: '#fff',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.18)',
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)', 
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.37)'
                    },
                    height:'150px',
                    width:{
                      xs:'100%',
                      lg:'254px',
                      md:'100%',
                      
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h3" component="div" sx={{ mb: 1, height: { xs: '50px', md: '40px' }, width: '100%', color: '#fff' }}> 
                      {item.icon}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontSize: { xs: '13px', md: '16px' } }}> 
                      {item.title}
                    </Typography>
                    <Typography variant="h5"  sx={{ fontWeight: 'bold' }}>
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
      </Container>
      <ClientCarousel/>
    </Box>
  );
});

export default ClientSection;