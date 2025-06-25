import { useTheme } from '@emotion/react'
import { Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React, { useState } from 'react';
import FaqImage from '../assets/Faq/FaqImage.png';
import CTAButton from '../components/common/CTAButton';
import { color } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function FaqSection() {
    const theme = useTheme();
    
    const [selectedIndex,setSelectedIndex]=useState(null)

   const handleClick = (index) => {
        console.log(index)
        setSelectedIndex(selectedIndex === index ? null : index)
    }
    const faqs = [
        { question: "Can I use Hogist's online services for free?", answer: "Hogist's services are free. We will never charge you beyond the pricing listed on the website for the service opted by you. Our online catering service is free of cost and after every successful transaction, you will be receiving the complete breakup of charges incurred. There are no hidden charges." },
        { question: "What kind of food can I get?", answer: "You name it and we have it. We have collaborated with a wide range of restaurants, caterers, renowned chefs, Homecooks. All you have to do is get in touch with them, choose the product, set your quantity and make the payment. If you have a caterer in mind and you don't find them on Hogist, please feel free to drop their details at support@hogist.com. and we will get in touch with them." },
        { question: "Do you have home delivery option or I will have to pick it up?", answer: "All the orders will be delivered to you at your doorstep.Anyways, if you wish to pick the order by yourself, then you can set your order as a takeaway and pick it up from the Vendor's place." },
        { question: "Can I expect 100% satisfaction from Hogist?", answer: "Definitely with Top Class Customer Service! You can contact us anytime if you feel our services are not as expected.We will make sure that we deliver our services with 100% customer satisfaction. Also, if you find it appropriate, we can even serve your guests on your behalf." },
        { question: "Do you follow a secure process for accepting orders?", answer: "Yes. We use 128-bit SSL encryption method to capture your data. The information you provide us is stored using secured mediums so that there is no chance of data theft. Refer our Privacy Policy to get more information on how we store and use your information." },
    ];

    return (
        <Box sx={{ 
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
                flexDirection: { xs: 'column', md: 'row' },
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
                        marginLeft: { xs: 0, md: '-30px', lg: '-50px' },
                        marginBottom: { xs: '10px', md: '20px' },
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
    )
}

export default FaqSection