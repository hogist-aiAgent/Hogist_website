import { useTheme } from '@emotion/react';
import { Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import React, { forwardRef, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FaqSection = forwardRef((props, ref) => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    const handleCallButtonClick = () => {
        // Initiate phone call
        window.location.href = 'tel:+919962374733';
    };

    const faqs = [
        { question: " Where can I order bulk food online in Chennai or Coimbatore?", answer: "You can place bulk food orders online directly through Hogist. We deliver to both Chennai and Coimbatore and have a variety of cuisines, custom menus and can handle delivery for parties, weddings, functions, corporate and industrial needs." },
        { question: "How do I book an online bulk food order with Hogist?", answer: "Go to www.hogist.com or download our app.1. Select your service type (corporate / industrial / party catering etc.).2. Select your menu, fill in the event details and place the order.3.We'll take care of everything else, including vendor coordination, quality checks and timely delivery." },
        { question: " Does Hogist handle corporate and industrial bulk food orders*?", answer: "Yes! Hogist offers a full range of corporate and industrial catering services. Hogist specializes in corporate catering, we supply event catering and meal plans for employees within their work environment. We also specialize in industrial catering for factories or large teams, so if you require ongoing food services on-site Hogist is your go-to." },
        { question: "Can I customize my bulk food order online?", answer: "Yes, absolutely! You can choose your preferred cuisines, dishes, and dietary options. We offer Veg, Non-Veg, Jain, Vegan, and even healthy meal choices to suit your event." },
       
    ];
   
    return (
       

        <Box ref={ref} sx={{ 
            bgcolor: 'white', 
            height: 'auto', // Changed from minHeight to height
            py: { xs: 3, md: 4 }, 
            px: { xs: 2, sm: 3, md: '40px', lg: '60px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: {xs: 0, md: 0} // Removed negative margins
        }}>
            <Typography variant="h2" align="center" fontWeight="bold"
             sx={{fontSize:{ xs: '28px',sm:'30px', 
             md: theme.font.title},
             mb: { xs: 2, md: 3 }, // Normalized margins
             mt: { xs: 1, md: 2 } // Normalized margins
             }} 
             color={theme.palette.primary.secondary}>
                FAQ 
            </Typography>
            
            <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                width: '100%',
                maxWidth: '1200px',
                gap: { xs: 3, md: 4, lg: 3 },
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Image Section - Centered with accordion */}
                <Box sx={{
                    width: { xs: '40%',sm:'20%', md: '15%', lg: '10%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    order: { xs: 2, md: 1 }
                }}>
                   
                </Box>

                {/* Accordion Section - Centered with image */}
                <Box sx={{
                    width: { xs: '100%', md: '65%', lg: '65%' },
                    maxWidth: { xs: '100%', md: '700px' },
                    order: { xs: 2, md: 2 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight:{md:'100px'}
                }}>
                    {faqs.map((faq, index) => (
                        <Accordion 
                            expanded={selectedIndex === index}
                            onClick={() => handleClick(index)}
                            key={index} 
                            sx={{ 
                                boxShadow: 'none', 
                                mb: { xs: 1, sm: 1.5, md: 2 }, // Reduced space between accordions
                                position: "relative",
                                border: 'none',
                                background: 'black',
                                clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)',
                                borderRadius: '0 !important',
                                '&:before': { display: 'none' },
                                width: { xs: '100%', sm: '90%', md: '100%', lg: '100%' },
                                mx: 'auto',
                                
                            }}>
                            <AccordionSummary 
                                sx={{ 
                                    bgcolor: 'transparent',
                                    px: { xs: 3, sm: 4, md: '24px' },
                                    py: { xs: 1, md: 2 },
                                    minHeight: '48px !important',
                                    flexDirection: 'row',
                                    '& .MuiAccordionSummary-content': {
                                        margin: 0,
                                        flexGrow: 1, 
                                    },
                                }}
                            >
                                <Box sx={{
                                    position: "absolute",
                                    left: "0px",
                                    marginLeft: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    {selectedIndex === index ? (
                                        <KeyboardArrowUpIcon sx={{ color: 'white' }} />
                                    ) : (
                                        <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                    )}
                                </Box>
                                <Typography fontWeight="medium" sx={{ 
                                    fontSize: { xs: '11px', sm: '14px', md: '16px', lg: '17px' }, 
                                    color: 'white',
                                    textAlign: 'left',
                                    flex: 1,
                                    marginLeft: '24px'
                                }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ 
                                px: { xs: 3, sm: 4, md: '24px' }, 
                                py: 0,
                                pb: { xs: 2, md: 3 },
                                bgcolor: 'black',
                            }}>
                                <Typography color="white" sx={{ 
                                    fontSize: { xs: '14px', sm: '16px', md: theme.font.paragraph },
                                    lineHeight: '1.6',
                                    opacity: 0.8
                                }}>
                                    {faq.answer || "Answer not provided yet"}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                     <Stack  
                   direction="row" 
                   spacing={{ xs: 1.5, sm: 2, md: 3 }}
                   sx={{ 
                     justifyContent: 'center',
                     alignItems: 'center',
                     mt: '40px',
                     width: '100%',
                     mr:{xs:'10px',md:'100px'},
                     mb:3
                   }}
                 >
                   <Button
                     variant="contained"
                     onClick={handleCallButtonClick} // Add this onClick handler
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
                     Still Need Help?
                   </Button>
                 </Stack>
                </Box>
               
            </Box>
        </Box>
    );
});

export default FaqSection;