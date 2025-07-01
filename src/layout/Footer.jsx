import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import HogistLogo from '../assets/HogistLogo2.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppStoreButton from '../assets/Mobileapp/AppStoreButton.png';
import GooglePlayButton from '../assets/Mobileapp/GooglePlayButton.png';

function Footer() {
    const theme = useTheme();
    
   
    const handleCompanyNavigation = (item) => {
        switch(item) {
            
            case 'Our Story':
                document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'Careers':
                document.getElementById('client-section')?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'FAQ':
                document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'Services Offered':
                document.getElementById('serve-section')?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'Contact us':
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                break;

            default:
                // Default behavior for other items
                const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
        }
    };

    // General navigation function for other sections
    const handleNavigation = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{
            py: { xs: 3, sm: 2, md: 2 },
            px: 2,
            backgroundColor: theme.palette.background.paper,
            minHeight: { xs: '40vh', sm: '40vh', md: '30vh' },
            paddingLeft:'10px',
            paddingRight:'10px'
        }}>
            <Container maxWidth="lg" sx={{ paddingLeft:'10px', paddingRight:'10px'}}>
                {/* Mobile View (xs) */}
                <Box sx={{ 
                    display: { xs: 'grid', sm: 'none' },
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '13px',
                    mb: 3,
                    paddingLeft:'10px',
                    paddingRight:'10px'
                }}>
                    <Box sx={{ gridColumn: 'span 1' }}>
                        <img src={HogistLogo} alt="logo" style={{ height: '20px', width: '70px', marginBottom: '10px' }} />
                        <Typography variant="body2" sx={{ mb: 2, fontSize: '0.7rem' }}>
                        Hogist is the one-stop solution for all your event food needs. Get the best catering services through us.We offer best quality <br/>with different taste in our catering services.
                        </Typography>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>Company</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {['Our Story', 'Careers', 'FAQ', 'Services Offered', 'Contact us'].map((item) => (
                                <Typography 
                                    key={item} 
                                    variant="body2" 
                                    sx={{ fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleCompanyNavigation(item)}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1', mt: '13px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>Our Services</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Services'].map((item) => (
                                <Typography 
                                    key={item} 
                                    variant="body2" 
                                    sx={{ fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1', mt: '13px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>Legal</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                <Typography 
                                    key={item} 
                                    variant="body2" 
                                    sx={{ fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-').replace('&', 'and'))}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box id="contact-section" sx={{ 
                    display: { xs: 'block', sm: 'none' },
                    mt: '13px',
                    px: '10px',
                    mb: '13px'
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem' }}>Contact us</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <LocationOnIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800'}} />
                            <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
                                HOGIST TECHNOLOGIES PVT LTD.<br />
                                2nd Floor, Kakani Towers,<br /> 
                                No34 Khader Nawaz Khan Road<br />
                                Nungambakkam, Chennai 600 006
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800' }} />
                            <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>+91 - 9962687733</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800' }} />
                            <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>support@hogist.com</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ 
                    display: { xs: 'block', sm: 'none' },
                    mt: '13px',
                    px: '10px',
                    mb: '13px'
                }}>
                    <Typography  sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.8rem' }}>Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
                        <FacebookIcon sx={{ fontSize: '1rem'}} />
                        <InstagramIcon sx={{ fontSize: '1rem' }} />
                        <TwitterIcon sx={{ fontSize: '1rem' }} />
                        <LinkedInIcon sx={{ fontSize: '1rem' }} />
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
                }}>
                    <Box sx={{ gridColumn: 'span 1' }}>
                        <img src={HogistLogo} alt="logo" style={{ height: '20px', width: '80px', marginBottom: '10px' }} />
                        <Typography variant="body2" sx={{ mb: 1, fontSize: '0.7rem' }}>
                           Hogist is the one-stop solution for all your event food needs. Get the best catering services through us.We offer best quality with different taste in our catering services.
                        </Typography>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Company</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            {['Our Story', 'Careers', 'FAQ', 'Services Offered', 'Contact us'].map((item) => (
                                <Typography 
                                    key={item} 
                                    variant="body2" 
                                    sx={{ fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleCompanyNavigation(item)}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Our Services</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Services'].map((item) => (
                                <Typography 
                                    key={item} 
                                    variant="body2" 
                                    sx={{ fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1', mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Legal</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                            {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                <Typography 
                                    key={item} 
                                    variant="body2" 
                                    sx={{ fontSize: '0.7rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-').replace('&', 'and'))}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box id="contact-section" sx={{ gridColumn: 'span 1', mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Contact us</Typography>
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
                    
                    <Box sx={{ gridColumn: 'span 1', mt: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Follow Us</Typography>
                        <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
                            <FacebookIcon sx={{ fontSize: '0.9rem'}} />
                            <InstagramIcon sx={{ fontSize: '0.9rem' }} />
                            <TwitterIcon sx={{ fontSize: '0.9rem' }} />
                            <LinkedInIcon sx={{ fontSize: '0.9rem' }} />
                        </Box>
                    </Box>
                </Box>

                {/* Desktop View (md) */}
                <Box sx={{ 
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'space-between',
                    gap: 3,
                    flexWrap: 'wrap',
                    height: { md: 'calc(100% - 80px)' }
                }}>
                    <Box sx={{ 
                        flex: '1 1 200px',
                        mb: 2
                    }}>
                        <img src={HogistLogo} alt="logo" style={{ height: '25px', width: '100px', marginBottom: '15px' }} />
                        <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
                            Hogist is the one-stop solution for all your event food needs.
                            Get the best catering services through us. We offer best quality with different taste in our catering services.
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        flex: '1 1 150px',
                        mb: 2
                    }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Our Services</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Services'].map((item) => (
                                <Typography 
                                    key={item} 
                                    sx={{ fontSize: '0.75rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-'))}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                        
                        <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2, fontSize: '0.85rem' }}>Company</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {['Our Story', 'Careers', 'FAQ', 'Services Offered', 'Contact us'].map((item) => (
                                <Typography 
                                    key={item} 
                                    sx={{ fontSize: '0.75rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
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
                        <Typography sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Legal</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                <Typography 
                                    key={item} 
                                    sx={{ fontSize: '0.75rem', cursor: 'pointer', '&:hover': { color: '#c60800' } }}
                                    onClick={() => handleNavigation(item.toLowerCase().replace(' ', '-').replace('&', 'and'))}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                        
                        <Typography sx={{ fontWeight: 'bold', mb: 1, mt: 2, fontSize: '0.85rem' }}>Follow Us</Typography>
                        <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
                            <FacebookIcon sx={{ fontSize: '0.9rem'}} />
                            <InstagramIcon sx={{ fontSize: '0.9rem' }} />
                            <TwitterIcon sx={{ fontSize: '0.9rem' }} />
                            <LinkedInIcon sx={{ fontSize: '0.9rem' }} />
                        </Box>
                    </Box>

                    <Box id="contact-section" sx={{ 
                        flex: '1 1 200px',
                        mb: 2
                    }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>Contact us</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <LocationOnIcon sx={{ mr: 1, mt: '2px', fontSize: '0.9rem', flexShrink: 0, color:'#c60800'}} />
                                <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
                                    HOGIST TECHNOLOGIES PVT LTD.<br />
                                    2nd Floor, Kakani Towers,<br /> 
                                    No34 Khader Nawaz Khan Road<br />
                                    Nungambakkam, Chennai 600 006
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ mr: 1, fontSize: '0.9rem', flexShrink: 0, color:'#c60800' }} />
                                <Typography sx={{ fontSize: '0.75rem' }}>+91 - 9962687733</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ mr: 1, fontSize: '0.9rem', flexShrink: 0, color:'#c60800' }} />
                                <Typography sx={{ fontSize: '0.75rem' }}>support@hogist.com</Typography>
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
    );
}

export default Footer;