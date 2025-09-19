import { Button, Typography } from '@mui/material'
import { Box, Container, Stack, useTheme } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import gimg1 from '../assets/gallery/bulk-food-order-for-party.webp'
import gimg2 from '../assets/gallery/bulk-food-order-for-corporate .webp'
import gimg3 from '../assets/gallery/bulk-food-order-delivery-near-me.webp'
import gimg4 from '../assets/gallery/online-bulk-food-delivery.webp'
import gimg5 from '../assets/gallery/bulk-food-order-delivery-platform.webp'
import gimg6 from '../assets/gallery/bulk-food-delivery-near-me.webp'

function GallerySection() {
    const theme = useTheme();
    const [imagesLoaded, setImagesLoaded] = useState({});
    
    // Use react-intersection-observer hook for the section
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    // Handle image loading when section comes into view
    useEffect(() => {
        if (sectionInView) {
            // Preload all gallery images when section is in view
            const galleryImages = [gimg1, gimg2, gimg3, gimg4, gimg5, gimg6];
            galleryImages.forEach((image, index) => {
                const img = new Image();
                img.src = image;
                img.alt = `gallery-image-${index}`;
                img.onload = () => {
                    setImagesLoaded(prev => ({ ...prev, [image]: true }));
                };
            });
        }
    }, [sectionInView]);

    const openGallery = () => {
        const url = `https://hogist.com/gallery/`;
        window.open(url, '_blank');
    };

    return (
        <Box 
            ref={sectionRef}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 5,
                bgcolor: 'black',
                px: { xs: 2, sm: 3, md: 4 },
                marginBottom: '-10px'
            }}
            component="section"
        >
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
                        src={imagesLoaded[gimg1] ? gimg1 : gimg1} 
                        alt="bulk food order for party"  
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block',
                            opacity: imagesLoaded[gimg1] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
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
                        src={imagesLoaded[gimg2] ? gimg2 : gimg2} 
                        alt="bulk food order for corporate" 
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block',
                            opacity: imagesLoaded[gimg2] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
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
                        src={imagesLoaded[gimg3] ? gimg3 : gimg3} 
                        alt="bulk food order delivery near me"  
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block',
                            opacity: imagesLoaded[gimg3] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
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
                        src={imagesLoaded[gimg4] ? gimg4 : gimg4} 
                        alt="online bulk food delivery" 
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block',
                            opacity: imagesLoaded[gimg4] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
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
                        src={imagesLoaded[gimg5] ? gimg5 : gimg5} 
                        alt="bulk food order delivery platform"  
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block',
                            opacity: imagesLoaded[gimg5] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
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
                        src={imagesLoaded[gimg6] ? gimg6 : gimg6} 
                        alt="bulk food delivery near me" 
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            display: 'block',
                            opacity: imagesLoaded[gimg6] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
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
                    View more
                </Button>
            </Stack>
        </Box>
    )
}

export default React.memo(GallerySection);