import React from "react";
import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { COLOR } from "../utils/colors";
import logo from "../assets/logo.svg";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            bgcolor: COLOR.mainBlue,
            paddingBottom: "30px",
            height: "15vh",
            p: 1,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="start" height="100%">
            <PlaceIcon sx={{ color: COLOR.lightBlue }} />
            <Typography variant="body2" sx={{ color: COLOR.lightBlue }}>
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
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={logo} alt="Medical Company Logo" width={50} />
            <Button component={Link} to="/" sx={{ textTransform: "none" }}>
              <Typography
                variant="h3"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Developmental Pediatrics AZ
              </Typography>
            </Button>
          </Box>

          <Box display="flex" alignItems="start" height="100%" gap={2}>
            <Button
              sx={{ fontSize: 15, color: COLOR.lightBlue }}
              color="inherit"
              variant="text"
            >
              About Us
            </Button>
            <Box display="flex" alignItems="start" height="100%">
              <PhoneIcon sx={{ color: COLOR.lightBlue, marginTop: "6px" }} />
              <Button
                sx={{ fontSize: 15, color: COLOR.lightBlue }}
                color="inherit"
                variant="text"
              >
                480-123-4567
              </Button>
            </Box>
          </Box>
        </Toolbar>
        <Toolbar sx={{ bgcolor: COLOR.mediumBlue }}>
          <Box display="flex" flexGrow={1} justifyContent="center" gap={2}>
            <Button color="inherit" component={Link} to="/doctors">
              Meet Our Doctors
            </Button>
            <Button color="inherit">Health Services</Button>
            <Button color="inherit">Book an Appointment</Button>
            <Button color="inherit">Resources</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
