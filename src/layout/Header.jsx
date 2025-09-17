import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import HeaderLogo from '../assets/HogistLogo2.png';

const navItems = ['Home', 'Why Us', 'Services', 'Menu Bank', 'Review', 'Blogs'];

// Services dropdown items
const servicesItems = [
  'Corporate Events',
  'Industrial Catering',
  'Institutional Catering',
  'Family Events',
  'Public Events'
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const servicesMenuOpen = Boolean(servicesAnchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleServicesMenuOpen = (event) => setServicesAnchorEl(event.currentTarget);
  const handleServicesMenuClose = () => setServicesAnchorEl(null);

  const handleCallButtonClick = () => {
    // Initiate phone call
    window.location.href = 'tel:+919962374733';
  };

  // Navigation handler
  const handleNavigation = (item) => {
    switch (item) {
      case 'Home':
        // Scroll to HeroSection
        document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Why Us':
        // Scroll to ChooseUsSection
        document.getElementById('chooseUs-section')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Menu Bank':
        // Open external link
        window.open('https://www.hogist.com/hogist-menu-bank/', '_blank');
        break;
      case 'Review':
        // Scroll to TestimonialSection
        document.getElementById('testimonial-section')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    setDrawerOpen(false); // Close drawer on mobile after navigation
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        zIndex: 9999,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        padding: { xs: '0.75rem 1rem', sm: '1rem 1.5rem', md: '1rem 2rem' },
        fontFamily: theme.fontFamily.default,
        overflow: 'hidden', // Prevent horizontal overflow
        boxSizing: 'border-box', // Ensure padding is included in width calculation
      }}
    >
      {/* MOBILE VIEW */}
      {isMobile ? (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          {/* Menu Button */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              backgroundColor: 'transparent',
              color: 'red',
              borderRadius: '50%',
              p: { xs: 1, sm: 1.2 },
              mr: 1,
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Center Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            <LazyLoad height={50} offset={100}>
              <Box
                component="img"
                src={HeaderLogo}
                alt="Hogist Logo"
                loading="lazy"
                sx={{ width: { xs: 90, sm: 110 }, height: 'auto', mr: 1 }}
              />
            </LazyLoad>
          </Box>

          {/* Account Button */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              backgroundColor: 'transparent',
              color: 'red',
              borderRadius: '50%',
              p: { xs: 1, sm: 1.2 },
            }}
          >
            <AccountCircleIcon/>
          </IconButton>
        </Box>
      ) : (
        <>
          <LazyLoad height={60} offset={100}>
            <Box
              component="img"
              src={HeaderLogo}
              alt="Hogist Logo"
              loading="lazy"
              sx={{ 
                width: { md: 150, lg: 170 }, 
                height: 'auto', 
                paddingRight: { md: '10px', lg: '15px' },
                flexShrink: 0, // Prevent logo from shrinking
              }}
            />
          </LazyLoad>

          <Box sx={{ 
            display: 'flex', 
            gap: { md: '0.6rem', lg: '0.8rem' }, 
            alignItems: 'center',
            flexWrap: 'nowrap', 
            justifyContent: 'center',
            flex: 1,
            maxWidth: '600px', 
            margin: '0 auto', 
            overflow: 'hidden', 

          }}>
            {navItems.map((item) => (
              item === 'Services' ? (
                <Box key={item} sx={{ position: 'relative', flexShrink: 0 }}>
                  <Typography
                    onClick={handleServicesMenuOpen}
                    variant="body1"
                    sx={{
                      color: 'white',
                      cursor: 'pointer',
                      fontWeight: 500,
                      padding: { md: '4px 6px', lg: '6px 8px' }, 
                      fontSize: { md: '0.85rem', lg: '0.9rem' }, 
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        borderRadius: '5px',
                        color: theme.palette.primary.secondary,
                        backgroundColor: 'white',
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    {item}
                    
                  </Typography>
                </Box>
              ) : (
                <Typography
                  key={item}
                  variant="body1"
                  onClick={() => handleNavigation(item)}
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 500,
                    padding: { md: '4px 6px', lg: '6px 8px' }, // Reduced padding
                    fontSize: { md: '0.85rem', lg: '0.9rem' }, // Slightly smaller font
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    '&:hover': {
                      borderRadius: '5px',
                      color: theme.palette.primary.secondary,
                      backgroundColor: 'white',
                      transform: 'scale(1.05)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  {item}
                </Typography>
              )
            ))}
          </Box>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flexShrink: 0, // Prevent shrinking
          }}>
            <IconButton onClick={handleMenuOpen} sx={{ color: 'white' }}>
              <AccountCircleIcon
                sx={{
                  fontSize: { md: '1.6rem', lg: '1.8rem' }, // Slightly smaller
                  '&:hover': {
                    borderRadius: '5px',
                    color: theme.palette.primary.secondary,
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease',
                  },
                }}
              />
            </IconButton>

            <Button
              variant="contained"
              onClick={handleCallButtonClick}
              sx={{
                color: 'white',
                background: theme.palette.primary.secondary,
                fontWeight: 'bold',
                fontSize: { md: '11px', lg: '12px' }, // Smaller font
                borderRadius: '999px',
                paddingX: { md: 1.5, lg: 2 }, // Reduced padding
                whiteSpace: 'nowrap',
                minWidth: 'auto', // Allow button to shrink
              }}
            >
             +91 - 9962374733
            </Button>
          </Box>
        </>
      )}

      {/* Services Dropdown Menu */}
      <Menu
        anchorEl={servicesAnchorEl}
        open={servicesMenuOpen}
        onClose={handleServicesMenuClose}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            backgroundColor: 'white',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
            padding: 1,
            marginTop: '26px',
            maxHeight: '300px', // Limit height
            overflow: 'hidden',
            marginLeft:'-42px'
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {servicesItems.map((item) => (
          <MenuItem
            key={item}
            onClick={handleServicesMenuClose}
            sx={{
              color: 'red',
              fontWeight: 600,
              fontSize: '13px', // Slightly smaller font
              paddingY: 1.2,
              paddingX: 1.5,
              whiteSpace: 'nowrap',
              '&:hover': {
                backgroundColor: '#f2f2f2',
              },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>

      {/* Account Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            backgroundColor: 'white',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
            padding: 1.5,
            marginTop: '20px',
            maxHeight: '300px', // Limit height
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem
          component="a"
          href="https://hogist.com/mainhome/odc"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMenuClose}
          sx={{
            color: 'red',
            fontWeight: 600,
            fontSize: { xs: '12px', sm: '13px' }, // Smaller font
            paddingY: 1.2,
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#f2f2f2',
            },
          }}
        >
          Industrial Catering
        </MenuItem>
        <MenuItem
          component="a"
          href="https://hogist.com/site/login-page"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMenuClose}
          sx={{
            color: 'red',
            fontWeight: 600,
            fontSize: { xs: '12px', sm: '13px' }, // Smaller font
            paddingY: 1.2,
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#f2f2f2',
            },
          }}
        >
          Corporate Catering
        </MenuItem>
        <MenuItem
          component="a"
          href="https://hogist.com/site/login-page"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMenuClose}
          sx={{
            color: 'red',
            fontWeight: 600,
            fontSize: { xs: '12px', sm: '13px' }, // Smaller font
            paddingY: 1.2,
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#f2f2f2',
            },
          }}
        >
          Outdoor Catering (ODC)
        </MenuItem>
      </Menu>

      {/* Drawer with Framer Motion */}
      <Drawer sx={{ zIndex: 9999 }} anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Box sx={{ width: { xs: 250, sm: 260 }, padding: 2 }}>
            <List>
              {navItems.map((item) => (
                <ListItem 
                  button 
                  key={item} 
                  sx={{ paddingY: 1 }}
                  onClick={() => handleNavigation(item)}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: 500,
                        fontSize: { xs: '0.95rem', sm: '1rem' },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ marginY: 2 }} />

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                handleCallButtonClick();
                setDrawerOpen(false);
              }}
              sx={{
                borderRadius: '20px',
                fontWeight: 'bold',
                fontFamily:'initial',
                backgroundColor: theme.palette.primary.secondary,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                py: { xs: 1, sm: 1.25 },
                '&:hover': {
                  backgroundColor: "#c60000",
                },
              }}
            >
              +91 -  9962374733
            </Button>
          </Box>
        </motion.div>
      </Drawer>
    </Box>
  );
}