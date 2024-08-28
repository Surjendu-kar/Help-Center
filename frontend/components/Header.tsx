import React from "react";
import { Box } from "@mui/material";

const Header = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 2,
      bgcolor: "black",
      color: "white",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{ width: 24, height: 24, bgcolor: "white", borderRadius: "50%" }}
      />
      <span>Abstract | Help Center</span>
    </Box>
    <button
      style={{
        backgroundColor: "#4C5FD5",
        color: "white",
        padding: "8px 16px",
        borderRadius: 4,
        border: "none",
      }}
    >
      Submit a request
    </button>
  </Box>
);

export default Header;
