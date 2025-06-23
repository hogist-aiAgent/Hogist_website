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
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
            py: 5,
        }}>
            <Container maxWidth="sm">
                <Box>
                    <Typography variant='h2' marginTop={'30px'} fontWeight={'bold'} textAlign={'left'}>
                        <Box sx={{ color: theme.palette.primary.secondary }}>HOGIST</Box>
                    </Typography>
                    <Typography variant='h5' textAlign={'justify'} fontWeight={'bold'} sx={{ mt: 2,  }}>
                        Can serve any Company and
                        Events, No matter the Size,
                        Budget, or Complexity of
                        Operation
                    </Typography>
                    <Typography variant='h6' textAlign={'justify'} sx={{ mt: 2 }}>
                        Powered with Technology to
                        completely Zero the on-site
                        operational Errors.
                    </Typography>
                    <Stack direction="row" sx={{ mb: 3, marginTop: '20px' }}>
                        <CTAButton name={"Order now"} />
                    </Stack>
                </Box>
            </Container>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 3,
                width: { xs: '100%', md: '37%' },
                maxWidth: '600px',
                padding: 2,
                marginRight:'70px'
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