import { Stack, styled, Typography } from "@mui/material";

const MainContainer = styled(Stack)(({ theme }) => ({
  width: "450px",
  height: "180px",
  background: "#f5faff",
  borderRadius: "10px",
  border: "1px solid grey",
  boxShadow: theme.shadows[1],
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  marginTop: "1rem",
  fontWeight: "bold",
  padding: theme.spacing(0, 3),
}));
const StyledHr = styled("hr")(({ theme }) => ({
  border: "none",
  borderTop: "1px solid #e0e0e0",
  margin: theme.spacing(1, 0),
  width: "100%",
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: "#4B4B4B",
  padding: theme.spacing(0, 3),
}));

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <MainContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledHr />
      <StyledDescription>{description}</StyledDescription>
    </MainContainer>
  );
};

export default Card;
