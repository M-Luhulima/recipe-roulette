import React, { useEffect } from 'react';
import { AppDispatch, RootState, useRecipeDispatch, useRecipeSelector, useSaveRecipeDispatch } from '../store/store';
import { Recipe } from '../models/types';
import { deleteRecipe, postSaveRecipe } from '../store/reducers/recipesReducer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';


const Results: React.FC = () => {
  const dispatch: AppDispatch = useRecipeDispatch();
  const { recipes } = useRecipeSelector((state: RootState) => state.recipes);
  const [user] = useAuthState(auth);

  const handleSaveRecipe = async (recipeId: number, recipe: Recipe) => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    dispatch(postSaveRecipe(recipeId, recipe, user));
  };


  // const handleDeleteRecipe = async (recipeId: number, recipe: Recipe) => {
  //   if (!user) {
  //     console.error('User not logged in');
  //     return;
  //   }

  //   dispatch(deleteRecipe(recipeId, user));
  // };

  // const [user] = useAuthState(auth);
  // const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // dispatch(getRecipeRandom());
  }, [dispatch]);

  // const handleSaveRecipe = (recipeId: number, recipe: Recipe) => {
  //   postSaveRecipe(dispatch, recipeId, recipe, user);
  // };

  // const handleSaveRecipe = async (recipeId: number, recipe: Recipe) => {
  //   dispatch(useSaveRecipeDispatch)
  // };


  return (
    <div>
      {!Array.isArray(recipes) ? '' : recipes.map((r: any) => (
        <div key={r.id}>
          <button onClick={() => handleSaveRecipe(r.id, r)}>Save recipe</button>
          <h2>{r.title}</h2>
          <img src={r.image} alt={r.title} />
          <h3>Ingredients:</h3>
          <ul>
            {r.extendedIngredients.map((i: any) => (
              <li key={`${r.id}-${i.id}`}>{i.original}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <div dangerouslySetInnerHTML={{ __html: r.instructions }}></div>
        </div>
      ))}
    </div>
  );
};

export default Results;
