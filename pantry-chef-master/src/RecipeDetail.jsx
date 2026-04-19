import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "./data";
import "./recipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ingredients");
  const [checkedItems, setCheckedItems] = useState([]);

  const recipe = recipes.find((item) => item.id === Number(id));
  const nutrition = recipe?.nutrition || {};

  if (!recipe) {
    return (
      <section className="detail-page">
        <div className="detail-container">
          <button className="back-link" onClick={() => navigate("/")}>
            ← Back
          </button>
          <div className="detail-card">
            <div className="detail-content">
              <h2>Recipe not found</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const toggleChecked = (ingredient) => {
    setCheckedItems((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <section className="detail-page">
      <div className="detail-container">
        <button className="back-link detail-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="detail-card detail-main-card">
          <div className="detail-hero-image-wrap">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="detail-hero-image"
            />
          </div>

          <div className="detail-content">
            <div className="detail-title-row">
              <div>
                <h1 className="detail-title">{recipe.title}</h1>
                <p className="detail-description">{recipe.description}</p>
              </div>
              <span
                className={`difficulty-badge ${recipe.difficulty.toLowerCase()}`}
              >
                {recipe.difficulty}
              </span>
            </div>

            <div className="detail-rating">
              <span className="stars">★★★★★</span>
              <span>
                {recipe.rating}{" "}
                {recipe.reviews ? `(${recipe.reviews} reviews)` : ""}
              </span>
            </div>

            <div className="time-stats-box">
              <div className="time-stat">
                <span className="time-icon">🕒</span>
                <small>Prep Time</small>
                <strong>{recipe.prepTime}</strong>
              </div>
              <div className="time-stat">
                <span className="time-icon">🕒</span>
                <small>Cook Time</small>
                <strong>{recipe.cookTime}</strong>
              </div>
              <div className="time-stat">
                <span className="time-icon">🕒</span>
                <small>Total Time</small>
                <strong>{recipe.totalTime}</strong>
              </div>
              <div className="time-stat">
                <span className="time-icon">👥</span>
                <small>Servings</small>
                <strong>{recipe.servings}</strong>
              </div>
            </div>

            <div className="detail-tags">
              {recipe.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`detail-tag ${
                    tag === "Non-Vegetarian" ? "red" : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Safe nutrition block */}
            <div className="nutrition-box">
              <div className="nutrition-item">
                <span>🔥</span>
                <div>
                  <small>Calories</small>
                  <strong>{nutrition.calories ?? "N/A"}</strong>
                </div>
              </div>
              <div className="nutrition-item">
                <span>🥩</span>
                <div>
                  <small>Protein</small>
                  <strong>{nutrition.protein ?? "N/A"}</strong>
                </div>
              </div>
              <div className="nutrition-item">
                <span>🍜</span>
                <div>
                  <small>Carbs</small>
                  <strong>{nutrition.carbs ?? "N/A"}</strong>
                </div>
              </div>
              <div className="nutrition-item">
                <span>⚡</span>
                <div>
                  <small>Fats</small>
                  <strong>{nutrition.fats ?? "N/A"}</strong>
                </div>
              </div>
            </div>

            <button className="cooking-mode-btn">Start Cooking Mode</button>
          </div>
        </div>

        <div className="tab-switch">
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
        </div>

        {activeTab === "ingredients" ? (
          <div className="ingredients-panel">
            <h2>Ingredients</h2>
            <p>Check off items as you prepare them</p>

            <div className="ingredient-checklist">
              {recipe.ingredients.map((ingredient, index) => (
                <label
                  key={index}
                  className={`check-item ${
                    checkedItems.includes(ingredient) ? "checked" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(ingredient)}
                    onChange={() => toggleChecked(ingredient)}
                  />
                  <span>{ingredient}</span>
                </label>
              ))}
            </div>

            <div className="ingredients-footer">
              <span>
                {checkedItems.length} of {recipe.ingredients.length} prepared
              </span>
              <button>Add Missing to Shopping List</button>
            </div>
          </div>
        ) : (
          <div className="instructions-panel">
            <h2>Instructions</h2>
            <p>Follow these steps to prepare your meal</p>

            <div className="instruction-list">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="instruction-step">
                  <div className="step-number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipeDetail;