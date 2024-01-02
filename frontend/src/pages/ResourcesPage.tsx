import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Header from "../components/Header";
import FAQItem from "../components/FAQItem";
import UsefulLink from "../components/UsefulLink";

interface FAQItem {
  question: string;
  answer: string;
}

interface UsefulLink {
  label: string;
  url: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is a Developmental and Behavioral Pediatrician?",
    answer: "Developmental and Behavioral Pediatricians are medical doctors who have completed medical school, 3 years of medical residency training in general pediatrics and another 2-3 years of fellowship/subspecialty training in Developmental and Behavioral Pediatrics. Developmental Pediatricians evaluate, counsel and provide a treatment plan for children and adolescents with developmental, learning, social and behavioral challenges."
  },
  {
    question: "What age group do you see?",
    answer: "At this time we will see new patients from 18 months of age until 12 yrs of age."
  },
  {
    question: "Is the practice accepting new patients?",
    answer: "Yes, we always welcome new patients and their families to our practice."
  },
  {
    question: "Will we need a referral from our primary care provider?",
    answer: "No, a referral is not necessary since we are a fee-for-service practice and do not accept insurance. We are happy to take referrals from other medical providers or therapists."
  },
  {
    question: "We are concerned about our child, but our pediatrician is not, can we still schedule an appointment?",
    answer: "Yes, absolutely. Parents are most sensitive and are often long concerned before anyone else is. We understand that parents may need diagnostic clarity, reassurance or a second opinion in some cases. After all, parents only want what’s best for their children."
  },
  {
    question: "What are some diagnoses or disorders that the Developmental Pediatricians see?",
    answer: "We see children with Autistic Spectrum Disorder, Attention Deficit Hyperactivity Disorder, oppositional defiant problems, anxiety and depression,  learning disorders (dyslexia, trouble with math, writing, memory, retention of information), cognitive/intellectual disabilities, developmental delays (speech, language, social, gross motor and fine motor). We also see those with medical or neurologic conditions (ie.,Epilepsy, tics, Tourette syndrome,spina bifida, cerebral palsy) affecting their development. Other developmental disabilities include genetic and chromosomal abnormalities. We can discuss regulatory disorders which include sleep, feeding problems, and toilet training issues.We also see children with complex medical and developmental needs who require coordination of care."
  },
  {
    question: "Do you refer to other specialists?",
    answer: "Depending on the child, more information may be required to arrive at the most informed clinical diagnosis. As such, we may need to refer to other subspecialists such as a neurologist, geneticist, gastroenterologist, psychiatrist. or sleep specialist, to name a few.  We may also refer to a pediatric clinical psychologist for a more comprehensive developmental or psychoeducational evaluation for diagnostic clarification. We can also make referrals to developmental therapists if needed  including speech, occupational, physical, feeding and  (ABA) Applied Behavioral Analysis Therapy."
  },
  {
    question: "Does your practice take insurance?",
    answer: "Our practice does not participate in any insurance plans. We will be happy to provide you with the forms needed to submit to your insurance carrier for possible reimbursement."
  },
  {
    question: "Do you do telemedicine for New patients and Follow up appointments?",
    answer: "Yes, telemedicine is offered for both new and existing patients. We however recommend for new patients to be seen in person if possible but we understand that there may be circumstances where this may be difficult for some families due to distance or other circumstances."
  },
  {
    question: "What should I expect on the initial visit?",
    answer: "New patient neurodevelopmental evaluations can last up to 2 hours depending on the patient and this spot is specifically reserved for your child. A comprehensive interview will be conducted where information regarding the child’s strengths and weaknesses are gathered. The information will also include developmental and behavioral history, academic progress, psychosocial and family history as well as a review of medical/psychological  diagnosis. Specific assessments/neurodevelopmental testing will be performed based on clinical presentation and information gathered at that time. The assessment may also include review of past evaluations/records. Diagnostic impressions and recommendations will be discussed. On occasions, your doctor may recommend  further testing  to arrive at a specific diagnosis."
  },
  {
    question: "What does a typical ADHD comprehensive evaluation include?",
    answer: `Please allow at  least  2 hours for the initial assessment. Prior to your appointment, your clinician would have already reviewed the New Patient Intake Questionnaire (NPIQ), other medical/therapist records and school/teacher questionnaires if applicable.<br/><br/>
    Another appointment (telemedicine or in-person ) is scheduled 3-4 weeks after the first visit to make sure that the clinicians are able to address any issues or hurdles to the treatment plan, answer any other questions from the parents or to follow up for medication management (if the child has started medication). <br/><br/>
    The ADHD evaluation may include the following:<br/>
    <ul>
        <li>A thorough review of developmental, behavioral, educational, medical, social/family histories Physical /Neurological examination </li>
        <li>Review of existing records (IEP, consultation notes from other specialists, ST/OT/PT notes, psychoeducational evaluation results) </li>
        <li>Review of questionnaires completed by parents and teachers</li>
        <li>Neurodevelopmental testing/screening and evaluation for possible comorbidities 
        (depending on patient age and concerns, we may assess for academic/cognitive deficits, language delays, and other mental health issues  including anxiety, depression, OCD, tics). The latter may occasionally require subsequent referral to a child/adolescent psychiatrist.
        </li>
        <li>The family will be provided a comprehensive treatment plan with the goal of recognizing the child’s strengths and challenges, and identifying the best ways to support his/her/their progress. This treatment plan may include the use of pharmacological intervention, referral to an educational advocate, child psychologist/therapist or other specialists.</li>
    </ul>
    `
  },
  {
    question: "What does a typical Developmental/Autism evaluation involve?",
    answer: `Please allow at  least  2 hours for the initial assessment. Prior to your appointment, your clinician would have already reviewed the New Patient Intake Questionnaire (NPIQ), other medical/therapist records and school/teacher questionnaires if applicable.<br/><br/>
    Another appointment (telemedicine or in-person ) is scheduled 3-4 weeks after the first visit to make sure that the clinicians are able to address any issues or hurdles to the treatment plan, answer any other questions from the parents or to follow up for medication management (if the child has started medication). <br/><br/>
    The Autism/Developmental evaluation may include the following:<br/>
    <ul>
        <li>A thorough review of developmental, behavioral, educational, medical, social/family histories </li>
        <li>Physical/ Neurological examination </li>
        <li>Review of existing records (IEP, consultation notes from other specialists, ST/OT/PT notes, psychoeducational evaluation results) 
        /li>
        <li>Review of questionnaires completed by parents and teachers /screening questionnaires (ex: M-CHAT)</li>
        <li>Perform diagnostic assessment using standardized tools. This may include the Autism Diagnostic Observation Schedule (ADOS) if applicable, CARS and review of DSM V criteria for Autism. If time permits, or depending on the patient’s presentation,  cognitive, academic, language, motor and adaptive screening tests may also be performed or recommended at future appointments.</li>
        <li>The family will be provided a comprehensive treatment plan with the goal of recognizing the child’s strengths and challenges, and identifying the best ways to support his/her/their progress.
        </li>
        <li>This may include providing community resources  and support for the family and referrals to appropriate therapists and agencies.
        </li>
        <li></li>
    </ul>
    `
  },
  {
    question: "Do you prescribe medication(s) for my child if needed?",
    answer: "Your doctor may prescribe medications as part of a comprehensive treatment plan that focuses on the individual needs of a child. This treatment may also include academic support, behavior therapy, speech and language therapy, occupational therapy, psychotherapy, and other forms of treatment."
  },
  {
    question: "What if I have to cancel my child’s appointment?",
    answer: "All new patient appointments will be confirmed at least 1 week before the appointment. We do understand that there can be emergencies or illness. If possible please cancel 48 hrs before the appointment to avoid being charged a penalty. If canceled less than 48 hours of the appointment date, you will be charged a fee. Please review the office policies and procedures regarding cancellation for both new and follow up appointments."
  },
  {
    question: "What if I have other questions? What is the best way to reach our doctor?",
    answer: `If your child is a new patient, please send us an email through the "Book an Appointment" tab and we will try our best to respond at the soonest time possible. <br/><br/>
    If your child is an existing patient and needs an appointment or refill for meds or a non urgent medical question, please leave a message for the medical assistant/office staff by calling our office during our regular hours.<br/><br/>
    If this is a medical emergency, please do not leave a message at the office after office hours, on weekends or holidays as this line may not be monitored. Please call 9-1-1 or go to the emergency room if emergency assistance is needed. 
    `
  }
];

const usefulLinks: UsefulLink[] = [
  {
    label: "Example Link 1",
    url: "https://example.com",
  },
  {
    label: "Example Link 2",
    url: "https://example.com",
  },
  // Add more useful links here
];

const ResourcesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Resources Page
          </Typography>
          <Typography variant="body1">
            Welcome to our resources page. Here, you can find helpful information, FAQs, and useful links.
          </Typography>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Frequently Asked Questions (FAQ)
          </Typography>
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </Box>

        {/* Useful Links Section */}
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Useful Links
          </Typography>
          <ul>
            {usefulLinks.map((link, index) => (
              <UsefulLink key={index} label={link.label} url={link.url} />
            ))}
          </ul>
        </Box>
      </Container>
    </div>
  );
};

export default ResourcesPage;