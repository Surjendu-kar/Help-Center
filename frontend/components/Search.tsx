import React from "react";
import { Box, Container } from "@mui/material";

const Search = () => (
  <Box sx={{ bgcolor: "#dadbf1", py: 8, textAlign: "center" }}>
    <Container maxWidth="sm">
      <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
        How can we help?
      </h1>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          bgcolor: "white",
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          →
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Search;
