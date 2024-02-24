import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import Header from "../components/Header";
import { COLOR } from "../utils/colors";

const AppointmentPage: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://hushforms.com/f/public/javascript/embed-hush-form.js";
        script.async = true;

        script.onload = () => console.log("Script loaded successfully.");
        script.onerror = (error) => console.error("Script loading error:", error);

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
  return (
    <div>
        <Header/>
        <Container maxWidth="sm">
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 4, // Margin top to center the form vertically
            }}
        >
            <Typography color={COLOR.darkGreen} variant="h4" gutterBottom>
            Contact Us
            </Typography>
            <Typography gutterBottom>
            Please fill out this form and our staff <br/>will contact you regarding next steps.
            </Typography>
            <div data-secure-form="dbpaz-secure-contact-form"></div>
        </Box>
        </Container>
    </div>
  );
};

export default AppointmentPage;