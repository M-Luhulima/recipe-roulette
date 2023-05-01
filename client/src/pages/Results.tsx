// import Recipes from "../components/recipes";
// import QuizRecipes from "../components/quizRecipes";
// import "../index.css";

// const Results = () => { 
//   return <div>
//     <Recipes />
//     <QuizRecipes />
//   </div>;
// };

// export default Results;

import React, { useEffect, useState } from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from '../store/store';
import { getRecipeRandom } from '../store/reducers/recipesReducer';

const Recipes: React.FC = () => {
  const dispatch: AppDispatch = useRecipeDispatch()
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);
  const [authIdTokenUser] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getRecipeRandom());
  }, [dispatch]);

  const handleSaveRecipe = async (recipeId: string) => {

    try {
      const response = await fetch('/api/user/favorites', {
        method: 'POST',
        headers: {
          idtoken: authIdTokenUser || 'unknown',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'USER_ID_HERE', // replace with the user ID of the logged-in user
          recipeId,
        }),
      });

      const data = await response.json();
      console.log(data); // log the saved recipe data to the console
    } catch (error) {
      console.error('handleSaveRecipe error:', error);
    }
  };

  return (
    <div>
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <div key={r.id}>
          <button onClick={() => handleSaveRecipe(r.id)}>Save recipe</button>
          <h2>{r.title}</h2>
          <img src={r.image} alt={r.title} />
          <h3>Ingredients:</h3>
          <ul>
            {r.extendedIngredients.map((i: any) => (
              <li key={i.id}>{i.original}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{r.instructions}</p>
        </div>
      ))}

    </div>
  )
};

export default Recipes;