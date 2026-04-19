import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import recipes from "./data";
import RecipeCard from "./RecipeCard";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ingredients = location.state?.ingredients || [];

  const filteredRecipes =
    ingredients.length === 0
      ? recipes
      : recipes.filter((recipe) =>
          ingredients.some((item) =>
            recipe.ingredients.some(
              (ingredient) => ingredient.toLowerCase() === item.toLowerCase()
            )
          )
        );
        console.log("Selected ingredients:", ingredients);
console.log("Recipes:", recipes);
console.log("Filtered recipes:", filteredRecipes);

  return (
    <div className="results-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Search
      </button>

      <div className="results-header">
        <h1>Recipes Found ({filteredRecipes.length})</h1>

        <div className="used-tags">
          <span>Using ingredients:</span>
          {ingredients.map((item, index) => (
            <span key={index} className="result-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Result;