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
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import HeaderLogo from '../assets/HogistLogo2.png';

const navItems = ['Home', 'Feature', 'Review', 'Menu Bank', 'Corporate', 'Industrials'];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        zIndex:"9999",
        width: '100%',
 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        padding: '0.4rem 0.2rem',   

      }}
    >
      {/* MOBILE VIEW */}
      {isMobile ? (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', }}>
          {/* Menu Button */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              backgroundColor: 'transparent',
              color: 'red',
              borderRadius: '50%',
              p: 1.2,
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
                sx={{ width: 110, height: 'auto', mr: 1 }}
              />
            </LazyLoad>
          </Box>

          {/* Home Button */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              backgroundColor: 'transparent',
              color: 'red',
              borderRadius: '50%',
              p: 1.2,
              //padding:'15px'
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
              sx={{ width: 170, height: 'auto', paddingRight:'15px'}}
            />
          </LazyLoad>

          <Box sx={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 500,
                  padding: '6px 12px',
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
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={handleMenuOpen} sx={{ color: 'white' }}>
              <AccountCircleIcon
                sx={{
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
              sx={{
                color: theme.palette.primary.secondary,
                background: 'white',
                border: '1px solid white',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '999px',
                paddingX: 3,
                '&:hover': {
                  background: 'white',
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </>
      )}

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            backgroundColor: 'white',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
            padding: 2,
            marginTop:'50px'
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
            fontSize: '14px',
            paddingY: 1.5,
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
            fontSize: '14px',
            paddingY: 1.5,
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
            fontSize: '14px',
            paddingY: 1.5,
            '&:hover': {
              backgroundColor: '#f2f2f2',
            },
          }}
        >
          Outdoor Catering (ODC)
        </MenuItem>
      </Menu>

      {/* Drawer with Framer Motion */}
      <Drawer sx={{
          zIndex:"9999",
      }} anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Box sx={{ width: 260, padding: 2 }}>
            <List>
              {navItems.map((item) => (
                <ListItem button key={item} sx={{ paddingY: 1 }}>
                  <ListItemText
                    primary={item}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: 500,
                        fontSize: '1rem',
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
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: '20px',
                fontWeight: 'bold',
           backgroundColor: theme.palette.primary.dark,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </motion.div>
      </Drawer>
    </Box>
  );
}
