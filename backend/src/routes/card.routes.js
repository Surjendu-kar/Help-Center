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

export default router;
