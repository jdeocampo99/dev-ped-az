import React, { useState, useEffect, useCallback } from 'react';
import { Slide, Typography, Box, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { COLOR } from '../utils/colors';

const TestimonialsCarousel: React.FC = () => {
  const [showTestimonial, setShowTestimonial] = useState(true);

  const testimonials = [
    "From the moment we stepped into the clinic, the entire experience was nothing short of phenomenal. The staff made my child feel comfortable and at ease, answering all our queries patiently. The facilities are top-notch, and we're thankful to have found such dedicated professionals. - Sarah M.",
    "Having switched from another pediatrician, I was initially apprehensive about the transition. However, the genuine care, expertise, and warmth shown by everyone at the clinic dispelled all my concerns. They don't just treat symptoms; they care for the child's overall well-being. An absolute gem in the healthcare industry. - Martin L.",
    "As first-time parents, we had a plethora of questions and concerns regarding our baby's health. But the team here has been our guiding light. The personalized attention, combined with state-of-the-art facilities, ensures that our little one is in the best hands possible. So grateful for their consistent support. - Rebecca and George A."
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = useCallback(() => {
    setShowTestimonial(false);
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setShowTestimonial(true);
    }, 300); // adjust this duration to match Slide transition duration
  }, [testimonials]); 

  const handlePrevious = useCallback(() => {
    setShowTestimonial(false);
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setShowTestimonial(true);
    }, 300);
  }, [testimonials]);

  // Use useEffect to set up automatic scrolling
  useEffect(() => {
    const intervalId = setInterval(handleNext, 7000); // Every 7 seconds

    // Clear interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [handleNext]);  // Dependency array

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
        <Typography variant="h3" gutterBottom align="center">
            Client Testimonials
        </Typography>
        <Box width="20%" height="3px" bgcolor={COLOR.mainGreen} mb={3}></Box>
        <Box
            width="60%" 
            height={100} 
            bgcolor={COLOR.paper}
            p={3} 
            borderRadius={2} 
            boxShadow={3}
            mb={2} 
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative" 
        >
            <FormatQuoteIcon style={{ position: 'absolute', top: 8, left: 8 }} />
            <Slide direction="left" in={showTestimonial} mountOnEnter unmountOnExit>
                <Typography align="center" style={{ fontStyle: 'italic' }}>
                    {testimonials[currentTestimonialIndex]}
                </Typography>
            </Slide>
            <FormatQuoteIcon style={{ position: 'absolute', top: 8, right: 8 }} />
        </Box>
        <Box>
            <IconButton onClick={handlePrevious} color="inherit">
                <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton onClick={handleNext} color="inherit">
                <KeyboardArrowRightIcon />
            </IconButton>
        </Box>
    </Box>
  );
}

export default TestimonialsCarousel;





