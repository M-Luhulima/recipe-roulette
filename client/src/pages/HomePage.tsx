import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomRecipe } from "../utils/spoonApi";
// import TaskDetails from "../components/TaskDetails";
// import { useTasksContext } from "../hooks/useTasksContext";

// interface HomePageProps {
//   handleStart: () => void;
//   handleRandom: () => void;
// }

const HomePage: FC = () => {
  const [randomRecipe, setRandomRecipe] = useState("");
  const handleRandom = async () => {
    const newRecipe = await getRandomRecipe();
    setRandomRecipe(newRecipe);
  };

  return (
    <div className="HomePage">
      <h1>Hungry??</h1>
      <Link className="link-questions" to="/quiz">
        <button className="button HomePage__button" onClick={handleStart}>
          Start quiz
        </button>
      </Link>
      <Link to="/results">
        <button className="button HomePage__button" onClick={handleRandom}>
          Get random recipe
        </button>
      </Link>
    </div>
  );
};

export default HomePage;








import React, { useState } from "react";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

const App = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const handleClick = async () => {
    const response = await fetch("https://example.com/api/recipes/random");
    const data = await response.json();
    setRecipe({
      id: data.id,
      name: data.name,
      ingredients: data.ingredients,
      instructions: data.instructions,
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Get Random Recipe</button>
      {recipe && (
        <div>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default App;
