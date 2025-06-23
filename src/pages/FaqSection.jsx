import { useTheme } from '@emotion/react'
import { Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import FaqImage from '../assets/Faq/FaqImage.png';
import CTAButton from '../components/common/CTAButton';
import { color } from 'framer-motion';

function FaqSection() {
    const theme = useTheme();
    
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
            px: { xs: 2, sm: 3, md: '40px' },
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
                gap: { xs: 2, md: 4 },
                alignItems: 'flex-start'
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    order: { xs: 1, md: 1 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    marginRight: { xs: 0, md: '100px' }
                }}>
                    <Box sx={{ 
                        mb: { xs: 2, md: 4 }, 
                        width: '100%',
                        marginLeft: { xs: 0, md: '-60px' },
                        marginBottom: { xs: '10px', md: '20px' },
                        textAlign: 'center'
                    }}>
                        <img 
                            src={FaqImage}
                            alt='FAQ'
                            style={{ 
                                height: 'auto',
                                width: 'auto',
                                maxHeight: { xs: '150px', sm: '170px', md: '190px' },
                                maxWidth: '100%',
                            }} 
                        />
                    </Box>
                    <Box sx={{
                        width: '100%',
                        textAlign: { xs: 'center', md: 'right' },
                        marginLeft: { xs: 0, md: '60px' },
                        pr: { md: 2 },
                        fontSize:'15px'
                    }}>
                        <Typography variant="h4" fontWeight="bold" color='black' 
                            sx={{ 
                                marginTop: { xs: 0, md: '-100px' },
                                fontSize: { xs: '24px', sm: '28px', md: '35px' },
                                mb: 2,
                                lineHeight: '1.3'
                            }}>
                            Everything You<br/> Need to Know About<br/> Hogist
                        </Typography>
                        
                        <Typography variant="subtitle1" color="black" 
                            sx={{ 
                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                mb: { xs: 3, md: 4 },
                                lineHeight: '1.5'
                            }}>
                            Have questions about Hogist's catering<br/> and online food delivery? Here are answers to some of the most common queries
                        </Typography>
                        <Stack direction="row" sx={{ 
                            mb: 3, 
                            marginLeft: { xs: 'auto', md: '260px' },
                            marginRight: { xs: 'auto', md: 0 },
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            borderRadius:'0px'
                        }}>
                            <CTAButton hover={{
                                backgroundColor: 'transparent',
                                color:'black',}} 
                                border={"1px solid red"}  name={"Watch video"} />
                        </Stack>
                    </Box>
                </Box>

                <Box sx={{
                    width: { xs: '100%', md: '100%' },
                    maxWidth: { xs: '100%', md: '600px' },
                    order: { xs: 2, md: 2 },
                    marginRight: { xs: 0, md: '15px' },
                    marginTop: { xs: 0, md: '10px' },
                    
                
                }}>
                    {faqs.map((faq, index) => (
                        <Accordion key={index} sx={{ 
                            boxShadow: 'none', 
                            mb: { xs: 3, md: 6 }, 
                            position:"relative",
                            
                            border: 'none',
                          
                            clipPath:' polygon(0% 0%, 75% 0%, 85% 50%, 75% 100%, 0% 100%)'
                        }}>
                            <AccordionSummary 
                        
                                sx={{ 
                                    bgcolor: 'transparent',
                                    // borderRadius: 1,
                                    px: { xs: 1, sm: 2, md: '18px' },
                                    '&:hover': { bgcolor: 'transparent' },
                                    borderBottom: `1px solid ${theme.palette.divider}`,
                                    minHeight: '48px !important',
                                    '& .MuiAccordionSummary-content': {
                                        margin: '12px 0',
                                        flexDirection: 'row-reverse',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper': {
                                        marginRight: 'auto',
                                        marginLeft: 0,
                                        transform: 'none'
                                    }
                                }}
                            >
                                <Typography fontWeight="medium" sx={{ 
                                    fontSize: { xs: '11px', sm: '13px', md: '14px' }, 
                                    flex: 1,
                                    pr: { xs: 1, md: 0 }
                                }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ 
                                px: { xs: 1, sm: 2, md: 2 }, 
                                py: 2,
                                bgcolor: 'transparent',
                            }}>
                                <Typography color="WHITE" sx={{ 
                                    fontSize: { xs: '9px', sm: '10px', md: '12px' },
                                    lineHeight: '1.6'
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