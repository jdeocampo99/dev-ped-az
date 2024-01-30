import React from "react";
import { Box, Typography, Container, Paper, Divider } from "@mui/material";
import Header from "../components/Header";
import UsefulLink from "../components/UsefulLink";

interface UsefulLinkProps {
  label: string;
  url: string;
  category: string;
}

const ResourcesPage: React.FC = () => {
  const usefulLinks = [
  // ADHD Links
  {
    label: "Parenting a Child with ADHD - CHADD",
    url: "https://chadd.org/for-parents/overview/",
    category: "ADHD",
  },
  {
    label: "Oppositional Defiant Disorder",
    url: "https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Children-With-Oppositional-Defiant-Disorder-072.aspx",
    category: "ADHD",
  },
  {
    label: "Attention-Deficit/Hyperactivity Disorder (ADHD): Parents' Medication Guide",
    url: "https://www.aacap.org/App_Themes/AACAP/docs/resource_centers/resources/med_guides/ADHD_Medication_Guide-web.pdf",
    category: "ADHD",
  },
  {
    label: "How to Control Anger / Emotional Reactivity",
    url: "https://www.additudemag.com/how-to-control-anger-emotional-reactivity-adhd/",
    category: "ADHD",
  },
  {
    label: "#045: Executive Functioning with Sara Ward",
    url: "https://www.youtube.com/watch?v=m1lEkBfZiXg",
    category: "ADHD",
  },
  {
    label: "Raising Kids with ADHD and Social Struggles",
    url: "https://www.additudemag.com/parenting-help-raising-adhd-kids-social-skills/?src=embed_link",
    category: "ADHD",
  },

  // Autism Links
  {
    label: "What is Autism?",
    url: "https://autismcenter.org/what-autism/",
    category: "Autism",
  },
  {
    label: "Autism Jumpstart Program @ SARRC",
    url: "https://autismcenter.org/jumpstart/",
    category: "Autism",
  },
  {
    label: "Therapy and Support for Autism",
    url: "https://www.autismspeaks.org/therapy-and-support-autism",
    category: "Autism",
  },
  {
    label: "Division of Developmental Disabilities Application",
    url: "https://des.az.gov/sites/default/files/dl/DDD-2069A.pdf?time=1705385544132",
    category: "Autism",
  },

  // Learning Disabilities Links
  {
    label: "What Do You Do If You Suspect That Your Child Has A Learning Disability? | LD OnLine",
    url: "https://www.ldonline.org/ld-topics/working-families/what-do-you-do-if-you-suspect-your-child-has-learning-disability",
    category: "Learning Disabilities",
  },
  {
    label: "Dyslexia Basic Information",
    url: "https://dyslexiaida.org/dyslexia-basics/",
    category: "Learning Disabilities",
  },
  {
    label: "Guide to Evaluating Learning Disabilities",
    url: "https://ldaamerica.org/a-parents-guide-to-evaluations-ieps-and-more/?audience=Parents",
    category: "Learning Disabilities",
  },
  {
    label: "Lindamood-Bell Reading Program for Dyslexia",
    url: "https://www.dyslexia-reading-well.com/lindamood-bell.html",
    category: "Learning Disabilities",
  },
  {
    label: "Empowerment Scholarship Application",
    url: "https://www.azed.gov/esa",
    category: "Learning Disabilities",
  },
  {
    label: "Empowerment Scholarship Guide",
    url: "https://www.azed.gov/esa/esa-guidance",
    category: "Learning Disabilities",
  },

  // Developmental Delay Links
  {
    label: "Raising Special Kids",
    url: "https://raisingspecialkids.org/resources/early-childhood/your-child-is-eligible-for-azeip/",
    category: "Developmental Delay",
  },
  {
    label: "Arizona Early Intervention Program",
    url: "https://azeip.azdes.gov/AzEIP/AzeipRef/Forms/Categories.aspx",
    category: "Developmental Delay",
  },
  {
    label: "Special Olympics",
    url: "https://specialolympicsarizona.org/become-an-athlete/",
    category: "Developmental Delay",
  },
  {
    label: "Early Childhood Special Education / Developmental Pre-School",
    url: "https://www.azed.gov/specialeducation/early-childhood-special-education",
    category: "Developmental Delay",
  },
];

  const categories = [...new Set(usefulLinks.map(link => link.category))];

  return (
    <div>
      <Header />
      <Container>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h2" sx={{ marginBottom: 2 }}>
            Resources
          </Typography>
          {categories.map(category => (
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {category}
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <ul>
                {usefulLinks
                  .filter(link => link.category === category)
                  .map((link, index) => (
                    <UsefulLink key={index} label={link.label} url={link.url} />
                  ))}
              </ul>
            </Paper>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default ResourcesPage;