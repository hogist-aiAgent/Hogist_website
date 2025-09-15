import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  useTheme,
  Alert,
  Collapse,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('error');
  const theme = useTheme();

  // Auto-hide alert after 3 seconds
  useEffect(() => {
    let timer;
    if (alertOpen) {
      timer = setTimeout(() => {
        setAlertOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [alertOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.mobile || !formData.message) {
      setAlertMessage('All fields are required');
      setAlertSeverity('error');
      setAlertOpen(true);
      return;
    }

    // Mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setAlertMessage('Please enter a valid 10-digit mobile number');
      setAlertSeverity('error');
      setAlertOpen(true);
      return;
    }

    // If validation passes, submit the form
    console.log('Form submitted:', formData);
    
    // Show success message
    setAlertMessage('Enquiry submitted successfully!');
    setAlertSeverity('success');
    setAlertOpen(true);
    
    // Reset form
    setFormData({
      name: '',
      mobile: '',
      message: ''
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: 1, sm: 1.5 },
        position: 'relative',
        backgroundColor: 'transparent',
        width: '100%'
      }}
    >
      {/* Alert Message - Fixed at the top of the page, not overlapping form */}
      <Box sx={{ 
        position: 'fixed', 
        top: { xs: 65, sm: 75, md: 90 }, 
        left: '50%', 
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: { xs: '90%', sm: 380 }
      }}>
        <Collapse in={alertOpen}>
          <Alert
            severity={alertSeverity}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ 
              width: '100%',
              fontFamily: theme.fontFamily.default,
            }}
          >
            {alertMessage}
          </Alert>
        </Collapse>
      </Box>

      <Paper
        elevation={8}
        sx={{
          p: { xs: 3, sm: 3.5, md: 4 },
          width: { xs: '100%', sm: 400, md: 420 },
          maxWidth: '100%',
          borderRadius: 3,
          textAlign: 'center',
          mt: alertOpen ? { xs: 6, sm: 7 } : 0,
          transition: 'margin-top 0.3s ease',
          backgroundColor: 'white',
          fontFamily: theme.fontFamily.default,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            mb: { xs: 2, sm: 2.5 },
            width: '100%',
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#e53935',
              fontSize: { xs: '1.6rem', sm: '1.8rem', md:theme.font.heading },
              textAlign: 'center',
              width: '100%',
              fontFamily: theme.fontFamily.default,
            }}
          >
            Instant Quotes
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Name"
          placeholder="Enter your name"
          variant="outlined"
          sx={{ 
            mb: { xs: 2, sm: 2.5 }, 
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              color: 'black',
            },
            '& .MuiInputLabel-root': {
              color: 'black',
              backgroundColor: 'transparent',
              '&.Mui-focused': {
                color: 'black',
                backgroundColor: 'transparent',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'black',
              opacity: 1,
            },
          }}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Mobile Number"
          placeholder="Enter your mobile number"
          variant="outlined"
          sx={{ 
            mb: { xs: 2, sm: 2.5 }, 
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              color: 'black',
            },
            '& .MuiInputLabel-root': {
              color: 'black',
              backgroundColor: 'transparent',
              '&.Mui-focused': {
                color: 'black',
                backgroundColor: 'transparent',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'black',
              opacity: 1,
            },
          }}
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Message"
          placeholder="Enter your message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ 
            mb: { xs: 2, sm: 2.5 }, 
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              color: 'black',
            },
            '& .MuiInputLabel-root': {
              color: 'black',
              backgroundColor: 'transparent',
              '&.Mui-focused': {
                color: 'black',
                backgroundColor: 'transparent',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'black',
              opacity: 1,
            },
          }}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#e53935',
            color: '#fff',
            mb: 2,
            py: { xs: 1.1, sm: 1.3 },
            fontWeight: 'bold',
            fontSize: { xs: '0.95rem', sm: '1rem' },
            '&:hover': {
              backgroundColor: '#b71c1c',
            },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'black',
            mt: { xs: 2, sm: 2.5, md: 3 },
            fontSize: { xs: '0.75rem', sm: '0.8rem' },
          }}
        >
          © All rights reserved by{' '}
          <Link
            href="https://hogist.com/"
            underline="hover"
            sx={{ color: '#e53935', fontWeight: 'bold' }}
          >
            Hogist
          </Link>
          .
        </Typography>
      </Paper>
    </Box>
  );
}