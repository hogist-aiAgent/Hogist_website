import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import HeroSectionImg from '../assets/HeroSectionImgslider2.png';
import SlidImg2 from '../assets/HeroSectionImgslider3.png';
import SlideImg from '../assets/HeroSectionImg4.png';
import CTAButton from '../components/common/CTAButton';

const MotionBox = motion(Box);

const images = [HeroSectionImg, SlideImg,SlidImg2];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        bgcolor: '#000',
        color: '#fff',
        px: { xs: 1, md: 5 },
        py: { xs: 4, md: 0 },
        height: {
          xs: 'auto',
          md: '90vh',
        },
      }}
    >
      {/* Left Side */}
      <MotionBox
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ width: { xs: '100%', md: '50%' }, pr: { md: 6 } }}
      >
        <Typography variant="h4" fontWeight="bold">
          Effortlessly Handle and Enhance your every Event with
        </Typography>

        <Typography
          variant="h2"
          fontWeight="900"
          sx={{ fontSize: { xs: '40px', md: '64px' }, mt: 2, mb: 2, color: '#c60800' }}
        >
          HOGIST
        </Typography>

        <Typography sx={{ mb: 3, fontSize: { xs: '14px', md: '16px' } }}>
          Top-Rated Catering Services in Chennai for Weddings, Parties & Corporate Events –
          Book Caterers Online Instantly. Whether it's a small gathering or a grand event, find the best
          caterers with easy online ordering, clear pricing, and hassle-free booking for unforgettable celebrations.
        </Typography>

        <Typography fontWeight="bold" sx={{ mb: 2 }}>
          Start Booking Your Event Caterer Now
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <CTAButton name={"Order now"} />
          <CTAButton name={"Talk to US"} />
        </Stack>
{/* 
        <Stack direction="row" spacing={2}>
          <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
          <IconButton sx={{ color: 'white' }}><Instagram /></IconButton>
          <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
          <IconButton sx={{ color: 'white' }}><LinkedIn /></IconButton>
        </Stack> */}
      </MotionBox>

      {/* Right Side Image Slider */}
      <Box sx={{ position: 'relative', width: { xs: '100%', md: '48%' }, height: { xs: '500px', md: '620px' }, mb: 3 }}>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="App preview"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </AnimatePresence>
      </Box>
    </Box>
  );
}
