import React from 'react';
import { Box, Typography } from '@mui/material';

interface InfoBoxProps {
  headerText: string;
  descriptionText: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ headerText, descriptionText }) => {
  return (
    <Box 
      sx={{ 
        p: 3, 
        bgcolor: 'rgba(255, 255, 255, 0.85)', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', 
        width: '25%', 
        minHeight: '10%',
        textAlign: 'center' 
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {headerText}
      </Typography>
      <Typography variant="body1">
        {descriptionText}
      </Typography>
    </Box>
  );
}

export default InfoBox;