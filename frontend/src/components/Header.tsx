import React, { useEffect, useState } from "react";
import { Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem, Tabs, Tab, Link } from "@mui/material";
import { COLOR } from "../utils/colors";
import bannerlogo from '../assets/bannerlogo.jpeg'
import kidFemale from '../assets/Kidfemale.jpg';
import kidMale from '../assets/Kidmale.jpg';
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [infoResourcesActive, setInfoResourcesActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const open = Boolean(anchorEl);

  // Custom value for "Information & Resources" tab to manage its highlight state
  const INFO_RESOURCES_TAB_VALUE = "/info-resources";

  useEffect(() => {
    // Automatically manage the highlight state based on the current path
    if (location.pathname.startsWith("/faq") || location.pathname.startsWith("/resources") || location.pathname.startsWith("/process")) {
      setInfoResourcesActive(true);
    } else {
      setInfoResourcesActive(false);
    }
  }, [location.pathname]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    // Preventing navigation to the custom value for "Information & Resources"
    if (newValue !== INFO_RESOURCES_TAB_VALUE) {
      navigate(newValue);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    // Highlight the "Information & Resources" tab when opening its menu
    setInfoResourcesActive(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // Remove highlight from the "Information & Resources" tab when closing the menu
    setInfoResourcesActive(false);
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
            <RouterLink to="/">
              <img
                src={bannerlogo}
                alt="banner logo"
                style={{ maxHeight: "17vh", maxWidth: "100%", height: "auto" }}
              />
            </RouterLink>
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
              component={RouterLink}
              to="/contact"
            >
              Contact Us
            </Button>
            <Box display="flex" alignItems="start" height="100%">
              <PhoneIcon sx={{ color: COLOR.darkGreen, marginTop: "6px" }} />
              <Typography variant="body1" sx={{marginTop: "5px", marginLeft: "5px"}}>
                <Link href="tel:480-336-2229" color={COLOR.darkGreen}>(480) 336-2229</Link>
              </Typography>
            </Box>
          </Box>
        </Toolbar>
        <Toolbar sx={{ bgcolor: COLOR.mediumGreen }}>
          <Box display="flex" flexGrow={1} justifyContent="center" gap={2}>
            <Tabs
              value={infoResourcesActive ? INFO_RESOURCES_TAB_VALUE : location.pathname}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{ '.MuiTabs-indicator': {backgroundColor: 'transparent'}}}
            >
              <Tab label="Meet Our Doctors" value="/doctors" />
              <Tab label="Services" value="/healthservices" />
              <Tab label="Book an Appointment" value="/appointment" />
              <Tab label="Information & Resources" value={INFO_RESOURCES_TAB_VALUE} onClick={handleMenuOpen} sx={{ color: anchorEl ? 'white' : 'inherit' }} />
            </Tabs>
            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={RouterLink} to="/faq" onClick={handleClose}>FAQ</MenuItem>
              <MenuItem component={RouterLink} to="/resources" onClick={handleClose}>Resources</MenuItem>
              <MenuItem component={RouterLink} to="/process" onClick={handleClose}>Process</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;