import React, { useState } from "react";
import { Box, Typography, Grid, Button, Collapse } from "@mui/material";
import Header from "../components/Header";
import annaprofile from "../assets/annaprofile.jpg";
import charissaprofile from "../assets/charissaprofile.jpg"
import { COLOR } from "../utils/colors";

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
    <Box sx={{backgroundColor: COLOR.paper,}}>
      <Header />
      <Box sx={{ padding: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h2" color={COLOR.darkGreen} sx={{ marginBottom: 2, fontWeight: "bold" }}>
          Our Doctors
        </Typography>
        <Typography variant="body1">
          Learn more about our qualified medical professionals.
        </Typography>
      </Box>
      <Grid container spacing={10} sx={{paddingLeft: "10%", paddingRight: "10%"}}>
        {/* Doctor 1 */}
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={annaprofile}
            alt="Anna De Ocampo Img 1"
            style={{ maxWidth: "60%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ padding: 3 }}>
            <Typography variant="h2" sx={{ fontWeight: 400, padding: "10px"}}>Anna C. De Ocampo, M.D. FAAP</Typography>
            <Typography  color={COLOR.darkGreen} variant="h6" sx={{ fontStyle: "italic", padding: "10px"}}>Board-Certified Developmental and Behavioral Pediatrician </Typography>
            <Collapse in={!showDetails1}>
              <Typography variant="body1" sx={{padding: "10px"}}>
              Dr. Anna C. De Ocampo is a Board-Certified Developmental and Behavioral Pediatrician with over two decades of dedicated practice in her field. Her journey commenced with a General Pediatric Residency at the esteemed University of Pittsburgh Medical Center (UPMC) Mercy, where she distinguished herself as chief resident. Dr. De Ocampo then pursued subspecialty training in Developmental and Behavioral Pediatrics at the Medical University of South Carolina (MUSC) in 1999, honing her expertise.<br/><br/>
Her professional trajectory includes a pivotal role as an Associate Professor and attending physician, shaping the skills of resident doctors and medical students at Greenville Health System in upstate South Carolina for five impactful years. Subsequently, she contributed her expertise for a remarkable 17 years at the Melmed Center in Scottsdale, Arizona (2006-2023).<br/><br/>
Dr. De Ocampo's passion lies in supporting children facing developmental delays, ADHD, emotional and behavioral challenges, and Autism Spectrum Disorder. Renowned for her compassionate approach towards patients and their families, she is revered for her innate ability to connect and provide a comprehensive evaluation of your child.<br/><br/>
              </Typography>
            </Collapse>
            <Collapse in={showDetails1}>
              <Typography variant="body1" sx={{padding: "10px"}}>
              Dr. Anna C. De Ocampo is a Board-Certified Developmental and Behavioral Pediatrician with over two decades of dedicated practice in her field. Her journey commenced with a General Pediatric Residency at the esteemed University of Pittsburgh Medical Center (UPMC) Mercy, where she distinguished herself as chief resident. Dr. De Ocampo then pursued subspecialty training in Developmental and Behavioral Pediatrics at the Medical University of South Carolina (MUSC) in 1999, honing her expertise.<br/><br/>
Her professional trajectory includes a pivotal role as an Associate Professor and attending physician, shaping the skills of resident doctors and medical students at Greenville Health System in upstate South Carolina for five impactful years. Subsequently, she contributed her expertise for a remarkable 17 years at the Melmed Center in Scottsdale, Arizona (2006-2023).<br/><br/>
Dr. De Ocampo's passion lies in supporting children facing developmental delays, ADHD, emotional and behavioral challenges, and Autism Spectrum Disorder. Renowned for her compassionate approach towards patients and their families, she is revered for her innate ability to connect and provide a comprehensive evaluation of your child.<br/><br/>
A distinguished member of esteemed organizations such as the American Academy of Pediatrics (AAP) and the Society for Developmental and Behavioral Pediatrics (SDBP), Dr. De Ocampo is deeply committed to supporting children and their families. Her collaborative spirit with referring physicians underscores her dedication to comprehensive patient care.<br/><br/>
Acknowledged as a Phoenix Top Doctor multiple times (2014, 2017, 2018, 2020, 2021, 2023), Dr. De Ocampo stands as a testament to excellence in her field. Recognizing the criticality of early intervention and the challenges of long wait times to see developmental pediatricians, she has opted to focus her practice solely on new patient consultations for diagnostic purposes. By specializing in consultations for children aged 18 months to 6 years, she aims to expedite access to essential services, understanding the paramount importance of timely intervention.<br/><br/>
Dr.De Ocampo's decision to prioritize new patient consultations underscores her unwavering commitment to enhancing the lives of children, ensuring they receive the support they need at the earliest juncture.

              </Typography>
            </Collapse>
            <Button onClick={toggleDetails1} sx={{ color: COLOR.mediumGreen }}>
              {showDetails1 ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </Grid>
        {/* Doctor 2 */}
        <Grid item xs={6}>
          <Box sx={{ padding: 3 }}>
            <Typography variant="h2" sx={{ fontWeight: 400, padding: "10px"}}>Charissa P. Pe Benito, MD, FAAP</Typography>
            <Typography color={COLOR.darkGreen} variant="h6" sx={{ fontStyle: "italic", padding: "10px"}}>Board-Certified Developmental and Behavioral Pediatrician </Typography>
            <Collapse in={!showDetails2}>
              <Typography variant="body1" sx={{padding: "10px"}}>
              Dr. Charissa Pe Benito completed her pediatric residency at Brookdale University Medical Center in Brooklyn, NY, where she received the esteemed title of Best Senior Resident from her colleagues and the medical staff. <br/><br/>
Following her residency, she pursued advanced training at New York University School of Medicine/Bellevue Hospital in New York, NY, where she successfully completed a 3-year fellowship in Developmental-Behavioral Pediatrics in 2003. Dr. Pe Benito holds dual certifications in General Pediatrics and Developmental Behavioral Pediatrics, making her one of the select board-certified developmental pediatricians in the state of Arizona. <br/><br/>
              </Typography>
            </Collapse>
            <Collapse in={showDetails2}>
              <Typography variant="body1" sx={{padding: "10px"}}>
              Dr. Charissa Pe Benito completed her pediatric residency at Brookdale University Medical Center in Brooklyn, NY, where she received the esteemed title of Best Senior Resident from her colleagues and the medical staff. <br/><br/>
Following her residency, she pursued advanced training at New York University School of Medicine/Bellevue Hospital in New York, NY, where she successfully completed a 3-year fellowship in Developmental-Behavioral Pediatrics in 2003. Dr. Pe Benito holds dual certifications in General Pediatrics and Developmental Behavioral Pediatrics, making her one of the select board-certified developmental pediatricians in the state of Arizona. <br/><br/>
She is a distinguished fellow of the American Academy of Pediatrics and an active member of the Society of Developmental and Behavioral Pediatrics. Dr. Pe Benito's commitment to excellence in patient care has been acknowledged through her inclusion as one of the "Phoenix Top Docs," an honor bestowed upon her by her esteemed colleagues. <br/><br/>
With a career spanning since 1997, Dr. Pe Benito has cultivated enduring relationships with her patients and their families. Following her fellowship, she dedicated four years to serving the families of the Choctaw Nation in Oklahoma, followed by her relocation to Scottsdale in 2008. For over fifteen years, she had the privilege of contributing her expertise at the Melmed Center. <br/><br/>
Dr. Pe Benito is a compassionate physician who firmly believes in the boundless potential of every child for lifelong learning. 

              </Typography>
            </Collapse>
            <Button onClick={toggleDetails2} sx={{ color: COLOR.mediumGreen }}>
              {showDetails2 ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={charissaprofile}
            alt="Anna De Ocampo Img 1"
            style={{ maxWidth: "60%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorsPage;
