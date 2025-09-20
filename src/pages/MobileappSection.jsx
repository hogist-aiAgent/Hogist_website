import { Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import GooglePlayButton from '../assets/Mobileapp/GooglePlayButton.png';
import AppStoreButton from '../assets/Mobileapp/AppStoreButton.png';
import mobilepic from '../assets/Mobileapp/online-bulk-food-order.webp';

function MobileappSection() {
    const theme = useTheme();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [appStoreLoaded, setAppStoreLoaded] = useState(false);
    const [googlePlayLoaded, setGooglePlayLoaded] = useState(false);
    
    // Use react-intersection-observer hook for the section
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    // Handle image loading when section comes into view
    useEffect(() => {
        if (sectionInView) {
            // Preload mobile image
            const mobileImg = new Image();
            mobileImg.src = mobilepic;
            mobileImg.alt = 'online bulk food order';
            mobileImg.onload = () => setImageLoaded(true);

            // Preload App Store button
            const appStoreImg = new Image();
            appStoreImg.src = AppStoreButton;
            appStoreImg.alt = 'Download on the App Store';
            appStoreImg.onload = () => setAppStoreLoaded(true);

            // Preload Google Play button
            const googlePlayImg = new Image();
            googlePlayImg.src = GooglePlayButton;
            googlePlayImg.alt = 'GET IT ON Google Play';
            googlePlayImg.onload = () => setGooglePlayLoaded(true);
        }
    }, [sectionInView]);

    const openGooglePlay = () => {
        const url = `https://play.google.com/store/apps/details?id=io.ionic.hogistcustomer&pcampaignid=web_share'}`;
        window.open(url, '_blank');
    };

    const openAppPlay = () => {
        const url = `https://apps.apple.com/in/app/hogist/id6744101849'}`;
        window.open(url, '_blank');
    };

    return (
        <Box 
            ref={sectionRef}
            sx={{
                minHeight: '100vh',
                py: 4,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'black'
            }}
        >
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
                    px: { xs: 2, sm: 0 },
                    marginLeft: '30px'
                }}>
                    <img 
                        src={imageLoaded ? mobilepic : mobilepic} 
                        alt='online bulk food order' 
                        loading="lazy"
                        style={{ 
                            width: '100%', 
                            height: '500px',
                            maxWidth: '80%',
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
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
                            xs: '28px', 
                            sm: '30px', 
                            md: theme.font.title
                        },
                        mb: { xs: 2, md: 3 },
                        color: 'text.primary',
                        lineHeight: 1.2,
                        px: { xs: 1, sm: 0 }
                    }}>
                        <Box component="span" sx={{ color: theme.palette.primary.secondary }}>Order Bulk Food Online</Box> - Track & Enjoy with the Hogist App!
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontSize: { 
                            xs: '14px', 
                            sm: '16px', 
                            md: theme.font.paragraph 
                        },
                        lineHeight: 1.6,
                        color: '#FFF',
                        mb: { xs: 3, md: 4 },
                        px: { xs: 1, sm: 0, md: 0 }
                    }}>
                        Ordering bulk food in large quantities is now made easier!
                        Browse the menu, customize your order, track delivery, and enjoy exclusive app-only deals.
                        It's a quick, clever, and easy way to handle all your bulk food deliveries — straight from your smartphone.
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
                        <Box 
                            onClick={openAppPlay}
                            sx={{
                                width: { xs: '140px', sm: '160px', md: '150px', lg: '160px' },
                                height: 'auto',
                            }}
                        >
                            <img 
                                src={appStoreLoaded ? AppStoreButton : AppStoreButton} 
                                alt="Download on the App Store" 
                                loading="lazy"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto',
                                    cursor: 'pointer',
                                    opacity: appStoreLoaded ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out'
                                }} 
                            />
                        </Box>
                        <Box  
                            onClick={openGooglePlay}
                            sx={{
                                width: { xs: '140px', sm: '160px', md: '150px', lg: '160px' },
                                height: 'auto'
                            }}
                        >
                            <img 
                                src={googlePlayLoaded ? GooglePlayButton : GooglePlayButton} 
                                alt="GET IT ON Google Play" 
                                loading="lazy"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto',
                                    cursor: 'pointer',
                                    opacity: googlePlayLoaded ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out'
                                }} 
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default React.memo(MobileappSection);