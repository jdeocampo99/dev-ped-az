import React, { useState } from "react";
import { Box, Typography, Grid, Button, Collapse } from "@mui/material";
import Header from "../components/Header";
import femaledoctor from "../assets/femaledoctor.jpg";

const DoctorsPage: React.FC = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  return (
    <Box>
      <Header />
      <Box sx={{ padding: 3 }}>
        <Typography variant="h2" sx={{ marginBottom: 2 }}>
          Our Doctors
        </Typography>
        <Typography variant="body1">
          Learn more about our qualified medical professionals.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {/* Doctor 1 */}
        <Grid item xs={6}>
          <Box sx={{ padding: 3 }}>
            <img
              src={femaledoctor}
              alt="Anna De Ocampo Img 1"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="h4">Anna De Ocampo</Typography>
            <Collapse in={!showDetails1}>
              <Typography variant="body1">
                Short description of Doctor 1 goes here.
              </Typography>
            </Collapse>
            <Collapse in={showDetails1}>
              <Typography variant="body1">
                Long description of Doctor 1 goes here.
              </Typography>
            </Collapse>
            <Button onClick={toggleDetails1}>
              {showDetails1 ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </Grid>

        {/* Doctor 2 */}
        <Grid item xs={6}>
          <Box sx={{ padding: 3 }}>
            <img
              src={femaledoctor}
              alt="Charissa Pe Benito"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="h4">Charissa Pe Benito</Typography>
            <Collapse in={!showDetails2}>
              <Typography variant="body1">
                Dr. Charissa Pe Benito completed her pediatric residency at
                Brookdale University Medical Center in Brooklyn, NY where she
                was awarded Best Senior Resident by her colleagues and medical
                staff. She is a compassionate physician who believes that every
                child has the capacity for lifelong learning.
              </Typography>
            </Collapse>
            <Collapse in={showDetails2}>
              <Typography variant="body1">
                Dr. Charissa Pe Benito completed her pediatric residency at
                Brookdale University Medical Center in Brooklyn, NY where she
                was awarded Best Senior Resident by her colleagues and medical
                staff. She then trained at New York University School of
                Medicine/Bellevue Hospital in New York, NY where she completed a
                3-year fellowship in Developmental-Behavioral Pediatrics in
                2003. Dr. Pe Benito is double certified in General Pediatrics
                and Developmental Behavioral Pediatrics. She is one of the few
                board-certified developmental pediatricians in the state of
                Arizona. She is a fellow of the American Academy of Pediatrics
                and a member of the Society of Developmental and Behavioral
                Pediatrics. Dr. Pe Benito had the honor of being selected by
                colleagues as one of the “Phoenix Top Docs.”
                <br />
                <br />
                Dr. Pe Benito has been working with children since 1997. She has
                forged long-term relationships with her patients and their
                families. After her fellowship training, Dr. Pe Benito took care
                of families of the Choctaw Nation in Oklahoma for four years.
                She then moved to Scottsdale in 2008 where she had the privilege
                of working at the Melmed Center for more than fifteen years.{" "}
                <br />
                <br />
                Dr. Pe Benito is a compassionate physician who believes that
                every child has the capacity for lifelong learning.
              </Typography>
            </Collapse>
            <Button onClick={toggleDetails2}>
              {showDetails2 ? "Show Less" : "Show more"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorsPage;
