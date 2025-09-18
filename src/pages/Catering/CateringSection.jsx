import React from 'react';
import { Box, Container, Typography, Card, CardContent, keyframes } from '@mui/material';
import foodImage from '../../assets/Catering/foodImage.png';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CateringHero = () => {
  return (
    <Box sx={{color: 'black', bgcolor: '#fff', py: { xs: 4, md: 10 }, position: 'relative', overflow: 'hidden', height: "auto" }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column' },
            alignItems: 'start',
            gap: { xs: 3, md: 6 },
            width: '100%',
             paddingLeft:{md:'35px', lg:'3px'}
          }}
        >

          <Box
            sx={{
              flex: 1,
              width: { xs: '100%', md: 'auto' }
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom 
              sx={{ 
                color: 'black', 
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2.5rem' }
              }}
            >
              Best Corporate & Industrial Catering <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
              Services in Chennai & Coimbatore.
            </Typography>
            <Box sx={{display:'flex',flexDirection:'row',gap:'2px'}}>
              <Box sx={{ width: 100 , height: 4, bgcolor: 'black', my: 1 }} />
              <Box sx={{ width: 5, height: 4, bgcolor: 'black', my: 1 }} />
              <Box sx={{ width: 5, height: 4, bgcolor: 'black', my: 1 }} />
              <Box sx={{ width: 5, height: 4, bgcolor: 'black', my: 1 }} />
              <Box sx={{ width: 5, height: 4, bgcolor: 'black', my: 1 }} />
              <Box sx={{ width: 5, height: 4, bgcolor: 'black', my: 1 }} />
              <Box sx={{ width: 100, height: 4, bgcolor: 'black', my: 1 }} />
            </Box>
            <Typography variant="body1" sx={{ color: 'black' }}>
              <Box component="span" sx={{ color: 'red', fontWeight: 700 }}>
                Hogist
              </Box>
              offers reliable corporate catering services in Chennai & Coimbatore, providing<Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} /> 
              consistent quality, flexible plans, and delicious food for offices, factories, <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} />
              and industrial events.Book your hassle-free catering with customizable menus,
              <Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} /> timely delivery, and professional service today.
            </Typography>
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 3 },
              width: {
                xs:'100%',
                lg:'70%',
                md:'100%'
              },
              marginLeft:{
                xs:'0px',
                md:'0px',
                lg:"-20px"
              }
            }}
          >
            {[
              { title: 'Corporate Catering', value: '10,000+', icon:<BusinessIcon sx={{ fontSize: { xs: '40px', md: '50px' } }} /> },
              { title: 'Daily Delights', value: '50+', icon: <RestaurantMenuIcon sx={{ fontSize: { xs: '40px', md: '50px' } }} /> },
              { title: 'Award Winning', value: '02', icon: <EmojiEventsIcon sx={{ fontSize: { xs: '40px', md: '50px' } }} /> },
              { title: 'ISO Certified', value: '02', icon: <WorkspacePremiumIcon sx={{ fontSize: { xs: '40px', md: '50px' } }} /> },
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
                    bgcolor: '#f9f9F9',
                    color: 'black',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)', 
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    },
                    height:'180px',
                    width:{
                      xs:'100%',
                      lg:'154px',
                      md:'100%'
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h3" component="div" sx={{ mb: 1, height: { xs: '50px', md: '60px' }, width: '100%', color: '#c60800' }}> 
                      {item.icon}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontSize: { xs: '10px', md: '12px' } }}> 
                      {item.title}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Food Image  */}
          <Box sx={{
            position: { xs: 'static', lg: 'absolute' },
            margin: { xs: '20px auto', lg: '50px' },
            right: { xs: 'auto', lg: "5%" },
            top: { xs: 'auto', lg: "5%" },
            zIndex: 5000,
            animation: `${rotate} 20s linear infinite`,
            display: 'flex',
            justifyContent: 'center',
            width: { xs: '100%', lg: 'auto' },
            transform: { xs: 'none', lg: 'none' },overflow:'hidden',
            order: { xs: 1, lg: 'initial' }
          }}>
            <Box 
             
              component={"img"}
              src={foodImage} 
              sx={{ 
                height: { xs: '270px',md:'300px', lg: '350px' },
                width: { xs: '270px',md:'300px', lg: '350px' }, 
                objectFit: 'contain'
              }} 
              alt="Food presentation"
            />
          </Box>

          {/* SPECIAL Text  */}
          <Box
          sx={{
            display: { xs: 'none', lg: 'block' },
            position: 'absolute',
            right: "-230px",
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            bgcolor: 'black',
            padding: "100px 0px 100px 0px",
            textAlign: 'left'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: '9.2rem',
              color: 'grey',
              opacity: 1,
              fontWeight: 1000,
              letterSpacing: '5px',
              zIndex: 100,
              display: 'inline-block'
            }}
          >
            SPECIAL
          </Typography>
        </Box>
        </Box>

        
      </Container>
    </Box>
  );
};

export default React.memo(CateringHero);