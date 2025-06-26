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

function Footer() {
    const theme = useTheme();
    return (
        <Box sx={{
            py: { xs: 3, md: 5 },
            px: 2,
            backgroundColor: theme.palette.background.paper
        }}>
            <Container maxWidth="lg">
                {/* Mobile View (unchanged) */}
                <Box sx={{ 
                    display: { xs: 'block', sm: 'none' },
                    textAlign: 'center'
                }}>
                    <Box sx={{ mb: 4 }}>
                        <img src={HogistLogo} alt="logo" style={{ height: '40px', width: '140px', marginBottom: '20px' }} />
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            Hogist is the one-stop solution for all your event food needs. Get the best catering services through us.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <FacebookIcon sx={{ fontSize: '1.5rem'}} />
                            <InstagramIcon sx={{ fontSize: '1.5rem' }} />
                            <TwitterIcon sx={{ fontSize: '1.5rem'  }} />
                            <LinkedInIcon sx={{ fontSize: '1.5rem' }} />
                        </Box>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Our Services</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Services'].map((item) => (
                                <Typography key={item} variant="body2">{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Company</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Our Story', 'Careers', 'FAQ', 'Services Offered', 'Contact us'].map((item) => (
                                <Typography key={item} variant="body2">{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Contact us</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                            <Box>
                                <LocationOnIcon sx={{ fontSize: '1.5rem', mb: 1, color:'#c60800'}} />
                                <Typography variant="body2">
                                    HOGIST TECHNOLOGY PVT LTD.<br />
                                    2nd Floor, Kakani Towers,<br /> 
                                    No34 Khader Nawaz Khan Road<br />
                                    Nungambakkam, Chennai 600 006
                                </Typography>
                            </Box>
                            <Box>
                                <PhoneIcon sx={{ fontSize: '1.5rem', mb: 1, color:'#c60800' }} />
                                <Typography variant="body2">+91 - 9962687733</Typography>
                            </Box>
                            <Box>
                                <EmailIcon sx={{ fontSize: '1.5rem', mb: 1, color:'#c60800' }} />
                                <Typography variant="body2">support@hogist.com</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Tablet and Desktop View */}
                <Box sx={{ 
                    display: { xs: 'none', sm: 'flex' },
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: { sm: 2, md: 4 },
                }}>
                    {/* First column - Logo and description */}
                    <Box sx={{ 
                        flex: { sm: '1 1 40%', md: '1 1 0' },
                        minWidth: { sm: '300px', md: '0' },
                        maxWidth: { sm: '100%', md: '200px' },
                        mb: { sm: 3, md: 0 }
                    }}>
                        <img src={HogistLogo} alt="logo" style={{ height: '40px', width: '140px', marginBottom: '20px' }} />
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            Hogist is the one-stop solution for all your event food needs. Get the best catering services through us.We offer best quality with different taste in our catering services.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <FacebookIcon sx={{ fontSize: '1.5rem' }} />
                            <InstagramIcon sx={{ fontSize: '1.5rem' }} />
                            <TwitterIcon sx={{ fontSize: '1.5rem' }} />
                            <LinkedInIcon sx={{ fontSize: '1.5rem' }} />
                        </Box>
                    </Box>

                    {/* Second column - Our Services */}
                    <Box sx={{ 
                        flex: { sm: '1 1 25%', md: '1 1 0' },
                        minWidth: { sm: '120px', md: '0' },
                        maxWidth: { sm: '100%', md: '100px' }
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Our Services</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Services'].map((item) => (
                                <Typography key={item} variant="body2">{item}</Typography>
                            ))}
                        </Box>
                    </Box>
                    
                    {/* Third column - Company */}
                    <Box sx={{ 
                        flex: { sm: '1 1 25%', md: '1 1 0' },
                        minWidth: { sm: '120px', md: '0' },
                        maxWidth: { sm: '100%', md: '100px' }
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Company</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Our Story', 'Careers', 'FAQ', 'Services Offered', 'Contact us'].map((item) => (
                                <Typography key={item} variant="body2">{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    {/* Fourth column - Legal */}
                    <Box sx={{ 
                        flex: { sm: '1 1 25%', md: '1 1 0' },
                        minWidth: { sm: '120px', md: '0' },
                        maxWidth: { sm: '100%', md: '200px' }
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, marginTop:'25px' }}>Legal</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                <Typography key={item} variant="body2">{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    {/* Fifth column - Contact us */}
                    <Box sx={{ 
                        flex: { sm: '1 1 40%', md: '1 1 0' },
                        minWidth: { sm: '300px', md: '0' },
                        maxWidth: { sm: '100%', md: '200px' },
                        mt: { sm: 3, md: 0 }
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, textAlign: { sm: 'left', md: 'center' } }}>Contact us</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <LocationOnIcon sx={{ mr: 1, mt: '2px', fontSize: '1.5rem', flexShrink: 0, color:'#c60800'}} />
                                <Typography variant="body2">
                                    HOGIST TECHNOLOGY PVT LTD.<br />
                                    2nd Floor, Kakani Towers,<br /> 
                                    No34 Khader Nawaz Khan Road<br />
                                    Nungambakkam, Chennai 600 006
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ mr: 1, fontSize: '1.5rem', flexShrink: 0, color:'#c60800' }} />
                                <Typography variant="body2">+91 - 9962687733</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ mr: 1, fontSize: '0.9rem', flexShrink: 0, color:'#c60800' }} />
                                <Typography variant="body2">support@hogist.com</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 5, pt: 3, borderTop: `1px solid ${theme.palette.divider}` }}>
                    <Typography variant="body2" sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                        © 2024, Hogist technologies private limited. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;