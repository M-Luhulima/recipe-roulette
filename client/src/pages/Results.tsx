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

import React, { useEffect } from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector } from '../store/store';
import { getRecipeRandom } from '../store/reducers/recipesReducer';

const Recipes: React.FC = () => {
  const dispatch: AppDispatch = useRecipeDispatch()
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(getRecipeRandom());
  }, [dispatch]);

  return (
    <div>
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <div key={r.id}>
          <h2>{r.title}</h2>
          <img src={r.image} alt={r.title} />
          <h3>Ingredients:</h3>
          <ul>
            {r.extendedIngredients.map((i: any) => (
              <li key={i.id}>{i.original}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{recipes[0].instructions}</p>
        </div>
      ))}
      <button>Save recipe</button>
      {/* <button onClick={onSave}>Save recipe</button> */}
    </div>
  );
};

export default Recipes;
