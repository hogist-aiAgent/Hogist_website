import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

// FeaturesSection Component
export default function FeaturesSection() {
  const theme = useTheme();
  
  const features = [
    {
      title: "Expert in Bulk Food Orders",
      icon: <RestaurantIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    },
    {
      title: "On-Time Bulk Food Delivery",
      icon: <AlarmOnIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    },
    {
      title: "Customized bulk food menus",
      icon: <MenuBookIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    },
    {
      title: "Affordable & Clear Pricing",
      icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    }
  ];
  
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#fff' }}>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{fontSize:{ xs: '1.5rem',sm:'1.8rem', md: '2.29rem'},mb: 4, mt:-2}} color={theme.palette.primary.secondary}>
                Why choose us
              </Typography>
              <Typography variant="h6" align="center" fontWeight="bold" sx={{fontSize:{xs: '1.7rem', sm: '2rem', md: '2rem'}, mb: 4, maxWidth: 800, mx: 'auto', lineHeight:'35px' }} color={'black'}>
               HOGIST – Your Partner for Online Bulk Food Orders in Chennai
              </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
            <Card 
              sx={{ 
                width: '100%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                border: '2px solid #000',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                 // transform: 'translateY(-5px)',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                  border: '2px solid #C60000',
                }
              }}
            >
              <CardContent sx={{ p: 3, width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box 
                  sx={{ 
                    mb: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1rem',
                    mb: 2,
                    color: theme.palette.primary.secondary,
                    lineHeight: 1,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {feature.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}