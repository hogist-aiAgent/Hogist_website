import React from 'react';
import { Box, Typography, Container, Stack, useTheme, List, ListItem } from '@mui/material';
import monitoringImage from '../assets/Monitoring_and_tracking/monitoringImage.jpg';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const MonitoringSection = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      py: { xs: 3, md: 5 },
      bgcolor: 'black' 
    }}>
      <Container maxWidth={'auto'} sx={{ 
        px: { xs: 2, md: 4 }, 
        py: { xs: 2, md: 3 },
        width: "100%"
      }}>
        <Typography 
          variant="h2"  
          fontWeight="bold" 
          sx={{ 
            color: 'white', 
            mb: { xs: 3, sm: 1, md: 4 },
            fontSize: { 
              xs: '1.5rem', 
              sm: '1.7rem', 
              md: '2.2rem',
              lg: '2.3rem',
              xl: '3rem'
            }
          }}
        >
          <Box component="span" sx={{ color: theme.palette.primary.secondary }}>
            Monitor and Track
          </Box> your Corporate & Industrial<br/> Bulk Food Order from Anywhere
        </Typography>
        
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ xs: 2, md: 3 }}
        >
          <Box sx={{ 
            maxWidth: 600,
            mt: { md: -6 }
          }}>
            <Stack spacing={1} sx={{marginTop:{sm:'-40px'}}}>
              <Typography variant="body1" sx={{ 
                color: 'white', 
                fontSize: { 
                  xs: '1rem', 
                  sm: '1rem', 
                  md: '1.7rem' 
                }
              }}>
                Now stop worrying about Delivery delays,
                food quantity & quality, hygiene, and even
                staff shortage.
              </Typography>
            </Stack>
            
            <Box component="div" sx={{ color: 'white', mt: 1.5, }}>
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
                      py: 0.3,
                      '&:not(:last-child)': { mb: 0.5 } 
                    }}
                  >
                    <TaskAltIcon sx={{ 
                      color: 'white', 
                      mr: 1, 
                      fontSize: { 
                        xs: '0.9rem', 
                        sm: '1rem', 
                        md: '1.1rem' 
                      },
                      mt: '2px' 
                    }} />
                    <Typography variant="body1" sx={{ fontSize:{md:'1.1rem'}}}>{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          
          <Box sx={{ 
            width: { 
              xs: '100%', 
              sm: '100%',
              md: '100%' 
            },
            height: { 
              xs: '250px', 
              md: '350px' 
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: 1, md: -3 },
            overflow: 'hidden'
          }}>
            <img 
              src={monitoringImage} 
              alt="Monitoring and Tracking" 
              style={{ 
                width: 'auto',
                height: '90%',
                maxWidth: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                marginTop:{sm:'-60px'}
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MonitoringSection;