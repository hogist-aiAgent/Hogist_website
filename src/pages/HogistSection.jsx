import { Typography } from '@mui/material'
import { Box, Container, Stack, useTheme } from '@mui/system'
import React from 'react'
import Chef from '../assets/front/Chef.jpg';
import homemade from '../assets/front/homemade.jpg';
import rest from '../assets/front/rest.jpg';
import n from '../assets/resized/n.jpg';
import CTAButton from '../components/common/CTAButton';

function HogistSection() {
    const theme = useTheme();
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            py: 5,
            bgcolor: 'black',
            px: { xs: 2, sm: 3, md: 0 }
        }}>
            <Container maxWidth="sm" sx={{
                order: { xs: 2, sm: 1 },
                mb: { xs: 4, md: 0 },
                paddingLeft:{sm:'50px'},
                paddingRight:{sm:'50px'},
                marginRight:{md:'50px'},
                marginLeft:{md:'30px'}
            }}>
                <Box>
                    <Typography fontSize={{xs:'30px',sm:'30px',md:'45px'}} marginTop={'30px'} fontWeight={'bold'} textAlign={{ xs: 'center', md: 'left' }}>
                        <Box sx={{ color: theme.palette.primary.secondary }}>HOGIST</Box>
                    </Typography>
                    <Typography fontSize={{xs:'16px',sm:'16px',md:'20px'}} textAlign={{ xs: 'center', md: 'left' }} fontWeight={'bold'} sx={{ mt: 2 }}>
                        Can serve any Company and
                        Events, No matter the Size,
                        Budget, or Complexity of
                        Operation
                    </Typography>
                    <Typography fontSize={{xs:'16px',sm:'16px',md:'19px'}} textAlign={{ xs: 'center', md: 'left' }} sx={{ mt: 2 }}>
                        Powered with Technology to
                        completely Zero the on-site
                        operational Errors.
                    </Typography>
                    <Stack direction="row" justifyContent={{ xs: 'center', md: 'left', }} sx={{ mb: 3, marginTop: '20px' }}>
                        <CTAButton name={"Order now"} />
                    </Stack>
                </Box>
            </Container>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' },
                gap: { xs: 2, sm: 3 },
                width: { xs: '90%', sm: '80%', md: '30%' },
                maxWidth: { xs: '400px', sm: '500px', md: '600px' },
                padding: { xs: 1, sm: 2 },
                marginRight: { xs: 0, md: '40px' },
                order: { xs: 1, sm: 2 },
                mb: { xs: 3, md: 0 }
            }}>
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        zIndex: 1,
                        boxShadow: 3
                    }
                }}>
                    <img src={Chef} alt="chef" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </Box>
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        zIndex: 1,
                        boxShadow: 3
                    }
                }}>
                    <img src={homemade} alt="homemade" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </Box>
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        zIndex: 1,
                        boxShadow: 3
                    }
                }}>
                    <img src={rest} alt="rest" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </Box>
                <Box sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        zIndex: 1,
                        boxShadow: 3
                    }
                }}>
                    <img src={n} alt="n" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </Box>
            </Box>
        </Box>
    )
}

export default HogistSection