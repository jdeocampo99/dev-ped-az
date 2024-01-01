import React from "react";
import { Box } from "@mui/system";
import { COLOR } from "../utils/colors";
import homePage1 from "../assets/homepage1.jpg";
import corpo1 from "../assets/corpo1.png"
import corpo2 from "../assets/corpo2.png"
import InfoBox from "../components/InfoBox";
import TestimonialsCarousel from "../components/TestimonialCarousel";
import Header from "../components/Header";
import { Typography } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Header />
       {/* Welcome Section */}
       <Box sx={{ backgroundColor: COLOR.paper, padding: 10, paddingLeft: "15%", paddingRight: "15%"}}>
        <Box sx={{ position: "relative", display: "flex" }}>
          {/* Left Side (Text) */}
          <Box sx={{ flex: 1, p: 3 }}>
            <Typography variant="h2" gutterBottom>
              Welcome To Our Practice!
            </Typography>
            <Typography variant="body1">
            Welcome to Developmental Behavioral Pediatrics of Arizona, where our utmost priority is  children and their families. DBPAZ is a distinguished pediatric medical practice <strong>specializing in neurodevelopmental evaluation, diagnosis, and comprehensive management of children aged 18 months to 12 years</strong>. Our mission is rooted in providing a compassionate, nurturing, and collaborative approach to pediatric developmental care.<br/><br/>
            At DBPAZ, we hold a steadfast dedication to understanding and embracing each child as a unique individual. By meticulously identifying their specific needs, strengths, and areas of development, we tailor a systematic and personalized treatment plan to address their unique requirements. Our unwavering focus is on being a resource for families, offering them invaluable guidance in navigating and addressing their child's needs.
            </Typography>
          </Box>
          {/* Right Side (Image) */}
          <Box sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center",     // Center vertically
          }}>
            <img
              src={corpo1}
              alt="Welcome"
              style={{ width: "50%", display: "block" }}
            />
          </Box>
        </Box>
        <Box sx={{ padding: 5, position: "relative", display: "flex" }}>
          {/* Right Side (Image) */}
          <Box sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center",     // Center vertically
          }}>
            <img
              src={corpo2}
              alt="Welcome"
              style={{ width: "50%", display: "block" }}
            />
          </Box>
          {/* Left Side (Text) */}
          <Box sx={{ flex: 1, p: 3 }}>
            <Typography variant="h2" gutterBottom>
              How Are We Different?
            </Typography>
            <Typography variant="body1">
            We pride ourselves on our exceptional team of board-certified medical doctors specializing in Developmental and Behavioral Pediatrics. <strong>Dr. Anna C. De Ocampo and Dr. Charissa P. Pe Benito</strong>, both recipients of the prestigious <strong>Top Doctors of Arizona Award</strong> in their field, bring extensive experience and expertise to our practice. <br/><br/>
            We take a <strong>"whole child"</strong> approach to neurodevelopmental assessments, addressing every aspect of your child's well-being. Our comprehensive model of care encompasses a thorough evaluation of your child's development, learning, academic challenges, social communication skills, behavioral and emotional concerns, as well as any potential medical, environmental, neurological, or genetic factors contributing to their challenges.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <img
          src={homePage1}
          alt="Homepage img 1"
          style={{ width: "100%", display: "block" }}
        />
        <Box
          sx={{
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            p: 3,
          }}
        >
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
      <Box sx={{ position: "relative", bgcolor: COLOR.darkGreen }}>
        <TestimonialsCarousel />
      </Box>
    </Box>
  );
};

export default HomePage;