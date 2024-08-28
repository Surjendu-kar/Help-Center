import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!value.trim().length) {
      searchParams.delete("search");
    } else {
      searchParams.set("search", value);
    }

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <Box sx={{ bgcolor: "#dadbf1", py: 8, textAlign: "center" }}>
      <Container maxWidth="sm">
        <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
          How can we help?
        </h1>
        <form onSubmit={handleSubmit}>
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
              value={value}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "16px",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <Box
              component="button"
              type="submit"
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              →
            </Box>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Search;
