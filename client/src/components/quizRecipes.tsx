import React, { useEffect } from 'react';
import { AppDispatch, RootState, useQuizRecipeDispatch, useQuizRecipeSelector } from '../store/store';
import { getQuizRecipe } from '../store/reducers/recipesReducer';


const QuizRecipes: React.FC = () => {
    const dispatch: AppDispatch = useQuizRecipeDispatch()
  const { recipes } = useQuizRecipeSelector((state: RootState) => state.recipes);

//   useEffect(() => {
//     dispatch(getQuizRecipe());
//   }, [dispatch]);

  return (
    <div>
        {recipes[0] && recipes[0].title ? JSON.stringify(recipes[0].title) : ''}
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <React.Fragment key={r.id}>
          <h6>{r.name}</h6>
        </React.Fragment>
      ))}
    </div>
  );
};

export default QuizRecipes;