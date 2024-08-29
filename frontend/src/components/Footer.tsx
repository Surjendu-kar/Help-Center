import { Typography } from "@mui/material";
import { Box, Stack, styled } from "@mui/system";

const MainContainer = styled(Box)(() => ({
  background: "black",
  color: "white",
  padding: "3rem 0",
  display: "flex",
  justifyContent: "space-around",
}));

const Container = styled(Stack)(() => ({
  // gap: theme.spacing(1),
}));

const Heading = styled(Typography)(() => ({
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "1rem",
}));

const TextStyle = styled(Typography)(() => ({
  fontSize: "0.9rem",
}));
const DotIndicator = styled(Box)(() => ({
  width: 24,
  height: 24,
  background: "white",
  borderRadius: "35%",
  marginBottom: "0.5rem",
}));

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <Heading>Abstract</Heading>
        <TextStyle>Branches</TextStyle>
      </Container>

      <Container>
        <Heading>Resources</Heading>
        <TextStyle>Blog</TextStyle>
        <TextStyle>Help Center</TextStyle>
        <TextStyle>Release Notes</TextStyle>
        <TextStyle>Status</TextStyle>
      </Container>

      <Container>
        <Heading>Community</Heading>
        <TextStyle>Twitter</TextStyle>
        <TextStyle>LinkedIn</TextStyle>
        <TextStyle>Facebook</TextStyle>
        <TextStyle>Dribbble</TextStyle>
        <TextStyle>Podcast</TextStyle>
      </Container>

      <Container>
        <Heading>Company</Heading>
        <TextStyle>About Us</TextStyle>
        <TextStyle>Careers</TextStyle>
        <TextStyle>Legal</TextStyle>
        <Container mt={2}>
          <TextStyle fontWeight={"bold"}>Contact Us</TextStyle>
          <TextStyle>info@abstract.com</TextStyle>
        </Container>
      </Container>

      <Container sx={{ justifyContent: "flex-end" }}>
        <DotIndicator />
        <TextStyle variant="body2">© Copyright 2022</TextStyle>
        <TextStyle variant="body2">Abstract Studio Design, Inc.</TextStyle>
        <TextStyle variant="body2">All rights reserved</TextStyle>
      </Container>
    </MainContainer>
  );
};

export default Footer;
