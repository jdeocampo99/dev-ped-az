import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import Header from "../components/Header";

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Here's how you can reach us:
          </Typography>
        </Box>

        {/* Address */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Address
          </Typography>
          <Typography variant="body1">
            123 Medical St.<br />
            Scottsdale, AZ 82560<br />
            United States
          </Typography>
        </Box>

        {/* Phone Number */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Phone Number
          </Typography>
          <Typography variant="body1">
            <Link href="tel:480-123-4567">(480) 123-4567</Link>
          </Typography>
        </Box>

        {/* Email */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Email
          </Typography>
          <Typography variant="body1">
            <Link href="mailto:info@example.com">info@example.com</Link>
          </Typography>
        </Box>

        {/* Google Maps Embed */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Location
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.650125563526!2d-111.92340668479774!3d33.45487408075455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0309c97c1021%3A0x791e13f99b7581df!2sMedical%20St%2C%20Scottsdale%2C%20AZ%2082560%2C%20USA!5e0!3m2!1sen!2suk!4v1642691516938!5m2!1sen!2suk"
            width="100%"
            height="450"
            title="Office Location"
            loading="lazy"
          ></iframe>
        </Box>
      </Container>
    </div>
  );
};

export default ContactPage;