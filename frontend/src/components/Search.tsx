import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Container,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Params } from "../enum";

// Styled Components
const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#dadbf1",
  padding: theme.spacing(8, 0),
  textAlign: "center",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(4.8),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  ".MuiOutlinedInput-root": {
    background: theme.palette.common.white,
  },
}));

// Main Component
const Search = () => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!value.trim().length) {
      searchParams.delete(Params.SearchKey);
    } else {
      searchParams.set(Params.SearchKey, value);
    }

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <SearchContainer>
      <Container maxWidth="sm">
        <Stack gap={2}>
          <Heading>How can we help?</Heading>

          <form onSubmit={handleSubmit}>
            <StyledTextField
              variant="outlined"
              placeholder="Search"
              autoComplete="search-title"
              slotProps={{
                input: {
                  endAdornment: <IconButton type="submit">→</IconButton>,
                },
              }}
              value={value}
              onChange={handleInputChange}
              fullWidth
            />
          </form>
        </Stack>
      </Container>
    </SearchContainer>
  );
};

export default Search;
