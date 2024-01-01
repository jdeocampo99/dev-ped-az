import React from "react";
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
            <Typography variant="h4" gutterBottom>
            Contact Us
            </Typography>
            <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                    type="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Child's Name"
                    variant="outlined"
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Child's Date of Birth"
                    variant="outlined"
                    required
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="How did you hear about us?"
                    variant="outlined"
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="What concerns do you have for your child?"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Does your child have any pre-existing diagnoses?"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ 
                    mt: 2, 
                    backgroundColor: COLOR.darkGreen,
                    "&:hover": {
                        backgroundColor: COLOR.mediumGreen,
                    },
                }}
            >
                Submit
            </Button>
            </form>
        </Box>
        </Container>
    </div>
  );
};

export default AppointmentPage;