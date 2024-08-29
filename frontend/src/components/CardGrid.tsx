import React, { useState, useEffect } from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { Params } from "../enum";

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
  const searchValue = searchParams.get(Params.SearchKey);

  //fetch all data
  const fetchAllCards = async (query?: string) => {
    // clear errors
    setError(null);

    try {
      let baseEndPoint = "/api/cards";
      if (query) {
        baseEndPoint += `/${query}`;
      }

      const response = await fetch(baseEndPoint);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCards(data);
    } catch (err) {
      setError("Failed to fetch cards");
      setCards([]);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue?.trim().length) {
      fetchAllCards(searchValue);
    } else {
      fetchAllCards();
    }
  }, [searchValue]);

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
