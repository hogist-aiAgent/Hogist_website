import React from 'react';
import { Box, Typography, Container, Stack, useTheme, List, ListItem } from '@mui/material';
import monitoringImage from '../assets/Monitoring_and_tracking/monitoringImage.jpg';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const MonitoringSection = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ mb: 10, paddingTop:'50px' }}>
      <Container maxWidth={'auto'} sx={{ px: { xs: 2, md: 6 }, pt: 6, pb: 3, m: 0, width: "100%" }}>
        <Typography variant="h3" fontWeight="bold" sx={{ color: 'white', mb: 2 }}>
          <Box component="span" sx={{ color: theme.palette.primary.secondary }}>
            Monitor and Track
          </Box> your Corporate & Industrial Bulk Food Order from Anywhere
        </Typography>
        <br /><br/><br/>
        
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <Box sx={{ 
            maxWidth: 600, 
            marginTop: { xs: 0, md: '-130px' } // Adjusted for mobile
          }}>
            <Stack spacing={{ xs: 4, md: 9 }}> {/* Responsive spacing */}
              <Typography variant="h5" sx={{ color: 'white' }}>
                Now stop worrying about Delivery delays,
                food quantity & quality, hygiene, and even
                staff shortage.
              </Typography>
            </Stack>
            <br />
            <br/>
            
            <Box component="div" sx={{ color: 'white' }}>
              <List sx={{ color: 'white', pl: 0 }}>
                <ListItem sx={{ alignItems: 'flex-start', px: 0, py: 0 }}>
                  <TaskAltIcon sx={{ 
                    color: 'white', 
                    mr: 1.5, 
                    fontSize: '1.2rem', 
                    marginTop: '7px' 
                  }} />
                  <Typography variant="h6">Flexible, Contact-free food solution</Typography>
                </ListItem><br/>
                <ListItem sx={{ alignItems: 'flex-start', px: 0, py: 0 }}>
                  <TaskAltIcon sx={{ 
                    color: 'white', 
                    mr: 1.5, 
                    fontSize: '1.2rem',
                    marginTop: '7px' 
                  }} />
                  <Typography variant="h6">Timely Delivery as committed</Typography>
                </ListItem><br/>
                <ListItem sx={{ alignItems: 'flex-start', px: 0, py: 0 }}>
                  <TaskAltIcon sx={{ 
                    color: 'white', 
                    mr: 1.5, 
                    fontSize: '1.2rem',
                    marginTop: '7px' 
                  }} />
                  <Typography variant="h6">Excellent Hospitality/Onsite Service</Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
          
          <Box sx={{ 
            padding: { xs: 0 },
            width: { xs: '100%', md: '100%' }, 
            height: { xs: '300px', md: '390px' },
            mb: 2,
            objectFit: 'cover',
            marginTop: { xs: '20px', md: '-50px' } // Adjusted for mobile
          }}>
            <img 
              src={monitoringImage} 
              alt="Monitoring and Tracking" 
              style={{ 
                width: '80%',
                height: '100%',
                objectFit: 'fill',
                margin:'-24px',
                marginTop:'-30px'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MonitoringSection;