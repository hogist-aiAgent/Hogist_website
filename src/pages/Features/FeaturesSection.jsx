import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Description } from '@mui/icons-material';

// FeaturesSection Component
export default function FeaturesSection() {
  const theme = useTheme();
  
  const features = [
    {
      title: "Expert in Bulk Food Orders",
      Description:"Reliable partner for corporations, events, and institutions.",
      icon: <RestaurantIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    },
    {
      title: "On-Time Bulk Food Delivery",
      Description:"Always fresh and hot, and delivered in time.",
      icon: <AlarmOnIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    },
    {
      title: "Customized bulk food menus",
      Description:"Menus customized to your team's liking, needs and budget.",
      icon: <MenuBookIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    },
    {
      title: "Affordable & Clear Pricing",
      Description:"Pricing is simple and clear without hidden costs.",
      icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 40, color: theme.palette.primary.secondary }} />
    }
  ];
  
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#fff',position:'relative' }}>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{fontSize:{ xs: '1.5rem',sm:'1.8rem', md: '2.29rem'},mb: 4, mt:-2}} color={theme.palette.primary.secondary}>
        Why choose us
      </Typography>
      <Typography variant="h6" align="center" fontWeight="bold" sx={{fontSize:{xs: '1.7rem', sm: '2rem', md: '2rem'}, mb: 6, maxWidth: 800, mx: 'auto', lineHeight:'35px' }} color={'black'}>
        HOGIST – Your Partner for Online Bulk Food Orders in Chennai
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 800, mx: 'auto' }}>
        {features.map((feature, index) => (
          <Grid item xs={12} key={index} 
          sx={{ display: 'flex', position: 'relative',
           justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', }}>
            {/* Icon overlapping on the left top corner */}
            <Box 
              sx={{ 
                position: 'absolute',
                top: 0,
         
              
                   left: index % 2 === 0 ? 0 : 'auto',
                  right: index % 2 === 0 ? 'auto' : 0,
                  transform: index % 2 === 0 ? 'translate(-30%, -30%)' : 'translate(30%, -30%)',
                zIndex: 3,
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                 marginLeft: index % 2 === 0 ? '25px' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '25px'
                //boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)'
              }}
            >
              {feature.icon}
            </Box>
            
            <Card 
              sx={{ 
                width: '100%',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                backgroundColor: theme.palette.primary.secondary,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                 ml: { xs: 4, md: index % 2 === 0 ? 4 : 0 },
                 mr: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                  '&:hover': {
                    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
                  }
              }}
            >
              <CardContent sx={{ 
                p: 3, 
                width: '100%', 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                ml: 2
              }}>
                <Typography 
                  variant="h6" 
                  component="h3"
                  marginBottom={"20px"} 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: theme.palette.primary,
                    lineHeight: 1.4
                  }}
                >
                  {feature.title}
                </Typography>
                 <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: theme.palette.primary,
                    lineHeight: 1.4
                  }}
                >
                  {feature.Description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}