import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

const CateringHero = () => {
  return (
    <Box sx={{color: 'black', bgcolor: '#fff', py: 10, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column' },
            alignItems: 'start',
            gap: 6,
            width: '80%',
          }}
        >

          <Box
            sx={{
              flex: 1,
            
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'black', fontWeight: 700 }}>
              Best Corporate & Industrial Catering <br />
              Services in Chennai & Coimbatore.
            </Typography>
            <Box sx={{ width: 100, height: 4, bgcolor: 'black', my: 2 }} />
            <Typography variant="body1" sx={{ color: 'black' }}>
              <Box component="span" sx={{ color: 'red', fontWeight: 700 }}>
                Hogist
              </Box>
              offers reliable corporate catering services in Chennai & Coimbatore, providing consistent quality, flexible plans, and delicious food for offices, factories, and industrial events. Book your hassle-free catering with customizable menus, timely delivery, and professional service today.
            </Typography>
          </Box>
<Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3, 
        
          }}
        >
          {[
            { title: 'Corporate Catering', value: '10,000+', icon: '🏢' },
            { title: 'Daily Delights', value: '50+', icon: '🍽️' },
            { title: 'Award Winning', value: '02', icon: '🏆' },
            { title: 'ISO Certified', value: '02', icon: '🎖️' },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: '1 1 100px',
                display: 'flex',
                height:"200px"
              }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  py: 4,
                  borderRadius: 3,
                  bgcolor: 'black',
                  color: 'white',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <CardContent>
                  <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
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
          <Box
            sx={{
                position: 'absolute',
                right: "-230px",
                top: '50%',  
                transform: 'translateY(-50%) rotate(90deg)',
                bgcolor:'black',
               padding: "100px 0px 100px 0px",
            
            // trbl
       
                
            }}
          >
            <Typography
              variant="h1"
              sx={{
             
                
                fontSize: '9rem',
                color: 'grey',
                opacity: 1,
                fontWeight: 900,
                letterSpacing: '5px',
                zIndex: 1,
                
              }}
            >
              SPECIAL
            </Typography>

            {/* Example image placeholder — you can uncomment when needed */}
            {/* <Box
              component="img"
              src="/your-image-path.png"
              sx={{
                borderRadius: '50%',
                width: { xs: 300, md: 400 },
                height: { xs: 300, md: 400 },
                objectFit: 'cover',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                position: 'relative',
                zIndex: 2,
              }}
            /> */}
          </Box>
        </Box>

        
      </Container>
    </Box>
  );
};

export default CateringHero;
