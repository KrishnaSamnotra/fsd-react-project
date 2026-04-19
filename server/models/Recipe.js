const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      default: "Easy"
    },
    time: {
      type: String,
      default: "30 min"
    },
    servings: {
      type: Number,
      default: 2
    },
    rating: {
      type: Number,
      default: 4
    },
    tags: {
      type: [String],
      default: []
    },
    ingredients: {
      type: [String],
      required: true
    },
    instructions: {
      type: [String],
      default: []
    },
    cuisine: {
      type: String,
      default: "General"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);