import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';

import splashScreenLogo from '../../assets/logoSplashScreen.png';
import splashScreenBg from '../../assets/splashSceen.png';
import LoaderLogo from '../../assets/loaderLogo.png';

const MotionBox = motion(Box);

export default function SplashScreen({ loading = false }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundImage: `url(${splashScreenBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        <LazyLoad height={100} offset={100}>
          <motion.img
            src={LoaderLogo}
            alt="Loading"
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            style={{
              width: '150px',
              height: 'auto',
              filter: 'brightness(0) invert(1)',
              transformStyle: 'preserve-3d',
              zIndex: 2,
            }}
          />
        </LazyLoad>
      </Box>
    );
  }

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: 1300,
      }}
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        style={{
          backgroundImage: `url(${splashScreenBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LazyLoad height={300} offset={100}>
          <motion.img
            src={splashScreenLogo}
            alt="Splash Screen Logo"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.5 }}
            style={{
              width: '390px',
              height: 'auto',
              maxWidth: '80%',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </LazyLoad>
      </Box>
    </MotionBox>
  );
}
