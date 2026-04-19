import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />

      <div className="recipe-content">
        <div className="recipe-title-row">
          <h2>{recipe.title}</h2>
          <span className="difficulty">{recipe.difficulty}</span>
        </div>

        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-meta">
          <span>⏱ {recipe.time}</span>
          <span>👥 {recipe.servings}</span>
          <span>⭐ {recipe.rating}</span>
        </div>

        <div className="recipe-tags">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="recipe-tag">
              {tag}
            </span>
          ))}
        </div>

        <button
          className="view-recipe-btn"
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;