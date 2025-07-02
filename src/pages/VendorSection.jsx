import { Box, Container, Typography, useTheme, Stack } from '@mui/material';
import React from 'react';
import CTAButton from '../components/common/CTAButton';
import IMG1 from '../assets/vendor/IMG1.jpeg';
import IMG2 from '../assets/vendor/IMG2.jpg';
import IMG3 from '../assets/vendor/IMG3.jpg';
import IMG4 from '../assets/vendor/IMG4.jpg';
import IMG5 from '../assets/vendor/IMG5.jpg';
import IMG6 from '../assets/vendor/IMG6.jpg';
import catering from '../assets/vendor/catering.jpg';
import hogistLogo from '../assets/vendor/hogistLogo.png';

function VendorSection() {
  const theme = useTheme();
  
  return (
    <Box id="vendor-section" sx={{ 
      bgcolor: 'white', 
      py: 4,
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: 'center',
      minHeight: { xs: 'auto', md: '95vh' },
      marginBottom:'-25px',
      padding:4
    }}>
      <Container sx={{ 
        flex: 1,
        order: { xs: 2, sm: 1, md: 1 }, 
        mt: { xs: 4, md: 0 }
      }}>
       <Box sx={{ px: { xs: 2, md: 0 } }}>
          <Typography 
            variant='h3' 
            component="h2"
            color='black' 
            textAlign={{ xs: 'center',sm:'center', md: 'left' }}
            fontWeight={'bold'}
            sx={{ 
              mt: 2,
              fontSize: {
                xs: '1.6rem',
                sm: '1.3rem',
                md: '1.7rem',
                lg: '1.9rem'
              },
              lineHeight: {
                md: '1.5'
              },
              marginLeft:{sm:'-70px',md:'20px',lg:'27px'}
            }}
          >
            Become a Vendor Grow your catering business with us.
          </Typography>
          <Stack 
            direction="row" 
            sx={{ 
              mb: 3, 
              mt: { xs: 4, md: '50px' },
              justifyContent: { xs: 'center', md: 'flex-start' },
              marginLeft:{sm:'-90px',md:'150px',lg:'170px'}
            }}
          >
            <CTAButton 
              hover={{
                backgroundColor: 'transparent',
                color: 'black',
              }} 
              border={"1px solid red"}  
              name={"Join Now"} 
            />
          </Stack>
        </Box>
      </Container>
      
      <Box sx={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
        gap: { xs: '4px',sm:'4px', md: '8px' },
        width: '110%',
        height: { 
          xs: '50vh',  
          sm: 'auto', 
          md: '70vh'  
        },
        maxHeight: {
          xs: '400px', 
          sm: 'auto', 
          md: '800px'  
        },
        padding: {xs:1,sm:3, md:4},
        position: 'relative',
        ml: { sm: '-100px', md: '-100px' }, 
        order: { xs: 1, sm: 2, md: 2 }, 
      }}>
        {/* Image 1 - top left */}
        <Box sx={{ 
          gridColumn: '1 / span 2',
          gridRow: '1 / span 4'
        }}>
          <img 
            src={IMG2} 
            alt="img2" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
        </Box>
        
        {/* Image 2 - center large */}
        <Box sx={{ 
          gridColumn: '3 / span 4',
          gridRow: '1 / span 5'
        }}>
          <img 
            src={hogistLogo} 
            alt="logo" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
        </Box>
        
        {/* Image 3 - bottom left*/}
        <Box sx={{ 
          gridColumn: '1 / span 2',
          gridRow: '5 / span 4'
        }}>
          <img 
            src={IMG3} 
            alt="img3" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
        </Box>
        
        {/* Image 4 - center bottom  */}
        <Box sx={{ 
          gridColumn: '3 / span 2',
          gridRow: '6 / span 3'
        }}>
          <img 
            src={IMG4} 
            alt="img4" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
        </Box>
        
        {/* Image 5 - top right */}
        <Box sx={{ 
          gridColumn: '7 / span 2',
          gridRow: '1 / span 4'
        }}>
          <img 
            src={IMG5} 
            alt="img5" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
        </Box>
        
        {/* Image 6 - bottom right */}
        <Box sx={{ 
          gridColumn: '7 / span 2',
          gridRow: '5 / span 4'
        }}>
          <img 
            src={catering} 
            alt="img6" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
        </Box>
        
        {/* Image 7 - center right bottom */}
        <Box sx={{ 
          gridColumn: '5 / span 2',
          gridRow: '6 / span 3'
        }}>
          <img 
            src={IMG1}  
            alt="img7" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px'
            }} 
          />
        </Box>
      </Box>
    </Box>
  );
}

export default VendorSection;