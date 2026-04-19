import React, { useState } from "react";

const IngredientInput = ({
  selectedIngredients = [],
  setSelectedIngredients = () => {}
}) => {
  const [inputValue, setInputValue] = useState("");

  const suggestions = [
    "Tomato",
    "Garlic",
    "Onion",
    "Chicken",
    "Rice",
    "Cheese",
    "Basil",
    "Carrot"
  ];

  const addIngredient = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const exists = selectedIngredients.some(
      (item) => item.toLowerCase() === trimmed.toLowerCase()
    );

    if (!exists) {
      setSelectedIngredients([...selectedIngredients, trimmed]);
    }

    setInputValue("");
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(
      selectedIngredients.filter((item) => item !== ingredient)
    );
  };

  return (
    <div>
      <h2 className="panel-title">Choose ingredients</h2>
      <p className="panel-subtitle">
        Add ingredients from your pantry to find matching recipes
      </p>

      <div className="suggestions-row compact-chips">
        {suggestions.map((item) => (
          <button
            key={item}
            type="button"
            className="ingredient-chip compact-chip"
            onClick={() => addIngredient(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="ingredient-input-row compact-input-row">
        <input
          type="text"
          className="ingredient-input compact-input"
          placeholder="Type an ingredient"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addIngredient(inputValue);
          }}
        />

        <button
          type="button"
          className="add-button compact-add-btn"
          onClick={() => addIngredient(inputValue)}
        >
          +
        </button>
      </div>

      {selectedIngredients.length > 0 && (
        <div className="selected-row">
          {selectedIngredients.map((item) => (
            <span key={item} className="selected-chip">
              {item}
              <button
                type="button"
                className="remove-chip-btn"
                onClick={() => removeIngredient(item)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default IngredientInput;