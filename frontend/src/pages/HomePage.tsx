import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { COLOR } from '../utils/colors';
import logo from '../logo.svg';
import PlaceIcon from '@mui/icons-material/Place';


const HomePage: React.FC = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar 
            sx={{ 
                bgcolor: COLOR.mainBlue, 
                paddingBottom: '30px', 
                height: "15vh", 
                p: 1, 
                position: 'relative', 
                display: "flex", 
                justifyContent: "space-between"
            }}
            >
            <Box display="flex" alignItems="start" height="100%">
                <PlaceIcon />
                <Typography variant="body2">
                123 Medical St. Scottsdale, AZ 82560
                </Typography>
            </Box>
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center"
                sx={{
                position: "absolute", 
                left: "50%", 
                top: "50%", 
                transform: "translate(-50%, -50%)"
                }}
            >
                <img src={logo} alt="Medical Company Logo" width={50} />
                <Typography variant="h3">Developmental Pediatrics AZ</Typography>
            </Box>

            <Box display="flex" alignItems="start" height="100%" gap={2}>
                <Button sx={{fontSize: 15}} color="inherit" variant="text">About Us</Button>
                <Button sx={{fontSize: 15}} color="inherit" variant="text">Contact Us</Button>
            </Box>
            </Toolbar>
        <Toolbar sx={{ bgcolor: COLOR.mediumBlue }}>
          <Box display="flex" flexGrow={1} justifyContent="center" gap={2}>
            <Button color="inherit">Find a Doctor</Button>
            <Button color="inherit">Health Services</Button>
            <Button color="inherit">Schedule an Appointment</Button>
          </Box>
        </Toolbar>
        
      </AppBar>
      <Box sx={{ p: 3 }}>
        {/* Your main content goes here */}
        <Typography variant="h4" gutterBottom>Welcome to Our Medical Clinic</Typography>
        {/* ... other content ... */}
      </Box>
    </Box>
  );
}

export default HomePage;