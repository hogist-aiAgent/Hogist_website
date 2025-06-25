import { Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import React from 'react';
import GooglePlayButton from '../assets/Mobileapp/GooglePlayButton.png';
import AppStoreButton from '../assets/Mobileapp/AppStoreButton.png';
import MobileApp from '../assets/Mobileapp/MobileApp.png';

function MobileappSection() {
    const theme = useTheme();
    return (
        <Box sx={{
            minHeight: '100vh',
            py: 4,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'black'
        }}>
            <Container sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' }, 
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 3, md: 4 }
            }}>
                <Box sx={{
                    width: { xs: '100%', sm: '80%', md: '45%', lg: '40%' },
                    maxWidth: '500px',
                    px: { xs: 2, sm: 0 }
                }}>
                    <img 
                        src={MobileApp} 
                        alt='MobileApp' 
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            maxWidth: '100%'
                        }} 
                    />
                </Box> 

                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    maxWidth: { xs: '100%', md: '600px' },
                    textAlign: { xs: 'center', md: 'center' },
                    px: { xs: 2, sm: 3, md: 0 },
                    marginRight: { xs: 0, md: '40px' }
                }}>
                    <Typography variant="h2" fontWeight="bold" sx={{
                        fontSize: { 
                            xs: '1.5rem', 
                            sm: '1.75rem', 
                            md: '2.25rem',
                            lg: '2.75rem',
                            xl: '3rem'
                        },
                        mb: { xs: 2, md: 3 },
                        color: 'text.primary',
                        lineHeight: 1.2,
                        px: { xs: 1, sm: 0 }
                    }}>
                        It's More Easy to Order By Mobile App
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontSize: { 
                            xs: '0.9rem', 
                            sm: '1rem', 
                            md: '1.1rem' 
                        },
                        lineHeight: 1.6,
                        color: 'text.secondary',
                        mb: { xs: 3, md: 4 },
                        px: { xs: 1, sm: 0, md: 0 }
                    }}>
                        Enjoy a smooth and effortless food ordering experience through our mobile app. With just a few taps, you can browse the menu, customize your order, track delivery, and enjoy exclusive app-only deals — all from the palm of your hand.
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        alignItems: 'center',
                        mt: { xs: 0, md: 2 },
                        marginLeft: { xs: 0, md: '110px' },
                        marginRight: { xs: 0, md: '60px' }
                    }}>
                        <Box sx={{
                            width: { xs: '140px', sm: '160px', md: '150px', lg: '160px' },
                            height: 'auto',
                        }}>
                            <img 
                                src={AppStoreButton} 
                                alt="Download on the App Store" 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto',
                                    cursor: 'pointer'
                                }} 
                            />
                        </Box>
                        <Box sx={{
                            width: { xs: '140px', sm: '160px', md: '150px', lg: '160px' },
                            height: 'auto'
                        }}>
                            <img 
                                src={GooglePlayButton} 
                                alt="GET IT ON Google Play" 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto',
                                    cursor: 'pointer'
                                }} 
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default MobileappSection;