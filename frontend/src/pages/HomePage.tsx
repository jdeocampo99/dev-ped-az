import React from "react";
import { Box } from "@mui/system";
import { COLOR } from "../utils/colors";
import homePage1 from "../assets/homepage1.jpg";
import InfoBox from "../components/InfoBox";
import TestimonialsCarousel from "../components/TestimonialCarousel";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Header />
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
      <Box sx={{ position: "relative", bgcolor: COLOR.lightBlue }}>
        <TestimonialsCarousel />
      </Box>
    </Box>
  );
};

export default HomePage;
