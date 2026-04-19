import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import RecipeDetail from "./RecipeDetail";
import Layout from "./Layout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Result />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;