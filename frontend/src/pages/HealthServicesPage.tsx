import React from "react";
import { Box, Typography, Container, List, ListItem, ListItemText, Divider } from "@mui/material";
import Header from "../components/Header";

const HealthServicesPage: React.FC = () => {
  // Reformatting and simplifying the health services list
  const healthServices = [
    {
      title: "Neurodevelopmental Evaluations",
      description: "Comprehensive consultations and evaluations for various neurodevelopmental conditions."
    },
    {
      title: "Developmental Delay Screening",
      description: "Identifying delays in speech, motor skills, cognition, processing, and learning."
    },
    {
      title: "Autism & ADHD Assessment",
      description: "Assessing for Autism Spectrum Disorders, ADHD, and related comorbid conditions."
    },
    {
      title: "Regulatory Disorders",
      description: "Evaluations and recommendations for sleep, feeding, and other regulatory disorders."
    },
    {
      title: "Second Opinions",
      description: "Providing expert second opinions on neurodevelopmental and behavioral diagnoses."
    },
    {
      title: "Developmental Therapy Recommendations",
      description: "Advising on therapies such as ABA, Speech, Occupational, Feeding, and Physical Therapy."
    },
    {
      title: "Mental Health Assessments",
      description: "Addressing challenges like Oppositional Defiant Disorder, OCD, Anxiety, Depression, and more."
    },
    {
      title: "Developmental Counseling",
      description: "Guidance on behavior management and monitoring developmental progress."
    },
    {
      title: "Medication Management",
      description: "Initiating and supervising psychotropic medication when necessary."
    },
    {
      title: "Diagnostic Testing",
      description: "Ordering genetic and other laboratory tests as required."
    },
    {
      title: "Referral & Care Coordination",
      description: "Coordinating with primary care physicians and specialists for comprehensive care."
    }
  ];

  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Services
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Services we provide include the following but are not limited to:
          </Typography>
          <List>
            {healthServices.map((service, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Typography variant="h6" component="h2" gutterBottom>
                        {service.title}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {service.description}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < healthServices.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default HealthServicesPage;