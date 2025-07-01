import React from 'react';
import { Box, Typography, Paper, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import clientVideo from '../assets/video/client_section_video.mp4';
import ClientCarousel from '../components/common/ClientCarousel';

const ClientSection = () => {
  const theme = useTheme();
  return (
    <Box  id="client-section">
      <Container maxWidth={'auto'}  sx={{ alignItems:"center", px: { xs: 2, md: 6}, pt:6,pb:3 ,m:0,width:"100%", }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
       
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>
              -Elite <Box component="span" sx={{
                color:theme.palette.primary.secondary
              }}>Trust</Box>
            </Typography>
            <Typography variant="h5" fontWeight="bold" sx={{ color: 'black', mt: 2 }}>
              Trusted by the world&apos;s best companies.
            </Typography>
            <Typography variant="h5" fontWeight="bold" sx={{ color: 'black' }}>
              Join the ranks of the elite.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Paper
              elevation={3}
              sx={{
                height: { xs: 200, sm: 250 },
                width: {
                  xs: '100%',md:'80%'
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
           
              }}
            >
              <video
                src={clientVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{ height: '100%', width: '100%', objectFit: 'fill' ,}}
              />
            </Paper>
          </motion.div>
        </Box>
      </Container>
         <Typography variant="h5" fontWeight="bold" sx={{  color:theme.palette.primary.secondary,textAlign: 'center', my: 5 }}>
             Take a Look at our clients
            </Typography>
      <ClientCarousel/>
    </Box>
  );
};

export default ClientSection;
