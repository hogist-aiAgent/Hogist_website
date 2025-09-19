import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clients from '../../utils/clientImport';

const ClientCarousel = () => {
  const duplicatedClients = [...clients, ...clients.reverse()];
  const theme = useTheme();
  const [logosLoaded, setLogosLoaded] = useState({});
  
  // Use react-intersection-observer hook for the carousel
  const { ref: carouselRef, inView: carouselInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Handle logo loading when carousel comes into view
  useEffect(() => {
    if (carouselInView) {
      // Preload all client logos when carousel is in view
      clients.forEach((logo, index) => {
        const img = new Image();
        img.src = logo;
        img.alt = `logo-${index}`;
        img.onload = () => {
          setLogosLoaded(prev => ({ ...prev, [logo]: true }));
        };
      });
    }
  }, [carouselInView]);

  const MarqueeRow = ({ reverse = false }) => (
    <motion.div
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{
        duration: 130,
        ease: 'linear',
        repeat: Infinity,
      }}
      style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        width: 'fit-content',
      }}
    >
      {duplicatedClients.map((logo, index) => (
        <Box
          key={`${reverse ? 'r' : 'f'}-${index}`}
          sx={{
            height: { xs: 60, sm: 70, md: 80 },
            width: { xs: 120, sm: 140, md: 160 },
            mx: { xs: 2, sm: 3, md: 4 },
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            flexShrink: 0,
            p: 1,
            fontFamily: theme.fontFamily.default,
          }}
        >
          <Box
            component="img"
            src={logosLoaded[logo] ? logo : ''}
            alt={`logo-${index}`}
            loading="lazy"
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              opacity: logosLoaded[logo] ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </Box>
      ))}
    </motion.div>
  );

  return (
    <Box 
      ref={carouselRef}
      sx={{ py: 6, background: '#000', position: 'relative', overflow: 'hidden' }}
    >
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" fontWeight="bold" sx={{ 
          color: theme.palette.primary.secondary,
          textAlign: 'center', 
          mb: 6,
          marginTop: -2,
          fontSize: { xs: '25px', sm: '30px', md: theme.font.title }
        }}>
          Take a Look at our clients
        </Typography>
      </Box>
      
      {/* Fade left */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '200px',
          background: 'linear-gradient(to right, #000 0%, transparent 100%)',
          zIndex: 1,
        }}
      />
      
      {/* Fade right */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '200px',
          background: 'linear-gradient(to left, #000 0%, transparent 100%)',
          zIndex: 1,
        }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <MarqueeRow reverse={false} />
        <MarqueeRow reverse={true} />
      </Box>
    </Box>
  );
};

export default React.memo(ClientCarousel);