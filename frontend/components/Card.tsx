import React from "react";
import { Box } from "@mui/material";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => (
  <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 1 }}>
    <h2 style={{ fontSize: "24px", marginBottom: "8px" }}>{title}</h2>
    <p style={{ color: "#4B4B4B", marginBottom: "16px" }}>{description}</p>
    <a
      href="#"
      style={{
        color: "#4C5FD5",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      Learn More <span style={{ marginLeft: "8px" }}>→</span>
    </a>
  </Box>
);

export default Card;
