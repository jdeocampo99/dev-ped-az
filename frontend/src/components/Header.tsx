import React from "react";
import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { COLOR } from "../utils/colors";
import bannerlogo from '../assets/bannerlogo.jpg'
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position="sticky" sx={{ top: 0 }}>
        <Toolbar
          sx={{
            bgcolor: COLOR.mainGreen,
            paddingBottom: "30px",
            height: "15vh",
            p: 1,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Center vertically
          }}
        >
          <Box display="flex" alignItems="start" height="100%">
            <PlaceIcon sx={{ color: COLOR.darkGreen }} />
            <Typography variant="body2" sx={{ color: COLOR.darkGreen }}>
              123 Medical St. Scottsdale, AZ 82560
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Link to="/">
              <img
                src={bannerlogo}
                alt="banner logo"
                style={{ maxWidth: "100%", height: "auto", maxHeight: "17vh" }}
              />
            </Link>
          </Box>
          <Box display="flex" alignItems="start" height="100%" gap={2}>
            <Button
              sx={{ fontSize: 15, color: COLOR.darkGreen }}
              color="inherit"
              variant="text"
            >
              About Us
            </Button>
            <Box display="flex" alignItems="start" height="100%">
              <PhoneIcon sx={{ color: COLOR.darkGreen, marginTop: "6px" }} />
              <Button
                sx={{ fontSize: 15, color: COLOR.darkGreen }}
                color="inherit"
                variant="text"
              >
                480-123-4567
              </Button>
            </Box>
          </Box>
        </Toolbar>
        <Toolbar sx={{ bgcolor: COLOR.mediumGreen }}>
          <Box display="flex" flexGrow={1} justifyContent="center" gap={2}>
            <Button color="inherit" component={Link} to="/doctors">
              Meet Our Doctors
            </Button>
            <Button color="inherit">Health Services</Button>
            <Button color="inherit" component={Link} to="/appointment">Book an Appointment</Button>
            <Button color="inherit">Resources</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;