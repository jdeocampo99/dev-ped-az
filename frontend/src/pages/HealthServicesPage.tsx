import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Header from "../components/Header";

const HealthServicesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Health Services
          </Typography>
          <Typography variant="body1">
            Welcome to our Health Services page. Here, you can find information
            about the various health services we offer.
          </Typography>
        </Box>

        {/* Add details about health services here */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Pediatric Care
          </Typography>
          <Typography variant="body1">
            We provide comprehensive pediatric care for children of all ages,
            from infants to adolescents. Our services include well-child
            check-ups, vaccinations, and more.
          </Typography>
        </Box>

        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Developmental-Behavioral Pediatrics
          </Typography>
          <Typography variant="body1">
            Our Developmental-Behavioral Pediatrics program offers evaluation
            and management of developmental and behavioral concerns in children.
            We work with families to provide individualized care plans.
          </Typography>
        </Box>

        {/* Add more health services sections as needed */}
      </Container>
    </div>
  );
};

export default HealthServicesPage;