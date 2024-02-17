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
        </Box>

        {/* Address */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Address
          </Typography>
          <Typography variant="body1">
            5020 E Shea Blvd <br />
            Suite 250<br />
            Scottsdale, AZ 85254<br />
            United States
          </Typography>
        </Box>

        {/* Working Hours */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Working Hours
          </Typography>
          <Typography variant="body1">
            Monday - Thursday <br/>
            8am - 4pm
          </Typography>
        </Box>

        {/* Phone Number */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Phone Number
          </Typography>
          <Typography variant="body1">
            <Link href="tel:480-336-2229">(480) 336-2229</Link>
          </Typography>
        </Box>

        {/* Fax Number */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Fax Number
          </Typography>
          <Typography variant="body1">
            <Link href="tel:480-914-7523">480-914-7523 </Link>
          </Typography>
        </Box>

        {/* Email */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Email
          </Typography>
          <Typography variant="body1">
            <Link href="mailto:dbpaz@hushmail.com">dbpaz@hushmail.com</Link>
          </Typography>
        </Box>

        {/* Google Maps Embed */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Location
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8226243759873!2d-111.97545752287557!3d33.58395437333695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b73739f055555%3A0x49d3d99b6ecc9f38!2s5020%20E%20Shea%20Blvd%20Ste.%20250%2C%20Scottsdale%2C%20AZ%2085254!5e0!3m2!1sen!2sus!4v1706847572519!5m2!1sen!2sus"
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