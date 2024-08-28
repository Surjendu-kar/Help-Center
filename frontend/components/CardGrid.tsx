import { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import Card from "./Card";

const MainContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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

  useEffect(() => {
    const fetchCards = async () => {
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

    fetchCards();
  }, []);

  if (loading) return <Box sx={{ textAlign: "center", py: 4 }}>Loading...</Box>;
  if (error)
    return (
      <Box sx={{ textAlign: "center", py: 4, color: "error.main" }}>
        {error}
      </Box>
    );

  return (
    <MainContainer sx={{ py: 10 }}>
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
