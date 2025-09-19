import { Button, Typography } from '@mui/material'
import { Box, Container, Stack, useTheme } from '@mui/system'
import React, { useRef } from 'react'
import gimg1 from '../assets/gallery/4img.webp'
import gimg2 from '../assets/gallery/5img.webp'
import gimg3 from '../assets/gallery/6img.webp'
import gimg4 from '../assets/gallery/1img.webp'
import gimg5 from '../assets/gallery/2img.webp'
import gimg6 from '../assets/gallery/3img.webp'

function GallerySection() {
    const theme = useTheme();
    const videoRefs = useRef([]);
    
    const handleVideoPlay = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };
    const openGallery = () => {
    const url = `https://hogist.com/gallery/`;
    window.open(url, '_blank');
  };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 5,
            bgcolor: 'black',
            px: { xs: 2, sm: 3, md: 4 },
            marginBottom: '-10px'
        }}
        component="section">
            <Typography 
                variant="h2" 
                align="center" 
                fontWeight="bold" 
                sx={{
                    fontSize: { xs: '28px', sm: '30px', md: theme.font.title },
                    mb: 4,
                    color: theme.palette.primary.secondary
                }}
            >
                Gallery
            </Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { 
                    xs: 'repeat(2, 1fr)', 
                    sm: 'repeat(3, 1fr)', 
                    md: 'repeat(3, 1fr)', 
                    lg: 'repeat(3, 1fr)' 
                },
                gap: { xs: 2, sm: 2.5, md: 3 },
                width: '100%',
                maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '900px' },
                padding: { xs: 1, sm: 2 },
                margin: '0 auto'
            }}>

                {/* Image 1 */}
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    aspectRatio: '1/1',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        zIndex: 1,
                        boxShadow: '0 8px 24px rgba(255,255,255,0.15)'
                    }
                }}>
                    <img 
                        src={gimg1} 
                       alt="Hogist catering service for corporate events in Chennai"  
                        loading="lazy" // Added lazy loading here
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block' 
                        }} 
                    />
                </Box>
                
                {/* Image 2 */}
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    aspectRatio: '1/1',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        zIndex: 1,
                        boxShadow: '0 8px 24px rgba(255,255,255,0.15)'
                    }
                }}>
                    <img 
                        src={gimg2} 
                       alt="Hogist catering service for corporate events in Chennai" 
                        loading="lazy" // Added lazy loading here
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block' 
                        }} 
                    />
                </Box>
                
                {/* Image 3 */}
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    aspectRatio: '1/1',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        zIndex: 1,
                        boxShadow: '0 8px 24px rgba(255,255,255,0.15)'
                    }
                }}>
                    <img 
                        src={gimg3} 
                        alt="Hogist catering service for corporate events in Chennai"  
                        loading="lazy" // Added lazy loading here
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block' 
                        }} 
                    />
                </Box>
                
                {/* Image 4 */}
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    aspectRatio: '1/1',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        zIndex: 1,
                        boxShadow: '0 8px 24px rgba(255,255,255,0.15)'
                    }
                }}>
                    <img 
                        src={gimg4} 
                       alt="Hogist catering service for corporate events in Chennai" 
                        loading="lazy" // Added lazy loading here
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block' 
                        }} 
                    />
                </Box>

                {/* Image 5 */}
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    aspectRatio: '1/1',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        zIndex: 1,
                        boxShadow: '0 8px 24px rgba(255,255,255,0.15)'
                    }
                }}>
                    <img 
                        src={gimg5} 
                        alt="Hogist catering service for corporate events in Chennai"  
                        loading="lazy" // Added lazy loading here
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block' 
                        }} 
                    />
                </Box>
                
                {/* Image 6 */}
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    aspectRatio: '1/1',
                    '&:hover': {
                        transform: 'scale(1.03)',
                        zIndex: 1,
                        boxShadow: '0 8px 24px rgba(255,255,255,0.15)'
                    }
                }}>
                    <img 
                        src={gimg6} 
                        alt="Hogist catering service for corporate events in Chennai" 
                        loading="lazy" // Added lazy loading here
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block' 
                        }} 
                    />
                </Box>
             
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
                     onClick={openGallery}
                     sx={{ 
                       minWidth: { xs: '130px', sm: '140px', md: '130px' },
                       fontSize: { xs: '14px', sm: '16px', md:theme.font.paragraph  },
                       padding: { xs: '8px 10px', sm: '9px 18px', md: '10px 20px' },
                       fontWeight: 'bold',
                       borderRadius: '24px',
                       backgroundColor: theme.palette.primary.secondary,
                       '&:hover': {
                         backgroundColor: theme.palette.primary.secondary,
                       }
                     }}
                   >
                     View more
                   </Button>
                 </Stack>
        </Box>
    )
}

export default React.memo(GallerySection);