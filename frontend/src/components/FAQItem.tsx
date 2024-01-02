import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="faq-content"
        id="faq-header"
      >
        <Typography variant="subtitle1">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: answer }} />
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQItem;