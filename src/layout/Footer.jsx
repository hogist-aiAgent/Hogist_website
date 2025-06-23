import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
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
                <Grid container spacing={{ xs: 4, sm: 4, md: 8 }}>
                    {/* Logo and Description Column */}
                    <Grid item xs={12} sm={4} md={4}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column',
                            alignItems: { xs: 'center', sm: 'flex-start' },
                            textAlign: { xs: 'center', sm: 'left' },
                            marginLeft: { xs: 0, md: '-40px' }
                        }}>
                            <img 
                                src={HogistLogo} 
                                alt="logo" 
                                style={{
                                    height: '40px', 
                                    width: '140px', 
                                    marginBottom: '20px'
                                }} 
                            />
                            <Typography variant="body2" sx={{
                                lineHeight: 1.6,
                                mb: 3,
                                fontSize: { xs: '0.875rem', sm: '0.8125rem', md: '0.875rem' }
                            }}>
                                Hogist is the one-stop solution for all your event food needs.<br/> Get the best catering services through us.<br/> We offer best quality with different taste in our catering services.
                            </Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                gap: 1,
                                justifyContent: { xs: 'center', sm: 'flex-start' }
                            }}>
                                <FacebookIcon sx={{ fontSize: { xs: '2rem', sm: '1.75rem', md: '2rem' },  }}/>
                                <InstagramIcon sx={{ fontSize: { xs: '2rem', sm: '1.75rem', md: '2rem',marginLeft:'10px' } }}/>
                                <TwitterIcon sx={{ fontSize: { xs: '2rem', sm: '1.75rem', md: '2rem',marginLeft:'10px' } }}/>
                                <LinkedInIcon sx={{ fontSize: { xs: '2rem', sm: '1.75rem', md: '2rem',marginLeft:'10px' } }}/>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Pages Column */}
                    <Grid item xs={12} sm={3} md={3}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column',
                            alignItems: { xs: 'center', sm: 'flex-start' },
                            paddingLeft: { xs: 0, sm: '20px', md: '80px' }
                        }}>
                            <Typography variant="h6" sx={{ 
                                fontWeight: 'bold',
                                fontSize: { xs: '1.25rem', sm: '1.125rem', md: '1.25rem' },
                                mb: 2
                            }}>
                                Pages
                            </Typography>
                            <Box sx={{ 
                                display: 'grid',
                                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: '1fr' },
                                gap: '8px',
                                textAlign: { xs: 'center', sm: 'left' }
                            }}>
                                <Typography component="span" variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>Home</Typography>
                                <Typography component="span" variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>Review</Typography>
                                <Typography component="span" variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>Feature</Typography>
                                <Typography component="span" variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>Menu Bank</Typography>
                                <Typography component="span" variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>Contact us</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Contact Column */}
                    <Grid item xs={12} sm={5} md={5}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column',
                            alignItems: { xs: 'center', sm: 'flex-start' },
                            paddingLeft: { xs: 0, sm: '20px', md: '170px' }
                        }}>
                            <Typography variant="h6" sx={{ 
                                fontWeight: 'bold',
                                fontSize: { xs: '1.25rem', sm: '1.125rem', md: '1.25rem' },
                                mb: 2,
                                textAlign: { xs: 'center', sm: 'left' }
                            }}>
                                Contact us
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <LocationOnIcon sx={{ 
                                        mr: 1, 
                                        mt: '2px', 
                                        fontSize: { xs: '1.5rem', sm: '1.25rem', md: '1.5rem' },
                                    }} />
                                    <Typography variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>
                                        HOGIST TECHNOLOGY PVT LTD.<br />
                                        2nd Floor, Kakani Towers,<br/> 
                                        No34 Khader Nawaz Khan Road<br />
                                        Nungambakkam, Chennai 600 006
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PhoneIcon sx={{ 
                                        mr: 1, 
                                        fontSize: { xs: '1.5rem', sm: '1.25rem', md: '1.5rem' },
                                    }} />
                                    <Typography variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>+91 - 9962687733</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon sx={{ 
                                        mr: 1, 
                                        fontSize: { xs: '1.5rem', sm: '1.25rem', md: '1.5rem' },
                                    }} />
                                    <Typography variant="body2" sx={{ fontSize: { sm: '0.8125rem', md: '0.875rem' } }}>support@hogist.com</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright Section */}
                <Box sx={{ 
                    textAlign: 'center', 
                    mt: 5,
                    pt: 3,
                    borderTop: `1px solid ${theme.palette.divider}`,
                }}>
                    <Typography variant="body2" sx={{
                        fontSize: '0.75rem',
                        color: 'text.secondary',
                    }}>
                        © 2024, Hogist technologies private limited. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;