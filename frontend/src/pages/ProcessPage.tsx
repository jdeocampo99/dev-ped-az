import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import processimg1 from "../assets/process1.png";
import processimg2 from "../assets/process2.png";
import processimg3 from "../assets/process3.png";
import processimg4 from "../assets/process4.png";
import Header from '../components/Header';

const ProcessPage: React.FC = () => {
  const steps = [
    {
      number: 1,
      description: 'Contact us for screening/triage by clicking the "Book an Appointment" button on our website and our office will call you back.',
      image: processimg1,
    },
    {
      number: 2,
      description: 'Complete New Patient Intake Questionnaire (NPIQ) and all required electronic paperwork on the portal',
      image: processimg2,
    },
    {
      number: 3,
      description: 'Neurodevelopmental Consultation/testing with the doctor (can last up to 2 hours). Note: Some patients may need to be scheduled for more developmental testing with a Trained clinician (1-1.5 hours)',
      image: processimg3,
    },
    {
      number: 4,
      description: 'Parent Meeting/ Follow up Appointment (Telemedicine) 30 minutes',
      image: processimg4,
    },
  ];

  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1, padding: 3, marginLeft: '15%', marginRight: '15%' }}>
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          The Appointment Process
        </Typography>
        <Grid container spacing={3} direction="column">
          {steps.map((step, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center' }}>
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Step {step.number}
                  </Typography>
                  <Typography sx={{ marginBottom: 2 }}>
                    {step.description}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={step.image}
                    alt={`Step ${step.number}`}
                    style={{ width: "100%", maxWidth: "300px", height: 'auto' }}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProcessPage;