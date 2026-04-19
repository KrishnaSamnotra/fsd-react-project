import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IngredientInput from "./IngredientInput";

const Home = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/results", {
      state: { ingredients: selectedIngredients }
    });
  };

  return (
    <section className="home-page">
      <div className="home-content">
        <h1 className="home-title">Find recipes from ingredients you have</h1>
        <p className="home-subtitle">
          Add ingredients and discover matching meals instantly.
        </p>

        <div className="search-panel">
          <IngredientInput
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />

          <div className="search-panel-footer">
            <button
              className="search-button"
              onClick={handleSearch}
              disabled={selectedIngredients.length === 0}
            >
              Find Recipes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;