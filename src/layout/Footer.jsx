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
                <Box sx={{ 
                    display: { xs: 'grid', sm: 'none' },
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '26px',
                    mb: 3
                }}>
                    <Box sx={{ gridColumn: 'span 1' }}>
                        <img src={HogistLogo} alt="logo" style={{ height: '20px', width: '70px', marginBottom: '10px' }} />
                        <Typography variant="body2" sx={{ mb: 2, fontSize: '0.4rem' }}>
                            Hogist is the one-stop solution for all your event food needs. Get the best catering services through us.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
                            <FacebookIcon sx={{ fontSize: '0.8rem'}} />
                            <InstagramIcon sx={{ fontSize: '0.8rem' }} />
                            <TwitterIcon sx={{ fontSize: '0.8rem' }} />
                            <LinkedInIcon sx={{ fontSize: '0.8rem' }} />
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.5rem' }}>Our Services</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {['Industrial Catering','Corporate Catering','Out Door Catering','Cafeteria Services'].map((item) => (
                                <Typography key={item} variant="body2" sx={{ fontSize: '0.4rem' }}>{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.5rem' }}>Company</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {['Our Story', 'Careers', 'FAQ', 'Services Offered', 'Contact us'].map((item) => (
                                <Typography key={item} variant="body2" sx={{ fontSize: '0.4rem' }}>{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 1', mt: '13px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.5rem' }}>Legal</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                <Typography key={item} variant="body2" sx={{ fontSize: '0.4rem' }}>{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ gridColumn: 'span 2', mt: '13px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, fontSize: '0.5rem', marginLeft:'36px' }}>Contact us</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <LocationOnIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800'}} />
                                    <Typography variant="body2" sx={{ fontSize: '0.4rem' }}>
                                        HOGIST TECHNOLOGY PVT LTD.<br />
                                        2nd Floor, Kakani Towers,<br /> 
                                        No34 Khader Nawaz Khan Road<br />
                                        Nungambakkam, Chennai 600 006
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800' }} />
                                <Typography variant="body2" sx={{ fontSize: '0.4rem' }}>+91 - 9962687733</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ mr: '5px', fontSize: '0.8rem', flexShrink: 0, color:'#c60800' }} />
                                <Typography variant="body2" sx={{ fontSize: '0.4rem' }}>support@hogist.com</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ 
                    display: { xs: 'none', sm: 'flex' },
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: { sm: 2, md: 4 },
                }}>
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

                    <Box sx={{ 
                        flex: { sm: '1 1 25%', md: '1 1 0' },
                        minWidth: { sm: '120px', md: '0' },
                        maxWidth: { sm: '100%', md: '200px' },
                        marginRight:'-70px'
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, marginTop:{sm:'30px',md:'auto'}}}>Legal</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Become a Vendor','Become a Consultant','Privacy Policy','Terms & Conditions','Refunds & Cancellation'].map((item) => (
                                <Typography key={item} variant="body2">{item}</Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ 
                        flex: { sm: '1 1 40%', md: '1 1 0' },
                        minWidth: { sm: '300px', md: '0' },
                        maxWidth: { sm: '100%', md: '200px' },
                        mt: { sm: 3, md: 0 }
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, textAlign: { sm: 'left', md: 'center' },marginLeft:{sm:'77px', md:'auto'} }}>Contact us</Typography>
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