import React, { useState, useEffect, useCallback } from 'react';
import { Slide, Typography, Box, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { COLOR } from '../utils/colors';

const TestimonialsCarousel: React.FC = () => {
  const [showTestimonial, setShowTestimonial] = useState(true);

  const testimonials = [
    "Dr. Pe Benito prepared me for the battle that I was going to have with the public school system. I always get answers to my questions and concerns. - Joanne C.",
    "Dr. De Ocampo is by far the best pediatrician we have ever dealt with. We have twins  that were adopted from Haiti at the age of 4. One has autism and ADHD and the other   has epilepsy and ADHD. She literally has been a Godsend to our family. I recommend  her 100% - Anon",
    "Dr. Pe Benito is a wonderful physician who spends the time to listen and give proper care. Highly recommend her. - Mandy T.",
    "Dr. De Ocampo listens and understands the concerns of the child and provides excellent advice as well as great resources to help understand the needs of my child. I’ve already noticed a substantial gain with her grades and her attention is perfect. She’s now an avid reader and taking on assignments with enthusiasm. -Lorraine T.",
    "Dr DeOcampo is wonderful. She tries many options for our son with ADHD.  He is on the milder side of things but she is constantly advocating for him and is great at responding to questions even when we don’t have an appointment. - Dannis M."
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
        <Typography color={COLOR.paper} variant="h3" gutterBottom align="center">
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





