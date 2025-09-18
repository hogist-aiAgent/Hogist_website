import React from 'react';
import { Box, Typography,useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import clients from '../../utils/clientImport';

const ClientCarousel = () => {
  const duplicatedClients = [...clients, ...clients.reverse()];
  const theme = useTheme();
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
            src={logo}
            alt={`logo-${index}`}
            sx={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      ))}
    </motion.div>
  );

  return (
    
    <Box sx={{ py: 6, background: '#000', position: 'relative', overflow: 'hidden' }}>
    
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" fontWeight="bold" sx={{ 
          color: theme.palette.primary.secondary,
          textAlign: 'center', 
          mb: 6,
          marginTop:-2,
          fontSize:{xs:'25px', sm:'30px', md:theme.font.title}
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
