import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactForm: React.FC = () => {
  return (
    <Box 
      sx={{ 
        p: 3, 
        bgcolor: 'rgba(255, 255, 255, 0.85)', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', 
        width: '100%', 
        minHeight: '10%',
        textAlign: 'center' 
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        header
      </Typography>
      <Typography variant="body1">
        text
      </Typography>
    </Box>
  );
}

export default ContactForm;