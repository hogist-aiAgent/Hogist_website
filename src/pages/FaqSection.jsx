import { useTheme } from '@emotion/react';
import { Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { forwardRef, useState } from 'react';
import FaqImage from '../assets/Faq/faqImage.png';
import CTAButton from '../components/common/CTAButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FaqSection = forwardRef((props, ref) => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    const faqs = [
        { question: " Where can I order bulk food online in Chennai or Coimbatore?", answer: "You can place bulk food orders online directly through Hogist. We deliver to both Chennai and Coimbatore and have a variety of cuisines, custom menus and can handle delivery for parties, weddings, functions, corporate and industrial needs." },
        { question: "How do I book an online bulk food order with Hogist?", answer: "Go to www.hogist.com or download our app.1. Select your service type (corporate / industrial / party catering etc.).2. Select your menu, fill in the event details and place the order.3.We'll take care of everything else, including vendor coordination, quality checks and timely delivery." },
        { question: " Does Hogist handle corporate and industrial bulk food orders*?", answer: "Yes! Hogist offers a full range of corporate and industrial catering services. Hogist specializes in corporate catering, we supply event catering and meal plans for employees within their work environment. We also specialize in industrial catering for factories or large teams, so if you require ongoing food services on-site Hogist is your go-to." },
        { question: "Can I customize my *bulk food order online?", answer: "Yes, absolutely! You can choose your preferred cuisines, dishes, and dietary options. We offer Veg, Non-Veg, Jain, Vegan, and even healthy meal choices to suit your event." },
       
    ];

    return (
        <Box ref={ref} sx={{ 
            bgcolor: 'white', 
            minHeight: { xs: 'auto', md: '100vh' },
            py: { xs: 3, md: 4 }, 
            px: { xs: 2, sm: 3, md: '40px', lg: '60px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant="h6" fontWeight="bold" color='black' mb={2} alignSelf="flex-start">
                -FA<Box component="span" sx={{ color: theme.palette.primary.secondary }}>Q</Box>
            </Typography>
            
            <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                gap: { xs: 2, md: 4, lg: 6 },
                alignItems: 'flex-start'
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '45%', lg: '40%' },
                    order: { xs: 1, md: 1 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    marginRight: { xs: 0, md: '40px', lg: '80px' }
                }}>
                    <Box sx={{ 
                        mb: { xs: 2, md: 4 }, 
                        width: '100%',
                        marginLeft: { xs: 0, sm: '-1px', md:'-80px', lg: '-30px' },
                        marginBottom: { xs: '-20px', sm: '-20px', md:'0', lg:'20px' },
                        textAlign: 'center'
                    }}>
                        <img 
                            src={FaqImage}
                            alt='FAQ'
                            style={{ 
                                height: 'auto',
                                width: 'auto',
                                maxHeight: { xs: '150px', sm: '170px', md: '190px', lg: '210px' },
                                maxWidth: '100%',
                                marginTop:'-50px'
                            }} 
                        />
                    </Box>
                    <Box sx={{
                        width: '100%',
                        textAlign: { xs: 'center', md: 'right' },
                        marginLeft: { xs: 0, md: '40px', lg: '60px' },
                        pr: { md: 2 },
                        fontSize:'15px'
                    }}>
                        <Typography variant="h4" fontWeight="bold" color='black' 
                            sx={{ 
                                marginTop: { xs: 0, md: '-80px', lg: '-100px' },
                                fontSize: { xs: '22px', sm: '26px', md: '32px', lg: '35px' },
                                mb: 2,
                                lineHeight: '1.3'
                            }}>
                            Everything You<br/> Need to Know About<br/> Hogist
                        </Typography>
                        
                        <Typography variant="subtitle1" color="black" 
                            sx={{ 
                                fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '18px' },
                                mb: { xs: 3, md: 4 },
                                lineHeight: '1.5'
                            }}>
                            Have questions about Hogist's catering<br/> and online food delivery? Here are answers to some of the most common queries
                        </Typography>
                        <Stack direction="row" sx={{ 
                            mb: 3, 
                            marginLeft: { xs: 'auto', md: '180px', lg: '260px' },
                            marginRight: { xs: 'auto', md: 0 },
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            borderRadius:'0px'
                        }}>
                            <CTAButton 
                                hover={{
                                    backgroundColor: 'transparent',
                                    color:'black',
                                }} 
                                border={"1px solid red"}  
                                name={"Watch video"} 
                            />
                        </Stack>
                    </Box>
                </Box>

                <Box sx={{
                    width: { xs: '100%', md: '55%', lg: '60%' },
                    maxWidth: { xs: '100%', md: '700px', lg: '800px' },
                    order: { xs: 2, md: 2 },
                    marginRight: { xs: 0, md: '15px', lg: '30px' },
                    marginTop: { xs: 0, md: '10px' },
                }}>
                    {faqs.map((faq, index) => (
                        <Accordion 
                            expanded={selectedIndex === index}
                            onClick={() => handleClick(index)}
                            key={index} 
                            sx={{ 
                                boxShadow: 'none', 
                                mb: { xs: 2, sm: 3, md: 4, lg: 5 },
                                position: "relative",
                                border: 'none',
                                background: 'black',
                                clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)',
                                borderRadius: '0 !important',
                                '&:before': { display: 'none' },
                                width: { xs: '100%', sm: '90%', md: '500px', lg: '600px' },
                                mx: { xs: 'auto', md: 0 },
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
                                    fontSize: { xs: '12px', sm: '13px', md: '14px', lg: '15px' },
                                    lineHeight: '1.6',
                                    opacity: 0.8
                                }}>
                                    {faq.answer || "Answer not provided yet"}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    );
});

export default FaqSection;