import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <Box>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
      {title}
    </Typography>
    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
      {items.map((item, index) => (
        <Box component="li" key={index} sx={{ mb: 1 }}>
          <Link href="#" color="inherit" underline="hover">
            {item}
          </Link>
        </Box>
      ))}
    </Box>
  </Box>
);

const Footer: React.FC = () => (
  <Box sx={{ bgcolor: "black", color: "white", py: 4 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <FooterSection title="Abstract" items={["Branches"]} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterSection
            title="Resources"
            items={["Blog", "Help Center", "Release Notes", "Status"]}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterSection
            title="Community"
            items={["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"]}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterSection
            title="Company"
            items={["About Us", "Careers", "Legal"]}
          />
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Link
              href="mailto:info@abstract.com"
              color="inherit"
              underline="hover"
            >
              info@abstract.com
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "right", fontSize: "0.75rem" }}>
        <Typography variant="body2">© Copyright 2022</Typography>
        <Typography variant="body2">Abstract Studio Design, Inc.</Typography>
        <Typography variant="body2">All rights reserved</Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
