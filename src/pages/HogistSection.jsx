import { Button, Typography } from '@mui/material'
import { Box, Container, Stack, useTheme } from '@mui/system'
import React, { useRef } from 'react'
import Chef from '../assets/front/chef.jpg';
import homemade from '../assets/front/homemade.jpg';
import rest from '../assets/front/rest.jpg';
import n from '../assets/resized/n.jpg';
import gimg1 from '../assets/gallery/4img.jpg'
import gimg2 from '../assets/gallery/5img.jpg'
import gimg3 from '../assets/gallery/6img.jpg'
import gimg4 from '../assets/gallery/1img.jpg'
import gimg5 from '../assets/gallery/2img.jpg'
import gimg6 from '../assets/gallery/3img.jpg'
import gvdo1 from '../assets/gallery/video-1.mp4'
import gvdo2 from '../assets/gallery/video-2.mp4'
import gvdo3 from '../assets/gallery/video-3.mp4'

function HogistSection() {
    const theme = useTheme();
    const videoRefs = useRef([]);
    
    const handleVideoPlay = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };

    const handleVideoPause = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
            videoRefs.current[index].currentTime = 0;
        }
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
        }}>
            <Typography 
                variant="h3" 
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
                        alt="Gallery item 1" 
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
                        alt="Gallery item 2" 
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
                        alt="Gallery item 3" 
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
                        alt="Gallery item 4" 
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
                        alt="Gallery item 5" 
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
                        alt="Gallery item 6" 
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

export default HogistSection