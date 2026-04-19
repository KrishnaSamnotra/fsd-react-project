const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const ingredients = req.query.ingredients
      ? req.query.ingredients.split(",").map((item) => item.trim())
      : [];

    if (ingredients.length === 0) {
      const allRecipes = await Recipe.find();
      return res.status(200).json(allRecipes);
    }

    const recipes = await Recipe.find({
      ingredients: {
        $in: ingredients
      }
    });

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;