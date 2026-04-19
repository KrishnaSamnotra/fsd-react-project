const recipes = [
  {
    "id": 1,
    "title": "Vegetable Curry",
    "description": "Aromatic curry with mixed vegetables in coconut milk sauce",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "45 min",
    "prepTime": "15 min",
    "cookTime": "30 min",
    "totalTime": "45 min",
    "servings": 6,
    "rating": 4.4,
    "reviews": 128,
    "tags": [
      "Indian",
      "Vegan",
      "Vegetarian"
    ],
    "ingredients": [
      "Tomato",
      "Garlic",
      "Onion",
      "Carrot",
      "Potato",
      "Coconut Milk"
    ],
    "nutrition": {
      "calories": "320 kcal",
      "protein": "8 g",
      "carbs": "34 g",
      "fats": "16 g"
    },
    "instructions": [
      "Heat oil in a large pan and sauté garlic and onion until fragrant.",
      "Add chopped tomatoes and cook until soft.",
      "Add potato and carrot with spices, then stir well.",
      "Pour in coconut milk and simmer until vegetables are tender.",
      "Serve hot with rice or roti."
    ]
  },
  {
    "id": 2,
    "title": "Chicken Stir Fry",
    "description": "Quick and healthy chicken with colorful vegetables in savory sauce",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "30 min",
    "prepTime": "10 min",
    "cookTime": "20 min",
    "totalTime": "30 min",
    "servings": 4,
    "rating": 4.6,
    "reviews": 214,
    "tags": [
      "Asian",
      "High Protein",
      "Non-Vegetarian"
    ],
    "ingredients": [
      "Chicken",
      "Garlic",
      "Tomato",
      "Onion",
      "Carrot",
      "Soy Sauce"
    ],
    "nutrition": {
      "calories": "290 kcal",
      "protein": "27 g",
      "carbs": "10 g",
      "fats": "14 g"
    },
    "instructions": [
      "Slice the chicken and vegetables into thin pieces.",
      "Heat oil in a wok and sauté garlic.",
      "Add chicken and cook until lightly browned.",
      "Add tomato, onion, and carrot, then stir fry for a few minutes.",
      "Pour in soy sauce, mix well, and serve hot."
    ]
  },
  {
    "id": 3,
    "title": "Homemade Margherita Pizza",
    "description": "Fresh and simple pizza with tomato sauce, mozzarella, and basil",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "45 min",
    "prepTime": "15 min",
    "cookTime": "30 min",
    "totalTime": "45 min",
    "servings": 2,
    "rating": 4.9,
    "reviews": 342,
    "tags": [
      "Italian",
      "Vegetarian"
    ],
    "ingredients": [
      "Tomato",
      "Garlic",
      "Cheese",
      "Basil",
      "Flour"
    ],
    "nutrition": {
      "calories": "410 kcal",
      "protein": "15 g",
      "carbs": "48 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the pizza base and spread tomato sauce on top.",
      "Add chopped garlic, cheese, and basil evenly.",
      "Bake in a preheated oven until the crust is golden.",
      "Slice and serve hot."
    ]
  },
  {
    "id": 4,
    "title": "Paneer Tomato Masala",
    "description": "Soft paneer cubes cooked in a rich tomato and onion gravy",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "35 min",
    "prepTime": "10 min",
    "cookTime": "25 min",
    "totalTime": "35 min",
    "servings": 4,
    "rating": 4.5,
    "reviews": 186,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Paneer",
      "Tomato",
      "Onion",
      "Garlic",
      "Milk"
    ],
    "nutrition": {
      "calories": "360 kcal",
      "protein": "18 g",
      "carbs": "12 g",
      "fats": "26 g"
    },
    "instructions": [
      "Sauté onion and garlic until golden.",
      "Add tomatoes and cook into a thick masala base.",
      "Add paneer cubes and a little milk for creaminess.",
      "Cook for a few minutes and serve warm."
    ]
  },
  {
    "id": 5,
    "title": "Garlic Tomato Rice",
    "description": "Simple rice dish packed with garlic, tomato, and warm spices",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "25 min",
    "prepTime": "10 min",
    "cookTime": "15 min",
    "totalTime": "25 min",
    "servings": 3,
    "rating": 4.3,
    "reviews": 97,
    "tags": [
      "Indian",
      "Vegetarian",
      "Quick"
    ],
    "ingredients": [
      "Rice",
      "Tomato",
      "Garlic",
      "Onion"
    ],
    "nutrition": {
      "calories": "280 kcal",
      "protein": "5 g",
      "carbs": "52 g",
      "fats": "6 g"
    },
    "instructions": [
      "Cook the rice and keep it aside.",
      "Sauté garlic and onion in oil.",
      "Add chopped tomato and cook until mushy.",
      "Mix in cooked rice and toss well.",
      "Serve hot."
    ]
  },
  {
    "id": 6,
    "title": "Cheesy Garlic Omelette",
    "description": "Protein-rich omelette with cheese, garlic, and onion",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "15 min",
    "prepTime": "5 min",
    "cookTime": "10 min",
    "totalTime": "15 min",
    "servings": 1,
    "rating": 4.2,
    "reviews": 76,
    "tags": [
      "Breakfast",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Egg",
      "Garlic",
      "Onion",
      "Cheese",
      "Tomato"
    ],
    "nutrition": {
      "calories": "250 kcal",
      "protein": "16 g",
      "carbs": "4 g",
      "fats": "18 g"
    },
    "instructions": [
      "Beat eggs in a bowl and season lightly.",
      "Add chopped garlic, onion, tomato, and cheese.",
      "Pour into a hot pan and cook until set.",
      "Fold and serve hot."
    ]
  },
  {
    "id": 7,
    "title": "Spicy Chicken Skillet",
    "description": "Wholesome recipe made with lentils and rice for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "28 min",
    "prepTime": "6 min",
    "cookTime": "22 min",
    "totalTime": "28 min",
    "servings": 3,
    "rating": 4.8,
    "reviews": 141,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Lentils",
      "Rice",
      "Cheese",
      "Carrot"
    ],
    "nutrition": {
      "calories": "283 kcal",
      "protein": "28 g",
      "carbs": "22 g",
      "fats": "8 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté lentils and rice until aromatic.",
      "Add cheese, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 8,
    "title": "Peppery Veg Noodles",
    "description": "Hearty dish made with beans and green chili for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "20 min",
    "cookTime": "18 min",
    "totalTime": "38 min",
    "servings": 3,
    "rating": 4.5,
    "reviews": 307,
    "tags": [
      "Asian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Beans",
      "Green Chili",
      "Tomato",
      "Basil",
      "Rice"
    ],
    "nutrition": {
      "calories": "339 kcal",
      "protein": "20 g",
      "carbs": "36 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery veg noodles and keep them ready.",
      "Heat oil in a pan and sauté beans and green chili until aromatic.",
      "Add tomato, basil, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 9,
    "title": "Sizzling Tomato Pasta",
    "description": "Quick dish made with milk and chickpeas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "37 min",
    "prepTime": "7 min",
    "cookTime": "30 min",
    "totalTime": "37 min",
    "servings": 2,
    "rating": 4.4,
    "reviews": 316,
    "tags": [
      "Homestyle",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Milk",
      "Chickpeas",
      "Lentils",
      "Flour",
      "Tomato",
      "Chicken",
      "Ginger"
    ],
    "nutrition": {
      "calories": "362 kcal",
      "protein": "57 g",
      "carbs": "40 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling tomato pasta and keep them ready.",
      "Heat oil in a pan and sauté milk and chickpeas until aromatic.",
      "Add lentils, flour, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 10,
    "title": "Tangy Soya Masala",
    "description": "Wholesome recipe made with onion and rice for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "29 min",
    "prepTime": "17 min",
    "cookTime": "12 min",
    "totalTime": "29 min",
    "servings": 4,
    "rating": 4.1,
    "reviews": 225,
    "tags": [
      "Italian",
      "Vegan"
    ],
    "ingredients": [
      "Onion",
      "Rice",
      "Ginger",
      "Tomato"
    ],
    "nutrition": {
      "calories": "305 kcal",
      "protein": "7 g",
      "carbs": "21 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy soya masala and keep them ready.",
      "Heat oil in a pan and sauté onion and rice until aromatic.",
      "Add ginger, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 11,
    "title": "Rustic Mushroom Rice",
    "description": "Wholesome meal made with peas and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "30 min",
    "prepTime": "16 min",
    "cookTime": "14 min",
    "totalTime": "30 min",
    "servings": 1,
    "rating": 4.6,
    "reviews": 361,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Peas",
      "Basil",
      "Potato",
      "Tofu",
      "Lentils",
      "Ginger",
      "Milk"
    ],
    "nutrition": {
      "calories": "421 kcal",
      "protein": "37 g",
      "carbs": "43 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic mushroom rice and keep them ready.",
      "Heat oil in a pan and sauté peas and basil until aromatic.",
      "Add potato, tofu, lentils and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 12,
    "title": "Herbed Potato Stir Fry",
    "description": "Quick recipe made with corn and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "21 min",
    "prepTime": "5 min",
    "cookTime": "16 min",
    "totalTime": "21 min",
    "servings": 1,
    "rating": 4.6,
    "reviews": 102,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Corn",
      "Onion",
      "Chicken",
      "Lentils"
    ],
    "nutrition": {
      "calories": "287 kcal",
      "protein": "45 g",
      "carbs": "37 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté corn and onion until aromatic.",
      "Add chicken, lentils and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 13,
    "title": "Savory Chickpea Curry",
    "description": "Hearty meal made with flour and oats for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "19 min",
    "cookTime": "21 min",
    "totalTime": "40 min",
    "servings": 2,
    "rating": 4.7,
    "reviews": 235,
    "tags": [
      "Street Food",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Flour",
      "Oats",
      "Chickpeas",
      "Carrot",
      "Ginger",
      "Garlic",
      "Paneer"
    ],
    "nutrition": {
      "calories": "377 kcal",
      "protein": "38 g",
      "carbs": "51 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for savory chickpea curry and keep them ready.",
      "Heat oil in a pan and sauté flour and oats until aromatic.",
      "Add chickpeas, carrot, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 14,
    "title": "Herbed Cheese Toast",
    "description": "Comforting dish made with soy sauce and oats for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "26 min",
    "prepTime": "15 min",
    "cookTime": "11 min",
    "totalTime": "26 min",
    "servings": 4,
    "rating": 4.6,
    "reviews": 127,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Soy Sauce",
      "Oats",
      "Egg",
      "Corn",
      "Chickpeas",
      "Cheese"
    ],
    "nutrition": {
      "calories": "347 kcal",
      "protein": "47 g",
      "carbs": "39 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed cheese toast and keep them ready.",
      "Heat oil in a pan and sauté soy sauce and oats until aromatic.",
      "Add egg, corn, chickpeas and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 15,
    "title": "Spicy Garlic Fried Rice",
    "description": "Wholesome dish made with spinach and capsicum for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "24 min",
    "prepTime": "6 min",
    "cookTime": "18 min",
    "totalTime": "24 min",
    "servings": 5,
    "rating": 4.8,
    "reviews": 215,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Spinach",
      "Capsicum",
      "Coconut Milk",
      "Chicken"
    ],
    "nutrition": {
      "calories": "273 kcal",
      "protein": "35 g",
      "carbs": "37 g",
      "fats": "9 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté spinach and capsicum until aromatic.",
      "Add coconut milk, chicken and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 16,
    "title": "Savory Basil Rice",
    "description": "Comforting dish made with corn and paneer for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "23 min",
    "prepTime": "12 min",
    "cookTime": "11 min",
    "totalTime": "23 min",
    "servings": 4,
    "rating": 4.8,
    "reviews": 65,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Corn",
      "Paneer",
      "Potato",
      "Spinach",
      "Cream",
      "Chicken",
      "Lentils"
    ],
    "nutrition": {
      "calories": "400 kcal",
      "protein": "62 g",
      "carbs": "49 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for savory basil rice and keep them ready.",
      "Heat oil in a pan and sauté corn and paneer until aromatic.",
      "Add potato, spinach, cream and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 17,
    "title": "Creamy Oats Upma",
    "description": "Flavorful meal made with basil and potato for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "22 min",
    "prepTime": "8 min",
    "cookTime": "14 min",
    "totalTime": "22 min",
    "servings": 5,
    "rating": 4.6,
    "reviews": 287,
    "tags": [
      "Fusion",
      "Vegan",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Basil",
      "Potato",
      "Spinach",
      "Soya Chunks"
    ],
    "nutrition": {
      "calories": "290 kcal",
      "protein": "29 g",
      "carbs": "19 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy oats upma and keep them ready.",
      "Heat oil in a pan and sauté basil and potato until aromatic.",
      "Add spinach, soya chunks and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 18,
    "title": "Sizzling Oats Upma",
    "description": "Flavorful dish made with cream and tomato for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "26 min",
    "prepTime": "15 min",
    "cookTime": "11 min",
    "totalTime": "26 min",
    "servings": 4,
    "rating": 4.4,
    "reviews": 162,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Cream",
      "Tomato",
      "Coconut Milk",
      "Beans",
      "Onion"
    ],
    "nutrition": {
      "calories": "294 kcal",
      "protein": "16 g",
      "carbs": "25 g",
      "fats": "11 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling oats upma and keep them ready.",
      "Heat oil in a pan and sauté cream and tomato until aromatic.",
      "Add coconut milk, beans, onion and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 19,
    "title": "Herbed Veg Pulao",
    "description": "Comforting meal made with paneer and beans for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "20 min",
    "prepTime": "7 min",
    "cookTime": "13 min",
    "totalTime": "20 min",
    "servings": 2,
    "rating": 4.5,
    "reviews": 60,
    "tags": [
      "Street Food",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Paneer",
      "Beans",
      "Soy Sauce",
      "Butter",
      "Garlic",
      "Ginger",
      "Peas"
    ],
    "nutrition": {
      "calories": "407 kcal",
      "protein": "35 g",
      "carbs": "48 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed veg pulao and keep them ready.",
      "Heat oil in a pan and sauté paneer and beans until aromatic.",
      "Add soy sauce, butter, garlic and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 20,
    "title": "Fresh Soya Masala",
    "description": "Quick recipe made with lentils and spinach for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "27 min",
    "prepTime": "17 min",
    "cookTime": "10 min",
    "totalTime": "27 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 158,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Lentils",
      "Spinach",
      "Basil",
      "Tofu",
      "Peas",
      "Beans",
      "Coconut Milk"
    ],
    "nutrition": {
      "calories": "389 kcal",
      "protein": "41 g",
      "carbs": "42 g",
      "fats": "11 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh soya masala and keep them ready.",
      "Heat oil in a pan and sauté lentils and spinach until aromatic.",
      "Add basil, tofu, peas and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 21,
    "title": "Rustic Paneer Wrap",
    "description": "Comforting dish made with green chili and lentils for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "17 min",
    "cookTime": "21 min",
    "totalTime": "38 min",
    "servings": 1,
    "rating": 4.4,
    "reviews": 182,
    "tags": [
      "Indian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Green Chili",
      "Lentils",
      "Egg",
      "Butter"
    ],
    "nutrition": {
      "calories": "291 kcal",
      "protein": "31 g",
      "carbs": "28 g",
      "fats": "8 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic paneer wrap and keep them ready.",
      "Heat oil in a pan and sauté green chili and lentils until aromatic.",
      "Add egg, butter and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 22,
    "title": "Peppery Capsicum Masala",
    "description": "Comforting meal made with ginger and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "25 min",
    "prepTime": "15 min",
    "cookTime": "10 min",
    "totalTime": "25 min",
    "servings": 2,
    "rating": 4.4,
    "reviews": 314,
    "tags": [
      "Indian",
      "Vegan",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Ginger",
      "Basil",
      "Mushroom",
      "Peas",
      "Beans"
    ],
    "nutrition": {
      "calories": "317 kcal",
      "protein": "17 g",
      "carbs": "37 g",
      "fats": "8 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté ginger and basil until aromatic.",
      "Add mushroom, peas, beans and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 23,
    "title": "Fresh Chickpea Curry",
    "description": "Flavorful meal made with capsicum and garlic for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "8 min",
    "cookTime": "32 min",
    "totalTime": "40 min",
    "servings": 4,
    "rating": 4.6,
    "reviews": 230,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Garlic",
      "Potato",
      "Cream",
      "Tofu"
    ],
    "nutrition": {
      "calories": "294 kcal",
      "protein": "23 g",
      "carbs": "35 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh chickpea curry and keep them ready.",
      "Heat oil in a pan and sauté capsicum and garlic until aromatic.",
      "Add potato, cream, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 24,
    "title": "Rustic Chickpea Curry",
    "description": "Comforting recipe made with corn and lentils for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "49 min",
    "prepTime": "19 min",
    "cookTime": "30 min",
    "totalTime": "49 min",
    "servings": 4,
    "rating": 4.1,
    "reviews": 211,
    "tags": [
      "Street Food",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Corn",
      "Lentils",
      "Mushroom",
      "Capsicum",
      "Carrot"
    ],
    "nutrition": {
      "calories": "322 kcal",
      "protein": "20 g",
      "carbs": "34 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic chickpea curry and keep them ready.",
      "Heat oil in a pan and sauté corn and lentils until aromatic.",
      "Add mushroom, capsicum, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 25,
    "title": "Smoky Bean Stew",
    "description": "Wholesome meal made with lentils and green chili for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "42 min",
    "prepTime": "12 min",
    "cookTime": "30 min",
    "totalTime": "42 min",
    "servings": 3,
    "rating": 4.9,
    "reviews": 383,
    "tags": [
      "Street Food",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Lentils",
      "Green Chili",
      "Spinach",
      "Corn"
    ],
    "nutrition": {
      "calories": "278 kcal",
      "protein": "15 g",
      "carbs": "23 g",
      "fats": "12 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky bean stew and keep them ready.",
      "Heat oil in a pan and sauté lentils and green chili until aromatic.",
      "Add spinach, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 26,
    "title": "Peppery Potato Stir Fry",
    "description": "Hearty recipe made with lentils and peas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "44 min",
    "prepTime": "10 min",
    "cookTime": "34 min",
    "totalTime": "44 min",
    "servings": 1,
    "rating": 4.5,
    "reviews": 201,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Lentils",
      "Peas",
      "Ginger",
      "Soy Sauce",
      "Corn"
    ],
    "nutrition": {
      "calories": "309 kcal",
      "protein": "18 g",
      "carbs": "40 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté lentils and peas until aromatic.",
      "Add ginger, soy sauce, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 27,
    "title": "Classic Veg Pulao",
    "description": "Comforting dish made with oats and peas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "46 min",
    "prepTime": "15 min",
    "cookTime": "31 min",
    "totalTime": "46 min",
    "servings": 2,
    "rating": 4.6,
    "reviews": 163,
    "tags": [
      "Street Food",
      "Vegan"
    ],
    "ingredients": [
      "Oats",
      "Peas",
      "Capsicum",
      "Green Chili",
      "Spinach"
    ],
    "nutrition": {
      "calories": "363 kcal",
      "protein": "5 g",
      "carbs": "30 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for classic veg pulao and keep them ready.",
      "Heat oil in a pan and sauté oats and peas until aromatic.",
      "Add capsicum, green chili, spinach and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 28,
    "title": "Savory Oats Upma",
    "description": "Quick recipe made with milk and oats for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "33 min",
    "prepTime": "16 min",
    "cookTime": "17 min",
    "totalTime": "33 min",
    "servings": 6,
    "rating": 4.5,
    "reviews": 262,
    "tags": [
      "Indian",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Milk",
      "Oats",
      "Spinach",
      "Onion",
      "Beans",
      "Chicken",
      "Coconut Milk"
    ],
    "nutrition": {
      "calories": "406 kcal",
      "protein": "44 g",
      "carbs": "48 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for savory oats upma and keep them ready.",
      "Heat oil in a pan and sauté milk and oats until aromatic.",
      "Add spinach, onion, beans and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 29,
    "title": "Classic Soya Masala",
    "description": "Hearty recipe made with flour and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "29 min",
    "prepTime": "5 min",
    "cookTime": "24 min",
    "totalTime": "29 min",
    "servings": 1,
    "rating": 4.8,
    "reviews": 206,
    "tags": [
      "Italian",
      "Vegan"
    ],
    "ingredients": [
      "Flour",
      "Mushroom",
      "Coconut Milk",
      "Carrot"
    ],
    "nutrition": {
      "calories": "286 kcal",
      "protein": "9 g",
      "carbs": "26 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for classic soya masala and keep them ready.",
      "Heat oil in a pan and sauté flour and mushroom until aromatic.",
      "Add coconut milk, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 30,
    "title": "Rustic Lentil Soup",
    "description": "Hearty meal made with chicken and egg for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "50 min",
    "prepTime": "20 min",
    "cookTime": "30 min",
    "totalTime": "50 min",
    "servings": 4,
    "rating": 4.7,
    "reviews": 210,
    "tags": [
      "Indian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Chicken",
      "Egg",
      "Spinach",
      "Beans",
      "Flour"
    ],
    "nutrition": {
      "calories": "319 kcal",
      "protein": "59 g",
      "carbs": "41 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic lentil soup and keep them ready.",
      "Heat oil in a pan and sauté chicken and egg until aromatic.",
      "Add spinach, beans, flour and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 31,
    "title": "Sizzling Basil Rice",
    "description": "Comforting dish made with chickpeas and milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "16 min",
    "cookTime": "24 min",
    "totalTime": "40 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 131,
    "tags": [
      "Street Food",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Chickpeas",
      "Milk",
      "Peas",
      "Onion"
    ],
    "nutrition": {
      "calories": "279 kcal",
      "protein": "17 g",
      "carbs": "29 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling basil rice and keep them ready.",
      "Heat oil in a pan and sauté chickpeas and milk until aromatic.",
      "Add peas, onion and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 32,
    "title": "Spicy Tofu Bowl",
    "description": "Flavorful dish made with lentils and flour for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "30 min",
    "prepTime": "10 min",
    "cookTime": "20 min",
    "totalTime": "30 min",
    "servings": 1,
    "rating": 4.4,
    "reviews": 102,
    "tags": [
      "Asian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Lentils",
      "Flour",
      "Mushroom",
      "Capsicum",
      "Beans"
    ],
    "nutrition": {
      "calories": "332 kcal",
      "protein": "26 g",
      "carbs": "41 g",
      "fats": "8 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté lentils and flour until aromatic.",
      "Add mushroom, capsicum, beans and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 33,
    "title": "Herbed Basil Rice",
    "description": "Hearty recipe made with soya chunks and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "47 min",
    "prepTime": "14 min",
    "cookTime": "33 min",
    "totalTime": "47 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 161,
    "tags": [
      "Asian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Soya Chunks",
      "Mushroom",
      "Coconut Milk",
      "Chickpeas",
      "Potato",
      "Chicken",
      "Soy Sauce"
    ],
    "nutrition": {
      "calories": "386 kcal",
      "protein": "70 g",
      "carbs": "41 g",
      "fats": "21 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed basil rice and keep them ready.",
      "Heat oil in a pan and sauté soya chunks and mushroom until aromatic.",
      "Add coconut milk, chickpeas, potato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 34,
    "title": "Peppery Tomato Pasta",
    "description": "Wholesome meal made with corn and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "30 min",
    "prepTime": "7 min",
    "cookTime": "23 min",
    "totalTime": "30 min",
    "servings": 4,
    "rating": 4.6,
    "reviews": 132,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Corn",
      "Basil",
      "Spinach",
      "Onion",
      "Coconut Milk",
      "Egg",
      "Flour"
    ],
    "nutrition": {
      "calories": "389 kcal",
      "protein": "28 g",
      "carbs": "47 g",
      "fats": "21 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery tomato pasta and keep them ready.",
      "Heat oil in a pan and sauté corn and basil until aromatic.",
      "Add spinach, onion, coconut milk and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 35,
    "title": "Zesty Tofu Bowl",
    "description": "Hearty meal made with chicken and soya chunks for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "45 min",
    "prepTime": "12 min",
    "cookTime": "33 min",
    "totalTime": "45 min",
    "servings": 2,
    "rating": 4.3,
    "reviews": 353,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Chicken",
      "Soya Chunks",
      "Egg",
      "Lentils",
      "Potato",
      "Butter"
    ],
    "nutrition": {
      "calories": "351 kcal",
      "protein": "82 g",
      "carbs": "37 g",
      "fats": "25 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté chicken and soya chunks until aromatic.",
      "Add egg, lentils, potato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 36,
    "title": "Loaded Chicken Skillet",
    "description": "Wholesome dish made with spinach and coconut milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "27 min",
    "prepTime": "10 min",
    "cookTime": "17 min",
    "totalTime": "27 min",
    "servings": 6,
    "rating": 4.3,
    "reviews": 265,
    "tags": [
      "Fusion",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Spinach",
      "Coconut Milk",
      "Capsicum",
      "Lentils",
      "Tofu"
    ],
    "nutrition": {
      "calories": "302 kcal",
      "protein": "34 g",
      "carbs": "37 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté spinach and coconut milk until aromatic.",
      "Add capsicum, lentils, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 37,
    "title": "Savory Mushroom Rice",
    "description": "Flavorful recipe made with soy sauce and potato for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "35 min",
    "prepTime": "18 min",
    "cookTime": "17 min",
    "totalTime": "35 min",
    "servings": 1,
    "rating": 4.8,
    "reviews": 378,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Soy Sauce",
      "Potato",
      "Egg",
      "Lentils"
    ],
    "nutrition": {
      "calories": "278 kcal",
      "protein": "34 g",
      "carbs": "28 g",
      "fats": "11 g"
    },
    "instructions": [
      "Prepare the ingredients for savory mushroom rice and keep them ready.",
      "Heat oil in a pan and sauté soy sauce and potato until aromatic.",
      "Add egg, lentils and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 38,
    "title": "Tangy Garlic Fried Rice",
    "description": "Quick meal made with butter and chicken for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "41 min",
    "prepTime": "11 min",
    "cookTime": "30 min",
    "totalTime": "41 min",
    "servings": 3,
    "rating": 4.2,
    "reviews": 260,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Butter",
      "Chicken",
      "Garlic",
      "Capsicum",
      "Corn"
    ],
    "nutrition": {
      "calories": "323 kcal",
      "protein": "34 g",
      "carbs": "20 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté butter and chicken until aromatic.",
      "Add garlic, capsicum, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 39,
    "title": "Peppery Basil Rice",
    "description": "Hearty recipe made with egg and chickpeas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "34 min",
    "prepTime": "15 min",
    "cookTime": "19 min",
    "totalTime": "34 min",
    "servings": 6,
    "rating": 4.3,
    "reviews": 380,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Egg",
      "Chickpeas",
      "Tofu",
      "Basil",
      "Chicken"
    ],
    "nutrition": {
      "calories": "277 kcal",
      "protein": "74 g",
      "carbs": "38 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery basil rice and keep them ready.",
      "Heat oil in a pan and sauté egg and chickpeas until aromatic.",
      "Add tofu, basil, chicken and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 40,
    "title": "Zesty Egg Bhurji",
    "description": "Wholesome recipe made with cream and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "32 min",
    "prepTime": "18 min",
    "cookTime": "14 min",
    "totalTime": "32 min",
    "servings": 4,
    "rating": 4.7,
    "reviews": 62,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Cream",
      "Mushroom",
      "Potato",
      "Cheese",
      "Soy Sauce"
    ],
    "nutrition": {
      "calories": "335 kcal",
      "protein": "20 g",
      "carbs": "36 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty egg bhurji and keep them ready.",
      "Heat oil in a pan and sauté cream and mushroom until aromatic.",
      "Add potato, cheese, soy sauce and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 41,
    "title": "Zesty Soya Masala",
    "description": "Hearty recipe made with coconut milk and lentils for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "49 min",
    "prepTime": "15 min",
    "cookTime": "34 min",
    "totalTime": "49 min",
    "servings": 1,
    "rating": 4.5,
    "reviews": 379,
    "tags": [
      "Homestyle",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Coconut Milk",
      "Lentils",
      "Rice",
      "Tofu"
    ],
    "nutrition": {
      "calories": "253 kcal",
      "protein": "31 g",
      "carbs": "23 g",
      "fats": "6 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty soya masala and keep them ready.",
      "Heat oil in a pan and sauté coconut milk and lentils until aromatic.",
      "Add rice, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 42,
    "title": "Tangy Corn Salad",
    "description": "Wholesome dish made with flour and peas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "48 min",
    "prepTime": "20 min",
    "cookTime": "28 min",
    "totalTime": "48 min",
    "servings": 4,
    "rating": 4.2,
    "reviews": 92,
    "tags": [
      "Homestyle",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Flour",
      "Peas",
      "Potato",
      "Oats",
      "Coconut Milk",
      "Soya Chunks",
      "Spinach"
    ],
    "nutrition": {
      "calories": "373 kcal",
      "protein": "34 g",
      "carbs": "42 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy corn salad and keep them ready.",
      "Heat oil in a pan and sauté flour and peas until aromatic.",
      "Add potato, oats, coconut milk and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 43,
    "title": "Loaded Tomato Pasta",
    "description": "Quick meal made with onion and lentils for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "34 min",
    "prepTime": "17 min",
    "cookTime": "17 min",
    "totalTime": "34 min",
    "servings": 5,
    "rating": 4.3,
    "reviews": 283,
    "tags": [
      "Mediterranean",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Onion",
      "Lentils",
      "Capsicum",
      "Oats",
      "Corn",
      "Tofu"
    ],
    "nutrition": {
      "calories": "340 kcal",
      "protein": "32 g",
      "carbs": "36 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded tomato pasta and keep them ready.",
      "Heat oil in a pan and sauté onion and lentils until aromatic.",
      "Add capsicum, oats, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 44,
    "title": "Rustic Tomato Pasta",
    "description": "Flavorful dish made with cream and corn for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "39 min",
    "prepTime": "19 min",
    "cookTime": "20 min",
    "totalTime": "39 min",
    "servings": 6,
    "rating": 4.2,
    "reviews": 378,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Cream",
      "Corn",
      "Onion",
      "Cheese",
      "Rice",
      "Capsicum"
    ],
    "nutrition": {
      "calories": "353 kcal",
      "protein": "25 g",
      "carbs": "48 g",
      "fats": "21 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic tomato pasta and keep them ready.",
      "Heat oil in a pan and sauté cream and corn until aromatic.",
      "Add onion, cheese, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 45,
    "title": "Savory Capsicum Masala",
    "description": "Hearty meal made with soya chunks and corn for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "23 min",
    "prepTime": "9 min",
    "cookTime": "14 min",
    "totalTime": "23 min",
    "servings": 6,
    "rating": 4.9,
    "reviews": 122,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Soya Chunks",
      "Corn",
      "Carrot",
      "Egg"
    ],
    "nutrition": {
      "calories": "258 kcal",
      "protein": "44 g",
      "carbs": "24 g",
      "fats": "12 g"
    },
    "instructions": [
      "Prepare the ingredients for savory capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté soya chunks and corn until aromatic.",
      "Add carrot, egg and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 46,
    "title": "Classic Basil Rice",
    "description": "Wholesome dish made with cheese and cream for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "50 min",
    "prepTime": "19 min",
    "cookTime": "31 min",
    "totalTime": "50 min",
    "servings": 1,
    "rating": 4.3,
    "reviews": 407,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Cheese",
      "Cream",
      "Soy Sauce",
      "Basil"
    ],
    "nutrition": {
      "calories": "275 kcal",
      "protein": "23 g",
      "carbs": "23 g",
      "fats": "9 g"
    },
    "instructions": [
      "Prepare the ingredients for classic basil rice and keep them ready.",
      "Heat oil in a pan and sauté cheese and cream until aromatic.",
      "Add soy sauce, basil and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 47,
    "title": "Rustic Egg Bhurji",
    "description": "Comforting dish made with rice and coconut milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "36 min",
    "prepTime": "12 min",
    "cookTime": "24 min",
    "totalTime": "36 min",
    "servings": 3,
    "rating": 4.3,
    "reviews": 132,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Rice",
      "Coconut Milk",
      "Butter",
      "Basil",
      "Cream",
      "Beans",
      "Garlic"
    ],
    "nutrition": {
      "calories": "319 kcal",
      "protein": "21 g",
      "carbs": "47 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic egg bhurji and keep them ready.",
      "Heat oil in a pan and sauté rice and coconut milk until aromatic.",
      "Add butter, basil, cream and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 48,
    "title": "Savory Veg Pulao",
    "description": "Comforting meal made with peas and coconut milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "49 min",
    "prepTime": "14 min",
    "cookTime": "35 min",
    "totalTime": "49 min",
    "servings": 4,
    "rating": 4.8,
    "reviews": 220,
    "tags": [
      "Fusion",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Peas",
      "Coconut Milk",
      "Chicken",
      "Ginger"
    ],
    "nutrition": {
      "calories": "261 kcal",
      "protein": "38 g",
      "carbs": "25 g",
      "fats": "10 g"
    },
    "instructions": [
      "Prepare the ingredients for savory veg pulao and keep them ready.",
      "Heat oil in a pan and sauté peas and coconut milk until aromatic.",
      "Add chicken, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 49,
    "title": "Rustic Oats Upma",
    "description": "Flavorful recipe made with soy sauce and chicken for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "17 min",
    "cookTime": "21 min",
    "totalTime": "38 min",
    "servings": 2,
    "rating": 4.1,
    "reviews": 328,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Soy Sauce",
      "Chicken",
      "Cream",
      "Milk",
      "Carrot",
      "Chickpeas",
      "Peas"
    ],
    "nutrition": {
      "calories": "405 kcal",
      "protein": "51 g",
      "carbs": "38 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic oats upma and keep them ready.",
      "Heat oil in a pan and sauté soy sauce and chicken until aromatic.",
      "Add cream, milk, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 50,
    "title": "Classic Corn Salad",
    "description": "Wholesome recipe made with oats and cream for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "33 min",
    "prepTime": "18 min",
    "cookTime": "15 min",
    "totalTime": "33 min",
    "servings": 2,
    "rating": 4.3,
    "reviews": 247,
    "tags": [
      "Fusion",
      "Vegetarian"
    ],
    "ingredients": [
      "Oats",
      "Cream",
      "Butter",
      "Tomato"
    ],
    "nutrition": {
      "calories": "270 kcal",
      "protein": "7 g",
      "carbs": "26 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for classic corn salad and keep them ready.",
      "Heat oil in a pan and sauté oats and cream until aromatic.",
      "Add butter, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 51,
    "title": "Classic Tomato Pasta",
    "description": "Flavorful dish made with green chili and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "45 min",
    "prepTime": "19 min",
    "cookTime": "26 min",
    "totalTime": "45 min",
    "servings": 3,
    "rating": 4.8,
    "reviews": 339,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Green Chili",
      "Onion",
      "Peas",
      "Chicken",
      "Garlic",
      "Cream"
    ],
    "nutrition": {
      "calories": "343 kcal",
      "protein": "40 g",
      "carbs": "30 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for classic tomato pasta and keep them ready.",
      "Heat oil in a pan and sauté green chili and onion until aromatic.",
      "Add peas, chicken, garlic and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 52,
    "title": "Rustic Capsicum Masala",
    "description": "Quick dish made with cream and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "30 min",
    "prepTime": "10 min",
    "cookTime": "20 min",
    "totalTime": "30 min",
    "servings": 6,
    "rating": 4.4,
    "reviews": 401,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Cream",
      "Mushroom",
      "Soya Chunks",
      "Garlic",
      "Carrot",
      "Tofu"
    ],
    "nutrition": {
      "calories": "356 kcal",
      "protein": "46 g",
      "carbs": "42 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté cream and mushroom until aromatic.",
      "Add soya chunks, garlic, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 53,
    "title": "Smoky Oats Upma",
    "description": "Flavorful meal made with potato and capsicum for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "32 min",
    "prepTime": "11 min",
    "cookTime": "21 min",
    "totalTime": "32 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 87,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Potato",
      "Capsicum",
      "Tofu",
      "Paneer",
      "Oats",
      "Onion"
    ],
    "nutrition": {
      "calories": "368 kcal",
      "protein": "40 g",
      "carbs": "27 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky oats upma and keep them ready.",
      "Heat oil in a pan and sauté potato and capsicum until aromatic.",
      "Add tofu, paneer, oats and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 54,
    "title": "Classic Mushroom Rice",
    "description": "Wholesome dish made with rice and green chili for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "26 min",
    "prepTime": "8 min",
    "cookTime": "18 min",
    "totalTime": "26 min",
    "servings": 5,
    "rating": 4.2,
    "reviews": 342,
    "tags": [
      "Homestyle",
      "Vegetarian"
    ],
    "ingredients": [
      "Rice",
      "Green Chili",
      "Soy Sauce",
      "Cream",
      "Corn"
    ],
    "nutrition": {
      "calories": "295 kcal",
      "protein": "8 g",
      "carbs": "34 g",
      "fats": "10 g"
    },
    "instructions": [
      "Prepare the ingredients for classic mushroom rice and keep them ready.",
      "Heat oil in a pan and sauté rice and green chili until aromatic.",
      "Add soy sauce, cream, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 55,
    "title": "Golden Cheese Toast",
    "description": "Wholesome meal made with spinach and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "25 min",
    "prepTime": "12 min",
    "cookTime": "13 min",
    "totalTime": "25 min",
    "servings": 5,
    "rating": 4.3,
    "reviews": 227,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Spinach",
      "Basil",
      "Onion",
      "Potato",
      "Rice",
      "Green Chili",
      "Soya Chunks"
    ],
    "nutrition": {
      "calories": "392 kcal",
      "protein": "37 g",
      "carbs": "56 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for golden cheese toast and keep them ready.",
      "Heat oil in a pan and sauté spinach and basil until aromatic.",
      "Add onion, potato, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 56,
    "title": "Classic Potato Stir Fry",
    "description": "Wholesome meal made with cheese and flour for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "23 min",
    "prepTime": "7 min",
    "cookTime": "16 min",
    "totalTime": "23 min",
    "servings": 6,
    "rating": 4.8,
    "reviews": 278,
    "tags": [
      "Homestyle",
      "Non-Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Cheese",
      "Flour",
      "Soy Sauce",
      "Chicken"
    ],
    "nutrition": {
      "calories": "258 kcal",
      "protein": "50 g",
      "carbs": "25 g",
      "fats": "6 g"
    },
    "instructions": [
      "Prepare the ingredients for classic potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté cheese and flour until aromatic.",
      "Add soy sauce, chicken and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 57,
    "title": "Sizzling Chicken Skillet",
    "description": "Flavorful meal made with capsicum and cream for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "37 min",
    "prepTime": "9 min",
    "cookTime": "28 min",
    "totalTime": "37 min",
    "servings": 5,
    "rating": 4.8,
    "reviews": 372,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Cream",
      "Carrot",
      "Soya Chunks",
      "Ginger"
    ],
    "nutrition": {
      "calories": "295 kcal",
      "protein": "33 g",
      "carbs": "31 g",
      "fats": "11 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté capsicum and cream until aromatic.",
      "Add carrot, soya chunks, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 58,
    "title": "Peppery Garlic Fried Rice",
    "description": "Flavorful dish made with green chili and beans for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "27 min",
    "prepTime": "8 min",
    "cookTime": "19 min",
    "totalTime": "27 min",
    "servings": 5,
    "rating": 4.3,
    "reviews": 235,
    "tags": [
      "Homestyle",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Green Chili",
      "Beans",
      "Flour",
      "Rice"
    ],
    "nutrition": {
      "calories": "301 kcal",
      "protein": "15 g",
      "carbs": "33 g",
      "fats": "11 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté green chili and beans until aromatic.",
      "Add flour, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 59,
    "title": "Peppery Chicken Skillet",
    "description": "Quick meal made with coconut milk and flour for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "39 min",
    "prepTime": "10 min",
    "cookTime": "29 min",
    "totalTime": "39 min",
    "servings": 4,
    "rating": 4.5,
    "reviews": 190,
    "tags": [
      "Street Food",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Coconut Milk",
      "Flour",
      "Ginger",
      "Milk",
      "Potato",
      "Lentils",
      "Beans"
    ],
    "nutrition": {
      "calories": "354 kcal",
      "protein": "28 g",
      "carbs": "56 g",
      "fats": "24 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté coconut milk and flour until aromatic.",
      "Add ginger, milk, potato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 60,
    "title": "Tangy Veg Noodles",
    "description": "Comforting dish made with capsicum and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "36 min",
    "prepTime": "11 min",
    "cookTime": "25 min",
    "totalTime": "36 min",
    "servings": 4,
    "rating": 4.6,
    "reviews": 183,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Carrot",
      "Milk",
      "Chickpeas",
      "Soy Sauce"
    ],
    "nutrition": {
      "calories": "319 kcal",
      "protein": "20 g",
      "carbs": "23 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy veg noodles and keep them ready.",
      "Heat oil in a pan and sauté capsicum and carrot until aromatic.",
      "Add milk, chickpeas, soy sauce and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 61,
    "title": "Zesty Cheese Toast",
    "description": "Hearty dish made with peas and paneer for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "20 min",
    "prepTime": "5 min",
    "cookTime": "15 min",
    "totalTime": "20 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 384,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Peas",
      "Paneer",
      "Cream",
      "Potato",
      "Tomato",
      "Rice"
    ],
    "nutrition": {
      "calories": "372 kcal",
      "protein": "31 g",
      "carbs": "43 g",
      "fats": "30 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty cheese toast and keep them ready.",
      "Heat oil in a pan and sauté peas and paneer until aromatic.",
      "Add cream, potato, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 62,
    "title": "Fresh Tofu Bowl",
    "description": "Quick meal made with butter and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "25 min",
    "prepTime": "13 min",
    "cookTime": "12 min",
    "totalTime": "25 min",
    "servings": 1,
    "rating": 4.3,
    "reviews": 141,
    "tags": [
      "Street Food",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Butter",
      "Carrot",
      "Lentils",
      "Mushroom",
      "Beans",
      "Spinach"
    ],
    "nutrition": {
      "calories": "361 kcal",
      "protein": "25 g",
      "carbs": "42 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté butter and carrot until aromatic.",
      "Add lentils, mushroom, beans and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 63,
    "title": "Loaded Chickpea Curry",
    "description": "Hearty recipe made with spinach and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "36 min",
    "prepTime": "8 min",
    "cookTime": "28 min",
    "totalTime": "36 min",
    "servings": 6,
    "rating": 4.4,
    "reviews": 182,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Spinach",
      "Mushroom",
      "Flour",
      "Tofu"
    ],
    "nutrition": {
      "calories": "253 kcal",
      "protein": "24 g",
      "carbs": "28 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded chickpea curry and keep them ready.",
      "Heat oil in a pan and sauté spinach and mushroom until aromatic.",
      "Add flour, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 64,
    "title": "Creamy Veg Noodles",
    "description": "Flavorful recipe made with oats and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "32 min",
    "prepTime": "7 min",
    "cookTime": "25 min",
    "totalTime": "32 min",
    "servings": 6,
    "rating": 4.9,
    "reviews": 301,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Oats",
      "Carrot",
      "Basil",
      "Potato",
      "Garlic",
      "Chickpeas",
      "Milk"
    ],
    "nutrition": {
      "calories": "409 kcal",
      "protein": "27 g",
      "carbs": "54 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy veg noodles and keep them ready.",
      "Heat oil in a pan and sauté oats and carrot until aromatic.",
      "Add basil, potato, garlic and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 65,
    "title": "Herbed Chickpea Curry",
    "description": "Flavorful recipe made with corn and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "37 min",
    "prepTime": "15 min",
    "cookTime": "22 min",
    "totalTime": "37 min",
    "servings": 1,
    "rating": 4.1,
    "reviews": 405,
    "tags": [
      "Homestyle",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Corn",
      "Mushroom",
      "Green Chili",
      "Basil",
      "Spinach",
      "Chickpeas",
      "Carrot"
    ],
    "nutrition": {
      "calories": "391 kcal",
      "protein": "14 g",
      "carbs": "44 g",
      "fats": "21 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed chickpea curry and keep them ready.",
      "Heat oil in a pan and sauté corn and mushroom until aromatic.",
      "Add green chili, basil, spinach and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 66,
    "title": "Herbed Paneer Wrap",
    "description": "Comforting recipe made with flour and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "20 min",
    "prepTime": "7 min",
    "cookTime": "13 min",
    "totalTime": "20 min",
    "servings": 3,
    "rating": 4.7,
    "reviews": 262,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "Quick"
    ],
    "ingredients": [
      "Flour",
      "Onion",
      "Basil",
      "Spinach",
      "Butter"
    ],
    "nutrition": {
      "calories": "308 kcal",
      "protein": "11 g",
      "carbs": "32 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed paneer wrap and keep them ready.",
      "Heat oil in a pan and sauté flour and onion until aromatic.",
      "Add basil, spinach, butter and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 67,
    "title": "Golden Garlic Fried Rice",
    "description": "Quick meal made with chickpeas and chicken for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "35 min",
    "prepTime": "13 min",
    "cookTime": "22 min",
    "totalTime": "35 min",
    "servings": 4,
    "rating": 4.8,
    "reviews": 403,
    "tags": [
      "Fusion",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Chickpeas",
      "Chicken",
      "Lentils",
      "Spinach",
      "Coconut Milk",
      "Egg"
    ],
    "nutrition": {
      "calories": "357 kcal",
      "protein": "71 g",
      "carbs": "40 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for golden garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté chickpeas and chicken until aromatic.",
      "Add lentils, spinach, coconut milk and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 68,
    "title": "Roasted Spinach Pasta",
    "description": "Wholesome dish made with cheese and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "12 min",
    "cookTime": "26 min",
    "totalTime": "38 min",
    "servings": 5,
    "rating": 4.7,
    "reviews": 177,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Cheese",
      "Mushroom",
      "Butter",
      "Carrot"
    ],
    "nutrition": {
      "calories": "280 kcal",
      "protein": "24 g",
      "carbs": "23 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for roasted spinach pasta and keep them ready.",
      "Heat oil in a pan and sauté cheese and mushroom until aromatic.",
      "Add butter, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 69,
    "title": "Classic Egg Bhurji",
    "description": "Hearty dish made with oats and tomato for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "32 min",
    "prepTime": "16 min",
    "cookTime": "16 min",
    "totalTime": "32 min",
    "servings": 3,
    "rating": 4.8,
    "reviews": 415,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Oats",
      "Tomato",
      "Rice",
      "Cheese",
      "Tofu",
      "Butter"
    ],
    "nutrition": {
      "calories": "330 kcal",
      "protein": "35 g",
      "carbs": "36 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for classic egg bhurji and keep them ready.",
      "Heat oil in a pan and sauté oats and tomato until aromatic.",
      "Add rice, cheese, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 70,
    "title": "Peppery Lentil Soup",
    "description": "Comforting meal made with peas and oats for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "50 min",
    "prepTime": "18 min",
    "cookTime": "32 min",
    "totalTime": "50 min",
    "servings": 2,
    "rating": 4.9,
    "reviews": 185,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Peas",
      "Oats",
      "Capsicum",
      "Lentils",
      "Flour"
    ],
    "nutrition": {
      "calories": "269 kcal",
      "protein": "15 g",
      "carbs": "31 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery lentil soup and keep them ready.",
      "Heat oil in a pan and sauté peas and oats until aromatic.",
      "Add capsicum, lentils, flour and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 71,
    "title": "Classic Capsicum Masala",
    "description": "Hearty dish made with beans and tomato for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "26 min",
    "prepTime": "16 min",
    "cookTime": "10 min",
    "totalTime": "26 min",
    "servings": 2,
    "rating": 4.2,
    "reviews": 256,
    "tags": [
      "Italian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Beans",
      "Tomato",
      "Green Chili",
      "Tofu",
      "Cream",
      "Potato"
    ],
    "nutrition": {
      "calories": "353 kcal",
      "protein": "36 g",
      "carbs": "32 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for classic capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté beans and tomato until aromatic.",
      "Add green chili, tofu, cream and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 72,
    "title": "Loaded Veg Pulao",
    "description": "Hearty dish made with capsicum and coconut milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "5 min",
    "cookTime": "33 min",
    "totalTime": "38 min",
    "servings": 2,
    "rating": 4.5,
    "reviews": 108,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Coconut Milk",
      "Beans",
      "Mushroom",
      "Cheese",
      "Soy Sauce"
    ],
    "nutrition": {
      "calories": "308 kcal",
      "protein": "30 g",
      "carbs": "41 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded veg pulao and keep them ready.",
      "Heat oil in a pan and sauté capsicum and coconut milk until aromatic.",
      "Add beans, mushroom, cheese and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 73,
    "title": "Sizzling Bean Stew",
    "description": "Quick dish made with garlic and green chili for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "37 min",
    "prepTime": "8 min",
    "cookTime": "29 min",
    "totalTime": "37 min",
    "servings": 3,
    "rating": 4.9,
    "reviews": 175,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Garlic",
      "Green Chili",
      "Chicken",
      "Spinach",
      "Oats",
      "Soya Chunks"
    ],
    "nutrition": {
      "calories": "358 kcal",
      "protein": "57 g",
      "carbs": "40 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling bean stew and keep them ready.",
      "Heat oil in a pan and sauté garlic and green chili until aromatic.",
      "Add chicken, spinach, oats and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 74,
    "title": "Loaded Basil Rice",
    "description": "Quick meal made with paneer and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "24 min",
    "prepTime": "8 min",
    "cookTime": "16 min",
    "totalTime": "24 min",
    "servings": 2,
    "rating": 4.6,
    "reviews": 121,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Paneer",
      "Onion",
      "Carrot",
      "Chickpeas",
      "Flour",
      "Egg"
    ],
    "nutrition": {
      "calories": "390 kcal",
      "protein": "48 g",
      "carbs": "38 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded basil rice and keep them ready.",
      "Heat oil in a pan and sauté paneer and onion until aromatic.",
      "Add carrot, chickpeas, flour and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 75,
    "title": "Tangy Chicken Skillet",
    "description": "Wholesome recipe made with soy sauce and corn for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "34 min",
    "prepTime": "20 min",
    "cookTime": "14 min",
    "totalTime": "34 min",
    "servings": 5,
    "rating": 4.6,
    "reviews": 167,
    "tags": [
      "Asian",
      "Vegan"
    ],
    "ingredients": [
      "Soy Sauce",
      "Corn",
      "Coconut Milk",
      "Potato"
    ],
    "nutrition": {
      "calories": "254 kcal",
      "protein": "6 g",
      "carbs": "29 g",
      "fats": "10 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté soy sauce and corn until aromatic.",
      "Add coconut milk, potato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 76,
    "title": "Spicy Cheese Toast",
    "description": "Wholesome meal made with corn and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "36 min",
    "prepTime": "20 min",
    "cookTime": "16 min",
    "totalTime": "36 min",
    "servings": 6,
    "rating": 4.1,
    "reviews": 75,
    "tags": [
      "Indian",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Corn",
      "Carrot",
      "Rice",
      "Chicken",
      "Mushroom"
    ],
    "nutrition": {
      "calories": "312 kcal",
      "protein": "36 g",
      "carbs": "33 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy cheese toast and keep them ready.",
      "Heat oil in a pan and sauté corn and carrot until aromatic.",
      "Add rice, chicken, mushroom and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 77,
    "title": "Creamy Bean Stew",
    "description": "Comforting meal made with milk and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "6 min",
    "cookTime": "32 min",
    "totalTime": "38 min",
    "servings": 3,
    "rating": 4.3,
    "reviews": 394,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Milk",
      "Basil",
      "Beans",
      "Potato",
      "Flour"
    ],
    "nutrition": {
      "calories": "305 kcal",
      "protein": "15 g",
      "carbs": "34 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy bean stew and keep them ready.",
      "Heat oil in a pan and sauté milk and basil until aromatic.",
      "Add beans, potato, flour and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 78,
    "title": "Zesty Oats Upma",
    "description": "Hearty dish made with chickpeas and butter for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "44 min",
    "prepTime": "19 min",
    "cookTime": "25 min",
    "totalTime": "44 min",
    "servings": 2,
    "rating": 4.4,
    "reviews": 378,
    "tags": [
      "Fusion",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Chickpeas",
      "Butter",
      "Basil",
      "Egg",
      "Tomato"
    ],
    "nutrition": {
      "calories": "312 kcal",
      "protein": "37 g",
      "carbs": "30 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty oats upma and keep them ready.",
      "Heat oil in a pan and sauté chickpeas and butter until aromatic.",
      "Add basil, egg, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 79,
    "title": "Golden Potato Stir Fry",
    "description": "Comforting recipe made with milk and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "36 min",
    "prepTime": "10 min",
    "cookTime": "26 min",
    "totalTime": "36 min",
    "servings": 1,
    "rating": 4.1,
    "reviews": 223,
    "tags": [
      "Asian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Milk",
      "Mushroom",
      "Flour",
      "Lentils",
      "Egg",
      "Cream",
      "Green Chili"
    ],
    "nutrition": {
      "calories": "366 kcal",
      "protein": "39 g",
      "carbs": "46 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for golden potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté milk and mushroom until aromatic.",
      "Add flour, lentils, egg and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 80,
    "title": "Roasted Paneer Wrap",
    "description": "Quick recipe made with green chili and rice for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "36 min",
    "prepTime": "6 min",
    "cookTime": "30 min",
    "totalTime": "36 min",
    "servings": 4,
    "rating": 4.1,
    "reviews": 411,
    "tags": [
      "Italian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Green Chili",
      "Rice",
      "Cheese",
      "Corn",
      "Tofu",
      "Butter",
      "Onion"
    ],
    "nutrition": {
      "calories": "328 kcal",
      "protein": "43 g",
      "carbs": "37 g",
      "fats": "21 g"
    },
    "instructions": [
      "Prepare the ingredients for roasted paneer wrap and keep them ready.",
      "Heat oil in a pan and sauté green chili and rice until aromatic.",
      "Add cheese, corn, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 81,
    "title": "Creamy Lentil Soup",
    "description": "Comforting meal made with soy sauce and chicken for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "31 min",
    "prepTime": "8 min",
    "cookTime": "23 min",
    "totalTime": "31 min",
    "servings": 6,
    "rating": 4.3,
    "reviews": 319,
    "tags": [
      "Asian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Soy Sauce",
      "Chicken",
      "Milk",
      "Carrot",
      "Butter",
      "Egg",
      "Flour"
    ],
    "nutrition": {
      "calories": "399 kcal",
      "protein": "54 g",
      "carbs": "38 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy lentil soup and keep them ready.",
      "Heat oil in a pan and sauté soy sauce and chicken until aromatic.",
      "Add milk, carrot, butter and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 82,
    "title": "Tangy Lentil Soup",
    "description": "Hearty recipe made with capsicum and oats for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "33 min",
    "prepTime": "15 min",
    "cookTime": "18 min",
    "totalTime": "33 min",
    "servings": 1,
    "rating": 4.2,
    "reviews": 399,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Oats",
      "Tomato",
      "Chickpeas"
    ],
    "nutrition": {
      "calories": "270 kcal",
      "protein": "18 g",
      "carbs": "21 g",
      "fats": "6 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy lentil soup and keep them ready.",
      "Heat oil in a pan and sauté capsicum and oats until aromatic.",
      "Add tomato, chickpeas and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 83,
    "title": "Roasted Potato Stir Fry",
    "description": "Wholesome meal made with tomato and rice for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "28 min",
    "prepTime": "14 min",
    "cookTime": "14 min",
    "totalTime": "28 min",
    "servings": 6,
    "rating": 4.3,
    "reviews": 231,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Tomato",
      "Rice",
      "Capsicum",
      "Chicken",
      "Oats",
      "Onion",
      "Ginger"
    ],
    "nutrition": {
      "calories": "367 kcal",
      "protein": "36 g",
      "carbs": "35 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for roasted potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté tomato and rice until aromatic.",
      "Add capsicum, chicken, oats and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 84,
    "title": "Classic Cheese Toast",
    "description": "Hearty recipe made with corn and milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "18 min",
    "cookTime": "22 min",
    "totalTime": "40 min",
    "servings": 5,
    "rating": 4.6,
    "reviews": 63,
    "tags": [
      "Asian",
      "Vegetarian",
      "Breakfast"
    ],
    "ingredients": [
      "Corn",
      "Milk",
      "Oats",
      "Ginger",
      "Rice"
    ],
    "nutrition": {
      "calories": "305 kcal",
      "protein": "7 g",
      "carbs": "30 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for classic cheese toast and keep them ready.",
      "Heat oil in a pan and sauté corn and milk until aromatic.",
      "Add oats, ginger, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 85,
    "title": "Roasted Chicken Skillet",
    "description": "Hearty dish made with spinach and butter for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "43 min",
    "prepTime": "8 min",
    "cookTime": "35 min",
    "totalTime": "43 min",
    "servings": 2,
    "rating": 4.1,
    "reviews": 186,
    "tags": [
      "Street Food",
      "Vegetarian"
    ],
    "ingredients": [
      "Spinach",
      "Butter",
      "Soy Sauce",
      "Rice"
    ],
    "nutrition": {
      "calories": "299 kcal",
      "protein": "10 g",
      "carbs": "31 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for roasted chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté spinach and butter until aromatic.",
      "Add soy sauce, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 86,
    "title": "Sizzling Veg Pulao",
    "description": "Quick meal made with potato and chickpeas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "14 min",
    "cookTime": "24 min",
    "totalTime": "38 min",
    "servings": 4,
    "rating": 4.1,
    "reviews": 78,
    "tags": [
      "Asian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Potato",
      "Chickpeas",
      "Tomato",
      "Spinach",
      "Ginger"
    ],
    "nutrition": {
      "calories": "296 kcal",
      "protein": "20 g",
      "carbs": "40 g",
      "fats": "12 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling veg pulao and keep them ready.",
      "Heat oil in a pan and sauté potato and chickpeas until aromatic.",
      "Add tomato, spinach, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 87,
    "title": "Fresh Cheese Toast",
    "description": "Flavorful meal made with spinach and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "23 min",
    "prepTime": "9 min",
    "cookTime": "14 min",
    "totalTime": "23 min",
    "servings": 3,
    "rating": 4.4,
    "reviews": 154,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Spinach",
      "Carrot",
      "Coconut Milk",
      "Beans",
      "Capsicum",
      "Cheese"
    ],
    "nutrition": {
      "calories": "326 kcal",
      "protein": "31 g",
      "carbs": "48 g",
      "fats": "10 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh cheese toast and keep them ready.",
      "Heat oil in a pan and sauté spinach and carrot until aromatic.",
      "Add coconut milk, beans, capsicum and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 88,
    "title": "Loaded Lentil Soup",
    "description": "Hearty dish made with oats and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "33 min",
    "prepTime": "6 min",
    "cookTime": "27 min",
    "totalTime": "33 min",
    "servings": 3,
    "rating": 4.3,
    "reviews": 359,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Oats",
      "Mushroom",
      "Beans",
      "Egg"
    ],
    "nutrition": {
      "calories": "291 kcal",
      "protein": "31 g",
      "carbs": "26 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded lentil soup and keep them ready.",
      "Heat oil in a pan and sauté oats and mushroom until aromatic.",
      "Add beans, egg and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 89,
    "title": "Smoky Capsicum Masala",
    "description": "Flavorful dish made with rice and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "34 min",
    "prepTime": "14 min",
    "cookTime": "20 min",
    "totalTime": "34 min",
    "servings": 1,
    "rating": 4.3,
    "reviews": 391,
    "tags": [
      "Homestyle",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Rice",
      "Onion",
      "Egg",
      "Basil",
      "Carrot",
      "Tofu"
    ],
    "nutrition": {
      "calories": "304 kcal",
      "protein": "36 g",
      "carbs": "41 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté rice and onion until aromatic.",
      "Add egg, basil, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 90,
    "title": "Creamy Potato Stir Fry",
    "description": "Quick recipe made with beans and rice for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "19 min",
    "cookTime": "19 min",
    "totalTime": "38 min",
    "servings": 2,
    "rating": 4.5,
    "reviews": 241,
    "tags": [
      "Indian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Beans",
      "Rice",
      "Basil",
      "Mushroom"
    ],
    "nutrition": {
      "calories": "296 kcal",
      "protein": "17 g",
      "carbs": "16 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté beans and rice until aromatic.",
      "Add basil, mushroom and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 91,
    "title": "Fresh Oats Upma",
    "description": "Wholesome dish made with tomato and corn for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "31 min",
    "prepTime": "19 min",
    "cookTime": "12 min",
    "totalTime": "31 min",
    "servings": 4,
    "rating": 4.4,
    "reviews": 156,
    "tags": [
      "Fusion",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Tomato",
      "Corn",
      "Egg",
      "Oats",
      "Basil",
      "Chicken",
      "Chickpeas"
    ],
    "nutrition": {
      "calories": "374 kcal",
      "protein": "62 g",
      "carbs": "47 g",
      "fats": "25 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh oats upma and keep them ready.",
      "Heat oil in a pan and sauté tomato and corn until aromatic.",
      "Add egg, oats, basil and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 92,
    "title": "Herbed Egg Bhurji",
    "description": "Flavorful recipe made with soya chunks and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "35 min",
    "prepTime": "10 min",
    "cookTime": "25 min",
    "totalTime": "35 min",
    "servings": 5,
    "rating": 4.5,
    "reviews": 295,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Soya Chunks",
      "Basil",
      "Green Chili",
      "Milk",
      "Corn"
    ],
    "nutrition": {
      "calories": "314 kcal",
      "protein": "29 g",
      "carbs": "23 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed egg bhurji and keep them ready.",
      "Heat oil in a pan and sauté soya chunks and basil until aromatic.",
      "Add green chili, milk, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 93,
    "title": "Tangy Mushroom Rice",
    "description": "Wholesome recipe made with capsicum and chickpeas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "30 min",
    "prepTime": "17 min",
    "cookTime": "13 min",
    "totalTime": "30 min",
    "servings": 3,
    "rating": 4.8,
    "reviews": 407,
    "tags": [
      "Fusion",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Chickpeas",
      "Tofu",
      "Basil",
      "Chicken",
      "Flour",
      "Egg"
    ],
    "nutrition": {
      "calories": "371 kcal",
      "protein": "77 g",
      "carbs": "39 g",
      "fats": "7 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy mushroom rice and keep them ready.",
      "Heat oil in a pan and sauté capsicum and chickpeas until aromatic.",
      "Add tofu, basil, chicken and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 94,
    "title": "Spicy Oats Upma",
    "description": "Wholesome dish made with capsicum and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "47 min",
    "prepTime": "14 min",
    "cookTime": "33 min",
    "totalTime": "47 min",
    "servings": 6,
    "rating": 4.5,
    "reviews": 171,
    "tags": [
      "Asian",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Capsicum",
      "Onion",
      "Carrot",
      "Chicken",
      "Cream",
      "Flour"
    ],
    "nutrition": {
      "calories": "401 kcal",
      "protein": "38 g",
      "carbs": "26 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy oats upma and keep them ready.",
      "Heat oil in a pan and sauté capsicum and onion until aromatic.",
      "Add carrot, chicken, cream and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 95,
    "title": "Tangy Tofu Bowl",
    "description": "Flavorful recipe made with milk and paneer for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "33 min",
    "prepTime": "15 min",
    "cookTime": "18 min",
    "totalTime": "33 min",
    "servings": 1,
    "rating": 4.5,
    "reviews": 313,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Milk",
      "Paneer",
      "Tofu",
      "Tomato",
      "Basil"
    ],
    "nutrition": {
      "calories": "328 kcal",
      "protein": "37 g",
      "carbs": "38 g",
      "fats": "10 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté milk and paneer until aromatic.",
      "Add tofu, tomato, basil and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 96,
    "title": "Zesty Garlic Fried Rice",
    "description": "Wholesome dish made with chicken and rice for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "37 min",
    "prepTime": "13 min",
    "cookTime": "24 min",
    "totalTime": "37 min",
    "servings": 1,
    "rating": 4.6,
    "reviews": 141,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Chicken",
      "Rice",
      "Basil",
      "Carrot",
      "Cheese",
      "Green Chili",
      "Beans"
    ],
    "nutrition": {
      "calories": "338 kcal",
      "protein": "62 g",
      "carbs": "44 g",
      "fats": "25 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté chicken and rice until aromatic.",
      "Add basil, carrot, cheese and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 97,
    "title": "Smoky Garlic Fried Rice",
    "description": "Wholesome meal made with potato and spinach for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "45 min",
    "prepTime": "16 min",
    "cookTime": "29 min",
    "totalTime": "45 min",
    "servings": 5,
    "rating": 4.9,
    "reviews": 313,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Potato",
      "Spinach",
      "Green Chili",
      "Soya Chunks",
      "Carrot",
      "Capsicum"
    ],
    "nutrition": {
      "calories": "351 kcal",
      "protein": "41 g",
      "carbs": "36 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté potato and spinach until aromatic.",
      "Add green chili, soya chunks, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 98,
    "title": "Creamy Capsicum Masala",
    "description": "Wholesome dish made with basil and tofu for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "34 min",
    "prepTime": "19 min",
    "cookTime": "15 min",
    "totalTime": "34 min",
    "servings": 5,
    "rating": 4.9,
    "reviews": 211,
    "tags": [
      "Italian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Basil",
      "Tofu",
      "Butter",
      "Mushroom",
      "Beans",
      "Cream"
    ],
    "nutrition": {
      "calories": "363 kcal",
      "protein": "36 g",
      "carbs": "43 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté basil and tofu until aromatic.",
      "Add butter, mushroom, beans and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 99,
    "title": "Spicy Capsicum Masala",
    "description": "Hearty meal made with carrot and lentils for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "41 min",
    "prepTime": "17 min",
    "cookTime": "24 min",
    "totalTime": "41 min",
    "servings": 4,
    "rating": 4.4,
    "reviews": 336,
    "tags": [
      "Homestyle",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Carrot",
      "Lentils",
      "Potato",
      "Coconut Milk",
      "Green Chili"
    ],
    "nutrition": {
      "calories": "322 kcal",
      "protein": "21 g",
      "carbs": "21 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté carrot and lentils until aromatic.",
      "Add potato, coconut milk, green chili and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 100,
    "title": "Golden Bean Stew",
    "description": "Hearty recipe made with rice and garlic for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "42 min",
    "prepTime": "15 min",
    "cookTime": "27 min",
    "totalTime": "42 min",
    "servings": 2,
    "rating": 4.7,
    "reviews": 392,
    "tags": [
      "Italian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Rice",
      "Garlic",
      "Soy Sauce",
      "Chickpeas",
      "Flour",
      "Ginger",
      "Milk"
    ],
    "nutrition": {
      "calories": "313 kcal",
      "protein": "22 g",
      "carbs": "33 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for golden bean stew and keep them ready.",
      "Heat oil in a pan and sauté rice and garlic until aromatic.",
      "Add soy sauce, chickpeas, flour and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 101,
    "title": "Savory Chicken Skillet",
    "description": "Wholesome recipe made with tofu and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "42 min",
    "prepTime": "12 min",
    "cookTime": "30 min",
    "totalTime": "42 min",
    "servings": 4,
    "rating": 4.9,
    "reviews": 206,
    "tags": [
      "Fusion",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Tofu",
      "Onion",
      "Garlic",
      "Potato",
      "Ginger",
      "Carrot",
      "Capsicum"
    ],
    "nutrition": {
      "calories": "354 kcal",
      "protein": "25 g",
      "carbs": "46 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for savory chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté tofu and onion until aromatic.",
      "Add garlic, potato, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 102,
    "title": "Creamy Garlic Fried Rice",
    "description": "Flavorful meal made with egg and green chili for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "45 min",
    "prepTime": "16 min",
    "cookTime": "29 min",
    "totalTime": "45 min",
    "servings": 1,
    "rating": 4.8,
    "reviews": 165,
    "tags": [
      "Asian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Egg",
      "Green Chili",
      "Oats",
      "Potato",
      "Rice"
    ],
    "nutrition": {
      "calories": "306 kcal",
      "protein": "26 g",
      "carbs": "28 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté egg and green chili until aromatic.",
      "Add oats, potato, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 103,
    "title": "Creamy Chickpea Curry",
    "description": "Wholesome recipe made with paneer and coconut milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "11 min",
    "cookTime": "27 min",
    "totalTime": "38 min",
    "servings": 5,
    "rating": 4.2,
    "reviews": 303,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Paneer",
      "Coconut Milk",
      "Soy Sauce",
      "Egg",
      "Oats",
      "Rice",
      "Peas"
    ],
    "nutrition": {
      "calories": "392 kcal",
      "protein": "42 g",
      "carbs": "44 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy chickpea curry and keep them ready.",
      "Heat oil in a pan and sauté paneer and coconut milk until aromatic.",
      "Add soy sauce, egg, oats and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 104,
    "title": "Rustic Corn Salad",
    "description": "Flavorful meal made with corn and chickpeas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "20 min",
    "prepTime": "8 min",
    "cookTime": "12 min",
    "totalTime": "20 min",
    "servings": 5,
    "rating": 4.7,
    "reviews": 278,
    "tags": [
      "Indian",
      "Vegan",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Corn",
      "Chickpeas",
      "Soy Sauce",
      "Potato"
    ],
    "nutrition": {
      "calories": "281 kcal",
      "protein": "19 g",
      "carbs": "36 g",
      "fats": "12 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic corn salad and keep them ready.",
      "Heat oil in a pan and sauté corn and chickpeas until aromatic.",
      "Add soy sauce, potato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 105,
    "title": "Rustic Soya Masala",
    "description": "Comforting meal made with oats and butter for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "14 min",
    "cookTime": "26 min",
    "totalTime": "40 min",
    "servings": 1,
    "rating": 4.2,
    "reviews": 306,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Oats",
      "Butter",
      "Rice",
      "Basil",
      "Corn",
      "Flour",
      "Paneer"
    ],
    "nutrition": {
      "calories": "400 kcal",
      "protein": "28 g",
      "carbs": "48 g",
      "fats": "27 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic soya masala and keep them ready.",
      "Heat oil in a pan and sauté oats and butter until aromatic.",
      "Add rice, basil, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 106,
    "title": "Rustic Veg Noodles",
    "description": "Wholesome dish made with onion and soya chunks for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "6 min",
    "cookTime": "34 min",
    "totalTime": "40 min",
    "servings": 1,
    "rating": 4.6,
    "reviews": 209,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Onion",
      "Soya Chunks",
      "Chicken",
      "Ginger"
    ],
    "nutrition": {
      "calories": "228 kcal",
      "protein": "57 g",
      "carbs": "25 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic veg noodles and keep them ready.",
      "Heat oil in a pan and sauté onion and soya chunks until aromatic.",
      "Add chicken, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 107,
    "title": "Classic Lentil Soup",
    "description": "Comforting meal made with flour and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "52 min",
    "prepTime": "20 min",
    "cookTime": "32 min",
    "totalTime": "52 min",
    "servings": 4,
    "rating": 4.7,
    "reviews": 380,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Flour",
      "Basil",
      "Soya Chunks",
      "Cream"
    ],
    "nutrition": {
      "calories": "286 kcal",
      "protein": "32 g",
      "carbs": "22 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for classic lentil soup and keep them ready.",
      "Heat oil in a pan and sauté flour and basil until aromatic.",
      "Add soya chunks, cream and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 108,
    "title": "Zesty Capsicum Masala",
    "description": "Flavorful dish made with green chili and beans for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "38 min",
    "prepTime": "14 min",
    "cookTime": "24 min",
    "totalTime": "38 min",
    "servings": 5,
    "rating": 4.4,
    "reviews": 263,
    "tags": [
      "Fusion",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Green Chili",
      "Beans",
      "Potato",
      "Mushroom",
      "Corn"
    ],
    "nutrition": {
      "calories": "330 kcal",
      "protein": "18 g",
      "carbs": "37 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté green chili and beans until aromatic.",
      "Add potato, mushroom, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 109,
    "title": "Loaded Spinach Pasta",
    "description": "Wholesome meal made with milk and egg for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "22 min",
    "prepTime": "6 min",
    "cookTime": "16 min",
    "totalTime": "22 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 387,
    "tags": [
      "Fusion",
      "Non-Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Milk",
      "Egg",
      "Cheese",
      "Beans",
      "Ginger",
      "Green Chili"
    ],
    "nutrition": {
      "calories": "340 kcal",
      "protein": "47 g",
      "carbs": "34 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded spinach pasta and keep them ready.",
      "Heat oil in a pan and sauté milk and egg until aromatic.",
      "Add cheese, beans, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 110,
    "title": "Fresh Veg Pulao",
    "description": "Comforting recipe made with ginger and coconut milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "33 min",
    "prepTime": "9 min",
    "cookTime": "24 min",
    "totalTime": "33 min",
    "servings": 4,
    "rating": 4.9,
    "reviews": 233,
    "tags": [
      "Homestyle",
      "Vegetarian"
    ],
    "ingredients": [
      "Ginger",
      "Coconut Milk",
      "Cream",
      "Carrot"
    ],
    "nutrition": {
      "calories": "243 kcal",
      "protein": "7 g",
      "carbs": "26 g",
      "fats": "12 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh veg pulao and keep them ready.",
      "Heat oil in a pan and sauté ginger and coconut milk until aromatic.",
      "Add cream, carrot and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 111,
    "title": "Golden Tofu Bowl",
    "description": "Wholesome recipe made with cream and green chili for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "28 min",
    "prepTime": "6 min",
    "cookTime": "22 min",
    "totalTime": "28 min",
    "servings": 1,
    "rating": 4.2,
    "reviews": 289,
    "tags": [
      "Street Food",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Cream",
      "Green Chili",
      "Ginger",
      "Beans",
      "Capsicum",
      "Coconut Milk"
    ],
    "nutrition": {
      "calories": "332 kcal",
      "protein": "19 g",
      "carbs": "41 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for golden tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté cream and green chili until aromatic.",
      "Add ginger, beans, capsicum and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 112,
    "title": "Smoky Potato Stir Fry",
    "description": "Wholesome recipe made with lentils and coconut milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "6 min",
    "cookTime": "34 min",
    "totalTime": "40 min",
    "servings": 1,
    "rating": 4.8,
    "reviews": 116,
    "tags": [
      "Italian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Lentils",
      "Coconut Milk",
      "Soy Sauce",
      "Paneer"
    ],
    "nutrition": {
      "calories": "259 kcal",
      "protein": "37 g",
      "carbs": "26 g",
      "fats": "10 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté lentils and coconut milk until aromatic.",
      "Add soy sauce, paneer and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 113,
    "title": "Creamy Tofu Bowl",
    "description": "Hearty dish made with flour and cream for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "16 min",
    "prepTime": "5 min",
    "cookTime": "11 min",
    "totalTime": "16 min",
    "servings": 4,
    "rating": 4.8,
    "reviews": 71,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Flour",
      "Cream",
      "Spinach",
      "Paneer"
    ],
    "nutrition": {
      "calories": "244 kcal",
      "protein": "26 g",
      "carbs": "30 g",
      "fats": "9 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté flour and cream until aromatic.",
      "Add spinach, paneer and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 114,
    "title": "Spicy Potato Stir Fry",
    "description": "Quick recipe made with paneer and peas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "46 min",
    "prepTime": "12 min",
    "cookTime": "34 min",
    "totalTime": "46 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 240,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Paneer",
      "Peas",
      "Oats",
      "Potato"
    ],
    "nutrition": {
      "calories": "271 kcal",
      "protein": "26 g",
      "carbs": "32 g",
      "fats": "9 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté paneer and peas until aromatic.",
      "Add oats, potato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 115,
    "title": "Savory Cheese Toast",
    "description": "Wholesome dish made with carrot and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "33 min",
    "prepTime": "15 min",
    "cookTime": "18 min",
    "totalTime": "33 min",
    "servings": 1,
    "rating": 4.2,
    "reviews": 100,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Carrot",
      "Onion",
      "Cheese",
      "Flour"
    ],
    "nutrition": {
      "calories": "256 kcal",
      "protein": "23 g",
      "carbs": "33 g",
      "fats": "17 g"
    },
    "instructions": [
      "Prepare the ingredients for savory cheese toast and keep them ready.",
      "Heat oil in a pan and sauté carrot and onion until aromatic.",
      "Add cheese, flour and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 116,
    "title": "Rustic Chicken Skillet",
    "description": "Flavorful dish made with ginger and milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "27 min",
    "prepTime": "6 min",
    "cookTime": "21 min",
    "totalTime": "27 min",
    "servings": 4,
    "rating": 4.8,
    "reviews": 379,
    "tags": [
      "Homestyle",
      "Vegetarian"
    ],
    "ingredients": [
      "Ginger",
      "Milk",
      "Soy Sauce",
      "Butter",
      "Rice",
      "Onion"
    ],
    "nutrition": {
      "calories": "283 kcal",
      "protein": "10 g",
      "carbs": "39 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté ginger and milk until aromatic.",
      "Add soy sauce, butter, rice and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 117,
    "title": "Spicy Egg Bhurji",
    "description": "Quick dish made with garlic and onion for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "36 min",
    "prepTime": "17 min",
    "cookTime": "19 min",
    "totalTime": "36 min",
    "servings": 5,
    "rating": 4.6,
    "reviews": 134,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Garlic",
      "Onion",
      "Mushroom",
      "Butter",
      "Tofu"
    ],
    "nutrition": {
      "calories": "356 kcal",
      "protein": "22 g",
      "carbs": "23 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy egg bhurji and keep them ready.",
      "Heat oil in a pan and sauté garlic and onion until aromatic.",
      "Add mushroom, butter, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 118,
    "title": "Rustic Tofu Bowl",
    "description": "Comforting recipe made with onion and milk for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "46 min",
    "prepTime": "16 min",
    "cookTime": "30 min",
    "totalTime": "46 min",
    "servings": 2,
    "rating": 4.4,
    "reviews": 382,
    "tags": [
      "Asian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Onion",
      "Milk",
      "Paneer",
      "Beans",
      "Chicken"
    ],
    "nutrition": {
      "calories": "325 kcal",
      "protein": "61 g",
      "carbs": "37 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté onion and milk until aromatic.",
      "Add paneer, beans, chicken and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 119,
    "title": "Herbed Capsicum Masala",
    "description": "Flavorful meal made with beans and lentils for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "34 min",
    "prepTime": "20 min",
    "cookTime": "14 min",
    "totalTime": "34 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 221,
    "tags": [
      "Mediterranean",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Beans",
      "Lentils",
      "Oats",
      "Tomato",
      "Chicken",
      "Cream",
      "Soya Chunks"
    ],
    "nutrition": {
      "calories": "397 kcal",
      "protein": "78 g",
      "carbs": "42 g",
      "fats": "24 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed capsicum masala and keep them ready.",
      "Heat oil in a pan and sauté beans and lentils until aromatic.",
      "Add oats, tomato, chicken and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 120,
    "title": "Peppery Oats Upma",
    "description": "Wholesome dish made with spinach and oats for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "27 min",
    "prepTime": "14 min",
    "cookTime": "13 min",
    "totalTime": "27 min",
    "servings": 1,
    "rating": 4.4,
    "reviews": 242,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Spinach",
      "Oats",
      "Chickpeas",
      "Carrot",
      "Milk"
    ],
    "nutrition": {
      "calories": "330 kcal",
      "protein": "19 g",
      "carbs": "34 g",
      "fats": "20 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery oats upma and keep them ready.",
      "Heat oil in a pan and sauté spinach and oats until aromatic.",
      "Add chickpeas, carrot, milk and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 121,
    "title": "Loaded Corn Salad",
    "description": "Wholesome recipe made with cheese and soy sauce for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "23 min",
    "prepTime": "9 min",
    "cookTime": "14 min",
    "totalTime": "23 min",
    "servings": 3,
    "rating": 4.4,
    "reviews": 291,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Cheese",
      "Soy Sauce",
      "Lentils",
      "Paneer",
      "Spinach",
      "Oats"
    ],
    "nutrition": {
      "calories": "348 kcal",
      "protein": "49 g",
      "carbs": "36 g",
      "fats": "25 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded corn salad and keep them ready.",
      "Heat oil in a pan and sauté cheese and soy sauce until aromatic.",
      "Add lentils, paneer, spinach and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 122,
    "title": "Peppery Tofu Bowl",
    "description": "Wholesome recipe made with milk and garlic for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "7 min",
    "cookTime": "33 min",
    "totalTime": "40 min",
    "servings": 2,
    "rating": 4.2,
    "reviews": 284,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Milk",
      "Garlic",
      "Green Chili",
      "Chickpeas",
      "Spinach",
      "Capsicum"
    ],
    "nutrition": {
      "calories": "345 kcal",
      "protein": "16 g",
      "carbs": "26 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté milk and garlic until aromatic.",
      "Add green chili, chickpeas, spinach and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 123,
    "title": "Sizzling Cheese Toast",
    "description": "Wholesome dish made with rice and butter for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "30 min",
    "prepTime": "15 min",
    "cookTime": "15 min",
    "totalTime": "30 min",
    "servings": 3,
    "rating": 4.8,
    "reviews": 156,
    "tags": [
      "Fusion",
      "Vegetarian",
      "Breakfast"
    ],
    "ingredients": [
      "Rice",
      "Butter",
      "Milk",
      "Carrot",
      "Garlic",
      "Ginger"
    ],
    "nutrition": {
      "calories": "351 kcal",
      "protein": "15 g",
      "carbs": "42 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling cheese toast and keep them ready.",
      "Heat oil in a pan and sauté rice and butter until aromatic.",
      "Add milk, carrot, garlic and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 124,
    "title": "Tangy Potato Stir Fry",
    "description": "Comforting recipe made with corn and garlic for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "43 min",
    "prepTime": "19 min",
    "cookTime": "24 min",
    "totalTime": "43 min",
    "servings": 4,
    "rating": 4.7,
    "reviews": 207,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Corn",
      "Garlic",
      "Soy Sauce",
      "Chicken",
      "Coconut Milk"
    ],
    "nutrition": {
      "calories": "329 kcal",
      "protein": "34 g",
      "carbs": "32 g",
      "fats": "21 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy potato stir fry and keep them ready.",
      "Heat oil in a pan and sauté corn and garlic until aromatic.",
      "Add soy sauce, chicken, coconut milk and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 125,
    "title": "Smoky Mushroom Rice",
    "description": "Quick recipe made with peas and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "42 min",
    "prepTime": "19 min",
    "cookTime": "23 min",
    "totalTime": "42 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 217,
    "tags": [
      "Homestyle",
      "Vegan"
    ],
    "ingredients": [
      "Peas",
      "Carrot",
      "Green Chili",
      "Spinach"
    ],
    "nutrition": {
      "calories": "252 kcal",
      "protein": "9 g",
      "carbs": "34 g",
      "fats": "22 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky mushroom rice and keep them ready.",
      "Heat oil in a pan and sauté peas and carrot until aromatic.",
      "Add green chili, spinach and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 126,
    "title": "Tangy Paneer Wrap",
    "description": "Hearty recipe made with capsicum and paneer for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "29 min",
    "prepTime": "19 min",
    "cookTime": "10 min",
    "totalTime": "29 min",
    "servings": 1,
    "rating": 4.7,
    "reviews": 146,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Paneer",
      "Cream",
      "Peas",
      "Onion"
    ],
    "nutrition": {
      "calories": "326 kcal",
      "protein": "32 g",
      "carbs": "38 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for tangy paneer wrap and keep them ready.",
      "Heat oil in a pan and sauté capsicum and paneer until aromatic.",
      "Add cream, peas, onion and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 127,
    "title": "Herbed Tomato Pasta",
    "description": "Hearty dish made with chicken and oats for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "28 min",
    "prepTime": "10 min",
    "cookTime": "18 min",
    "totalTime": "28 min",
    "servings": 5,
    "rating": 4.4,
    "reviews": 362,
    "tags": [
      "Homestyle",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Chicken",
      "Oats",
      "Peas",
      "Basil",
      "Mushroom",
      "Green Chili",
      "Potato"
    ],
    "nutrition": {
      "calories": "375 kcal",
      "protein": "41 g",
      "carbs": "38 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed tomato pasta and keep them ready.",
      "Heat oil in a pan and sauté chicken and oats until aromatic.",
      "Add peas, basil, mushroom and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 128,
    "title": "Rustic Garlic Fried Rice",
    "description": "Flavorful dish made with garlic and basil for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "23 min",
    "prepTime": "8 min",
    "cookTime": "15 min",
    "totalTime": "23 min",
    "servings": 5,
    "rating": 4.9,
    "reviews": 190,
    "tags": [
      "Italian",
      "Vegan",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Garlic",
      "Basil",
      "Soy Sauce",
      "Capsicum",
      "Beans",
      "Carrot",
      "Corn"
    ],
    "nutrition": {
      "calories": "354 kcal",
      "protein": "22 g",
      "carbs": "49 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté garlic and basil until aromatic.",
      "Add soy sauce, capsicum, beans and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 129,
    "title": "Zesty Chicken Skillet",
    "description": "Wholesome recipe made with spinach and soy sauce for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "39 min",
    "prepTime": "5 min",
    "cookTime": "34 min",
    "totalTime": "39 min",
    "servings": 1,
    "rating": 4.3,
    "reviews": 255,
    "tags": [
      "Indian",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Spinach",
      "Soy Sauce",
      "Mushroom",
      "Tofu"
    ],
    "nutrition": {
      "calories": "241 kcal",
      "protein": "25 g",
      "carbs": "23 g",
      "fats": "12 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté spinach and soy sauce until aromatic.",
      "Add mushroom, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 130,
    "title": "Fresh Garlic Fried Rice",
    "description": "Quick meal made with beans and spinach for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "39 min",
    "prepTime": "14 min",
    "cookTime": "25 min",
    "totalTime": "39 min",
    "servings": 3,
    "rating": 4.6,
    "reviews": 142,
    "tags": [
      "Fusion",
      "Vegan",
      "High Protein"
    ],
    "ingredients": [
      "Beans",
      "Spinach",
      "Peas",
      "Ginger"
    ],
    "nutrition": {
      "calories": "264 kcal",
      "protein": "18 g",
      "carbs": "28 g",
      "fats": "10 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté beans and spinach until aromatic.",
      "Add peas, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 131,
    "title": "Roasted Veg Noodles",
    "description": "Comforting dish made with lentils and chicken for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "47 min",
    "prepTime": "19 min",
    "cookTime": "28 min",
    "totalTime": "47 min",
    "servings": 4,
    "rating": 4.3,
    "reviews": 290,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Lentils",
      "Chicken",
      "Flour",
      "Capsicum",
      "Peas"
    ],
    "nutrition": {
      "calories": "312 kcal",
      "protein": "46 g",
      "carbs": "33 g",
      "fats": "15 g"
    },
    "instructions": [
      "Prepare the ingredients for roasted veg noodles and keep them ready.",
      "Heat oil in a pan and sauté lentils and chicken until aromatic.",
      "Add flour, capsicum, peas and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 132,
    "title": "Creamy Basil Rice",
    "description": "Hearty dish made with garlic and rice for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "23 min",
    "prepTime": "8 min",
    "cookTime": "15 min",
    "totalTime": "23 min",
    "servings": 3,
    "rating": 4.7,
    "reviews": 155,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Garlic",
      "Rice",
      "Coconut Milk",
      "Milk",
      "Capsicum",
      "Beans",
      "Mushroom"
    ],
    "nutrition": {
      "calories": "364 kcal",
      "protein": "18 g",
      "carbs": "51 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for creamy basil rice and keep them ready.",
      "Heat oil in a pan and sauté garlic and rice until aromatic.",
      "Add coconut milk, milk, capsicum and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 133,
    "title": "Herbed Bean Stew",
    "description": "Quick recipe made with soya chunks and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "49 min",
    "prepTime": "20 min",
    "cookTime": "29 min",
    "totalTime": "49 min",
    "servings": 4,
    "rating": 4.2,
    "reviews": 360,
    "tags": [
      "Italian",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Soya Chunks",
      "Carrot",
      "Egg",
      "Spinach",
      "Chickpeas",
      "Butter"
    ],
    "nutrition": {
      "calories": "372 kcal",
      "protein": "57 g",
      "carbs": "36 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed bean stew and keep them ready.",
      "Heat oil in a pan and sauté soya chunks and carrot until aromatic.",
      "Add egg, spinach, chickpeas and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 134,
    "title": "Savory Corn Salad",
    "description": "Wholesome meal made with potato and chickpeas for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "40 min",
    "prepTime": "10 min",
    "cookTime": "30 min",
    "totalTime": "40 min",
    "servings": 4,
    "rating": 4.2,
    "reviews": 117,
    "tags": [
      "Italian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Potato",
      "Chickpeas",
      "Onion",
      "Lentils",
      "Paneer"
    ],
    "nutrition": {
      "calories": "311 kcal",
      "protein": "46 g",
      "carbs": "42 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for savory corn salad and keep them ready.",
      "Heat oil in a pan and sauté potato and chickpeas until aromatic.",
      "Add onion, lentils, paneer and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 135,
    "title": "Fresh Paneer Wrap",
    "description": "Wholesome recipe made with coconut milk and lentils for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "25 min",
    "prepTime": "5 min",
    "cookTime": "20 min",
    "totalTime": "25 min",
    "servings": 4,
    "rating": 4.5,
    "reviews": 361,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Coconut Milk",
      "Lentils",
      "Cheese",
      "Tomato"
    ],
    "nutrition": {
      "calories": "283 kcal",
      "protein": "32 g",
      "carbs": "21 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh paneer wrap and keep them ready.",
      "Heat oil in a pan and sauté coconut milk and lentils until aromatic.",
      "Add cheese, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 136,
    "title": "Roasted Garlic Fried Rice",
    "description": "Quick dish made with rice and garlic for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "41 min",
    "prepTime": "13 min",
    "cookTime": "28 min",
    "totalTime": "41 min",
    "servings": 5,
    "rating": 4.2,
    "reviews": 331,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Rice",
      "Garlic",
      "Corn",
      "Beans",
      "Spinach",
      "Butter"
    ],
    "nutrition": {
      "calories": "329 kcal",
      "protein": "17 g",
      "carbs": "49 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for roasted garlic fried rice and keep them ready.",
      "Heat oil in a pan and sauté rice and garlic until aromatic.",
      "Add corn, beans, spinach and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 137,
    "title": "Loaded Bean Stew",
    "description": "Wholesome recipe made with corn and beans for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "18 min",
    "prepTime": "8 min",
    "cookTime": "10 min",
    "totalTime": "18 min",
    "servings": 1,
    "rating": 4.1,
    "reviews": 403,
    "tags": [
      "Fusion",
      "Vegan",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Corn",
      "Beans",
      "Chickpeas",
      "Tofu"
    ],
    "nutrition": {
      "calories": "236 kcal",
      "protein": "39 g",
      "carbs": "21 g",
      "fats": "14 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded bean stew and keep them ready.",
      "Heat oil in a pan and sauté corn and beans until aromatic.",
      "Add chickpeas, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 138,
    "title": "Loaded Tofu Bowl",
    "description": "Hearty meal made with garlic and cream for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "31 min",
    "prepTime": "18 min",
    "cookTime": "13 min",
    "totalTime": "31 min",
    "servings": 3,
    "rating": 4.9,
    "reviews": 129,
    "tags": [
      "Indian",
      "Vegetarian"
    ],
    "ingredients": [
      "Garlic",
      "Cream",
      "Corn",
      "Green Chili",
      "Tomato",
      "Capsicum"
    ],
    "nutrition": {
      "calories": "342 kcal",
      "protein": "12 g",
      "carbs": "29 g",
      "fats": "25 g"
    },
    "instructions": [
      "Prepare the ingredients for loaded tofu bowl and keep them ready.",
      "Heat oil in a pan and sauté garlic and cream until aromatic.",
      "Add corn, green chili, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 139,
    "title": "Smoky Chicken Skillet",
    "description": "Flavorful recipe made with tofu and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "47 min",
    "prepTime": "13 min",
    "cookTime": "34 min",
    "totalTime": "47 min",
    "servings": 2,
    "rating": 4.6,
    "reviews": 77,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Tofu",
      "Carrot",
      "Garlic",
      "Cheese"
    ],
    "nutrition": {
      "calories": "264 kcal",
      "protein": "34 g",
      "carbs": "33 g",
      "fats": "16 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky chicken skillet and keep them ready.",
      "Heat oil in a pan and sauté tofu and carrot until aromatic.",
      "Add garlic, cheese and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 140,
    "title": "Spicy Bean Stew",
    "description": "Quick recipe made with ginger and corn for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "45 min",
    "prepTime": "13 min",
    "cookTime": "32 min",
    "totalTime": "45 min",
    "servings": 6,
    "rating": 4.6,
    "reviews": 325,
    "tags": [
      "Street Food",
      "Non-Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Ginger",
      "Corn",
      "Chicken",
      "Beans",
      "Potato",
      "Milk",
      "Paneer"
    ],
    "nutrition": {
      "calories": "366 kcal",
      "protein": "66 g",
      "carbs": "56 g",
      "fats": "25 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy bean stew and keep them ready.",
      "Heat oil in a pan and sauté ginger and corn until aromatic.",
      "Add chicken, beans, potato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 141,
    "title": "Rustic Cheese Toast",
    "description": "Comforting recipe made with green chili and carrot for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "37 min",
    "prepTime": "8 min",
    "cookTime": "29 min",
    "totalTime": "37 min",
    "servings": 2,
    "rating": 4.7,
    "reviews": 72,
    "tags": [
      "Street Food",
      "Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Green Chili",
      "Carrot",
      "Butter",
      "Chickpeas"
    ],
    "nutrition": {
      "calories": "262 kcal",
      "protein": "17 g",
      "carbs": "22 g",
      "fats": "11 g"
    },
    "instructions": [
      "Prepare the ingredients for rustic cheese toast and keep them ready.",
      "Heat oil in a pan and sauté green chili and carrot until aromatic.",
      "Add butter, chickpeas and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 142,
    "title": "Classic Spinach Pasta",
    "description": "Hearty dish made with cream and spinach for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "37 min",
    "prepTime": "12 min",
    "cookTime": "25 min",
    "totalTime": "37 min",
    "servings": 2,
    "rating": 4.9,
    "reviews": 236,
    "tags": [
      "Homestyle",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Cream",
      "Spinach",
      "Soya Chunks",
      "Lentils"
    ],
    "nutrition": {
      "calories": "273 kcal",
      "protein": "42 g",
      "carbs": "28 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for classic spinach pasta and keep them ready.",
      "Heat oil in a pan and sauté cream and spinach until aromatic.",
      "Add soya chunks, lentils and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 143,
    "title": "Zesty Lentil Soup",
    "description": "Hearty dish made with cheese and soy sauce for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "47 min",
    "prepTime": "13 min",
    "cookTime": "34 min",
    "totalTime": "47 min",
    "servings": 3,
    "rating": 4.2,
    "reviews": 214,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Cheese",
      "Soy Sauce",
      "Carrot",
      "Potato",
      "Corn"
    ],
    "nutrition": {
      "calories": "326 kcal",
      "protein": "24 g",
      "carbs": "30 g",
      "fats": "11 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty lentil soup and keep them ready.",
      "Heat oil in a pan and sauté cheese and soy sauce until aromatic.",
      "Add carrot, potato, corn and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 144,
    "title": "Spicy Corn Salad",
    "description": "Comforting meal made with soy sauce and butter for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Medium",
    "time": "32 min",
    "prepTime": "7 min",
    "cookTime": "25 min",
    "totalTime": "32 min",
    "servings": 6,
    "rating": 4.3,
    "reviews": 198,
    "tags": [
      "Homestyle",
      "Vegetarian"
    ],
    "ingredients": [
      "Soy Sauce",
      "Butter",
      "Rice",
      "Ginger"
    ],
    "nutrition": {
      "calories": "253 kcal",
      "protein": "12 g",
      "carbs": "23 g",
      "fats": "7 g"
    },
    "instructions": [
      "Prepare the ingredients for spicy corn salad and keep them ready.",
      "Heat oil in a pan and sauté soy sauce and butter until aromatic.",
      "Add rice, ginger and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 145,
    "title": "Sizzling Paneer Wrap",
    "description": "Wholesome recipe made with coconut milk and potato for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "53 min",
    "prepTime": "18 min",
    "cookTime": "35 min",
    "totalTime": "53 min",
    "servings": 5,
    "rating": 4.6,
    "reviews": 252,
    "tags": [
      "Fusion",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Coconut Milk",
      "Potato",
      "Ginger",
      "Soya Chunks",
      "Paneer"
    ],
    "nutrition": {
      "calories": "306 kcal",
      "protein": "49 g",
      "carbs": "29 g",
      "fats": "18 g"
    },
    "instructions": [
      "Prepare the ingredients for sizzling paneer wrap and keep them ready.",
      "Heat oil in a pan and sauté coconut milk and potato until aromatic.",
      "Add ginger, soya chunks, paneer and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 146,
    "title": "Smoky Egg Bhurji",
    "description": "Flavorful recipe made with coconut milk and tomato for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "25 min",
    "prepTime": "11 min",
    "cookTime": "14 min",
    "totalTime": "25 min",
    "servings": 1,
    "rating": 4.6,
    "reviews": 390,
    "tags": [
      "Mediterranean",
      "Vegetarian",
      "Quick",
      "Breakfast"
    ],
    "ingredients": [
      "Coconut Milk",
      "Tomato",
      "Mushroom",
      "Soy Sauce",
      "Cream"
    ],
    "nutrition": {
      "calories": "323 kcal",
      "protein": "9 g",
      "carbs": "25 g",
      "fats": "5 g"
    },
    "instructions": [
      "Prepare the ingredients for smoky egg bhurji and keep them ready.",
      "Heat oil in a pan and sauté coconut milk and tomato until aromatic.",
      "Add mushroom, soy sauce, cream and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 147,
    "title": "Peppery Corn Salad",
    "description": "Comforting recipe made with milk and cream for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "54 min",
    "prepTime": "20 min",
    "cookTime": "34 min",
    "totalTime": "54 min",
    "servings": 3,
    "rating": 4.8,
    "reviews": 349,
    "tags": [
      "Asian",
      "Vegetarian"
    ],
    "ingredients": [
      "Milk",
      "Cream",
      "Potato",
      "Mushroom",
      "Tomato"
    ],
    "nutrition": {
      "calories": "263 kcal",
      "protein": "14 g",
      "carbs": "22 g",
      "fats": "13 g"
    },
    "instructions": [
      "Prepare the ingredients for peppery corn salad and keep them ready.",
      "Heat oil in a pan and sauté milk and cream until aromatic.",
      "Add potato, mushroom, tomato and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 148,
    "title": "Zesty Veg Noodles",
    "description": "Quick recipe made with potato and soya chunks for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Easy",
    "time": "21 min",
    "prepTime": "7 min",
    "cookTime": "14 min",
    "totalTime": "21 min",
    "servings": 1,
    "rating": 4.5,
    "reviews": 194,
    "tags": [
      "Indian",
      "Vegetarian",
      "High Protein",
      "Quick"
    ],
    "ingredients": [
      "Potato",
      "Soya Chunks",
      "Soy Sauce",
      "Basil",
      "Milk",
      "Ginger"
    ],
    "nutrition": {
      "calories": "377 kcal",
      "protein": "29 g",
      "carbs": "32 g",
      "fats": "19 g"
    },
    "instructions": [
      "Prepare the ingredients for zesty veg noodles and keep them ready.",
      "Heat oil in a pan and sauté potato and soya chunks until aromatic.",
      "Add soy sauce, basil, milk and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 149,
    "title": "Herbed Corn Salad",
    "description": "Wholesome recipe made with capsicum and tofu for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1701579231349-d7459c40919d?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "52 min",
    "prepTime": "18 min",
    "cookTime": "34 min",
    "totalTime": "52 min",
    "servings": 5,
    "rating": 4.4,
    "reviews": 313,
    "tags": [
      "Asian",
      "Vegetarian",
      "High Protein"
    ],
    "ingredients": [
      "Capsicum",
      "Tofu",
      "Ginger",
      "Lentils",
      "Flour",
      "Milk"
    ],
    "nutrition": {
      "calories": "368 kcal",
      "protein": "37 g",
      "carbs": "39 g",
      "fats": "25 g"
    },
    "instructions": [
      "Prepare the ingredients for herbed corn salad and keep them ready.",
      "Heat oil in a pan and sauté capsicum and tofu until aromatic.",
      "Add ginger, lentils, flour and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  },
  {
    "id": 150,
    "title": "Fresh Egg Bhurji",
    "description": "Wholesome meal made with soy sauce and mushroom for a satisfying bite.",
    "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=80",
    "difficulty": "Hard",
    "time": "50 min",
    "prepTime": "18 min",
    "cookTime": "32 min",
    "totalTime": "50 min",
    "servings": 1,
    "rating": 4.8,
    "reviews": 138,
    "tags": [
      "Asian",
      "Non-Vegetarian",
      "High Protein",
      "Breakfast"
    ],
    "ingredients": [
      "Soy Sauce",
      "Mushroom",
      "Corn",
      "Capsicum",
      "Tofu",
      "Chicken",
      "Onion"
    ],
    "nutrition": {
      "calories": "396 kcal",
      "protein": "54 g",
      "carbs": "46 g",
      "fats": "23 g"
    },
    "instructions": [
      "Prepare the ingredients for fresh egg bhurji and keep them ready.",
      "Heat oil in a pan and sauté soy sauce and mushroom until aromatic.",
      "Add corn, capsicum, tofu and cook until the mixture comes together well.",
      "Season to taste and cook until the texture is just right.",
      "Serve hot and enjoy."
    ]
  }
];

export default recipes;
