import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { COLOR } from '../utils/colors';
import logo from '../assets/logo.svg';
import homePage1 from '../assets/homepage1.jpg'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoBox from '../components/InfoBox';
import TestimonialsCarousel from '../components/TestimonialCarousel';


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
                <PlaceIcon sx={{color: COLOR.lightBlue}}/>
                <Typography variant="body2" sx={{color: COLOR.lightBlue}}>
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
              <Button sx={{fontSize: 15, color: COLOR.lightBlue}} color="inherit" variant="text">About Us</Button>
              <Box display="flex" alignItems="start" height="100%">
                <PhoneIcon sx={{color: COLOR.lightBlue, marginTop: '6px'}}/>
                <Button sx={{fontSize: 15, color: COLOR.lightBlue}} color="inherit" variant="text">480-123-4567</Button>                
            </Box>
            </Box>
            </Toolbar>
        <Toolbar sx={{ bgcolor: COLOR.mediumBlue }}>
          <Box display="flex" flexGrow={1} justifyContent="center" gap={2}>
            <Button color="inherit">Meet Our Doctors</Button>
            <Button color="inherit">Health Services</Button>
            <Button color="inherit">Book an Appointment</Button>
            <Button color="inherit">Resources</Button>
          </Box>
        </Toolbar>
        
      </AppBar>
      <Box sx={{ position: 'relative' }}>
        <img src={homePage1} alt="Homepage img 1" style={{ width: '100%', display: 'block' }} />
        <Box sx={{height: '100%', position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', p: 3 }}>
          <InfoBox 
          headerText="State-of-the-Art Facilities"
          descriptionText="Equipped with the latest medical technology to provide you with the best care."
        />
        <InfoBox 
          headerText="Personalized Patient Care"
          descriptionText="Every patient is unique. Receive tailored care plans to fit your individual needs."
        />
        <InfoBox 
          headerText="Award-Winning Medical Team"
          descriptionText="Our dedicated team has been recognized for their excellence in patient care."
        />
        </Box>
      </Box>
      <Box sx={{ position: 'relative', bgcolor: COLOR.lightBlue}}>
        <TestimonialsCarousel/>
      </Box>
    </Box>
  );
}

export default HomePage;