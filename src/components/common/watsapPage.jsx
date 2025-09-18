// components/WhatsAppButton.jsx
import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { color } from 'framer-motion';

const WhatsAppButton = ({ phoneNumber }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <Fab
      color="success"
      aria-label="whatsapp"
      onClick={openWhatsApp}
      sx={{
        position: 'fixed',
        bottom: 30,
        left: 16,
        zIndex: 1000,
        boxShadow: 6,
      }}
    >
      <WhatsAppIcon sx={{color:'white'}}/>
    </Fab>
  );
};

export default React.memo(WhatsAppButton);