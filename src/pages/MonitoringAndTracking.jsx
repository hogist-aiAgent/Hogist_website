import React from 'react';
import { Box, Typography, Container, Stack, useTheme, List, ListItem } from '@mui/material';
import monitoringImage from '../assets/Monitoring_and_tracking/monitoringImage.jpg';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const MonitoringSection = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      py: { xs: 4, md: 8 },
      bgcolor: 'black' 
    }}>
      <Container maxWidth={'auto'} sx={{ 
        px: { xs: 2, md: 6 }, 
        py: { xs: 3, md: 4 },
        width: "100%"
      }}>
        <Typography 
          variant="h2"  
          fontWeight="bold" 
          sx={{ 
            color: 'white', 
            mb: { xs: 5, sm: 1, md: 5 },
            fontSize: { 
              xs: '1.5rem', 
              sm: '1.75rem', 
              md: '2.25rem',
              lg: '2.75rem',
              xl: '3rem'
            } 
          }}
        >
          <Box component="span" sx={{ color: theme.palette.primary.secondary }}>
            Monitor and Track
          </Box> your Corporate & Industrial Bulk Food Order from Anywhere
        </Typography>
        
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ xs: 3, md: 4 }}
        >
          <Box sx={{ 
            maxWidth: 600,
            mt: { md: -8 }
          }}>
            <Stack spacing={1}>
              <Typography variant="body1" sx={{ 
                color: 'white', 
                fontSize: { 
                  xs: '0.9rem', 
                  sm: '1rem', 
                  md: '1.1rem' 
                } 
              }}>
                Now stop worrying about Delivery delays,
                food quantity & quality, hygiene, and even
                staff shortage.
              </Typography>
            </Stack>
            
            <Box component="div" sx={{ color: 'white', mt: 2 }}>
              <List sx={{ color: 'white', pl: 0 }}>
                {[
                  "Flexible, Contact-free food solution",
                  "Timely Delivery as committed",
                  "Excellent Hospitality/Onsite Service"
                ].map((item) => (
                  <ListItem 
                    key={item}
                    sx={{ 
                      alignItems: 'flex-start', 
                      px: 0, 
                      py: 0.5,
                      '&:not(:last-child)': { mb: 1 } 
                    }}
                  >
                    <TaskAltIcon sx={{ 
                      color: 'white', 
                      mr: 1.5, 
                      fontSize: { 
                        xs: '0.9rem', 
                        sm: '1rem', 
                        md: '1.1rem' 
                      },
                      mt: '3px' 
                    }} />
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          
          {/* Image Container - Modified for proper display without cropping */}
          <Box sx={{ 
            width: { 
              xs: '100%', 
              sm: '100%',
              md: '100%' 
            },
            height: { 
              xs: '300px', 
              md: '390px' 
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: 2, md: -4 },
            overflow: 'hidden'
          }}>
            <img 
              src={monitoringImage} 
              alt="Monitoring and Tracking" 
              style={{ 
                width: 'auto',
                height: '100%',
                maxWidth: '100%',
                objectFit: 'contain', // Changed from 'cover' to 'contain' to prevent cropping
                objectPosition: 'center'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MonitoringSection;