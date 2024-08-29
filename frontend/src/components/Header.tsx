import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import RequestDialog from "./RequestDialog";

const MainContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1rem",
  background: "black",
  color: "white",
}));

const ButtonStyled = styled(Button)(() => ({
  backgroundColor: "#2e2b2b",
  color: "white",
  padding: "8px 16px",
  border: "1px solid grey",
  borderRadius: "7px",
  boxShadow: "0 1px 10px rgba(255, 255, 255, 0.5)",

  "&:hover": {
    backgroundColor: "#434040",
  },
}));

const DotIndicator = styled(Box)(() => ({
  width: 24,
  height: 24,
  background: "white",
  borderRadius: "50%",
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainContainer>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <DotIndicator />
        <span>Abstract | Help Center</span>
      </Box>
      <ButtonStyled onClick={handleOpen}>Submit a request</ButtonStyled>
      <RequestDialog open={open} onClose={handleClose} />
    </MainContainer>
  );
};

export default Header;
