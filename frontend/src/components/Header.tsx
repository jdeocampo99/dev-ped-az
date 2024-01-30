import React, { useState } from "react";
import { Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem } from "@mui/material";
import { COLOR } from "../utils/colors";
import bannerlogo from '../assets/bannerlogo.jpeg'
import kidFemale from '../assets/Kidfemale.jpg';
import kidMale from '../assets/Kidmale.jpg';
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
              5020 E Shea Blvd Suite 250, Scottsdale, AZ 85254
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={kidFemale}
              alt="Kid Female"
              style={{
                position: 'absolute',
                left: 0, // Align to the left side
                maxHeight: "17vh", // Adjust size as needed
                maxWidth: "100%",
                height: "auto"
              }}
            />
            <Link to="/">
              <img
                src={bannerlogo}
                alt="banner logo"
                style={{ maxHeight: "17vh", maxWidth: "100%", height: "auto" }}
              />
            </Link>
            <img
              src={kidMale}
              alt="Kid Male"
              style={{
                position: 'absolute',
                right: 0, // Align to the right side
                maxHeight: "17vh", // Adjust size as needed
                maxWidth: "100%",
                height: "auto"
              }}
            />
          </Box>
          <Box display="flex" alignItems="start" height="100%" gap={2}>
            <Button
              sx={{ fontSize: 15, color: COLOR.darkGreen }}
              color="inherit"
              variant="text"
              component={Link}
              to="/contact"
            >
              Contact Us
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
            <Button color="inherit" component={Link} to="/healthservices">Services</Button>
            <Button color="inherit" component={Link} to="/appointment">Book an Appointment</Button>
             <Button
              color="inherit"
              aria-controls="resources-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Information & Resources
            </Button>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/faq" onClick={handleClose}>FAQ</MenuItem>
              <MenuItem component={Link} to="/resources" onClick={handleClose}>Resources</MenuItem>
              <MenuItem component={Link} to="/process" onClick={handleClose}>Process</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;