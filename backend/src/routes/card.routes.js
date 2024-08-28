import express from "express";
import { Card } from "../models/card.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    console.log("Cards fetched successfully:", cards);
    res.json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({ title, description });
    const savedCard = await newCard.save();
    console.log("New card created:", savedCard);
    res.status(201).json(savedCard);
  } catch (error) {
    console.error("Error creating card:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});

router.get("/:title", async (req, res) => {
  try {
    const searchTerm = req.params.title;
    const regex = new RegExp(searchTerm, "i"); // 'i' flag makes it case-insensitive

    const cards = await Card.find({ title: regex });
    if (!cards.length) {
      return res.status(404).json({ error: "No Cards found" });
    }

    res.json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});

export default router;
