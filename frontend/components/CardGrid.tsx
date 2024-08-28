import React, { useState, useEffect } from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

const MainContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  minHeight: theme.spacing(50),
}));

const Container = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  width: "70%",
}));

interface CardData {
  _id: string;
  title: string;
  description: string;
}

const CardGrid = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  // handle search
  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/cards/${query}`);
      if (!response.ok) {
        throw new Error("Card not found");
      }
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error searching for card:", error);
      setCards([]);
    } finally {
      setLoading(false);
    }
  };

  //fetch all data
  const fetchAllCards = async () => {
    try {
      const response = await fetch("/api/cards");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCards(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch cards");
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (searchValue) {
      handleSearch(searchValue);
    } else {
      fetchAllCards();
    }
  }, [searchValue]);

  useEffect(() => {
    fetchAllCards();
  }, []);

  return (
    <MainContainer sx={{ py: 10 }}>
      {loading && (
        <Stack className="center">
          <Typography fontWeight={500}>Loading...</Typography>
        </Stack>
      )}
      {error && (
        <Stack className="center">
          <Typography fontWeight={500}>{error}</Typography>
        </Stack>
      )}
      <Container gap={10}>
        {cards.map((card) => (
          <Card
            key={card._id}
            title={card.title}
            description={card.description}
          />
        ))}
      </Container>
    </MainContainer>
  );
};

export default CardGrid;
