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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
        zIndex: 9999,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        padding: { xs: '0.75rem 1rem', sm: '1rem 1.5rem', md: '1rem 2rem' },
         fontFamily: theme.fontFamily.default,   
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
                paddingRight: { md: '10px', lg: '15px' }
              }}
            />
          </LazyLoad>

          <Box sx={{ 
            display: 'flex', 
            gap: { md: '0.8rem', lg: '1.2rem' }, 
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {navItems.map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 500,
                  padding: { md: '4px 8px', lg: '6px 12px' },
                  fontSize: { md: '0.9rem', lg: '1rem' },
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
                  fontSize: { md: '1.8rem', lg: '2rem' },
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
                color: 'white',
                background: theme.palette.primary.secondary,
                fontWeight: 'bold',
                fontSize: { md: '12px', lg: '14px' },
                borderRadius: '999px',
                paddingX: { md: 2, lg: 3 },
                whiteSpace: 'nowrap',
              }}
            >
             Call to Query
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
            marginTop: '20px'
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
            fontSize: { xs: '13px', sm: '14px' },
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
            fontSize: { xs: '13px', sm: '14px' },
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
            fontSize: { xs: '13px', sm: '14px' },
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
                <ListItem button key={item} sx={{ paddingY: 1 }}>
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
              onClick={() => setDrawerOpen(false)}
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
              Call to Query
            </Button>
          </Box>
        </motion.div>
      </Drawer>
    </Box>
  );
}