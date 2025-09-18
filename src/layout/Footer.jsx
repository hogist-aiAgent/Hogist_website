import { Box, Container, Typography, useTheme, Fab, Zoom } from '@mui/material';
import React, { useState, useEffect } from 'react';
import HogistLogo from '../assets/red with white bck.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppStoreButton from '../assets/Mobileapp/AppStoreButton.png';
import GooglePlayButton from '../assets/Mobileapp/GooglePlayButton.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Footer({ refs }) {
    const theme = useTheme();
    const contactRef = React.useRef(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    // Show the scroll-to-top button when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleCompanyNavigation = (item) => {
        switch(item) {
            case 'Our Story':
                refs.heroRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Careers':
                refs.clientRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'FAQ':
                refs.faqRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Services Offered':
                refs.serveRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Contact us':
                contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    const handleNavigation = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openFacebook = () => {
    const url = `https://www.facebook.com/hogisttechnologies/`;
    window.open(url, '_blank');
    }
      const openInstagram = () => {
    const url = `https://www.instagram.com/hogistindia/ `;
    window.open(url, '_blank');
    }
      const openTwitter = () => {
    const url = `https://twitter.com/Hogistindia`;
    window.open(url, '_blank');
    }
      const openLinkedin = () => {
    const url = `https://www.linkedin.com/company/hogist/`;
    window.open(url, '_blank');
    }
    return (
        <>
            <Box sx={{
                py: { xs: 3, sm: 2, md: 2 },
                px: 2,
                backgroundColor: theme.palette.background.paper,
                minHeight: { xs: '40vh', sm: '40vh', md: '30vh' },
                paddingLeft: '10px',
                paddingRight: '10px',
                //paddingTop:'50px'
            }} component="footer">
               
                <Container maxWidth="lg" sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    {/* Mobile View (xs) */}
                    <Box sx={{ 
                        display: { xs: 'grid', sm: 'none' },
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '13px',
                        mb: 3,
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        paddingTop:'20px'
                    }}>
                        <Box sx={{ gridColumn: 'span 1' }}>
                            <img src={HogistLogo} alt="logo" style={{ height: '40px', width: '100px', marginBottom: '1px', marginTop:'-6px',marginLeft:'-7px' }} />
                            <Typography variant="body2" sx={{ mb: 2, fontSize: '0.7rem' }}>
            Your trusted partner for<br/> bulk food orders in<br/> Chennai — serving<br/> corporates, industries <br/>& events.
                            </Typography>
                        </Box>

                        <Box sx={{ gridColumn: 'span 1' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem', color: '#c60800' }}>Quick Links</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                {['About Us', 'Services Offered', 'FAQ', 'Careers', 'Contact us'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        variant="body2" 
                                        sx={{ 
                                            fontSize: '0.7rem', 
                                            cursor: 'pointer', 
                                            
                                        }}
                                        onClick={() => handleCompanyNavigation(item)}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ gridColumn: 'span 1', mt: '13px' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem', color: '#c60800' }}>Our Services</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                {['Industrial Catering', 'Corporate Catering', 'Out Door Catering', 'Cafeteria Services'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        variant="body2" 
                                        sx={{ 
                                            fontSize: '0.7rem', 
                                            cursor: 'pointer', 
                                            
                                        }}
                                        onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ gridColumn: 'span 1', mt: '13px' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem', color: '#c60800' }}>Legal</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                {['Become a Vendor', 'Become a Consultant', 'Privacy Policy', 'Terms & Conditions', 'Refunds & Cancellation'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        variant="body2" 
                                        sx={{ 
                                            fontSize: '0.7rem', 
                                            cursor: 'pointer', 
                                            
                                        }}
                                        onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-').replace('&', 'and'))}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    <Box ref={contactRef} sx={{ 
                        display: { xs: 'block', sm: 'none' },
                        mt: '13px',
                        px: '10px',
                        mb: '13px'
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem', color: '#c60800' }}>Contact us</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <LocationOnIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color: '#c60800' }} />
                                <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
                                    HOGIST TECHNOLOGIES PVT LTD.<br />
                                    2nd Floor, Kakani Towers,<br /> 
                                    No34 Khader Nawaz Khan Road<br />
                                    Nungambakkam, Chennai 600 006
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color: '#c60800' }} />
                                <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>+91 - 9962687733</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color: '#c60800' }} />
                                <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>support@hogist.com</Typography>
                            </Box>
                        </Box>
                         <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2, fontSize: '14px',color: '#c60800' }}>Follow Us</Typography>
                            <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start',cursor: 'pointer' }}>
                                <FacebookIcon onClick={openFacebook} sx={{ fontSize: '1.3rem',cursor: 'pointer'}} />
                                <InstagramIcon onClick={openInstagram} sx={{ fontSize:'1.3rem',cursor: 'pointer' }} />
                                <TwitterIcon onClick={openTwitter} sx={{ fontSize: '1.3rem',cursor: 'pointer' }} />
                                <LinkedInIcon onClick={ openLinkedin} sx={{ fontSize:'1.3rem',cursor: 'pointer' }} />
                            </Box>
                    </Box>

                    {/* Tablet View (sm) */}
                    <Box sx={{ 
                        display: { xs: 'none', sm: 'grid', md: 'none' },
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 2,
                        mb: 2,
                        justifyContent:'space-evenly',
                        paddingRight:'0px',
                        paddingTop:'30px'
                    }}>
                        <Box sx={{ gridColumn: 'span 1' }}>
                            <img src={HogistLogo} alt="logo" style={{ height: '40px', width: '120px', marginBottom: '1px', marginTop:'-7px',marginLeft:'-7px' }} />
                            <Typography variant="body2" sx={{ mb: 1, fontSize: '0.7rem' }}>
                            Your trusted partner for bulk food orders in Chennai — serving <br/>corporates, industries & events.
                            </Typography>

                              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem', color: '#c60800' }}>Follow Us</Typography>
                            <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start',cursor: 'pointer' }}>
                                <FacebookIcon onClick={openFacebook} sx={{ fontSize: '0.9rem',cursor: 'pointer'}} />
                                <InstagramIcon onClick={openInstagram} sx={{ fontSize: '0.9rem',cursor: 'pointer' }} />
                                <TwitterIcon  onClick={openTwitter} sx={{ fontSize: '0.9rem',cursor: 'pointer' }} />
                                <LinkedInIcon onClick={ openLinkedin} sx={{ fontSize: '0.9rem',cursor: 'pointer' }} />
                            </Box>
                        </Box>

                        <Box sx={{ gridColumn: 'span 1' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem', color: '#c60800' }}>Quick Links</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                {['About Us', 'Services Offered', 'FAQ', 'Careers', 'Contact us'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        variant="body2" 
                                        sx={{ fontSize: '0.7rem', cursor: 'pointer' }}
                                        onClick={() => handleCompanyNavigation(item)}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ gridColumn: 'span 1' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem', color: '#c60800' }}>Our Services</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Services'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        variant="body2" 
                                        sx={{ fontSize: '0.7rem', cursor: 'pointer'}}
                                        onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ gridColumn: 'span 1', mt: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem', color: '#c60800' }}>Legal</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        variant="body2" 
                                        sx={{ fontSize: '0.7rem', cursor: 'pointer' }}
                                        onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-').replace('&', 'and'))}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box id="contact-section" sx={{ gridColumn: 'span 1', mt: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem', color: '#c60800' }}>Contact us</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <LocationOnIcon sx={{ mr: '3px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800'}} />
                                    <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
                                        HOGIST TECHNOLOGIES PVT LTD.<br />
                                        2nd Floor, Kakani Towers,<br /> 
                                        No34 Khader Nawaz Khan Road<br />
                                        Nungambakkam, Chennai 600 006
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PhoneIcon sx={{ mr: '3px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800' }} />
                                    <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>+91 - 9962687733</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon sx={{ mr: '3px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800' }} />
                                    <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>support@hogist.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>
                    {/* Desktop View (md) */}
                    <Box sx={{ 
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'space-evenly',
                        gap: 3,
                        flexWrap: 'wrap',
                        height: { md: 'calc(100% - 80px)' },
                        paddingTop:'30px'
                    }}>
                        <Box sx={{ 
                            flex: '1 1 250px',
                            mb: 2
                        }}>
                            <img src={HogistLogo} alt="logo" style={{ height: '65px', width: '190px', marginBottom: '3px',marginLeft:'-10px' }} />
                            <Typography sx={{ fontSize: '15px', lineHeight: 1.4 }}>
                                Your trusted partner for bulk food orders in Chennai — serving corporates, industries & events.
                            </Typography>

                             <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2, fontSize: '17px', color: '#c60800' }}>Follow Us</Typography>
                            <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start',cursor: 'pointer' }}>
                                <FacebookIcon onClick={openFacebook} sx={{ fontSize: '1.4rem',cursor: 'pointer'}} />
                                <InstagramIcon onClick={openInstagram} sx={{ fontSize:'1.4rem',cursor: 'pointer' }} />
                                <TwitterIcon  onClick={openTwitter} sx={{ fontSize: '1.4rem',cursor: 'pointer', }} />
                                <LinkedInIcon onClick={ openLinkedin} sx={{ fontSize:'1.4rem',cursor: 'pointer' }} />
                            </Box>
                        </Box>

                        <Box sx={{ 
                            flex: '1 1 100px',
                            mb: 2
                        }}>
                            <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2, fontSize: '16px', color: '#c60800'}}>Quick Links</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                {['About Us', 'Services Offered', 'FAQ', 'Careers', 'Contact us'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        sx={{ fontSize: '15px', cursor: 'pointer',}}
                                        onClick={() => handleCompanyNavigation(item)}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>            
                        </Box>
                        <Box sx={{ 
                            flex: '1 1 150px',
                            mb: 2
                        }}>
                             <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2,fontSize: '16px', color: '#c60800' }}>Services</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Management'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        sx={{ fontSize: '15px', cursor: 'pointer'}}
                                        onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ 
                            flex: '1 1 150px',
                            mb: 2
                        }}>
                            <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2, fontSize:'16px', color: '#c60800' }}>Legal</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                    <Typography 
                                        key={item} 
                                        sx={{ fontSize: '15px', cursor: 'pointer'}}
                                        onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-').replace('&', 'and'))}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box id="contact-section" sx={{ 
                            flex: '1 1 200px',
                            mb: 2
                        }}>
                            <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2, fontSize:'17px', color: '#c60800' }}>Contact us</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <LocationOnIcon sx={{ mr: 1, mt: '2px', fontSize: '1.4rem', flexShrink: 0, color:'#c60800'}} />
                                    <Typography sx={{ fontSize: '13px', lineHeight: 1.45 }}>
                                        HOGIST TECHNOLOGIES PVT LTD.<br />
                                        2nd Floor, Kakani Towers,<br /> 
                                        No.34 Khader Nawaz Khan Road
                                        Nungambakkam,<br /> Chennai-600006.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PhoneIcon sx={{ mr: 1, fontSize: '1.6rem', flexShrink: 0, color:'#c60800' }} />
                                    <Typography sx={{ fontSize: '15px' }}>+91 - 9962687733</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon sx={{ mr: 1, fontSize: '1.5rem', flexShrink: 0, color:'#c60800' }} />
                                    <Typography sx={{ fontSize: '15px' }}>support@hogist.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Bottom Section */}
                    <Box sx={{ 
                        textAlign: 'center', 
                        mt: { xs: 3, sm: 2, md: 4 },
                        pt: 1,
                        borderTop: `1px solid ${theme.palette.divider}`,
                        height: { xs: '80px', sm: '70px', md: '80px' }
                    }}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.65rem', md: '0.7rem' }, color: 'text.secondary', mb: 1 }}>
                            © 2024, Hogist technologies private limited. All rights reserved.
                        </Typography>
                        <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            gap: 1,
                            alignItems: 'center'
                        }}>
                            <Box sx={{ width: { xs: '90px', sm: '80px', md: '90px' }, height: 'auto' }}>
                                <img src={AppStoreButton} alt="App Store" style={{ width: '100%', height: 'auto' }} />
                            </Box>
                            <Box sx={{ width: { xs: '90px', sm: '80px', md: '90px' }, height: 'auto' }}>
                                <img src={GooglePlayButton} alt="Google Play" style={{ width: '100%', height: 'auto' }} />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            
            {/* Scroll-to-top button */}
            <Zoom in={showScrollTop}>
                <Fab
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 30,
                        right: 22,
                        backgroundColor: '#c60800',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#a00600',
                        }
                    }}
                    size="small"
                    aria-label="scroll to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Zoom>
        </>
    );
}

export default React.memo(Footer);