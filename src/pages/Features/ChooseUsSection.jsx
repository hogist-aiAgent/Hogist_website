import { Box, Typography, Card, CardContent, useTheme, Button, Stack } from '@mui/material';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useInView } from 'react-intersection-observer';
import chooseusPic from '../../assets/chooseus/bulk-food-order-chennai.webp';
import React, { useState, useEffect } from 'react';

const features = [
  {
    title: "Expert in Bulk Food Orders",
    Description: "Reliable partner for corporations, events, and institutions.",
    icon: <RestaurantIcon sx={{ fontSize: 40, color: '#C60000' }} />
  },
  {
    title: "On-Time Bulk Food Delivery",
    Description: "Always fresh, hot, and delivered on time.",
    icon: <AlarmOnIcon sx={{ fontSize: 40, color: '#C60000' }} />
  },
  {
    title: "Customized bulk food menus",
    Description: "Menus customized to your team's liking, needs and budget.",
    icon: <MenuBookIcon sx={{ fontSize: 40, color: '#C60000' }} />
  },
  {
    title: "Affordable & Clear Pricing",
    Description: "Pricing is simple and clear without hidden costs.",
    icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 40, color: '#C60000' }} />
  }
];

function ChooseUsSection() {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Use react-intersection-observer hook for the image
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Handle image loading when it comes into view
  useEffect(() => {
    if (imageInView && !imageLoaded) {
      const img = new Image();
      img.src = chooseusPic;
      img.alt = "bulk food order chennai";
      img.onload = () => setImageLoaded(true);
    }
  }, [imageInView, imageLoaded]);

  const openWhatsApp = () => {
    const url = `https://wa.me/${'9962374733'}`;
    window.open(url, '_blank');
  };

  return (
    <Box
      id="chooseUs-section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start',
        justifyContent: 'center',
        maxWidth: 1450,
        margin: '0 auto'
      }}
      component="section"
    >
      {/* Left Side */}
      <Box
        sx={{
          flex: { xs: 'unset', md: '0 0 40%' },
          maxWidth: { xs: '100%', md: '40%' },
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: { xs: 2, sm:1, md: 2 },
          marginLeft: { sm:'5px', md: '45px' },
          marginRight: { md: '75px', lg: '5px' }
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '28px', sm: '30px', md: theme.font.title },
            color: 'black',
            mb: 3,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Why Choose Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: '#C60000',
            mb: 4,
            fontSize: { xs: '24px', sm: '28px', md: theme.font.heading },
            maxWidth: 700,
            textAlign: { xs: 'center', md: 'left' },
            fontWeight: 'bold',
            lineHeight: '45px'
          }}
        >
          HOGIST – Your Partner for Online Bulk Food Orders in Chennai
        </Typography>
        <Box
          ref={imageRef}
          component="img"
          src={imageLoaded ? chooseusPic : chooseusPic}
          alt="bulk food order chennai"
          loading="lazy"
          sx={{
            width: { xs: '100%', sm: '80%', md: 400 },
            height: { xs: 250, sm: 390, md: 300 },
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: { xs: 'unset', md: '0 0 60%' },
          maxWidth: { xs: '100%', md: '60%' },
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:'55px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: {sx:2,md:3},
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          {features.map((feature, idx) => (
            <Box
              key={idx}
              sx={{
                flex: '1 1 250px',
                maxWidth: { xs: '100%', sm: 'calc(50% - 12px)' },
                minWidth: 250,
                display: 'flex'
              }}
            >
              <Card
                sx={{
                  flexGrow: 1,
                  borderRadius: 4,
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  minHeight: 170,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  transition: 'box-shadow 0.3s',
                }}
                elevation={0}
              >
                <CardContent
                  sx={{
                    py: 3,
                    px: 3,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Updated Icon Background Start */}
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      bgcolor: '#fff',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px 0 rgba(0,0,0,0.12)',
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>
                  {/* Updated Icon Background End */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'black',
                      fontSize: theme.font.paragraph,
                      mb: 0.5
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="contained"
                    sx={{
                      color: '#C60000',
                      fontSize: theme.font.paragraph
                    }}
                  >
                    {feature.Description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        <Stack  
          direction="row" 
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{ 
            justifyContent: 'center',
            alignItems: 'center',
            mt: '40px',
            width: '100%',
            mr: { xs: '5px', md: '80px' }
          }}
        >
          <Button
            variant="contained"
            onClick={openWhatsApp}
            sx={{ 
              minWidth: { xs: '130px', sm: '140px', md: '130px' },
              fontSize: { xs: '14px', sm: '16px', md: theme.font.paragraph },
              padding: { xs: '8px 10px', sm: '9px 18px', md: '10px 20px' },
              fontWeight: 'bold',
              borderRadius: '24px',
              backgroundColor: theme.palette.primary.secondary,
              '&:hover': {
                backgroundColor: theme.palette.primary.secondary,
              }
            }}
          >
            Book your Event
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default React.memo(ChooseUsSection);